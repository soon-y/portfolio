import { param } from '@/lib/param'
import { Shape } from 'three'
import { forwardRef } from 'react'

const SmallBox = forwardRef(function SmallBox(props, ref) {
  return (
    <>
      <mesh ref={ref} {...props}>
        <extrudeGeometry args={[shape(), param.extrudeSetting]} />
        <meshStandardMaterial color={props.color} />
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