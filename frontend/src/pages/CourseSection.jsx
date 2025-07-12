import React, { useContext, useRef }  from 'react'
import { CourseContext } from '../context/courseContext'
import { ChevronLeft } from 'lucide-react'

const CourseSection = () => {
  const { courses, loading } = useContext(CourseContext);
  

  const scrollRef = useRef(null);

  // scroll left and right
  const scroll = (direction) => {
    if(scrollRef.current){
      const scrollAmount = direction === "left" ? -200 : 200;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };


  console.log(courses);   
  return (
    <>
    <section className='container-search px-5 '>
      <div className='flex justify-between mt-5'>
        <h1 className='text-white font-bold text-2xl roboto'>Courses</h1>
          <div className='relative  '>
            <i className='fa fa-search text-[#B3B6B6] text-[18px] absolute left-3 top-1/2 transform -translate-y-1/2'></i>
              <input 
                  type="search" 
                  name="search" 
                  id="search" 
                  placeholder='Search...'
                  className='rounded-[15px] w-50 px-13.5 py-1.5 text-3 font-medium bg-transparent text-white roboto' />
          </div>
      </div>
    </section>

    {/* course list section */}
    <div className='relative mt-8 px-5'>
      {/* Left button */}
      <button 
        onClick={() => scroll("left")}
         className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-70 text-white p-2 rounded-full"
      >
        <ChevronLeft size={18} />
      </button>
    </div>

    </>
  )
}

export default CourseSection