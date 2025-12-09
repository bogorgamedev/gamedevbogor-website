import React from "react";
import { useParams, Link } from "react-router-dom";
import sampleGames from "../data/GamesData";

const GameDetailPage: React.FC = () => {
  const { gameId } = useParams<{ gameId: string }>();
  
  const game = sampleGames.find(g => g.route === `/games/${gameId}`);
  
  if (!game) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center max-w-md w-full">
          <div className="bg-white card-bold p-8">
            <div className="w-16 h-16 bg-red-500 border-2 border-black flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-bold pixel-font text-gray-800 mb-2">
              GAME NOT FOUND
            </h1>
            <p className="text-gray-600 mb-6">
              The game you're looking for doesn't exist.
            </p>
            <Link 
              to="/games" 
              className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 border-2 border-black font-bold transition-all hover:scale-105"
            >
              ← BACK TO GAMES
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-8">
          <Link 
            to="/games" 
            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 border-2 border-black font-bold transition-all hover:scale-105"
          >
            ← BACK TO GAMES
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        
          <div className="relative">
            <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-4 hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transition-all duration-300">
              <img
                src={game.image}
                alt={game.title}
                className="w-full h-auto object-cover border-2 border-black hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 border border-black animate-pixel-float" style={{ animationDelay: '0.2s' }}></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-yellow-400 border border-black animate-pixel-float" style={{ animationDelay: '0.4s' }}></div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold pixel-font text-gray-800 leading-tight">
                {game.title}
              </h1>
            </div>

            <div className="flex flex-wrap gap-3 items-center font-mono">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 border border-black"></div>
                <span className="text-gray-800 font-bold">by {game.developer}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 border border-black"></div>
                <span className="text-gray-800 font-bold">{game.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 border border-black"></div>
                <span className="text-gray-800 font-bold">PC</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={game.downloadLink || "#"}
                className="font-mono bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 btn font-bold text-center transition-all hover:scale-105 hover:-translate-y-1 flex-1 "
              >
                DOWNLOAD
              </a>
            </div>
          </div>
        </div>
        <div className="bg-white card-bold p-6 mb-8">
          <div className="bg-purple-600 btn inline-block px-4 py-2 mb-4">
            <h2 className="text-white font-bold text-xl pixel-font">ABOUT THIS GAME</h2>
          </div>
          <p className="text-gray-800 leading-relaxed text-lg font-mono">
            {game.longDescription }
          </p>
        </div>

      </div>
    </div>
  );
};

export default GameDetailPage;