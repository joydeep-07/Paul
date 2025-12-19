import { FaReact } from "react-icons/fa";
import {
  SiFramer,
  SiGreensock,
  SiAxios,
  SiReactquery,
  SiTypescript,
  SiNextdotjs,
  SiScrollreveal,
} from "react-icons/si";
import { MdAnimation } from "react-icons/md";
import react from '../assets/logo/react.jpg'
import { IoCheckmarkDone } from "react-icons/io5";
export const libraries = [
  {
    id: 1,
    name: "React",
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
    id: 3,
    name: "GSAP",
    description:
      "A high-performance JavaScript animation library used for creating complex, timeline-based animations with unmatched smoothness and control.",
    points: [
      "Timeline-based animation control",
      "Extremely high performance even on complex animations",
      "Frame-perfect precision",
      "Works with any JavaScript framework",
      "Advanced easing and motion curves",
      "Ideal for complex UI and motion-heavy websites",
      "Industry standard for professional animations",
    ],
    url: "https://gsap.com/",
    icon: SiScrollreveal,
  },
  // {
  //   id: 4,
  //   name: "GSAP ScrollTrigger",
  //   description:
  //     "A GSAP plugin that allows animations to be precisely controlled based on scroll position.",
  //   points: [
  //     "Scroll-based animation triggering",
  //     "Pin elements during scroll",
  //     "Scrub animations tied to scroll position",
  //     "Create immersive parallax effects",
  //     "Works perfectly with GSAP timelines",
  //     "Fine-grained control over animation timing",
  //     "Ideal for storytelling and portfolio websites",
  //   ],
  //   url: "https://gsap.com/scrolltrigger/",
  //   icon: SiScrollreveal,
  // },
  
  // {
  //   id: 5,
  //   name: "AOS (Animate On Scroll)",
  //   description:
  //     "A lightweight animation library that triggers smooth entrance animations when elements scroll into view.",
  //   points: [
  //     "Very easy to set up and use",
  //     "Scroll-triggered entrance animations",
  //     "Lightweight and performance-friendly",
  //     "Minimal configuration required",
  //     "Supports fade, zoom, slide animations",
  //     "Good for simple UI animations",
  //     "Perfect for landing pages",
  //   ],
  //   url: "https://michalsnik.github.io/aos/",
  //   icon: MdAnimation,
  // },
  {
    id: 6,
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
    id: 7,
    name: "TanStack Query",
    description:
      "A powerful data-fetching and state management library for server-state handling.",
    points: [
      "Automatic caching and cache invalidation",
      "Background data refetching",
      "Optimistic UI updates",
      "Reduces API-related boilerplate",
      "Built-in loading and error states",
      "Improves app performance",
      "Perfect for scalable React apps",
    ],
    url: "https://tanstack.com/query/latest",
    icon: SiReactquery,
  },
  {
    id: 8,
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
  {
    id: 9,
    name: "Next.js",
    description:
      "A React framework for building production-grade applications with performance optimizations.",
    points: [
      "Server-side rendering for better SEO",
      "Static site generation support",
      "File-based routing system",
      "Built-in API routes",
      "Automatic code splitting",
      "Optimized image handling",
      "Ideal for full-stack React apps",
    ],
    url: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
];
