/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('./model/hand.glb')
  const { actions, names } = useAnimations(animations, group)

  useEffect(() => {
    actions[names[0]].reset().fadeIn(0.5).play()
  })

  return (
    <group ref={group} {...props} dispose={null} rotation-y={Math.PI}>
      <group name="Scene">
        <group name="Armature">
          <skinnedMesh
            name="hand"
            geometry={nodes.hand.geometry}
            material={materials.skin}
            skeleton={nodes.hand.skeleton}
          />
          <skinnedMesh
            name="sleeve"
            geometry={nodes.sleeve.geometry}
            material={materials.sleeve}
            skeleton={nodes.sleeve.skeleton}
          />
          <primitive object={nodes.Bone} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./model/hand.glb')