# Joydeep Paul — Developer Portfolio

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/GSAP-Animation-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Framer_Motion-Animation-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Redux_Toolkit-State_Management-764ABC?style=for-the-badge&logo=redux&logoColor=white" alt="Redux Toolkit" />
  <img src="https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Node.js-Backend-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-API-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/Groq-AI_Assistant-F55036?style=for-the-badge" alt="Groq" />
</p>

<p align="center">
  <strong>A modern, interactive and AI-powered developer portfolio built with React.</strong>
</p>

<p align="center">
  <a href="https://paulhere.netlify.app" target="_blank">Live Website</a>
  •
  <a href="https://github.com/joydeep-07" target="_blank">GitHub</a>
  •
  <a href="https://linkedin.com/in/joydeep-paul-06b37926" target="_blank">LinkedIn</a>
</p>

---

## Overview

This is my personal developer portfolio, built to showcase my skills, projects, experience, and approach to modern web development.

Instead of creating a simple static portfolio, I designed the website as an interactive web application with smooth animations, responsive layouts, dynamic content, state management, backend integration, and an AI-powered personal assistant.

The frontend is built with **Vite and React**, styled using **Tailwind CSS**, and enhanced with **GSAP** and **Framer Motion** for animations and interactions.

The website also integrates **Redux Toolkit** for state management and **Supabase** for handling dynamic data such as contact messages, reviews, and subscribers.

A dedicated **Node.js + Express.js backend** powers the AI assistant, which uses the **Groq API** along with a custom portfolio knowledge system to answer questions about me and my work.

---

## Live Demo

<p align="center">
  <a href="https://paulhere.netlify.app">
    <img src="https://img.shields.io/badge/Visit_Portfolio-000000?style=for-the-badge&logo=netlify&logoColor=white" alt="Visit Portfolio" />
  </a>
</p>

**Live Website:** https://paulhere.netlify.app

---

## Features

### Modern & Responsive UI

* Fully responsive design
* Desktop, tablet and mobile layouts
* Light and dark theme
* Clean and minimal interface
* Responsive navigation
* Interactive project showcase
* Custom cursor interactions
* Smooth scrolling
* Mobile-optimized experience

### Advanced Animations

The portfolio uses multiple animation technologies to create a smooth and interactive experience.

**GSAP**

Used for:

* Scroll-based animations
* ScrollTrigger effects
* Timeline animations
* Interactive elements
* Cursor interactions
* Section transitions

**Framer Motion**

Used for:

* Component animations
* Page transitions
* Entrance and exit animations
* Micro-interactions
* Interactive UI elements

**Lenis**

Used to provide smooth scrolling throughout the website.

---

## AI-Powered Portfolio Assistant

One of the main features of this portfolio is a custom AI assistant that allows visitors to interact with my portfolio using natural language.

Visitors can ask questions such as:

```text
Who is Joydeep?

What technologies does Joydeep use?

Tell me about NeuroCare.

What projects has Joydeep built?

How can I download the resume?

What is Joydeep's frontend experience?

How can I contact Joydeep?
```

The assistant is powered by the **Groq API** and communicates with a dedicated **Node.js + Express.js backend**.

Rather than sending every question directly to the AI model, the backend first searches a custom knowledge base containing information about my:

* Profile
* Skills
* Technologies
* Education
* Experience
* Projects
* Contact information
* Resume
* Portfolio

Relevant information is then provided to the AI as context before generating the final response.

---

## AI Assistant Architecture

```text
                    USER
                      │
                      ▼
             ┌─────────────────┐
             │  React Chat UI  │
             └────────┬────────┘
                      │
                      │ POST /api/chat
                      ▼
             ┌─────────────────┐
             │ Express Server  │
             │    Node.js      │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Knowledge       │
             │ Service         │
             └────────┬────────┘
                      │
              ┌───────┴────────┐
              │                │
              ▼                ▼
       Topic Matching    Keyword Matching
              │                │
              └───────┬────────┘
                      ▼
              Relevant Context
                      │
                      ▼
             ┌─────────────────┐
             │    Groq API     │
             │   AI Model      │
             └────────┬────────┘
                      │
                      ▼
                AI Response
                      │
                      ▼
             ┌─────────────────┐
             │  React Chat UI  │
             └─────────────────┘
```

---

## Knowledge Retrieval

The backend contains a dedicated knowledge service that analyzes incoming questions and retrieves the most relevant portfolio information.

The retrieval process includes:

1. Normalizing the user's question.
2. Extracting relevant words.
3. Matching the question against knowledge topics.
4. Matching relevant keywords.
5. Assigning relevance scores.
6. Selecting the most relevant information.
7. Passing that context to the Groq model.
8. Returning the generated response to the frontend.

This makes the assistant more focused on portfolio-related information instead of behaving like a generic chatbot.

---

## Supabase Integration

Supabase is used to provide dynamic backend functionality for the portfolio.

Current use cases include:

* Contact messages
* Visitor reviews / feedback
* Newsletter subscribers

This allows the portfolio to handle real user interactions while keeping the frontend architecture clean and maintainable.

---

## Tech Stack

### Frontend

| Technology         | Usage                         |
| ------------------ | ----------------------------- |
| React              | UI development                |
| Vite               | Development and build tooling |
| JavaScript         | Application logic             |
| Tailwind CSS       | Styling and responsive design |
| React Router       | Client-side routing           |
| GSAP               | Advanced animations           |
| GSAP ScrollTrigger | Scroll-based animations       |
| Framer Motion      | UI animations                 |
| Lenis              | Smooth scrolling              |
| Redux Toolkit      | State management              |
| MUI                | Selected UI components        |
| Lucide React       | Icons                         |
| Sonner             | Notifications                 |

