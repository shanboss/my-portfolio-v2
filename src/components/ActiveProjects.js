"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  // Row 1: two featured cards, equal width
  {
    title: "Stacks.audio",
    description:
      "A digital marketplace and control center for audio professionals and musicians to access digital tools",
    url: "https://www.stacks.audio",
    techStack: ["Next.js", "Tailwind", "Three.js"],
    image: "/stacks.png",
    live: true,
    gridClass: "lg:col-span-3",
    imgHeight: "h-56",
  },
  {
    title: "Cicada",
    description:
      "My custom white-label ticketing platform with high customizability and a suite of functionality.",
    url: "https://mucicada.com",
    techStack: ["Next.js", "Tailwind"],
    image: "/cicada.png",
    live: true,
    gridClass: "lg:col-span-3",
    imgHeight: "h-56",
  },
  // Row 2+: varied layout
  {
    title: "Laser Vision",
    description:
      "AR depth scanning app that creates DepthClouds by combining pointclouds and depth maps, feeding data into CoreML models.",
    url: "https://devpost.com/software/laservision",
    techStack: ["Swift", "CoreML", "ARKit"],
    image: "/laserLogo.png",
    live: false,
    gridClass: "lg:col-span-2",
    imgHeight: "h-36",
  },
  {
    title: "GPTeach",
    description:
      "Chrome extension that generates flashcards from highlighted text using the OpenAI API for quick study sessions.",
    url: "https://devpost.com/software/gpteach-qgdsn3",
    techStack: ["React", "OpenAI", "Chrome API"],
    image: "/gpteach.jpeg",
    live: false,
    gridClass: "lg:col-span-4",
    imgHeight: "h-52",
  },
  {
    title: "PipeGrep",
    description:
      "Multi-threaded command-line tool simulating UNIX grep with a pipelined architecture for recursive directory searching.",
    url: "https://github.com/shanboss/pipeGrep",
    techStack: ["C", "POSIX Threads", "Unix"],
    image: "/pipePreview.png",
    live: false,
    gridClass: "lg:col-span-4 lg:row-span-2",
    imgHeight: "h-64",
  },
  {
    title: "Multithreaded Server",
    description:
      "A concurrent server in C supporting multiple clients with PUT and GET operations via multithreading.",
    url: "https://github.com/shanboss/MultithreadedServer",
    techStack: ["C", "Sockets", "Pthreads"],
    image: "/serverPreview.png",
    live: false,
    gridClass: "lg:col-span-2",
    imgHeight: "h-44",
  },
];

const gradients = [
  "from-violet-600 to-indigo-600",
  "from-rose-600 to-pink-600",
  "from-emerald-600 to-teal-600",
  "from-amber-600 to-orange-600",
  "from-cyan-600 to-blue-600",
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex flex-col rounded-2xl bg-neutral-900 border border-neutral-800 overflow-hidden hover:border-neutral-700 transition-colors ${project.gridClass}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      {/* Image / gradient placeholder */}
      <div
        className={`relative bg-gradient-to-br ${gradients[index % gradients.length]} ${project.imgHeight} flex items-center justify-center overflow-hidden`}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            quality={40}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <span className="text-white/20 text-7xl font-bold select-none">
            {project.title[0]}
          </span>
        )}
        {/* Status badge */}
        {project.live && (
          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse-live" />
            <span className="text-green-400 text-xs font-medium">Live</span>
          </div>
        )}
      </div>

      {/* Card content */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-neutral-400 text-sm line-clamp-2 mb-4">
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-mono text-neutral-300 bg-neutral-800 rounded-full px-2.5 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Visit link */}
        <div className="flex items-center gap-1 text-sm text-neutral-500 group-hover:text-white transition-colors">
          {project.live ? "Visit Live" : "Visit Project"}
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </motion.a>
  );
};

const ActiveProjects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="bg-neutral-950">
      <div ref={ref} className="container mx-auto py-10 px-8 md:px-0">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-white font-bold text-4xl">Active Projects</h2>
          <span className="flex items-center gap-1.5 bg-green-500/10 border border-green-500/20 rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse-live" />
            <span className="text-green-400 text-sm font-medium">Live</span>
          </span>
        </div>

        {isInView && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ActiveProjects;
