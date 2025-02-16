import { TextureLoader } from 'three'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef, useState, useEffect } from 'react'

function Billiard(props) {
	const [hovered, setHover] = useState(false)
	const ball = useRef()
	const ref = useRef()

	useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
	const href = () => { window.open("https://a-billiard-simulation.vercel.app/", "_blank") }

	useFrame((state) => {
		if (hovered) {
			ball.current.rotation.z -= 0.2
		} else {
			ball.current.rotation.z -= 0.001
		}
		ref.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
	})

	const texture = new TextureLoader().load('./texture/Ball13.jpg')
	return (
		<group {...props} ref={ref}>
			<Html center occlude="blending" transform wrapperClass='annotation' position={[0, 4, 0]}>
				A billiard simulation<br />
				<div className='sub-logo'> <img src='./img/threejs.png' />Three.js</div>
			</Html>
			<mesh ref={ball} rotation={[0, -Math.PI / 2, 0]} scale={5}
				onClick={href}
				onPointerOut={() => setHover(false)}
				onPointerOver={() => setHover(true)}>
				<sphereGeometry args={[0.5, 32, 32]} />
				<meshStandardMaterial map={texture} />
			</mesh>
		</group>
	)
}

export default Billiard