import logo_gamedevBogor from '../assets/Logo_bogor.png'
import logo from '../assets/logo.png'

const eventsData = [
  {
    id: "1",
    title: "GLOBAL GAME JAM 2024",
    description: "Join the world's largest game creation event! 48 hours of non-stop game development with developers worldwide.",
    shortDescription: "48-hour global game development marathon",
    date: "2026-01-26",
    location: "Online & On-site",
    type: 'upcoming',
    route: "/events/global-game-jam-2024",
    logo: logo,
    status: 'coming-soon',
    registerLink: "https://globalgamejam.org",
    organizer: "Global Game",
    participants: 100
  },
  {
    id: "2",
    title: "NGARIUNG GAME DEV",
    description: "Monthly gathering for game developers in Bogor to share knowledge, network, and collaborate on projects.",
    shortDescription: "Monthly game developer meetup",
    date: "2024-02-15",
    location: "Bogor",
    type: 'upcoming',
    route: "/events/ngariung-game-dev",
    logo:logo_gamedevBogor ,
    status: 'coming-soon',
    registerLink: "https://forms.game.dev",
    organizer: "Gamedev Bogor",
    participants: 100
  },
  {
    id: "4",
    title: "GAME JAM BOGOR 2025",
    description: "Local game jam event that brought together talented developers from Bogor and surrounding areas.",
    shortDescription: "Local 72-hour game development challenge",
    date: "2025-02-02",
    location: "Bogor",
    type: 'past',
    route: "/events/game-jam-bogor-2023",
    logo:logo_gamedevBogor,
    status: 'completed',
    images: [
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&h=300&fit=crop"
    ],
    longDescription: "The Game Jam Bogor 2023 was an incredible success! Over 72 hours, 25 teams competed to create amazing games based on the theme 'Unexpected Discovery'. The event featured workshops, mentorship sessions, and ended with an exciting game showcase and award ceremony.",
    organizer: "Gamedev Bogor Community",
    participants: 120
  },
  {
    id: "5",
    title: "GAME SHOWCASE",
    description: "Showcasing the best indie games from local developers with playtesting sessions and developer talks.",
    shortDescription: "Local indie game exhibition and playtest",
    date: "2023-09-20",
    location: "Bogor Mall Convention Center",
    type: 'past',
    route: "/events/indie-game-showcase",
    logo: logo_gamedevBogor,
    status: 'completed',
    images: [
      "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop"
    ],
    longDescription: "The Indie Game Showcase brought together 15 local game studios and independent developers to showcase their latest projects. Attendees had the opportunity to playtest unreleased games, meet the developers, and participate in panel discussions about the future of indie game development in Indonesia.",
    organizer: "Bogor Creative Industries",
    participants: 800
  }
];

export default eventsData;