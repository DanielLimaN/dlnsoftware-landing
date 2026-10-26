import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../squadcraft.css'
import '../6x1/6x1.css'
import { SEGMENTOS } from '../../content/segmentos'
import App from './App.tsx'

const root = document.getElementById('root')!
const segmento = SEGMENTOS.find((s) => s.slug === root.dataset.segmento)!

createRoot(root).render(
  <StrictMode>
    <App segmento={segmento} />
  </StrictMode>,
)
