import { RoundedBox } from '@react-three/drei'
import { param } from '@/lib/param'
import Typo from "@/models/mesh/Typo"

function LinkedIn(props) {
  return (
    <group {...props}>
      <RoundedBox args={[2, 2, 0.8]} radius={0.2} smoothness={4} bevelSegments={4} creaseAngle={0.4} >
        <meshStandardMaterial color='#0274b3' />
      </RoundedBox>
      <Typo font={"Myriad_Bold"} size={1.2} position={[-0.7, -0.5, 0.3]} color={param.white} height={0.2} text={"in"} />
    </group>
  )
}

export default LinkedIn