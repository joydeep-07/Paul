import lightloom from "../assets/thumbnail/lightloom.png";
import medcare from "../assets/thumbnail/medcare.png";
import movie from "../assets/thumbnail/movie.png";
import img2 from "../assets/thumbnail/keepnotes.png";
import wtsp from '../assets/thumbnail/wtsp.png'
import school from "../assets/thumbnail/school.png";
import rentease from "../assets/thumbnail/rentease.png";
import templeImg from "../assets/thumbnail/bharat.png";
import neurocare from "../assets/thumbnail/neurocare.png"

export const projects = [
  {
    id: "neurocare",
    title: "NeuroCare",
    category: "AI-Powered Healthcare Platform",
    year: 2026,
    thumbnail: neurocare, // replace with your actual image import
    navigate: "/neurocare",
    liveLink: "",

    shortDescription:
      "An AI-powered medical appointment booking platform that intelligently connects patients with the right doctors based on symptoms, specialization, and location.",

    description:
      "NeuroCare is a full-stack MERN healthcare platform designed to simplify the appointment booking process for patients while providing efficient management tools for doctors and healthcare service providers. The platform features AI-assisted symptom analysis that recommends suitable medical specialists based on user-entered symptoms such as headache, fever, back pain, or chest pain. Patients can securely sign in using Email OTP or Google authentication, manage family members, upload medical reports, book appointments, receive digital prescriptions, and download them as professionally formatted PDFs. Doctors can manage appointments, write prescriptions, and access patient history, while administrators coordinate appointment approvals and scheduling. Built with modern UI principles, secure authentication, cloud storage, and responsive design, NeuroCare provides a scalable foundation for digital healthcare services.",

    techStack: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
      "Google OAuth",
      "Email OTP Authentication",
      "Cloudinary",
      "React PDF",
      "GSAP",
      "REST APIs",
    ],

    features: [
      "AI-powered symptom analysis with automatic doctor recommendations",
      "Appointment booking based on illness, specialization, and location",
      "Email OTP and Google OAuth authentication",
      "Patient, Doctor, and Service Provider portals",
      "Admin-controlled appointment approval and scheduling",
      "Family member management with shared medical records",
      "Medical report upload and cloud storage using Cloudinary",
      "Digital prescription creation with downloadable A4 PDF",
      "Doctor search by specialization and medical condition",
      "Patient profile management with custom avatar upload",
      "Responsive UI with dark mode support and smooth GSAP animations",
      "Secure REST API architecture with JWT authentication",
    ],
  },

  {
    id: "bharat-vraman",
    title: "Bharat Vraman",
    category: "Frontend Web Application",
    year: 2026,
    thumbnail: templeImg, // replace with your actual image import
    navigate: "/bharat-vraman",
    liveLink: "",

    shortDescription:
      "A beautifully designed temple exploration platform showcasing famous Indian temples with detailed information and smooth UI experience.",

    description:
      "Temple Explorer is a modern web application built using React.js that allows users to explore famous temples across India. The project displays temples in a visually appealing grid layout with images, names, and locations. Each temple has a dedicated detail page powered by dynamic routing using slugs, where users can view complete information such as deity, history, location, timings, and significance. The UI focuses on aesthetic design with smooth animations, responsive layout, and reusable components. The project emphasizes clean frontend architecture, user-friendly navigation, and scalable data handling.",

    techStack: [
      "React.js",
      "React Router",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "Responsive Design",
    ],

    features: [
      "Dynamic temple listing in grid layout with image, name, and state",
      "Slug-based routing for individual temple detail pages",
      "Detailed temple information including deity, history, and location",
      "Reusable component structure for scalability",
      "Modern UI with smooth animations and clean design",
      "Responsive layout for mobile, tablet, and desktop",
      "Optimized performance with efficient rendering",
    ],
  },

  {
    id: "whatsapp-clone",
    title: "WhatsApp Clone",
    category: "Full Stack Application",
    year: 2026,
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
    year: 2025,
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
    year: 2025,
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
  {
    id: "school-website",
    title: "Modern School Website",
    category: "Frontend Application",
    year: 2026,
    thumbnail: school,
    navigate: "/school",
    liveLink: "https://davrnp.netlify.app/",

    shortDescription:
      "A modern, fully responsive school website with admin-based layout control, dynamic content sections, and smooth animated UI.",

    description:
      "Modern School Website is a responsive React-based web application designed to represent a professional educational institution online. The project focuses on clean UI architecture, dynamic component rendering, and smooth user experience. It includes conditional layout rendering based on admin authentication, reusable section components, and a fully customized light/dark theme system using CSS variables. Animations powered by Framer Motion and GSAP enhance visual engagement while maintaining performance and scalability.",

    techStack: [
      "React.js",
      "React Router",
      "Framer Motion",
      "GSAP",
      "CSS Variables (Custom Theme System)",
      "Responsive Design",
    ],

    features: [
      "Admin-based conditional layout rendering",
      "Reusable and scalable component architecture",
      "Custom light/dark theme toggle using CSS variables",
      "Smooth page transitions using Framer Motion",
      "Scroll-triggered animations with GSAP",
      "Fully responsive design for all devices",
      "Modern UI with clean typography and spacing system",
    ],
  },
  {
    id: "rentease",
    title: "RentEase ",
    category: "Frontend Application",
    year: 2026,
    thumbnail: rentease,
    navigate: "/rentease",
    liveLink: "https://rease.netlify.app/",

    shortDescription:
      "A modern React-based bike rental interface that allows users to browse rentals, view rental details, and manage active rentals through a clean dashboard UI.",

    description:
      "RentEase is a modern frontend bike rental interface built with React.js. The project focuses on creating a clean and intuitive user experience for browsing bikes and managing rentals. Users can explore different bike categories, view detailed information about available bikes, and check their active rentals through a structured dashboard layout. The application uses reusable component architecture, responsive design principles, and smooth UI interactions to create a scalable and visually appealing rental platform interface.",

    techStack: [
      "React.js",
      "React Router",
      "Tailwind CSS",
      "CSS Variables (Custom Theme System)",
      "GSAP",
      "Responsive Design",
    ],

    features: [
      "Modern bike rental browsing interface",
      "Featured bikes section with category filtering",
      "Active rentals dashboard layout",
      "Detailed bike information cards",
      "Reusable and scalable React component structure",
      "Responsive design for mobile, tablet, and desktop",
      "Smooth UI interactions and animations",
      "Clean and minimal dashboard-style UI",
    ],
  },
];
