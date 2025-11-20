import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <header className="max-w-[1350px] mx-auto mt-3">
      <div className="max-w-[1350px] mx-auto">
        
        {/* Desktop */}
        <div className="hidden md:flex justify-between items-center px-4 py-3 border-4 border-black bg-blue-500 pixel-font">
          
          <Link to="/" className="flex items-center">
            <div className="bg-white px-4 py-2 btn">
              <p className="text-black text- font-bold tracking-wide">
                 Gamedev Bogor
              </p>
            </div>
          </Link>

          <nav className="flex gap-3">
            <Link 
              to="/" 
              className="bg-gray-100 hover:bg-yellow-300 text-black px-4 py-2 btn font-bold"
            >
              HOME
            </Link>
            <Link 
              to="/Games" 
              className="bg-gray-100 hover:bg-yellow-300 text-black px-4 py-2 btn font-bold"
            >
              GAMES
            </Link>
            <Link 
              to="/Contact" 
              className="bg-gray-100 hover:bg-yellow-300 text-black px-10 py-2 btn font-bold "
            >
              CONTACT
            </Link>
          </nav>

        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <div className="flex justify-between items-center px-4 py-3 border-4 border-black bg-blue-500">
            <Link to="/">
              <div className="bg-purple-600 px-3 py-1 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-white text-sm font-bold">
                  🎮 Gamedev Bogor
                </p>
              </div>
            </Link>

            <button
              className="bg-red-500 hover:bg-yellow-300 border-2 border-black w-10 h-10 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] transition-all"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-5 h-5 flex flex-col justify-between">
                <span className={`w-full h-[3px] bg-white ${isMenuOpen ? "rotate-45 translate-y-[7px]" : ""} transition-all`}></span>
                <span className={`w-full h-[3px] bg-white ${isMenuOpen ? "opacity-0" : ""} transition-all`}></span>
                <span className={`w-full h-[3px] bg-white ${isMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""} transition-all`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="border-4 border-black border-t-0 bg-blue-500">
              <nav className="flex flex-col p-2 gap-2">
                <Link 
                  to="/" 
                  className="bg-green-400 hover:bg-yellow-300 text-black px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center font-bold hover:translate-x-[2px] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  HOME
                </Link>
                <Link 
                  to="/Games" 
                  className="bg-green-400 hover:bg-yellow-300 text-black px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center font-bold hover:translate-x-[2px] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  GAMES
                </Link>
                <Link 
                  to="/Contact" 
                  className="bg-green-400 hover:bg-yellow-300 text-black px-4 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-center font-bold hover:translate-x-[2px] transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  CONTACT
                </Link>
              </nav>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default Header;