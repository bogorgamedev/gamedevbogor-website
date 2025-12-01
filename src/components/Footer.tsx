import React from "react";
import { FaDiscord, FaWhatsapp, FaInstagram} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 px-5 py-8 bg-blue-500 text-white border-t-4 border-black relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 border border-black animate-pixel-pop"
            style={{
              backgroundColor: ['#EF4444', '#10B981', '#F59E0B', '#8B5CF6', '#3B82F6', '#EC4899'][i % 6],
              left: `${10 + (i * 7)}%`,
              bottom: '-10px',
              animationDelay: `${i * 0.3}s`,
              animationDuration: '2s'
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-white px-6 py-3 border-2 btn mb-4 hover:animate-pixel-bounce transition-all duration-300">
              <h3 className="text-black font-bold text-xl pixel-font tracking-wide">GAMEDEV BOGOR</h3>
            </div>
            <p className="text-lg text-white/90 max-w-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="inline-block bg-green-500 px-4 py-2 border-2 btn mb-4 hover:animate-pixel-shake transition-all duration-300">
              <h4 className="font-bold text-sm uppercase tracking-wide">Join Our Community</h4>
            </div>
            <div className="flex justify-center md:justify-end space-x-4">
              {[
                { 
                  icon: FaDiscord, 
                  href: "https://chat.whatsapp.com/FjFH5H5qAwrKeQo9Zlixys", 
                  bg: "bg-[#5865F2]"
                },
                { 
                  icon: FaWhatsapp, 
                  href: "https://chat.whatsapp.com/FjFH5H5qAwrKeQo9Zlixys   ", 
                  bg: "bg-[#25D366]"
                },
                { 
                  icon: FaInstagram, 
                  href: "https://www.instagram.com/gamedevbogor/", 
                  bg: "bg-[#E4405F]"
                }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`${social.bg} w-12 h-12 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center hover:animate-pixel-spin transition-all duration-500 group`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <social.icon className="text-white text-xl group-hover:animate-ping transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center">
            <p className="text-gray-900 text-sm font-bold flex items-center justify-center space-x-2">
              <span>© 2024 GAMEDEV BOGOR</span>
            </p>
          </div>


      </div>
    </footer>
  );
};

export default Footer;