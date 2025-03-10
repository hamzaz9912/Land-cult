'use client'
import React from "react";
import { useEffect, useState } from "react";
import BackgroundImage from "./assets/banner1.png";
import CardSection from "./components/CardSection";
import LandBanner from "./components/LandBanner";
import Wasteland from "./components/Wasteland";
import VirtualReality from "./components/VirtualReality";

export default function HomePage() {
  return (
    <>
      <div
        className="relative flex flex-col items-center justify-center min-h-screen w-full text-center px-4 bg-cover bg-center"
        style={{ backgroundImage: `url(${BackgroundImage.src})` }}
      >
        {/* Content div */}
        <div className="relative z-10 flex flex-col items-center">
          <h3 className="text-xl md:text-3xl font-bold font-serif text-white">𝔏𝔞𝔫𝔡 𝔬𝔣 ℭ𝔲𝔩𝔱</h3>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-300 drop-shadow-lg">
            NEW LANDS <br /> AVAILABLE
          </h2>
          <button className="mt-4 px-6 py-1 bg-white text-black rounded-[35px] hover:bg-gray-300 transition shadow-lg">
            BUY LAND
          </button>
        </div>
      </div>
      <LandBanner />
      <CardSection />
      <Wasteland />
      <VirtualReality/>
          </>
  );
}