// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function VirtualReality() {
  const [hoveredButton, setHoveredButton] = useState(null);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Head>
        <title>ARK OF CULT | Virtual Reality World</title>
        <meta name="description" content="Experience the ARK OF CULT virtual reality world" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Background with purple sky effect */}
      <div className="absolute inset-0">
        <Image 
          src="/cyberpunk-sky.jpg" 
          layout="fill" 
          objectFit="cover" 
          alt="Cyberpunk sky" 
          priority 
          className="opacity-80"
        />
      </div>

      {/* Main container */}
      <main className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4">
        {/* VR Building structure */}
        <div className="relative w-full max-w-4xl mx-auto mb-8">
          <Image 
            src="/images/vr-building.png" 
            width={1200} 
            height={675} 
            alt="Virtual Reality Building" 
            className="rounded-lg shadow-2xl"
            priority
          />
          
          {/* Title overlay */}
          <div className="absolute top-1/4 left-0 right-0 text-center">
            <div className="text-sm text-white tracking-widest">ARK OF CULT</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-300 drop-shadow-lg">VIRTUAL REALITY WORLD</h1>
          </div>

          {/* VR Interface overlay */}
          <div className=" left-0 right-0 flex justify-center">
            <div className="relative h-100 w-10/10">
              <Image 
                src="/vr-interface.png" 
                layout="fill" 
                objectFit="contain" 
                alt="VR Interface" 
              />
            </div>
          </div>


          {/* Wireframe hands */}
          <div className="absolute bottom-1/9 left-0 right-0 flex justify-center">
            <div className="relative h-62 w-full">
              <Image 
                src="/wireframe-hands.png" 
                layout="fill" 
                objectFit="contain" 
                alt="Wireframe Hands" 
              />
            </div>
          </div>

          {/* Small cryptic text */}
          <div className="relative bottom-80 left-8 text-xs text-gray-400 max-w-xs">
            <Image 
              src="/cryptic-text-1.png" 
              width={200} 
              height={80} 
              alt="System information" 
            />
          </div>
          <div className="absolute bottom-16 left-8 text-xs text-gray-400 max-w-xs">
            <Image 
              src="/cryptic-text-1.png" 
              width={200} 
              height={80} 
              alt="System information" 
            />
          </div>
          
          <div className="absolute bottom-8 sm:bottom-10 right-4 sm:right-8 w-1/4 max-w-xs">
            <div className="relative w-full" style={{ paddingBottom: '40%' }}>
              <Image 
                src="/cryptic-text-2.png" 
                layout="fill"
                objectFit="contain"
                alt="Interface information" 
              />
            </div>
            </div>
            </div>



        {/* VR Headset Image */}
        <div className="relative w-48 h-32 mb-8">
          <Image 
            src="/vr-headset.png" 
            layout="fill" 
            objectFit="contain" 
            alt="VR Headset" 
            
          />
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-2">
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              hoveredButton === 'explore' 
                ? 'bg-purple-600 text-white' 
                : 'bg-white text-black'
            }`}
            onMouseEnter={() => setHoveredButton('explore')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            EXPLORE WORLD
          </button>
          <button 
            className={`px-6 py-2 rounded-full transition-all duration-300 ${
              hoveredButton === 'connect' 
                ? 'bg-purple-600 text-white' 
                : 'bg-gray-800 text-white border border-gray-700'
            }`}
            onMouseEnter={() => setHoveredButton('connect')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            CONNECT DEVICE
          </button>
        </div>
      </main>
    </div>
  );
}