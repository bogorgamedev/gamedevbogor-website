import { useState, useEffect } from "react";
import img1 from "../assets/example.jpeg";
import img2 from "../assets/example2.jpeg";
import img3 from "../assets/logo.png";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSosmedModalOpen, setIsSosmedModalOpen] = useState(false);

  const images = [
    { src: img1, alt: "Workshop" },
    { src: img2, alt: "Gathering" },
    { src: img3, alt: "Logo" },
  ];

  const sosmedItems = [
    {
      name: "Instagram",
      inviteLink: "https://www.instagram.com/gamedevbogor/",
      icon: <FaInstagram className="text-pink-500" />
    },
    {
      name: "Facebook",
      inviteLink: "https://www.facebook.com/groups/733382146808863",
      icon: <FaFacebook className="text-blue-500" />
    },
    {
      name: "Mail",
      inviteLink: "mailto:bogorgamedev@gmail.com",
      icon: <SiGmail className="text-red-500" />
    }
  ];
  
  // Img change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handleSosmedClick = () => {
    setIsSosmedModalOpen(true);
  };

  const handleOpenSosmed = (inviteLink: string) => {
    window.open(inviteLink, '_blank', 'noopener,noreferrer');
    setIsSosmedModalOpen(false);
  };

  return (
    <>
      <section className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          
          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 animate-fade-in order-2 lg:order-1">
            <div className="inline-block">
              <div className="bg-yellow-300 px-3 sm:px-4 py-1 sm:py-2 border-2 card">
                <p className="text-black font-bold text-xs sm:text-sm">Welcome to</p>
              </div>
            </div>
            
            {/* Title*/}
            <h1 className="font-bold tracking-tight pixel-font">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-game-text text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                GAME DEVELOPER
              </span>
              <span className="block text-gray-800 mt-1 sm:mt-2 animate-pixel-glitch text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                BOGOR
              </span>
            </h1>

            {/* Description */}
            <div className="bg-green-300 p-4 sm:p-6 border-4 card-bold">
              <p className="text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam reiciendis quisquam soluta similique odio, dolore consequuntur nostrum fuga distinctio ducimus debitis porro saepe possimus magnam recusandae? Officiis, doloremque. Culpa?
              </p>
            </div>

            {/* Buttons - Responsive Stack */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-3 sm:pt-4">
              <a 
                href="https://chat.whatsapp.com/FjFH5H5qAwrKeQo9Zlixys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 sm:px-6 py-3 sm:py-4 border-2 btn font-bold text-center transition-all hover:scale-105 text-sm sm:text-base"
              >
                JOIN OUR DISCORD
              </a>
              <a 
                href="https://chat.whatsapp.com/FjFH5H5qAwrKeQo9Zlixys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-4 sm:px-6 py-3 sm:py-4 border-2 btn font-bold text-center transition-all hover:scale-105 text-sm sm:text-base"
              >
                WHATSAPP GRUB
              </a>
              <button 
                onClick={handleSosmedClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-3 sm:py-4 border-2 btn font-bold text-center transition-all hover:scale-105 text-sm sm:text-base"
              >
                MORE
              </button>
            </div>
          </div>

          <div className="relative animate-float order-1 lg:order-2">
            <div className="bg-purple-400 p-4 sm:p-6 border-4 card">
              <div className="bg-gray-800 border-2 border-black p-3 sm:p-4 aspect-square flex items-center justify-center overflow-hidden relative">
                <div className="relative w-full h-full">
                  {images.map((image, index) => (
                    <img 
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      className={`absolute top-0 left-0 w-full h-full object-cover pixelated border-2 border-gray-600 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="hidden sm:block absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-red-500 w-6 h-6 sm:w-8 sm:h-8 border-2 border-black animate-bounce"></div>
            <div className="hidden sm:block absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-yellow-400 w-4 h-4 sm:w-6 sm:h-6 border-2 border-black animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="hidden sm:block absolute top-1/2 -right-4 sm:-right-6 bg-blue-400 w-3 h-3 sm:w-4 sm:h-4 border-2 border-black animate-ping"></div>
          </div>
        </div>
      </section>

      {/* Sosmed Modal */}
      {isSosmedModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-3 sm:p-4">
          <div className="bg-white border-4 border-black card-bold max-w-xs sm:max-w-sm md:max-w-md w-full mx-auto">
            <div className="bg-blue-500 p-3 sm:p-4 border-b-4 border-black">
              <div className="flex justify-between items-center">
                <h2 className="text-white font-bold text-lg sm:text-xl pixel-font text-center flex-1">
                  Explore Our Social Media
                </h2>
                <button 
                  onClick={() => setIsSosmedModalOpen(false)}
                  className="bg-red-500 hover:bg-red-600 text-white w-7 h-7 sm:w-8 sm:h-8 border-2 border-black flex items-center justify-center font-bold hover:scale-110 transition-transform text-sm sm:text-base ml-2"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
              {sosmedItems.map((sosmed, index) => (
                <div 
                  key={index}
                  className="border-2 border-black p-3 sm:p-4 bg-gray-100 hover:bg-yellow-100 transition-all cursor-pointer hover:translate-x-1 sm:hover:translate-x-2 active:scale-95"
                  onClick={() => handleOpenSosmed(sosmed.inviteLink)}
                >
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <div className="text-2xl sm:text-3xl">
                      {sosmed.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-base sm:text-lg">
                        {sosmed.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}