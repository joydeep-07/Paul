import React from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../Utils/Projects";

const ProjectDetails = () => {
  const { id } = useParams();

  // Find the project based on the URL ID
  const project = projects.find((item) => item.id.toString() === id);

  if (!project) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-semibold">Project not found</h2>
        <Link to="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <header>
        <div className="flex justify-between items-center mb-2">
          <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-blue-100 text-blue-800 rounded-full">
            {project.category}
          </span>
          <span className="text-gray-500 text-sm">{project.year}</span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
        <p className="text-xl text-gray-600 mt-2">{project.shortDescription}</p>
      </header>

      {/* Hero Image */}
      <div className="overflow-hidden rounded-2xl shadow-lg">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Left Column: Description & Features */}
        <div className="md:col-span-2 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">About Project</h2>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {project.description}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-3">Key Features</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right Column: Project Info & Links */}
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold mb-4">Project Details</h3>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-medium">{project.role}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Status</p>
                <p
                  className={`font-medium ${
                    project.status === "Live"
                      ? "text-green-600"
                      : "text-blue-600"
                  }`}
                >
                  {project.status}
                </p>
              </div>
            </div>

            <hr className="my-6" />

            <h3 className="text-md font-bold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs bg-white border border-gray-300 rounded-md shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
                >
                  View Live Site
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center border border-gray-900 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                GitHub Repository
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
