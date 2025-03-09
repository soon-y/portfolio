import { useState, useEffect, useRef } from 'react'
import { OrbitControls, Sparkles, Html, Stars } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { param } from './param.js'
import gsap from "gsap"
import Logo from './Logo.jsx'
import Snake from './Model/Snake.jsx'
import Billiard from './Model/Billiard.jsx'
import Dewy from './Model/Dewy.jsx'
import Art from './Model/Art.jsx'
import Caregem from './Model/Caregem.jsx'
import Skills from './Skills.jsx'
import './App.css'

function App(props) {
  const scale = Array.from({ length: 1000 }, () => 0.5 + Math.random() * 4)
  const UIdefault = useRef()
  const UItop = useRef()
  const UIback = useRef()
  const UInext = useRef()
  const Models = useRef()
  const [count, setCount] = useState(1)
  const [index, setIndex] = useState(0)
  const [target, setTarget] = useState(null)
  const [visible, setVisible] = useState(false)
  const [focus, setFocus] = useState(true)
  const [display, setDisplay] = useState('none')
  const [scrollIndex, setScrollIndex] = useState(0)
  const { camera, viewport } = useThree()
  const [radius, setRadius] = useState(viewport.aspect < 1.2 ? param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20 : param.diameter * 10)
  const step = Math.PI / 3
  const [hc, setHc] = useState((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
  const [wc, setWc] = useState((camera.aspect * hc) * 0.5)
  const dewy = useRef()
  const art = useRef()

  useEffect(() => {
    if (viewport.aspect < 1.2) { setRadius(param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20) }
    else { setRadius(param.diameter * 10) }
    setHc((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
    setWc((camera.aspect * hc) * 0.5)
    if (visible) camera.position.z = -radius * 2
  }, [viewport])

  useFrame((state, delta) => {
    if (focus) {
      const parallaxX = state.pointer.x
      const parallaxY = state.pointer.y
      camera.position.x += (parallaxX - camera.position.x) * delta
      camera.position.y += (parallaxY - camera.position.y) * delta
    }
  })

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { setFocus(false) }
    else { setFocus(true) }
  })

  if (Models.current) {
    gsap.to(Models.current.rotation, {
      y: step * index,
      duration: 1,
      ease: "power4.out",
    })
  }

  const next = () => {
    setCount(num => num + 1 > 6 ? 1 : num + 1)
    setIndex(num => num + 1)
  }

  if (scrollIndex > 0) {
    gsap.to(target.position, {
      y: hc * 2 + hc * 2 * scrollIndex,
      duration: 1,
      ease: "power4.out",
    })
  }

  const previous = () => {
    setCount(num => num - 1 < 1 ? 6 : num - 1)
    setIndex(num => num - 1)
  }

  const toDetails = (ref) => {
    UIdefault.current.style.display = 'none'
    UItop.current.style.display = 'block'
    UInext.current.style.display = 'block'
    setDisplay('block')
    setTarget(ref)

    gsap.to(ref.position, {
      y: hc * 2,
      duration: 1,
      ease: "power4.out",
    })
  }

  const toHome = () => {
    UIdefault.current.style.display = 'block'
    UItop.current.style.display = 'none'
    if (!((scrollIndex == 14 && target === dewy.current) || (scrollIndex == 9 && target === art.current))) {
      UInext.current.style.display = 'none'
    }
    setScrollIndex(0)
    setDisplay('none')
    gsap.to(target.position, {
      y: 0,
      duration: 1,
      ease: "power4.out",
    })
  }

  const toSkill = () => {
    UIdefault.current.style.display = 'none'
    UIback.current.style.display = 'block'
    gsap.to(camera.position, {
      z: -radius * 2,
      duration: 0.8,
      ease: "power4.out",
    })
    setVisible(true)
  }

  const toLogo = () => {
    UIdefault.current.style.display = 'block'
    UIback.current.style.display = 'none'
    gsap.to(camera.position, {
      z: 0,
      duration: 0.8,
      ease: "power4.out",
    })
    setVisible(false)
  }

  return (
    <>
      {/* <OrbitControls /> */}
      <Sparkles count={scale.length} size={scale} position={[0, 0, 0]} scale={[30, 30, 30]} speed={0.1} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={1.5} />

      {/* <axesHelper args={[10]} /> */}
      <group ref={Models}>
        <Dewy position={[Math.sin(step * 1) * radius, 0, Math.cos(step * 1) * radius]} rotation-y={step * 4} onClick={() => toDetails(dewy.current)} ref={dewy} display={display} />
        <Snake    position={[Math.sin(step*2) * radius, 0, Math.cos(step*2) * radius]} rotation-y={step*5} />
        <Logo position={[Math.sin(step * 3) * radius, 0, Math.cos(step * 3) * radius]} onClick={toSkill} />
        <Art position={[Math.sin(step * 4) * radius, 0, Math.cos(step * 4) * radius]} rotation-y={step * 1} onClick={() => toDetails(art.current)} ref={art} display={display} />
        <Caregem  position={[Math.sin(step*5) * radius, 0, Math.cos(step*5) * radius]} rotation-y={step*2} />
        <Billiard position={[Math.sin(step*6) * radius, 0, Math.cos(step*6) * radius]} rotation-y={step*3} />
        <Skills position={[Math.sin(step * 3) * radius, 0, Math.cos(step * 3) * radius * 3]} visible={visible} />
      </group>

      <Html>
        {count === 1 && <a href='https://www.linkedin.com/in/soonyoung-park/' target='_blank' style={{cursor: 'auto'}}>
        <div style={{backgroundColor:'transparent', width: '25%', height: '25%', position: 'fixed', top: 0, left: 0}}>
        </div>
        </a>}
        <div ref={UIdefault}>
          <p className='nav page-nav center'>{count} / 6</p>
          <FontAwesomeIcon icon={faArrowRight} className='arrow-icon' style={{ right: 0 }} onClick={next} />
          <FontAwesomeIcon icon={faArrowLeft} className='arrow-icon' style={{ left: 0 }} onClick={previous} />
        </div>
        <p className='nav back button-decoration' ref={UIback} onClick={toLogo}>Back</p>
        <p className='nav top button-decoration' ref={UItop} onClick={toHome}>Top</p>
        {!((scrollIndex == 14 && target === dewy.current) || (scrollIndex == 9 && target === art.current)) &&
          <p className='nav next button-decoration' ref={UInext} onClick={() => setScrollIndex(num => num + 1)}>Next</p>}
      </Html>
    </>
  )
}

export default App
