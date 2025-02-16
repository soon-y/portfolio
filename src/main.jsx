
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import './index.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <CanvasRef />
  </>,
)

function CanvasRef() {
  return (
    <Canvas shadows camera={{
      fov: 45,
      position: [0, 0, 0]
    }}
      gl={{ stencil: true }}>
      <App />
    </Canvas>
  )
} 