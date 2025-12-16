import React, { useState } from "react";
import dp from "../assets/images/dp1.jpg";
import { ArrowUp } from "lucide-react";
const Reviews = () => {
  const [readMore, setReadMore] = useState(false);

  const text =
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti modi ratione obcaecati! Eligendi excepturi assumenda cumque temporibus recusandae, animi, ducimus repudiandae dignissimos quas enim velit praesentium perspiciatis quisquam dicta. Exercitationem magni aliquam veritatis mollitia modi voluptas numquam dolor? Laborum ratione, debitis non ad quibusdam quaerat neque a laboriosam, animi, fugiat doloribus accusamus ipsam provident sint mollitia enim. Quasi veniam, optio natus illum distinctio facilis reprehenderit blanditiis placeat eos, minus ullam. Nemo officiis qui sunt nam recusandae reprehenderit magnam voluptatibus quasi laboriosam exercitationem ea architecto voluptatem, temporibus doloribus, vitae tenetur molestias illum repudiandae vero. Asperiores debitis libero doloremque quasi velit dolores!";

  const words = text.split(" ");
  const shortText = words.slice(0, 40).join(" ");

  return (
    <>
      <div className="py-15 bg-[var(--bg-main)] flex justify-center items-center">
        <div className="w-7xl flex">
          {/* Left */}
          <div className="w-full md:w-1/3 px-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-main)] opacity-70 mb-2">
              Testimonials
            </h3>

            <div className="mt-1 mb-6 h-[2px] w-16 bg-[var(--accent-primary)] rounded-full" />

            <h1 className="heading-font text-4xl md:text-5xl leading-tight mb-4 text-[var(--text-heading)]">
              What others{" "}
              <span className="text-[var(--accent-primary)]">Say</span>
            </h1>

            <p className="text-sm md:text-base leading-relaxed text-[var(--text-main)] opacity-80 max-w-sm">
              I’ve worked with some amazing people over the years here’s what
              they have to say about me.
            </p>
          </div>

          {/* Right */}
          <div className=" w-2/3 p-4 ">
            <div className="border border-[var(--border-light)] bg-[var(--bg-secondary)] rounded-xl">
              <div className="flex items-center">
                <div className="p-2 border-2 border-[var(--accent-primary)] rounded-full m-4">
                  <img
                    className="h-16 w-16 rounded-full object-cover"
                    src={dp}
                    alt=""
                  />
                </div>

                <div>
                  <h1 className="font-semibold text-[var(--text-main)]">
                    Debashis Roy
                  </h1>
                  <p className="text-sm text-[var(--text-secondary)]">
                    Senior Software Engineer
                  </p>
                </div>
              </div>

              <p className="text-justify p-4 text-[var(--text-main)] max-w-3xl">
                {readMore ? text : shortText}
                {words.length > 40 && (
                  <span
                    onClick={() => setReadMore(!readMore)}
                    className="cursor-pointer text-[var(--accent-primary)] font-medium"
                  >
                    {readMore ? " read less" : " ...read more"}
                  </span>
                )}
              </p>
            </div>
            <div className="flex flex-wrap gap-3 sm:gap-5 py-2 sm:py-5 w-full sm:w-fit px-2 sm:px-3 group justify-center sm:justify-start">
              {[
                {
                  name: "Check it out on LinkedIn",
                  url: "https://www.linkedin.com/in/joydeep-paul-06b37926a",
                },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => window.open(item.url, "_blank")}
                  className="flex pb-2  border-b border-[var(--border-light)] items-center gap-2 text-[var(--text-main)] text-[10px] sm:text-xs md:text-sm font-medium transition-opacity duration-300 hover:text-[var(--accent-primary)] flex-shrink-0"
                >
                  <span>{item.name}</span>
                  <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4 rotate-45 flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-screen bg-[var(--bg-main)]"></div>
    </>
  );
};

export default Reviews;
