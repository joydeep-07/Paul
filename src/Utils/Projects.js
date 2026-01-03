import portfolio from '../assets/thumbnail/portfolio.png'
import medcare from "../assets/thumbnail/medcare.png";
import img1 from "../assets/thumbnail/lightloom.png";
import img2 from "../assets/thumbnail/keepnotes.png";

export const projects = [
  {
    id: 1,
    thumbnail: img2,
    title: "Keep Notes",
    shortDescription:
      "A secure MERN notes app with rich text editing and PDF export.",
    year: 2024,
    navigate: "/keep/notes",
  },
  {
    id: 2,
    thumbnail: medcare,
    title: "MedCare",
    shortDescription:
      "A medical appointment booking system with real-time slots and email alerts.",
    year: 2024,
    navigate: "/medcare",
  },
  {
    id: 3,
    thumbnail: img1,
    title: "LightLoom",
    shortDescription:
      "A modern responsive website focused on clean UI and smooth interactions.",
    year: 2024,
    navigate: "/lightloom",
  },
];

