import ui1 from "../assets/blog/ui.jpg";
import ui2 from "../assets/blog/ui2.jpg";
import second from "../assets/blog/python.jpg";

export const blogs = [
  {
    id: 1,
    slug: "mern-architecture",
    title: "Designing Scalable MERN Architecture for Production Apps",
    img: ui2,
    shortDescription:
      "Learn how to structure large-scale MERN applications using clean architecture, modular folders, and scalable backend design.",
    blog: `
In this article, we explore how to structure a production-ready MERN stack application.
We discuss backend modularization, scalable folder structures, service layers,
authentication handling, and environment configuration strategies.

You'll also learn how to separate concerns between controllers, routes,
middlewares, and services for long-term maintainability.
    `,
    category: "MERN",
    tags: ["MongoDB", "Express", "React", "Node.js", "Architecture"],
    readTime: "8 min read",
    date: "Feb 2026",
    featured: true,
  },

//   {
//     id: 2,
//     slug: "python",
//     title: "Core Python for Beginners",
//     img: second,
//     shortDescription:
//       "Understand variables, loops, functions, lists, dictionaries, and object-oriented programming concepts in Core Python.",
//     blog: `
// Core Python forms the foundation of modern software development,
// automation, data science, and backend engineering.

// In this article, we explore important Python fundamentals including variables,
// data types, conditional statements, loops, functions, lists, tuples,
// dictionaries, and file handling.

// You'll also learn how object-oriented programming works in Python using
// classes, constructors, inheritance, and encapsulation concepts.

// By mastering Core Python, developers can build strong programming logic
// and prepare themselves for advanced technologies like web development,
// machine learning, and automation.
//     `,
//     category: "Python",
//     tags: ["Python", "Core Python", "Programming", "Functions", "OOP"],
//     readTime: "1 hr 30 min read",
//     date: "Mar 2026",
//     featured: false,
//   },
];
