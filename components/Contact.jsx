"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    // You can add API call or email service here
  };

  return (
    <>
    
    <div className="relative flex items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left Side - Contact Info */}
            <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                Get in touch
              </h1>
              <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                Fill in the form to start a conversation
              </p>

              {/* Phone */}
              <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 text-gray-500"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                  +88 01684582776
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg 
                  fill="none" 
                  stroke="currentColor" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="1.5" 
                  viewBox="0 0 24 24" 
                  className="w-8 h-8 text-gray-500"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="1.5" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <div className="ml-4 text-md tracking-wide font-semibold">
                  <a 
                    href="mailto:suman767651@gmail.com"
                    className="hover:text-blue-600 transition-colors"
                  >
                    suman767651@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <form 
              id="contactForm" 
              onSubmit={handleSubmit}
              className="p-6 flex flex-col justify-center"
            >
              {/* Name Field */}
              <div className="flex flex-col">
                <label htmlFor="name" className="hidden">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  id="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name" 
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>

              {/* Phone Field */}
              <div className="flex flex-col mt-2">
                <label htmlFor="phone" className="hidden">Phone</label>
                <input 
                  type="tel" 
                  name="phone" 
                  id="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone" 
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="flex flex-col mt-2">
                <label htmlFor="email" className="hidden">Email</label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email" 
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="flex flex-col mt-2">
                <label htmlFor="message" className="hidden">Message</label>
                <textarea 
                  name="message" 
                  id="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  rows="5"
                  className="w-full mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white font-semibold focus:border-indigo-500 focus:outline-none resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="mt-6">
                <button 
                  type="submit"
                  className="w-full md:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  
    </>
  );
};

export default ContactPage;