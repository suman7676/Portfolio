import Image from 'next/image';
import React from 'react';

import TeamMember from '@/components/TeamMember';

export const metadata = {
  title: 'Company & Clients | Suman Ahammed - Full-Stack Developer',
  description: 'Trusted by leading companies and clients for Laravel, React.js, and Next.js development. View the organizations I have worked with and delivered successful web solutions.',
  
  keywords: [
    'web development clients',
    'Laravel development services',
    'React development company',
    'Next.js development clients',
    'full-stack development partners',
    'web development portfolio',
    'client testimonials',
    'business web solutions',
    'enterprise web development',
    'professional web services',
    'trusted web developer',
  ],
  
  authors: [{ 
    name: 'suman ahammed',
    url: 'https://sumanahammed.com'
  }],
  
  creator: 'suman ahammed',
  publisher: 'suman ahammed',
  
  openGraph: {
    title: 'Company & Clients - Suman Ahammed | Laravel & React Developer',
    description: 'Discover the companies and clients who trust me for their web development needs. Delivering quality Laravel, React.js, and Next.js solutions for businesses worldwide.',
    url: 'https://sumanahammed.com/Company',
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sumanahammed.com/profile.png',
        width: 1200,
        height: 630,
        alt: 'Companies & Clients - Full Stack Web Development Services',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Company & Clients | Professional Web Development Services',
    description: 'Trusted Laravel, React.js, and Next.js developer working with leading companies and clients',
    creator: '@@sumanahammed',
    images: ['https://sumanahammed.com/profile.png'],
  },
  
  alternates: {
    canonical: 'https://sumanahammed.com/Company',
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

export default function CompanyPage() {
  const teamMembers = [
    {
      id: 1,
      name: "Hasan Ali",
      role: "Graphic Designer",
      email: "Hasanupjob@gmail.com",
      image: "/Team/hasan.jpg",
      alt: "Hasan Ali"
    },
    {
      id: 2,
      name: "Jahid Hasan Shawon",
      role: "2D, 3D Autocad Designer",
      email: "shaown65@gmail.com",
      image: "/Team/jahid.jpg",
      alt: "Jahid Hasan Shawon"
    },
    {
      id: 3,
      name: "MN Nasir Uddin",
      role: "Laravel Developer",
      email: "nasir23@gmail.com",
      image: "/Team/nasir.jpg",
      alt: "MN Nasir Uddin"
    },
    {
      id: 4,
      name: "Suman Ahammed",
      role: "Full Stack Developer",
      email: "suman767651@gmail.com",
      image: "/Team/sumon-100.jpg",
      alt: "Suman Ahammed"
    }
  ];
  return (
   <>
    
    <TeamMember/>
  
    </>
  )
}

