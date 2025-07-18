import React from 'react'
import { Outlet } from 'react-router-dom'

const LayoutC = () => {
  return (
    <>
    <main className=''>
        <Outlet />

    </main>
    
    </>
  )
}

export default LayoutC