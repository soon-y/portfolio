"use client"

import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import Link from 'next/link'
import './styles.css'
import { useEffect, useState } from 'react'

export default function Log() {
  const scale = Array.from({ length: 500 }, () => 0.5 + Math.random() * 4)
  const [category, setCategory] = useState(['All'])
  const [selected, setSelected] = useState(0)
  const contents = [
    { title: 'Multicultural Museum', name: 'MMK', tag: ['UI/UX', 'E-commerce', 'React', 'Nest.js', 'TypeScript',] },
    { title: 'Dewy Days', name: 'dewyDays', tag: ['UI/UX', 'Next.js', 'TypeScript', 'Prototype'] },
    { title: 'Caregem', name: 'caregem', tag: ['UI/UX', 'Vue', 'TypeScript', 'Prototype'] },
    { title: 'art', name: 'art', tag: ['UI/UX', 'Next.js', 'TypeScript', 'Prototype'] },
    { title: 'autoMode', name: 'autoMode', tag: ['Java', 'DesignPattern', 'Prototype'] },
    { title: 'scheduleCleaning', name: 'scheduleCleaning', tag: ['Java', 'DesignPattern', 'Prototype'] },
    { title: 'A village', name: 'village', tag: ['Java', 'DesignPattern'] },
    { title: 'Snake Game', name: 'soonakeGame', tag: ['Three.js', 'JavaScript', 'Blender'] },
    { title: 'A billiard simulation', name: 'billiardSimulation', tag: ['Three.js', 'JavaScript', 'Blender'] },
  ]
  const [filteredContents, setFilteredContents] = useState(contents)

  useEffect(() => {
    setCategory(prevCategories => {
      const uniqueCategories = new Set(prevCategories)

      for (const item of contents) {
        uniqueCategories.add(item.tag[0])
      }

      return Array.from(uniqueCategories)
    })
  }, [])

  useEffect(() => {
    if (category[selected] === 'All') {
      setFilteredContents(contents)
    } else {
      setFilteredContents(
        contents.filter(item => item.tag[0] === category[selected])
      )
    }
  }, [selected, category])

  return (
    <div>
      <Canvas style={{ position: 'fixed' }} camera={{
        fov: 45,
        position: [0, 0, 0]
      }}
        gl={{ stencil: true }}>
        <ambientLight intensity={0.1} />
        <Environment preset="sunset" />
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[12, 12, 20]} speed={0.1} />
      </Canvas>

      <div className='wrapper relative'>
        <Link href={'/'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>

        <div className='pt-14 px-6 flex gap-4 cursor-pointer'>
          {category.map((el, i) => (
            <div
              key={i}
              className={`border px-4 py-2 rounded-full duration-500 ${selected === i ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => setSelected(i)}>{el}
            </div>
          ))}
        </div>

        <div className='p-6 grid grid-cols-2 md:grid-cols-3 lg:md:grid-cols-4 gap-2'>
          {filteredContents.map((el, i) => (
            <Link key={i} href={`/log/${el.name}`}>
              <div className='cursor-pointer flex flex-col ease-in-out group'>
                <div className='w-full aspect-square overflow-hidden'>
                  <div
                    className="w-full aspect-square bg-cover bg-no-repeat bg-center transition-transform group-hover:scale-110 duration-500 ease-in-out"
                    style={{
                      backgroundImage: `url(/${el.name}/thumbnail.jpg)`
                    }}
                  ></div>
                </div>

                <div className='duration-500 opacity-80 group-hover:opacity-100'>
                  <h2 className='pt-4 text-2xl'>{el.title}</h2>
                  <div className=' flex gap-x-2 pb-8 flex-wrap pt-1'>
                    {el.tag.map((item, j) => (
                      <p key={j}>#{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}