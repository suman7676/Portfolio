"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Resume = () => {
  return (
    <>
    
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-8 px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Sidebar (Profile + Skills) */}
          <div className="lg:col-span-4">
            <div className="bg-white shadow rounded-lg p-6">
              <div className="flex flex-col items-center text-center">
                <Image 
                  className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md mb-4"
                  src="/profile.png" 
                  alt="Profile"
                  width={192}
                  height={192}
                  priority
                />
                <h1 className="text-xl md:text-2xl text-green-700 font-bold">Full Stack Developer</h1>

                {/* Buttons */}
                <div className="mt-6 flex flex-col sm:flex-row gap-4 w-full justify-center">
                  <Link 
                    href="/contact" 
                    className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded text-center transition-colors">
                    Contact
                  </Link>
                  
                  {/* Download Resume Button */}
                  
                  <a
                   href="/resume/Suman_Ahammed_Resume.pdf"
                   download="Suman_Ahammed_Resume.pdf" 
                   target="_blank"                     
                   rel="noopener noreferrer"
                   className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded text-center transition-colors"
                   >
                     Download Resume
                  </a>
                </div>
              </div>

              <hr className="my-6 border-t border-gray-300" />

              {/* Skills */}
              <div>
                <span className="text-xl text-red-700 uppercase font-bold tracking-wider mb-4 block">
                  Skills
                </span>
                <ul className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-gray-700 font-medium">
                  <li>Laravel</li>
                  <li>PHP</li>
                  <li>JavaScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>HTML/CSS</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Main Content (About + Experience) */}
          <div className="lg:col-span-8 space-y-8">
            {/* About */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl text-blue-700 font-bold mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">
                Hi I&apos;m a <span className="font-semibold text-indigo-600">Full-Stack Developer</span> with the love of UI/UX design.
                Skilled in <span className="text-red-500 font-semibold">Laravel Framework</span>, JavaScript (React.js & Next.js), and modern
                UI/UX design tools like Figma & Adobe XD.  
                <br /><br />
                Sometimes simple is best, and the slick branding, typography, and copy show off both
                personality and skills. This online portfolio is a great example of an SPA, where clicking
                a menu item scrolls you to the relevant section.
              </p>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-2xl text-blue-700 font-bold mb-6">Experience</h2>

              {/* Job 1 */}
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <span className="text-red-700 font-bold">Front-End Developer</span>
                  <p className="text-gray-700">
                    <span className="mr-2">SimpliLearn Company</span>
                    <span>(2017 - 2019)</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-600">
                  Built front-end portions of websites and applications using HTML, CSS, and JavaScript.
                  Focused on user interaction and smooth UI/UX experiences.
                </p>
              </div>

              {/* Job 2 */}
              <div className="bg-white shadow rounded-lg p-6 mb-6">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <span className="text-red-700 font-bold">Back-End Developer</span>
                  <p className="text-gray-700">
                    <span className="mr-2">Workable Company</span>
                    <span>(2019 - 2022)</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-600">
                  Designed APIs, optimized scalable distributed systems, and improved web app
                  performance. Built automated tests for regression and business logic validation.
                </p>
              </div>

              {/* Job 3 */}
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex flex-col sm:flex-row justify-between gap-2">
                  <span className="text-red-700 font-bold">Full Stack Developer</span>
                  <p className="text-gray-700">
                    <span className="mr-2">Indeed Company</span>
                    <span>(2023 - 2024)</span>
                  </p>
                </div>
                <p className="mt-2 text-gray-600">
                  Managed end-to-end software development from conception to deployment.
                  Oversaw automated testing, deployment pipelines, and ensured scalable solutions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
    
    </>
  );
};

export default Resume;