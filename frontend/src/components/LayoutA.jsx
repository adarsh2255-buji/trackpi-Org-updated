import React from 'react'
import { Outlet } from 'react-router-dom'
import './css/LayoutA.css'
import HeaderA from './HeaderA'

const LayoutA = () => {
  return (
    <>
    <HeaderA />
    <main className='background-a'>
        <Outlet />
    </main>
    </>
  )
}

export default LayoutA