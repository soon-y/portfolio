"use client"

import { useState, useEffect } from 'react'
import { Environment } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { param } from '@/lib/param'
import Logo from '@/components/Logo'
import Log from '@/models/Log'
import { Sphere } from '@react-three/drei'
import Weatherland from '@/models/Weatherland'

function WorldDebug() {
  const { camera, viewport } = useThree()
  const [radius, setRadius] = useState(viewport.aspect < 1.2 ? param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20 : param.diameter * 10)
  const step = Math.PI / 2

  useEffect(() => {
    if (viewport.aspect < 1.2) { setRadius(param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20) }
    else { setRadius(param.diameter * 10) }

    camera.position.set(20, 10, 10)
    camera.lookAt(0, 0, 0)
    console.log(camera.position)
  }, [viewport])

  return (
    <>
      <ambientLight intensity={0} />
      <Environment preset="sunset" />
      <OrbitControls makeDefault />

      <group>
        <Logo position={[Math.sin(step * 2) * radius, 0, Math.cos(step * 2) * radius]} />
        {/* <Snake position={[Math.sin(step * 1) * radius, 0, Math.cos(step * 1) * radius]} rotation-y={step * -1} />  */}
        <Log position={[Math.sin(step * 4) * radius, 0, Math.cos(step * 4) * radius]} rotation-y={step * -2} />

        {/* <Sphere args={[1, 32, 32]} position={[0, 0, 0]}>
          <meshStandardMaterial color="orange" />
        </Sphere> */}

        <Weatherland position={[0,-1,0]} rotation-y={step * 0.5}/>
      </group>
    </>
  )
}

export default WorldDebug