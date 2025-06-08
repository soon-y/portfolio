import { Html } from '@react-three/drei'
import { LoaderCircle } from 'lucide-react'

export default function Loader() {
  return (
    <Html className='bg-[#242424] w-screen h-screen flex items-center justify-center z-1000'>
      <LoaderCircle className='text-[#c8a7f3] w-20 h-20 animate-spin'/>
    </Html>
  )
}
