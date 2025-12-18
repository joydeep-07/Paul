import portfolio from '../assets/thumbnail/portfolio.png'
import medcare from "../assets/thumbnail/medcare.png";
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
    liveLink: "https://medcare-book-appointments.netlify.app/",
    githubLink: "https://github.com/username/medical-appointment",
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
    liveLink: "https://example.com",
    githubLink: "https://github.com/username/auth-system",
    thumbnail:
      "https://i.pinimg.com/736x/6c/39/c2/6c39c2a0c6c5501420bf6a6284fa1b92.jpg",
  },
];
