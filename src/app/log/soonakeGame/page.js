"use client"

import { Suspense } from 'react'
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import Link from 'next/link'
import '../styles.css'
import { Code2, LinkIcon } from 'lucide-react'
import Snake from '@/models/Snake'

export default function ArtDesc() {
  const [ratio, setRatio] = useState(1)
  const scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4)

  useEffect(() => {
    setRatio(window.innerWidth / window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleResize = () => {
    const newRatio = window.innerWidth / window.innerHeight
    setRatio(newRatio)
  }

  return (
    <div>
      <Canvas style={{ position: 'fixed' }} camera={{
        fov: 45,
        position: [0, 0, 0]
      }}
        gl={{ stencil: true }}>
        <ambientLight intensity={0.1} />
        <Environment preset="sunset" />
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[10, 10, 1]} speed={0.1} />
        <Suspense fallback={null}>
          <group>
            <Snake position={[
              ratio > 1 ? -ratio * 2 : 0,
              ratio > 1 ? 0 : (1 - ratio) * 6,
              -10]}
              scale={ratio > 1 ? 0.4 : (ratio) * 0.5} />
          </group>
        </Suspense>
      </Canvas>

      <div className='wrapper'>
        <Link href={'/log'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>

        <div id='first' className='section-wo flex-container soonake'>
          <div className='left-side'></div>
          <div className='right-side'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                <a href='https://github.com/soon-y/soonake-game' target="_blank">
                  <Code2 />
                </a>
                <a href='https://soonake-game.vercel.app/' target="_blank">
                  <LinkIcon />
                </a>
              </div>

              <p>
                This project was first implemented in <em>'Introduction to Computer Graphics'</em> class,
                and has been further developed in terms of design.
                It is programmed based on JavaScript with <b>Three.js</b>. The models
                are designed in <b>Blender</b>.
              </p>
              <ul>
                <li>
                  The head of Snake is initially placed at a random spot.
                </li>
                <li>
                  Snake is controlled by arrow keys / swiping gestures.
                </li>
                <li>
                  The snake moves forward one unit every 250ms.
                </li>
                <li>
                  When the snake obtain the target, its body grows by one unit and the position of the food changes.
                </li>
                <li>
                  The target is placed at a random spot where dosen't overlap with the snake's position.
                </li>
                <li>
                  The game ends when the snake hits a wall or intersects with its body.
                </li>
              </ul>
              <p>
                The user can select the concept of the background design: Easter / Summer / Halloween / Winter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}