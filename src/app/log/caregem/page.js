"use client"

import Image from 'next/image'
import { useEffect, useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import Link from 'next/link'
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import '../styles.css'
import Caregem from '@/models/Caregem'
import { useWindowRatio } from '@/utils/window'
import { Code2, LinkIcon } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function CaregemDesc() {
  const ratio = useWindowRatio()
  const scale = Array.from({ length: 100 }, () => 0.5 + Math.random() * 4)
  const prototype = useRef(null)

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
      gsap.utils.toArray(['.section-img', '.section-prototype']).forEach((triggerEl) => {
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
        start: 'top bottom',
        end: 'bottom center',
        scrub: 1,
      }
    })
    sec1.from('.top', { opacity: 0 }, 0)
    sec1.from('.img01', { x: '10%' }, 0)

  }, [])

  useEffect(() => {
    const checkIfElementsAreLoaded = () => {
      if (prototype.current) {
        const context = gsap.context(() => {
          const secLast = gsap.timeline({
            scrollTrigger: {
              trigger: '.section-prototype',
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          secLast.to(prototype.current.position, { y: 0 }, 0)
        })
        return () => context.revert()
      } else {
        setTimeout(checkIfElementsAreLoaded, 100)
      }
    }
    checkIfElementsAreLoaded()
  })

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
          <Caregem ref={prototype} position={[
            0,
            -100,
            ratio > 1 ? -10 : -14]}
            scale={0.5} />
        </Suspense>
      </Canvas>

      <div className='wrapper caregem'>
        <Link href={'/log'}>
          <p className='z-10 mix-blend-difference fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}>Back</p>
        </Link>
        <p className='top z-10 mix-blend-difference fixed bottom-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem' }}><a href='#first'>Top</a></p>

        <div id='first' className='section flex-container'>
          <div className='left-side p-6 w-full py-20 flex flex-col gap-4' style={{ alignItems: 'left', paddingLeft: ratio > 1 ? '7rem' : '2rem' }}>
            <h2 className='text-4xl caregem-title'>Caregem</h2>
            <p className='font-semibold'>#UI/UX #Vue #TypeScript #Prototype</p>
            <div className='flex gap-2 cursor-pointer'>
              <a href='https://github.com/soon-y/caregem' target="_blank">
                <Code2 />
              </a>
              <a href="https://caregem.vercel.app/">
                <LinkIcon />
              </a>
            </div>
          </div>
          <div className='right-side'>
            <div className='flex flex-col gap-4'>
              <p>
                Caregem is a comprehensive health and wellness application designed to help users stay on
                top of their fitness and well-being.
              </p>
              <ul>
                <li>
                  <b>Medication Alerts</b>:
                  Never miss a dose with customizable reminders for all your prescriptions. Set up
                  alerts for different medications, and receive timely notifications via smart watch, helping you stay
                  on track with your treatment plan.
                </li>
                <li>
                  <b>Heart Rate Monitoring</b>: Track your heart rate in real-time to monitor your cardiovascular
                  health, with alerts for abnormal readings.
                </li>
                <li>
                  <b>Step Tracker</b>:
                  Monitor your daily activity by counting steps, providing insights into your
                  physical activity levels.
                </li>
                <li>
                  <b>Speed Tracker</b>:
                  Measure your movement speed during walks, runs, or cycling, helping you
                  optimize your workouts.
                </li>
                <li>
                  <b>Sleep Cycle Analysis</b>:
                  Track the quality and duration of your sleep, offering insights into sleep patterns.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='section-img section1 bg-linear-to-br from-[#43197ec3] to-[#200743c3]'>
          <Image src="/caregem/caregem-mockup.png" alt="Art" width={1359} height={1641} className={`img01 w-auto object-cover ${ratio > 0.7 ? 'h-full' : ''}`} />
        </div>

        <div className='section flex flex-col py-12 table caregem-opp'>
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
                  As a user, I want to add my medication plans, so that I can organize and track all my prescriptions.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-2</td>
                <td className="label" label="Story">
                  As a user, I want to receive customizable medication reminders, so that I never miss a dose and can follow my treatment plan.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-3</td>
                <td className="label" label="Story">
                  As a user, I want to track my heart rate in real-time, so that I can monitor my cardiovascular health.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-4</td>
                <td className="label" label="Story">
                  As a user, I want to receive alerts when my heart rate is abnormal, so that I can take immediate action.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-5</td>
                <td className="label" label="Story">
                  As a user, I want to track my daily steps, so that I can monitor my physical activity levels.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-6</td>
                <td className="label" label="Story">
                  As a user, I want to track my movement speed during activities like walking, running, or cycling, so that I can optimize my workouts.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">UST-7</td>
                <td className="label" label="Story">
                  As a user, I want to track my sleep patterns, so that I can understand and improve my sleep
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
                  The system shall allow users to add medication plans including drug name, dosage, frequency, and duration.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-2</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall allow users to set customizable medication reminders for different prescriptions.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-3</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall send medication alerts via smartwatch notifications at scheduled times.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-4</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall measure and display the user&lsquo;s heart rate in real-time.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id." id="req4">REQ-5</td>
                <td className="label" label="Prio.">Could</td>
                <td className="label" label="Req.">
                  The system shall generate alerts when the heart rate exceeds or drops below predefined thresholds.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id." id="req5">REQ-6</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall record and display the number of steps taken by the user each day.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-7</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall measure and display the user&lsquo;s movement speed during walking, running, or cycling activities.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-8</td>
                <td className="label" label="Prio.">Must</td>
                <td className="label" label="Req.">
                  The system shall record and analyze the user&lsquo;s sleep duration and quality.
                </td>
              </tr>
              <tr>
                <td className="label" label="Id.">REQ-9</td>
                <td className="label" label="Prio.">Should</td>
                <td className="label" label="Req.">
                  The system shall present historical data for medication adherence, heart rate, steps, speed, and sleep analysis.
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
                <td className="label" label="Name">AddMedication</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To store details of prescriptions for tracking and reminders</td>
                <td className="label" label="Related">REQ-1</td>
              </tr>
              <tr>
                <td className="label" label="Id." id="uc1">UC-2</td>
                <td className="label" label="Name">SetMedicationAlarm</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To configure alerts for one or more medications</td>
                <td className="label" label="Related">REQ-2</td>
              </tr>
              <tr>
                <td className="label" label="Id.">UC-3</td>
                <td className="label" label="Name">ReceiveMedicationAlert</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To be notified on time to take medication on smart watch</td>
                <td className="label" label="Related">REQ-3</td>
              </tr>
              <tr>
                <td className="label" label="Id.">UC-4</td>
                <td className="label" label="Name" id="uc3">MonitorHeartRate</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To view current heart rate in real-time</td>
                <td className="label" label="Related">REQ-4</td>
              </tr>
              <tr>
                <td className="label" label="Id.">UC-5</td>
                <td className="label" label="Name">ReceiveAbnormalHeartRateAlert</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To be alerted if heart rate is outside healthy range</td>
                <td className="label" label="Related">REQ-5</td>
              </tr>
              <tr>
                <td className="label" label="Id.">UC-6</td>
                <td className="label" label="Name">TrackSteps</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To review daily steps taken</td>
                <td className="label" label="Related">REQ-6</td>
              </tr>
              <tr>
                <td className="label" label="Id.">UC-7</td>
                <td className="label" label="Name">TrackSpeed</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To review speed during physical activity</td>
                <td className="label" label="Related">REQ-7</td>
              </tr>
              <tr>
                <td className="label" label="Id.">UC-8</td>
                <td className="label" label="Name">AnalyzeSleep</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To review sleep quality and duration reports</td>
                <td className="label" label="Related">REQ-8</td>
              </tr>
              <tr>
                <td className="label" label="Id.">UC-9</td>
                <td className="label" label="Name">ViewHistoricalHealthData</td>
                <td className="label" label="Actor">User</td>
                <td className="label" label="Goal">To access past data on medication, activity, and sleep</td>
                <td className="label" label="Related">REQ-9</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='section-wo section-prototype'>
          <p className='stroke text-center'>Prototype</p>
        </div>
      </div>
    </div>
  )
}