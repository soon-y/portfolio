import { param } from '../param.js'
import { Shape } from 'three'
import { forwardRef } from 'react'
import { useMatcapTexture } from '@react-three/drei'

const RadiusBox = forwardRef(function RadiusBox(props, ref) {
  const [matcapTexture] = useMatcapTexture(param.matcapMain, 256)
  return (
    <>
      <mesh ref={ref} {...props}>
        <extrudeGeometry args={[shape(), props.extrudeSetting ? props.extrudeSetting : param.extrudeSetting]} />
        <meshMatcapMaterial matcap={props.matcap ? props.matcap : matcapTexture} />
        {/* <axesHelper args={[1]} /> */}
      </mesh>
    </>
  )
})

function shape() {
  const shape = new Shape()
  shape.lineTo(0, -param.thickness / 2)
  shape.lineTo(param.outerRadius, -param.thickness / 2)
  shape.lineTo(param.outerRadius, param.thickness / 2)
  shape.lineTo(0, param.thickness / 2)
  return shape
}

export default RadiusBox