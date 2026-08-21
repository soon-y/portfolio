import * as THREE from 'three'
import { useMemo, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import vertexShader from './shader/pond/vertexShader.glsl'
import fragmentShader from './shader/pond/fragmentShader.glsl'

export default function Pond({ scale, progress, windDir, windSpd }) {
  const materialRef = useRef()
  const waveOffset = useRef(0)

  const uniforms = useMemo(() => ({
    uWindDir: { value: new THREE.Vector2(Math.cos(windDir.current), Math.sin(windDir.current)) },
    uWindSpeed: { value: windSpd.current },
    uProgress: { value: 0 },
    uWaveOffset: { value: 0 },
  }), [])

  useFrame((_, delta) => {
    delta = Math.min(delta, 0.05)

    const mat = materialRef.current
    if (!mat) return

    waveOffset.current += delta * THREE.MathUtils.lerp(
      0.4,
      0.9,
      windSpd.current / 15
    )

    mat.uniforms.uWaveOffset.value = waveOffset.current
    mat.uniforms.uProgress.value = progress
    mat.uniforms.uWindDir.value = new THREE.Vector2(Math.cos(windDir.current), Math.sin(windDir.current))
    mat.uniforms.uWindSpeed.value = windSpd.current
  })

  return (
    <mesh rotation-x={-Math.PI / 2} position={[0, -0.1, -1]}>
      <planeGeometry args={[scale * 2, scale * 2, 256, 256]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
      />
    </mesh>
  )
}