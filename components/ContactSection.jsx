import { Mail, MapPin, MessageCircle, Phone, WheatIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function ContactSection() {
  return (
     <section id="contact" className="py-4 bg-green-800 text-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            যোগাযোগ করুন
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center">
              <Phone className="w-12 h-12 mb-4" />
              <Link href="tel:+8801758097908" className="hover:text-green-200 transition">
              <h3 className="text-xl font-bold mb-2">ফোন</h3>
              +৮৮ ০১৭৫৮০৯৭৯০৮</Link>
              
            </div>
            <div className="flex flex-col items-center text-center">
              <MessageCircle className="w-12 h-12 mb-4" />
              <Link
                 href="https://wa.me/8801758097908?text=Hello%20ami%20apnar%20website%20theke%20message%20korchi"
                    target="_blank"
                     class="whatsapp-btn"
                    >
              <h3 className="text-xl font-bold mb-2">হোয়াটসঅ্যাপ</h3>
              
                   💬 WhatsApp Chat
                  </Link>
              
            </div>
            
            <div className="flex flex-col items-center text-center">
              <Mail className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">ইমেইল</h3>
              <p>masudrana@gmail.com</p>
              
            </div>
            
            <div className="flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">ঠিকানা</h3>
              <p>পাহাড়পুর, বদলগাছী</p>
              <p>নওগাঁ, বাংলাদেশ</p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg mb-4">আগাম বুকিংয়ের জন্য আমাদের সাথে যোগাযোগ করুন</p>
            <button className="bg-white text-green-800 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg">
             <Link href="tel:+8801758097908" className="hover:text-green-200 transition">এখনই কল করুন</Link> 
            </button>
          </div>
        </div>

        

      </section>
  )
}
