import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppRoute from './assets/Routes/AppRoute.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <div className='max-w-screen-xl mx-auto'>
   <AppRoute/>
   </div>
  </StrictMode>,
)
