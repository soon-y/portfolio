"use client"

import { Canvas } from '@react-three/fiber'
import WorldDebug from '@/components/WorldDebug'

function App() {
  return (
    <div>
      <Canvas shadows camera={{ fov: 45 }}>
        <WorldDebug />
      </Canvas>
    </div>
  )
}

export default App