import React from 'react'

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="main flex flex-col w-7xl">
        <h3 className="text-xl p-5 text-[var(--text-main)]">
          Hey! It's me Paul,
        </h3>
        <h1
          
          className="text-7xl heading-font font-semibold text-[var(--text-main)]"
        >
          Crafting{" "}
          <span className="text-[var(--accent-primary)]">
            purpose driven <br /> experiences
          </span>{" "}
          that inspire <br /> & engage.
        </h1>
      </div>
    </div>
  );
}

export default Hero