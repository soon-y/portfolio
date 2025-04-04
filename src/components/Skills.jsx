import { useState, useEffect, useRef } from 'react'
import { param } from '@/lib/param'
import { useThree } from '@react-three/fiber'
import { Physics, RigidBody, CylinderCollider } from "@react-three/rapier"
import CSS from "@/models/CSS.jsx"
import TS from "@/models/TS.jsx"
import JS from "@/models/JS.jsx"
import HtmlM from "@/models/HtmlM.jsx"
import Blender from "@/models/Blender.jsx"
import Three from "@/models/Three.jsx"
import ReactM from "@/models/ReactM.jsx"
import Vue from "@/models/Vue.jsx"
import KR from "@/models/KR.jsx"
import DE from "@/models/DE.jsx"
import EN from "@/models/EN.jsx"

function Skills(props) {
	const { camera, viewport } = useThree()
	const [radius, setRadius] = useState(viewport.aspect < 1.2 ? param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20 : param.diameter * 10)
	const [hc, setHc] = useState((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5)
	const [wc, setWc] = useState((viewport.aspect * hc))
	const posRadius = 2

	useEffect(() => {
		if (viewport.aspect < 1.2) { setRadius(param.diameter * 10 + (1.2 - viewport.aspect) * param.diameter * 20) }
		else { setRadius(param.diameter * 10) }
		setHc((2 * radius * Math.tan(Math.PI / 180 * camera.fov / 2)) * 0.5 - 0.5)
		setWc((viewport.aspect * hc) - 0.1)
	}, [viewport])

	return (
		<Physics debug={false} colliders={false} gravity={[0, 0, 0]}>
			<group {...props} dispose={null}>
				<RigidBody colliders='cuboid' position={[posRadius, 0, 0]} restitution={1} gravityScale={0.8}>
					<TS scale={0.6} opacity={props.visible} />
				</RigidBody>
				<RigidBody colliders={false} position={[posRadius, posRadius, 0]} rotation-x={Math.PI / 2} restitution={1} gravityScale={0.8}>
					<CylinderCollider args={[0.4, 0.6]}>
						<KR scale={0.6} opacity={props.visible} rotation-x={-Math.PI / 2} />
					</CylinderCollider>
				</RigidBody>
				<RigidBody colliders='cuboid' position={[0, posRadius, 0]} restitution={1} gravityScale={0.8}>
					<CSS scale={0.6} opacity={props.visible} />
				</RigidBody>
				<RigidBody colliders='hull' position={[-posRadius, posRadius, 0]} restitution={1} gravityScale={0.8}>
					<Vue scale={0.6} opacity={props.visible} />
				</RigidBody>
				<RigidBody colliders='ball' position={[-posRadius, 0, 0]} restitution={1} gravityScale={0.8}>
					<ReactM rotation={[Math.PI / 8, 0, 0]} scale={0.6} opacity={props.visible} />
				</RigidBody>
				<RigidBody colliders={false} position={[-posRadius, -posRadius, 0]} rotation-x={Math.PI / 2} restitution={1} gravityScale={0.8}>
					<CylinderCollider args={[0.4, 0.6]}>
						<DE scale={0.6} opacity={props.visible} rotation-x={-Math.PI / 2} />
					</CylinderCollider>
				</RigidBody>
				<RigidBody colliders='cuboid' position={[0, -posRadius, 0]} restitution={1} gravityScale={0.8}>
					<HtmlM scale={0.6} opacity={props.visible} />
				</RigidBody>
				<RigidBody colliders='hull' position={[posRadius, -posRadius, 0]} restitution={1} gravityScale={0.8}>
					<JS scale={0.6} opacity={props.visible} />
				</RigidBody>
				<RigidBody colliders='trimesh' position={[posRadius * 2, 0, 0]} restitution={1} gravityScale={0.8} mass={2}>
					<Three scale={0.6} opacity={props.visible} />
				</RigidBody>
				<RigidBody colliders={false} position={[-posRadius * 2, 0]} rotation-x={Math.PI / 2} restitution={1} gravityScale={0.8}>
					<CylinderCollider args={[0.4, 0.6]}>
						<EN scale={0.6} opacity={props.visible} rotation-x={-Math.PI / 2} />
					</CylinderCollider>
				</RigidBody>
				<RigidBody colliders='hull' position={[-posRadius * 2, 0, 0]} restitution={1} gravityScale={0.8}>
					<Blender scale={0.6} opacity={props.visible} />
				</RigidBody>

				<RigidBody colliders='cuboid' type='fixed' position={[-wc, 0, 0]}>
					<mesh name='leftWall'>
						<boxGeometry args={[1, 100, 10]} />
						<meshStandardMaterial transparent opacity={0} />
					</mesh>
				</RigidBody>
				<RigidBody colliders='cuboid' type='fixed' position={[wc, 0, 0]}>
					<mesh name='rightWall'>
						<boxGeometry args={[1, 100, 10]} />
						<meshStandardMaterial transparent opacity={0} />
					</mesh>
				</RigidBody>
				<RigidBody colliders='cuboid' type='fixed' position={[0, hc, 0]}>
					<mesh name='topWall'>
						<boxGeometry args={[100, 1, 10]} />
						<meshStandardMaterial transparent opacity={0} />
					</mesh>
				</RigidBody>
				<RigidBody colliders='cuboid' type='fixed' position={[0, -hc, 0]}>
					<mesh name='leftWall'>
						<boxGeometry args={[100, 1, 10]} />
						<meshStandardMaterial transparent opacity={0} />
					</mesh>
				</RigidBody>
				<RigidBody colliders='cuboid' type='fixed' position={[0, 0, -5]}>
					<mesh name='frontWall'>
						<boxGeometry args={[wc * 2, hc * 2 + 1, 1]} />
						<meshStandardMaterial transparent opacity={0} />
					</mesh>
				</RigidBody>
				<RigidBody colliders='cuboid' type='fixed' position={[0, 0, 5]}>
					<mesh name='backWall'>
						<boxGeometry args={[wc * 2, hc * 2 + 1, 1]} />
						<meshStandardMaterial transparent opacity={0} />
					</mesh>
				</RigidBody>
			</group>
			<Pointer position={props.position} h={hc} w={wc} />
		</Physics>
	)
}

function Pointer(props) {
	const meshRef = useRef()
	const { pointer } = useThree()
	const [pointerPos, setPointerPos] = useState([0, 0, props.position[2]])

	useEffect(() => {
		const updatePointerPosition = () => {
			const x = (pointer.x * props.w)
			const y = (pointer.y * props.h)
			setPointerPos([x, y, props.position[2]])
		}
		window.addEventListener('mousemove', updatePointerPosition)
		return () => {
			window.removeEventListener('mousemove', updatePointerPosition)
		}
	}, [pointer])

	return (
		<RigidBody colliders='ball' type="kinematicPosition" ref={meshRef} position={pointerPos}>
			<mesh>
				<boxGeometry args={[1, 1, 10]} />
				<meshStandardMaterial transparent opacity={0} />
			</mesh>
		</RigidBody>
	)
}

export default Skills