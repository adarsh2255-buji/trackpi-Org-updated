import React from 'react'
import { Outlet } from 'react-router-dom'
import './css/LayoutB.css'

const LayoutB = () => {
  return (
    <div className='background-b'>
        <Outlet />
    </div>
  )
}

export default LayoutB