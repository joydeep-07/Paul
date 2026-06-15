import React, { useEffect, useState } from "react";
import Root from "./layout/Root";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import Projects from "./Pages/Projects";
import ReviewForm from "./Pages/ReviewForm";
import ProjectDetails from "./Pages/ProjectDetails";
import { Toaster } from "sonner";
import Blogs from "./Pages/Blogs";
import MernArchitectire from "./blog/AllBlogs/MernArchitectire";
import AdvanceTailwind from "./blog/AllBlogs/AdvanceTailwind";
import Python from "./blog/AllBlogs/Python";
import PreLoader from "./components/PreLoader";
import { AnimatePresence } from "framer-motion";

const App = () => {
  const { mode } = useSelector((state) => state.theme);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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
        { path: "blog/mern-architecture", element: <MernArchitectire /> },
        { path: "blog/advance-tailwind", element: <AdvanceTailwind /> },
        { path: "blog/python", element: <Python /> },
      ],
    },
  ]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PreLoader key="preloader" />}
      </AnimatePresence>

      <RouterProvider router={router} />

      <Toaster position="top-right" richColors />
    </>
  );
};

export default App;
