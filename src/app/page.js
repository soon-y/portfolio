"use client"

import { Canvas } from '@react-three/fiber'
import { useState, Suspense } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { param } from '@/lib/param'
import World from '@/components/World'
import Link from 'next/link'
import Loader from '@/components/Loader'
// import { OrbitControls } from '@react-three/drei'

function App() {
  const thisYear = new Date().getFullYear()
  const [pgNum, setPgNum] = useState(param.pgNum)
  const [index, setIndex] = useState(param.index)
  const [skillVisible, setSkillVisible] = useState(false)
  const totalPg = 4

  const updateSkillVisible = (bool) => {
    setSkillVisible(bool)
  }

  const next = () => {
    if (!skillVisible) {
      setPgNum(num => num % totalPg + 1)
      setIndex(num => num + 1)
      param.pgNum = param.pgNum % totalPg + 1
      param.index = param.index + 1
    }
  }

  const previous = () => {
    if (!skillVisible) {
      setPgNum(num => num > 1 ? num - 1 : totalPg)
      setIndex(num => num - 1)
      param.pgNum = pgNum > 1 ? pgNum - 1 : totalPg
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
        {/* <OrbitControls /> */}
        <Suspense fallback={<Loader />}>
          <World index={index} skillActive={updateSkillVisible} />
        </Suspense>
      </Canvas>

      {pgNum === 3 &&
        <Link href={'/log'}>
          <div className='fixed top-[40%] left-[25%] w-[50vw] h-[20vh]'>
          </div>
        </Link>}

      <div>
        <div className='select-none text-center fixed left-[50%] bottom-3 transform -translate-x-1/2'>
          <p className='page-nav font-semibold' style={{ fontSize: '1.2rem' }}>{pgNum} / {totalPg}</p>
          <p className='text-gray-500'>© {thisYear} Soonyoung</p>
        </div>
        <ArrowLeft size={72} color='white' className='arrow-icon left-0' onClick={previous} />
        <ArrowRight size={72} color="white" className='arrow-icon right-0' onClick={next} />
      </div>
    </div>
  )
}

export default App