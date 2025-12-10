import { Link } from "react-router-dom";
import eventsData from "../data/eventData";


const EventsPage = () => {
  const upcomingEvents = eventsData.filter(event => event.type === 'upcoming');
  const pastEvents = eventsData.filter(event => event.type === 'past');

  return (
    <div className="min-h-screen py-8"
    style={{backgroundColor : "#30339b"}}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-9 py-3 btn mb-4"
            style={{backgroundColor:"#00ff7f"}}
          >
            <h1 className="text-white font-bold text-2xl pixel-font tracking-wide">
              EVENTS
            </h1>
          </div>
          <p className="font-mono text-gray-100 text-lg max-w-2xl mx-auto">
            Join our game development events, workshops, and jams. Learn, create, and connect with fellow developers.
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <div className="bg-blue-500 border-2 btn inline-block px-6 py-2 mb-6">
            <h2 className="text-white font-bold text-xl pixel-font">UPCOMING EVENTS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                to={event.route}
                className="group"
              >
                <div className="bg-white border-4 card-bold  hover:-translate-y-2 transition-all duration-300">

                  <div className="bg-gray-800 border-b-4 border-black p-6 flex items-center justify-center h-48">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-400 border-2 border-black mx-auto mb-3 flex items-center justify-center">
                        <img className="" src={event.logo} alt={event.title} />
                      </div>
                      <h3 className="text-white font-bold text-lg pixel-font">{event.title}</h3>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed font-mono">
                      {event.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 border border-black"></div>
                        <span className="text-gray-700 font-bold">Date : {event.date}</span>
                      </div>
                      <div className="bg-yellow-400 px-2 py-1 btn border-black">
                        <span className="text-black font-bold text-xs font-mono">COMING SOON</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono">
                      <div className="w-2 h-2 bg-blue-500 border border-black"></div>
                      <span className="text-gray-700"> Location : {event.location}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Past Events */}
        <section>
          <div className="bg-purple-500 border-2 btn inline-block px-6 py-2 mb-6">
            <h2 className="text-white font-bold text-xl pixel-font">PAST EVENTS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event) => (
              <Link
                key={event.id}
                to={event.route}
                className="group"
              >
                <div className="bg-white card-bold hover:-translate-y-2 transition-all duration-300">
                  
                  <div className="bg-gray-800 border-b-4 border-black p-6 flex items-center justify-center h-48">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 border-2 border-black mx-auto mb-3 flex items-center justify-center">
                        <img src={event.logo} alt={event.title} />
                      </div>
                      <h3 className="text-white font-bold text-lg pixel-font">{event.title}</h3>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed font-mono">
                      {event.shortDescription}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 border border-black font-mono"></div>
                        <span className="text-gray-700 font-bold">Date : {event.date}</span>
                      </div>
                      <div className="bg-green-500 px-2 py-1 border btn border-black font-mono">
                        <span className="text-black font-bold text-xs">COMPLETED</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono">
                      <div className="w-2 h-2 bg-blue-500 border border-black"></div>
                      <span className="text-gray-700 font-bold">{event.participants}+ Participants</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default EventsPage;