"use client";
import { FacebookIcon, Github, Instagram, Linkedin, MailIcon, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
  const year= new Date().getFullYear();

  return (
    <section>
      <div className="py-20  radius-for-skewed">
        <div className="max-w-md mx-auto text-center">
          

          <p className="mb-6 text-sm font-semibold text-gray-400">
            © 2024 - {year}. All rights reserved.
          </p>

          <div className="flex space-x-2 lg:space-x-4 justify-center">
            <Link href="https://www.facebook.com/profile.php?id=100048076428721&mibextid=ZbWKwL">
              
              <FacebookIcon className="w-10 h-10 mr-2 text-green-700" />
            </Link>

            <Link href="https://x.com/suman767651?t=6pAM5l8b0frcrStgEQO39g&s=09">
             
               <Twitter className="w-10 h-10 mr-2 text-green-700" />
            </Link>

            <Link href="https://www.instagram.com/sumanahammed8?igsh=MXdkMzE1OTZycW15Zw==">
             
               <Instagram className="w-10 h-10 mr-2 text-green-700" />
            </Link>
            <Link href="https://github.com/suman7676/suman7676">
             
               <Github className="w-10 h-10 mr-2 text-green-700" />
            </Link>
            <Link href="www.linkedin.com/in/full-stack-developer-suman">
             
               <Linkedin className="w-10 h-10 mr-2 text-green-700" />
            </Link>
            <Link href="mailto:suman767651@gmail.com">
             
               <MailIcon className="w-10 h-10 mr-2 text-green-700" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
