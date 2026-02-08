import { Bed, TreePine, Utensils } from 'lucide-react'
import React from 'react'

export default function ServiceCard() {
  return (
    <section id="services" className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            আমাদের সেবাসমূহ
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <Bed className="w-12 h-12 text-green-700 mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-3">রুম ভাড়া</h3>
              <p className="text-gray-700">আরামদায়ক ও পরিচ্ছন্ন রুম সুবিধা। এসি ও নন-এসি উভয় ধরনের রুম উপলব্ধ।</p>
            </div>
            
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <Utensils className="w-12 h-12 text-amber-700 mb-4" />
              <h3 className="text-2xl font-bold text-amber-800 mb-3">খাবার সেবা</h3>
              <p className="text-gray-700">দেশীয় ও চাইনিজ খাবারের বিশাল সংগ্রহ। তাজা ও স্বাস্থ্যকর খাবার।</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-lg hover:shadow-xl transition">
              <TreePine className="w-12 h-12 text-blue-700 mb-4" />
              <h3 className="text-2xl font-bold text-blue-800 mb-3">পিকনিক স্পট</h3>
              <p className="text-gray-700">পরিবার ও বন্ধুদের সাথে পিকনিকের জন্য আদর্শ জায়গা। নিজে রান্না করার সুবিধা।</p>
            </div>
          </div>
        </div>
      </section>
  )
}
