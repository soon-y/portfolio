import { param } from '../param.js'
import { Shape } from 'three'
import { forwardRef } from 'react'
import { useMatcapTexture } from '@react-three/drei'

const SmallBox = forwardRef(function SmallBox(props, ref) {
  const [matcapTexture] = useMatcapTexture(param.matcapMain, 256)
  return (
    <>
      <mesh ref={ref} {...props}>
        <extrudeGeometry args={[shape(), param.extrudeSetting]} />
        <meshMatcapMaterial matcap={matcapTexture} />
        {/* <axesHelper args={[1]} /> */}
      </mesh>
    </>
  )
})

function shape() {
  const shape = new Shape()
  shape.lineTo(0, -param.thickness / 2)
  shape.lineTo(param.innerRadius / 2, -param.thickness / 2)
  shape.lineTo(param.innerRadius / 2, param.thickness / 2)
  shape.lineTo(0, param.thickness / 2)
  return shape
}

export default SmallBox