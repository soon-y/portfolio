
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { BrowserRouter, Routes, Route } from "react-router"
import './index.css'
import App from './App.jsx'
import DewyDesc from './DewyDesc.jsx'
import ArtDesc from './ArtDesc.jsx'


createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = { <App /> } />
        <Route path='/dewy-days' element = { <DewyDesc /> } />
        <Route path='/art' element = { <ArtDesc /> } />
      </Routes>
    </BrowserRouter>
  </>,
)

