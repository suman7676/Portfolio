"use client";

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FacebookIcon, Github, Instagram, Linkedin, MailIcon, Twitter } from "lucide-react";
const HeroSection = () => {
//  throw new Error("hello");

  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 ml lg:ml-28">
          <div className="flex flex-wrap -mx-4">
            {/* Text Content */}
            <div className="w-full lg:w-1/2 px-4 mb-8 sm:mb-12 lg:mb-0 flex items-center order-2 lg:order-1">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                  {/* Mobile: 2 lines, Desktop: 1 line */}
                  <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-3xl font-bold font-heading">
                    <span className="block lg:inline text-green-600">Hi I A&apos;m SUMAN AHAMMED</span>
                  </h2>
                  <h3 className="text-3xl sm:text-4xl lg:text-4xl text-green-600 font-bold mb-4 lg:mb-6">
                    Full Stack Developer
                  </h3>
                </div>
                <div className="max-w-sm mx-auto lg:mx-0">
                  <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Hi I&apos;m a full-stack developer with the love of a UI/UX design. Listed skills include all things LARAVEL FRAMEWORK, JavaScript, such as react.js & Next.js, and as well as UI/UX design.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start">
                    <Link 
                      className="w-full sm:w-auto py-3 px-6 sm:px-8 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200 text-center" 
                      href="/contact">
                      Get Started
                    </Link>
                    <Link 
                      className="w-full sm:w-auto py-3 px-6 sm:px-8 leading-loose font-semibold text-white bg-green-600 hover:bg-green-700 border border-gray-200 rounded-l-xl rounded-t-xl transition duration-200 text-center" 
                      href="/resume">
                      My Resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image */}
            <div className="w-full lg:w-1/2 px-4 flex items-center justify-center mb-8 lg:mb-0 order-1 lg:order-2">
              <div className="relative">
                <Image 
                  className="ring-animate ring-4 ring-offset-4 ring-green-100 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl border-2 border-transparent hover:border-green-500 transition-all duration-300 hover:scale-105" 
                  src="/profile.png" 
                  alt="Suman Ahammed - Full Stack Developer"
                  width={384}
                  height={384}
                  priority
                />
                <div className="flex space-x-2 my-2 mt-5 lg:space-x-4 justify-center">
            <Link href="https://www.facebook.com/profile.php?id=100048076428721&mibextid=ZbWKwL">
              
              <FacebookIcon className="w-10 h-10 mr-2 text-green-700" />
            </Link>

            
            <Link href="https://github.com/suman7676/suman7676">
             
               <Github className="w-10 h-10 mr-2 text-green-700" />
            </Link>
            <Link href="www.linkedin.com/in/full-stack-developer-suman">
             
               <Linkedin className="w-10 h-10 mr-2 text-green-700" />
            </Link>
            <Link href="mailto:suman767651@gmail.com">
             
               <MailIcon className="w-10 h-10 mr-2 text-green-700" />
            </Link>
          </div>
              </div>

              



            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;