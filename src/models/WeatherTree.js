import { useEffect, useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import vertexShader from './shader/tree/vertexShader.glsl'
import fragmentShader from './shader/tree/fragmentShader.glsl'
import { useGLTF } from '@react-three/drei'

export default function Tree(props) {
  const { nodes, materials } = useGLTF('model/tree.glb')
  const leafMaterialRef = useRef()
  const trunkMaterial = useMemo(() => materials.trunk.clone(), [materials])
  const trunkShaderRef = useRef()

  const geometry = nodes.Cube.geometry
  geometry.setAttribute(
    'windWeight',
    geometry.attributes.color_1
  )

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uProgress: { value: props.progress },
    uWindStrength: { value: props.windSpeed.current },
    uWindDir: { value: props.windDir.current },
  }), [])

  useFrame((state) => {
    const time = state.clock.elapsedTime

    if (trunkShaderRef.current) {
      trunkShaderRef.current.uniforms.uTime.value = time
      trunkShaderRef.current.uniforms.uWindStrength.value = props.windSpeed.current
      trunkShaderRef.current.uniforms.uWindDir.value = props.windDir.current
    }

    if (leafMaterialRef.current) {
      leafMaterialRef.current.uniforms.uTime.value = time
      leafMaterialRef.current.uniforms.uWindStrength.value = props.windSpeed.current
      leafMaterialRef.current.uniforms.uWindDir.value = props.windDir.current
    }
  })

  useEffect(() => {
    trunkMaterial.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 }
      shader.uniforms.uWindStrength = { value: 0 }
      shader.uniforms.uWindDir = { value: 0 }

      shader.vertexShader =
        `
      uniform float uTime;
      uniform float uWindStrength;
      uniform float uWindDir;

      attribute vec4 windWeight;
      ` + shader.vertexShader

      shader.vertexShader = shader.vertexShader.replace(
        '#include <begin_vertex>',
        `
      #include <begin_vertex>

      float weight = windWeight.r;
      
      float branchWind =
      sin( uTime * 1.5 + position.y * 0.25 ) * 0.05 * uWindStrength * weight;

      vec2 windDir = vec2( cos(uWindDir), sin(uWindDir));

      transformed.x += windDir.x * branchWind;
      transformed.z += windDir.y * branchWind;
      `
      )

      trunkShaderRef.current = shader
    }

    trunkMaterial.needsUpdate = true
  }, [trunkMaterial])


  return (
    <group>
      <group position={[-3, 0, -3]} scale={0.8} rotation-y={0.1}>
        <group position={[0, -0.199, 0]}>
          <mesh castShadow receiveShadow
            geometry={nodes.Cube.geometry}
            material={trunkMaterial}
          />

          <mesh castShadow receiveShadow scale={1}
            geometry={nodes.Cube_1.geometry}
          >
            <shaderMaterial
              ref={leafMaterialRef}
              vertexColors
              uniforms={uniforms}
              vertexShader={vertexShader}
              fragmentShader={fragmentShader}
            />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('model/tree.glb')