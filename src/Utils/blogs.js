import ui1 from '../assets/blog/ui.jpg'
import ui2 from '../assets/blog/ui2.jpg'

export const blogs = [
  {
    id: 1,
    slug: "scalable-mern-architecture",
    title: "Designing Scalable MERN Architecture for Production Apps",
    img: ui1,
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

  {
    id: 2,
    slug: "jwt-authentication-guide",
    title: "JWT Authentication Explained for MERN Developers",
    img: ui2,
    shortDescription:
      "A complete beginner-to-advanced guide on implementing secure JWT authentication in MERN applications.",
    blog: `
This guide explains how JWT works internally, how tokens are generated,
verified, and stored securely. We implement login, registration,
protected routes, and role-based access control.

Security best practices like token expiration and HTTP-only cookies
are also covered.
    `,
    category: "Security",
    tags: ["JWT", "Authentication", "Node.js", "Security"],
    readTime: "6 min read",
    date: "Jan 2026",
    featured: false,
  },

 
];
