import React, { useRef } from 'react';
import Signup from '../components/Signup';
import hero from '../assets/hero.png';
import freeLancer from '../assets/freelancer.png';
import group2 from '../assets/group2.png';
import luminar from '../assets/luminar.png';
import IIDM from '../assets/IIDM.jpg';
import tech from '../assets/tech.jpg';
import trade from '../assets/trade.png';
import group3 from '../assets/group3.png';
import group4 from '../assets/group4.png';
import { Play, Volume2 } from 'lucide-react';

function Home() {
  const companyArray = [luminar, IIDM, tech, trade];

  return (
    <div className="bg-gradient-to-br from-[#09060E] via-[#2D1D29] to-[#694230]">
      {/* Hero Section */} 
      <section className="relative h-[100vh] md:h-[630px] flex items-center text-white overflow-hidden">
        <img
          src={hero}
          alt="Hero background"
          className="absolute top-0 left-0 w-full h-full object-cover -scale-x-100"
        />
        <div className="relative z-10 text-center px-4 md:px-[78px] max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
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
        <div className='absolute bottom-10 right-6 z-10 w-12 h-12 bg-[#492F30] rounded-full flex items-center justify-center cursor-pointer'>
          <Volume2 className='' />
        </div>
      </section>

      <section className='px-4 md:px-30 mt-10'>
        <h2 className='text-center text-white font-extrabold text-4xl md:text-5xl libre-franklin leading-tight tracking-wide'>
          People’s Interest, Our Interest</h2>
        <p className='libre-franklin font-semibold text-lg md:text-xl text-justify text-white my-9 md:w-10/11 mx-auto'>
          We are building Kerala’s largest freelancer community, a platform where independent professionals can connect, collaborate, and grow together. Whether you're a beginner or an expert, our community offers resources, training, and networking opportunities to help you thrive.
        </p>
       <br/>
        <div className='flex flex-col-reverse md:flex-row items-center gap-60'>
          <div className='flex flex-col gap-3 md:w-1/2'>
            <h2 className='libre-franklin text-white font-extrabold text-4xl md:text-5xl text-center md:text-left whitespace-nowrap'>
              Become a Freelancer in 24 Hours
            </h2>
            <br/>
            <p className='libre-franklin text-white font-semibold text-base md:text-xl text-justify md:text-left'>
              Are you ready to start your freelancing journey today? Gain control over your career? We make it easy for you to start.
            </p>
            <p className='libre-franklin text-white font-semibold text-lg text-center md:text-center'>You can become a freelancer in just 24 hours.</p><br/>
            <p className='libre-franklin text-white font-semibold text-lg text-center md:text-'>Join us to know more</p>
          </div>
          <img src={freeLancer} alt="art image" className='w-full md:w-[400px]' />
        </div>

        <img src={group2} alt="section image" className='w-full mt-10 rounded-lg' />
      </section>

      <section className="banner my-10">
        <div className="overflow-hidden w-full bg-gradient-to-r from-[#FFC100] to-[#FF9D00] py-5">
          <div className="whitespace-nowrap scroll-animation flex gap-5 px-4">
            {companyArray.map((img, index) => (
              <img key={index} src={img} alt={`company-${index}`} className="w-[150px] h-[60px] inline-block object-contain" />
            ))}
            {companyArray.map((img, index) => (
              <img key={`copy-${index}`} src={img} alt={`company-copy-${index}`} className="w-[150px] h-[60px] inline-block object-contain" />
            ))}
          </div>
        </div>
      </section>

      <section className='px-3 md:px-20 grid md:grid-cols-2 gap-5'>
        <div className="bg-black p-6 md:p-12 rounded-[20px] flex flex-col justify-between h-auto">
          <p className="libre-franklin font-semibold text-lg md:text-2xl text-white tracking-wider">
            "TrackPi is a platform that helps freelancers manage their projects. Our goal is to make freelancing seamless and profitable for everyone."
          </p>
          <p className="libre-franklin font-extrabold text-2xl md:text-3xl text-[#FFC727] mt-5">What is TrackPi?</p>
        </div>
        <div className="bg-black p-6 md:p-12 rounded-[20px] flex flex-col justify-between h-auto">
          <p className="libre-franklin font-semibold text-lg md:text-2xl text-white tracking-wider">
            Freelancing is a way of working where individuals offer their skills and services on a project basis rather than being employed full-time by a single company. It allows for flexibility, independence, and diverse work opportunities.
          </p>
          <p className="libre-franklin font-extrabold text-2xl md:text-3xl text-[#FFC727] mt-5">What is Freelancing?</p>
        </div>
      </section>

      <section className='px-4 md:px-20 grid md:grid-cols-2 gap-5 mt-5'>
        <div className="bg-black p-6 md:p-12 rounded-[20px] flex flex-col justify-between h-auto">
          <p className="libre-franklin font-semibold text-lg md:text-2xl text-white tracking-wider">
            Access to high-quality projects from verified clients. A supportive network of like-minded freelancers. Free training courses to upskill and grow. Secure and timely payments for your work.
          </p>
          <p className="libre-franklin font-extrabold text-2xl md:text-3xl text-[#FFC727] mt-5">Why Join TrackPi's Freelancer Community?</p>
        </div>
        <div className="bg-black p-6 md:p-12 rounded-[20px] flex flex-col justify-between h-auto">
          <p className="libre-franklin font-semibold text-lg md:text-2xl text-white tracking-wider">
            Gain essential freelancing knowledge by Complete Training. Unlock the Freelancer Marketplace – Start receiving project offers. Work & Get Paid – Deliver quality work and earn.
          </p>
          <p className="libre-franklin font-extrabold text-2xl md:text-3xl text-[#FFC727] mt-5">How It Works?</p>
        </div>
      </section>

      <section className='px-4 md:px-20 mt-10'>
        <h2 className='libre-franklin font-bold text-4xl md:text-6xl text-center text-white mb-10 tracking-wide'>High-Resolution Benefits</h2>

        <div className='flex flex-col md:flex-row gap-5 mb-10'>
          <div className='flex flex-col justify-center gap-5 md:w-1/2'>
            <h3 className='libre-franklin text-white font-extrabold text-3xl md:text-5xl text-center'>Who We Are?</h3>
            <p className='urbanist font-normal text-lg md:text-2xl text-justify text-white'>
              We’re here to change how the world works—from business as usual to brave new work. It takes an unusual person to disrupt decades of tradition and guide hundreds or thousands of people through an experience that demands their bravery, vulnerability, and curiosity. It takes conviction to join a decentralized, self-managing, public benefit corporation where reputation matters more than position.
            </p>
          </div>
          <img src={group3} alt="group image" className='w-full md:w-[590px] h-auto rounded-[10px]' />
        </div>

        <div className='flex flex-col md:flex-row-reverse gap-5'>
          <div className='flex flex-col justify-center gap-5 md:w-1/2'>
            <h3 className='libre-franklin text-white font-extrabold text-3xl md:text-5xl text-center'>Who We Are?</h3>
            <p className='urbanist font-normal text-lg md:text-2xl text-justify text-white'>
              The people who make up The Ready are specialists in the ways of organizational culture and transformation. Yet within that world we are generalists drawing freely from the principles and practices of dozens of theories and hundreds of iconoclastic firms. We are coaches, facilitators, academics, psychologists, technologists, and corporate veterans who have found each other in our quest to make work better. Our backgrounds are varied but our ambition is united.
            </p>
          </div>
          <img src={group4} alt="group image" className='w-full md:w-[590px] h-auto rounded-[10px]' />
        </div>
      </section>

      <Signup />
    </div>
  );
}

export default Home;
