import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Gameboy from './Components/Gameboy/Gameboy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Gameboy />
  </StrictMode>,
)