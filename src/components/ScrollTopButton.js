"use client";
import { useState, useEffect } from "react";
import { ArrowUpCircleIcon } from "@heroicons/react/24/outline";
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
        className="fixed bottom-8 right-8 z-10 bg-red-500 border-2 border-white text-white rounded-full shadow-lg hover:bg-red-400 duration-200 focus:outline-none"
      >
        <ArrowUpCircleIcon className="w-12 h-auto" />
      </button>
    )
  );
}
