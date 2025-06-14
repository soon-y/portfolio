"use client"

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Sparkles, Environment } from '@react-three/drei'
import { Laugh, Smile, Frown, Smartphone, Monitor } from 'lucide-react'
import { param } from '@/lib/param'
import Link from 'next/link'
import Mobile from "@/models/Mobile"
import NoteTaking from "@/models/NoteTaking.jsx"
import LipReading from "@/models/LipReading.jsx"
import Hand from "@/models/Hand.jsx"
import Art from "@/models/Art.jsx"
import { useGSAP } from '@gsap/react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './styles.css'

gsap.registerPlugin(ScrollTrigger, useGSAP)

export default function ArtDesc() {
  const [ratio, setRatio] = useState(1)
  const [radius, setRadius] = useState(ratio > 1 ? ratio * 3 : 5)
  const scale = Array.from({ length: 500 }, () => 0.5 + Math.random() * 4)
  const prototype = useRef(null)
  const model = useRef(null)
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
        start: 'top bottom',
        end: 'bottom center',
        scrub: 1,
      }
    })
    sec1.from('.top', { opacity: 0 }, 0)
    sec1.from('.img01', { x: '10%' }, 0)

    const sec2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section2',
        start: 'top 10%',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec2.from('.text2', { x: '20%', opacity: 0 }, 0)
    sec2.from('.text2_1', { x: '-20%', opacity: 0 }, 0)

    const sec3 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section3',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec3.from('.text3', { x: '20%', opacity: 0 }, 0)

    const sec4 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section4',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec4.from('.text4', { x: '20%', opacity: 0 }, 0)

    const sec5 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section5',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec5.from('.text5', { x: '20%', opacity: 0 }, 0)

    const sec6 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section6',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      }
    })
    sec6.from('.text6', { x: '20%', opacity: 0 }, 0)
    sec6.to('.text6_masking', { opacity: 1 }, 0)

    const sec7 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section7',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1, ease: "power1.out"
      }
    })
    sec7.from('#persona1 .profile-img', { opacity: 0 }, 0)
      .from('#persona1 .quote', { y: '20%', opacity: 0 }, 0)
      .from('#persona1 .profile', { y: '20%', opacity: 0 }, 0)
      .from('#persona1 #EI', { y: '20%', opacity: 0 }, 0)
      .from('#persona1 #SN', { y: '20%', opacity: 0 }, 0)
      .from('#persona1 #TF', { y: '20%', opacity: 0 }, 0)
      .from('#persona1 #JP', { y: '20%', opacity: 0 }, 0)
      .from('#persona1 .bio', { y: '20%', opacity: 0 }, 0)
      .from('#persona1 .needs', { y: '20%', opacity: 0 }, 0)
      .from('#persona1 .experience', { y: '20%', opacity: 0 }, 0)

    const sec8 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section8',
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1, ease: "power1.out"
      }
    })
    sec8.from('#persona2 .profile-img', { opacity: 0 }, 0)
      .from('#persona2 .quote', { y: '20%', opacity: 0 }, 0)
      .from('#persona2 .profile', { y: '20%', opacity: 0 }, 0)
      .from('#persona2 #EI', { y: '20%', opacity: 0 }, 0)
      .from('#persona2 #SN', { y: '20%', opacity: 0 }, 0)
      .from('#persona2 #TF', { y: '20%', opacity: 0 }, 0)
      .from('#persona2 #JP', { y: '20%', opacity: 0 }, 0)
      .from('#persona2 .bio', { y: '20%', opacity: 0 }, 0)
      .from('#persona2 .needs', { y: '20%', opacity: 0 }, 0)
      .from('#persona2 .experience', { y: '20%', opacity: 0 }, 0)

    const sec9 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section9',
        start: 'top 40%',
        end: 'bottom bottom',
        scrub: 1, ease: "power1.out"
      }
    })
    sec9
      .from('.journey-profile', { opacity: 0 }, 0)
      .from('.journey-map', { y: '20%', opacity: 0 }, 0)
      .from('.journey-touch', { y: '20%', opacity: 0 }, 0)
      .from('.journey-stage', { y: '20%', opacity: 0 }, 0)
      .from('.journey-feeling', { y: '20%', opacity: 0 }, 0)

    const sec10 = gsap.timeline({
      scrollTrigger: {
        trigger: '.section10',
        start: 'top center',
        end: 'top 20%',
        scrub: 1,
      }
    })
    sec10.from('.flowchart_1', { opacity: 0, y: '20%' }, 0)
    sec10.from('.flowchart_2', { opacity: 0, y: '20%' }, 0)
  }, [])

  useEffect(() => {
    const checkIfElementsAreLoaded = () => {
      if (logo.current && model.current && prototype.current) {
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

          const sec3 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section3',
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec3.to(model.current.position, { y: ratio > 1 ? 0 : 1.5 }, 0)
          sec3.to(model.current.rotation, { y: 0 }, 0)

          const sec4 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section4',
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec4.to(model.current.rotation, { y: -Math.PI * 2 / 3 }, 0)

          const sec5 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section5',
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec5.to(model.current.rotation, { y: -Math.PI * 4 / 3 }, 0)

          const sec6 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section6',
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec6.to(model.current.position, { y: 10 }, 0)

          const sec11 = gsap.timeline({
            scrollTrigger: {
              trigger: '.section11',
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec11.to(prototype.current.position, { y: 0 }, 0)
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
  })

  const handleResize = () => {
    const newRatio = window.innerWidth / window.innerHeight
    setRatio(newRatio)
    setRadius(ratio > 1 ? ratio * 3 : 5)
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
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[12, 12, 20]} speed={0.1} />
        <group ref={logo} onClick={() => {
          window.open("https://art-plus.vercel.app/", "_blank")
        }}>
          <Art position={[
            ratio > 1 ? -ratio * 2.2 : 0,
            ratio > 1 ? 0 : 1 + (1 - ratio) * 5,
            ratio > 1 ? -10 : -14]}
            display={'none'} scale={0.5} />
        </group>
        <group position={[0, -10, -7]} ref={prototype}>
          <Mobile
            rotation={[0, -Math.PI / 2, 0]}
            scale={1} opacity={0}
            color={param.orange}
            src={"https://art-plus.vercel.app/"}
            content={"iframe-time"} />
        </group>
        <group ref={model} rotation-y={Math.PI * 1 / 3} position={[ratio > 1 ? -radius * 1.7 : -radius, -10, -10]} >
          <Hand position={[radius, -2, 0]} scale={0.3} />
          <LipReading rotation-y={Math.PI * 0.66} position={[-Math.cos(Math.PI / 3) * radius, 0, -Math.sin(Math.PI / 3) * radius]} scale={0.8} />
          <NoteTaking rotation={[Math.PI / 2, Math.PI / 3, -Math.PI / 2]} position={[-Math.cos(Math.PI / 3) * radius, 0, Math.sin(Math.PI / 3) * radius]} scale={1.1} />
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
            <div className='desc art'>
              <p>
                In 2016, I came across a <a className='art' href="https://comic.naver.com/webtoon/list?titleId=659934&page=1&sort=ASC" target="_blank">comic</a> by a deaf authorthat sparked my curiosity about how deaf individuals experience museums.
                This led me to research communication methods and docent services, ultimately inspiring me to design an exhibition guide app that helps deaf users book and engage with docents in accessible, personalized ways. <br />
                The logo features the word <b>art</b>, with the letter <b>t</b> styled to resemble a <b>+</b> (plus) sign. By integrating augmented reality, the app delivers sign language interpretation for artworks and exhibitions, making art more inclusive and accessible to the Deaf and hard-of-hearing community.
              </p>
            </div>
          </div>
        </div>

        <div className='section-img section1' style={{
          background: "url('./art/art_bg.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <Image src="/art/art_thumb.png" alt="Art" fill sizes='100vh' className="img01 mobile h-full w-auto object-cover" />
          <Image src="/art/art_thumb.png" alt="Art" width={1359} height={1641}
            className="img01 web h-full w-auto object-cover" />
        </div>

        <div className='section section2' style={{
          display: 'flex', alignItems: 'center',
        }}>
          <div className='text2_1 absolute right-0 r-0 opacity-[0.3]'>
            <p className='stroke' style={{ lineHeight: 1.1, textAlign: 'right', marginRight: '1rem' }}>
              Sign Language<br />Lip Reading<br />Written Communication
            </p>
          </div>
          <p className='art desc text2' style={{
            width: ratio > 1 ? '50vw' : '90vw',
            margin: 'auto',
            textAlign: 'left',
          }}>
            People with hearing loss use a variety of communication methods depending on the severity of their
            hearing loss, their preferences, and the resources available to them.
          </p>
        </div>

        <div className='section section3 flex-container'>
          <div className='left-side'>
          </div>
          <div className='right-side desc art'>
            <div className='text3'>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>common methods <b>01</b></p>
              <p className='method-title'>Sign Language</p>
              <p>
                Sign language is the primary language for many individuals with hearing loss,
                allowing them to express themselves fluently and connect with others who are also proficient in
                sign language.
              </p>
            </div>
          </div>
        </div>

        <div className='section section4 flex-container'>
          <div className='left-side'>
          </div>
          <div className='right-side desc art'>
            <div className='text4'>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>common methods <b>02</b></p>
              <p className='method-title'>Lip Reading (Speechreading)</p>
              <p>
                Lip reading involves watching the movement of a speaker&lsquo;s lips, face, and body to understand
                what they are saying. The speakers should show their lips with frontal faces and speak clearly
                at a natural pace.
                However, it is sometimes challenging because many sounds look similar on the lips, and some
                words are hard to distinguish just by lip movement.
              </p>
            </div>
          </div>
        </div>

        <div className='section section5 flex-container'>
          <div className='left-side'>
          </div>
          <div className='right-side desc art'>
            <div className='text5'>
              <p style={{ color: 'rgba(255,255,255,0.8)' }}>common methods <b>03</b></p>
              <p className='method-title'>Written Communication</p>
              <p>
                Texting, writing notes, or typing on electronic devices is a common method of communication for
                people with hearing loss, especially in one-on-one or small group settings.
                Many individuals with hearing loss prefer to carry a pen and paper or use a smartphone/tablet to
                facilitate easier communication in situations where verbal communication might be challenging.
              </p>
            </div>
          </div>
        </div>

        <div className='section section6 flex-container'>
          <div className='left-side' style={{ display: 'flex' }}>
            <div className='art text6_masking' style={{ alignContent: ratio > 0.5 ? 'center' : 'flex-end' }}>
              <p style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 700, marginBottom: '0.5rem' }}>
                - Reference -
              </p>
              <a target="_blank" href="https://www.museum.go.kr/site/eng/content/tours_and_services">
                <p className='masking'>National <br />Museum <br />of Korea</p>
              </a>
            </div>
          </div>
          <div className='right-side desc art'>
            <div className='text6' style={{ alignContent: 'center' }}>
              <b>
                <p className='py-1'>Sign language docent</p>
              </b>
              <ul>
                <li>For groups of 5 to 20 people, it should be booked at least one day before your desired date.
                </li>
                <li>Walk-ins are also accepted, but priority is given to those who make reservations in advance.
                </li>
              </ul>
              <b>
                <p className='pt-3 pb-1'>Exhibition Guide App</p>
              </b>
              <ul>
                <li>
                  This is a new exhibition guide service that uses Bluetooth beacons and smart devices to
                  automatically
                  guide
                  visitors to exhibits based on their location.</li>
                <li>After installing the app, you need to download the content in advance while connected to WIFI.
                </li>
                <li>Bluetooth function must be turned on.</li>
              </ul>
            </div>
          </div>
        </div>

        <div id="persona1" className="persona section-auto section7">
          <div className="profile-img">
          </div>
          <div className='profile-desc'>
            <div className="quote box art">
              <p className='title'>Persona 01</p>
              <p className="quotes">
                <q><em>
                  I want to quickly identify where sign language docents are available and book them easily and conveniently.
                </em></q></p>
            </div>
            <div className="profile">
              <table>
                <tbody>
                  <tr>
                    <th className='art' colSpan={2} style={{ fontSize: '1.2rem' }}>
                      Mina Kim
                    </th>
                    {ratio < 1 && <td rowSpan={4} style={{
                      width: '30%',
                      height: '100%',
                      backgroundImage: 'url(./art/portrait1-mobile.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}>
                    </td>}
                  </tr>
                  <tr>
                    <th><p className='art'>Age</p></th>
                    <td><p className='art'>31</p></td>
                  </tr>
                  <tr>
                    <th><p className='art'>Location</p></th>
                    <td><p className='art'>Seoul, Korea</p></td>
                  </tr>
                  <tr>
                    <th><p className='art'>Family</p></th>
                    <td><p className='art'>Parents, 1 older brother</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bars" id="EI">
            <div className="bar"></div>
            <div className="circle"></div>
            <p className="leftside">Extrovert</p>
            <p className="rightside">Introvert</p>
          </div>
          <div className="bars" id="SN">
            <div className="bar"></div>
            <div className="circle"></div>
            <p className="leftside">Sensing</p>
            <p className="rightside">Intuition</p>
          </div>
          <div className="bars" id="TF">
            <div className="bar"></div>
            <div className="circle"></div>
            <p className="leftside">Thinking</p>
            <p className="rightside">Feeling</p>
          </div>
          <div className="bars" id="JP">
            <div className="bar"></div>
            <div className="circle"></div>
            <p className="leftside">Judging</p>
            <p className="rightside">Perceiving</p>
          </div>
          <div className="bio box">
            <h3 className='art'>Bio</h3>
            <p className='art-opp'>
              When Mina was five, she had an ear infection that caused deafness in her right ear. She could still hear with her left ear, but by the time she was 15, she had lost much of her hearing. She can recognize high-pitched female voices but otherwise communicates through text, speech reading, and sign language.
            </p>
          </div>
          <div className="needs box">
            <h3 className='art'>Needs</h3>
            <p className='art-opp'>
              Mina loves art and culture and spends her free time searching for exhibitions and visiting places she wants to explore. She used to enjoy attending exhibitions alone, but recently she has been looking for docents, as she finds it more engaging to learn the deeper meanings behind artworks. She wishes there were more sign language interpreters available for docent programs.
            </p>
          </div>
          <div className="experience box">
            <h3 className='art'>Experience</h3>
            <p className='art-opp'>
              Mina attended a museum docent session, but it was the last time slot and very crowded, making it difficult for her to see the curator&lsquo;s lips. On top of that, the curator&lsquo;s low-pitched voice made it hard to understand. As a result, Mina ended up exploring the exhibition on her own.
            </p>
          </div>
        </div>

        <div id="persona2" className="persona section-auto section8">
          <div className="profile-img">
            <div className="portrait"></div>
          </div>
          <div className='profile-desc'>
            <div className="quote box art">
              <p className='title'>Persona 02</p>
              <p className="quotes">
                <q><em>
                  I wish to explore artworks deeply without the limitations of fixed docent schedules.
                </em></q>
              </p>
            </div>
            <div className="profile">
              <table>
                <tbody>
                  <tr>
                    <th className='art' colSpan={2} style={{ fontSize: '1.2rem' }}>
                      Yoonha Lee
                    </th>
                    <td><p className='art'></p></td>
                    {ratio < 1 && <td rowSpan={4} style={{
                      width: '30%',
                      height: '100%',
                      backgroundImage: 'url(./art/portrait2-mobile.jpg)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                    }}>
                    </td>}
                  </tr>
                  <tr>
                    <th><p className='art'>Age</p></th>
                    <td><p className='art'>20</p></td>
                  </tr>
                  <tr>
                    <th><p className='art'>Location</p></th>
                    <td><p className='art'>Incheon, Korea</p></td>
                  </tr>
                  <tr>
                    <th><p className='art'>Family</p></th>
                    <td><p className='art'>Parents, 1 younger sister</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="bars" id="EI">
            <div className="bar"></div>
            <div className="circle"></div>
            <p className="leftside">Extrovert</p>
            <p className="rightside">Introvert</p>
          </div>
          <div className="bars" id="SN">
            <div className="bar"></div>
            <div className="circle"></div>
            <p className="leftside">Sensing</p>
            <p className="rightside">Intuition</p>
          </div>
          <div className="bars" id="TF">
            <div className="bar"></div>
            <div className="circle"></div>
            <p className="leftside">Thinking</p>
            <p className="rightside">Feeling</p>
          </div>
          <div className="bars" id="JP">
            <div className="bar"></div>
            <div className="circle"></div>
            <p className="leftside">Judging</p>
            <p className="rightside">Perceiving</p>
          </div>
          <div className="bio box">
            <h3 className='art'>Bio</h3>
            <p className='art-opp'>
              Yoonha was born with congenital hearing loss. As a child, she was teased for her speech difficulties, which left a lasting impact. Now, she rarely speaks and prefers to communicate through sign language. She loves to draw because it allows her to express herself without words. Museums inspire her artwork, but she wishes to understand the exhibits more deeply.
            </p>
          </div>
          <div className="needs box">
            <h3 className='art'>Needs</h3>
            <p className='art-opp'>
              Yoonha usually paints alone at home. Sometimes she visits an arts center for people with disabilities to connect with others and discuss painting. When she wants a change of scenery, she goes to museums during quiet hours, so she can watch sign language interpretation at her own pace.
            </p>
          </div>
          <div className="experience box">
            <h3 className='art'>Experience</h3>
            <p className='art-opp'>
              It&lsquo;s been a while since Yoonha last visited an art museum. She tried to sign up for a sign language interpretation guide, but the session was cancelled due to low attendance. She downloaded the museum app to read exhibit descriptions, but found the text difficult to read.
            </p>
          </div>

        </div>

        <div className="section-auto section9">
          <table className="journey-map art">
            <tbody>
              <tr>
                <td style={{ paddingTop: '1rem' }} className='journey-touch'>
                  <Image src="/art/portrait2-mobile.jpg" alt="portrait" width={1197} height={1220} className="journey-profile" />
                </td>
                <td colSpan={5} style={{ paddingTop: '1rem' }} className="journey-stage journey-case pt-5">
                  <b><p>Yoonha Lee </p></b>
                  <p>
                    She is visiting a gallery on the schedule of the sign language docent.
                  </p>
                </td>
              </tr>
              <tr>
                <th colSpan={5} className='text-xl'>
                  Journey Map
                </th>
              </tr>
              <tr className='bg-white text-black'>
                <th className="journey-touch">Stages</th>
                <th className="journey-stage">User action</th>
                <th colSpan="3">Feelings</th>
              </tr>
              <tr className='bg-[#f5f5f5] text-black'>
                <td className="journey-touch">
                  <p>
                    Motivation
                  </p>
                </td>
                <td className="journey-stage">
                  <p>
                    Wants to go to a gallery
                  </p>
                </td>
                <td></td>
                <td></td>
                <td className="journey-feeling"><Laugh size={24} className={"face-laugh-beam"} /></td>
              </tr>
              <tr className='bg-white text-black'>
                <td className="journey-touch"><p>
                  Discovery
                </p></td>
                <td className="journey-stage"><p>
                  Searches exhibitions and sign language docent programs
                </p></td>
                <td></td>
                <td className="journey-feeling"><Smile size={24} className="face-smile" /></td>
                <td></td>
              </tr>
              <tr className='bg-[#f5f5f5] text-black'>
                <td className="journey-touch"><p>
                  Booking
                </p></td>
                <td className="journey-stage"><p>
                  Selects a gallery and reserves a sign language docent
                </p></td>
                <td></td>
                <td></td>
                <td className="journey-feeling"><Laugh size={24} className={"face-laugh-beam"} /></td>
              </tr>
              <tr className='bg-white text-black'>
                <td className="journey-touch"><p>
                  Visit
                </p></td>
                <td className="journey-stage"><p>
                  Visits the gallery, however docent service is cancelled
                </p></td>
                <td className="journey-feeling"><Frown size={24} className="face-frown" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr className='bg-[#f5f5f5] text-black'>
                <td className="journey-touch"><p>
                  Explore
                </p></td>
                <td className="journey-stage"><p>
                  Appreciates artworks by reading descriptions
                </p></td>
                <td className="journey-feeling"><Frown size={24} className="face-frown" /></td>
                <td></td>
                <td></td>
              </tr>
              <tr className='bg-white text-black'>
                <td className="journey-touch"><p>
                  Completion
                </p></td>
                <td className="journey-stage"><p>
                  Leaves the gallery
                </p></td>
                <td></td>
                <td className="journey-feeling"><Smile size={24} className="face-smile" /></td>
                <td></td>
              </tr>
              <tr>
                <th className='text-xl pt-4' colSpan={7}>Solution</th>
              </tr>
              <tr className='bg-white text-black'>
                <td className="journey-touch"><p>
                  Discovery
                </p></td>
                <td className="journey-stage" colSpan={4}>
                  <Monitor size={24} className='inline-block desktop-screen' />
                  <Smartphone size={24} className='inline-block mobile-screen' />
                  <p className='inline'>
                    Archiving galleries offering sign language docent programs and enabling users to book these services.
                  </p></td>
              </tr>
              <tr className='bg-[#f5f5f5] text-black'>
                <td className="journey-touch"><p>
                  Explore
                </p></td>
                <td className="journey-stage" colSpan={4}>
                  <Smartphone size={24} className='inline-block mobile-screen' />
                  <p className='inline'>
                    Offering sign language docent services through augmented reality, enabling people to appreciate art at their convenience.
                  </p>
                </td>
              </tr>
              <tr className='h-[5rem]'></tr>
            </tbody>
          </table>
        </div>

        <div className='section-wo section11'>
          <p className='stroke' style={{ textAlign: 'center' }}>Prototype</p>
        </div>
      </div>
    </div>

  )
}