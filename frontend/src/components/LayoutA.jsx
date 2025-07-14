import React from 'react'
import { Outlet } from 'react-router-dom'
import './css/LayoutA.css'
import HeaderA from './HeaderA'

const LayoutA = () => {
  return (
    <>
    <HeaderA />
    <div className='background-a'>
        <Outlet />
    </div>
    </>
  )
}

export default LayoutA