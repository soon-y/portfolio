import { useState, useEffect } from 'react'
import { Float } from '@react-three/drei'
import { param } from '@/lib/param'
import Typo from "@/models/mesh/Typo.jsx"

function Log(props) {
	const [hovered, setHover] = useState(false)

	useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])

	return (
		<>
			<group {...props}>
				<Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
					<group position={[-17, -2, -80]}
						onPointerOut={() => setHover(false)}
						onPointerOver={() => setHover(true)}>
						<Typo scale={4} font={param.fonts[2]} color={param.lila} size={param.diameter} height={2} text={"<log/>"} />
					</group>
				</Float>
			</group>
		</>
	)
}

export default Log