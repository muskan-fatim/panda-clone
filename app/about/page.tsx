'use client';
import Image from "next/image";
import Navbar from "../components/othernav";

export default function About() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8 mt-10">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">
          <h1 className="text-3xl font-bold text-pink-500 text-center"> About Foodpanda </h1>

          {/* Image */}
          <div className="w-full flex justify-center">
            <Image 
              src="/team.jpg" 
              alt="Foodpanda Team" 
              width={300} 
              height={300} 
              className="rounded-xl shadow-md"
            />
          </div>

          {/* Sections */}
          <div className="text-gray-700 space-y-4 text-justify text-[15px] leading-relaxed">
            <p>
              At <span className="font-semibold text-pink-500">foodpanda</span>, we're more than just delivery. We’re about bringing the joy of food right to your door — fast, fresh, and with a smile.
            </p>

            <p>
              Since 2012, we’ve partnered with top restaurants to serve millions of happy customers across the globe. From local eats to global favorites, we’re here for every craving.
            </p>

            <p>
              Our team is passionate, tech-savvy, and dedicated to making your experience smooth and satisfying — whether you're ordering lunch or midnight snacks.
            </p>

            <p className="text-center text-sm text-gray-500">
              🚀 Fast delivery • 💕 Loved by millions • 📍 Available in 10+ countries
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
