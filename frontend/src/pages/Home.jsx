import React, { useRef } from 'react';
import Signup from '../components/Signup';
// import Navbar from '../components/Navbar';
// import Hero from '../components/HeroOfHome';
// import sectionImage from '../assets/sectionImage.png';
// import sectionImage2 from '../assets/bro.png';
// import FreelancerLoginPage from '../components/LoginPage';
// import HomeFoot from '../components/Homefooter';
// import Rectangle3d from '../components/Rectangle3d';
// import QuestionCard from '../components/QuestionCard';
// import Phone from '../components/Phoneenter'; // Optional

function Home() {
  // const loginRef = useRef(null);

  // const scrollToLogin = () => {
  //   loginRef.current?.scrollIntoView({ behavior: 'smooth' });
  // };

  return (
    <>
      

      {/* <Navbar onLoginClick={scrollToLogin} />
      <Hero /> */}

      {/* <div className="w-full bg-gradient-to-b from-[#09060E] via-[#2D1D29] to-[#694230]">
  <div className="text-white font-['Libre_Franklin'] px-4 md:px-[78px] py-16 flex flex-col gap-4 md:gap-10"> */}

    {/* Row 1 */}
    {/* <div className="flex flex-col items-center justify-center text-center md:text-left max-w-[1568px] mx-auto px-4 md:px-8 py-2 md:py-8 gap-2 md:gap-4 md:ml-[20px]">
      <h2 className="text-[20px] sm:text-[28px] md:text-[56px] lg:text-[64px] font-extrabold leading-tight tracking-tight whitespace-nowrap overflow-hidden text-ellipsis">
        People’s Interest, Our Interest
      </h2>

      <p className="w-full md:w-[783px] sm:text-[16px] md:text-[20px] lg:text-[24px] leading-snug font-medium text-white">
        We are building Kerala’s largest freelancer community, a platform where independent professionals can connect, collaborate, and grow together. Whether you're a beginner or an expert, our community offers resources, training, and networking opportunities to help you thrive.
      </p>
    </div> */}

    {/* Row 2 */}
    {/* <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-[1568px] mx-auto px-4 md:px-8 py-2 md:py-8 gap-4 md:gap-6"> */}

      {/* Col 1 - Text */}
      {/* <div className="w-full md:w-[58%] flex flex-col items-center justify-center text-center gap-2 md:gap-4 md:ml-[20px]">
        <h2 className="text-[20px] sm:text-[28px] md:text-[56px] lg:text-[64px] font-bold leading-tight tracking-tight text-white whitespace-nowrap overflow-hidden text-ellipsis">
          Become a Freelancer in 24 Hours
        </h2>

        <p className="w-full md:w-[783px] sm:text-[16px] md:text-[20px] lg:text-[24px] text-white leading-snug">
          Are you ready to start your freelancing journey today? Gain control over your career? We make it easy for you to start.
        </p>

        <p className="w-full md:w-[783px] sm:text-[18px] md:text-[24px] lg:text-[28px] text-white font-medium leading-snug">
          You can become a freelancer in just 24 hours.
        </p>

        <p className="w-[200px] sm:w-[250px] md:w-[334px] h-[40px] sm:h-[48px] md:h-[55px] px-4 sm:px-6 py-2 sm:py-3 rounded-md sm:text-[18px] md:text-[24px] font-semibold cursor-pointer hover:opacity-90 transition text-white bg-transparent">
          Join us to know more
        </p>
      </div> */}

      {/* Col 2 - Image */}
      {/* <div className="w-full md:w-[40%] flex justify-center md:justify-end items-center md:-ml-8">
        <div
          className="relative w-[250px] sm:w-[300px] md:w-[360px] h-[200px] sm:h-[260px] md:h-[310px] rounded-[36px] overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${sectionImage})` }}
        >
          <img
            src={sectionImage2}
            alt="Freelancer"
            className="absolute w-[76%] h-[86%] top-[2%] left-[12%] rounded-[36px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</div> */}


      {/* <div ref={loginRef}>
        <Rectangle3d />
        <QuestionCard />
        <FreelancerLoginPage /> */}
        {/* Optional: <Phone /> */}
        {/* <HomeFoot /> */}
      {/* </div> */}

      {/* End scroll wrapper if used */}
      {/* </div> */}
      <Signup />
    </>
  );
}

export default Home
