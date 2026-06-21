import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/Router.jsx'
import { ToastContainer } from 'react-toastify'
import TimelineProvider from './Context/TimelineProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </TimelineProvider>
  </StrictMode>,
)
