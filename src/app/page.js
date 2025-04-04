"use client"

import { Canvas } from '@react-three/fiber'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { param } from '@/lib/param'
import World from '@/components/World'
import Link from 'next/link'

function App() {
  const [count, setCount] = useState(param.count)
  const [index, setIndex] = useState(param.index)
  const [dewyHovered, setDewyHover] = useState(false)
  const [MMhovered, setMMhover] = useState(false)
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
        <World index={index} dewy_hovered={dewyHovered} MM_hovered={MMhovered} skillActive={updateSkillVisible} />
      </Canvas>

      {count === 1 && <a href='https://www.linkedin.com/in/soonyoung-park/' target='_blank' style={{ cursor: 'auto' }}>
        <div className='linkedIn fixed top-0 left-0 w-[25vw] h-[25vh]'>
        </div>
      </a>}

      {count === 3 &&
        <Link href={'/dewy-days'}>
          <div className='fixed top-[25%] left-[25%] w-[50vw] h-[50vh]'
            onPointerOut={() => setDewyHover(false)}
            onPointerOver={() => setDewyHover(true)}>
          </div>
        </Link>}

      {count === 4 &&
        <Link href={'/art'}>
          <div className='fixed top-[40%] left-[25%] w-[50vw] h-[20vh]'>
          </div>
        </Link>}

      {count === 6 &&
        <Link href={'/multicultural-museum'}>
          <div className='fixed top-[30%] left-[25%] w-[50vw] h-[40vh]'
            onPointerOut={() => setMMhover(false)}
            onPointerOver={() => setMMhover(true)}>
          </div>
        </Link>}

      <div>
        <div className='select-none text-center fixed left-[50%] bottom-3 transform -translate-x-1/2'>
          <p className='page-nav font-semibold' style={{ fontSize: '1.2rem' }}>{count} / 6</p>
          <p className='text-gray-500'>© 2025 Soonyoung</p>
        </div>
        <FontAwesomeIcon icon={faArrowRight} className='arrow-icon right-0' onClick={next} />
        <FontAwesomeIcon icon={faArrowLeft} className='arrow-icon left-0' onClick={previous} />
      </div>
    </div>
  )
}

export default App