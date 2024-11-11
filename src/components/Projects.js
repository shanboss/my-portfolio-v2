"use client";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Carousel from "./Carousel";
import Marquee from "react-fast-marquee";

const cards = [
  {
    title: "Laser Vision",
    description:
      "LaserVision scans an object (animate like a person or inanimate like a car or coffee mug), creates a DepthCloud by combining a pointcloud and depth map, and feeds the data into 1 of 2 different CoreML models: Fixed or Adaptive.",

    imageUrl: "laserLogo.png",
    link: "https://devpost.com/software/laservision",
  },
  {
    title: "Multithreaded Server in C",
    description:
      "This is a server programmed in C that I created during my Programming in Unix Course. It was my first introduction to multithreading and introduced me to the many challenges of concurrency. The program allows multiple clients to access a server and PUT or GET data from the server. ",

    imageUrl: "serverPreview.png",
    link: "https://github.com/shanboss/MultithreadedServer",
  },
  {
    title: "GPTeach",
    description: `Using the OpenAI API, we pass a selected string of words (or word) highlighted by your cursor to ChatGPT 3.5. With a very specific prompt, ChatGPT returns JSON object(s) of flashcards generated from that text, including the front and back of each card. For example, entering the line "Superman is an alien superhero" can return something like {prompt: {Who is Superman?} answer:{An alien superhero}}.`,

    imageUrl: "gpteach.jpeg",
    link: "https://devpost.com/software/gpteach-qgdsn3",
  },
  {
    title: "PipeGrep",
    description:
      "PipeGrep is a multi-threaded command-line application designed to simulate a simplified version of the UNIX grep command with a pipelined architecture. The application recursively searches through directories for text files that match specific user-defined criteria (such as file size, owner UID, group GID) and extracts lines containing a specified search string.",

    imageUrl: "pipePreview.png",
    link: "https://github.com/shanboss/pipeGrep",
  },
];
const Projects = () => {
  return (
    <div className="mx-auto bg-neutral-900 h-full">
      <section id="projects" />
      <div className="container pb-5 mx-auto ">
        <div className="text-white font-bold text-4xl font-regular py-5 mx-8 md:mx-auto">
          Projects
        </div>
        <div className="flex flex-row">
          <Carousel cards={cards} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
