"use client"
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, Utensils, Bed, TreePine, Star, Clock, Users  } from "lucide-react";
import React, { useState } from 'react';


import Hero from "../components/Hero";
import Skills from '@/components/Skills';



export default function Home() {
  

 
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div>
   
       </div>
      {/* Hero Section */}
     <Hero/>

      {/* Skills Overview */}
       <Skills/>

      {/* Rooms Section */}
     

      {/* Food Section */}
     

      {/* Picnic Section */}
   

      {/* Contact Section */}
    

      {/* Footer */}
      
    </div>
  );
}

