import Image from 'next/image';
import React from 'react';
import Header from '@/components/Header&Footer/Header';
import Footer from '@/components/Header&Footer/Footer';
import TeamMember from '@/components/TeamMember';
const OurTeam = () => {
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
    <Header/>
    <TeamMember/>
  <Footer/>
    </>
  );
};

export default OurTeam;