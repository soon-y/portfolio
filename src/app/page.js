"use client"

import { Canvas } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { param } from '@/lib/param'
import World from '@/components/World'
import Link from 'next/link'
import Loader from '@/components/Loader'

function App() {
  const [pgNum, setPgNum] = useState(param.pgNum)
  const [index, setIndex] = useState(param.index)
  const [dewyHovered, setDewyHover] = useState(false)
  const [MMhovered, setMMhover] = useState(false)
  const [skillVisible, setSkillVisible] = useState(false)

  const updateSkillVisible = (bool) => {
    setSkillVisible(bool)
  }

  const next = () => {
    if (!skillVisible) {
      setPgNum(num => num % 6 + 1)
      setIndex(num => num + 1)
      param.pgNum = param.pgNum % 6 + 1
      param.index = param.index + 1
    }
  }

  const previous = () => {
    if (!skillVisible) {
      setPgNum(num => num > 1 ? num - 1 : 6)
      setIndex(num => num - 1)
      param.pgNum = pgNum > 1 ? pgNum - 1 : 6
      param.index = param.index - 1
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: next,
    onSwipedRight: previous,
    preventScrollOnSwipe: true,
    trackMouse: true,
    enabled: !skillVisible,
  })

  return (
    <div {...swipeHandlers}>
      <Canvas shadows camera={{ fov: 45, position: [0, 0, 0] }}
        gl={{ stencil: true }}
      >
        <Suspense fallback={<Loader />}>
          <World index={index} dewy_hovered={dewyHovered} MM_hovered={MMhovered} skillActive={updateSkillVisible} />
        </Suspense>
      </Canvas>

      {pgNum === 1 && <a href='https://www.linkedin.com/in/soonyoung-park/' target='_blank' style={{ cursor: 'auto' }}>
        <div className='linkedIn fixed top-0 left-0 w-[25vw] h-[25vh]'>
        </div>
      </a>}

      {pgNum === 3 &&
        <Link href={'/dewyDays'}>
          <div className='fixed top-[25%] left-[25%] w-[50vw] h-[50vh]'
            onPointerOut={() => setDewyHover(false)}
            onPointerOver={() => setDewyHover(true)}>
          </div>
        </Link>}

      {pgNum === 4 &&
        <Link href={'/log'}>
          <div className='fixed top-[40%] left-[25%] w-[50vw] h-[20vh]'>
          </div>
        </Link>}

      {pgNum === 5 &&
        <Link href={'/MMK'}>
          <div className='fixed top-[30%] left-[25%] w-[50vw] h-[40vh]'
            onPointerOut={() => setMMhover(false)}
            onPointerOver={() => setMMhover(true)}>
          </div>
        </Link>}
      <div>
        <div className='select-none text-center fixed left-[50%] bottom-3 transform -translate-x-1/2'>
          <p className='page-nav font-semibold' style={{ fontSize: '1.2rem' }}>{pgNum} / 6</p>
          <p className='text-gray-500'>© 2025 Soonyoung</p>
        </div>
        <ArrowLeft size={72} color='white' className='arrow-icon left-0' onClick={previous} />
        <ArrowRight size={72} color="white" className='arrow-icon right-0' onClick={next} />
      </div>
    </div>
  )
}

export default App