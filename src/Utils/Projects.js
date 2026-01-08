import portfolio from "../assets/thumbnail/portfolio.png";
import medcare from "../assets/thumbnail/medcare.png";
import movie from "../assets/thumbnail/movie.png";
import img2 from "../assets/thumbnail/keepnotes.png";

export const projects = [
  {
    id: 1,
    title: "Book My Ticket",
    category: "Frontend Application",
    year: 2024,
    thumbnail: movie,
    navigate: "/bookmyticket",
    liveLink: "",

    shortDescription:
      "A modern movie ticket booking application focused on clean UI, reusable components, and smooth user experience.",

    description:
      "Book My Ticket is a modern frontend movie ticket booking application built using Vite and React. The project focuses on reusable component architecture, responsive layouts, and clean user interaction patterns. It simulates real-world ticket booking flows such as browsing movies, viewing show details, selecting seats, and managing bookings. Tailwind CSS and custom CSS variables ensure consistent theming, scalability, and visual polish across the application.",

    techStack: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Clerk Authentication",
      "Reusable Components",
      "Responsive UI",
    ],

    features: [
      "Movie listing with detailed show information and visuals",
      "Interactive and user-friendly seat selection layout",
      "Reusable component-based architecture for scalability",
      "Secure user authentication using Clerk",
      "Responsive design optimized for mobile, tablet, and desktop",
      "Clean UI design using Tailwind CSS and custom CSS variables",
    ],
  },

  {
    id: 2,
    title: "Keep Notes",
    category: "Full Stack Application",
    year: 2024,
    thumbnail: img2,
    navigate: "/keep/notes",
    liveLink: "",

    shortDescription:
      "A secure MERN notes application with rich text editing and document export features.",

    description:
      "Keep Notes is a full-stack MERN application designed to help users securely create, edit, and manage notes. The application includes authentication, rich text editing capabilities, and PDF export functionality. The focus of this project was on building secure APIs, managing state efficiently, and creating an intuitive user interface for productivity-focused use cases.",

    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
      "REST APIs",
    ],

    features: [
      "User authentication and secure access control",
      "Create, edit, and delete notes with rich text support",
      "Export notes as PDF documents",
      "RESTful API integration with MongoDB",
      "Responsive UI for seamless usage across devices",
      "Clean and intuitive dashboard design",
    ],
  },

  {
    id: 3,
    title: "MedCare",
    category: "MERN Web Application",
    year: 2024,
    thumbnail: medcare,
    navigate: "/medcare",
    liveLink: "",

    shortDescription:
      "A medical appointment booking system with real-time slot management and email notifications.",

    description:
      "MedCare is a MERN-based medical appointment booking platform that enables patients to book doctor appointments in real time. The system manages appointment slots dynamically and sends email confirmations upon successful bookings. This project emphasizes real-world application logic, role-based access, and seamless communication between frontend and backend services.",

    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Nodemailer",
      "Role-Based Authentication",
    ],

    features: [
      "Real-time appointment slot availability",
      "Doctor and patient role-based access control",
      "Email notifications for booking confirmations",
      "Secure authentication and authorization",
      "Scalable backend architecture using MERN stack",
      "Responsive and user-friendly interface",
    ],
  },
];
