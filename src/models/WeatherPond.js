import * as THREE from 'three'
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import vertexShader from './shader/pond/vertexShader.glsl'
import fragmentShader from './shader/pond/fragmentShader.glsl'

export default function Pond(props) {
  const materialRef = useRef()

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uWindDir: { value: new THREE.Vector2(Math.cos(props.windDir.current), Math.sin(props.windDir.current)) },
    uWindSpeed: { value: props.windSpeed.current },
    uProgress: { value: props.progress },
  }), [])

  useFrame((_, delta) => {
    const mat = materialRef.current
    if (!mat) return

    mat.uniforms.uTime.value += delta
    mat.uniforms.uWindSpeed.value = props.windSpeed.current
    mat.uniforms.uWindDir.value.set(Math.cos(props.windDir.current), Math.sin(props.windDir.current))
  })

  return (
    <>
      <mesh rotation-x={-Math.PI / 2} position={[0, 0, -1]}>
        <circleGeometry args={[props.scale, 256, Math.PI, Math.PI]} />
        <shaderMaterial
          ref={materialRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent
        />
      </mesh>
    </>
  )
}