import React from "react";

const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-200 bg-gray-300 h-[30rem] w-[30rem]" // Fixed width and height
    >
      <div className="h-1/2">
        <img
          className="w-full h-full object-cover"
          src={imageUrl}
          alt={title}
        />
      </div>
      <div className="px-6 py-4 bg-black h-1/2">
        <div className="font-bold text-xl mb-2 text-gray-100">{title}</div>
        <p className="text-gray-300 text-base">{description}</p>
      </div>
    </a>
  );
};

export default ProjectCard;
