import { useRef, useState, useEffect, } from 'react'
import { useGLTF, Html, Float, Mask, useMask } from '@react-three/drei'
import Mobile from '@/models/Mobile'
import { param } from '@/lib/param'
import { ChevronUp, ChevronDown, BatteryMedium } from 'lucide-react'
import * as THREE from 'three'
import gsap from "gsap"

export default function Caregem(props) {
  const [hovered, setHover] = useState(false)
  const { nodes, materials } = useGLTF('/model/caregem.glb')
  const hourHand = useRef()
  const minHand = useRef()
  const secHand = useRef()
  const crown = useRef()
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  const today = new Date()
  const hour = useRef(new Date().getHours())
  const min = useRef(new Date().getMinutes())
  const [index, setIndex] = useState(1)
  const [scrollIndex, setScrollIndex] = useState(0)

  const distance = 3
  const angle = Math.PI / 30
  const hourAngle = Math.PI / 6
  const minAngle = hourAngle / 60
  const secAngle = angle / 60

  useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
  useEffect(() => {
    gsap.to(crown.current.rotation, {
      z: Math.PI / 4 * -scrollIndex,
      duration: 0.5,
      ease: "power2.inout",
    })
  }, [scrollIndex])

  setInterval(() => {
    if (hourHand.current && minHand.current && secHand.current) { updateHand() }
  }, 1000)
  useEffect(() => {
    if (hourHand.current && minHand.current && secHand.current) { updateHand() }
  })

  const updateHand = () => {
    const today = new Date()
    const second = today.getSeconds()
    const minute = today.getMinutes()
    const hour = today.getHours()
    hourHand.current.rotation.z = -(hourAngle * hour + minAngle * minute)
    minHand.current.rotation.z = -(angle * minute + secAngle * second)
    secHand.current.rotation.z = -(angle * second)
  }

  const setIndices = () => {
    setIndex(1)
    setScrollIndex(0)
  }

  return (
    <group {...props} dispose={null}>
      <Float speed={0.1} floatIntensity={0.1}>
        <Mobile rotation={[0, -Math.PI / 2 + 0.2, 0]} position={[-distance, 0, 0]} scale={3} color={param.rose}
          src={"https://caregem.vercel.app"}
          content={"iframe-time"} opacity={0}
          onPointerOut={() => setHover(false)}
          onPointerOver={() => setHover(true)} />

        <Html center transform position={[-distance + .1, 6.5, 1]} rotation={[0, 0.2, 0]}>
          <a href='https://caregem.vercel.app/' target='_blank'>
            <p>Discover more</p>
          </a>
        </Html>
      </Float>
      <Float speed={0.3} floatIntensity={0.1}>
        <Html center occlude="blending" transform wrapperClass='annotation' position={[distance, 4.5, 0]}>
          <p className='font-bold' style={{ fontSize: '1.4rem' }}>Caregem</p>
          <div className='sub-desc'> Smartwatch application </div>
          <div className='sub-logo'> <img src='/img/Vue.png' /> <img src='/img/ts.png' /></div>
        </Html>
        <group name='watch' position={[distance, -1, -.5]} scale={2} rotation={[0, -0.2, 0]}>
          <group name='crown'>
            {index === 1 && scrollIndex !== 4 &&
              <Html scale={0.8} center transform position={[1.1, 0.5, 1]}>
                <ChevronUp size={18} color='white' className='border cursor-pointer' style={{ borderRadius: '50%', borderColor: 'rgba(255,255,255,0.4)' }}
                  onClick={() => setScrollIndex(scrollIndex + 1 > 4 ? scrollIndex : scrollIndex + 1)} />
              </Html>}
            {index === 1 && scrollIndex !== 0 &&
              <Html scale={0.8} center transform position={[1.1, -0.5, 1]}>
                <ChevronDown size={18} color='white' className='border cursor-pointer' style={{ borderRadius: '50%', borderColor: 'rgba(255,255,255,0.4)' }}
                  onClick={() => setScrollIndex(scrollIndex - 1 < 0 ? scrollIndex : scrollIndex - 1)} />
              </Html>}
            <mesh ref={crown}
              geometry={nodes.crown.geometry}
              material={materials.crown}
              position={[0.877, -0.002, 1.362]}
              rotation={[0, Math.PI / 2, 0]}
              scale={0.108}
            />
          </group>
          <mesh
            geometry={nodes.hook.geometry}
            material={materials.crown}
            position={[-0.001, -0.122, -1.535]}
            rotation={[-0.054, -0.001, -0.002]}
            scale={[0.068, 0.068, 0.139]}
          />
          <Mask id={1} colorWrite={false} depthWrite={false} position={[0, 0, 1.6]}>
            <circleGeometry args={[0.8, 64]} />
            {index === 0 &&
              <Html center transform scale={0.25} position-y={0.6}>
                <p style={{ color: 'white', fontWeight: '500' }}>
                  {days[today.getDay()]} {hour.current < 10 ? '0' + hour.current : hour.current}:{min.current < 10 ? '0' + min.current : min.current}
                </p>
              </Html>}
            {index === 0 &&
              <Html center transform scale={0.3} position-y={-0.22}>
                <p style={{ color: 'white', fontWeight: '700', textAlign: 'center' }}>
                  Carbimazole <br />
                  1 <span style={{ fontSize: '.8rem', fontWeight: '500', }}>application</span>
                </p>
              </Html>}
            {(index === 0 || scrollIndex !== 0) &&
              <Html center transform scale={0.3} position-y={-0.6}>
                <BatteryMedium size={24} color='white' />
              </Html>}
            {index === 1 && scrollIndex !== 0 &&
              <Html center transform scale={0.2} position-y={0.6}>
                <p style={{ color: 'white', fontWeight: '400' }}>
                  {today.getDate()} {months[today.getMonth()]} {today.getFullYear()}
                </p>
              </Html>}
            {index === 1 && scrollIndex === 1 &&
              <Html center transform scale={0.3} position-y={-0.22}>
                <p style={{ textAlign: 'center', lineHeight: 1 }}>
                  <span className='font-bold' style={{ fontSize: '1.2rem' }}>89</span><br />
                  <span className='font-medium' style={{ fontSize: '0.8rem' }}>BPM</span>
                </p>
              </Html>}
            {index === 1 && scrollIndex === 2 &&
              <Html center transform scale={0.3} position-y={-0.22}>
                <p style={{ textAlign: 'center', lineHeight: 1 }}>
                  <span className='font-bold' style={{ fontSize: '1.2rem' }}>5421</span><br />
                  <span className='font-medium' style={{ fontSize: '0.8rem' }}>steps</span>
                </p>
              </Html>}
            {index === 1 && scrollIndex === 3 &&
              <Html center transform scale={0.3} position-y={-0.22}>
                <p style={{ textAlign: 'center', lineHeight: 1 }}>
                  <span className='font-bold' style={{ fontSize: '1.2rem' }}>4.8</span><br />
                  <span className='font-medium' style={{ fontSize: '0.8rem' }}>km/h</span>
                </p>
              </Html>}
            {index === 1 && scrollIndex === 4 &&
              <Html center transform scale={0.3} position-y={-0.22}>
                <p style={{ textAlign: 'center', lineHeight: 1 }}>
                  <span className='font-bold' style={{ fontSize: '1.2rem' }}>REM</span><br />
                  <span className='font-medium' style={{ fontSize: '0.8rem' }}>Sleep Mode</span>
                </p>
              </Html>}
          </Mask>

          <Screen
            onPointerOut={() => setHover(false)}
            onPointerOver={() => index === 0 ? setHover(true) : setHover(false)}
            onClick={setIndices}
            index={index}
            scrollIndex={scrollIndex} />

          {(index === 1 && scrollIndex === 0) &&
            <group>
              <mesh ref={secHand}
                geometry={nodes.secHand.geometry}
                material={materials['Material.003']}
                position={[-0.001, -0.001, 1.482]}
                scale={[0.01, 0.42, 0.013]}
              />
              <mesh ref={hourHand}
                geometry={nodes.hourHand.geometry}
                material={materials.hourhand}
                position={[-0.002, -0.006, 1.483]}
                scale={[0.012, 0.42, 0.001]}
              />
              <mesh ref={minHand}
                geometry={nodes.minHand.geometry}
                material={materials.lightPurple}
                position={[-0.002, -0.006, 1.482]}
                scale={[0.012, 0.42, 0.001]}
              />
            </group>}

          <group position={[-0.001, -1.012, 1.339]} scale={[0.469, 0.12, 0.064]}>
            <mesh
              geometry={nodes.strap_1.geometry}
              material={materials.strap}
            />
            <mesh
              geometry={nodes.strap_2.geometry}
              material={materials.crown}
            />
          </group>
          <mesh
            geometry={nodes.strap002.geometry}
            material={materials.strap}
            position={[-0.001, -1.012, 1.339]}
            scale={[0.469, 0.12, 0.064]}
          />
          <mesh
            geometry={nodes.strap_magnet.geometry}
            material={materials.crown}
            position={[-0.001, -1.066, 1.522]}
            scale={[0.498, 0.128, 0.068]}
          />
          <group position={[0, 0, 1.477]} scale={0.88}>
            <mesh
              geometry={nodes.watch_1.geometry}
              material={materials['case']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.watch_2.geometry}
              material={materials.crown}
            />
          </group>
          <mesh
            geometry={nodes.Cylinder001.geometry}
            material={materials.crown}
            position={[0, -0.936, 1.343]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.032, 0.032, 0.522]}
          />
          <mesh
            geometry={nodes.Cylinder002.geometry}
            material={materials.crown}
            position={[0, 0.946, 1.343]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[0.032, 0.032, 0.522]}
          />
        </group>
      </Float>

      <Float>
        <group name='pills' position={[distance + 2.4, 1, 1.5]} scale={1}
          onClick={() => setIndex(0)}
          onPointerOut={() => setHover(false)}
          onPointerOver={() => setHover(true)}>
          <mesh name='pill' rotation={[0, -Math.PI / 10, -Math.PI / 3]} position={[0.8, -0.5, 0]}
            geometry={nodes.Cylinder.geometry}
            material={materials['Material.001']}
            scale={[0.299, 0.299, 0.087]}
          />
          <group name='capsule' rotation={[0, -Math.PI / 6, Math.PI / 3]} position={[0, 0, 0]}>
            <mesh
              geometry={nodes.capsuleWhite.geometry}
              material={materials.pillWhite}
              position={[0.4, 0, 0]}
              rotation={[0, Math.PI / 2, 0]}
              scale={0.294}
            />
            <mesh
              geometry={nodes.capsuleColor.geometry}
              material={materials.pillColor}
              position={[-0.405, 0, 0]}
              rotation={[0, -1.571, 0]}
              scale={0.301}
            />
          </group>
        </group>
      </Float>
    </group>
  )
}

function Screen({ index, scrollIndex, ...props }) {
  const stencil = useMask(1)
  const [pill, setPill] = useState(null)
  const [scroll, setScroll] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const loader = new THREE.TextureLoader()

    loader.load('/caregem/pill.png', setPill)
    loader.load('/caregem/scrollImg.png', setScroll)
  }, [])

  useEffect(() => {
    if (ref.current) {
      gsap.to(ref.current.position, {
        y: scrollIndex * 1.6,
        duration: 0.5,
        ease: 'power2.inOut',
      })
    }
  }, [scrollIndex])

  const isReady = pill && scroll

  if (!isReady) return null
  return (
    <>
      {index === 0 && (
        <group {...props}>
          <mesh position={[0, 0, 1.47]} scale={0.8}>
            <planeGeometry args={[2, 2]} />
            <meshStandardMaterial map={pill} {...stencil} />
          </mesh>
        </group>
      )}

      {index === 1 && (
        <group {...props} ref={ref}>
          <mesh position={[0, -3.2, 1.47]} scale={0.8}>
            <planeGeometry args={[2, 10]} />
            <meshStandardMaterial map={scroll} {...stencil} />
          </mesh>
        </group>
      )}
    </>
  )
}

useGLTF.preload('/model/caregem.glb')