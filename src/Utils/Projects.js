import portfolio from '../assets/thumbnail/portfolio.png'
import medcare from "../assets/thumbnail/medcare.png";
export const projects = [
  {
    id: 1,
    title: "Medical Appointment Booking System",
    shortDescription:
      "Full-stack MERN application for booking doctor appointments",
    description:
      "The Medical Appointment Booking Website is a full-stack web application designed to simplify and modernize the process of scheduling healthcare appointments through a secure, efficient, and user-friendly digital platform. Built using the MERN stack—MongoDB, Express.js, React, and Node.js—the application follows a modular and scalable architecture that ensures smooth interaction between the frontend interface and backend services. The frontend is developed with React, enabling a fast, responsive, and intuitive user experience, while the backend is powered by Node.js and Express.js to handle server-side logic, API endpoints, authentication, and data processing. MongoDB is used as the primary database to store user information, appointment records, doctor availability, and role-based data in a structured and flexible manner. One of the core highlights of the system is its real-time appointment slot management, which ensures that once a time slot is booked by a patient, it becomes instantly unavailable to others, effectively preventing double bookings and maintaining data consistency across the platform. The application incorporates a secure authentication system that allows users to register and log in safely, with role-based access control to differentiate between patients, administrators, and other authorized users. This role segregation ensures that each user type has access only to the features relevant to them, such as appointment booking for patients and appointment management or oversight capabilities for administrators. To enhance reliability and user trust, the system integrates automated email notifications using Nodemailer, sending confirmation emails immediately after a successful appointment booking, along with essential appointment details. The project emphasizes real-world usability by addressing common challenges faced in traditional appointment systems, such as long waiting times, manual scheduling errors, and lack of instant confirmation. From a technical perspective, the application demonstrates effective API design, asynchronous data handling, and secure communication between client and server. Error handling, validation, and clean data flow are carefully implemented to ensure a stable and seamless experience. The overall design focuses on clarity, accessibility, and performance, making it suitable for both desktop and mobile users. By combining real-time functionality, secure authentication, and automated communication within a modern full-stack framework, the Medical Appointment Booking Website serves as a practical and scalable solution for healthcare appointment management while showcasing the integration of multiple advanced web development concepts into a cohesive, production-ready application.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Nodemailer",
    ],
    features: [
      "Real-time appointment slot updates",
      "Doctor & patient role-based authentication",
      "Email confirmation on booking",
      "Admin dashboard for managing doctors and slots",
      "Secure JWT-based authentication",
    ],
    role: "Full Stack Developer",
    category: "Web Application",
    status: "Completed",
    year: 2024,
    liveLink: "https://medcare-book-appointments.netlify.app/",
    githubLink: "",
    thumbnail: medcare,
  },
  {
    id: 2,
    title: "Portfolio Website",
    shortDescription: "Animated personal portfolio built with React",
    description:
      "This portfolio website is a modern, performance-focused web application built to showcase projects, skills, and experience through a clean, interactive, and visually engaging interface. The primary goal of the website is not just to present information, but to create an immersive browsing experience that reflects modern web standards and best development practices. The website is developed using React as the core framework, enabling a component-based architecture that ensures scalability, reusability, and maintainability. Each section of the site—such as the hero, projects, experience, and contact areas—is built as an independent, reusable component, allowing for clean separation of concerns and easier future enhancements. Routing is handled efficiently to provide smooth navigation without full page reloads, creating a seamless single-page application experience. For styling, Tailwind CSS is used to implement a consistent and scalable design system. Utility-first classes allow precise control over spacing, typography, layout, and responsiveness while keeping the CSS footprint minimal. Custom CSS variables are integrated for colors, gradients, and theme control, making it easy to support light and dark modes while maintaining visual consistency across the site. The layout is fully responsive and optimized for all screen sizes, from mobile devices to large desktop displays. To enhance user engagement, the website incorporates GSAP (GreenSock Animation Platform) for high-performance animations. Animations are used thoughtfully to guide user attention rather than distract from content. Scroll-triggered transitions, smooth entrances, and subtle motion effects bring the interface to life while maintaining excellent performance. GSAP ensures animations remain smooth even on complex layouts, providing a polished, premium feel. Performance and accessibility are treated as key priorities throughout development. Components are structured efficiently to reduce unnecessary re-renders, and assets are optimized for faster load times. Semantic HTML elements and accessible color contrasts are used to improve readability and usability for all users. The site is designed to feel fast, responsive, and intuitive, regardless of device or connection speed. Overall, this portfolio website serves as both a personal showcase and a technical demonstration. It highlights modern frontend development techniques, clean UI design, and animation-driven interaction, all while maintaining scalability and maintainability. Built with React, Tailwind CSS, and GSAP, the website reflects a balance between aesthetics and functionality, offering visitors a smooth, engaging, and professional experience.",
    techStack: ["React", "Framer Motion", "Tailwind CSS"],
    features: [
      "Scroll-based animations",
      "Responsive layout",
      "Reusable component architecture",
      "Dark-themed UI",
    ],
    role: "Frontend Developer",
    category: "Portfolio",
    status: "Live",
    year: 2024,
    liveLink: "https://paulhere.netlify.app/",
    githubLink: "",
    thumbnail: portfolio,
  },
  {
    id: 3,
    title: "Authentication System",
    shortDescription: "Secure login & signup system",
    description:
      "Authentication system with JWT, protected routes, and password encryption for modern web applications.",
    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Bcrypt"],
    features: [
      "JWT-based authentication",
      "Protected routes",
      "Password hashing",
      "Session handling",
    ],
    role: "Backend + Frontend Developer",
    category: "Authentication",
    status: "Completed",
    year: 2023,
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/auth-system",
    thumbnail:
      "https://i.pinimg.com/736x/6c/39/c2/6c39c2a0c6c5501420bf6a6284fa1b92.jpg",
  },
];
