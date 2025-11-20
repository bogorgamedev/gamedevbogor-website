import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

function App() {
  return (
     <Router>
      <div className="min-h-screen bg-grid bg-grid-blue bg-white">
        <Header/>
        
        <Routes>
          <Route path="/" element={
            <div className="flex flex-col items-center justify-center gap-6 p-6">
              <Hero/>
            </div>
          } />
          {/* Route untuk Components */}
          {/* <Route path="/components" element={<Components />} />
          <Route path="/installation" element={<Installation />} /> */}
        </Routes>
      </div>
       <Footer/>
    </Router>
   
  );
}

export default App;