### Backend

| Technology   | Usage                      |
| ------------ | -------------------------- |
| Node.js      | Backend runtime            |
| Express.js   | REST API                   |
| Groq API     | AI assistant               |
| CORS         | Cross-origin communication |
| Express JSON | Request handling           |

### Backend Services

| Technology | Usage                             |
| ---------- | --------------------------------- |
| Supabase   | Data storage and backend services |
| Netlify    | Frontend deployment               |
| Render     | AI backend deployment             |

---

## Project Structure

```text
portfolio/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── Components/
│   │   ├── Navbar/
│   │   ├── Footer/
│   │   ├── Chat/
│   │   ├── ThemeToggle/
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Projects/
│   │   ├── Contact/
│   │   └── AIChat/
│   │
│   ├── redux/
│   │   ├── authSlice
│   │   ├── themeSlice
│   │   └── store
│   │
│   ├── data/
│   ├── routes/
│   ├── App.jsx
│   └── main.jsx
│
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── data/
│   │   └── knowledge.json
│   ├── server.js
│   └── ...
│
├── .env
├── package.json
├── vite.config.js
└── README.md
```

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/joydeep-07/paulhere.git
```

### Install Frontend Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file in the frontend:

```env
VITE_BACKEND_API_URL=your_backend_url
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## Running the Frontend

Start the Vite development server:

```bash
npm run dev
```

The application will be available on the local development URL provided by Vite.

---

## Running the AI Backend

Navigate to the backend:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Create the backend environment file:

```env
GROQ_API_KEY=your_groq_api_key
PORT=5000
```

Start the backend:

```bash
npm run dev
```

Or:

```bash
node server.js
```

---

## API

The AI assistant communicates with the backend through:

```text
POST /api/chat
```

Example request:

```json
{
  "question": "What technologies does Joydeep use?"
}
```

The backend processes the question, retrieves relevant information from the knowledge base, sends the context to Groq, and returns the generated response.

---

## Featured Projects

### NeuroCare

**AI-Powered Healthcare Platform**

A full-stack MERN healthcare platform designed to connect patients with suitable doctors through intelligent recommendations and appointment management.

Features include:

* Patient registration
* Doctor registration
* Appointment management
* Prescription management
* Role-based access control
* AI-powered doctor recommendations
* Location-aware doctor discovery
* Prescription PDF generation
* Authentication
* Chat functionality

---

### Rentease

**Rental Platform**

A modern React-based rental platform featuring both client and admin experiences.

Highlights include:

* Responsive interface
* Admin dashboard
* Reusable components
* REST API integration
* GSAP animations
* Framer Motion interactions
* Responsive layouts

---

### Bharat Vraman

**Travel & Cultural Exploration Platform**

A visually focused project designed around exploring temples and destinations across India.

The project focuses on:

* Responsive design
* Interactive layouts
* Visual storytelling
* Smooth animations
* Modern React architecture

---

## Design Philosophy

The portfolio is built around three core principles.

### Simplicity

The interface is intentionally clean and avoids unnecessary visual complexity.

### Interaction

Animations and micro-interactions are used to make the website feel dynamic while keeping the experience usable.

### Performance

The application is structured with reusable components, optimized assets, efficient state management, and a performance-conscious animation approach.

The goal is to demonstrate not only the technologies I know, but also how I approach building real-world web applications.

---

## Deployment

The frontend is deployed on **Netlify**.

The AI assistant backend is deployed separately and communicates with the frontend through a REST API.

```text
                   NETLIFY
               React Frontend
                     │
                     │ HTTPS
                     ▼
                   RENDER
             Node + Express API
                     │
                     ▼
                 GROQ API
```

---

## Environment & Security

API keys and sensitive environment variables are not stored directly in the source code.

Environment variables should be configured locally and through the deployment platform.

Example:

```text
.env
.env.local
.env.production
```

These files should never be committed to the repository.

---

## Future Improvements

Some planned improvements include:

* More advanced AI knowledge retrieval
* Semantic search for the AI assistant
* Improved AI conversation handling
* Additional project case studies
* Accessibility improvements
* Further performance optimization
* Enhanced portfolio analytics
* More interactive experiences

---

## About Me

I'm **Joydeep Paul**, a Full Stack Developer with strong frontend expertise and working knowledge of backend MERN development.

I primarily work with:

```text
React.js
JavaScript
TypeScript
Tailwind CSS
GSAP
Framer Motion
Redux Toolkit
```

I also have working knowledge of:

```text
Node.js
Express.js
MongoDB
REST APIs
Authentication
Supabase
```

I enjoy building responsive, interactive, maintainable web applications with a strong focus on user experience, performance, and clean architecture.

---

## Connect With Me

<p align="center">
  <a href="https://paulhere.netlify.app">
    <img src="https://img.shields.io/badge/Portfolio-000000?style=for-the-badge&logo=netlify&logoColor=white" alt="Portfolio" />
  </a>
  <a href="https://github.com/joydeep-07">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/joydeep-paul-06b37926">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
</p>

<p align="center">
  <strong>Portfolio:</strong> <a href="https://paulhere.netlify.app">paulhere.netlify.app</a>
  <br />
  <strong>Email:</strong> joydeeprnp8821@gmail.com
</p>

---

## ⭐ Support

If you found this project interesting, consider giving the repository a star.

Feedback and suggestions are welcome.

---

<p align="center">
  Built with React, creativity, and a lot of code.
</p>

<p align="center">
  © 2026 Joydeep Paul
</p>
