import React from "react";
import movieDetail from "../assets/thumbnail/movie.png";
import seatLayout from "../assets/thumbnail/movie1.png";
import mybookings from "../assets/thumbnail/movie2.png";
import ProjectTitle from "../Components/ProjectTitle";

const BookMyTicket = () => {
  return (
    <section
      className="px-5 md:px-14 py-16 space-y-24"
      style={{
        backgroundColor: "var(--bg-main)",
        color: "var(--text-main)",
      }}
    >
      {/* Project Title */}
      <ProjectTitle
        name="Book My Ticket"
        description="Book My Ticket is a modern, user-centric movie ticket booking platform
        developed using Vite and React. The application is built with a strong
        focus on reusable components, clean UI architecture, and real-world
        booking workflows. Secure authentication is handled using Clerk, while
        Tailwind CSS and custom CSS variables ensure a responsive and consistent
        design across light and dark modes."
      />

      {/* Overview */}
      <div
        className="p-6 md:p-8 rounded-2xl space-y-5"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-light)",
        }}
      >
        <h3
          className="text-xl font-semibold"
          style={{ color: "var(--accent-primary)" }}
        >
          Project Overview
        </h3>

        <p style={{ color: "var(--text-secondary)" }}>
          <strong style={{ color: "var(--accent-secondary)" }}>
            Book My Ticket
          </strong>{" "}
          is designed to replicate a real-world cinema booking experience. From
          browsing movies to selecting seats and reviewing booking history, the
          platform provides a smooth and intuitive user journey.
        </p>

        <p style={{ color: "var(--text-secondary)" }}>
          The project demonstrates strong frontend fundamentals including
          component reusability, state-driven UI updates, authentication flows,
          and responsive layout design. Every feature is built with scalability
          and maintainability in mind.
        </p>

        <ul className="grid sm:grid-cols-2 gap-3 text-sm">
          {[
            "High-performance setup using Vite + React",
            "Reusable and modular component-based architecture",
            "Secure authentication and protected routes via Clerk",
            "Fully responsive design with Tailwind CSS",
            "Custom theming using CSS variables for light/dark mode",
            "Clean and accessible UI with consistent spacing and typography",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className="mt-2 w-2 h-2 rounded-full"
                style={{ backgroundColor: "var(--accent-primary)" }}
              />
              <span style={{ color: "var(--text-secondary)" }}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Movie Details */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={movieDetail}
          alt="Movie Details Page"
          className="rounded-2xl border"
          style={{ borderColor: "var(--border-light)" }}
        />

        <div className="space-y-5">
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight"
            style={{ color: "var(--accent-primary)" }}
          >
            Movie Details & Show Information
          </h2>

          <p style={{ color: "var(--text-secondary)" }}>
            The movie details section acts as the discovery layer of the
            application. Users can explore movies with visually rich thumbnails,
            descriptions, genres, duration, and show timings, all presented in a
            structured and readable format.
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            Each movie card is powered by reusable React components, ensuring
            consistent UI patterns across the application. This approach makes
            it easy to add new movies or extend features without rewriting
            existing code.
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            The responsive grid layout automatically adapts to different screen
            sizes, maintaining visual hierarchy and usability on mobile, tablet,
            and desktop devices.
          </p>
        </div>
      </div>

      {/* Seat Selection */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-5 order-2 md:order-1">
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight"
            style={{ color: "var(--accent-primary)" }}
          >
            Interactive Seat Selection
          </h2>

          <p style={{ color: "var(--text-secondary)" }}>
            The seat selection interface simulates a real cinema seating layout
            with clear visual cues for available, selected, and booked seats.
            This helps users make quick and confident booking decisions.
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            Advanced React state management ensures that seat selections are
            updated instantly. The UI provides immediate feedback for every
            interaction, preventing double bookings and improving accuracy.
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            The component is designed to be reusable and extensible, allowing
            future enhancements such as group bookings, seat locking, and price
            calculation logic.
          </p>
        </div>

        <img
          src={seatLayout}
          alt="Seat Selection Layout"
          className="rounded-2xl border order-1 md:order-2"
          style={{ borderColor: "var(--border-light)" }}
        />
      </div>

      {/* My Bookings */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <img
          src={mybookings}
          alt="My Bookings Page"
          className="rounded-2xl border"
          style={{ borderColor: "var(--border-light)" }}
        />

        <div className="space-y-5">
          <h2
            className="text-2xl md:text-3xl font-semibold tracking-tight"
            style={{ color: "var(--accent-primary)" }}
          >
            Secure Booking History & User Dashboard
          </h2>

          <p style={{ color: "var(--text-secondary)" }}>
            The My Bookings section provides users with a centralized dashboard
            where all booking information is stored securely. Each entry
            displays movie details, seat numbers, show timings, and booking
            status.
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            Clerk authentication ensures that only authorized users can access
            their booking data. Protected routes prevent unauthorized access and
            enhance overall application security.
          </p>

          <p style={{ color: "var(--text-secondary)" }}>
            This section reinforces real-world application concepts such as user
            session management, data privacy, and authenticated UI rendering.
          </p>
        </div>
      </div>

      {/* Technical Summary */}
      <div
        className="p-6 md:p-8 rounded-2xl space-y-4"
        style={{
          backgroundColor: "var(--bg-secondary)",
          border: "1px solid var(--border-light)",
        }}
      >
        <h3
          className="text-xl font-semibold"
          style={{ color: "var(--accent-primary)" }}
        >
          Technical Implementation Summary
        </h3>

        <p style={{ color: "var(--text-secondary)" }}>
          The application is built using React functional components and hooks,
          ensuring clean state management and predictable UI behavior. Vite
          provides fast development builds and optimized production output.
        </p>

        <p style={{ color: "var(--text-secondary)" }}>
          Tailwind CSS combined with custom CSS variables enables consistent
          theming, smooth transitions between light and dark modes, and a
          responsive mobile-first layout that performs well across all devices.
        </p>

        <p style={{ color: "var(--text-secondary)" }}>
          This project highlights practical frontend engineering skills,
          including component design, authentication workflows, and scalable UI
          architecture.
        </p>
      </div>
    </section>
  );
};

export default BookMyTicket;
