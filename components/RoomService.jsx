import { Star } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function RoomService() {
  return (
    <section id="rooms" className="py-16 bg-gradient-to-b from-green-50 to-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            রুম সুবিধা
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-green-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-green-800">এসি রুম</h3>
                <Star className="w-8 h-8 text-yellow-500 fill-yellow-500" />
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  এয়ার কন্ডিশন
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  টিভি সুবিধা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  এটাচড বাথরুম
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  ২৪ ঘণ্টা বিদ্যুৎ
                </li>
              </ul>
              <button className="mt-6 w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition">
               <Link href="tel:+8801758097908" className="hover:text-green-200 transition">বুকিং করুন</Link> 
              </button>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg border-2 border-blue-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-800">নন-এসি রুম</h3>
                <Star className="w-8 h-8 text-gray-400 fill-gray-400" />
              </div>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  ফ্যান সুবিধা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  টিভি সুবিধা
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  এটাচড বাথরুম
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  পরিচ্ছন্ন পরিবেশ
                </li>
              </ul>
              <button className="mt-6 w-full bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition">
                <Link href="tel:+8801758097908" className="hover:text-green-200 transition">বুকিং করুন</Link> 
              </button>
            </div>
          </div>
        </div>
      </section>
  )
}
