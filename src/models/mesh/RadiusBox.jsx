import { param } from '@/lib/param'
import { Shape } from 'three'
import { forwardRef } from 'react'

const RadiusBox = forwardRef(function RadiusBox(props, ref) {
  return (
    <>
      <mesh ref={ref} {...props}>
        <extrudeGeometry args={[shape(), props.extrudeSetting ? props.extrudeSetting : param.extrudeSetting]} />
        <meshStandardMaterial color={props.color} />
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