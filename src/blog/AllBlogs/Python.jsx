import React from "react";
import Footer from "../../layout/Footer";
import WorkBadge from "../../Components/WorkBadge";
import BlogHeading from "../BlogHeading";

const Python = () => {
  return (
    <div>
      <BlogHeading
        title="Core Python"
        highlight="Programming"
        description="Core Python remains essential for automation, backend development, AI, and modern software engineering."
        // backgroundImage={ui}
        tags={[
          "Python Fundamentals",
          "Object Oriented Programming",
          "Data Structures",
        ]}
      />

      <WorkBadge />
    </div>
  );
};

export default Python;
