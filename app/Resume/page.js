


import React from 'react';

import Resume from '@/components/Resume';

export const metadata = {
  title: 'Resume | Suman Ahammed - Full-Stack Developer',
  description: 'Download my resume and explore my professional experience, technical skills, education, and achievements as a full-stack developer specializing in Laravel, React.js, and Next.js.',
  
  keywords: [
    'developer resume',
    'full-stack developer CV',
    'Laravel developer resume',
    'React developer CV',
    'Next.js developer resume',
    'web developer portfolio',
    'professional experience',
    'technical skills',
    'software engineer resume',
    'PHP developer CV',
    'JavaScript developer resume',
    'UI/UX designer resume',
  ],
  
  authors: [{ 
    name: 'suman ahammed',
    url: 'https://sumanahammed.com'
  }],
  
  creator: 'suman ahammed',
  publisher: 'suman ahammed',
  
  openGraph: {
    title: 'Resume - Suman Ahammed | Full-Stack Developer',
    description: 'View my professional resume showcasing expertise in Laravel, React.js, Next.js, and UI/UX design. Download CV and explore my work experience, skills, and qualifications.',
    url: 'https://sumanahammed.com/Resume',
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: 'https://sumanahammed.com/profile.png',
        width: 1200,
        height: 630,
        alt: 'Suman Ahammed - Full Stack Developer Resume',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Resume | Suman Ahammed - Laravel & React Developer',
    description: 'Professional resume of full-stack developer with expertise in Laravel, React.js, Next.js and UI/UX design',
    creator: '@sumanahammed',
    images: ['https://sumanahammed.com/profile.png'],
  },
  
  alternates: {
    canonical: 'https://sumanahammed.com/Resume',
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

export default function ResumePage() {
  return (
    <>
   
    <Resume/>
    
    </>
  )
}
