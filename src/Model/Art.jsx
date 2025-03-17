import { useState, useEffect, forwardRef, useRef } from 'react'
import { Html, Float, useMatcapTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { param } from '../param.js'
import Typo from "../Mesh/Typo.jsx"
import RadiusBox from "../Mesh/RadiusBox.jsx"
import HalfArc from "../Mesh/HalfArc.jsx"
import gsap from "gsap"

const Art = forwardRef(function Art(props, ref) {
	const [hovered, setHover] = useState(false)
	const [orange] = useMatcapTexture(param.matcapOrange, 256)
	const [white] = useMatcapTexture(param.matcapWhite, 256)
	const extrudeSetting = {
		bevelEnabled: true,
		bevelThickness: 0.1,
		bevelSize: 0.1,
		bevelOffset: 0,
		bevelSegments: 10,
		depth: param.height
	}

	const a0 = useRef()
	const a1 = useRef()
	const a2 = useRef()
	const a3 = useRef()
	const a4 = useRef()
	const a5 = useRef()
	const a6 = useRef()
	const a7 = useRef()
	const a8 = useRef()
	const r0 = useRef()
	const r1 = useRef()
	const r2 = useRef()
	const r3 = useRef()
	const r4 = useRef()
	const r5 = useRef()
	const r6 = useRef()
	const t = useRef()
	const art = useRef()

	const yPos = -0.95


	useFrame(() => {
    if (props.animation && props.on) {
			gsap.to(art.current.scale, { x: 0.2, y: 0.2, z: 0.2, duration: 0.5, ease: "power2.inout",})
			gsap.to(t.current.material, { opacity: 0, duration: 0.5, ease: "power2.out",})
			gsap.to(t.current.position, { y: -5, duration: 0.5, ease: "power2.out",})
			gsap.to(a0.current.position, { x: -15.5, duration: 1, ease: "power2.out",})
			gsap.to(r0.current.position, { x: 5,duration: 1, ease: "power2.out",})

			a1.current.visible = true
			a2.current.visible = true
			a3.current.visible = true
			a4.current.visible = true
			a5.current.visible = true
			a6.current.visible = true
			a7.current.visible = true
			a8.current.visible = true

			r1.current.visible = true    	
			r2.current.visible = true
			r3.current.visible = true
			r4.current.visible = true
			r5.current.visible = true
			r6.current.visible = true

			gsap.to(a1.current.position, { y: yPos, duration: 0.5, ease: "power2.out" })
    	gsap.to(a2.current.position, { y: yPos, duration: 0.5, ease: "power2.out" })
    	gsap.to(a3.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(a4.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(a5.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(a6.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(a7.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(a8.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })

			gsap.to(r1.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })   	
			gsap.to(r2.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(r3.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(r4.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(r5.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })
    	gsap.to(r6.current.position, { y: yPos, duration: 0.5, ease: "power2.out", delay: 0.1 })

			gsap.to(a1.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0 })
    	gsap.to(a2.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 })
			gsap.to(a3.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 })
			gsap.to(a4.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.3 })
			gsap.to(a5.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4 })
			gsap.to(a6.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.5 })
			gsap.to(a7.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.6 })
			gsap.to(a8.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.7 })

			gsap.to(r1.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0 })
    	gsap.to(r2.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.1 })
			gsap.to(r3.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.2 })
			gsap.to(r4.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.3 })
			gsap.to(r5.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.4 })
			gsap.to(r6.current.material, { opacity: 1, duration: 0.5, ease: "power2.out", delay: 0.5 })
		} else {
			gsap.to(a1.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0  })
    	gsap.to(a2.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.1})
			gsap.to(a3.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.2})
    	gsap.to(a4.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.3})
			gsap.to(a5.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.4})
    	gsap.to(a6.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.5})
			gsap.to(a7.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.6})
    	gsap.to(a8.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.7})

			gsap.to(a1.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0  })
			gsap.to(a2.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.1 })
			gsap.to(a3.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.1 })
			gsap.to(a4.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.2 })
			gsap.to(a5.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.2 })
			gsap.to(a6.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.3 })
			gsap.to(a7.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.3 })
			gsap.to(a8.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.3 })

			gsap.to(r1.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0  })
    	gsap.to(r2.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.1})
			gsap.to(r3.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.1})
    	gsap.to(r4.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.2})
			gsap.to(r5.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.2})
    	gsap.to(r6.current.position, { y: yPos + 5, duration: 0.5, ease: "power2.out", delay: 0.3})

			gsap.to(r1.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0  })
    	gsap.to(r2.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.1})
			gsap.to(r3.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.2})
			gsap.to(r4.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.3})
			gsap.to(r5.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.4})
			gsap.to(r6.current.material, { opacity: 0, duration: 0.1, ease: "power2.out", delay: 0.5})

			gsap.to(art.current.scale, { x: 1, y: 1, z: 1, duration: 1, ease: "power2.inout",})
			gsap.to(t.current.material, { opacity: 1, duration: 1, ease: "power2.inout",})
			gsap.to(t.current.position, { y: yPos, duration: 1, ease: "power2.inout", })
			gsap.to(a0.current.position, { x: 0, duration: 1, ease: "power2.inout", })
			gsap.to(r0.current.position, { x: 0,duration: 1, ease: "power2.inout", })			
		}
	})

	useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

	return (
		<>
			<group {...props} ref={ref}>
				<Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
					<group ref={art}
						onPointerOut={() => setHover(false)}
						onPointerOver={() => setHover(true)}>
						<Html center transform wrapperClass='annotation' position={[0, -1.6, 1]} style={{
							opacity: props.opacity
						}}>
							<div className='sub-desc'> Docent Service for the Deaf</div>
						</Html>
					
						<group ref={a0}>
						<group position={[-1.8, 0, 0]}>
							<HalfArc matcap={orange} extrudeSetting={extrudeSetting} />
							<HalfArc matcap={orange} extrudeSetting={extrudeSetting} rotation={[0, 0, Math.PI]} />
							<RadiusBox matcap={orange} extrudeSetting={extrudeSetting} rotation={[0, 0, Math.PI / 2]} position={[param.diameter / 2 - 0.001, -param.outerRadius, 0]} />
						</group>
						<Typo scale={4.7} font={"godo_Light"} matcap={orange} size={param.diameter * 0.5} position={[-0.7, yPos + 5, 0.03]} height={0.12} text={"u"} ref={a1} />
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[1.5, yPos + 5, 0.03]} height={0.12} text={"g"} ref={a2} visible={false}/>
						<Typo scale={4.7} font={"godo_Light"} matcap={orange} size={param.diameter * 0.5} position={[4.1, yPos + 5, 0.03]} height={0.12} text={"m"} ref={a3} visible={false}/>
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[7.2, yPos + 5, 0.03]} height={0.12} text={"e"} ref={a4} visible={false}/>
						<Typo scale={4.7} font={"godo_Light"} matcap={orange} size={param.diameter * 0.5} position={[9.7, yPos + 5, 0.03]} height={0.12} text={"n"} ref={a5} visible={false}/>
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[12, yPos + 5, 0.03]} height={0.12} text={"t"} ref={a6} visible={false}/>
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[13.9, yPos + 5, 0.03]} height={0.12} text={"e"} ref={a7} visible={false}/>
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[16.4, yPos + 5, 0.03]} height={0.12} text={"d"} ref={a8} visible={false}/>
						</group>

						<group ref={r0}>
						<Typo scale={4.7} font={"godo_Light"} matcap={orange} size={param.diameter * 0.5} position={[-0.5, yPos, 0.03]} height={0.12} text={"r"} />
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[0.8, yPos + 5, 0.03]} height={0.12} text={"e"} ref={r1} visible={false}/>
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[3.2, yPos + 5, 0.03]} height={0.12} text={"a"} ref={r2} visible={false}/>
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[5.6, yPos + 5, 0.03]} height={0.12} text={"l"} ref={r3} visible={false}/>
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[6.4, yPos + 5, 0.03]} height={0.12} text={"i"} ref={r4} visible={false}/>
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={orange} size={param.diameter * 0.31} position={[7.4, yPos + 5, 0.03]} height={0.12} text={"t"} ref={r5} visible={false}/>
						<Typo scale={4.7} font={"godo_Light"} matcap={orange} size={param.diameter * 0.5} position={[9.3, yPos + 5, 0.03]} height={0.12} text={"y"} ref={r6} visible={false}/>
						</group>

						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={white} size={param.diameter * 0.31} position={[1, yPos, 0.03]} height={0.12} text={"t"} ref={t} />
					</group>
				</Float>
			</group>
		</>
	)
})

export default Art