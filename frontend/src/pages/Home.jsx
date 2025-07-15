import React, { useRef } from 'react';
import Signup from '../components/Signup';
import hero from '../assets/hero.png'
import freeLancer from '../assets/freelancer.png'
import group2 from '../assets/group2.png'
import luminar from '../assets/luminar.png'
import IIDM from '../assets/IIDM.jpg'
import tech from '../assets/tech.jpg'
import trade from '../assets/trade.png'
import group3 from '../assets/group3.png'
import group4 from '../assets/group4.png'
import { Play,Volume2 } from 'lucide-react'



function Home() {
  const companyArray = [luminar, IIDM, tech, trade]
 
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
    {/* hero section ends */}

    <section className='pr-5'>
      <h2 className='text-center text-white font-extrabold text-6xl mt-5 libre-franklin'
      style={{lineHeight:'100%', letterSpacing:'5%'}}>People’s Interest, Our Interest</h2>
      <p className='libre-franklin font-semibold text-[26px] text-justify text-white mx-30 my-10'
      style={{lineHeight:"100%"}}>We are building Kerala’s largest freelancer community, a platform where independent professionals can connect, collaborate, and grow together. Whether you're a beginner or an expert, our community offers resources, training, and networking opportunities to help you thrive.</p>

      <div className='flex gap-1.5'>
        <div className='flex flex-col mt-15'>
          <h2 className='libre-franklin text-white font-bold text-6xl text-center mb-5'
          style={{lineHeight:"100%"}}>Become a Freelancer in 24 Hours </h2>
          <p className='libre-franklin text-white font-semibold text-2xl text-justify mx-14 mb-2'
          style={{lineHeight:"100%"}}>Are you ready to start your freelancing journey today? Gain control over your career? We make it easy for you to start. </p>
          <p className='libre-franklin text-white font-semibold text-[28px] text-center mb-4'>you can become a freelancer in just 24 hours.</p>
          <p className='libre-franklin text-white font-semibold text-[29px] text-center'>Join us to know more</p>
        </div>
        <img src={freeLancer} alt="art image" />
      </div>
      <img src={group2} alt="section image" className='' />
    </section>
    {/* section ends */}

    <section className="banner">
    <div className=" overflow-hidden w-full bg-gradient-to-r from-[#FFC100] to-[#FF9D00] py-5">
  <div className=" whitespace-nowrap scroll-animation flex gap-5">
    {companyArray.map((img, index) => (
      <img
        key={index}
        src={img}
        alt={`company-${index}`}
        className="w-[180px] h-[80px] inline-block"
      />
    ))}
    {/* Duplicate the array to make it seamless */}
    {companyArray.map((img, index) => (
      <img
        key={`copy-${index}`}
        src={img}
        alt={`company-copy-${index}`}
        className="w-[180px] h-[80px] inline-block"
      />
    ))}
    
  </div>
</div>
    </section>

<div className='flex gap-5 mx-5'>
<div className="bg-black p-[50px] rounded-[20px] flex flex-col justify-between h-[350px] w-[580px] max-w-full">
    <p className="libre-franklin font-semibold text-[28px] text-white leading-[100%] tracking-wider">
      "TrackPi is a platform that helps freelancers manage their projects. Our goal is to make freelancing seamless and profitable for everyone."
    </p>
    <p className="libre-franklin font-extrabold text-[38px] text-[#FFC727] mt-5 leading-[100%]">
      What is TrackPi?
    </p>
  </div>
  <div className="bg-black p-[50px] rounded-[20px] flex flex-col justify-between h-[350px] w-[1000px] max-w-full place-self-start">
    <p className="libre-franklin font-semibold text-[28px] text-white leading-[100%] tracking-wider">
      Freelancing is a way of working where individuals offer their skills and services on a project basis rather than being employed full-time by a single company. It allows for flexibility, independence, and diverse work opportunities.
    </p>
    <p className="libre-franklin font-extrabold text-[38px] text-[#FFC727] mt-5 leading-[100%]">
      What is Freelancing?
    </p>
  </div>
</div>

<div className='flex gap-5 mx-5 mt-5'>
<div className="bg-black p-[50px] rounded-[20px] flex flex-col justify-between h-[350px] w-[1000px] max-w-full ">
    <p className="libre-franklin font-semibold text-[28px] text-white leading-[100%] tracking-wider">
      Access to high-quality projects from verified clients. A supportive network of like-minded freelancers. Free training courses to upskill and grow. Secure and timely payments for your work.
    </p>
    <p className="libre-franklin font-extrabold text-[38px] text-[#FFC727] mt-5 leading-[100%]">
      Why Join TrackPi's Freelancer Community?
    </p>
  </div>
  <div className="bg-black p-[50px] rounded-[20px] flex flex-col justify-between h-[350px] w-[580px] max-w-full ">
    <p className="libre-franklin font-semibold text-[28px] text-white leading-[100%] tracking-wider">
      Gain essential freelancing knowledge by Complete Training. Unlock the Freelancer Marketplace – Start receiving project offers. Work & Get Paid – Deliver quality work and earn.
    </p>
    <p className="libre-franklin font-extrabold text-[38px] text-[#FFC727] mt-5 leading-[100%]">
      How It Works?
    </p>
  </div>
</div>

<section>
  <h2 className='libre-franklin font-bold text-6xl text-center mt-30 text-white'
  style={{lineHeight:"100%", letterSpacing:"5%"}}>High-Resolution Benefits</h2>
<div className='flex gap-5 mx-5 mt-30 '>
  <div className='flex flex-col justify-center gap-5'>
    <h3 className='libre-franklin text-white font-extrabold text-[50px] text-center'
    style={{lineHeight:"100%", letterSpacing:"5%"}}>Who We Are?</h3>
    <p className='urbanist font-normal text-2xl text-justify text-white mx-10'
    style={{lineHeight:"36px"}}>We’re here to change how the world works—from business as usual to brave new work. It takes an unusual person to disrupt decades of tradition and guide hundreds or thousands of people through an experience that demands their bravery, vulnerability, and curiosity. It takes conviction to join a decentralized, self-managing, public benefit corporation where reputation matters more than position.</p>
  </div>
  <img src={group3} alt="group image" className='w-[590px] h-[490px] rounded-[10px]' />
  </div>


 
<div className='flex gap-5 mx-5 mt-30 '>
<img src={group4} alt="group image" className='w-[590px] h-[490px] rounded-[10px]' />
  <div className='flex flex-col justify-center gap-5'>
    <h3 className='libre-franklin text-white font-extrabold text-[50px] text-center'
    style={{lineHeight:"100%", letterSpacing:"5%"}}>Who We Are?</h3>
    <p className='urbanist font-normal text-2xl text-justify text-white mx-10'
    style={{lineHeight:"36px"}}>The people who make up The Ready are specialists in the ways of organizational culture and transformation. Yet within that world we are generalists drawing freely from the principles and practices of dozens of theories and hundreds of iconoclastic firms. We are coaches, facilitators, academics, psychologists, technologists, and corporate veterans who have found each other in our quest to make work better. Our backgrounds are varied but our ambition is united.</p>
  </div>
 
  </div>
</section>

      

     
      <Signup />
    </>
  );
}

export default Home
