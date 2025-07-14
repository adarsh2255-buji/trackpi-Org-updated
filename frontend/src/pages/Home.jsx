import React, { useRef } from 'react';
import Signup from '../components/Signup';
import hero from '../assets/hero.png'
import { Play,Volume2 } from 'lucide-react'



function Home() {
 
  return (
    <>
 <section className="relative h-[630px]  flex items-center text-white overflow-hidden bg-black">
      {/* Background Image */}
      <img
        src={hero}
        alt="Hero background"
        className="absolute top-0 left-0 w-full h-[630px] object-cover -scale-x-100"
      />

      {/* Overlay Content */}
      <div className="relative z-10 text-center max-w-3xl pl-[78px] ">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Kerala&apos;s Biggest Freelancer <br /> Community
        </h1>
        <p className="mt-4 text-lg font-light">
          Welcome to TrackPi Private Limited – Your Strategic Growth Partner.
        </p>
        <button className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white/50 text-white rounded-[8px] font-semibold cursor-pointer roboto">
          <Play className="w-5 h-5 text-white" />
          Watch Now
        </button>
      </div>
      <div className='absolute bottom-10 right-6 z-10 w-12.5 h-12.5 bg-[#492F30] rounded-[30px] flex items-center justify-center cursor-pointer'>
        <Volume2 className='' />
      </div>
      
    </section>

      

     
      <Signup />
    </>
  );
}

export default Home
