"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import { param } from '@/lib/param'
import Link from 'next/link'
import Mobile from "@/models/Mobile"
import Multi from "@/models/MMK.jsx"
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
          window.open("https://mmk-shop.vercel.app/", "_blank")
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
            src={"https://mmk-shop.vercel.app/"}
            content={"iframe"} />
        </group>

      </Canvas>

      <div className='wrapper mmk'>
        <Link href={'/'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>
        <p className='top z-10 mix-blend-difference fixed bottom-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}><a href='#first'>Top</a></p>

        <div id='first' className='section-wo flex-container'>
          <div className='left-side'></div>
          <div className='right-side'>
            <div className='desc'>
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

                <div className='relative w-[100vw] h-auto flex flex-col table dewy-opp py-20'>
                  <h3>User Story</h3>
                  <table>
                    <tbody>
                      <tr>
                        <th>Identifier</th>
                        <th label="User Story">User Story</th>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-1</td>
                        <td className="label" label="Story">
                          As a user, I want to set my weight and daily exercise time so that I can calculate my personalized daily hydration goal.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-2</td>
                        <td className="label" label="Story">
                          As a user, I want to enable Temperature Mode so that my hydration goal increases automatically when it is hot outside.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-3</td>
                        <td className="label" label="Story">
                          As a user, I want to set the capacity of my cup, tumbler, and bottle individually so that I can accurately track my water intake.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-4</td>
                        <td className="label" label="Story">
                          As a user, I want to switch between my containers so that I can quickly select the one I am using.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-5</td>
                        <td className="label" label="Story">
                          As a user, I want to log my water intake so that my daily progress updates in real time.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-6</td>
                        <td className="label" label="Story">
                          As a user, I want to see visual feedback such as water filling up and animations so that tracking my hydration feels engaging.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-7</td>
                        <td className="label" label="Story">
                          As a user, I want the system to use real-time weather and air quality data so that I can be reminded to drink more water in harsh conditions.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-8</td>
                        <td className="label" label="Story">
                          As a user, I want to review my past water intake in a timeline so that I can monitor my hydration habits over time.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">UST-8</td>
                        <td className="label" label="Story">
                          As a user, I want to set reminders so that I keep myself hydrated.
                        </td>
                      </tr>
                    </tbody>
                  </table>
        
                  <h3 className='pt-8'>Functional Requirements</h3>
                  <table>
                    <tbody>
                      <tr>
                        <th>Identifier</th>
                        <th>Priority</th>
                        <th>Requirement</th>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-1</td>
                        <td className="label" label="Prio.">Must</td>
                        <td className="label" label="Req.">
                          The system shall allow the user to input weight and daily exercise time to calculate a personalized daily hydration goal.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-2</td>
                        <td className="label" label="Prio.">Must</td>
                        <td className="label" label="Req.">
                          The system shall allow the user to enable or disable Temperature Mode, which adds 500 ml to the hydration goal when the temperature exceeds 30°C.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-3</td>
                        <td className="label" label="Prio.">Must</td>
                        <td className="label" label="Req.">
                          The system shall allow the user to set individual capacities for cup, tumbler, and bottle.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-4</td>
                        <td className="label" label="Prio.">Should</td>
                        <td className="label" label="Req.">
                          The system shall allow the user to switch between containers.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-5</td>
                        <td className="label" label="Prio.">Must</td>
                        <td className="label" label="Req.">
                          The system shall allow the user to log water intake by adjusting a slider to match the amount consumed.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-6</td>
                        <td className="label" label="Prio.">Should</td>
                        <td className="label" label="Req.">
                          The system shall display real-time progress updates and animations when water is logged.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-7</td>
                        <td className="label" label="Prio.">Must</td>
                        <td className="label" label="Req.">
                          The system shall record each water intake entry with timestamp, amount, and container type in the Timeline.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-8</td>
                        <td className="label" label="Prio.">Must</td>
                        <td className="label" label="Req.">
                          The system shall provide a Timeline view for reviewing historical water intake data.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-9</td>
                        <td className="label" label="Prio.">Must</td>
                        <td className="label" label="Req.">
                          The system shall retrieve real-time weather data and air quality (PM10/PM2.5) data.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-10</td>
                        <td className="label" label="Prio.">Should</td>
                        <td className="label" label="Req.">
                          The system shall notify the user to drink more water when PM levels are very poor or temperature is unusually high.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-11</td>
                        <td className="label" label="Prio.">Should</td>
                        <td className="label" label="Req.">
                          The system shall allow the user to set custom hydration reminders at specific times or intervals.
                        </td>
                      </tr>
                      <tr>
                        <td className="label" label="Id.">REQ-12</td>
                        <td className="label" label="Prio.">Should</td>
                        <td className="label" label="Req.">
                          The system shall notify the user at the set reminder times to encourage water intake.
                        </td>
                      </tr>
                    </tbody>
                  </table>
        
                  <h3 className='pt-8'>Use Case List</h3>
                  <table>
                    <tbody>
                      <tr>
                        <th className='whitespace-nowrap'>UC Id.</th>
                        <th>Use Case Name</th>
                        <th>Actor</th>
                        <th>actor's goal (what the actor intends to accomplish)</th>
                        <th>Related REQ</th>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc1">UC-1</td>
                        <td className="label" label="Name">CalculateDailyGoal</td>
                        <td className="label" label="Actor">User</td>
                        <td className="label" label="Goal">To determine a personalized hydration goal based on weight and exercise time</td>
                        <td className="label" label="Related">REQ-1</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc2">UC-2</td>
                        <td className="label" label="Name">EnableTemperatureMode</td>
                        <td className="label" label="Actor">User</td>
                        <td className="label" label="Goal">To adjust hydration goal automatically in hot weather</td>
                        <td className="label" label="Related">REQ-2</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc3">UC-3</td>
                        <td className="label" label="Name">SetContainerCapacities</td>
                        <td className="label" label="Actor">User</td>
                        <td className="label" label="Goal">To customize capacities for different drinking containers</td>
                        <td className="label" label="Related">REQ-3</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc4">UC-4</td>
                        <td className="label" label="Name">SwitchContainers</td>
                        <td className="label" label="Actor">User</td>
                        <td className="label" label="Goal">To quickly change the selected container for logging</td>
                        <td className="label" label="Related">REQ-4</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc5">UC-5</td>
                        <td className="label" label="Name">LogWaterIntake</td>
                        <td className="label" label="Actor">User</td>
                        <td className="label" label="Goal">To record the amount of water consumed and update progress</td>
                        <td className="label" label="Related">REQ-5, REQ-6</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc6">UC-6</td>
                        <td className="label" label="Name">ViewDailyProgress</td>
                        <td className="label" label="Actor">User</td>
                        <td className="label" label="Goal">To see visual feedback and progress toward daily hydration goal</td>
                        <td className="label" label="Related">REQ-6</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc7">UC-7</td>
                        <td className="label" label="Name">ViewTimeline</td>
                        <td className="label" label="Actor">User</td>
                        <td className="label" label="Goal">To review past water intake records by time and container</td>
                        <td className="label" label="Related">REQ-7, REQ-8</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc8">UC-8</td>
                        <td className="label" label="Name">RetrieveWeatherData</td>
                        <td className="label" label="Actor">System</td>
                        <td className="label" label="Goal">To obtain temperature and PM levels from Open Meteo API</td>
                        <td className="label" label="Related">REQ-9</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc9">UC-9</td>
                        <td className="label" label="Name">NotifyHarshConditions</td>
                        <td className="label" label="Actor">System</td>
                        <td className="label" label="Goal">To alert the user to drink more water in extreme weather or poor air quality</td>
                        <td className="label" label="Related">REQ-10</td>
                      </tr>
                      <tr>
                        <td className="label" label="Id." id="uc10">UC-10</td>
                        <td className="label" label="Name">SetHydrationReminders</td>
                        <td className="label" label="Actor">User</td>
                        <td className="label" label="Goal">To create scheduled reminders for drinking water</td>
                        <td className="label" label="Related">REQ-11, REQ-12</td>
                      </tr>
                    </tbody>
                  </table>
        
                  <h3 className='pt-8'>Activity Diagram</h3>
                  <p className='pb-4 text-center'>Change cup and its volume and add water intake (UC-3 to UC-6)</p>
                  <a href='/dewyDays/activity-diagram.png' target='_blank' className='image'>
                    <Image src={'/dewyDays/activity-diagram.png'} width={587} height={730} alt='activity diagram' />
                  </a>
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

        <div className='section-img section8' style={{ backgroundColor: '#a8a8a8' }}>
          <Image src="/multicultural/ticket.png" alt="ticket" width={3775} height={1884} priority className="w-full h-auto web img08_1" />
          <Image src="/multicultural/ticket-mobile.png" alt="ticket" width={2095} height={1884} priority className="w-full h-auto mobile img08_2" />
        </div>
      </div>
    </div>
  )
}