import { FaReact, FaNodeJs, FaPython } from "react-icons/fa";

import {
  SiFramer,
  SiAxios,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMui,
  SiBootstrap,
  SiC,
} from "react-icons/si";

export const libraries = [
  {
    id: 4,
    name: "MongoDB",
    description:
      "A NoSQL database designed for modern applications with flexible document-based data storage.",
    points: [
      "Stores data in JSON-like documents",
      "Highly scalable database system",
      "Flexible schema structure",
      "Excellent for real-time applications",
      "Works perfectly with Node.js",
      "Efficient querying and indexing",
      "Core database of the MERN stack",
    ],
    url: "https://www.mongodb.com/",
    icon: SiMongodb,
  },

  {
    id: 3,
    name: "Express.js",
    description:
      "A minimal and flexible Node.js framework used for building powerful backend APIs and web applications.",
    points: [
      "Simplifies backend server development",
      "Fast routing and middleware support",
      "Ideal for REST API creation",
      "Works seamlessly with MongoDB",
      "Lightweight and highly scalable",
      "Supports authentication and middleware",
      "Widely used in MERN stack applications",
    ],
    url: "https://expressjs.com/",
    icon: SiExpress,
  },
  {
    id: 1,
    name: "React.js",
    description:
      "A powerful JavaScript library for building fast, scalable, and component-based user interfaces with a declarative approach.",
    points: [
      "Component-based architecture for better code organization",
      "Virtual DOM ensures efficient UI updates and performance",
      "Reusable UI components reduce development time",
      "Strong ecosystem with thousands of libraries",
      "Hooks API for managing state and side effects",
      "Unidirectional data flow improves predictability",
      "Perfect for building single-page applications",
    ],
    url: "https://react.dev/",
    icon: FaReact,
  },
  {
    id: 5,
    name: "Node.js",
    description:
      "A fast and scalable JavaScript runtime environment used for backend development and server-side applications.",
    points: [
      "Runs JavaScript outside the browser",
      "Event-driven and non-blocking architecture",
      "Excellent for scalable applications",
      "Huge npm ecosystem support",
      "Efficient for APIs and real-time apps",
      "Works seamlessly with Express.js",
      "Perfect for full-stack JavaScript development",
    ],
    url: "https://nodejs.org/",
    icon: FaNodeJs,
  },

  {
    id: 2,
    name: "Framer Motion",
    description:
      "A production-ready animation library for React that enables smooth UI transitions, gestures, and interactive animations with minimal code.",
    points: [
      "Declarative animation syntax integrated with React",
      "Layout and shared element transitions",
      "Gesture support like drag, hover, and tap",
      "Smooth enter and exit animations with AnimatePresence",
      "Spring-based physics animations",
      "Works seamlessly with React components",
      "Ideal for modern interactive UI/UX",
    ],
    url: "https://www.framer.com/motion/",
    icon: SiFramer,
  },

  {
    id: 6,
    name: "Material UI",
    description:
      "A modern React UI framework that provides beautiful, responsive, and production-ready components.",
    points: [
      "Pre-designed professional UI components",
      "Fully responsive design system",
      "Easy customization with themes",
      "Improves development speed",
      "Built specifically for React",
      "Accessible and optimized components",
      "Perfect for dashboards and modern apps",
    ],
    url: "https://mui.com/",
    icon: SiMui,
  },

  {
    id: 7,
    name: "Bootstrap",
    description:
      "A popular CSS framework used for building responsive and mobile-first websites quickly.",
    points: [
      "Responsive grid system",
      "Prebuilt UI components",
      "Easy mobile-first development",
      "Fast styling and prototyping",
      "Large community support",
      "Cross-browser compatibility",
      "Perfect for modern responsive websites",
    ],
    url: "https://getbootstrap.com/",
    icon: SiBootstrap,
  },

  {
    id: 8,
    name: "C Programming",
    description:
      "A foundational programming language known for performance, efficiency, and low-level system programming.",
    points: [
      "Fast and efficient execution",
      "Strong programming fundamentals",
      "Used in operating systems and embedded systems",
      "Memory management with pointers",
      "Procedural programming approach",
      "Excellent for problem-solving skills",
      "Foundation for many modern languages",
    ],
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
    icon: SiC,
  },

  {
    id: 9,
    name: "Python",
    description:
      "A versatile and beginner-friendly programming language widely used in automation, AI, web development, and data science.",
    points: [
      "Simple and readable syntax",
      "Huge ecosystem of libraries",
      "Popular in AI and machine learning",
      "Used for automation and scripting",
      "Supports web and backend development",
      "Great for data analysis and visualization",
      "One of the most in-demand languages",
    ],
    url: "https://www.python.org/",
    icon: FaPython,
  },

  {
    id: 10,
    name: "Axios",
    description:
      "A promise-based HTTP client used for making API requests and handling network communication efficiently.",
    points: [
      "Promise-based API for async requests",
      "Request and response interceptors",
      "Automatic JSON transformation",
      "Better error handling compared to fetch",
      "Supports request cancellation",
      "Works well with REST APIs",
      "Widely used in production apps",
    ],
    url: "https://axios-http.com/",
    icon: SiAxios,
  },

  {
    id: 11,
    name: "TypeScript",
    description:
      "A strongly typed superset of JavaScript that improves code quality and maintainability.",
    points: [
      "Static type checking at compile time",
      "Early detection of bugs",
      "Excellent IDE autocomplete and tooling",
      "Improves code readability",
      "Scales well for large applications",
      "Better collaboration in teams",
      "Industry standard for modern apps",
    ],
    url: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
];
