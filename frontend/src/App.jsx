import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import StartCourse from './pages/StartCourse'
import PhoneNUmber from './pages/PhoneNUmber'

// background layout
import LayoutA from './components/LayoutA'
import LayoutB from './components/LayoutB'


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
      </Route>
    </Routes>
    </>
  )
}

export default App;
