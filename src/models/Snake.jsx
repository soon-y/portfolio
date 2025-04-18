/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef, useState, useEffect, } from 'react'
import { useGLTF, Html, Float, useAnimations } from '@react-three/drei'

export default function Snake(props) {
	const group = useRef()
	const { nodes, materials, animations } = useGLTF('./model/snake.glb')
	const { actions, names } = useAnimations(animations, group)
	const [count, setCount] = useState(5)
	const [hovered, setHover] = useState(false)
	const easter = useRef()
	const summer = useRef()
	const halloween = useRef()
	const winter = useRef()

	useEffect(() => {
		actions[names[0]].reset().fadeIn(0.5).play()
		actions[names[1]].reset().fadeIn(0.5).play()
		actions[names[2]].reset().fadeIn(0.5).play()
		actions[names[3]].reset().fadeIn(0.5).play()
		actions[names[4]].reset().fadeIn(0.5).play()
		actions[names[5]].reset().fadeIn(0.5).play()
	})

	useEffect(() => {
		if (hovered) {
			setCount(val => (val + 1) % 4)
		}
		if (count === 2) {
			winter.current.visible = false
			easter.current.visible = true
		} else if (count === 3) {
			easter.current.visible = false
			summer.current.visible = true
		} else if (count === 0) {
			summer.current.visible = false
			halloween.current.visible = true
		}
		else if (count === 1) {
			halloween.current.visible = false
			winter.current.visible = true
		}
	}, [hovered])

	useEffect(() => void (document.body.style.cursor = hovered ? "pointer" : "auto"), [hovered])
	const href = () => { window.open("https://soonake-game.vercel.app/", "_blank") }

	return (
		<group {...props} dispose={null} ref={group}
			onClick={href}
			onPointerOut={() => setHover(false)}
			onPointerOver={() => setHover(true)}>
			<Float>
				<Html occlude="blending" transform wrapperClass='annotation' position={[0, -3.5, 0]}>
					<b>Soonake Game</b>
					<div className='sub-logo'>
						<img src='./img/threejs.png' />Three.js
						<img src='./img/blender.png' />Blender
					</div>
				</Html>
				<group scale={6} position-y={-2}>
					<mesh
						name="tongue"
						castShadow
						receiveShadow
						geometry={nodes.tongue.geometry}
						material={materials.toungue}
						position={[0.001, 0.116, 0.242]}
						scale={[0.85, 0.18, 4.55]}
					/>

					<group name="snakemouth" position={[0, 0.35, -0.004]} rotation={[0, -Math.PI / 2, 0]}
						scale={[1.008, 0.706, 0.703]}>
						<mesh
							name="snakemouth_1"
							castShadow
							receiveShadow
							geometry={nodes.snakemouth_1.geometry}
							material={materials.snakeGreenMouth}
						/>
						<mesh
							name="snakemouth_2"
							castShadow
							receiveShadow
							geometry={nodes.snakemouth_2.geometry}
							material={materials['Material.050']}
						/>
						<mesh
							name="snakemouth_3"
							castShadow
							receiveShadow
							geometry={nodes.snakemouth_3.geometry}
							material={materials['Material.067']}
						/>
						<mesh
							name="snakemouth_4"
							castShadow
							receiveShadow
							geometry={nodes.snakemouth_4.geometry}
							material={materials.black}
						/>
					</group>

					<mesh
						name="eyelidBtmL"
						castShadow
						receiveShadow
						geometry={nodes.eyelidBtmL.geometry}
						material={materials.snakeEyelid}
						position={[-0.284, 0.445, 0.085]}
						rotation={[Math.PI / 4, -Math.PI / 2, 0]}
						scale={0.116}
					/>
					<mesh
						name="eyelidBtmR"
						castShadow
						receiveShadow
						geometry={nodes.eyelidBtmR.geometry}
						material={materials.snakeEyelid}
						position={[0.286, 0.445, 0.085]}
						rotation={[Math.PI / 4, -Math.PI / 2, 0]}
						scale={0.116}
					/>
					<mesh
						name="eyelidTopL"
						castShadow
						receiveShadow
						geometry={nodes.eyelidTopL.geometry}
						material={materials.snakeEyelid}
						position={[-0.284, 0.446, 0.085]}
						rotation={[2.094, -Math.PI / 2, 0]}
						scale={0.116}
					/>
					<mesh
						name="eyelidTopR"
						castShadow
						receiveShadow
						geometry={nodes.eyelidTopR.geometry}
						material={materials.snakeEyelid}
						position={[0.286, 0.446, 0.085]}
						rotation={[2.094, -Math.PI / 2, 0]}
						scale={0.116}
					/>

					<group ref={halloween} visible={false}>
						<group
							name="eyeBlackR"
							position={[-0.285, 0.445, 0.079]}
							rotation={[Math.PI, -1.422, Math.PI]}
							scale={0.11}>
							<mesh
								name="eyeBlackR_1"
								castShadow
								receiveShadow
								geometry={nodes.eyeBlackR_1.geometry}
								material={materials['Material.082']}
							/>
							<mesh
								name="eyeBlackR_2"
								castShadow
								receiveShadow
								geometry={nodes.eyeBlackR_2.geometry}
								material={materials['Material.081']}
							/>
						</group>
						<group
							name="eyeBlackL"
							position={[0.288, 0.445, 0.079]}
							rotation={[0, -0.149, 0]}
							scale={0.11}>
							<mesh
								name="eyeBlackL_1"
								castShadow
								receiveShadow
								geometry={nodes.eyeBlackL_1.geometry}
								material={materials['Material.082']}
							/>
							<mesh
								name="eyeBlackL_2"
								castShadow
								receiveShadow
								geometry={nodes.eyeBlackL_2.geometry}
								material={materials['Material.081']}
							/>
						</group>
						<mesh
							name="nailBody"
							castShadow
							receiveShadow
							geometry={nodes.nailBody.geometry}
							material={materials['Material.007']}
							position={[0.151, 0.63, -0.251]}
							rotation={[-0.052, -0.324, -0.378]}
							scale={[1.133, 1.908, 1.098]}
						/>
						<group
							name="nailHead"
							position={[0.194, 0.737, -0.244]}
							rotation={[0.02, -0.142, -0.362]}
							scale={[2.617, 0.484, 2.617]}>
							<mesh
								name="nailHead_1"
								castShadow
								receiveShadow
								geometry={nodes.nailHead_1.geometry}
								material={materials['Material.006']}
							/>
							<mesh
								name="nailHead_2"
								castShadow
								receiveShadow
								geometry={nodes.nailHead_2.geometry}
								material={materials['Material.012']}
							/>
							<mesh
								name="nailHead_3"
								castShadow
								receiveShadow
								geometry={nodes.nailHead_3.geometry}
								material={materials['Material.034']}
							/>
							<mesh
								name="nailHead_4"
								castShadow
								receiveShadow
								geometry={nodes.nailHead_4.geometry}
								material={materials['Material.015']}
							/>
						</group>
						<group
							name="Frankenstein"
							position={[0, 0.35, 0]}
							rotation={[0, -Math.PI / 2, 0]}
							scale={[1, 0.7, 0.7]}>
							<mesh
								name="Frankenstein_1"
								castShadow
								receiveShadow
								geometry={nodes.Frankenstein_1.geometry}
								material={materials['Material.029']}
							/>
							<mesh
								name="Frankenstein_2"
								castShadow
								receiveShadow
								geometry={nodes.Frankenstein_2.geometry}
								material={materials['Material.030']}
							/>
							<mesh
								name="Frankenstein_3"
								castShadow
								receiveShadow
								geometry={nodes.Frankenstein_3.geometry}
								material={materials['Material.036']}
							/>
							<mesh
								name="Frankenstein_4"
								castShadow
								receiveShadow
								geometry={nodes.Frankenstein_4.geometry}
								material={materials['Material.035']}
							/>
							<mesh
								name="Frankenstein_5"
								castShadow
								receiveShadow
								geometry={nodes.Frankenstein_5.geometry}
								material={materials['Material.037']}
							/>
						</group>
					</group>
					<group ref={easter} visible={false}>
						<group
							name="bunny"
							position={[-0.256, 0.724, -0.245]}
							rotation={[0, -0.12, 0.215]}
							scale={[1.707, 5.393, 1.058]}>
							<mesh
								name="bunny_1"
								castShadow
								receiveShadow
								geometry={nodes.bunny_1.geometry}
								material={materials.rabbit}
							/>
							<mesh
								name="bunny_2"
								castShadow
								receiveShadow
								geometry={nodes.bunny_2.geometry}
								material={materials.rabbitIn}
							/>
							<mesh
								name="bunny_3"
								castShadow
								receiveShadow
								geometry={nodes.bunny_3.geometry}
								material={materials.rabbitD}
							/>
							<mesh
								name="bunny_4"
								castShadow
								receiveShadow
								geometry={nodes.bunny_4.geometry}
								material={materials.rabbitB}
							/>
						</group>
						<group
							name="hairband"
							position={[0, 0.35, 0]}
							rotation={[0, -Math.PI / 2, 0]}
							scale={[1, 0.7, 0.7]}>
							<mesh
								name="hairband_1"
								castShadow
								receiveShadow
								geometry={nodes.hairband_1.geometry}
								material={materials.rabbit}
							/>
							<mesh
								name="hairband_2"
								castShadow
								receiveShadow
								geometry={nodes.hairband_2.geometry}
								material={materials.rabbitD}
							/>
							<mesh
								name="hairband_3"
								castShadow
								receiveShadow
								geometry={nodes.hairband_3.geometry}
								material={materials.rabbitB}
							/>
						</group>
					</group>
					<group ref={winter} visible={false}>
						<group
							name="hat"
							position={[0.005, 0.622, -0.351]}
							rotation={[-0.285, 0, 0]}
							scale={[1.612, 1.343, 1.612]}>
							<mesh
								name="hat_1"
								castShadow
								receiveShadow
								geometry={nodes.hat_1.geometry}
								material={materials.redB}
							/>
							<mesh
								name="hat_2"
								castShadow
								receiveShadow
								geometry={nodes.hat_2.geometry}
								material={materials.red}
							/>
							<mesh
								name="hat_3"
								castShadow
								receiveShadow
								geometry={nodes.hat_3.geometry}
								material={materials.redD}
							/>
						</group>
						<group
							name="pompom"
							position={[0.27, 0.892, -0.438]}
							rotation={[0.523, -0.411, -0.399]}
							scale={0.996}>
							<mesh
								name="pompom_1"
								castShadow
								receiveShadow
								geometry={nodes.pompom_1.geometry}
								material={materials.santaWhite}
							/>
							<mesh
								name="pompom_2"
								castShadow
								receiveShadow
								geometry={nodes.pompom_2.geometry}
								material={materials.santaWhiteD}
							/>
							<mesh
								name="pompom_3"
								castShadow
								receiveShadow
								geometry={nodes.pompom_3.geometry}
								material={materials.santaWhiteDD}
							/>
						</group>
						<group
							name="hatWhite"
							position={[0, 0.35, 0]}
							rotation={[0, -Math.PI / 2, 0]}
							scale={[1, 0.7, 0.7]}>
							<mesh
								name="hatWhite_1"
								castShadow
								receiveShadow
								geometry={nodes.hatWhite_1.geometry}
								material={materials.santaWhite}
							/>
							<mesh
								name="hatWhite_2"
								castShadow
								receiveShadow
								geometry={nodes.hatWhite_2.geometry}
								material={materials.santaWhiteDD}
							/>
							<mesh
								name="hatWhite_3"
								castShadow
								receiveShadow
								geometry={nodes.hatWhite_3.geometry}
								material={materials.santaWhiteD}
							/>
						</group>
					</group>
					<group ref={summer} visible={false}
						name="sunglasses"
						position={[-0.202, 0.603, -0.063]}
						rotation={[-0.286, 0, 0]}
						scale={[0.581, 0.368, 0.084]}>
						<mesh
							name="Cube012"
							castShadow
							receiveShadow
							geometry={nodes.Cube012.geometry}
							material={materials['Material.020']}
						/>
						<mesh
							name="Cube012_1"
							castShadow
							receiveShadow
							geometry={nodes.Cube012_1.geometry}
							material={materials['Material.021']}
						/>
						<mesh
							name="Cube012_2"
							castShadow
							receiveShadow
							geometry={nodes.Cube012_2.geometry}
							material={materials['Material.031']}
						/>
						<mesh
							name="Cube012_3"
							castShadow
							receiveShadow
							geometry={nodes.Cube012_3.geometry}
							material={materials['Material.033']}
						/>
					</group>

					<group name="eyeL" position={[0.288, 0.445, 0.079]} rotation={[0, -0.149, 0]} scale={0.1}>
						<mesh
							name="eyeL_1"
							castShadow
							receiveShadow
							geometry={nodes.eyeL_1.geometry}
							material={materials['Material.042']}
						/>
						<mesh
							name="eyeL_2"
							castShadow
							receiveShadow
							geometry={nodes.eyeL_2.geometry}
							material={materials['Material.043']}
						/>
					</group>
					<group
						name="eyeR"
						position={[-0.285, 0.445, 0.079]}
						rotation={[Math.PI, -1.422, Math.PI]}
						scale={0.1}>
						<mesh
							name="eyeR_1"
							castShadow
							receiveShadow
							geometry={nodes.eyeR_1.geometry}
							material={materials['Material.042']}
						/>
						<mesh
							name="eyeR_2"
							castShadow
							receiveShadow
							geometry={nodes.eyeR_2.geometry}
							material={materials['Material.043']}
						/>
					</group>
					<group name="snakeBase"
						position={[0, 0.35, 0]}
						rotation={[0, -Math.PI / 2, 0]}
						scale={[1, 0.7, 0.7]}>
						<mesh
							name="snakeBase_1"
							castShadow
							receiveShadow
							geometry={nodes.snakeBase_1.geometry}
							material={materials.snakeGreenTop}
						/>
						<mesh
							name="snakeBase_2"
							castShadow
							receiveShadow
							geometry={nodes.snakeBase_2.geometry}
							material={materials['Material.065']}
						/>
					</group>
				</group>
			</Float>
		</group>
	)
}

useGLTF.preload('./model/snake.glb')
