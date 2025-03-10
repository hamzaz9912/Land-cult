"use client";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function CardSection() {
  const [selectedCard, setSelectedCard] = useState(null);
  const carouselRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const cards = [
    { id: 1, image: "/card1.png" },
    { id: 2, image: "/card2.png" },
    { id: 3, image: "/card3.png" },
    { id: 4, image: "/card4.png" },
    { id: 5, image: "/card5.png" },
    { id: 6, image: "/card1.png" },
  ];

  // Mouse and touch event handlers for carousel
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Scroll speed multiplier
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scrollToCard = (direction) => {
    const containerWidth = carouselRef.current.clientWidth;
    const scrollAmount =
      direction === "left" ? -containerWidth / 2 : containerWidth / 2;
    carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  // Clean up event listeners
  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener("mouseleave", handleMouseUp);
      return () => {
        carousel.removeEventListener("mouseleave", handleMouseUp);
      };
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Gloomhaven Token</title>
      </Head>

      <main className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/background.png"
            alt="Dark fantasy city background"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            quality={100}
            priority
          />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Character Cards Carousel Section */}
          <div className="pt-4 sm:pt-6 md:pt-8 pb-6 sm:pb-8 md:pb-12 px-2 sm:px-4 relative">
            <div
              ref={carouselRef}
              className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory gap-2 sm:gap-4 px-2 sm:px-4 py-2 max-w-6xl mx-auto"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleMouseUp}
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="relative flex-shrink-0 snap-center cursor-pointer transform hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedCard(card.id)}
                >
                  <div className="w-32 h-52 sm:w-40 sm:h-64 md:w-48 md:h-72 lg:w-56 lg:h-80 overflow-hidden rounded-md border-2 border-gray-700">
                    <Image
                      src={card.image}
                      alt={`Character card ${card.id}`}
                      width={300}
                      height={450}
                      sizes="(max-width: 640px) 8rem, (max-width: 768px) 10rem, (max-width: 1024px) 12rem, 14rem"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Navigation Arrows - Now visible for all screen sizes */}
            {/* <button 
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full hover:bg-opacity-70 transition-all z-20"
              onClick={() => scrollToCard('left')}
              aria-label="Scroll left"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-1 sm:p-2 rounded-full hover:bg-opacity-70 transition-all z-20"
              onClick={() => scrollToCard('right')}
              aria-label="Scroll right"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button> */}

            {/* Buy More Tokens Button */}
            <div className="text-center mt-4 sm:mt-6 md:mt-8">
              <button className="px-4 sm:px-6 py-2 bg-transparent border font-Unbounded Medium border-white rounded-full text-white hover:bg-gray-800 transition-colors duration-300 text-xs sm:text-sm">
                GET LOC TOKENS
              </button>
            </div>
          </div>

          {/* Main Title Section */}
          <div className="text-center py-6 sm:py-8 md:py-12 px-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              GLOOMHAVEN TOKEN
            </h1>
            <p className="mt-2 sm:mt-4 max-w-2xl mx-auto font-gridlar text-gray-300 text-xs md:text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing span{" "}
              <br className="hidden sm:block" />
              Morbi eu felis eget nisi ultrices aliquam.{" "}
              <br className="hidden sm:block" />
              Ut sodales massa vitae libero varius,{" "}
              <br className="hidden sm:block" /> in maximus nibh ultrices.
            </p>
          </div>

          {/* Token Display Section */}
          <div className="text-center py-6 sm:py-8 md:py-12">
            <div className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-64 md:h-64 mx-auto">
              <Image
                src="/token.png"
                alt="Gloomhaven Token"
                width={256}
                height={256}
                sizes="(max-width: 640px) 9rem, (max-width: 768px) 12rem, 16rem"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 py-6 sm:py-8 md:py-12 px-4">
            <button className="w-full sm:w-auto px-6 py-2 bg-white border border-gray-600 rounded-full text-black hover:bg-gray-200 transition-colors duration-300 text-xs sm:text-sm">
              GET LOC TOKENS
            </button>
            <button className="w-full sm:w-auto px-6 py-2 bg-transparent border border-white rounded-full text-white hover:bg-gray-800 transition-colors duration-300 text-xs sm:text-sm">
              GET LOC TOKENS
            </button>
          </div>
        </div>
      </main>

      {/* Custom CSS for hiding scrollbars */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
