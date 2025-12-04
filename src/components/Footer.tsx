import React from "react";
import { FaDiscord, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 px-5 py-8 bg-blue-500 text-white border-t-4 border-black relative overflow-hidden">
      {/* Animated Pixel Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 border border-black"
            style={{
              backgroundColor: ['#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#3B82F6', '#EC4899'][i % 6],
              left: `${10 + (i * 7)}%`,
              bottom: '-10px',
              animation: `pixelPopUp 1s ease-out ${i * 0.1}s infinite alternate`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
          <div className="text-center md:text-left">
            <div 
              className="inline-block bg-white px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] mb-4 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer"
              
            >
              <h3 className="text-black font-bold text-xl pixel-font tracking-wide">GAMEDEV BOGOR</h3>
            </div>
            <p className="text-lg text-white/90 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>

          <div className="text-center md:text-right">
            <div 
              className="inline-block bg-green-500 px-4 py-2 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] mb-4 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 cursor-pointer"
              
            >
              <h4 className="font-bold text-sm uppercase tracking-wide">Join Our Community</h4>
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              {[
                { 
                  icon: FaDiscord, 
                  href: "https://chat.whatsapp.com/FjFH5H5qAwrKeQo9Zlixys", 
                  bg: "bg-[#5865F2]",
                  animationDelay: '0s'
                },
                { 
                  icon: FaWhatsapp, 
                  href: "https://chat.whatsapp.com/FjFH5H5qAwrKeQo9Zlixys", 
                  bg: "bg-[#25D366]",
                  animationDelay: '0.3s'
                },
                { 
                  icon: FaInstagram, 
                  href: "https://www.instagram.com/gamedevbogor/", 
                  bg: "bg-[#E4405F]",
                  animationDelay: '0.6s'
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${social.bg} w-12 h-12 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group`}
                  style={{ animation: `pixelFloat 3s ease-in-out ${social.animationDelay} infinite alternate` }}
                >
                  <social.icon className="text-white text-xl group-hover:scale-125 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p 
            className="text-gray-900 text-sm font-bold flex items-center justify-center space-x-2"
           
          >
            <span>© 2024 GAMEDEV BOGOR</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;