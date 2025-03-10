import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Wasteland() {
  const [glowIntensity, setGlowIntensity] = useState(1);

  // Animation for the glowing token
  useEffect(() => {
    const glowAnimation = setInterval(() => {
      setGlowIntensity((prev) => {
        // Oscillate between 0.8 and 1.2 for subtle pulsing effect
        if (prev >= 1.2) return 1.19;
        if (prev <= 0.8) return 0.81;
        return prev > 1 ? prev - 0.01 : prev + 0.01;
      });
    }, 50);

    return () => clearInterval(glowAnimation);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Head>
        <title>Wasteland Token</title>
        <meta
          name="description"
          content="Wasteland Token - Post-apocalyptic digital collectible"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative min-h-screen flex flex-col items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/wasteland-bg.png"
            alt="Wasteland background"
            layout="fill"
            objectFit="cover"
            priority
            className="brightness-75"
          />
          <div className="absolute inset-0 bg-amber-900/10 mix-blend-overlay"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center">
          {/* Main Title */}
          <div className="text-center mb-4 sm:mb-6 mt-8 sm:mt-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wider text-white drop-shadow-lg">
              WASTELAND TOKEN
            </h1>
            <p className="mt-3 sm:mt-4 max-w-xs sm:max-w-sm md:max-w-lg mx-auto text-gray-300 text-xs sm:text-sm leading-relaxed opacity-80 px-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span className="hidden sm:inline">
                <br />
              </span>
              Morbi eu felis eget nisi ultrices aliquam.
              <span className="hidden sm:inline">
                <br />
              </span>
              Ut sodales massa vitae libero varius,
              <span className="hidden sm:inline">
                <br />
              </span>
              in maximus nibh ultrices.
            </p>
          </div>

          {/* Token Display */}
          <div className="mt-4 sm:mt-8 mb-8 sm:mb-16 relative">
            <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 relative">
              <Image
                src="/wasteland-token.png"
                alt="Wasteland Token"
                layout="fill"
                objectFit="contain"
                className="relative z-20"
              />
            </div>

            {/* Glow effect overlay */}
            <div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500"
              style={{
                width: "40%",
                height: "40%",
                filter: "blur(20px)",
                opacity: 0.3 * glowIntensity,
                zIndex: 10,
              }}
            ></div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mt-2 mb-8 sm:mb-0 w-full sm:w-auto">
            <button className="px-4 sm:px-6 py-2 bg-white border border-gray-600 rounded-full text-black hover:bg-gray-200 transition-colors duration-300 text-xs sm:text-sm mx-8 sm:mx-0">
              GET LOC TOKENS
            </button>
            <button className="px-4 sm:px-6 py-2 bg-transparent border border-white rounded-full text-white hover:bg-black hover:bg-opacity-30 transition-colors duration-300 text-xs sm:text-sm mx-8 sm:mx-0">
              GET LOC TOKENS
            </button>
          </div>
        </div>

        {/* Subtle overlay for more post-apocalyptic feeling */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-30 pointer-events-none"></div>

        {/* Dust particles effect */}
        <div className="dust-particles"></div>
      </main>
    </div>
  );
}
