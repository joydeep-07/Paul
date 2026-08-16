import { ArrowUp, ChevronDown } from "lucide-react";
import Slide from "./Slide";
import { SiMongodb, SiExpress, SiTailwindcss, SiFramer } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "Express", icon: <SiExpress /> },
    { name: "Tailwind", icon: <SiTailwindcss /> },
    { name: "Framer Motion", icon: <SiFramer /> },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/joydeep-paul-06b37926a",
    },
    {
      name: "Github",
      url: "https://github.com/joydeep-07",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/mr.paul_16",
    },
    {
      name: "Gmail",
      url: "mailto:joydeeprnp8821@gmail.com",
    },
  ];

  const headingClass =
    "text-[3.9vh] sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl leading-[1.2] heading-font font-medium";

  return (
    <section id="home" className="w-full">
      <div className="max-w-8xl mx-auto md:px-12 px-5">
        {/* HERO CONTENT */}
        <div className="pt-0 sm:pt-5 md:pt-5">
          {/* Availability */}
          <div className="flex items-center gap-3 mb-8 sm:mb-10 md:mb-12">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

            <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-[var(--text-secondary)]">
              Hey, It's me Paul
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col gap-1 sm:gap-0">
            {/* Line 1 */}
            <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-5">
              <span className={`${headingClass} text-[var(--text-main)]`}>
                Crafting
              </span>

              <span className={`${headingClass} text-[var(--accent-primary)]`}>
                purpose driven
              </span>
            </div>

            {/* Line 2 */}
            <div className="flex flex-wrap items-baseline gap-x-3 md:gap-x-5">
              <span className={`${headingClass} text-[var(--accent-primary)]`}>
                experiences
              </span>

              <span className={`${headingClass} text-[var(--text-main)]`}>
                that inspire
              </span>
            </div>

            {/* Line 3 */}
            <span className={`${headingClass} text-[var(--text-main)]`}>
              & engage.
            </span>
          </div>

          {/* Description */}
          <div className="mt-10 sm:mt-12 md:mt-16 flex items-start gap-5">
            <div className="hidden sm:block md:w-3xl h-px bg-[var(--border-light)] mt-3 shrink-0" />

            <p className="max-w-2xl text-justify text-xs sm:text-sm md:text-sm md:max-w-xl text-[var(--text-secondary)] leading-relaxed">
              I work with brands globally to build pixel-perfect, engaging, and
              accessible digital experiences that drive results and achieve
              business goals.
            </p>
          </div>

          {/* Bottom Content */}
          <div
            className="mt-10 sm:mt-12 md:mt-16 flex flex-col sm:flex-row
            justify-between items-start sm:items-center gap-8"
            data-aos="fade-up"
            data-aos-delay="450"
          >
            {/* Social Links */}
            <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-5 md:gap-x-7 gap-y-3 group">
              {socialLinks.map((item) => (
                <button
                  key={item.name}
                  onClick={() => window.open(item.url, "_blank")}
                  className=" flex items-center gap-1.5 text-[10px] sm:text-xs md:text-sm font-medium uppercase text-[var(--text-main)] opacity-100 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:text-[var(--accent-primary)]"
                >
                  <ArrowUp className="w-3 h-3 md:w-3.5 md:h-3.5 rotate-45" />

                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            {/* About Button */}
            <button
              onClick={() => navigate("/about")}
              className=" group hidden md:flex items-center justify-center px-7 sm:px-9 md:px-10 py-3 sm:py-3.5 rounded-full border border-[var(--border-light)] text-[var(--text-main)] text-[10px] sm:text-xs font-medium tracking-[0.12em] uppercase transition-all duration-300 hover:border-[var(--accent-primary)]/30 hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5"
            >
              About Me
            </button>
          </div>
        </div>
      </div>

      {/* SKILLS */}
      <div className="w-full mt-8 sm:mt-10 md:mt-14 py-6 sm:py-8 border-y border-[var(--border-light)]">
        <Slide items={skills} speed={20} />
      </div>
    </section>
  );
};

export default Hero;
