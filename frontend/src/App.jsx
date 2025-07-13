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
import ShowSections from './components/ShowSections'
import SectionVideos from './pages/SectionVideos'


function App() {
  return (
    <>
      <Routes>
        {/* Layout A */}
        <Route element={<LayoutA />}>
          <Route path='/' element={<Home />} />
          <Route path='/phone-number' element={<PhoneNUmber />} />
        </Route>
        {/* Layout B */}
        <Route element={<LayoutB />}>
          <Route path='/start-course' element={<StartCourse />} />
          <Route path="/faq" element={<Faq2 />} />

          {/* ✅ Nested routing works here */}
          <Route path='/course-section' element={<CourseSection />}>
            <Route path=':courseId' element={<ShowSections />} />
          </Route>

          <Route path='/video-section/:id' element={<SectionVideos />} />
        </Route>
      </Routes>

    </>
  )
}

export default App;
