import { useGLTF } from '@react-three/drei'
import { Bench } from './WeatherBench'

export default function WorldGround(props) {
  const { nodes, materials } = useGLTF('/model/land.glb')

  return (
    <group dispose={null} scale={props.scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.ground.geometry}
        material={materials.groundLand}
        position={[0, -0.406, 0]}
        scale={0.847}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock002.geometry}
        material={materials.rock}
        position={[0, 0.037, -0.102]}
        scale={[0.929, 0.1, 0.929]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rock001.geometry}
        material={materials.rock}
        position={[0, 0.037, -0.102]}
        scale={[0.929, 0.1, 0.929]}
      />
      
      <Bench />
    </group>
  )
}

useGLTF.preload('/model/land.glb')