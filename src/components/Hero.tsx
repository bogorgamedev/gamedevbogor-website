import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Import gambar-gambar Anda
import img1 from "../assets/example.jpeg";
import img2 from "../assets/example2.jpeg";
import img3 from "../assets/logo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
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
      icon:  <FaInstagram size={28} className="text-pink-500" />
    },
    {
      name: "Facebook",
      inviteLink: "https://www.facebook.com/groups/733382146808863",
      icon: <FaFacebook size={28} className="text-blue-500" />
    },
    {
      name: "Mail",
      inviteLink: "mailto:bogorgamedev@gmail.com",
      icon: <SiGmail size={28} className="text-red-500" />
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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <div className="bg-yellow-300 px-4 py-2 border-2 card">
                <p className="text-black font-bold text-sm">Welcome to</p>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight pixel-font">
  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-game-text">
    GAME DEVELOPER
  </span>
  <span className="block text-gray-800 mt-2 animate-pixel-glitch">BOGOR</span>
</h1>
            <div className="bg-green-300 p-6 border-4 card-bold">
              <p className="text-gray-800 text-lg leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aliquam reiciendis quisquam soluta similique odio, dolore consequuntur nostrum fuga distinctio ducimus debitis porro saepe possimus magnam recusandae? Officiis, doloremque. Culpa?
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a 
                href="https://chat.whatsapp.com/FjFH5H5qAwrKeQo9Zlixys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 border-2 btn font-bold text-center transition-all hover:scale-105"
              >
                JOIN OUR DISCORD
              </a>
              <a 
                href="https://chat.whatsapp.com/FjFH5H5qAwrKeQo9Zlixys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 border-2 btn font-bold text-center transition-all hover:scale-105"
              >
                WHATSAPP GRUB
              </a>
                <button 
                onClick={handleSosmedClick}
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 border-2 btn font-bold text-center transition-all hover:scale-105"
              >
                MORE
              </button>
            </div>
          </div>
          <div className="relative animate-float">
            <div className="bg-purple-400 p-6 border-4 card">
              <div className="bg-gray-800 border-2 border-black p-4 aspect-square flex items-center justify-center overflow-hidden relative">
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
            <div className="absolute -top-4 -right-4 bg-red-500 w-8 h-8 border-2 border-black animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 bg-yellow-400 w-6 h-6 border-2 border-black animate-bounce" style={{animationDelay: '0.2s'}}></div>
            <div className="absolute top-1/2 -right-6 bg-blue-400 w-4 h-4 border-2 border-black animate-ping"></div>
          </div>
        </div>
      </section>
      {isSosmedModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white border-4 border-black card-bold max-w-md w-full mx-auto">
            <div className="bg-blue-500 p-4 border-b-4 border-black">
              <div className="flex justify-between items-center">
                <h2 className="text-white font-bold text-xl pixel-font">
                   Explore Our Social Media
                </h2>
                <button 
                  onClick={() => setIsSosmedModalOpen(false)}
                  className="bg-red-500 hover:bg-red-600 text-white w-8 h-8 border-2 border-black flex items-center justify-center font-bold hover:scale-110 transition-transform"
                >
                  ✕
                </button>
              </div>
            </div>
            <div className="p-6 space-y-4">
              {sosmedItems.map((sosmed, index) => (
                <div 
                  key={index}
                  className="border-2 border-black p-4 bg-gray-100 hover:bg-yellow-100 transition-all cursor-pointer hover:translate-x-2"
                  onClick={() => handleOpenSosmed(sosmed.inviteLink)}
                >
                  <div className="flex items-start space-x-3">
                    <div className="">{sosmed.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800 text-lg">{sosmed.name}</h3>
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