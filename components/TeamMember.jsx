import Image from 'next/image';
import React from 'react';

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
    
    <section id="our-team" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <Image
                src={member.image}
                alt={member.alt}
                width={160}
                height={160}
                className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl text-green-600 font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 text-sm md:text-base">
                Role: {member.role} <br />
                Contact: <span className="text-blue-600">{member.email}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  
    </>
  );
};

export default OurTeam;