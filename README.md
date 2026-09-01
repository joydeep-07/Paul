# Joydeep Paul : Portfolio

A modern, interactive, and fully responsive developer portfolio built with React and modern web technologies.

The portfolio is designed to showcase my projects, technical skills, experience, education, and development journey through a clean interface, smooth animations, interactive sections, and an AI-powered personal assistant.

**Live Preview:** https://paulhere.netlify.app

---

## About the Project

This portfolio is more than a static personal website. It is built as an interactive web application to demonstrate my frontend development skills along with my working knowledge of backend development and modern full-stack technologies.

The frontend is built using Vite and React, with Tailwind CSS for styling and responsive layouts.

GSAP and Framer Motion are used to create smooth animations, transitions, interactions, and scroll-based effects.

Redux Toolkit is used for application state management, while Supabase provides backend services for dynamic features such as contact messages, reviews, and subscribers.

The portfolio also includes a custom AI-powered assistant built using the Groq API with a Node.js and Express.js backend.

---

## Features

### Modern & Responsive Design

- Fully responsive design
- Desktop, tablet, and mobile support
- Light and dark theme
- Clean and minimal interface
- Responsive navigation
- Interactive project sections
- Custom cursor interactions
- Smooth scrolling
- Mobile-optimized layouts
- Modern animations and transitions

### Smooth Animations

The website uses multiple animation technologies to create an interactive experience.

**GSAP** is used for:

- Scroll-based animations
- ScrollTrigger effects
- Timeline animations
- Interactive elements
- Cursor interactions
- Section transitions

**Framer Motion** is used for:

- Component animations
- Page transitions
- Entrance and exit animations
- Micro-interactions
- Interactive UI elements

**Lenis** is used to provide smooth scrolling throughout the website.

---

## AI-Powered Portfolio Assistant

The portfolio includes a custom AI assistant that allows visitors to interact with my portfolio using natural language.

Visitors can ask questions such as:

- Who is Joydeep?
- What technologies does Joydeep use?
- Tell me about NeuroCare.
- What projects has Joydeep built?
- How can I download the resume?
- What is Joydeep's frontend experience?
- How can I contact Joydeep?

The AI assistant is powered by the **Groq API** and communicates with a dedicated **Node.js + Express.js backend**.

Instead of acting as a generic chatbot, the assistant is designed specifically around my portfolio and professional information.

It can provide information about:

- My profile
- Technical skills
- Projects
- Education
- Experience
- Technologies
- Resume
- Contact information
- Portfolio details

---

## AI Knowledge System

The AI assistant uses a custom knowledge system to provide relevant information to the AI model.

When a user asks a question, the backend:

1. Receives the question from the frontend.
2. Normalizes the user's input.
3. Analyzes the question.
4. Matches relevant topics.
5. Matches relevant keywords.
6. Scores the available knowledge.
7. Selects the most relevant information.
8. Sends the selected context to the Groq API.
9. Generates the final response.
10. Returns the response to the frontend.

This approach helps keep the AI assistant focused on information related to my portfolio instead of generating unrelated answers.

---

## Supabase Integration

Supabase is used for dynamic functionality across the portfolio.

Current use cases include:

- Contact messages
- Reviews and feedback
- Newsletter subscribers

This allows the portfolio to support real user interactions while maintaining a simple and scalable architecture.

---

## Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- Tailwind CSS
- React Router
- GSAP
- GSAP ScrollTrigger
- Framer Motion
- Lenis
- Redux Toolkit
- Material UI
- Lucide React
- Sonner

### Backend

- Node.js
- Express.js
- Groq API
- REST API
- CORS

### Backend Services

- Supabase
- Netlify
- Render

---

## Featured Projects

### NeuroCare

**AI-Powered Healthcare Platform**

NeuroCare is a full-stack MERN healthcare platform designed to connect patients with suitable doctors through intelligent recommendations and appointment management.

Key features include:

- Patient registration
- Doctor registration
- Appointment management
- Prescription management
- Role-based access control
- AI-powered doctor recommendations
- Location-aware doctor discovery
- Prescription PDF generation
- Authentication
- Chat functionality

---

### Rentease

**Rental Platform**

Rentease is a modern React-based rental platform featuring both client-side and admin-side experiences.

Key highlights include:

- Responsive user interface
- Admin dashboard
- Reusable React components
- REST API integration
- GSAP animations
- Framer Motion interactions
- Responsive layouts
- Modern user experience

---

### Bharat Vraman

**Travel & Cultural Exploration Platform**

Bharat Vraman is a travel and cultural exploration project focused on discovering temples and destinations across India.

The project focuses on:

- Responsive design
- Interactive layouts
- Visual storytelling
- Smooth animations
- Modern React architecture
- User-friendly navigation

---

## Design Philosophy

The portfolio follows three main principles.

### Simplicity

The interface is designed to remain clean and easy to navigate without unnecessary visual complexity.

### Interaction

Animations, transitions, and micro-interactions are used to make the website engaging while maintaining usability.

### Performance

The application is developed with reusable components, optimized assets, efficient state management, and a performance-conscious approach to animations.

The goal is to demonstrate not only the technologies I use, but also how I approach building modern web applications.

---

## AI Assistant API

The AI assistant communicates with the backend through a REST API.

The primary endpoint is:

```text
POST /api/chat
```

Example request:

```json
{
  "question": "What technologies does Joydeep use?"
}
```

The backend processes the question, retrieves relevant information from the portfolio knowledge base, sends the contextual information to Groq, and returns the generated response.

---

## Deployment

The portfolio frontend is deployed using **Netlify**.

The AI assistant backend is deployed separately using **Render**.

The frontend communicates with the backend through the configured API URL.

The overall application uses a separate frontend and backend architecture, allowing the portfolio UI and AI services to be maintained independently.

---

## Security

Sensitive credentials are stored using environment variables rather than being hardcoded into the source code.

Environment files should not be committed to the repository.

Example:

```text
.env
.env.local
.env.production
```

API keys, database credentials, and other private configuration values should always remain outside the public repository.

---

## Future Improvements

Planned improvements may include:

- More advanced AI knowledge retrieval
- Semantic search for the AI assistant
- Improved conversational context
- Additional project case studies
- Further accessibility improvements
- Additional performance optimization
- Enhanced portfolio analytics
- More interactive portfolio experiences

---

## About Me

I'm **Joydeep Paul**, a Full Stack Developer with strong frontend expertise and working knowledge of backend MERN development.

My primary frontend technologies include:

**React.js, JavaScript, TypeScript, Tailwind CSS, GSAP, Framer Motion, and Redux Toolkit.**

I also have working knowledge of:

**Node.js, Express.js, MongoDB, REST APIs, authentication, and Supabase.**

I enjoy building responsive, interactive, and maintainable web applications with a strong focus on user experience, performance, clean code, and modern development practices.

---

## Connect With Me

**Portfolio:**  
https://paulhere.netlify.app

**GitHub:**  
https://github.com/joydeep-07

**LinkedIn:**  
https://linkedin.com/in/joydeep-paul-06b37926

**Email:**  
joydeeprnp8821@gmail.com

---

## License

This project is created for personal portfolio and demonstration purposes.

© 2026 Joydeep Paul. All rights reserved.
