import Image from 'next/image';
import React from 'react';
import Header from '@/components/Header&Footer/Header';
import Footer from '@/components/Header&Footer/Footer';
import About from '@/components/About';
const AboutMe = () => {
  return (
    <>
    <Header/>
    <About/>
    <Footer/>
    </>
  );
};

export default AboutMe;