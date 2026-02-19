import Image from 'next/image';
import React from 'react';

import About from '@/components/About';


export const metadata = {
  title: 'About Me | Full-Stack Developer specializing in Laravel & React',
  description: 'Passionate full-stack developer with expertise in Laravel Framework, React.js, Next.js, and modern JavaScript. Combining technical skills with UI/UX design to create exceptional web experiences.',
  
  keywords: [
    'Laravel developer',
    'React developer',
    'Next.js expert',
    'full-stack web developer',
    'UI/UX designer',
    'JavaScript developer',
    'PHP Laravel',
    'React.js specialist',
    'modern web development',
    'responsive web design',
    'frontend backend developer',
  ],
  
  authors: [{ 
    name: 'suman ahammed',
    url: 'https://sumanahammed.com'
  }],
  
  creator: 'suman ahammed',
  publisher: 'suman ahammed',
  
  openGraph: {
    title: 'About Me - Full-Stack Developer | Laravel, React & Next.js Expert',
    description: 'Full-stack developer passionate about creating beautiful, functional web applications. Specializing in Laravel Framework, React.js, Next.js with a love for UI/UX design.',
    url: 'https://sumanahammed.com/about',
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://sumanahammed.com/profile.png',
        width: 1200,
        height: 630,
        alt: 'Full Stack Developer - Laravel, React.js, Next.js, UI/UX Design',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Developer | Laravel & React Expert',
    description: 'Passionate developer specializing in Laravel, React.js, Next.js with UI/UX design expertise',
    creator: '@sumanahammed',
    images: ['https://sumanahammed.com/profile.png'],
  },
  
  alternates: {
    canonical: 'https://sumanahammed.com/about',
  },
  
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <>
      <About />
    </>
  )
}
