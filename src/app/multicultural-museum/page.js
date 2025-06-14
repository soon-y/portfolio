"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import { param } from '@/lib/param'
import Link from 'next/link'
import Mobile from "@/models/Mobile"
import Multi from "@/models/Multi.jsx"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './styles.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function MMdesc() {
  const [ratio, setRatio] = useState(1)
  const scale = Array.from({ length: 500 }, () => 0.5 + Math.random() * 4)
  const prototype = useRef(null)
  const logo = useRef(null)

  useGSAP(() => {
    if ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
      gsap.utils.toArray(['.section', '.section-img', '.section-wo']).forEach((triggerEl) => {
        ScrollTrigger.create({
          trigger: triggerEl,
          start: 'top top',
          end: 'bottom top',
          snap: {
            snapTo: 1,
            duration: 1,
            ease: "power2.inOut",
          }
        })
      })
    } else {
      gsap.utils.toArray(['.section', '.section-img', '.section-wo']).forEach((triggerEl) => {
        ScrollTrigger.create({
          trigger: triggerEl,
          start: 'top bottom',
          end: 'bottom bottom',
          snap: {
            snapTo: 1,
            duration: 1,
            ease: "power2.inOut",
          }
        })
      })
    }

    const sec1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section1',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec1.from('.top', { opacity: 0 }, 0)
    sec1.from('.img01', { y: '30%', opacity: 0 }, 0)

    const sec2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section2',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec2.from('.text2_0', { x: '10%', opacity: 0 }, 0)
      .from('.text2_1', { x: '20%', opacity: 0 }, 0)
      .from('.text2_2', { x: '20%', opacity: 0 }, 0)
      .from('.text2_3', { x: '20%', opacity: 0 }, 0)
      .from('.text2_4', { x: '20%', opacity: 0 }, 0)

    const sec3_1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3_1',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec3_1.from('.img03_1', { opacity: 0 }, 0)

    const sec3_2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3_2',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec3_2.from('.img03_2', { opacity: 0 }, 0)

    const sec6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section6',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec6.from('.img06_1', { y: '30%', opacity: 0 }, 0)
    sec6.from('.img06_2', { y: '30%', opacity: 0 }, 0)

    const sec7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section7',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec7.from('.img07_1', { y: '30%', opacity: 0 }, 0)
    sec7.from('.img07_2', { y: '30%', opacity: 0 }, 0)

    const sec8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section8',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec8.from('.img08_1', { y: '30%', opacity: 0 }, 0)
    sec8.from('.img08_2', { y: '30%', opacity: 0 }, 0)
  })

  useEffect(() => {
    const checkIfElementsAreLoaded = () => {
      if (logo.current && prototype.current) {
        const context = gsap.context(() => {
          const sec1 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section1',
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec1.to(logo.current.position, { y: 20 }, 0)

          const sec5 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section5',
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec5.to(prototype.current.position, { y: 0 })
        })
        return () => context.revert()
      } else {
        setTimeout(checkIfElementsAreLoaded, 100)
      }
    }
    checkIfElementsAreLoaded()
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
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.1} />
        <Environment preset="sunset" />
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[12, 12, 20]} speed={0.1} />
        <group ref={logo} onClick={() => {
          window.open("https://soonyoung.vercel.app/", "_blank")
        }}>
          <Multi scale={0.5} opacity={0} position={[
            ratio > 1 ? -ratio * 2.2 : 0,
            ratio > 1 ? 0 : 1 + (1 - ratio) * 4,
            ratio > 1 ? -10 : -14]} />
        </group>
        <group position={[0, -20, -7]} ref={prototype}>
          <Mobile
            rotation={[0, -Math.PI / 2, 0]}
            scale={1}
            color={param.magenta}
            src={"https://soonyoung.vercel.app/"}
            content={"iframe-time"} />
        </group>

      </Canvas>

      <div className='wrapper'>
        <Link href={'/'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>
        <p className='top z-10 mix-blend-difference fixed bottom-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}><a href='#first'>Top</a></p>

        <div id='first' className='section-wo flex-container'>
          <div className='left-side'></div>
          <div className='right-side'>
            <div className='desc mm'>
              <p>
                At the Multiculture Museum Korea, visitors can explore miniature landmarks, traditional costumes, and international currencies, offering a rich multicultural experience. <br/>
                The design features a regular hexagon, chosen for its natural stability and ability to expand, much like a honeycomb. 
                This shape symbolizes the globe, where different cultures connect and grow together. 
                The CMYK color model reflects the vibrant diversity of global traditions, while the connected vertices represent the intricate relationships and unity between cultures. <br/>
                Overall, the museum creates an immersive journey celebrating cultural exchange and harmony.
              </p>
            </div>
          </div>
        </div>

        <div className='section-img section1' style={{ backgroundColor: '#e4e4e4' }}>
          <Image src="/multicultural/m-logo.png" alt="Logo" width={3776} height={1621} priority className="w-full h-auto img01 web" />
          <Image src="/multicultural/m-logo-mobile.png" alt="Logo" width={2985} height={1621} priority className="w-full h-auto img01 mobile" />
        </div>

        <h1 className='text2_0 relative pt-12 pb-4 text-center text-3xl font-bold'>Logo Conception</h1>
        <div className='section section2 grid grid-rows-[1fr_1fr_1fr_1fr] md:grid-rows-[1fr_1fr] md:grid-cols-[1fr_1fr]'>
          <div className='relative w-[100vw] h-[25vh] md:w-[50vw] md:h-[50vh] overflow-hidden'>
            <Image src="/multicultural/hex.jpg" alt="Connection" sizes="100vh" priority fill className="concept object-cover object-center" />
            <h1 className="text2_1 absolute drop-shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
              Connection
            </h1>
          </div>
          <div className='relative w-[100vw] h-[25vh] md:w-[50vw] md:h-[50vh] overflow-hidden'>
            <Image src="/multicultural/globe.jpg" alt="Globe" sizes="100vh" priority fill className="concept object-cover object-center" />
            <h1 className="text2_2 absolute drop-shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
              Globe
            </h1>
          </div>
          <div className='relative w-[100vw] h-[25vh] md:w-[50vw] md:h-[50vh] overflow-hidden'>
            <Image src="/multicultural/support.jpg" alt="Support" sizes="100vh" priority fill className="concept object-cover object-center" />
            <h1 className="text2_3 absolute drop-shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
              Support
            </h1>
          </div>
          <div className='relative w-[100vw] h-[25vh] md:w-[50vw] md:h-[50vh] overflow-hidden'>
            <Image src="/multicultural/network.jpg" alt="Network" sizes="100vh" priority fill className="concept object-cover object-center" />
            <h1 className="text2_4 absolute drop-shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
              Network
            </h1>
          </div>
        </div>

        <div className='web section section3_1' style={{
          background: "url('./multicultural/color-bg.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <Image src="/multicultural/color.png" alt="Color" priority fill sizes="100vh" className="object-cover object-center img03_1" />
        </div>

        <div className='mobile section section3_2' style={{
          background: "url('./multicultural/color-mobile-bg.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <Image src="/multicultural/color-mobile.png" alt="Color" fill sizes="100vh" priority className="object-cover object-center  img03_2" />
        </div>

        <div className='section' style={{
          background: "url('./multicultural/pattern.gif')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}></div>

        <div className='section-wo section5'>
          <p className='stroke' style={{ textAlign: 'center' }}>Prototype <br/>in Progress</p>
        </div>

        <div className='section-img section6' style={{ backgroundColor: '#dcdddd' }}>
          <Image src="/multicultural/stationery.jpg" alt="stationery" width={5343} height={2294} priority className="w-full h-auto web img06_1" />
          <Image src="/multicultural/stationery-mobile.jpg" alt="stationery" width={2898} height={2294} priority className="w-full h-auto mobile img06_2" />
        </div>

        <div className='section-img section7' style={{ backgroundColor: '#c1c2c4' }}>
          <Image src="/multicultural/bag.png" alt="bag" width={4955} height={2222} priority className="w-full h-auto web img07_1" />
          <Image src="/multicultural/bag-mobile.png" alt="bag" width={2777} height={2222} priority className="w-full h-auto mobile img07_2" />
        </div>

        <div className='section-img section8' style={{ backgroundColor: '#a8a8a8' }}>
          <Image src="/multicultural/ticket.png" alt="ticket" width={3775} height={1884} priority className="w-full h-auto web img08_1" />
          <Image src="/multicultural/ticket-mobile.png" alt="ticket" width={2095} height={1884} priority className="w-full h-auto mobile img08_2" />
        </div>
      </div>
    </div>
  )
}