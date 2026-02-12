import lightloom from "../assets/thumbnail/lightloom.png";
import medcare from "../assets/thumbnail/medcare.png";
import movie from "../assets/thumbnail/movie.png";
import img2 from "../assets/thumbnail/keepnotes.png";
import wtsp from '../assets/thumbnail/wtsp.png'

export const projects = [
  {
    id: "whatsapp-clone",
    title: "WhatsApp Clone",
    category: "Full Stack Application",
    year: 2025,
    thumbnail: wtsp, 
    navigate: "/whatsapp",
    liveLink: "",

    shortDescription:
      "A real-time MERN WhatsApp clone with authentication, contact management, and integrated META AI chatbot.",

    description:
      "FullStack WhatsApp Clone is a real-time messaging application built using the MERN stack. The project replicates core WhatsApp functionalities including one-to-one chat, contact management, profile customization, and secure authentication. It uses Socket.io for instant message delivery and MongoDB for persistent storage. A fully functional META AI chatbot is integrated into the system, allowing users to interact with AI directly within the chat interface. The application focuses on real-time communication, scalable backend architecture, and clean, responsive UI design.",

    techStack: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Socket.io",
      "JWT Authentication",
      "Redux Toolkit",
      "REST APIs",
    ],

    features: [
      "Real-time one-to-one messaging using Socket.io",
      "Secure JWT-based authentication and protected routes",
      "Contact management system with add/view functionality",
      "Profile update with image upload stored in MongoDB",
      "Message persistence with conversation history",
      "Integrated working META AI chatbot inside chat interface",
      "Responsive UI with smooth animations and modern design",
    ],
  },

  {
    id: "book-my-ticket",
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
    id: "keep-notes",
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
    id: "medcare",
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

  {
    id: "lightloom",
    title: "LightLoom",
    category: "WebGL Creative Experience",
    year: 2025,
    thumbnail: lightloom,
    navigate: "/lightloom",
    liveLink: "",

    shortDescription:
      "A visually immersive WebGL-based design experience focused on lighting, depth, and interactive motion.",

    description:
      "LightLoom is a creative WebGL-powered web experience designed to explore modern visual storytelling through lighting, depth, and smooth interactions. The project focuses on GPU-accelerated rendering, fluid animations, and immersive design principles rather than traditional application logic. It demonstrates strong frontend creativity, performance-aware rendering, and an understanding of modern 3D web technologies.",

    techStack: [
      "WebGL",
      "Three.js",
      "React.js",
      "GLSL Shaders",
      "GSAP Animations",
      "Responsive Canvas Design",
    ],

    features: [
      "Interactive WebGL scene with real-time lighting effects",
      "Smooth camera movement and animated transitions",
      "Custom shaders for enhanced visual depth and glow",
      "Performance-optimized rendering using GPU acceleration",
      "Responsive canvas adapting to different screen sizes",
      "Creative UI blending traditional DOM with 3D elements",
    ],
  },
];
