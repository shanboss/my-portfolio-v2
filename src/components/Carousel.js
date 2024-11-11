import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import Marquee from "react-fast-marquee";
const Carousel = ({ cards }) => {
  const scrollRef = useRef(null);

  const scroll = (scrollOffset) => {
    scrollRef.current.scrollLeft += scrollOffset;
  };

  return (
    <div className="relative w-full h-full p-4">
      <div
        ref={scrollRef}
        className="flex overflow-x-scroll no-scrollbar space-x-12 px-4"
      >
        {cards.map((card, index) => (
          <div key={index} className="flex-shrink-0">
            <ProjectCard
              title={card.title}
              description={card.description}
              imageUrl={card.imageUrl}
              link={card.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
