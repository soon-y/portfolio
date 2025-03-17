import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import World from './World.jsx'
import { param } from './param.js'
import './App.css'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(param.count)
  const [index, setIndex] = useState(param.index)
  const [hovered, setHover] = useState(false)
  
  const next = () => {
    setCount(num => num % 6 + 1)
    setIndex(num => num + 1)
    param.count = count + 1
    param.index = param.index + 1
  }
  const previous = () => {
    setCount(num => num - 1 < 1 ? 6 : num - 1)
    setIndex(num => num - 1)
    param.count = count - 1
    param.index = param.index - 1
  }

   return (
    <>
      <Canvas shadows camera={{
        fov: 45,
        position: [0, 0, 0]
      }}
        gl={{ stencil: true }}>
        <World index={index} dewy_hovered={hovered}/>
      </Canvas>

      {count === 1 && <a href='https://www.linkedin.com/in/soonyoung-park/' target='_blank' style={{cursor: 'auto'}}>
        <div style={{backgroundColor:'transparent', width: '25%', height: '25%', position: 'fixed', top: 0, left: 0}}>
        </div>
      </a>}

      {count === 3 && 
      <Link to={"/dewy-days"}>
        <div style={{backgroundColor:'transparent', width: '50%', height: '80%', position: 'fixed', top: '25%', left: '25%'}}
        onPointerOut={() => setHover(false)}
        onPointerOver={() => setHover(true)}>
        </div>
      </Link>}

      {count === 4 && 
      <Link to={"/art"}>
        <div style={{backgroundColor:'transparent', width: '50%', height: '80%', position: 'fixed', top: '25%', left: '25%'}}>
        </div>
      </Link>}

      <div>
        <p className='nav page-nav' style={{ transform: 'translate(-50%, -50%)' }}>{count} / 6</p>
        <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' style={{ right: 0 }} onClick={next} />
        <FontAwesomeIcon icon={faArrowLeft} className='arrow-icon' style={{ left: 0 }} onClick={previous} />
      </div>
    </>
    )
}

export default App
