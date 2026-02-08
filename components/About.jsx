import Image from 'next/image';
import React from 'react';

const AboutMe = () => {
  return (
    <>
   
    <div className="min-h-screen w-full bg-white">
      <div className="min-h-screen w-full bg-white py-12 md:py-20 flex items-center">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
            {/* Left Side (Image) */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-start">
              <div className="relative">
                <Image 
                  className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-lg border-4 border-indigo-200 hover:scale-105 transition-transform duration-300"
                  src="/profile.png"
                  alt="Profile"
                  width={400} 
                  height={400}
                  priority
                />
              </div>
            </div>

            {/* Right Side (Text) */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <span className="inline-block text-gray-500 border-b-2 border-indigo-600 uppercase text-sm tracking-wide pb-1">
                Introduction
              </span>
              <h2 className="my-4 font-bold text-3xl sm:text-4xl text-indigo-600 md:text-5xl lg:text-6xl">
                About <span className="text-indigo-600">Me</span>
              </h2>
              <p className="text-gray-700 leading-relaxed text-base sm:text-lg md:text-xl">
                Hi I&apos;m a <span className="font-semibold text-indigo-600">Full-Stack Developer</span> with a love for{' '}
                <span className="text-red-400 font-semibold">LARAVEL FRAMEWORK</span>, JavaScript (especially React.js & Next.js), and modern 
                UI/UX design through Figma & Adobe XD.  
                <br /><br />
                Sometimes simple is best, and the slick branding, typography, and design in this portfolio highlight not only my 
                skills but also my personality. This portfolio works as an SPA, where clicking a menu item smoothly scrolls 
                you to the relevant section.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </>
  );
};

export default AboutMe;