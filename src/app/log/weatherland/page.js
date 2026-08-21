"use client"

import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import { LinkIcon, Code2 } from 'lucide-react'
import { param } from '@/lib/param'
import Link from 'next/link'
import Mobile from "@/models/Mobile"
import Weatherland from '@/models/Weatherland'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./styles.css"
import { getRelatedProjects, getFirstTagByPathname } from '@/lib/param'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function WeatherLandDesc() {
  const [url, setUrl] = useState("")
  const [projects, setProjects] = useState("")
  const scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4)
  const [ratio, setRatio] = useState(1)
  const prototype = useRef(null)
  const weatherland = useRef(null)

  useEffect(() => {
    const checkIfElementsAreLoaded = () => {
      if (weatherland.current && prototype.current) {
        const context = gsap.context(() => {
          const first = gsap.timeline({
            scrollTrigger: {
              trigger: '#first',
              start: 'top top',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          first.to(weatherland.current.position, { y: ratio > 1 ? 1 : 2 + (1 - ratio) * 9 }, 0)

          const sec1 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section1',
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec1.to(weatherland.current.position, { y: 50 }, 0)

          const secPrototype = gsap.timeline({
            scrollTrigger: {
              trigger: '.section-prototype',
              start: 'top 80%',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          secPrototype.to(prototype.current.position, { y: 0 }, 0)

          const secMore = gsap.timeline({
            scrollTrigger: {
              trigger: '.section-more',
              start: 'top 80%',
              end: 'bottom center',
              scrub: 1,
            }
          })
          secMore.to(prototype.current.position, { y: 20 }, 0)
        })
        return () => context.revert()
      } else {
        setTimeout(checkIfElementsAreLoaded, 100)
      }
    }
    checkIfElementsAreLoaded()
    setUrl(window.location.pathname)
    setRatio(window.innerWidth / window.innerHeight)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  useEffect(() => {
    if (url) setProjects(getRelatedProjects(url))
  }, [url])

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

        <group ref={weatherland}>
          <Weatherland rotation={[0, -0.3 * Math.PI, 0]}
            position={[
              ratio > 1 ? -ratio * 5 : 0,
              ratio > 1 ? -5 : -ratio * 4,
              ratio > 1 ? -28 : -20 - 40 * (1 - ratio)]}
          />
        </group>

        <group position={[0, -10, -7]} ref={prototype}>
          <Mobile
            rotation={[0, -Math.PI / 2, 0]}
            scale={1} opacity={0}
            color={param.sky}
            src={"https://weather-land.vercel.app/"}
            content={"iframe"} />
        </group>
      </Canvas>

      <div className='wrapper main'>
        <Link href={'/log'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>
        <p className='top z-10 mix-blend-difference fixed bottom-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}><a href='#first'>Top</a></p>

        <div id='first' className='section-wo flex-container'>
          <div className='left-side main items-center text-center'>
            <p className='stroke' style={{ marginTop: ratio > 1 ? '-20rem' : '-10rem' }}>
              Weather Land
            </p>
          </div>
          <div className='right-side'>
            <div>
              <div className='flex gap-2 pb-2'>
                <a href='https://github.com/soon-y/weatherland' target='_blank'>
                  <Code2 />
                </a>
                <a href='https://weather-land.vercel.app/' target='_blank'>
                  <LinkIcon />
                </a>
              </div>
              <p>

              </p>
            </div>
          </div>
        </div>

        <div className='section1 relative w-[100vw] flex flex-col table main-opp py-6'>
          <h3 className='pt-8'>User Story</h3>
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
                <th>actor&lsquo;s goal (what the actor intends to accomplish)</th>
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
        </div>




        <div className='section-wo section-prototype'>
          <p className='stroke' style={{ textAlign: 'center' }}>Prototype</p>
        </div>
      </div>

      {projects.length > 0 &&
        <div className='p-8 relative section-more'>
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