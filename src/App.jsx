import React, { useEffect } from "react";
import Root from "./layout/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import Projects from "./Pages/Projects";
import ReviewForm from "./Pages/ReviewForm";
import ProjectDetails from "./Pages/ProjectDetails";
import { Toaster, toast } from "sonner";
import Blogs from "./Pages/Blogs";
import MernArchitectire from "./blog/AllBlogs/MernArchitectire";
import AdvanceTailwind from "./blog/AllBlogs/AdvanceTailwind";

const App = () => {
  const { mode } = useSelector((state) => state.theme);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/contact", element: <Contact /> },
        { path: "/projects", element: <Projects /> },
        { path: "/blogs", element: <Blogs /> },
        { path: "/review/form", element: <ReviewForm /> },
        { path: "project/:id", element: <ProjectDetails /> },
        // BLOG ROUTES
        { path: "blog/mern-architecture", element: <MernArchitectire /> },
        { path: "blog/advance-tailwind", element: <AdvanceTailwind /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
      <Toaster position="top-right" richColors />
    </>
  );
};

export default App;
