import React from "react";
import GameShowcase from "../components/GameShowcase";

const GamesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GameShowcase />
    </div>
  );
};

export default GamesPage;