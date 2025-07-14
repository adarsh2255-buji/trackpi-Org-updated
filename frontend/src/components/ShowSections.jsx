import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { CourseContext } from '../context/courseContext';
import './css/WaveAnimation.css'

const ShowSections = () => {
    const { courseId } = useParams();
    const { courses, loading } = useContext(CourseContext) 
    const navigate = useNavigate()

    if (loading) {
      return <p className="text-white mt-5">Loading...</p>;
    }

    const selectedCourse = courses.find((course) => course._id === courseId)

    if(!selectedCourse) {
      <p className="text-white mt-5">No course found</p>
    }

    const result = selectedCourse.sections.map((section) => section)

    if(!selectedCourse) {
      <p className="text-white mt-5">No course found</p>
    }
  return (
    <div className="text-white mt-5">
  
    <div className='my-5 px-5 flex justify-between gap-5 lg:justify-end'>
        <button className='rounded-[40px] px-12.5 py-3 bg-[#FF9D00] text-white text-[12px] sm:text-base font-medium cursor-pointer roboto'>Courses</button>
        <button className='rounded-[40px] px-12.5 py-3 border border-[#FF9D00] text-[#FF9D00]  font-medium sm:text-base cursor-pointer roboto'>Assessment</button>
    </div>
{/* progress section */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4'>
    {result.map((section, i) => (
      
          <div 
          onClick={() => navigate(`/video-section/${section._id}`)}
          className="w-[170px] h-[90px] sm:h-[150px] sm:w-[260px] rounded-[100px] bg-[#0A0A0A] text-white relative overflow-hidden flex flex-col justify-center gap-"  key={section._id}>
          {/* Step Number */}
          <span className="absolute top-4 sm:top-6 left-3 sm:left-4 text-[55px] sm:text-[75px] text-white/10 font-bold z-10">{i + 1}</span>

          {/* Main Content */}
          <h3 className="text-sm sm:text-lg font-semibold relative z-20 text-center leading-tight sm:leading-normal">{section.title}</h3>
          <div className="flex justify-center gap-2 sm:gap-4 text-xs sm:text-sm mt-1 relative z-20">
            <span>{section.videos.length} Videos</span>
            <span>|</span>
            <span>{section.duration}</span>
          </div>

          {/* Animated Wave */}
          <div className="absolute bottom-0 left-0 w-full h-[60px] sm:h-[80px] overflow-hidden">
            <div className="wave-move ">
              <svg width="520" height="76" viewBox="0 0 520 76" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-3 0.0365618C-3 0.0365618 16.8655 6.42503 30 6.53343C43.7097 6.64659 50.7989 0.532465 64.5 0.0365618C81.4722 -0.577735 90.5181 6.75526 107.5 6.53343C123.132 6.32924 131.367 0.0365618 147 0.0365618C162.633 0.0365618 170.87 6.85416 186.5 6.53343C200.399 6.24822 207.602 0.376764 221.5 0.0365618C237.514 -0.355436 245.984 6.25742 262 6.53343C279.947 6.84271 289.553 -0.238475 307.5 0.0365618C323.71 0.28497 332.289 6.66178 348.5 6.53343C363.94 6.4112 372.063 -0.288654 387.5 0.0365618C401.207 0.325331 408.29 6.4978 422 6.53343C435.902 6.56957 457 0.0365618 457 0.0365618V0.999971C457 42.4213 423.421 76 382 76H72C30.5787 76 -3 42.4213 -3 0.999972V0.0365618Z"
                  fill="url(#paint0_linear_4563_8922)"
                  fillOpacity="0.7"
                />
                <defs>
                  <linearGradient id="paint0_linear_4563_8922" x1="-3" y1="38.0188" x2="257" y2="38.0188" gradientUnits="userSpaceOnUse">
                    <stop offset="0.0866666" stopColor="#17005E" />
                    <stop offset="1" stopColor="#FF9D00" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      

    ))
    }
    </div>
    </div>
  )
}

export default ShowSections