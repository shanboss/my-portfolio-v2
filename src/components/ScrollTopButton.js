"use client";
import { useState, useEffect } from "react";
import { ArrowUpIcon } from "@heroicons/react/24/outline";
export default function ScrollTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show button when page is scrolled down
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-2 z-10 bg-blue-500 border-2 border-white text-white rounded-full shadow-lg hover:bg-blue-400 duration-200 focus:outline-none"
      >
        <ArrowUpIcon className="h-6 w-auto" />
      </button>
    )
  );
}
