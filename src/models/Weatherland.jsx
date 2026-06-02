import { useEffect, useRef, useState } from "react"
import WorldGround from "./WeatherGround"
import { Streetlight } from "./WeatherStreetlight"
import { Windvane } from "./WeatherWindvane"
import Grass from "./WeatherGrass"
import Pond from "./WeatherPond"
import Tree from "./WeatherTree"
import { useFrame } from "@react-three/fiber"

function Weatherland(props) {
  const scaleFactor = 7
  const progress = 0.3
  const [hovered, setHover] = useState(false)
  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  const href = () => { window.open("https://weather-land.vercel.app/", "_blank") }

  const windSpeed = 2
  const gustsSpeed = 10
  const time = useRef(0)
  const gustStrength = useRef(0)
  const direction = useRef(0)
  const speed = useRef(0)
  const finalSpeed = useRef(0)

  useFrame((_, delta) => {
    time.current += delta

    let targetSpeed = hovered ? gustsSpeed : windSpeed
    let targetDirection = hovered ? Math.PI * 0.1 : Math.PI * 0.8

    gustStrength.current *= 0.95

    const sway = Math.sin(time.current * 2) * (speed.current * 0.001)

    direction.current += (targetDirection - direction.current) * 0.05 + sway
    speed.current += (targetSpeed - speed.current) * 0.05
    
    finalSpeed.current = speed.current + gustStrength.current
  }, [])

  return (
    <group {...props}
      //onClick={href}
      onPointerOut={() => setHover(false)}
      onPointerOver={() => setHover(true)}
    >
      <WorldGround scale={scaleFactor} />
      <Streetlight scale={scaleFactor} hovered={hovered} />
      <Windvane scale={scaleFactor} hovered={hovered} windSpeed={finalSpeed} windDir={direction} />
      <Grass scale={scaleFactor} hovered={hovered} windSpeed={finalSpeed} windDir={direction} progress={progress}/>
      <Pond scale={scaleFactor} hovered={hovered} windSpeed={finalSpeed} windDir={direction} progress={progress}/>
      <Tree hovered={hovered} windSpeed={finalSpeed} windDir={direction} progress={progress} />
    </group>
  )
}

export default Weatherland
