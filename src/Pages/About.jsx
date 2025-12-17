import React from 'react'
import Me from '../Components/Me'
import WorkBadge from "../Components/WorkBadge";
import Footer from "../layout/Footer";
import Slide from '../Components/Slide';
import { SiMongodb, SiExpress, SiTailwindcss, SiFramer } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import TechExperience from '../Components/TechExperience';
const About = () => {

  const skills = [
      { name: "React", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Framer Motion", icon: <SiFramer /> },
    ];

  return (
    <div>
      <Me />
      <div className='py-20'>
        <Slide items={skills} speed={20} />
      </div>
      <TechExperience/>
      <WorkBadge />
      <Footer />
    </div>
  );
}

export default About