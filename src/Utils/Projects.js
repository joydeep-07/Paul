import lightloom from "../assets/thumbnail/lightloom.png";
import medcare from "../assets/thumbnail/medcare.png";
import movie from "../assets/thumbnail/movie.png";
import img2 from "../assets/thumbnail/keepnotes.png";
import wtsp from '../assets/thumbnail/wtsp.png'
import school from "../assets/thumbnail/school.png";
import rentease from "../assets/thumbnail/rentease.png";
import templeImg from "../assets/thumbnail/bharat.png";
import neurocare from "../assets/thumbnail/neurocare.png"
import palettex from "../assets/thumbnail/palettex.png";

export const projects = [
  {
    id: "palette-x",
    title: "Palette X",
    category: "Web-Based Digital Painting Application",
    year: 2026,
    thumbnail: palettex,
    navigate: "/project/palette-x",
    liveLink: "",

    shortDescription:
      "A modern web-based paint application inspired by Microsoft Paint that provides intuitive drawing, shape creation, text editing, color customization, image manipulation, and export functionality.",

    description:
      "Palette X is a modern web-based digital painting and image editing application inspired by the simplicity and accessibility of Microsoft Paint. The application provides users with a complete canvas-based workspace for creating and editing digital artwork directly in the browser. It includes essential drawing tools such as pencils, brushes, erasers, shapes, lines, curves, fill tools, color selection, custom colors, text insertion, selections, zooming, resizing, rotation, and image transformations. The application is designed around an intuitive layer-based and vector-aware canvas architecture that allows different types of drawing elements to be rendered and manipulated efficiently. Users can customize brush sizes, colors, shape properties, text styling, and canvas dimensions while maintaining a simple and familiar editing workflow. Palette X also supports undo and redo operations and image export, with exported artwork flattened onto a solid white background to ensure consistent results across image formats.",

    techStack: [
      "React.js",
      "TypeScript",
      "HTML5 Canvas",
      "Canvas API",
      "Tailwind CSS",
      "Layer Management",
      "Vector Graphics",
      "Image Processing",
      "Responsive UI",
    ],

    features: [
      "Browser-based digital painting workspace for creating and editing artwork without installing desktop software.",
      "MS Paint-inspired interface designed around a simple and familiar image editing workflow.",
      "Freehand pencil and brush tools for drawing directly on the canvas.",
      "Adjustable brush and pencil sizes for different drawing requirements.",
      "Eraser tool for removing portions of artwork.",
      "Paint bucket tool for filling enclosed areas with selected colors.",
      "Color picker for selecting colors directly from the canvas.",
      "Custom color selection allowing users to work with their preferred colors.",
      "Foreground and background color management for flexible drawing workflows.",
      "Line and curve drawing tools for creating precise paths.",
      "Geometric shape tools including rectangles, rounded rectangles, circles, ellipses, and polygons.",
      "Customizable shape outlines, fill colors, and drawing properties.",
      "Text tool allowing users to add text directly onto the canvas.",
      "Text customization including font family, font size, color, alignment, bold, and italic styling where supported.",
      "Selection tools for selecting and manipulating portions of artwork.",
      "Canvas resizing for changing the dimensions of the working area.",
      "Image transformation tools including rotation and horizontal or vertical flipping.",
      "Zoom controls for working precisely on detailed artwork.",
      "Undo and redo functionality for recovering previous canvas states.",
      "Layer-based rendering architecture for managing and compositing canvas content.",
      "Vector element rendering system for handling editable graphical elements.",
      "Responsive interface designed for desktop, tablet, and touch-based devices.",
      "Touch-friendly canvas interactions for supported mobile and tablet devices.",
      "PNG image export for saving completed artwork.",
      "JPEG and WebP export support for flexible image output.",
      "Exported images are flattened onto a solid white background to prevent unwanted transparency.",
      "Canvas content and vector elements are composited together during image export.",
      "Optimized canvas rendering designed to maintain smooth drawing interactions.",
    ],

    strategies: [
      {
        title: "Problem Statement",
        description:
          "Traditional desktop painting applications can be unnecessarily complex for users who only need a simple environment for drawing, annotating, and editing images. Palette X addresses this by bringing the core functionality of a familiar paint application into the browser. The goal is to provide essential image creation and editing capabilities through an accessible interface without requiring additional desktop software.",
      },

      {
        title: "Canvas-Based Architecture",
        description:
          "Palette X is built around the HTML5 Canvas API to provide real-time drawing and image rendering directly in the browser. Canvas operations are used for freehand drawing, shapes, image manipulation, and final rendering. The application separates document state from rendering logic so that canvas content can be composed efficiently while keeping the editing system maintainable.",
      },

      {
        title: "Layer Management",
        description:
          "A dedicated layer management system is used to organize and composite different pieces of canvas content. Instead of treating the entire artwork as a single drawing surface, the application can manage multiple layers and combine them during rendering and export. This provides a more flexible foundation for future editing capabilities while keeping the rendering pipeline organized.",
      },

      {
        title: "Vector Element Rendering",
        description:
          "Palette X uses a vector-aware rendering system for graphical elements such as shapes and other structured canvas objects. Vector elements can be interpreted and rendered separately from raster-based drawing operations, allowing the application to maintain a clean distinction between freehand artwork and structured graphical elements.",
      },

      {
        title: "MS Paint-Inspired User Experience",
        description:
          "The interface is designed around the familiar interaction patterns of Microsoft Paint while using a modern web-based implementation. Tools are organized according to their purpose, making it easy for users to select drawing tools, customize colors and properties, add text, manipulate images, and export their final artwork without unnecessary complexity.",
      },

      {
        title: "Image Export Strategy",
        description:
          "The export system creates a separate rendering canvas and composites the complete document before generating the final image. During export, a solid white background is placed underneath all layers and vector elements. This ensures that saved images do not contain unexpected transparent regions and that the final artwork has a consistent white background across PNG, JPEG, and WebP exports.",
      },

      {
        title: "Responsive Canvas Interaction",
        description:
          "The application is designed to work across different screen sizes while preserving an effective drawing experience. Desktop users receive a full editing workspace, while smaller devices use responsive controls and touch-friendly interactions. The canvas interaction model is designed to support mouse, touch, and other supported pointer input methods.",
      },
    ],

    takeaways: [
      "Building Palette X significantly strengthened my practical understanding of browser-based graphics programming and interactive canvas applications. Through this project, I gained hands-on experience working with the HTML5 Canvas API, layer compositing, vector rendering, drawing interactions, image transformations, custom color management, text rendering, undo and redo systems, and image export pipelines. The project also helped me understand the architectural challenges involved in building an editor where user interactions must be translated into persistent graphical state while maintaining smooth rendering performance. Implementing a complete MS Paint-inspired workflow further improved my ability to design reusable tools, manage complex canvas state, separate rendering logic from application state, and create a responsive editing experience for different devices.",
    ],
  },
  {
    id: "neurocare",
    title: "NeuroCare",
    category: "AI-Powered Healthcare Platform",
    year: 2026,
    thumbnail: neurocare,
    navigate: "/neurocare",
    liveLink: "",

    shortDescription:
      "An AI-powered healthcare platform that connects patients with suitable doctors through intelligent symptom analysis, specialization-based recommendations, location-aware discovery, and streamlined appointment management.",

    description:
      "NeuroCare is a full-stack MERN healthcare platform designed to simplify how patients discover doctors, manage medical information, and schedule healthcare appointments. The platform combines AI-assisted symptom analysis with structured doctor data to recommend suitable medical specialists based on symptoms, medical conditions, specialization, and location. Instead of manually searching through doctors, patients can describe their health concerns and receive relevant recommendations along with general preventive guidance. The platform supports secure Email OTP and Google OAuth authentication, personalized patient profiles, family member management, medical report uploads, appointment scheduling, digital prescriptions, and downloadable A4 prescription PDFs. Doctors can manage approved appointments, review relevant patient information, and create prescriptions, while administrators control doctor onboarding, appointment approval, and scheduling workflows. The system was designed with a modular architecture, role-based access control, cloud-based file storage, responsive interfaces, and reusable components to provide a scalable foundation for modern digital healthcare services.",

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
      "Email OTP",
      "Cloudinary",
      "React PDF",
      "GSAP",
      "REST APIs",
      "Groq API",
    ],

    features: [
      "AI-assisted symptom analysis that interprets patient-entered health concerns and suggests relevant medical specialists.",
      "Intelligent doctor recommendations based on illness, specialization, and patient location.",
      "Preventive healthcare suggestions generated from the patient's described symptoms and medical concerns.",
      "Appointment booking workflow where patients can request appointments and administrators control final confirmation and scheduling.",
      "Separate role-based portals for Patients, Doctors, and Administrators with access to role-specific functionality.",
      "Secure authentication using Email OTP and Google OAuth with JWT-based session management.",
      "Automatic user profile creation and personalized account management after successful authentication.",
      "Family member management allowing patients to maintain profiles for family members and book appointments on their behalf.",
      "Shared appointment visibility between the primary account and the selected family member.",
      "Medical profile management including date of birth, blood group, height, weight, illnesses, medical history, notes, and doctor recommendations.",
      "Medical report and document uploads using Cloudinary for reliable cloud-based storage.",
      "Doctor discovery based on specialization, medical condition, and location.",
      "Doctor-side appointment management for reviewing confirmed appointments and managing patient consultations.",
      "Digital prescription generation containing patient information, doctor details, medicines, dosage instructions, and consultation information.",
      "Professional A4 prescription PDF generation and download using React PDF.",
      "Custom patient avatar management with support for uploaded profile images.",
      "Responsive healthcare dashboard designed for desktop, tablet, and mobile devices.",
      "Light and dark theme support with centralized design variables.",
      "Smooth interface interactions and transitions using GSAP and modern React animation patterns.",
      "RESTful backend architecture separating authentication, user management, appointments, doctors, profiles, and AI-related operations.",
      "Protected API routes using JWT authentication and role-based authorization.",
      "MongoDB-based data management for users, doctors, appointments, family members, medical information, and AI conversations.",
      "Persistent AI assistant conversations with support for creating and managing multiple chat sessions.",
    ],

    strategies: [
      {
        title: "Problem Statement",
        description:
          "Finding the right doctor can be difficult when patients are unsure which medical specialist they need. Traditional appointment platforms often require users to understand medical specializations before searching for a doctor. NeuroCare addresses this problem by allowing patients to describe their symptoms in natural language and using AI-assisted analysis to guide them toward appropriate specialists. The system also considers location and doctor information to make the recommendation process more practical.",
      },
      {
        title: "AI Recommendation Approach",
        description:
          "The platform integrates an AI-powered assistant that processes patient-described symptoms and connects them with structured doctor information stored in the database. Instead of allowing the AI to independently invent doctor information, recommendations are designed around available platform data. The assistant can identify potential medical specializations, suggest relevant doctors, provide general preventive practices, and guide users toward appropriate appointment options.",
      },
      {
        title: "Appointment Workflow",
        description:
          "The appointment system follows a controlled workflow involving patients, administrators, and doctors. Patients can request an appointment for themselves or a family member, while administrators review and confirm the requested date and time. Only after administrative approval does the appointment become visible as a confirmed booking in the relevant patient and doctor portals. This approach provides better control over scheduling and prevents unapproved appointment requests from reaching doctors prematurely.",
      },
      {
        title: "Role-Based Architecture",
        description:
          "NeuroCare uses a role-based application structure to separate responsibilities between patients, doctors, and administrators. Each role receives access only to the features required for its workflow. Patients manage profiles, family members, appointments, medical information, and AI assistance. Doctors manage confirmed appointments and prescriptions, while administrators coordinate doctors, appointment approvals, and platform-level operations.",
      },
      {
        title: "Scalable Backend Architecture",
        description:
          "The backend is structured using Node.js and Express.js with REST APIs responsible for authentication, profiles, members, appointments, doctors, medical records, and AI interactions. MongoDB provides flexible document-based storage while JWT authentication protects private resources. The modular separation of routes, controllers, models, and services makes the system easier to maintain and extend with additional healthcare features.",
      },
      {
        title: "Secure Authentication",
        description:
          "The authentication layer supports both Email OTP and Google OAuth to provide users with multiple secure login options. JWT tokens are used to maintain authenticated sessions and protect private API resources. User roles and authorization rules are checked on protected routes to ensure that sensitive healthcare functionality is accessible only to the appropriate account type.",
      },
    ],

    takeaways: [
      "This comprehensive full-stack project significantly deepened my practical expertise in modern MERN development, allowing me to architect an end-to-end solution integrating AI-assisted healthcare workflows, robust role-based access control, secure REST API architecture, and efficient MongoDB database management. Throughout the build, I gained hands-on experience implementing multi-layered authentication via Email OTP and Google OAuth, complex family member management systems, secure cloud-based medical document storage, AI-powered doctor matching, appointment approval pipelines, and dynamically generated prescription PDFs. On the frontend, I elevated user engagement and application scalability by engineering fully responsive React interfaces, managing complex global state with Redux Toolkit, building modular reusable components, and seamlessly integrating fluid GSAP animations into a clean, maintainable architecture.",
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
