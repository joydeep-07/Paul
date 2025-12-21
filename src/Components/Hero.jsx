import { ArrowUp } from "lucide-react";
import Slide from "./Slide";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFramer,
} from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";

const Hero = () => {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8">
        <div className="main flex flex-col gap-5 w-full max-w-7xl mx-auto">
          <h2 className="text-xs sm:text-sm py-4 sm:py-5 px-3 sm:px-4 uppercase flex items-center gap-2 sm:gap-3 w-full">
            <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
            Hey, it's me Paul
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl heading-font font-medium text-[var(--text-main)] ">
            Crafting{" "}
            <span className="text-[var(--accent-primary)] bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] bg-clip-text text-transparent">
              purpose driven <br className="hidden sm:block" /> experiences
            </span>{" "}
            that inspire <br className="hidden sm:block" /> & engage.
          </h1>
        </div>
      </div>
      
      {/* Description Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-6 md:mt-8 gap-3 px-4 sm:px-6 lg:px-8">
        {/* Line */}
        <div className="hidden sm:block border-b border-[var(--border-light)] w-full max-w-2xl mr-4 sm:mr-7"></div>

        {/* Text */}
        <p className="text-[var(--text-main)] text-xs sm:text-sm md:text-base leading-snug max-w-4xl text-center sm:text-left">
          I work with brands globally to build pixel-perfect, engaging, and
          accessible digital
          <br className="hidden sm:block" />
          experiences that drive results and achieve business goals.
        </p>
      </div>

      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 lg:px-8 xl:px-[100px] py-10 sm:py-12 md:py-15 gap-6 sm:gap-4 md:gap-6"
        data-aos="fade-up"
        data-aos-delay="450"
      >
        {/* Social Links */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 md:gap-5 py-2 sm:py-5 w-full sm:w-auto px-1 sm:px-3 group">
          {[
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/joydeep-paul-06b37926a",
            },
            { name: "Github", url: "https://github.com/joydeep-07" },
            {
              name: "Instagram",
              url: "https://www.instagram.com/mr.paul_16",
            },
            { name: "Gmail", url: "mailto:joydeeprnp8821@gmail.com" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => window.open(item.url, "_blank")}
              className="flex items-center gap-1 sm:gap-2 text-[var(--text-main)] text-[9px] xs:text-[10px] sm:text-xs md:text-sm font-medium uppercase transition-opacity duration-300 hover:opacity-100 group-hover:opacity-50 flex-shrink-0 px-1 sm:px-0"
            >
              <ArrowUp className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 rotate-45 flex-shrink-0" />
              <span className="whitespace-nowrap">{item.name}</span>
            </button>
          ))}
        </div>

        {/* About Me Button */}
        <div className="w-full sm:w-auto flex justify-center sm:justify-end">
          <button className="px-6 sm:px-8 md:px-10 py-2.5 sm:py-3 md:py-4 bg-transparent border-2 border-[var(--border-light)] text-[var(--text-main)] font-medium tracking-widest rounded-full transition-all duration-700 group relative overflow-hidden w-full sm:w-auto max-w-xs sm:max-w-none">
            {/* Sliding gradient overlay */}
            <span className="absolute inset-0 bg-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>

            {/* Text wrapper */}
            <span className="relative w-full flex items-center justify-center">
              {/* Initial text */}
              <span className="opacity-100 group-hover:opacity-0 text-[var(--text-main)] translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-2 sm:space-x-3">
                <span className="text-[10px] sm:text-xs">ABOUT ME &</span>
              </span>

              {/* Hover text */}
              <span className="absolute inset-0 text-[var(--text-main)] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center space-x-2 sm:space-x-3">
                <span className="text-[10px] sm:text-xs">MY WORKS</span>
              </span>
            </span>
          </button>
        </div>
      </div>

      <div className="py-6 sm:py-8 md:py-10">
        <Slide items={skills} speed={20} />
      </div>
    </>
  );
};

export default Hero;