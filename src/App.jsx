import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
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
  const [skillVisible, setSkillVisible] = useState(false)

  const updateSkillVisible = (bool) => {
    setSkillVisible(bool);
  }

  const next = () => {
    if (!skillVisible) {
      setCount(num => num % 6 + 1)
      setIndex(num => num + 1)
      param.count = count + 1
      param.index = param.index + 1
    }
  }
  const previous = () => {
    if (!skillVisible) {
      setCount(num => num > 1 ? num - 1 : 6)
      setIndex(num => num - 1)
      param.count = count - 1
      param.index = param.index - 1
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: previous,
    preventScrollOnSwipe: true,
    trackMouse: true
  })

  return (
    <div {...swipeHandlers}>
      <Canvas shadows camera={{
        fov: 45,
        position: [0, 0, 0]
      }}
        gl={{ stencil: true }}>
        <World index={index} dewy_hovered={hovered} skillActive={updateSkillVisible} />
      </Canvas>

      {count === 1 && <a href='https://www.linkedin.com/in/soonyoung-park/' target='_blank' style={{ cursor: 'auto' }} className='linkedIn'>
        <div style={{ backgroundColor: 'transparent', width: '25%', height: '25%', position: 'fixed', top: 0, left: 0 }}>
        </div>
      </a>}

      {count === 3 &&
        <Link to={"/dewy-days"}>
          <div style={{ backgroundColor: 'transparent', width: '50%', height: '80%', position: 'fixed', top: '25%', left: '25%' }}
            onPointerOut={() => setHover(false)}
            onPointerOver={() => setHover(true)}>
          </div>
        </Link>}

      {count === 4 &&
        <Link to={"/art"}>
          <div style={{ backgroundColor: 'transparent', width: '50%', height: '80%', position: 'fixed', top: '25%', left: '25%' }}>
          </div>
        </Link>}

      <div>
        <div className='nav page-nav'>
          <p style={{ fontSize: '1.2rem', fontWeight: 500 }}>{count} / 6</p>
          <p style={{ color: 'gray' }}>© 2025 Soonyoung</p>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' style={{ right: 0 }} onClick={next} />
        <FontAwesomeIcon icon={faArrowLeft} className='arrow-icon' style={{ left: 0 }} onClick={previous} />
      </div>
    </div>
  )
}

export default App
