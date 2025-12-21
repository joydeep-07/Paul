import React from "react";
import me from "../assets/images/me1.jpg";
import CircularText from "./CircularText";

const Me = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "../Resume.pdf";
    link.download = "Joydeep_Paul_Resume.pdf";
    link.click();
  };

  return (
    <section className="flex justify-center items-center pb-5 py-5 bg-[var(--bg-main)] text-[var(--text-main)]">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-20 px-4 sm:px-6 md:px-8 lg:px-12">
        {/* IMAGE SIDE */}
        <div className="flex relative w-full lg:w-auto">
          <div className="relative group mx-auto lg:mx-0">
            <img
              className="h-80 xs:h-96 sm:h-110 md:h-120 lg:h-130 w-70 xs:w-80 sm:w-90 md:w-95 lg:w-100 object-cover rounded-b-full transition-all duration-500"
              src={me}
              alt="Joydeep Paul"
            />

            {/* CIRCULAR TEXT */}
            <div className="absolute -bottom-3 xs:-bottom-4 sm:-bottom-5 -right-8 xs:-right-9 sm:-right-10 scale-75 xs:scale-90 sm:scale-100">
              <CircularText
                text="LET'S TALK • LET'S TALK • LET'S TALK • "
                radius={30}
                fontSize={10}
                rotateSpeed={40}
                direction="clockwise"
                textColor="var(--text-main)"
              />
            </div>
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 w-full">
          <h1 className="text-2xl heading-font xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight px-2 xs:px-0">
            A creative{" "}
            <span className="text-[var(--accent-primary)]">developer</span> &{" "}
            digital designer
          </h1>

          <p className="text-[var(--text-secondary)] text-sm xs:text-base sm:text-sm max-w-xl mx-auto lg:mx-0 px-4 xs:px-0">
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </p>

          <div className="flex justify-center lg:justify-start">
            <button
              onClick={handleDownload}
              className="px-8 xs:px-10 sm:px-12 py-3 xs:py-4 bg-transparent 
              border-2 border-[var(--border-light)] 
              text-[var(--text-main)] font-medium tracking-widest rounded-full 
              hover:border-[var(--accent-primary)] 
              transition-all duration-700 group relative overflow-hidden min-w-32 xs:min-w-36"
            >
              {/* Sliding overlay */}
              <span className="absolute inset-0 bg-[var(--accent-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-0"></span>

              {/* Text wrapper */}
              <span className="relative w-full flex items-center justify-center">
                <span className="opacity-100 group-hover:opacity-0 translate-y-0 group-hover:-translate-y-2 transition-all duration-500 flex items-center space-x-3">
                  <span className="text-xs">RESUME</span>
                </span>

                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 flex items-center justify-center space-x-3">
                  <span className="text-xs">DOWNLOAD</span>
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
