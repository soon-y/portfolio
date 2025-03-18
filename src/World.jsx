import { useState, useEffect, useRef } from 'react'
import { OrbitControls, Sparkles, Html } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { param } from './param.js'
import gsap from "gsap"
import Logo from './Logo.jsx'
import Snake from './Model/Snake.jsx'
import Billiard from './Model/Billiard.jsx'
import Dewy from './Model/Dewy.jsx'
import Art from './Model/Art.jsx'
import Caregem from './Model/Caregem.jsx'
import Skills from './Skills.jsx'

function World(props) {
  const arrows = document.getElementsByClassName("arrow-icon")
  const pageNav = document.querySelector(".page-nav");
  const linkedIn = document.querySelector(".linkedIn");
  const scale = Array.from({ length: 1000 }, () => 0.5 + Math.random() * 4)
  const UIback = useRef()
  const Models = useRef()
  const [visible, setVisible] = useState(false)
  const { camera, viewport } = useThree()
  const [radius, setRadius] = useState(viewport.aspect < 1.2 ? param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20 : param.diameter * 10)
  const step = Math.PI / 3
  const [hc, setHc] = useState((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
  const [wc, setWc] = useState((camera.aspect * hc) * 0.5)

  useEffect(() => {
    if (viewport.aspect < 1.2) { setRadius(param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20) }
    else { setRadius(param.diameter * 10) }
    setHc((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
    setWc((camera.aspect * hc) * 0.5)
    if (visible) camera.position.z = -radius * 2
  }, [viewport])

  useEffect(() => {
    Models.current.rotation.y = step * props.index 
  }, [])

  useFrame((state, delta) => {
    if (!document.hidden) {
      const parallaxX = state.pointer.x
      const parallaxY = state.pointer.y
      camera.position.x += (parallaxX - camera.position.x) * delta
      camera.position.y += (parallaxY - camera.position.y) * delta
    }
  })

  if (Models.current) {
    gsap.to(Models.current.rotation, {
      y: step * props.index,
      duration: 1,
      ease: "power1.out",
    })
  }

  const toSkill = () => {
    arrows[0].style.display = 'none'
    arrows[1].style.display = 'none'
    linkedIn.style.display = 'none'
    pageNav.style.display = 'none'
    UIback.current.style.display = 'block'
    gsap.to(camera.position, {
      z: -radius * 2,
      duration: 0.8,
      ease: "power4.out",
    })
    setVisible(true)
  }

  const toLogo = () => {
    arrows[0].style.display = 'block'
    arrows[1].style.display = 'block'
    linkedIn.style.display = 'block'
    pageNav.style.display = 'block'
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
      <Sparkles count={scale.length} size={scale} position={[0, 0, -radius]} speed={0.1} scale={[
        12, 
        viewport.aspect >= 0.5 ? 12 : 20, 
        radius*3]} />
      <ambientLight intensity={1} />
      <directionalLight position={[0, 3, 3]} intensity={1.5} />

      {/* <axesHelper args={[10]} /> */}
        <group ref={Models}>
          <Dewy position={[Math.sin(step * 1) * radius, 0, Math.cos(step * 1) * radius]} rotation-y={step * 4} dewy_hovered = {props.dewy_hovered}/>
          <Snake    position={[Math.sin(step*2) * radius, 0, Math.cos(step*2) * radius]} rotation-y={step*5} />
          <Logo position={[Math.sin(step * 3) * radius, 0, Math.cos(step * 3) * radius]} onClick={toSkill} />
          <Billiard position={[Math.sin(step * 4) * radius, 0, Math.cos(step * 4) * radius]} rotation-y={step*1} />
          <Caregem  position={[Math.sin(step*5) * radius, 0, Math.cos(step*5) * radius]} rotation-y={step*2} />
          <Art position={[Math.sin(step*6) * radius, 0, Math.cos(step*6) * radius]} rotation-y={step * 3} />
          <Skills position={[Math.sin(step * 3) * radius, 0, Math.cos(step * 3) * radius * 3]} visible={visible} />
        </group>

      <Html>
        <p className='nav back button-display button-decoration' ref={UIback} onClick={toLogo}>Back</p>
      </Html>
    </>
  )
}

export default World
