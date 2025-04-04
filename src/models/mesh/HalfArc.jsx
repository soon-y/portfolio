import { param } from '@/lib/param'
import { Shape } from 'three'
import { forwardRef } from 'react'

const HalfArc = forwardRef(function HalfArc(props, ref) {
  return (
    <>
      <mesh {...props} ref={ref} >
        <extrudeGeometry args={[shape(), props.extrudeSetting ? props.extrudeSetting : param.extrudeSetting]} />
        <meshStandardMaterial color={props.color} />
        {/* <axesHelper args={[1]} /> */}
      </mesh>
    </>
  )
})

function shape() {
  const outerCircle = new Shape()
  const deltaPhi = Math.PI / param.N
  outerCircle.moveTo(param.outerRadius, 0)
  for (let k = 0; k <= param.N; ++k) {
    outerCircle.lineTo(param.outerRadius * Math.cos(k * deltaPhi), param.outerRadius * Math.sin(k * deltaPhi))
  }
  for (let k = param.N; k >= 0; --k) {
    outerCircle.lineTo(param.innerRadius * Math.cos(k * deltaPhi), param.innerRadius * Math.sin(k * deltaPhi))
  }
  outerCircle.lineTo(param.outerRadius, 0)
  return outerCircle
}

export default HalfArc
