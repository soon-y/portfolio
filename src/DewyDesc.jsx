import React, { useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Float, Sparkles, Environment } from '@react-three/drei'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faCloudMoon } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router'
import { param } from './param.js'
import Mobile from "./Model/Mobile.jsx"
import Dewy from "./Model/Dewy.jsx"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import './dewy.css'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

export default function DewyDesc() {
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight)
  const [daytime, setDaytime] = useState(true)
  const [weatherIndex, setWeather] = useState(0)
  const [moonPhase, setMoonphase] = useState(4)
  const [radius, setRadius] = useState(ratio > 1 ? ratio * 3 : 5)
  const scale = Array.from({ length: 500 }, () => 0.5 + Math.random() * 4)

  const section0 = useRef(null)
  const section1 = useRef(null)
  const section2 = useRef(null)
  const section3 = useRef(null)
  const section4 = useRef(null)
  const section5 = useRef(null)
  const section6 = useRef(null)
  const section7 = useRef(null)
  const section8 = useRef(null)
  const section9 = useRef(null)
  const section10 = useRef(null)
  const section11 = useRef(null)
  const section12 = useRef(null)
  const section13 = useRef(null)
  const text0 = useRef(null)
  const img01 = useRef(null)
  const text2 = useRef(null)
  const text3 = useRef(null)
  const text4 = useRef(null)
  const text5 = useRef(null)
  const img08_1 = useRef(null)
  const img08_2 = useRef(null)
  const img09_1 = useRef(null)
  const img09_2 = useRef(null)
  const img10_1 = useRef(null)
  const img10_2 = useRef(null)
  const img11_1 = useRef(null)
  const img11_2 = useRef(null)
  const img12 = useRef(null)
  const img13 = useRef(null)
  const mobile = useRef(null)
  const mobile1 = useRef(null)
  const mobile2 = useRef(null)
  const mobile3 = useRef(null)
  const mobile4 = useRef(null)
  const prototype = useRef(null)
  const dewy = useRef(null)

  useEffect(() => {
    if (document.querySelector('.slider')) {
      const slider = document.querySelector('.slider')
      slider.style.setProperty(
        '--moonPhase',
        `url('/dewy/weather/thumb${moonPhase == 8 ? 0 : moonPhase}.png')`
      )
    }
  }, [moonPhase])

  useEffect(() => {
    if ((weatherIndex !== 0 && weatherIndex !== 1)) setMoonphase(4)
    if (daytime) setMoonphase(4)
  }, [weatherIndex, daytime])

  useEffect(() => {
    const checkIfElementsAreLoaded = () => {
      if (mobile.current && dewy.current && prototype.current) {
        const context = gsap.context(() => {
          const sec1 = gsap.timeline({
            scrollTrigger: {
              trigger: section1.current,
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec1.to('.top', { opacity: 1 }, 0)
          sec1.from(img01.current, { y: '50%' }, 0)
          sec1.to(dewy.current.position, { y: 50 }, 0)

          const sec2 = gsap.timeline({
            scrollTrigger: {
              trigger: section2.current,
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec2.from(text2.current, { x: '20%', opacity: 0 }, 0)
          sec2.to(mobile.current.position, { y: ratio > 1 ? 0 : 0.5 }, 0)
          sec2.from(mobile.current.rotation, { y: Math.PI / 2 }, 0)

          const sec3 = gsap.timeline({
            scrollTrigger: {
              trigger: section3.current,
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec3.from(text3.current, { x: '20%', opacity: 0 }, 0)
          sec3.to(mobile.current.rotation, { y: -Math.PI / 2 }, 0)

          const sec4 = gsap.timeline({
            scrollTrigger: {
              trigger: section4.current,
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec4.from(text4.current, { x: '20%', opacity: 0 }, 0)
          sec4.to(mobile.current.rotation, { y: -Math.PI }, 0)
          sec4.to(mobile1.current, { opacity: 0 }, 0)

          const sec5 = gsap.timeline({
            scrollTrigger: {
              trigger: section5.current,
              start: 'top center',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec5.from(text5.current, { x: '20%', opacity: 0 }, 0)
          sec5.to(mobile.current.rotation, { y: -Math.PI * 1.5 }, 0)

          const sec6 = gsap.timeline({
            scrollTrigger: {
              trigger: section6.current,
              start: 'top 80%',
              end: 'bottom bottom',
              scrub: 1,
              ease: "power1.out"
            }
          })
          sec6.to(mobile.current.position, { y: 10 }, 0)

          const sec6_1 = gsap.timeline({
            scrollTrigger: {
              trigger: section6.current,
              start: 'top 10%',
              end: 'bottom bottom',
              scrub: 1,
              ease: "power1.out"
            }
          })
          sec6_1.from('.weatherIcon', { opacity: 0, x: '10%' })
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

          const sec7 = gsap.timeline({
            scrollTrigger: {
              trigger: section7.current,
              start: 'top 80%',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec7.to(prototype.current.position, { y: 0 }, 0)

          const sec8 = gsap.timeline({
            scrollTrigger: {
              trigger: section8.current,
              start: 'top 80%',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec8.from(img08_1.current, { y: '50%' }, 0)
          sec8.from(img08_2.current, { y: '50%' }, 0)

          const sec9 = gsap.timeline({
            scrollTrigger: {
              trigger: section9.current,
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec9.from(img09_1.current, { y: '50%' }, 0)
          sec9.from(img09_2.current, { y: '50%' }, 0)

          const sec10 = gsap.timeline({
            scrollTrigger: {
              trigger: section10.current,
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec10.from(img10_1.current, { y: '50%' }, 0)
          sec10.from(img10_2.current, { y: '50%' }, 0)

          const sec11 = gsap.timeline({
            scrollTrigger: {
              trigger: section11.current,
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec11.from(img11_1.current, { y: '50%' }, 0)
          sec11.from(img11_2.current, { y: '50%' }, 0)

          const sec12 = gsap.timeline({
            scrollTrigger: {
              trigger: section12.current,
              start: 'top bottom',
              end: 'bottom center',
              scrub: 1,
            }
          })
          sec12.from(img12.current, { y: '50%' }, 0)

          const sec13 = gsap.timeline({
            scrollTrigger: {
              trigger: section13.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: 1,
            }
          })
          sec13.from(img13.current, { y: '-20%' }, 0)
        })

        const sec3_mobile = gsap.timeline({
          scrollTrigger: {
            trigger: section3.current,
            start: 'top 20%',
            end: 'bottom bottom',
            scrub: 1,
          }
        })
        sec3_mobile.from(mobile2.current, { opacity: 0 }, 0)

        const sec4_mobile = gsap.timeline({
          scrollTrigger: {
            trigger: section4.current,
            start: 'top 20%',
            end: 'bottom bottom',
            scrub: 1,
          }
        })
        sec4_mobile.from(mobile3.current, { opacity: 0 }, 0)

        const sec5_mobile = gsap.timeline({
          scrollTrigger: {
            trigger: section5.current,
            start: 'top 20%',
            end: 'bottom bottom',
            scrub: 1,
          }
        })
        sec5_mobile.from(mobile4.current, { opacity: 0 }, 0)

        return () => context.revert()
      } else {
        setTimeout(checkIfElementsAreLoaded, 100)
      }
    }
    checkIfElementsAreLoaded()

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [])

  const handleResize = () => {
    const newRatio = window.innerWidth / window.innerHeight;
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
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.1} />
        <Environment preset="sunset" />
        <Sparkles count={scale.length} size={scale} position={[0, 0, -10]} scale={[12, 12, 20]} speed={0.1} />

        <group ref={dewy}>
          <Dewy position={[
            ratio > 1 ? -ratio * 4.6 : 0,
            ratio > 1 ? 1 : 2 + (1 - ratio) * 9,
            ratio > 1 ? -20 : -20 - 20 * (1 - ratio)]}
            onClick={() => { window.open("https://dewydays.vercel.app", "_blank") }} opacity={0} />
        </group>

        <group ref={mobile} position={[ratio > 1 ? -radius * 1.5 : -radius, -10, -8]} >
          <Float speed={0.1} rotationIntensity={0.1} floatIntensity={0.1}>
            <Mobile position={[radius, 0, 0]} ref={mobile1}
              rotation={[0, -Math.PI / 2, 0]}
              scale={1}
              matcap={param.matcapSky}
              src={"./dewy/v1-profile.mp4"}
              content={"video"} />

            <Mobile position={[0, 0, -radius]} ref={mobile2}
              rotation={[0, 0, 0]}
              scale={1}
              matcap={param.matcapSky}
              src={"./dewy/v2-cupSelection.mp4"}
              content={"video"} />

            <Mobile position={[-radius, 0, 0]} ref={mobile3}
              rotation={[0, Math.PI / 2, 0]}
              scale={1}
              matcap={param.matcapSky}
              src={"./dewy/v3-sliderAdjustion.mp4"}
              content={"video"} />

            <Mobile position={[0, 0, radius]} ref={mobile4}
              rotation={[0, Math.PI, 0]}
              scale={1}
              matcap={param.matcapSky}
              src={"./dewy/v4-weather.mp4"}
              content={"video"} />
          </Float>
        </group>

        <group position={[0, -10, -7]} ref={prototype}>
          <Mobile
            rotation={[0, -Math.PI / 2, 0]}
            scale={1}
            matcap={param.matcapSky}
            src={"https://dewydays.vercel.app/"}
            content={"iframe"} />
        </group>
      </Canvas>

      <div className='wrapper'>
        <Link to={'/'}>
          <p className='nav back button-decoration'>Back</p>
        </Link>
        <p className='nav top button-decoration'><a href='#first'>Top</a></p>

        <div id='first' className='section-wo flex-container' ref={section0}>
          <div className='left-side dewy desc'>
            <p className='stroke' ref={text0} style={{ marginTop: ratio > 1 ? 0 : '5rem' }}>
              Dewy Days
            </p>
          </div>
          <div className='right-side'>
            <div className='desc dewy'>
              <p>
                <a className='dewy' target="_blank" href="https://www.bbc.com/future/article/20190403-how-much-water-should-you-drink-a-day">
                  How much water should we drink a day? </a>
                It's very important to drink appropriate amount of water every day.
                The water you should intake depends on your age, weight and activity level. The weather also apparently affects.
                In general, people think that they should drink more water than usual when it's extremely hot,
                however, that wasn't the case for me.
                <br />
                I used to drink little water, and <a className='dewy' target="_blank" href="https://www.bbc.com/news/world-asia-65247927">
                  the fine dust in Korea</a> made my nose and throat feel dry.
                I started thinking about how to make drinking water fun,
                and came up with the idea to make it an interactive and fun game to achieve my daily goal!
              </p>
            </div>
          </div>
        </div>

        <div className='section-img' ref={section1} style={{ backgroundColor: '#f3f3f3' }}>
          <img className="img-item" ref={img01} src='/dewy/phone-web.jpg' />
        </div>

        <div className='section flex-container' ref={section2}>
          <div className='left-side' style={{ height: ratio > 1 ? '100vh' : '70vh', position: 'relative' }}>
          </div>
          <div className='right-side desc dewy'>
            <div ref={text2} className='text-opacity'>
              <p style={{ fontWeight: 700, fontSize: ratio > 1 ? '3rem' : '2rem', lineHeight: 1.1, margin: '0.5rem 0', }}>
                Reach your goal with Dewy!
              </p>
              <p>
                The amount of water you need to drink depends on your weight, thet weather, and your daily activity level.
                Establish your weight and exercise time and find out the daily goal.
                If you want to have a habit of drinking water regularly, setting alarms helps you achieve the goal.
              </p>
            </div>
          </div>
        </div>

        <div className='section flex-container' ref={section3}>
          <div className='left-side'>
          </div>
          <div className='right-side desc dewy'>
            <div ref={text3} className='text-opacity'>
              <p style={{ fontWeight: 700, fontSize: ratio > 1 ? '3rem' : '2rem', lineHeight: 1.1, margin: '0.5rem 0', }}>
                Set the capacity of your favorites
              </p>
              <p>
                You can specify the capacity of your preferred cup, tumbler, and bottle, respectively.
                To change cups, switch the cup icon and set the volume of cup.
              </p>
            </div>
          </div>
        </div>

        <div className='section flex-container' ref={section4}>
          <div className='left-side'>
          </div>
          <div className='right-side desc dewy'>
            <div ref={text4} className='text-opacity'>
              <p style={{ fontWeight: 700, fontSize: ratio > 1 ? '3rem' : '2rem', lineHeight: 1.1, margin: '0.5rem 0', }}>
                Easily add your water intake
              </p>
              <p>
                After selecting a cup, simply add water by adjusting the slider to the amount you drink.
                Then the water fills up, Dewy splashs around, and your percentage of water intake towards your goal updates.
                You can review the cups and amounts you had in Timeline.
              </p>
            </div>
          </div>
        </div>

        <div className='section flex-container' ref={section5}>
          <div className='left-side'>
          </div>
          <div className='right-side desc dewy'>
            <div ref={text5} className='text-opacity'>
              <p style={{ fontWeight: 700, fontSize: ratio > 1 ? '3rem' : '2rem', lineHeight: 1.1, margin: '0.5rem 0', }}>
                Real-time weather updates
              </p>
              <p>
                Dewy Days provides real-time weather data via
                <a href="https://open-meteo.com/" target="_blank"> Open Meteo API</a>.
                If the particulate matter index (PM10/PM2.5) is very poor or the temperature is too high,
                make sure to drink plenty of water.
              </p>
            </div>
          </div>
        </div>

        <div className='section' ref={section6} style={{
          backgroundImage: daytime ? "url('./dewy/weather/bg.jpg')" : "url('./dewy/weather/bgNight.jpg')",
          backgroundSize: 'cover', backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', height: '100vh', width: 'auto',
          display: 'flex', flexDirection: 'column',
          justifyItems: 'center', alignItems: 'center',
        }}>
          <p className='weatherIcon'>Weather Icon</p>
          <div className='weatherDaytime'>
            <FontAwesomeIcon icon={faCloudSun} className='bubble' style={{
              margin: '1rem 0.5rem',
              backgroundColor: daytime ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0)'
            }} onClick={() => setDaytime(true)} />
            <FontAwesomeIcon icon={faCloudMoon} className='bubble' style={{
              margin: '1rem 0.5rem',
              backgroundColor: !daytime ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0)'
            }} onClick={() => setDaytime(false)} />
          </div>

          <div className='weatherImg' style={{
            height: ratio > 0.5 ? '40%' : 'auto',
            width: ratio > 0.5 ? 'auto' : '90%',
            aspectRatio: 1,
            margin: 'auto',
            position: 'relative',
          }}>

            {daytime && (weatherIndex === 0) &&
              <div>
                <img src='dewy/weather/sunMane.png' alt='sun' className='weatherComp sunMane sun' />
                <img src='dewy/weather/sunFace.png' alt='sun' className='weatherComp sunFace sun' />
              </div>}

            {daytime && (weatherIndex === 1) &&
              <div>
                <img src='dewy/weather/sunMane.png' alt='sun' className='weatherComp sunMane sunManeCloud sun' />
                <img src='dewy/weather/sunFace.png' alt='sun' className='weatherComp sunFaceCloud sun' />
                <img src='dewy/weather/cloud.png' alt='cloud' className='weatherComp partlyCloud' />
              </div>}

            {daytime && (weatherIndex === 2) &&
              <div>
                <img src='dewy/weather/cloud.png' alt='cloud' className='weatherComp cloud' />
              </div>}

            {!daytime && (weatherIndex === 2) &&
              <div>
                <img src='dewy/weather/cloudNight.png' alt='cloud' className='weatherComp cloud' />
              </div>}

            {daytime && (weatherIndex === 3) &&
              <div>
                <img src="/dewy/weather/smog.png" alt="smog" className="weatherComp smogT smog" />
                <img src="/dewy/weather/smog.png" alt="smog" className="weatherComp smogB smog" />
              </div>}

            {!daytime && (weatherIndex === 3) &&
              <div>
                <img src="/dewy/weather/smogNight.png" alt="smog" className="weatherComp smogT smog" />
                <img src="/dewy/weather/smogNight.png" alt="smog" className="weatherComp smogB smog" />
              </div>}

            {daytime && (weatherIndex === 4) &&
              <div>
                <img src="/dewy/weather/rain.png" alt="rain" className="weatherComp drizzle0 drop" />
                <img src="/dewy/weather/rain.png" alt="rain" className="weatherComp drizzle1 drop" />
                <img src="/dewy/weather/rain.png" alt="rain" className="weatherComp drizzle2 drop" />
              </div>}

            {daytime && (weatherIndex === 5) &&
              <div>
                <img src="/dewy/weather/rain.png" alt="rain" className="weatherComp rain0 drop" />
                <img src="/dewy/weather/rain.png" alt="rain" className="weatherComp rain1 drop" />
                <img src="/dewy/weather/rain.png" alt="rain" className="weatherComp rain2 drop" />
              </div>}

            {!daytime && (weatherIndex === 4) &&
              <div>
                <img src="/dewy/weather/rainNight.png" alt="rain" className="weatherComp drizzle0 drop" />
                <img src="/dewy/weather/rainNight.png" alt="rain" className="weatherComp drizzle1 drop" />
                <img src="/dewy/weather/rainNight.png" alt="rain" className="weatherComp drizzle2 drop" />
              </div>}

            {!daytime && (weatherIndex === 5) &&
              <div>
                <img src="/dewy/weather/rainNight.png" alt="rain" className="weatherComp rain0 drop" />
                <img src="/dewy/weather/rainNight.png" alt="rain" className="weatherComp rain1 drop" />
                <img src="/dewy/weather/rainNight.png" alt="rain" className="weatherComp rain2 drop" />
              </div>}

            {daytime && (weatherIndex === 6) &&
              <div>
                <img src="/dewy/weather/rain.png" alt="rain" className="weatherComp rain0 drop" />
                <img src="/dewy/weather/lightning.png" alt="thunder" className="weatherComp lightning drop" />
                <img src="/dewy/weather/rain.png" alt="rain" className="weatherComp rain2 drop" />
              </div>}

            {!daytime && (weatherIndex === 6) &&
              <div>
                <img src="/dewy/weather/rainNight.png" alt="rain" className="weatherComp rain0 drop" />
                <img src="/dewy/weather/lightning.png" alt="thunder" className="weatherComp lightning drop" />
                <img src="/dewy/weather/rainNight.png" alt="rain" className="weatherComp rain2 drop" />
              </div>}

            {daytime && (weatherIndex === 7) &&
              <div>
                <img src="/dewy/weather/snow.png" alt="snow" className="weatherComp rain0 snow" />
                <img src="/dewy/weather/snow.png" alt="snow" className="weatherComp rain1 snow" />
                <img src="/dewy/weather/snow.png" alt="snow" className="weatherComp rain2 snow" />
              </div>}

            {!daytime && (weatherIndex === 7) &&
              <div>
                <img src="/dewy/weather/snowNight.png" alt="snow" className="weatherComp rain0 snow" />
                <img src="/dewy/weather/snowNight.png" alt="snow" className="weatherComp rain1 snow" />
                <img src="/dewy/weather/snowNight.png" alt="snow" className="weatherComp rain2 snow" />
              </div>}

            {daytime && (weatherIndex === 8) &&
              <div>
                <img src="/dewy/weather/tornado0.png" alt="tornado" className="weatherComp tornado tornado0" />
                <img src="/dewy/weather/tornado1.png" alt="tornado" className="weatherComp tornado tornado1" />
                <img src="/dewy/weather/tornado2.png" alt="tornado" className="weatherComp tornado tornado2" />
                <img src="/dewy/weather/tornado3.png" alt="tornado" className="weatherComp tornado tornado3" />
              </div>}

            {!daytime && (weatherIndex === 8) &&
              <div>
                <img src="/dewy/weather/tornadoNight0.png" alt="tornado" className="weatherComp tornado tornado0" />
                <img src="/dewy/weather/tornadoNight1.png" alt="tornado" className="weatherComp tornado tornado1" />
                <img src="/dewy/weather/tornadoNight2.png" alt="tornado" className="weatherComp tornado tornado2" />
                <img src="/dewy/weather/tornadoNight3.png" alt="tornado" className="weatherComp tornado tornado3" />
              </div>}

            {daytime && (weatherIndex === 3 || weatherIndex === 4 || weatherIndex === 5 ||
              weatherIndex === 6 || weatherIndex === 7) &&
              <div>
                <img src='dewy/weather/cloud.png' alt="cloud" className='weatherComp cloud cloudmit' />
              </div>}

            {!daytime && (weatherIndex === 3 || weatherIndex === 4 || weatherIndex === 5 ||
              weatherIndex === 6 || weatherIndex === 7) &&
              <div>
                <img src='dewy/weather/cloudNight.png' alt="cloud" className='weatherComp cloud cloudmit' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 4) &&
              <div>
                <img src='dewy/weather/moonlight.png' alt="moonlight" className='weatherComp moonlight sun' />
                <img src='dewy/weather/moonFace.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 0) &&
              <div>
                <img src='dewy/weather/moon0.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 1) &&
              <div>
                <img src='dewy/weather/moon1.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 2) &&
              <div>
                <img src='dewy/weather/moon2.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 3) &&
              <div>
                <img src='dewy/weather/moon3.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 5) &&
              <div>
                <img src='dewy/weather/moon5.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 6) &&
              <div>
                <img src='dewy/weather/moon6.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 7) &&
              <div>
                <img src='dewy/weather/moon7.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}

            {(!daytime) && (weatherIndex === 0) && (moonPhase == 8) &&
              <div>
                <img src='dewy/weather/moon0.png' alt="moon" className='weatherComp sunFace sun' />
              </div>}


            {(!daytime) && (weatherIndex === 1) && (moonPhase == 4) &&
              <div>
                <img src='dewy/weather/moonlight.png' alt="moonlight" className='weatherComp moonlightCloud sun' />
                <img src='dewy/weather/moonFace.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 0) &&
              <div>
                <img src='dewy/weather/moon0.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 1) &&
              <div>
                <img src='dewy/weather/moon1.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 2) &&
              <div>
                <img src='dewy/weather/moon2.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 3) &&
              <div>
                <img src='dewy/weather/moon3.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 5) &&
              <div>
                <img src='dewy/weather/moon5.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 6) &&
              <div>
                <img src='dewy/weather/moon6.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 7) &&
              <div>
                <img src='dewy/weather/moon7.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {(!daytime) && (weatherIndex === 1) && (moonPhase == 8) &&
              <div>
                <img src='dewy/weather/moon0.png' alt="moon" className='weatherComp sunFaceCloud sun' />
              </div>}

            {!daytime && (weatherIndex === 1) &&
              <div>
                <img src='dewy/weather/cloudNight.png' alt='cloud' className='weatherComp partlyCloud' />
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
              backgroundColor: weatherIndex === 0 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)',
            }}><p>Clear</p></button>
            <button className="weatherBtn btn1" onClick={() => setWeather(1)} style={{
              backgroundColor: weatherIndex === 1 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
            }}><p style={{ transform: 'translateY(-25%)' }}>Partly cloudy</p></button>
            <button className="weatherBtn btn2" onClick={() => setWeather(2)} style={{
              backgroundColor: weatherIndex === 2 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
            }}><p>Overcast</p></button>
            <button className="weatherBtn btn3" onClick={() => setWeather(3)} style={{
              backgroundColor: weatherIndex === 3 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
            }}><p>Fog</p></button>
            <button className="weatherBtn btn4" onClick={() => setWeather(4)} style={{
              backgroundColor: weatherIndex === 4 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
            }}><p>Drizzle</p></button>
            <button className="weatherBtn btn5" onClick={() => setWeather(5)} style={{
              backgroundColor: weatherIndex === 5 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
            }}><p>Rain</p></button>
            <button className="weatherBtn btn6" onClick={() => setWeather(6)} style={{
              backgroundColor: weatherIndex === 6 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
            }}><p>Thunder</p></button>
            <button className="weatherBtn btn7" onClick={() => setWeather(7)} style={{
              backgroundColor: weatherIndex === 7 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
            }}><p>Snow</p></button>
            <button className="weatherBtn btn8" onClick={() => setWeather(8)} style={{
              backgroundColor: weatherIndex === 8 ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0)'
            }}><p>Tornado</p></button>
          </div>
        </div>

        <div style={{ width: '100vw', height: '100vh' }} ref={section7}>
          <p className='stroke' style={{ textAlign: 'center' }}>Prototype</p>
        </div>

        <div className='section-img' style={{ backgroundColor: '#dddddd' }} ref={section8}>
          <img src='/dewy/flyer-web.jpg' className='img-item web' ref={img08_1} />
          <img src='/dewy/flyer-mobile.jpg' className='img-item mobile' ref={img08_2} />
        </div>

        <div className='section-img' style={{ backgroundColor: '#acb6b5' }} ref={section9}>
          <img src='/dewy/cup-web.png' className='img-item web' ref={img09_1} />
          <img src='/dewy/cup-mobile.png' className='img-item mobile' ref={img09_2} />
        </div>

        <div className='section-img' style={{ backgroundColor: '#8a9292' }} ref={section10}>
          <img src='/dewy/cups-web.png' className='img-item web' ref={img10_1} />
          <img src='/dewy/cups-mobile.png' className='img-item mobile' ref={img10_2} />
        </div>

        <div className='section-img' style={{ backgroundColor: '#a5adad' }} ref={section11}>
          <img src='/dewy/tumbler-web.png' className='img-item web' ref={img11_1} />
          <img src='/dewy/tumbler-mobile.png' className='img-item mobile' ref={img11_2} />
        </div>

        <div className='section-img' style={{ backgroundColor: '#c7d3cf' }} ref={section12}>
          <img src='/dewy/water-package-web.png' className='img-item' ref={img12} />
        </div>

        <div className='section-img' ref={section13} style={{
          background: "url('./dewy/card-web.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <img src='/dewy/card-web.png' className='full-img' ref={img13} />
        </div>

      </div>
    </div>
  )
}