import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative h-[315px] overflow-hidden rounded-lg shadow">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="Description of image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 bg-black opacity-50 z-10" />
      </div>

      {/* Text Overlay */}
      <div className="relative z-20 flex flex-col justify-center items-center text-center text-white h-full max-w-6xl mx-auto p-6">
        <h2 className="sm:text-4xl text-2xl font-bold mb-6">
          Explore the World
        </h2>
        <p className="sm:text-lg text-base text-center text-gray-200">
          Embark on unforgettable journeys. Book your dream vacation today!
        </p>
      </div>
    </div>
  );
}
