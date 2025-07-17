import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import { MotionConfig } from 'motion/react'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <MotionConfig viewport={{ once: true }} >
        <App />
      </MotionConfig>
  </BrowserRouter>
)
