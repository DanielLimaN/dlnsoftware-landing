import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../squadcraft.css'
import './6x1.css'
import App from './App.tsx'
import { initClarity } from './clarity'

initClarity()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
