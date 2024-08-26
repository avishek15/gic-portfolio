'use client';
import Image from 'next/image';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const handleHireUsClick = () => {
    window.location.href = 'https://guardianinfoconsultant.in/contact'; // Replace with your desired URL
  };

  const handleSeeWorkClick = () => {
    const projectsSection = document.getElementById('projects'); // Ensure this ID matches the one in your projects section
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold ">
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-white-100 to-white-300">
              Empowering Businesses to Thrive in the Digital Era
            </span>
            <br />
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'Software Development',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Mobile Apps',
                1000,
                'Web Development',
                1000,
                'AI and ML Consulting',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-white-100 text-lg lg:text-xl mb-6 text-justify">
            Guardian Info Consultants pioneers customized software solutions,
            epitomizing integrity, expertise, and innovation. With a seasoned
            team, they craft tailored software, mobile apps, and web solutions.
            Committed to collaboration and excellence, they empower businesses
            to thrive in the digital era, offering end-to-end services and
            strategic consulting. Guardian Info Consultants: where innovation
            meets success.
          </p>

          <div>
            {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white-200 hover:bg-white-300 text-black-100 font-bold' >Hire Us!</button> */}
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br
               from-black-100 via-black-200 to-black-100 hover:bg-slate-50 text-white-100 font-bold text-lg"
              onClick={handleHireUsClick}
            >
              Hire Us!
            </button>
            <button
              className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent
               hover:bg-white-300 text-white-100 border border-white mt-3"
              onClick={handleSeeWorkClick}
            >
              See Work
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0 md:ml-10">
          <div className="rounded-full bg-[#0a0b18] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/GIC-Square_logo.png"
              alt="GIC Logo"
              width={350}
              height={350}
              className="absolute transform -translate-x-36  lg:-translate-x-60 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
