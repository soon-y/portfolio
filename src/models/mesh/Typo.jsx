import { Text3D } from '@react-three/drei'
import { forwardRef } from 'react'
import { param } from '@/lib/param'

const Typo = forwardRef(function Typo(props, ref) {
	let typeface = "../font/" + props.font + ".json"

	return (
		<>
			<Text3D {...props}
				ref={ref}
				font={typeface}
				letterSpacing={0.05}
				size={props.size}
				curveSegments={32}
				bevelEnabled
				bevelSegments={10}
				bevelSize={0.03}
				bevelThickness={0.05}
				bevelOffset={0}
				depth={param.height}
				height={props.height ? props.height : param.height}
			>
				{props.text}
				<meshStandardMaterial color={props.color} opacity={props.opacity} transparent />
				{/* <axesHelper args={[1]} /> */}
			</Text3D>
		</>
	)
})

export default Typo
