import { Clock, Users } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function PicnicService() {
  return (
    <section id="picnic" className="py-16 bg-gradient-to-b from-blue-50 to-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            পিকনিক প্যাকেজ
          </h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-xl border-2 border-green-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2" />
                  সুবিধাসমূহ
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>খোলা জায়গা (গাছের ছায়া)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>রান্নার সম্পূর্ণ ব্যবস্থা (চুলা, হাড়ি-পাতিল)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>বসার জায়গা (চেয়ার-টেবিল)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>টয়লেট সুবিধা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>পানির ব্যবস্থা</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                    <span>নিরাপত্তা ব্যবস্থা</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center">
                  <Clock className="w-6 h-6 mr-2" />
                  প্যাকেজ বিবরণ
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-green-800">ডে প্যাকেজ (১) </p>
                    <p className="text-gray-700">সকাল ৮টা - সন্ধ্যা ৬টা</p>
                    <p className="text-green-700 font-bold mt-2">৩০০০-৫০০০ টাকা</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-lg font-semibold text-blue-800">ডে প্যাকেজ (২)</p>
                    <p className="text-gray-700">৫ ঘণ্টা</p>
                    <p className="text-blue-700 font-bold mt-2">২০০০-৩০০০ টাকা</p>
                  </div>
                  
                  <p className="text-sm text-gray-600 italic mt-4">
                    * দামের তারতম্য জনসংখ্যার উপর নির্ভর করে
                  </p>
                </div>
              </div>
            </div>
            
            <button className="mt-8 w-full bg-green-700 text-white py-3 rounded-lg text-lg hover:bg-green-800 transition shadow-lg">
              <Link href="tel:+8801758097908" className="hover:text-green-200 transition">পিকনিক বুক করুন</Link> 
            </button>
          </div>
        </div>
      </section>
  )
}
