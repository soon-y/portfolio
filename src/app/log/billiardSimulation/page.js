"use client"

import { Suspense } from 'react'
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import Link from 'next/link'
import BilliardBall from "@/models/BilliardBall.jsx"
import '../styles.css'
import { Code2, LinkIcon } from 'lucide-react'

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
        <Environment preset="forest" />
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[10, 10, 1]} speed={0.1} />
        <Suspense fallback={null}>
          <group onClick={() => {
            window.open("https://a-billiard-simulation.vercel.app/", "_blank")
          }}>
            <BilliardBall position={[
              ratio > 1 ? -ratio * 2 : 0,
              ratio > 1 ? 0 : (1 - ratio) * 4,
              -10]}
              scale={ratio > 1 ? 1.4 : (ratio) * 1.6} />
          </group>
        </Suspense>
      </Canvas>

      <div className='wrapper'>
        <Link href={'/log'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>

        <div id='first' className='section-wo flex-container billiard'>
          <div className='left-side'></div>
          <div className='right-side'>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-4'>
                <a href='https://github.com/soon-y/aBilliardSimulation/tree/%26a' target="_blank">
                  <Code2 />
                </a>
                <a href='https://a-billiard-simulation.vercel.app/'>
                  <LinkIcon />
                </a>
              </div>

              <p>
                This project was first implemented in <em>Introduction of Computer Graphics</em> class,
                and has been further developed in terms of design.
                It was programmed in JavaScript and used <b>Three.js</b>. 
                A billiard table, pool billiard cues and holder were designed in <b>Blender</b>.
                The physics of the billiard simulation
                referenced <a href="https://en.wikipedia.org/wiki/Elastic_collision#One-dimensional_Newtonian" target="_blank">Elastic Collision.</a>
              </p>
              <ul>
                <li>
                  Click the “Reset Speed” button to assign new velocity vector to each ball.
                </li>
                <li>
                  When rebounding off the cushion, the velocity of each ball drops by 20%.
                </li>
                <li>
                  Due to friction on the pool table, each ball&lsquo;s velocity drops by 20% every second.
                </li>
                <li>
                  The position, intensity, angle and color of the light, as well as the velocity volume, can be
                  adjusted in <a target="_blank" href="https://lil-gui.georgealways.com/">debug UI</a>.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}