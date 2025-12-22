import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sampleGames from "../data/GamesData";

interface GameShowcaseProps {
  limit?: number;
}

const GameShowcase: React.FC<GameShowcaseProps> = ({ limit }) => {
  const gamesToShow = limit ? sampleGames.slice(0, limit) : sampleGames;
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className={`text-center mb-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
      }`}>
        <div className="inline-block bg-green-400 px-9 py-3 btn mb-4">
          <h2 className="text-gray-800 font-bold text-2xl pixel-font tracking-wide">
            {"GAMES".split("").map((char, index) => (
              <span 
                key={index}
                className="inline-block animate-typewriter"
                style={{ 
                  animationDelay: `${isVisible ? index * 0.1 + 0.5 : 0}s`,
                  animationFillMode: 'both'
                }}
              >
                {char}
              </span>
            ))}
          </h2>
        </div>
        <p className="text-gray-100 text-lg max-w-2xl mx-auto font-mono">
          {limit 
            ? "Check out the games produced by our members" 
            : "Check out the games produced by our members"
          }
        </p>
      </div>

      <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 transition-all duration-800 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`} style={{ transitionDelay: '100ms' }}>
        {gamesToShow.map((game, index) => (
          <Link
            key={game.id}
            to={game.route}
            className="group block"
          >
            <div className={`relative bg-gray-800 overflow-hidden btn hover:-translate-y-2 transition-all duration-300 aspect-[4/3] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`} style={{ 
              transitionDelay: `${200 + (index * 100)}ms`,
              transitionDuration: '500ms'
            }}>
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-full object-cover group-hover:blur-sm group-hover:scale-110 transition-all duration-500"
              />

              <div className="absolute inset-0 group-hover:bg-opacity-80 transition-all duration-300 flex items-center justify-center p-6">
                <div className="text-center transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <h3 className="text-black animate-text-glow font-bold text-2xl pixel-font mb-3">
                    {game.title}
                  </h3>
                  
                  <p className="text-gray-300 text-lg mb-3">
                    by {game.developer}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <span className="bg-blue-500 text-white px-3 py-1 text-sm border border-black">
                      {game.category}
                    </span>
                    <span className="bg-green-500 text-white px-3 py-1 text-sm border border-black">
                      {game.platform}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {limit && (
        <div className={`text-center mt-12 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '300ms' }}>
          <Link 
            to="/games"
            className="bg-green-400 hover:bg-green-600 text-gray-800 pixel-font px-8 py-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold transition-all hover:scale-105 hover:-translate-y-1 inline-block text-lg"
          >
            VIEW ALL GAMES →
          </Link>
        </div>
      )}
    </section>
  );
};

export default GameShowcase;