import { Foods } from '@/data/Foods'
import Image from 'next/image'
import React from 'react'

export default function FoodService() {
  return (
    <> 
   <section id="food" className="py-16 bg-white px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-12">
            খাবারের মেনু
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Foods.map((food, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition"
            >
              <Image
                src={food.image}
                alt={food.name}
                width={400}
                height={250}
                className="w-full h-48 object-cover"
              />
              <div className=" grid  bg-gradient-to-br from-amber-50 to-white p-6 rounded-xl shadow-md hover:shadow-lg transition border border-amber-200">
                 <div className=" grid grid-cols-2">
                <h3 className="text-xl font-bold text-amber-800 mb-2">{food.name}</h3>
               
                  <p className="text-green-700 font-bold">{food.price}</p>
                  </div>
                <p className="text-gray-600 mb-3">{food.desc}</p>
                
                
                
              </div>
            </div>
          ))}
          </div>
        </div>
      </section>


  </>)
}
