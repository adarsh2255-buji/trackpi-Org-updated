import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { CourseContext } from '../context/courseContext'

const SectionVideos = () => {
    const {id} = useParams()
    const { courses, loading } = useContext(CourseContext)

    if(loading){
        return <p className='text-white'>Loading...</p>
    }

    const allSections = courses.flatMap((course) => course.sections);
    const matchedSection = allSections.find(section => section._id === id) 
    const videoList = matchedSection.videos.map((video) => video.url)
    console.log(videoList)

    

    if(loading){
        return <p className='text-white'>Loading...</p>
    }

   


  return (
    <div className='text-white'>SectionVideos</div>
  )
}

export default SectionVideos