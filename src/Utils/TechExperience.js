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

export const libraries = [
  {
    id: 1,
    name: "React",
    description:
      "A powerful JavaScript library for building fast, scalable, and component-based user interfaces with a declarative approach.",
    points: [
      "Component-based architecture",
      "Virtual DOM for performance",
      "Reusable UI components",
      "Strong ecosystem & community",
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
      "Declarative animations",
      "Layout & shared transitions",
      "Gesture support (drag, hover)",
      "Easy integration with React",
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
      "Timeline-based animations",
      "High performance",
      "Precise control over motion",
      "Framework-agnostic",
    ],
    url: "https://gsap.com/",
    icon: SiGreensock,
  },
  {
    id: 4,
    name: "GSAP ScrollTrigger",
    description:
      "A GSAP plugin that allows animations to be precisely controlled based on scroll position.",
    points: [
      "Scroll-based animation control",
      "Pin & scrub animations",
      "Smooth parallax effects",
      "Works perfectly with GSAP timelines",
    ],
    url: "https://gsap.com/scrolltrigger/",
    icon: SiScrollreveal,
  },
  {
    id: 5,
    name: "AOS (Animate On Scroll)",
    description:
      "A lightweight animation library that triggers smooth entrance animations when elements scroll into view.",
    points: [
      "Easy to use",
      "Scroll-triggered animations",
      "Lightweight",
      "Minimal configuration",
    ],
    url: "https://michalsnik.github.io/aos/",
    icon: MdAnimation,
  },
  {
    id: 6,
    name: "Axios",
    description:
      "A promise-based HTTP client used for making API requests and handling network communication efficiently.",
    points: [
      "Promise-based API",
      "Request & response interceptors",
      "Automatic JSON handling",
      "Better error handling than fetch",
    ],
    url: "https://axios-http.com/",
    icon: SiAxios,
  },
  {
    id: 7,
    name: "TanStack Query (React Query)",
    description:
      "A powerful data-fetching and state management library for server-state handling.",
    points: [
      "Automatic caching",
      "Background refetching",
      "Optimistic updates",
      "Reduces API boilerplate",
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
      "Static type checking",
      "Better IDE support",
      "Scalable large applications",
      "Fewer runtime bugs",
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
      "Server-side rendering",
      "File-based routing",
      "API routes",
      "SEO-friendly",
    ],
    url: "https://nextjs.org/",
    icon: SiNextdotjs,
  },
];
