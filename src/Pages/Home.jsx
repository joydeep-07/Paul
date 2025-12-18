import React from "react";
import Hero from "../Components/Hero";
import AboutMe from "../Components/AboutMe";
import Footer from "../layout/Footer";
import WorkBadge from "../Components/WorkBadge";
import Reviews from "../Components/Reviews";
import MyWorks from "../Components/MyWorks";
import { projects } from "../Utils/Projects";
import ProjectHeading from "../Components/ProjectHeading";
const Home = () => {
  return (
    <div className="h-screen w-full">
      <Hero />
      <AboutMe />
      <ProjectHeading />
      <MyWorks />
      <Reviews />
      <WorkBadge />
      <Footer />
      {/* <AboutMe/> */}
    </div>
  );
};

export default Home;
