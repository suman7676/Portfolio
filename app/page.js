"use client"
import Image from "next/image";
import { Menu, X, Phone, Mail, MapPin, Utensils, Bed, TreePine, Star, Clock, Users  } from "lucide-react";
import React, { useState } from 'react';

import Header from "@/components/Header&Footer/Header";
import Hero from "@/components/Hero";
import ServiceCards from "@/components/ServiceCards";
import RoomService from "@/components/RoomService";
import FoodService from "@/components/FoodService";
import PicnicService from "@/components/PicnicService";
import Footer from "@/components/Header&Footer/Footer";

export default function Home() {
  

 
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Header */}
      <div>
      <Header/>
       </div>
      {/* Hero Section */}
     <Hero/>

      {/* Services Overview */}
     

      {/* Rooms Section */}
     

      {/* Food Section */}
     

      {/* Picnic Section */}
   

      {/* Contact Section */}
    

      {/* Footer */}
      <Footer/>
    </div>
  );
}

