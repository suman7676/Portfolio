

import Link from "next/link";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative bg-gray-50 py-8 sm:py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap mx-4">

            {/* Text Content */}
            <div className="w-full lg:w-1/2 px-2 mb-8 sm:mb-12 lg:mb-0 flex items-center order-2 lg:order-1">
              <div className="w-full text-center lg:text-left">
                <div className="max-w-md mx-auto lg:mx-0">
                  <h2 className="mb-3 sm:mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold font-heading">
                    <span className="text-green-600 block mb-2">Hi I&apos;m SUMAN AHAMMED</span>
                    <span className="text-3xl sm:text-4xl lg:text-5xl text-green-600 block">
                      Full Stack Developer
                    </span>
                  </h2>
                </div>

                <div className="max-w-sm mx-auto lg:mx-0">
                  <p className="mb-6 sm:mb-8 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Hi I&apos;m a full-stack developer with the love of a UI/UX design. 
                    Listed skills include all things LARAVEL & Next.js FRAMEWORK, JavaScript, 
                    such as React.js & Vue.js, and as well as UI/UX design.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start">
                    <Link
                      href="/Contact"
                      className="w-full sm:w-auto py-3 px-6 sm:px-8 leading-loose bg-green-600 hover:bg-green-700 text-white font-semibold rounded-l-xl rounded-t-xl transition duration-200 text-center"
                    >
                      Get Started
                    </Link>

                    <Link
                      href="/Resume"
                      className="w-full sm:w-auto py-3 px-6 sm:px-8 leading-loose font-semibold bg-green-600 hover:bg-green-700 border-gray-200 rounded-l-xl rounded-t-xl transition duration-200 text-center"
                    >
                      My Resume
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="w-full lg:w-1/2 px-2 flex items-center justify-center mb-8 lg:mb-0 order-1 lg:order-2">
              <div className="relative">
                <Image
                  className="ring-4 ring-animate ring-offset-4 ring-green-100 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-xl border-2 border-transparent hover:border-green-500 transition-all duration-300 hover:scale-105"
                  src="/profile.png"
                  alt="Suman Ahammed - Full Stack Developer"
                  width={400} height={400}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
