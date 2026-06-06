import { useEffect, useRef, useState } from "react"
import WorldGround from "./WeatherGround"
import { Streetlight } from "./WeatherStreetlight"
import { Windvane } from "./WeatherWindvane"
import Grass from "./WeatherGrass"
import Pond from "./WeatherPond"
import Tree from "./WeatherTree"
import { useFrame } from "@react-three/fiber"
import * as THREE from 'three'

function Weatherland(props) {
  const scaleFactor = 7
  const [progress, setProgress] = useState(0.3)
  const [hovered, setHover] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  const href = () => { window.open("https://weather-land.vercel.app/", "_blank") }

  const timeRef = useRef(0)
  const windSpeedRef = useRef(0)
  const windDirRef = useRef(0)
  const finalDirRef = useRef(0)
  const targetProgress = useRef(0.3)

  useEffect(() => {
    targetProgress.current = hovered ? 0.25 : 0.3
  }, [hovered])

  useFrame((_, delta) => {
    setProgress(prev =>
      THREE.MathUtils.lerp(
        prev,
        targetProgress.current,
        delta * 5
      )
    )

    timeRef.current += delta

    const targetDirection = hovered ? Math.PI * 0.5 : Math.PI * 0.4
    const targetSpeed = hovered ? 50 : 5

    windDirRef.current += (targetDirection - windDirRef.current) * 0.1
    windSpeedRef.current += (targetSpeed - windSpeedRef.current) * 0.1

    const sway = Math.sin(timeRef.current * 2) * (windSpeedRef.current * 0.001)
    finalDirRef.current = windDirRef.current + sway
  })

  const lightPos = new THREE.Vector3([0, 10, 0])
  const targetPos = new THREE.Vector3([0, 0, 0])

  const lightDir = new THREE.Vector3()
  lightDir.subVectors(targetPos, lightPos).normalize()

  return (
    <group {...props}
      onClick={href}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
    >
      <WorldGround scale={scaleFactor} />
      <Streetlight scale={scaleFactor} hovered={hovered} />
      <Windvane scale={scaleFactor} windSpd={windSpeedRef} windDir={finalDirRef} />
      <Grass scale={scaleFactor} windSpd={windSpeedRef} windDir={finalDirRef} progress={progress} lightDir={lightDir} />
      <Pond scale={scaleFactor} windSpd={windSpeedRef} windDir={finalDirRef} progress={progress} lightDir={lightDir} />
      <Tree windSpd={windSpeedRef} windDir={finalDirRef} progress={progress} />
    </group>
  )
}

export default Weatherland
