import { div } from 'framer-motion/client';
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="flex flex-col  justify-center items-center">
        <div className="main flex flex-col w-7xl">
          <h2 className="text-sm py-5 px-4 uppercase flex items-center gap-3 w-full">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse flex-shrink-0"></span>
            Hey, it's me Paul
          </h2>
          <h1 className="text-7xl heading-font font-medium text-[var(--text-main)]">
            Crafting{" "}
            <span className="text-[var(--accent-primary)]">
              purpose driven <br /> experiences
            </span>{" "}
            that inspire <br /> & engage.
          </h1>
        </div>
      </div>
      {/* Description Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center mt-6 sm:mt-8 gap-3">
        {/* Line */}
        <div className="hidden sm:block border-b border-[var(--border-light)] w-full mr-7 sm:w-2xl"></div>

        {/* Text */}
        <p className="text-[var(--text-main)] text-sm sm:text-base md:text-md leading-snug max-w-4xl sm:text-left">
          I work with brands globally to build pixel-perfect, engaging, and
          accessible digital
          <br className="hidden sm:block" />
          experiences that drive results and achieve business goals.
        </p>
      </div>
    </>
  );
}

export default Hero