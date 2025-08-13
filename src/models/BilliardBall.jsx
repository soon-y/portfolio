import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import { useEffect, useState, useRef } from 'react'

function BilliardBall(props) {
  const colorMap = useLoader(TextureLoader, '/billiardSimulation/Ball13.jpg')
  const [hovered, setHover] = useState(false)
  const ref = useRef(null)

  useFrame((_, delta) => {
    if (ref.current && hovered) {
      ref.current.rotation.x += delta * 15
    }else {
      ref.current.rotation.x += delta * 0.1
    }
  })

  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

  return (
    <Float floatIntensity={0.1} rotationIntensity={0.1}>
      <group {...props} dispose={null} ref={ref}
        rotation={[0, -Math.PI / 2.1, 0]}
        onPointerOut={() => setHover(false)}
        onPointerOver={() => setHover(true)}>
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial map={colorMap} />
        </mesh>
      </group>
    </Float>
  )
}

export default BilliardBall