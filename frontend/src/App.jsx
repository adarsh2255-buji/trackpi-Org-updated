import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import StartCourse from './pages/StartCourse'
import PhoneNUmber from './pages/PhoneNUmber'
import Faq2 from './pages/Faq2'
// background layout
import LayoutA from './components/LayoutA'
import LayoutB from './components/LayoutB'
import CourseSection from './pages/CourseSection'



function App() {
  return (
    <>
      <Routes>
        <Route element={<LayoutA />}>
          <Route path='/' element={<Home />} />
          <Route path='/phone-number' element={<PhoneNUmber />} />
        </Route>

        <Route element={<LayoutB />}>
          <Route path='/start-course' element={<StartCourse />} />
          <Route path='/course-section' element={<CourseSection />} />
          <Route path="/faq2" element={<Faq2 />} />

        </Route>
      </Routes>
    </>
  )
}

export default App;
