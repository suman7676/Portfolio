


import Link from 'next/link';

import Contact from '@/components/Contact';
export const metadata = {
  title: 'Contact Me | Suman Ahammed - Full-Stack Developer',
  description: 'Get in touch for web development projects, collaborations, or freelance opportunities. I specialize in Laravel, React.js, and Next.js development with UI/UX design expertise.',
  
  keywords: [
    'contact web developer',
    'hire Laravel developer',
    'hire React developer',
    'freelance web developer',
    'full-stack developer contact',
    'web development inquiry',
    'project collaboration',
    'Laravel development services',
    'React development hire',
    'Next.js developer for hire',
    'freelance opportunities',
    'web development consultation',
  ],
  
  authors: [{ 
    name: 'suman ahammed',
    url: 'https://sumanahammed.com'
  }],
  
  creator: 'suman ahammed',
  publisher: 'suman ahammed',
  
  openGraph: {
    title: 'Contact - Suman Ahammed | Full-Stack Developer',
    description: 'Let\'s work together! Contact me for Laravel, React.js, Next.js development projects. Available for freelance work, collaborations, and full-time opportunities.',
    url: 'https://sumanahammed.com/contact',
    siteName: 'My Portfolio',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://sumanahammed.com/profile.png',
        width: 1200,
        height: 630,
        alt: 'Contact Suman Ahammed - Full Stack Developer',
      },
    ],
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Me | Laravel & React Developer Available for Hire',
    description: 'Reach out for web development projects, collaborations, or freelance opportunities',
    creator: '@sumanahammed',
    images: ['https://sumanahammed.com/profile.png'],
  },
  
  alternates: {
    canonical: 'https://sumanahammed.com/contact',
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
const ContactPage = () => {
 

  return (
    <>
   
    <Contact/>
  
    </>
  );
};

export default ContactPage;