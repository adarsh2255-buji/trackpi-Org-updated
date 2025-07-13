import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { CourseContext } from '../context/courseContext';

const ShowSections = () => {
    const { courseId } = useParams();
    const { courses } = useContext(CourseContext) 

    const selectedCourse = courses.find((course) => course._id === courseId)

    const result = selectedCourse.sections.map((section) => section)
    console.log(result)

    if(!selectedCourse) {
      <p className="text-white mt-5">No course found</p>
    }
  return (
    <div className="text-white mt-5">
          <div className="text-white mt-5">
      <h2 className="text-xl font-bold mb-4">Sections of: {selectedCourse.title}</h2>
      {
        result.map((section) => (
          <ul key={section._id}>
            <li>{section.title}</li>
            <li>{section.duration}</li>
            <li>{section.videos.length}</li>
          </ul>
        ))
      }

     
    </div>
    </div>
  )
}

export default ShowSections