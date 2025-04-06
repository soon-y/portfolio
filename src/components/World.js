"use client"

import { useState, useEffect, useRef } from 'react'
import { Sparkles, Html, Environment } from '@react-three/drei'
import { useThree, useFrame } from '@react-three/fiber'
import { param } from '@/lib/param'
import gsap from "gsap"
import Logo from '@/components/Logo'
import Skills from '@/components/Skills'
import Snake from '@/models/Snake'
import Dewy from '@/models/Dewy'
import Multi from '@/models/Multi'
import Art from '@/models/Art'
import Caregem from '@/models/Caregem'
import Mobile from '@/models/Mobile'

function World(props) {
  const [domRefs, setDomRefs] = useState({ arrows: [], pageNav: null, linkedIn: null })
  const scale = Array.from({ length: 1000 }, () => 0.5 + Math.random() * 4)
  const UIback = useRef()
  const Models = useRef()
  const [visible, setVisible] = useState(false)
  const [touchDevice, setTouchDevice] = useState(false)
  const [permissionRequired, setPermission] = useState(false)
  const { camera, viewport } = useThree()
  const [radius, setRadius] = useState(viewport.aspect < 1.2 ? param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20 : param.diameter * 10)
  const [hc, setHc] = useState((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
  const step = Math.PI / 3

  useEffect(() => {
    if (viewport.aspect < 1.2) { setRadius(param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20) }
    else { setRadius(param.diameter * 10) }
    setHc((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
    if (visible) camera.position.z = -radius * 2
  }, [viewport, visible])

  useEffect(() => {
    if (Models.current) {
      gsap.to(Models.current.rotation, { y: step * props.index, duration: 1, ease: "power1.out" })
    }
  }, [props.index])

  useEffect(() => {
    const arrows = document.getElementsByClassName("arrow-icon")
    const pageNav = document.querySelector(".page-nav")
    const linkedIn = document.querySelector(".linkedIn")
    setDomRefs({ arrows, pageNav, linkedIn })

    if ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) {
      setTouchDevice(true)
    }

    Models.current.rotation.y = step * props.index
  }, [])

  useEffect(() => {
    if (!touchDevice) return
    if (typeof DeviceOrientationEvent?.requestPermission !== "function") {
      window.addEventListener("deviceorientation", parallax)
    } else {
      setPermission(true)
    }

    return () => window.removeEventListener("deviceorientation", parallax)
  }, [touchDevice])

  useFrame((state, delta) => {
    if (!document.hidden && !touchDevice) {
      const parallaxX = state.pointer.x
      const parallaxY = state.pointer.y
      camera.position.x += (parallaxX - camera.position.x) * delta
      camera.position.y += (parallaxY - camera.position.y) * delta
    }
  })

  const toSkill = () => {
    if (domRefs.arrows[0]) domRefs.arrows[0].style.display = 'none'
    if (domRefs.arrows[1]) domRefs.arrows[1].style.display = 'none'
    if (domRefs.linkedIn) domRefs.linkedIn.style.display = 'none'
    if (domRefs.pageNav) domRefs.pageNav.style.display = 'none'
    if (UIback.current) UIback.current.style.display = 'block'
    gsap.to(camera.position, {
      z: -radius * 2,
      duration: 0.8,
      ease: "power4.out",
    })
    setVisible(true)
  }

  const toLogo = () => {
    props.skillActive(false)
    if (domRefs.arrows[0]) domRefs.arrows[0].style.display = 'block'
    if (domRefs.arrows[1]) domRefs.arrows[1].style.display = 'block'
    if (domRefs.linkedIn) domRefs.linkedIn.style.display = 'block'
    if (domRefs.pageNav) domRefs.pageNav.style.display = 'block'
    if (UIback.current) UIback.current.style.display = 'none'
    gsap.to(camera.position, {
      z: 0,
      duration: 0.8,
      ease: "power4.out",
    })
    setVisible(false)
  }

  const requestOrientationPermission = () => {
    DeviceOrientationEvent.requestPermission().then((response) => {
      if (response == "granted") {
        setPermission(false)
        window.addEventListener("deviceorientation", parallax)
      }
    }).catch(console.error);
  }

  const parallax = (event) => {
    let yTilt, xTilt
    switch (screen.orientation.type) {
      case "portrait-primary":
        yTilt = 0
        xTilt = event.gamma * 0.01
        break;
      case "portrait-secondary":
        yTilt = 0
        xTilt = -event.gamma * 0.01
        break;
      case "landscape-primary":
      case "landscape-secondary":
        yTilt = event.beta * 0.01
        xTilt = 0
        break;
    }

    gsap.to(camera.position, {
      x: -xTilt,
      y: yTilt,
      duration: 0.6,
      ease: "power2.inout",
    })
  }

  return (
    <>
      <Sparkles count={scale.length} size={scale} position={[0, 0, -radius]} speed={0.1} scale={[
        12,
        viewport.aspect >= 0.5 ? 12 : 20,
        radius * 3]} />
      <ambientLight intensity={0} />
      <Environment preset="sunset" />

      <group ref={Models}>
        <Dewy position={[Math.sin(step * 1) * radius, 0, Math.cos(step * 1) * radius]} rotation-y={step * 4} dewy_hovered={props.dewy_hovered} />
        <Snake position={[Math.sin(step * 2) * radius, 0, Math.cos(step * 2) * radius]} rotation-y={step * 5} />
        <Logo position={[Math.sin(step * 3) * radius, 0, Math.cos(step * 3) * radius]} onClick={toSkill} />
        {permissionRequired &&
          <Mobile position={[viewport.aspect < 1 ? wc * 2 - 1.8 : wc * 2 - 1.2, viewport.aspect < 1 ? hc - 2 : hc - 1, Math.cos(step * 3) * radius]}
            scale={viewport.aspect < 1 ? .55 : .35} matcap={param.matcapWhite} rotation-y={-Math.PI / 2} redSign={true} onClick={requestOrientationPermission} />}
        <Multi position={[Math.sin(step * 4) * radius, 0, Math.cos(step * 4) * radius]} rotation-y={step * 1} MM_hovered={props.MM_hovered} />
        <Caregem position={[Math.sin(step * 5) * radius, 0, Math.cos(step * 5) * radius]} rotation-y={step * 2} />
        <Art position={[Math.sin(step * 6) * radius, 0, Math.cos(step * 6) * radius]} rotation-y={step * 3} />
        <Skills position={[Math.sin(step * 3) * radius, 0, Math.cos(step * 3) * radius * 3]} visible={visible} />
      </group>

      <Html>
        <p className='cursor-pointer fixed top-0 right-0 py-4 px-6' style={{ fontSize: '1.2rem', display: 'none' }} ref={UIback} onClick={toLogo}>Back</p>
      </Html>
    </>
  )
}

export default World