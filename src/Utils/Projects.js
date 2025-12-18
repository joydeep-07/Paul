import portfolio from '../assets/thumbnail/portfolio.png'
export const projects = [
  {
    id: 1,
    title: "Medical Appointment Booking System",
    shortDescription:
      "Full-stack MERN application for booking doctor appointments",
    description:
      "A complete medical appointment booking platform with real-time slot availability, authentication, role-based access, and automated email notifications.",
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
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/medical-appointment",
    thumbnail:
      "https://i.pinimg.com/1200x/25/8b/dd/258bdd389d81babe34c65e3a1a5462d0.jpg",
  },
  {
    id: 2,
    title: "Portfolio Website",
    shortDescription: "Animated personal portfolio built with React",
    description:
      "A modern portfolio website showcasing projects, skills, and experience with smooth animations and responsive design.",
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
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/portfolio",
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
    liveLink: "",
    githubLink: "https://github.com/username/auth-system",
    thumbnail:
      "https://i.pinimg.com/736x/6c/39/c2/6c39c2a0c6c5501420bf6a6284fa1b92.jpg",
  },
];
