import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getEvents } from "../services/events";
import type { Event } from "../types/event";

const EventsPage = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch events from Firestore
  useEffect(() => {
    getEvents()
      .then(setEvents)
      .finally(() => setLoading(false));
  }, []);

  // Efek untuk animasi transisi ketika komponen dimuat
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#30339b]">
        <p className="text-white font-mono text-lg">Loading events...</p>
      </div>
    );
  }

  const upcomingEvents = events.filter(event => event.type === "upcoming");
  const pastEvents = events.filter(event => event.type === "past");

  return (
    <div className="min-h-screen py-8" style={{ backgroundColor: "#30339b" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header dengan animasi */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <div className="inline-block px-9 py-3 btn mb-4 bg-green-400">
            <h1 className="text-gray-800 font-bold text-2xl pixel-font tracking-wide">
              EVENTS
            </h1>
          </div>
          <p className="font-mono text-gray-100 text-lg max-w-2xl mx-auto">
            Join our game development events, workshops, and jams. Learn, create,
            and connect with fellow developers.
          </p>
        </div>

        {/* Upcoming Events dengan animasi bertahap */}
        <section
          className={`mb-16 transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="bg-green-400 border-2 btn inline-block px-6 py-2 mb-6">
            <h2 className="text-gray-800 font-bold text-xl pixel-font">
              UPCOMING EVENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Link key={event.id} to={event.route} className="group">
                <div
                  className={`bg-white border-4 card-bold hover:-translate-y-2 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${200 + index * 100}ms`,
                    transitionDuration: "500ms",
                  }}
                >
                  <div className="bg-gray-800 border-b-4 border-black p-6 flex items-center justify-center h-48">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-400 border-2 border-black mx-auto mb-3 flex items-center justify-center">
                        <img src={event.logo} alt={event.title} />
                      </div>
                      <h3 className="text-white font-bold text-lg pixel-font">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed font-mono">
                      {event.shortDescription}
                    </p>

                    <div className="flex items-center justify-between text-sm font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 border border-black"></div>
                        <span className="text-gray-700 font-bold">
                          Date : {event.date}
                        </span>
                      </div>
                      <div className="bg-yellow-500 px-2 py-1 btn border-black">
                        <span className="text-black font-bold text-xs">
                          COMING SOON
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono">
                      <div className="w-2 h-2 bg-blue-500 border border-black"></div>
                      <span className="text-gray-700">
                        Location : {event.location}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Past Events dengan animasi bertahap */}
        <section
          className={`transition-all duration-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "300ms" }}
        >
          <div className="bg-green-400 border-2 btn inline-block px-6 py-2 mb-6">
            <h2 className="text-gray-800 font-bold text-xl pixel-font">
              PAST EVENTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <Link key={event.id} to={event.route} className="group">
                <div
                  className={`bg-white card-bold hover:-translate-y-2 transition-all duration-300 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${400 + index * 100}ms`,
                    transitionDuration: "500ms",
                  }}
                >
                  <div className="bg-gray-800 border-b-4 border-black p-6 flex items-center justify-center h-48">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-purple-500 border-2 border-black mx-auto mb-3 flex items-center justify-center">
                        <img src={event.logo} alt={event.title} />
                      </div>
                      <h3 className="text-white font-bold text-lg pixel-font">
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-4 space-y-3">
                    <p className="text-gray-600 text-sm leading-relaxed font-mono">
                      {event.shortDescription}
                    </p>

                    <div className="flex items-center justify-between text-sm font-mono">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 border border-black"></div>
                        <span className="text-gray-700 font-bold">
                          Date : {event.date}
                        </span>
                      </div>
                      <div className="bg-green-500 px-2 py-1 btn border-black">
                        <span className="text-black font-bold text-xs">
                          COMPLETED
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-mono">
                      <div className="w-2 h-2 bg-blue-500 border border-black"></div>
                      <span className="text-gray-700 font-bold">
                        {event.participants}+ Participants
                      </span>
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
