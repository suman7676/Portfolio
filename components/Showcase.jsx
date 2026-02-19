import Image from 'next/image';
import Link from 'next/link';
import React from 'react';


const PricingSection = () => {
  return (
    <>
   
    <section className="bg-gray-50">
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-16 w-full flex flex-wrap items-center">
            <div className="w-full lg:w-1/2">
              <span className="text-green-600 font-bold"></span>
              <h2 className="mb-2 text-4xl lg:text-5xl text-green-600 font-bold font-heading">Choose your best plan</h2>
            </div>
            <div className="w-full lg:w-1/2">
              <p className="max-w-xs lg:mx-auto text-red-700 font-bold text-2xl">
                If you buy any product contact with me.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap">
            {/* Plan 1 */}
            <div id="projectList" className="mb-8 w-full flex flex-col lg:flex-row items-center bg-white rounded shadow overflow-hidden">
              <div className="w-full lg:w-1/2">
                <Image 
                  width={200} 
                  height={200} 
                  src="/profile.png" 
                  alt="Real Estate Website"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2  px-8 py-6">
                <h1 className="mb-4 text-3xl lg:text-4xl text-red-500 font-bold">Real Estate Website</h1>
                <ul className="mb-6 text-gray-700 space-y-3">
                  <li className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Used update technology</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Super fast website</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="mr-2 w-5 h-5 text-green-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    <span>Safety and security maintained</span>
                  </li>
                </ul>
                
                <div className="mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-gray-900">$95</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg text-center">
                    Buy Now
                  </Link>
                  
                  <Link href="/" className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg text-center">
                    Live View
                  </Link>
                </div>
              </div>
            </div>

            {/* Additional Pricing Plans - Copy the above structure and modify content */}
          </div>
        </div>
      </div>
    </section>
    
    </>
  );
};

export default PricingSection;