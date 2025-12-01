import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Goals from "./components/Goals"

import GameShowcase from "./components/GameShowcase";
import GameDetailPage from "./pages/GameDetailPage";
import GamesPage from "./pages/GamePage";
import EventPage from "./pages/EventPage";
import EventDetailPage from "./pages/EventDetailPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white bg-grid bg-grid-blue">
        <Header/>
        
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col items-center justify-center gap-6 p-6">
              <Hero/>
              <Goals/>
              <GameShowcase limit={6} />
            </div>
          } />
          
          <Route path="/games" element={<GamesPage />} />
          <Route path="/games/:gameId" element={<GameDetailPage />} />
          <Route path="/events" element={<EventPage />} />
          <Route path="/events/:eventId" element={<EventDetailPage />} />
        </Routes>
        
        <Footer/>
      </div>
    </Router>
  );
}

export default App;