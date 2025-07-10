import React from 'react'
import { Outlet } from 'react-router-dom'
import './css/LayoutA.css'

const LayoutA = () => {
  return (
    <div className='background-a'>
        <Outlet />
    </div>
  )
}

export default LayoutA