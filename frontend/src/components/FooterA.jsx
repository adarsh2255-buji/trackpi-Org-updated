import React from 'react'

const FooterA=()=> {
  return (
    <div>
      <footer className="mt-auto pt-8 pb-4 px-4 relative">
  <div className="w-full flex justify-center">
    <div className="bg-[#1c1c1c] rounded-full shadow-[inset_0_0_4px_#333,0_4px_8px_rgba(0,0,0,0.4)] 
                    w-full max-w-[500px] min-h-[40px] md:min-h-[48px] px-4 flex items-center justify-center">
      <nav className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-center">
        <a href="#" className="text-gray-400 hover:text-white transition">Discover Us</a>
        <a href="#" className="text-gray-400 hover:text-white transition">Help Centre</a>
        <a href="#" className="text-yellow-500 font-bold">Courses</a>
        <a href="#" className="text-gray-400 hover:text-white transition">FAQ</a>
      </nav>
    </div>
  </div>
</footer>
    </div>
  )
}

export default FooterA
