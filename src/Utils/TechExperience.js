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
// import { TbScroll } from "react-icons/tb";

export const libraries = [
  {
    id: 1,
    name: "React",
    description:
      "A powerful JavaScript library for building fast, scalable, and component-based user interfaces with a declarative approach.",
    url: "https://react.dev/",
    icon: FaReact,
  },
  {
    id: 2,
    name: "Framer Motion",
    description:
      "A production-ready animation library for React that enables smooth UI transitions, gestures, and interactive animations with minimal code.",
    url: "https://www.framer.com/motion/",
    icon: SiFramer,
  },
  {
    id: 3,
    name: "GSAP",
    description:
      "A high-performance JavaScript animation library used for creating complex, timeline-based animations with unmatched smoothness and control.",
    url: "https://gsap.com/",
    icon: SiGreensock,
  },
  {
    id: 4,
    name: "GSAP ScrollTrigger",
    description:
      "A GSAP plugin that allows animations to be precisely controlled based on scroll position, enabling immersive scroll-based experiences.",
    url: "https://gsap.com/scrolltrigger/",
    icon: SiScrollreveal,
  },
  {
    id: 5,
    name: "AOS (Animate On Scroll)",
    description:
      "A lightweight animation library that triggers smooth entrance animations when elements scroll into view.",
    url: "https://michalsnik.github.io/aos/",
    icon: MdAnimation,
  },
  {
    id: 6,
    name: "Axios",
    description:
      "A promise-based HTTP client used for making API requests, handling interceptors, and managing network communication efficiently.",
    url: "https://axios-http.com/",
    icon: SiAxios,
  },
  {
    id: 7,
    name: "TanStack Query (React Query)",
    description:
      "A powerful data-fetching and state management library that simplifies server-state handling, caching, and synchronization.",
    url: "https://tanstack.com/query/latest",
    icon: SiReactquery,
  },
  {
    id: 8,
    name: "TypeScript",
    description:
      "A strongly typed superset of JavaScript that improves code quality, maintainability, and scalability through static type checking.",
    url: "https://www.typescriptlang.org/",
    icon: SiTypescript,
  },
  {
    id: 9,
    name: "Next.js",
    description:
      "A React framework for building production-grade applications with server-side rendering, static generation, routing, and performance optimizations.",
    url: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
];
