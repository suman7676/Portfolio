
import React from 'react';

import Showcase from "@/components/Showcase";

export const metadata = {
  title: 'My Work Showcase | Laravel, React & Next.js Projects',
  description: 'Explore my portfolio of web development projects built with Laravel, React.js, and Next.js. See real-world applications showcasing my full-stack development and UI/UX design skills.',
  
  keywords: [
    'portfolio projects',
    'Laravel projects',
    'React.js projects',
    'Next.js applications',
    'web development showcase',
    'full-stack projects',
    'UI/UX portfolio',
    'JavaScript projects',
    'PHP Laravel applications',
    'modern web apps',
    'responsive web projects',
    'frontend projects',
    'backend projects',
  ],
  
  authors: [{ 
    name: 'suman ahammed',
    url: 'https://sumanahammed.com'
  }],
  
  creator: 'suman ahammed',
  publisher: 'suman ahammed',
  
  openGraph: {
    title: 'Project Showcase - Full-Stack Developer | Laravel, React & Next.js',
    description: 'Browse through my collection of web development projects. From Laravel backends to React frontends, see how I bring ideas to life with clean code and beautiful design.',
    url: 'https://sumanahammed.com/Showcase',
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sumanahammed.com/profile.png',
        width: 1200,
        height: 630,
        alt: 'Web Development Portfolio - Laravel, React.js, Next.js Projects',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Project Showcase | Laravel & React Developer',
    description: 'Explore my portfolio of Laravel, React.js, and Next.js projects showcasing full-stack development expertise',
    creator: '@@sumanahammed',
    images: ['https://sumanahammed.com/profile.png'],
  },
  
  alternates: {
    canonical: 'https://sumanahammed.com/Showcase',
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

export default function ShowcasePage() {
  return (
    <>
    
    <Showcase/>
   
    </>
  )
}

