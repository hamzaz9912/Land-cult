import Head from "next/head";
import Image from "next/image";
import twitter_icon from "../assets/icon/twitter.png";
import telegram_icon from "../assets/icon/telegram.png";
import twitter2_icom from "../assets/icon/twiter2.png";

export default function LandBanner() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Land of Cult</title>
      </Head>

      {/* Social Links Section - Responsive layout */}
      <div className="flex flex-col items-center text-white px-4 py-6">
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 mb-4 sm:mb-6 md:mb-10 mt-4 sm:mt-6 md:mt-10 items-center justify-center w-full">
          <p className="flex items-center text-sm sm:text-base mb-4 sm:mb-0">
            Have your Say. Join the Discussion.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#"
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-white rounded-[35px] hover:bg-white hover:text-black transition text-xs sm:text-sm"
            >
              <img
                src={twitter_icon.src}
                className="w-4 h-4 sm:w-5 sm:h-5"
                alt="Twitter"
              />{" "}
              TWITTER
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-white rounded-[35px] hover:bg-white hover:text-black transition text-xs sm:text-sm"
            >
              <img
                src={twitter2_icom.src}
                className="w-4 h-4 sm:w-5 sm:h-5"
                alt="Twitter 2"
              />{" "}
              TWITTER
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 border border-white rounded-[35px] hover:bg-white hover:text-black transition text-xs sm:text-sm"
            >
              <img
                src={telegram_icon.src}
                className="w-4 h-4 sm:w-5 sm:h-5"
                alt="Telegram"
              />{" "}
              TELEGRAM
            </a>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-4 sm:py-6 md:py-8">
        {/* Gloomhaven Section */}
        <section className="relative w-full h-64 sm:h-80 md:h-96 mb-4 sm:mb-6 md:mb-8 overflow-hidden rounded-lg sm:rounded-2xl md:rounded-[35px]">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
          <div className="relative h-full w-full">
            <Image
              src="/banner2.jpg"
              alt="Gloomhaven landscape"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="absolute top-1/4 left-4 sm:left-10 md:left-20 z-20 max-w-[80%] sm:max-w-[60%]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 tracking-wide">
              <span className="block text-gray-300 drop-shadow-lg">
                BUY LAND
              </span>
              <span className="block text-gray-300 drop-shadow-lg">
                IN GLOOMHAVEN
              </span>
            </h2>
            <p className="max-w-md text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6 text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-white hover:bg-gray-200 text-black font-medium text-xs sm:text-sm py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition duration-300">
              BUY LAND
            </button>
          </div>
        </section>

        {/* Wastelands Section */}
        <section className="relative w-full h-64 sm:h-80 md:h-96 mb-4 sm:mb-6 md:mb-8 overflow-hidden rounded-lg sm:rounded-2xl md:rounded-[35px]">
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 to-transparent z-10"></div>
          <div className="relative h-full w-full">
            <Image
              src="/banner 4.jpg"
              alt="Wastelands landscape"
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
              style={{ objectFit: "cover" }}
              priority
            />
          </div>
          <div className="absolute top-1/4 right-4 sm:right-10 md:right-20 z-20 text-left max-w-[80%] sm:max-w-[60%]">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 tracking-wide text-right">
              <span className="block text-gray-300 drop-shadow-lg">
                BUY LAND
              </span>
              <span className="block text-gray-300 drop-shadow-lg">
                IN WASTELANDS
              </span>
            </h2>
            <p className="max-w-md ml-auto text-xs sm:text-sm mb-3 sm:mb-4 md:mb-6 text-gray-300 text-right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="text-right">
              <button className="bg-white hover:bg-gray-200 text-black font-medium text-xs sm:text-sm py-1.5 sm:py-2 px-4 sm:px-6 rounded-full transition duration-300">
                BUY LAND
              </button>
            </div>
          </div>
          <div className="absolute bottom-2 sm:bottom-4 right-3 sm:right-6 z-20 font-serif text-sm sm:text-xl text-amber-200">
            More Lands added
          </div>
        </section>

        {/* Cult Section */}
        <section className="relative w-full mb-4 sm:mb-6 md:mb-8">
          {/* Cult Background with Gas Mask Character */}
          <div className="relative w-full min-h-[80vh] sm:min-h-screen overflow-hidden">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 z-10"></div>

            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src="/bgbanner.jpg"
                alt="Cult wasteland with character"
                fill
                sizes="100vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            {/* Content container with padding that adjusts for different screen sizes */}
            <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col min-h-[80vh] sm:min-h-screen">
              {/* LoC Title - responsive font size */}
              <div className="mt-6 sm:mt-10 md:mt-16 text-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif tracking-widest">
                  LoC
                </h2>
              </div>

              {/* Feature Cards - stack on mobile, side by side on larger screens */}
              <div className="mt-6 sm:mt-8 md:mt-12 lg:mt-16 flex-grow flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 md:gap-4 lg:gap-6 w-full">
                  {/* Feature Card 1 */}
                  <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-white/80 bg-black/50 shadow-lg shadow-black/70">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl">⚙️</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2 md:mb-3 tracking-wider">
                      LOREM
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 text-center font-mono leading-relaxed">
                      Lorem ipsum dolor sit amet, adipiscing elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex justify-center mt-3 sm:mt-4 md:mt-6">
                      <button className="border border-white hover:bg-white/20 text-white text-xs sm:text-sm font-medium py-1 sm:py-1.5 md:py-2 px-4 sm:px-6 md:px-8 rounded-full transition duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>

                  {/* Feature Card 2 */}
                  <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-white/80 bg-black/50 shadow-lg shadow-black/70">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl">⚔️</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2 md:mb-3 tracking-wider">
                      LOREM
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 text-center font-mono leading-relaxed">
                      Lorem ipsum dolor sit amet, adipiscing elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex justify-center mt-3 sm:mt-4 md:mt-6">
                      <button className="border border-white hover:bg-white/20 text-white text-xs sm:text-sm font-medium py-1 sm:py-1.5 md:py-2 px-4 sm:px-6 md:px-8 rounded-full transition duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>

                  {/* Feature Card 3 */}
                  <div className="p-4 sm:p-5 md:p-6 rounded-2xl sm:rounded-3xl border border-white/80 bg-black/50 shadow-lg shadow-black/70">
                    <div className="flex justify-center mb-3 sm:mb-4">
                      <span className="text-2xl sm:text-3xl text-white">✪</span>
                    </div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-1 sm:mb-2 md:mb-3 tracking-wider">
                      LOREM
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 text-center font-mono leading-relaxed">
                      Lorem ipsum dolor sit amet, adipiscing elit, sed do
                      eiusmod tempor ut labore et dolore magna aliqua.
                    </p>
                    <div className="flex justify-center mt-3 sm:mt-4 md:mt-6">
                      <button className="border border-white hover:bg-white/20 text-white text-xs sm:text-sm font-medium py-1 sm:py-1.5 md:py-2 px-4 sm:px-6 md:px-8 rounded-full transition duration-300">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* NFT LAND OF CULT Title - responsive text size */}
              <div className="mt-8 sm:mt-12 md:mt-16 lg:mt-24 mb-2 sm:mb-4 md:mb-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-300 drop-shadow-lg">
                  NFT LAND OF CULT
                </h2>
                <p className="mt-2 sm:mt-4 md:mt-6 max-w-4xl mx-auto text-center text-gray-300 text-xs sm:text-sm md:text-base px-4">
                  Lorem ipsum dolor sit amet, adipiscing elit,
                  <br className="hidden sm:block" />
                  sed do eiusmod tempor ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis.
                  <br className="hidden sm:block" />
                  Lorem ipsum dolor sit amet, adipiscing elit, sed do eiusmod
                  tempor ut labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
