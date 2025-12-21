import logo from '../assets/logo_ggj.png'

import dgjj1_2025 from '../assets/documentation/GGJ/2025/ggjdocumentation_2025.jpg'
import dgjj2_2025 from '../assets/documentation/GGJ/2025/ggjdocumentation5_2025.jpg'
import dgjj3_2025 from '../assets/documentation/GGJ/2025/ggjdocumentation2_2025.jpg'
import dgjj4_2025 from '../assets/documentation/GGJ/2025/ggjdocumentation3_2025.jpg'
import dgjj5_2025 from '../assets/documentation/GGJ/2025/ggjdocumentation4_2025.jpg'

import dgjj1_2024 from '../assets/documentation/GGJ/2024/ggjdocumentation1_2024.jpg'
import dgjj2_2024 from '../assets/documentation/GGJ/2024/ggjdocumentation2_2024.jpg'
import dgjj3_2024 from '../assets/documentation/GGJ/2024/ggjdocumentation3_2024.jpg'
import dgjj4_2024 from '../assets/documentation/GGJ/2024/ggjdocumentation4_2024.jpg'
import dgjj5_2024 from '../assets/documentation/GGJ/2024/ggjdocumentation5_2024.jpg'

import dgjj1_2023 from '../assets/documentation/GGJ/2023/ggjdocumentation1_2023.jpg'
import dgjj2_2023 from '../assets/documentation/GGJ/2023/ggjdocumentation2_2023.jpg.jpg'
import dgjj3_2023 from '../assets/documentation/GGJ/2023/ggjdocumentation3_2023.jpg'
import dgjj4_2023 from '../assets/documentation/GGJ/2023/ggjdocumentation4_2023.jpg.jpg'


const eventsData = [
  {
    id: "1",
    title: "GLOBAL GAME JAM 2025",
    description: "Join the world's largest game creation event! 48 hours of non-stop game development with developers worldwide.",
    shortDescription: "48-hour global game development marathon",
    date: "24-01-2025",
    location: "Bogor Creative Center",
    type: 'past',
    route: "/events/global-game-jam-2024",
    logo: logo,
    status: 'completed',
      images: [
      dgjj1_2025,
      dgjj2_2025,
      dgjj3_2025,
      dgjj4_2025,
      dgjj5_2025
    ],
    organizer: "Gamedev Bogor",
    participants: 100
  },
  {
    id: "2",
    title: "GAME JAM BOGOR 2026",
    description: "Monthly gathering for game developers in Bogor to share knowledge, network, and collaborate on projects.",
    shortDescription: "Monthly game developer meetup",
    date: "30-01-2026",
    location: "Bogor",
    type: 'upcoming',
    route: "/events/ngariung-game-dev",
    logo:logo ,
    status: 'coming-soon',
    registerLink: "https://forms.game.dev",
    organizer: "Gamedev Bogor",
    participants: 100
  },
  {
    id: "4",
    title: "GAME JAM BOGOR 2024",
    description: "Local game jam event that brought together talented developers from Bogor and surrounding areas.",
    shortDescription: "Local 72-hour game development challenge",
    date: "26-01-2024",
    location: "Bogor Creative Center",
    type: 'past',
    route: "/events/game-jam-bogor-2023",
    logo:logo,
    status: 'completed',
    images: [
      dgjj1_2024,
      dgjj2_2024,
      dgjj3_2024,
      dgjj4_2024,
      dgjj5_2024
    ],
    longDescription: "The Game Jam Bogor 2023 was an incredible success! Over 72 hours, 25 teams competed to create amazing games based on the theme 'Unexpected Discovery'. The event featured workshops, mentorship sessions, and ended with an exciting game showcase and award ceremony.",
    organizer: "Gamedev Bogor",
    participants: 120
  },
  {
    id: "5",
    title: "GAME JAM BOGOR 2023",
    description: "Showcasing the best indie games from local developers with playtesting sessions and developer talks.",
    shortDescription: "Local indie game exhibition and playtest",
    date: "03-02-2023",
    location: "Indigo Space Bogor",
    type: 'past',
    route: "/events/indie-game-showcase",
    logo: logo,
    status: 'completed',
    images: [
      dgjj1_2023,
      dgjj2_2023,
      dgjj3_2023,
      dgjj4_2023,
    ],
    longDescription: "The Indie Game Showcase brought together 15 local game studios and independent developers to showcase their latest projects. Attendees had the opportunity to playtest unreleased games, meet the developers, and participate in panel discussions about the future of indie game development in Indonesia.",
    organizer: "Gamedev Bogor",
    participants: 800
  }
];

export default eventsData;