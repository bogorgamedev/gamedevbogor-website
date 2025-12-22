import  { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import eventsData from "../data/eventData";

const EventDetailPage = () => {
  const { eventId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const event = eventsData.find(e => e.route === `/events/${eventId}`);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const nextImage = () => {
    if (event?.images) {
      setCurrentImageIndex((prev) => 
        prev === event.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (event?.images) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? event.images.length - 1 : prev - 1
      );
    }
  };

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4"
      style={{backgroundColor: "#30339b"}}
      >
        <div className="text-center max-w-md w-full">
          <div className="bg-white border-4 card p-8 animate-pixel-pop">
            <div className="w-16 h-16 bg-red-500 border-2 border-black flex items-center justify-center mx-auto mb-4 animate-bounce">
              <span className="text-2xl">⚠️</span>
            </div>
            <h1 className="text-2xl font-bold pixel-font text-gray-800 mb-2">EVENT NOT FOUND</h1>
            <p className="text-gray-600 mb-6 font-mono">The event you're looking for doesn't exist.</p>
            <Link 
              to="/events" 
              className="inline-flex items-center gap-2 btn-bold bg-green-400 hover:bg-green-500 text-white px-6 py-3 border-2 border-black font-bold transition-all hover:scale-105 font-mono"
            >
              ← BACK TO EVENTS
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8"
    style={{backgroundColor: "#30339b"}}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 
        <div className={`mb-8 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <Link 
              to="/events" 
              className="inline-flex items-center gap-2 btn-bold bg-green-400 hover:bg-green-500 text-black px-6 py-3 border-2 border-black font-bold transition-all hover:scale-105 font-mono"
            >
              ← BACK TO EVENTS
            </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3 space-y-8">
            
            <div className={`bg-white card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-blue-800 btn-bold flex items-center justify-center hover:scale-105 transition-transform duration-300">
                    <img src={event.logo} alt={event.logo} />
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left font-mono">
                  <h1 className="text-3xl lg:text-4xl font-bold pixel-font text-gray-800 mb-4 leading-tight">
                    {event.title}
                  </h1>
                  
                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-4">
                    <div className="bg-blue-400 text-gray-800 px-4 py-2 border-2 btn font-bold hover:scale-105 transition-transform duration-200">
                      {event.date}
                    </div>
                    <div className="bg-purple-400 text-gray-800 px-4 py-2 border-2 btn font-bold hover:scale-105 transition-transform duration-200">
                      {event.location}
                    </div>
                    <div className={`px-4 py-2 border-2 btn font-bold hover:scale-105 transition-transform duration-200 ${
                      event.status === 'coming-soon' 
                        ? 'bg-yellow-400 text-black' 
                        : 'bg-yellow-500 text-gray-800'
                    }`}>
                      {event.status === 'coming-soon' ? 'COMING SOON' : 'COMPLETED'}
                    </div>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            </div>

            {event.status === 'completed' && event.images && event.images.length > 0 && (
              <div className={`bg-white card-bold p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '200ms' }}>
                <div className="bg-red-500 btn inline-block px-4 py-2 mb-4 hover:scale-105 transition-transform duration-200">
                  <h2 className="text-white font-bold text-xl pixel-font">EVENT GALLERY</h2>
                </div>
                
                <div className="relative bg-gray-800 card aspect-video mb-4 overflow-hidden group">
                  <img
                    src={event.images[currentImageIndex]}
                    alt={`${event.title} ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {event.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 btn top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-all duration-200"
                      >
                        ‹
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 btn top-1/2 transform -translate-y-1/2 bg-black bg-opacity-70 text-white w-10 h-10 border-2 border-white flex items-center justify-center hover:bg-opacity-90 hover:scale-110 transition-all duration-200"
                      >
                        ›
                      </button>
                    </>
                  )}
                  
                  {event.images.length > 1 && (
                    <div className="absolute bottom-4 btn left-1/2 transform -translate-x-1/2 bg-black bg-opacity-70 text-white px-4 py-2 border-2 border-white font-bold">
                      {currentImageIndex + 1} / {event.images.length}
                    </div>
                  )}
                </div>

                {event.images.length > 1 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {event.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`border-4 transition-all duration-200 ${
                          index === currentImageIndex 
                            ? 'border-blue-500 shadow-[2px_2px_0px_0px_rgba(59,130,246,1)]' 
                            : 'btn hover:border-blue-400'
                        } hover:scale-105`}
                      >
                        <img
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-20 object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <div className={`bg-white card p-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '400ms' }}>
              <div className="bg-green-400 btn  inline-block px-4 py-2 mb-4 hover:scale-105 transition-transform duration-200">
                <h2 className="text-gray-800 font-bold text-xl pixel-font">ABOUT THIS EVENT</h2>
              </div>
              <p className="text-gray-800 leading-relaxed text-lg font-mono">
                {event.longDescription || event.description}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className={`bg-white card-bold p-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '300ms' }}>
              <div className="bg-green-400 card inline-block px-4 py-2 mb-4 hover:scale-105 transition-transform duration-200">
                <h3 className="text-gray-800 font-bold pixel-font">EVENT DETAILS</h3>
              </div>
              
              <div className="space-y-4 font-mono">
                <div className="flex items-center gap-3 p-3 bg-gray-50 border-2 border-gray-200 hover:border-blue-400 transition-all duration-200">
                  <div className="w-3 h-3 bg-blue-500 border border-black"></div>
                  <div>
                    <div className="text-gray-600 text-sm font-bold">DATE</div>
                    <div className="text-gray-800 font-bold">{event.date}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 border-2 border-gray-200 hover:border-green-400 transition-all duration-200">
                  <div className="w-3 h-3 bg-green-500 border border-black"></div>
                  <div>
                    <div className="text-gray-600 text-sm font-bold">LOCATION</div>
                    <div className="text-gray-800 font-bold">{event.location}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-gray-50 border-2 border-gray-200 hover:border-purple-400 transition-all duration-200">
                  <div className="w-3 h-3 bg-purple-500 border border-black"></div>
                  <div>
                    <div className="text-gray-600 text-sm font-bold">ORGANIZER</div>
                    <div className="text-gray-800 font-bold">{event.organizer}</div>
                  </div>
                </div>
                
                {event.participants && (
                  <div className="flex items-center gap-3 p-3 bg-gray-50 border-2 border-gray-200 hover:border-red-400 transition-all duration-200">
                    <div className="w-3 h-3 bg-red-500 border border-black"></div>
                    <div>
                      <div className="text-gray-600 text-sm font-bold">PARTICIPANTS</div>
                      <div className="text-gray-800 font-bold">{event.participants}+</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {event.status === 'coming-soon' && event.registerLink && (
              <div className={`font-mono transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '500ms' }}>
                <a 
                  href={event.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-4 btn-bold font-bold text-center transition-all hover:scale-105 hover:-translate-y-1 animate-pixel-pulse text-lg"
                >
                  🎯 REGISTER NOW
                </a>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default EventDetailPage;