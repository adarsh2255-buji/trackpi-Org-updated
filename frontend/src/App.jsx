import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import StartCourse from './pages/StartCourse'
import PhoneNUmber from './pages/PhoneNUmber'
import Faq2 from './pages/Faq2'
import Assessment from './components/Assessment'
import AssessmentFirstPopup from "./Pages/AssessmentFirstPopup";
import AssessmentPassedPopup from "./Pages/AssessmentPassedPopup";
import AssessmentFailedPopup from "./Pages/AssessmentFailedPopup";
import AssessmentTimeUpPopup from './pages/AssessmentTimeUpPopup';
import AssessmentTimeUpCongrats from './pages/AssessmentTimeupCongrats';



// background layout
import LayoutA from './components/LayoutA'
import LayoutB from './components/LayoutB'
import CourseSection from './pages/CourseSection'
import ShowSections from './components/ShowSections'



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
          <Route path="/faq" element={<Faq2 />} />

          {/* Assessment Flow */}
          <Route path="/assessment/start" element={<AssessmentFirstPopup />} />
          <Route path="/assessment/passed" element={<AssessmentPassedPopup />} />
          <Route path="/assessment/failed" element={<AssessmentFailedPopup />} />
          <Route path="/assessment/time-up" element={<AssessmentTimeUpPopup />} />
          <Route path="/assessment/congrats" element={<AssessmentTimeUpCongrats />} />
         <Route path="/assessment/main" element={<Assessment />} />


          {/* ✅ Nested routing works here */}
          <Route path='/course-section' element={<CourseSection />}>
            <Route path=':courseId' element={<ShowSections />} />
          </Route>
        </Route>
      </Routes>

    </>
  )
}

export default App;
