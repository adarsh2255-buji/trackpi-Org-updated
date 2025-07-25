import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { CourseProvider } from './context/courseContext.jsx'
import { ProgressProvider } from './context/ProgressContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider >
        <CourseProvider>
          <App />
        </CourseProvider>
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
