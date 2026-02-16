"use client"

import { Canvas } from '@react-three/fiber'
import { Sparkles } from '@react-three/drei'
import Link from 'next/link'
import { Calendar, Code2 } from 'lucide-react'
import '../styles.css'
import { useWindowRatio } from '@/utils/window'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { getRelatedProjects, getFirstTagByPathname } from '@/lib/param'

export default function Village() {
  const scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4)
  const ratio = useWindowRatio()
  const [url, setUrl] = useState("")
  const [projects, setProjects] = useState("")

  useEffect(() => {
    setUrl(window.location.pathname)
  }, [])

  useEffect(() => {
    if (url) setProjects(getRelatedProjects(url))
  }, [url])

  return (
    <div>
      <Canvas style={{ position: 'fixed' }} camera={{
        fov: 45,
        position: [0, 0, 0]
      }}
        gl={{ stencil: true }}>
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[10, 10, 1]} speed={0.1} />
      </Canvas>

      <div className='wrapper relative village'>
        <Link href={'/log'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>
        <p className='top z-10 mix-blend-difference fixed bottom-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}><a href='#first'>Top</a></p>

        <div id='first' className='section-wo flex-container'>
          <div className='left-side p-6 w-full py-20 flex flex-col gap-4' style={{ textAlign: 'left', paddingLeft: ratio > 1 ? '7rem' : '2rem' }}>
            <h2 className='text-4xl village-title'>A village</h2>
            <p className='font-semibold'>#Java #DesignPattern #SoftwareConstruction</p>
            <div className='flex gap-2 cursor-pointer'>
              <a href='https://github.com/soon-y/village' target='_blank'>
                <Code2 />
              </a>
            </div>
            <div className='flex gap-2'>
              <Calendar strokeWidth={1} />
              <p>03.2021 to 06.2021</p>
            </div>
          </div>

          <div className='right-side'>
            <p>
              In <em>Sofeware Construction</em> class, I developed drawing a doamin using Java, Java AWS and Swing.
              It displays background, houses, streetlights on JFrame depending on the user&lsquo;s input.
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-16'>
          <div>
            <h2 className='text-center text-2xl py-2'>UML Diagram</h2>
            <a href="/village/uml.jpg" target="_blank">
              <Image width={1284} height={1805} className='image' src="/village/uml.jpg" alt="UML diagram" />
            </a>
          </div>

          <div>
            <h2 className='text-center text-2xl py-2'>Demo Video</h2>
            <video className='video' controls>
              <source src="/village/demo.mp4" type="video/mp4" />
              Your browser does not support HTML video.
            </video>
          </div>
        </div>
      </div>

      {projects.length > 0 &&
        <div className='p-8 relative'>
          <p>More Projects of <span className='font-semibold'>{getFirstTagByPathname(url)}</span></p>
          <div className='py-4 grid grid-cols-1 lg:md:grid-cols-3 gap-4'>
            {projects.map((el, i) => (
              <div key={i} className='pointer-cursor opacity-80 hover:opacity-100 duration-500 group'>
                <Link key={i} href={`/log/${el.name}`}>
                  <div className='w-full aspect-2/1 overflow-hidden'>
                    <div
                      className="w-full aspect-2/1 bg-cover bg-no-repeat bg-center transition-transform group-hover:scale-110 duration-500 ease-in-out"
                      style={{
                        backgroundImage: `url(/${el.name}/thumbnail.gif)`
                      }}
                    ></div>
                  </div>
                  <div className=' flex gap-x-2 flex-wrap pt-4'>
                    {el.tag.map((item, j) => (
                      <p key={j}>{item} {j !== el.tag.length - 1 ? '/' : ''} </p>
                    ))}
                  </div>
                  <p className='pb-4 pt-1 m-0' style={{ fontSize: '1.6rem', lineHeight: '1' }}>{el.title}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  )
}