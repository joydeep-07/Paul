import React, { useState } from "react";
import me from "../assets/images/main2.png";
import CircularText from "./CircularText";
import { User } from "lucide-react";

const Me = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

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
            {/* Skeleton Loader */}
            {!imageLoaded && (
              <div
                className="absolute flex justify-center items-center inset-0 rounded-b-full bg-[var(--border-light)]/50 animate-pulse"
                style={{
                  height: "100%",
                  width: "100%",
                }}
              >
                <User className="text-[var(--text-secondary)]/50 " size={100} />
              </div>
            )}

            {/* Actual Image */}
            <img
              src={me}
              alt="Joydeep Paul"
              loading="lazy"
              onLoad={() => setImageLoaded(true)}
              className={`h-80 xs:h-96 sm:h-110 md:h-120 lg:h-130
                w-70 xs:w-80 sm:w-90 md:w-95 lg:w-100
                object-contain object-top rounded-b-full
                transition-opacity duration-500
                ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            />

            {/* CIRCULAR TEXT */}
            {imageLoaded && (
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
            )}
          </div>
        </div>

        {/* TEXT SIDE */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-5 lg:space-y-6 w-full">
          <h1 className="text-3xl heading-font xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
            A creative{" "}
            <span className="text-[var(--accent-primary)]">developer</span> &
            <br /> digital designer
          </h1>

          <p className="text-[var(--text-secondary)] text-xs xs:text-base sm:text-sm max-w-xl mx-auto lg:mx-0">
            I collaborate with brands globally to design impactful,
            mission-focused websites that drive results and achieve business
            goals.
          </p>

          <div className="flex justify-center mt-5 lg:justify-start">
            <button
              onClick={handleDownload}
              className=" relative overflow-hidden px-8 sm:px-8 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-full font-medium tracking-[0.1em] text-[var(--text-main)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/5 backdrop-blur-md border border-[var(--border-light)] hover:border-[var(--accent-primary)]/20 shadow-sm transition-all duration-500 ease-out group sm:w-auto"
            >
              <span className="flex items-center text-xs justify-center gap-2">
                DOWNLOAD RESUME
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
