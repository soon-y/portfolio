"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import { Sun, Moon, Code2, LinkIcon } from 'lucide-react'
import { param } from '@/lib/param'
import Link from 'next/link'
import Mobile from "@/models/Mobile"
import Dewy from '@/models/Dewy'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./styles.css"

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function DewyDesc() {
  const scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4)
  const [ratio, setRatio] = useState(1)
  const [radius, setRadius] = useState(ratio > 1 ? ratio * 3 : 5)
  const [daytime, setDaytime] = useState(true)
  const [weatherIndex, setWeather] = useState(0)
  const [moonPhase, setMoonphase] = useState(4)
  const mobile = useRef(null)
  const mobile1 = useRef(null)
  const mobile2 = useRef(null)
  const mobile3 = useRef(null)
  const mobile4 = useRef(null)
  const prototype = useRef(null)
  const dewy = useRef(null)

  useGSAP(() => {
    const sec1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section1',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec1.from('.top', { opacity: 0 }, 0)
    sec1.from('.img01', { y: '50%' }, 0)

    const sec2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section2',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec2.from('.text2', { x: '20%', opacity: 0 }, 0)

    const sec3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3',
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec3.from('.text3', { x: '20%', opacity: 0 }, 0)

    const sec4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section4',
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec4.from('.text4', { x: '20%', opacity: 0 }, 0)

    const sec5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section5',
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec5.from('.text5', { x: '20%', opacity: 0 }, 0)

    const sec6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section6',
        start: 'top 50%',
        end: 'bottom bottom',
        scrub: 1,
        ease: "power1.out"
      }
    })
    sec6
      .from('.weatherIcon', { opacity: 0, x: '10%' })
      .from('.weatherDaytime', { opacity: 0, x: '10%' })
      .from('.weatherImg', { scale: 0, x: '10%' })
      .from('.weatherSlider', { opacity: 0, x: '10%' })
      .from('.btn0', { opacity: 0, x: '10%' })
      .from('.btn1', { opacity: 0, x: '10%' })
      .from('.btn2', { opacity: 0, x: '10%' })
      .from('.btn3', { opacity: 0, x: '10%' })
      .from('.btn4', { opacity: 0, x: '10%' })
      .from('.btn5', { opacity: 0, x: '10%' })
      .from('.btn6', { opacity: 0, x: '10%' })
      .from('.btn7', { opacity: 0, x: '10%' })
      .from('.btn8', { opacity: 0, x: '10%' })

    const sec8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section8',
        start: 'top 80%',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec8.from('.img08_1', { y: '50%' }, 0)
    sec8.from('.img08_2', { y: '50%' }, 0)

    const sec9 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section9',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec9.from('.img09_1', { y: '50%' }, 0)
    sec9.from('.img09_2', { y: '50%' }, 0)

    const sec10 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section10',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec10.from('.img10_1', { y: '50%' }, 0)
    sec10.from('.img10_2', { y: '50%' }, 0)

    const sec11 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section11',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec11.from('.img11_1', { y: '50%' }, 0)
    sec11.from('.img11_2', { y: '50%' }, 0)

    const sec12 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section12',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec12.from('.img12_1', { y: '50%' }, 0)
    sec12.from('.img12_2', { y: '50%' }, 0)

    const sec13 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section13',
        start: 'top bottom',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec13.from('.img13', { y: '-20%' }, 0)
  })

  useEffect(() => {
    if (document.querySelector('.slider')) {
      const slider = document.querySelector('.slider')
      slider.style.setProperty(
        '--moonPhase',
        `url('/dewyDays/weather/thumb${moonPhase == 8 ? 0 : moonPhase}.png')`
      )
    }

    const checkIfElementsAreLoaded = () => {
      if (mobile2.current && mobile3.current && mobile4.current
        && mobile.current && dewy.current && prototype.current
      ) {
        console.log(ratio)
        const context = gsap.context(() => {
          const sec1 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section1',
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec1.to(dewy.current.position, { y: 50 }, 0)
          sec1.to(mobile1.current, { opacity: 0 }, 0)
          sec1.to(mobile2.current, { opacity: 0 }, 0)
          sec1.to(mobile3.current, { opacity: 0 }, 0)
          sec1.to(mobile4.current, { opacity: 0 }, 0)

          const sec2 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section2',
              start: 'top 20%',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec2.to(mobile.current.position, { y: ratio >= 1 ? 0 : 0.5 }, 0)
          sec2.to(mobile.current.rotation, { y: 0 }, 0)
          sec2.to(mobile1.current, { opacity: 1 }, 0)

          const sec3 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section3',
              start: 'top 20%',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec3.to(mobile.current.rotation, { y: -Math.PI / 2 }, 0)
          sec3.to(mobile2.current, { opacity: 1 }, 0)

          const sec4 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section4',
              start: 'top 20%',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec4.to(mobile.current.rotation, { y: -Math.PI }, 0)
          sec4.to(mobile3.current, { opacity: 1 }, 0)
          sec4.to(mobile1.current, { opacity: 0 }, 0)

          const sec5 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section5',
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec5.to(mobile.current.rotation, { y: -Math.PI * 1.5 }, 0)
          sec5.to(mobile4.current, { opacity: 1 }, 0)

          const sec6 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section6',
              start: 'top 50%',
              end: 'bottom bottom',
              scrub: 1,
              ease: "power1.out"
            }
          })
          sec6.to(mobile.current.position, { y: 10 }, 0)

          const secPrototype = gsap.timeline({
            scrollTrigger: {
              trigger: '.section-prototype',
              start: 'top 80%',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          secPrototype.to(prototype.current.position, { y: 0 }, 0)
        })
        return () => context.revert()
      } else {
        setTimeout(checkIfElementsAreLoaded, 100)
      }
    }
    checkIfElementsAreLoaded()
    setRatio(window.innerWidth / window.innerHeight)
    setRadius(ratio > 1 ? ratio * 3 : 5)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleResize = () => {
    const newRatio = window.innerWidth / window.innerHeight
    setRatio(newRatio)
    setRadius(ratio > 1 ? ratio * 3 : 5)
    console.log(newRatio)
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
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[10, 10, 1]} speed={0.1} />

        <group ref={dewy}>
          <Dewy position={[
            ratio > 1 ? -ratio * 4.6 : 0,
            ratio > 1 ? 1 : 2 + (1 - ratio) * 9,
            ratio > 1 ? -20 : -20 - 20 * (1 - ratio)]}
            onClick={() => { window.open("https://dewy-days.vercel.app/", "_blank") }} opacity={0} />
        </group>

        <group ref={mobile} position={[
          ratio > 1 ? -radius * 1.5 : -radius,
          -10,
          -8]}
          rotation-y={Math.PI / 2}>
          <Mobile position={[radius, 0, 0]} ref={mobile1}
            rotation={[0, -Math.PI / 2, 0]}
            scale={1}
            color={param.sky}
            src={"/dewyDays/v1-profile.mp4"}
            content={"video"} />

          <Mobile position={[0, 0, -radius]} ref={mobile2}
            rotation={[0, 0, 0]}
            scale={1}
            color={param.sky}
            src={"/dewyDays/v2-cupSelection.mp4"}
            content={"video"} />

          <Mobile position={[-radius, 0, 0]} ref={mobile3}
            rotation={[0, Math.PI / 2, 0]}
            scale={1}
            color={param.sky}
            src={"/dewyDays/v3-sliderAdjustion.mp4"}
            content={"video"} />

          <Mobile position={[0, 0, radius]} ref={mobile4}
            rotation={[0, Math.PI, 0]}
            scale={1}
            color={param.sky}
            src={"/dewyDays/v4-weather.mp4"}
            content={"video"} />
        </group>

        <group position={[0, -10, -7]} ref={prototype}>
          <Mobile
            rotation={[0, -Math.PI / 2, 0]}
            scale={1} opacity={0}
            color={param.sky}
            src={"https://dewy-days.vercel.app/"}
            content={"iframe"} />
        </group>
      </Canvas>

      <div className='wrapper dewy'>
        <Link href={'/'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>
        <p className='top z-10 mix-blend-difference fixed bottom-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}><a href='#first'>Top</a></p>

        <div id='first' className='section-wo flex-container'>
          <div className='left-side dewy items-center text-center'>
            <p className='stroke m-auto' style={{ marginTop: ratio > 1 ? 0 : '5rem' }}>
              Dewy Days
            </p>
          </div>
          <div className='right-side'>
            <div>
              <div className='flex gap-2 pb-2'>
                <a href='https://github.com/soon-y/dewy-days' target='_blank'>
                  <Code2 />
                </a>
                <a href='https://dewy-days.vercel.app/' target='_blank'>
                  <LinkIcon />
                </a>
              </div>
              <p>
                <span className='font-bold'>How much water should we drink a day?</span> <br />
                It&lsquo;s very important to drink an appropriate amount of water every day.
                The amount you need depends on your age, weight, activity level, and even the weather.<br />
                I used to drink very little water, so I started thinking about how to make staying hydrated more fun.
                That&lsquo;s when I came up with the idea of turning it into an interactive and enjoyable game to help me reach my daily goal.
              </p>
            </div>
          </div>
        </div>

        <div className='section-img section1' style={{ backgroundColor: '#f3f3f3' }}>
          <Image src="/dewyDays/phone-web.jpg" alt="phone" width={2753} height={1399} className="w-full h-auto img01" />
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

          <h3 className='pt-8'>Activity Diagram</h3>
          <p className='pb-4 text-center'>Change cup and its volume and add water intake (UC-3 to UC-6)</p>
          <a href='/dewyDays/activity-diagram.png' target='_blank' className='image'>
            <Image src={'/dewyDays/activity-diagram.png'} width={587} height={730} alt='activity diagram' />
          </a>
        </div>

        <div className='section flex-container section2'>
          <div className='left-side'></div>
          <div className='right-side desc dewy'>
            <div className='text2'>
              <p className='pb-4 md:pb-6' style={{ fontWeight: 700, fontSize: ratio > 1 ? '3rem' : '2rem', lineHeight: 1.1 }}>
                Reach your goal with Dewy!
              </p>
              <p>
                The amount of water you need each day depends on your weight, the weather, and your daily activity level.
                Set your weight and exercise time to calculate your personalized daily hydration goal.
                If you enable <i>temperature mode</i>, an extra 500ml will be added to your goal when the temperature exceeds 30°C.
              </p>
            </div>
          </div>
        </div>

        <div className='section flex-container section3'>
          <div className='left-side'></div>
          <div className='right-side desc dewy'>
            <div className='text3'>
              <p className='pb-4 md:pb-6' style={{ fontWeight: 700, fontSize: ratio > 1 ? '3rem' : '2rem', lineHeight: 1.1 }}>
                Set the capacity of your favorites
              </p>
              <p>
                You can set the capacity of your preferred cup, tumbler, and bottle individually.
                To switch between them, simply swipe the cup icon, select the corresponding volume, and change it easily anytime.
              </p>
            </div>
          </div>
        </div>

        <div className='section flex-container section4'>
          <div className='left-side'></div>
          <div className='right-side desc dewy'>
            <div className='text4'>
              <p className='pb-4 md:pb-6' style={{ fontWeight: 700, fontSize: ratio > 1 ? '3rem' : '2rem', lineHeight: 1.1 }}>
                Easily add your water intake
              </p>
              <p>
                After selecting a cup, simply add water by adjusting the slider to match the amount you drank.
                Watch as the water fills up, Dewy splashes around, and your progress toward your daily goal updates in real time.
                You can review your drinking history, including cups and amounts, in the Timeline.
              </p>
            </div>
          </div>
        </div>

        <div className='section flex-container section5'>
          <div className='left-side'>
          </div>
          <div className='right-side desc dewy'>
            <div className='text5'>
              <p className='pb-4 md:pb-6' style={{ fontWeight: 700, fontSize: ratio > 1 ? '3rem' : '2rem', lineHeight: 1.1 }}>
                Real-time weather updates
              </p>
              <p>
                Dewy Days provides real-time weather data using the <a href="https://open-meteo.com/" target="_blank"> Open Meteo API</a>.
                If the particulate matter levels (PM10/PM2.5) are very poor or the temperature is unusually high, be sure to drink plenty of water to stay healthy and hydrated.
              </p>
            </div>
          </div>
        </div>

        <div className='section section6' style={{
          backgroundImage: daytime ? "url('/dewyDays/weather/bg.jpg')" : "url('/dewyDays/weather/bgNight.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', height: '100vh', width: 'auto',
          display: 'flex', flexDirection: 'column',
          justifyItems: 'center', alignItems: 'center',
        }}>
          <p className='weatherIcon pt-4 md:pt-6' style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.7rem', fontWeight: 700 }}>Weather Icon</p>
          <div className='weatherDaytime flex'>
            <Sun size={54} color='white' className='bubble' style={{
              margin: '1rem 0.5rem',
              backgroundColor: daytime ? 'rgba(96, 152, 204, 0.2)' : 'rgba(255, 255, 255, 0)'
            }} onClick={() => setDaytime(true)} />
            <Moon size={54} color='white' className='bubble' style={{
              margin: '1rem 0.5rem',
              backgroundColor: !daytime ? 'rgba(5, 4, 40, 0.2)' : 'rgba(255, 255, 255, 0)'
            }} onClick={() => setDaytime(false)} />
          </div>

          <div className='weatherImg' style={{
            height: ratio > 0.5 ? '40%' : 'auto',
            width: ratio > 0.5 ? 'auto' : '90%',
            aspectRatio: 1, margin: 'auto', position: 'relative',
          }}>

            {daytime && (weatherIndex === 0) &&
              <div>
                <Image src="/dewyDays/weather/sunMane.png" alt="sun" width={445} height={443} className='absolute sunMane sun' />
                <Image src="/dewyDays/weather/sunFace.png" alt="sun" width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {daytime && (weatherIndex === 1) &&
              <div>
                <Image src="/dewyDays/weather/sunMane.png" alt="sun" width={445} height={443} className='absolute sunMane sunManeCloud sun' />
                <Image src="/dewyDays/weather/sunFace.png" alt="sun" width={425} height={429} className='absolute sunFaceCloud sun' />
                <Image src="/dewyDays/weather/cloud.png" alt="cloud" width={475} height={270} className='absolute partlyCloud' />
              </div>}

            {daytime && (weatherIndex === 2) &&
              <div>
                <Image src="/dewyDays/weather/cloud.png" alt="cloud" width={475} height={270} className='absolute cloud' />
              </div>}

            {!daytime && (weatherIndex === 2) &&
              <div>
                <Image src="/dewyDays/weather/cloudNight.png" alt="cloud" width={475} height={270} className='absolute cloud' />
              </div>}

            {daytime && (weatherIndex === 3) &&
              <div>
                <Image src="/dewyDays/weather/smog.png" alt="smog" width={675} height={131} className='absolute smogT smog' />
                <Image src="/dewyDays/weather/smog.png" alt="smog" width={675} height={131} className='absolute smogB smog' />
              </div>}

            {!daytime && (weatherIndex === 3) &&
              <div>
                <Image src="/dewyDays/weather/smogNight.png" alt="smog" width={675} height={131} className='absolute smogT smog' />
                <Image src="/dewyDays/weather/smogNight.png" alt="smog" width={675} height={131} className='absolute smogB smog' />
              </div>}

            {daytime && (weatherIndex === 4) &&
              <div>
                <Image src="/dewyDays/weather/rain.png" alt="rain" width={345} height={454} className='absolute drizzle0 drop' />
                <Image src="/dewyDays/weather/rain.png" alt="rain" width={345} height={454} className='absolute drizzle1 drop' />
                <Image src="/dewyDays/weather/rain.png" alt="rain" width={345} height={454} className='absolute drizzle2 drop' />
              </div>}

            {daytime && (weatherIndex === 5) &&
              <div>
                <Image src="/dewyDays/weather/rain.png" alt="rain" width={345} height={454} className='absolute rain0 drop' />
                <Image src="/dewyDays/weather/rain.png" alt="rain" width={345} height={454} className='absolute rain1 drop' />
                <Image src="/dewyDays/weather/rain.png" alt="rain" width={345} height={454} className='absolute rain2 drop' />
              </div>}

            {!daytime && (weatherIndex === 4) &&
              <div>
                <Image src="/dewyDays/weather/rainNight.png" alt="rain" width={345} height={454} className='absolute drizzle0 drop' />
                <Image src="/dewyDays/weather/rainNight.png" alt="rain" width={345} height={454} className='absolute drizzle1 drop' />
                <Image src="/dewyDays/weather/rainNight.png" alt="rain" width={345} height={454} className='absolute drizzle2 drop' />
              </div>}

            {!daytime && (weatherIndex === 5) &&
              <div>
                <Image src="/dewyDays/weather/rainNight.png" alt="rain" width={345} height={454} className='absolute rain0 drop' />
                <Image src="/dewyDays/weather/rainNight.png" alt="rain" width={345} height={454} className='absolute rain1 drop' />
                <Image src="/dewyDays/weather/rainNight.png" alt="rain" width={345} height={454} className='absolute rain2 drop' />
              </div>}

            {daytime && (weatherIndex === 6) &&
              <div>
                <Image src="/dewyDays/weather/rain.png" alt="rain" width={345} height={454} className='absolute rain0 drop' />
                <Image src="/dewyDays/weather/lightning.png" alt="thunder" width={124} height={165} className='absolute lightning drop' />
                <Image src="/dewyDays/weather/rain.png" alt="rain" width={345} height={454} className='absolute rain2 drop' />
              </div>}

            {!daytime && (weatherIndex === 6) &&
              <div>
                <Image src="/dewyDays/weather/rainNight.png" alt="rain" width={345} height={454} className='absolute rain0 drop' />
                <Image src="/dewyDays/weather/lightning.png" alt="thunder" width={124} height={165} className='absolute lightning drop' />
                <Image src="/dewyDays/weather/rainNight.png" alt="rain" width={345} height={454} className='absolute rain2 drop' />
              </div>}

            {daytime && (weatherIndex === 7) &&
              <div>
                <Image src="/dewyDays/weather/snow.png" alt="snow" width={672} height={689} className='absolute rain0 snow' />
                <Image src="/dewyDays/weather/snow.png" alt="snow" width={672} height={689} className='absolute rain1 snow' />
                <Image src="/dewyDays/weather/snow.png" alt="snow" width={672} height={689} className='absolute rain2 snow' />
              </div>}

            {!daytime && (weatherIndex === 7) &&
              <div>
                <Image src="/dewyDays/weather/snowNight.png" alt="snow" width={672} height={689} className='absolute rain0 snow' />
                <Image src="/dewyDays/weather/snowNight.png" alt="snow" width={672} height={689} className='absolute rain1 snow' />
                <Image src="/dewyDays/weather/snowNight.png" alt="snow" width={672} height={689} className='absolute rain2 snow' />
              </div>}

            {daytime && (weatherIndex === 8) &&
              <div>
                <Image src="/dewyDays/weather/tornado0.png" alt="tornado" width={665} height={827} className='absolute tornado tornado0' />
                <Image src="/dewyDays/weather/tornado1.png" alt="tornado" width={665} height={827} className='absolute tornado tornado1' />
                <Image src="/dewyDays/weather/tornado2.png" alt="tornado" width={665} height={827} className='absolute tornado tornado2' />
                <Image src="/dewyDays/weather/tornado3.png" alt="tornado" width={665} height={827} className='absolute tornado tornado3' />
              </div>}

            {!daytime && (weatherIndex === 8) &&
              <div>
                <Image src="/dewyDays/weather/tornadoNight0.png" alt="tornado" width={665} height={827} className='absolute tornado tornado0' />
                <Image src="/dewyDays/weather/tornadoNight1.png" alt="tornado" width={665} height={827} className='absolute tornado tornado1' />
                <Image src="/dewyDays/weather/tornadoNight2.png" alt="tornado" width={665} height={827} className='absolute tornado tornado2' />
                <Image src="/dewyDays/weather/tornadoNight3.png" alt="tornado" width={665} height={827} className='absolute tornado tornado3' />
              </div>}

            {daytime && (weatherIndex === 3 || weatherIndex === 4 || weatherIndex === 5 ||
              weatherIndex === 6 || weatherIndex === 7) &&
              <div>
                <Image src="/dewyDays/weather/cloud.png" alt="cloud" width={475} height={270} className='absolute cloud cloudmit' />
              </div>}

            {!daytime && (weatherIndex === 3 || weatherIndex === 4 || weatherIndex === 5 ||
              weatherIndex === 6 || weatherIndex === 7) &&
              <div>
                <Image src="/dewyDays/weather/cloudNight.png" alt="cloud" width={475} height={270} className='absolute cloud cloudmit' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 4) &&
              <div>
                <Image src="/dewyDays/weather/moonlight.png" alt="moonlight" width={646} height={646} className='absolute moonlight sun' />
                <Image src="/dewyDays/weather/moonFace.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 0) &&
              <div>
                <Image src="/dewyDays/weather/moon0.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 1) &&
              <div>
                <Image src="/dewyDays/weather/moon1.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 2) &&
              <div>
                <Image src="/dewyDays/weather/moon2.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 3) &&
              <div>
                <Image src="/dewyDays/weather/moon3.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 5) &&
              <div>
                <Image src="/dewyDays/weather/moon5.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 6) &&
              <div>
                <Image src="/dewyDays/weather/moon6.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 7) &&
              <div>
                <Image src="/dewyDays/weather/moon7.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 8) &&
              <div>
                <Image src="/dewyDays/weather/moon0.png" alt="moon" priority width={425} height={429} className='absolute sunFace sun' />
              </div>}


            {(!daytime) && (weatherIndex === 1) && (moonPhase == 4) &&
              <div>
                <Image src="/dewyDays/weather/moonlight.png" alt="moonlight" width={646} height={646} className='absolute moonlightCloud sun' />
                <Image src="/dewyDays/weather/moonFace.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 0) &&
              <div>
                <Image src="/dewyDays/weather/moon0.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 1) &&
              <div>
                <Image src="/dewyDays/weather/moon1.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 2) &&
              <div>
                <Image src="/dewyDays/weather/moon2.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 3) &&
              <div>
                <Image src="/dewyDays/weather/moon3.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 5) &&
              <div>
                <Image src="/dewyDays/weather/moon5.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 6) &&
              <div>
                <Image src="/dewyDays/weather/moon6.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 7) &&
              <div>
                <Image src="/dewyDays/weather/moon7.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 8) &&
              <div>
                <Image src="/dewyDays/weather/moon0.png" alt="moon" priority width={425} height={429} className='absolute sunFaceCloud sun' />
              </div>}

            {!daytime && (weatherIndex === 1) &&
              <div>
                <Image src="/dewyDays/weather/cloudNight.png" alt="cloud" width={475} height={270} className='absolute partlyCloud' />
              </div>}
          </div>

          <div className='weatherSlider' style={{
            height: '10%',
            width: ratio > 1 ? '50%' : '80%',
            margin: 'auto',
            position: 'relative',
            alignContent: 'center'
          }}>
            {!daytime && (weatherIndex === 0 || weatherIndex === 1) &&
              <div className="slidecontainer" style={{ width: ratio > 1 ? '50%' : '100%' }}>
                <input type="range" min="0" max="8" step="1" className="slider" value={moonPhase}
                  onChange={(event) => setMoonphase(event.target.value)} />
              </div>}
          </div>

          <div className='weatherBtns'>
            <button className="weatherBtn btn0" onClick={() => setWeather(0)} style={{
              backgroundColor: weatherIndex === 0 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p>Clear</p></button>
            <button className="weatherBtn btn1" onClick={() => setWeather(1)} style={{
              backgroundColor: weatherIndex === 1 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p style={{ transform: 'translateY(-25%)' }}>Partly cloudy</p></button>
            <button className="weatherBtn btn2" onClick={() => setWeather(2)} style={{
              backgroundColor: weatherIndex === 2 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p>Overcast</p></button>
            <button className="weatherBtn btn3" onClick={() => setWeather(3)} style={{
              backgroundColor: weatherIndex === 3 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p>Fog</p></button>
            <button className="weatherBtn btn4" onClick={() => setWeather(4)} style={{
              backgroundColor: weatherIndex === 4 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p>Drizzle</p></button>
            <button className="weatherBtn btn5" onClick={() => setWeather(5)} style={{
              backgroundColor: weatherIndex === 5 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p>Rain</p></button>
            <button className="weatherBtn btn6" onClick={() => setWeather(6)} style={{
              backgroundColor: weatherIndex === 6 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p>Thunder</p></button>
            <button className="weatherBtn btn7" onClick={() => setWeather(7)} style={{
              backgroundColor: weatherIndex === 7 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p>Snow</p></button>
            <button className="weatherBtn btn8" onClick={() => setWeather(8)} style={{
              backgroundColor: weatherIndex === 8 ? daytime ? 'rgba(57, 114, 17, 0.2)' : 'rgba(32, 58, 8, 0.5)' : 'rgba(0, 0, 0, 0)'
            }}><p>Tornado</p></button>
          </div>
        </div>

        <div className='section-wo section-prototype'>
          <p className='stroke' style={{ textAlign: 'center' }}>Prototype</p>
        </div>

        <div className='section-img section8' style={{ backgroundColor: '#dddddd' }}>
          <Image src="/dewyDays/flyer-web.jpg" alt="flyer" width={3283} height={1681} className="w-full h-auto web img08_1" />
          <Image src="/dewyDays/flyer-mobile.jpg" alt="flyer" width={2927} height={3084} className="w-full h-auto mobile img08_2" />
        </div>

        <div className='section-img section9' style={{ backgroundColor: '#acb6b5' }}>
          <Image src="/dewyDays/cup-web.png" alt="cup" width={1520} height={572} className="w-full h-auto web img09_1" />
          <Image src="/dewyDays/cup-mobile.png" alt="cup" width={880} height={561} className="w-full h-auto mobile img09_2" />
        </div>

        <div className='section-img section10' style={{ backgroundColor: '#8a9292' }}>
          <Image src="/dewyDays/cups-web.png" alt="cups" width={1488} height={524} className="w-full h-auto web img10_1" />
          <Image src="/dewyDays/cups-mobile.png" alt="cups" width={1065} height={521} className="w-full h-auto mobile img10_2" />
        </div>

        <div className='section-img section11' style={{ backgroundColor: '#a5adad' }}>
          <Image src="/dewyDays/tumbler-web.png" alt="tumbler" width={1651} height={697} className="w-full h-auto web img11_1" />
          <Image src="/dewyDays/tumbler-mobile.png" alt="tumbler" width={933} height={741} className="w-full h-auto mobile img11_2" />
        </div>

        <div className='section-img section12' style={{ backgroundColor: '#cbd4d1' }}>
          <Image src="/dewyDays/water-package-web.png" alt="water package" width={3000} height={0} className="w-full h-auto web img12_1" />
          <Image src="/dewyDays/water-package-mobile.png" alt="water package" width={1000} height={0} className="w-full h-auto mobile img12_2" />
        </div>

        <div className='section-img section13' style={{
          background: "url('/dewyDays/card-web.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <Image src="/dewyDays/card-web.png" alt="business card" fill sizes='100vw' className="img13 object-cover object-center" />
        </div>
      </div>
    </div>
  )
}