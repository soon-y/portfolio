import { useState, useEffect } from 'react'
import { Html, Float } from '@react-three/drei'
import { param } from '@/lib/param'
import Typo from "@/models/mesh/Typo.jsx"
import RadiusBox from "@/models/mesh/RadiusBox"
import HalfArc from "@/models/mesh/HalfArc"

function Art(props) {
	const [hovered, setHover] = useState(false)

	const yPos = -0.95
	const extrudeSetting = {
		bevelEnabled: true,
		bevelThickness: 0.1,
		bevelSize: 0.1,
		bevelOffset: 0,
		bevelSegments: 10,
		depth: param.height
	}

	useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

	return (
		<>
			<group {...props}>
				<Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
					<group
						onPointerOut={() => setHover(false)}
						onPointerOver={() => setHover(true)}>
						<Html center transform wrapperClass='annotation' position={[0, -1.9, 1]} style={{ display: props.display }}>
							<div className='sub-desc'> Docent Service for the Deaf</div>
							<div className='sub-logo'>
								<img style={{ width: '2.8rem' }} src='./img/next.svg' />
								<img src='./img/ts.png' />
							</div>
						</Html>

						<group position={[-1.8, 0, 0]}>
							<HalfArc color={param.orange} extrudeSetting={extrudeSetting} />
							<HalfArc color={param.orange} extrudeSetting={extrudeSetting} rotation={[0, 0, Math.PI]} />
							<RadiusBox color={param.orange} extrudeSetting={extrudeSetting} rotation={[0, 0, Math.PI / 2]} position={[param.diameter / 2 - 0.001, -param.outerRadius, 0]} />
						</group>
						<Typo scale={4.7} font={"godo_Light"} color={param.orange} size={param.diameter * 0.5} position={[-0.5, yPos, 0.03]} height={0.12} text={"r"} />
						<Typo scale={4.7} font={"Lexend_ExtraLight"} color={param.white} size={param.diameter * 0.31} position={[1, yPos, 0.03]} height={0.12} text={"t"} />
					</group>
				</Float>
			</group>
		</>
	)
}

export default Art