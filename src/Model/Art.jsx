import { useState, useEffect, forwardRef } from 'react'
import { Html, Float, useMatcapTexture } from '@react-three/drei'
import { param } from '../param.js'
import Typo from "../Mesh/Typo.jsx"
import RadiusBox from "../Mesh/RadiusBox.jsx"
import HalfArc from "../Mesh/HalfArc.jsx"
import ArtDesc from '../ArtDesc.jsx'

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

	useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

	return (
		<>
			<group {...props} ref={ref}>
				<Float speed={1} rotationIntensity={0.1} floatIntensity={0.1}>
					<group
						onPointerOut={() => setHover(false)}
						onPointerOver={() => setHover(true)}>
						<Html center occlude="blending" transform wrapperClass='annotation' position={[0, -1.6, 1]}>
							<div className='sub-desc'> Docent Service for the Deaf</div>
						</Html>
						<group position={[-1.8, 0, 0]}>
							<HalfArc matcap={orange} extrudeSetting={extrudeSetting} />
							<HalfArc matcap={orange} extrudeSetting={extrudeSetting} rotation={[0, 0, Math.PI]} />
							<RadiusBox matcap={orange} extrudeSetting={extrudeSetting} rotation={[0, 0, Math.PI / 2]} position={[param.diameter / 2 - 0.001, -param.outerRadius, 0]} />
						</group>
						<Typo scale={4.7} font={"godo_Light"} matcap={orange} size={param.diameter * 0.5} position={[-0.5, -0.95, 0.03]} height={0.12} text={"r"} />
						<Typo scale={4.7} font={"Lexend_ExtraLight"} matcap={white} size={param.diameter * 0.31} position={[1, -0.95, 0.03]} height={0.12} text={"t"} />
					</group>
				</Float>
				<ArtDesc />
			</group>
		</>
	)
})

export default Art