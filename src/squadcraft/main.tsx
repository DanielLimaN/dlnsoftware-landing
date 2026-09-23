import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './squadcraft.css'
import App from './App.tsx'
import { initAnalytics } from '../lib/analytics'

initAnalytics('squadcraft')

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
