import React from "react";
import GameShowcase from "../components/GameShowcase";

const GamesPage: React.FC = () => {
  return (
    <div className="min-h-screen"
    style={{backgroundColor:"#30339b"}}
    >
      <GameShowcase />
    </div>
  );
};

export default GamesPage;