import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import { AuthProvider } from './context/AuthContext.jsx'
import { CourseProvider } from './context/courseContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <BrowserRouter>
      <AuthProvider>
        <CourseProvider>
          <App />
        </CourseProvider>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
