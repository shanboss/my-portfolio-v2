
"use client";
// Content.js


import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import {
  Oswald,
  Lora,
  Fira_Code,
  Birthstone,
  Lexend_Zetta,
  Pinyon_Script,
  Kalam,
  Bonheur_Royale,
} from "next/font/google";

const lexend = Lexend_Zetta({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-lexend",
});
const bonheur = Bonheur_Royale({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bonheur",
});
const oswald = Oswald({ subsets: ["latin"], weight: "400" });
const lora = Lora({ subsets: ["latin"], weight: "400" });
const firaCode = Fira_Code({ subsets: ["latin"], weight: "400" });
const birthstone = Birthstone({ subsets: ["latin"], weight: "400" });
const kalam = Kalam({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-kalam",
});
const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
});

const fonts = [
  kalam.className,
  firaCode.className,
  bonheur.className,
  oswald.className,
  pinyon.className,
  lexend.className,
  lora.className,
  birthstone.className,
];

const Content = () => {
  const indexRef = useRef(0);
  const fullText = "Manu";
  const [text, setText] = useState(fullText);
  const textRef = useRef(fullText);
  const [phase, setPhase] = useState("idle"); // 'idle' | 'deleting' | 'typing'
  const [fontIndex, setFontIndex] = useState(0);
  const fontIndexRef = useRef(0);
  const sectionRef = useRef(null);
  const blobRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const vel = useRef({ x: 0, y: 0 });
  const isInSection = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const blob = blobRef.current;
    if (!section || !blob) return;

    let raf;
    const lerp = 0.12;

    const animate = () => {
      const prevX = pos.current.x;
      const prevY = pos.current.y;

      // Smooth follow with lerp
      pos.current.x += (mouse.current.x - pos.current.x) * lerp;
      pos.current.y += (mouse.current.y - pos.current.y) * lerp;

      // Velocity for stretch
      vel.current.x = pos.current.x - prevX;
      vel.current.y = pos.current.y - prevY;

      const speed = Math.sqrt(vel.current.x ** 2 + vel.current.y ** 2);
      // Rotate so the "right" side of the blob faces the movement direction
      const angle = Math.atan2(vel.current.y, vel.current.x) * (180 / Math.PI);

      // Water droplet: taper the trailing edge (left), keep leading edge (right) round
      const t = Math.min(speed * 0.06, 0.7); // 0 = circle, ~0.7 = max droplet
      const lead = 50; // leading edge stays round
      const tail = Math.round(50 - t * 45); // trailing edge tapers toward a point

      // border-radius: TL TR BR BL
      // blob is rotated so right = forward, left = trailing
      const br = `${tail}% ${lead}% ${lead}% ${tail}%`;

      blob.style.left = `${pos.current.x}px`;
      blob.style.top = `${pos.current.y}px`;
      blob.style.borderRadius = br;
      blob.style.transform = `translate(-50%, -50%) rotate(${angle}deg) scale(${1 + t * 0.15}, ${1 - t * 0.08})`;

      raf = requestAnimationFrame(animate);
    };

    const onMove = (e) => {
      const rect = section.getBoundingClientRect();
      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
      if (!isInSection.current) {
        // Snap position on first enter so it doesn't lerp from (0,0)
        pos.current.x = mouse.current.x;
        pos.current.y = mouse.current.y;
        isInSection.current = true;
      }
      blob.style.opacity = "1";
    };

    const onLeave = () => {
      blob.style.opacity = "0";
      isInSection.current = false;
    };

    section.addEventListener("mousemove", onMove);
    section.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(animate);

    return () => {
      section.removeEventListener("mousemove", onMove);
      section.removeEventListener("mouseleave", onLeave);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    if (phase === "idle") {
      const timer = setTimeout(() => setPhase("deleting"), 2000);
      return () => clearTimeout(timer);
    }

    if (phase === "deleting") {
      const interval = setInterval(() => {
        const currentText = textRef.current;
        if (currentText.length > 0) {
          const nextText = currentText.slice(0, -1);
          textRef.current = nextText;
          setText(nextText);
        } else {
          clearInterval(interval);
          // advance font index once
          fontIndexRef.current = (fontIndexRef.current + 1) % fonts.length;
          setFontIndex(fontIndexRef.current);
          // reset typing index and begin typing
          indexRef.current = 0;
          setPhase("typing");
        }
      }, 100);
      return () => clearInterval(interval);
    }

    if (phase === "typing") {
      const interval = setInterval(() => {
        const i = indexRef.current;
        if (i >= fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            indexRef.current = 0;
            setPhase("deleting");
          }, 3000);
          return;
        }
        // Build next text via ref and state
        const nextText = textRef.current + fullText[i];
        textRef.current = nextText;
        setText(nextText);
        indexRef.current = i + 1;
      }, 100);
      return () => clearInterval(interval);
    }
  }, [phase]);

  return (
    <div>
      <div ref={sectionRef} className="bg-neutral-950 relative overflow-hidden cursor-none">
        {/* Blend layer: blob + text content, isolated from image */}
        <div className="absolute inset-0 pointer-events-none" style={{ mixBlendMode: "difference" }}>
          <div
            ref={blobRef}
            className="absolute w-40 h-40 rounded-full bg-white opacity-0 transition-opacity duration-300"
          />
        </div>
        <div className="container py-4 mx-auto">
          <div className="flex flex-row justify-between items-center text-white text-6xl font-regular my-16 mx-8 md:mx-auto">
            <div className="h-[10rem]">
              Hi, my name is <br />
              <span className={`font-bold ${fonts[fontIndex]}`}>{text}</span>
              <span className="animate-blink">|</span>
            </div>
            <div className="relative z-10">
              <Image
                src="/pfp.png"
                width={500}
                height={500}
                alt={"profile"}
                className="w-[7rem] md:w-[10rem] lg:w-[14rem] rounded-full h-auto"
              />
            </div>
          </div>
          {/* Border  */}
          <div className="">
            <div className="text-white text-2xl font-regular ml-20 mt-10">
              I can help you with -
            </div>

            <div className="text-white text-base font-mono my-8 mx-24">
              <ul className="list-disc">
                <li className="my-5 ">
                  <div className="max-w-md p-1 rounded-lg">
                    Building and designing{" "}
                    <span className="font-semibold">Websites</span>, just like
                    this one
                  </div>
                </li>
                <li className="my-5">
                  <div className="max-w-md p-1 rounded-lg">
                    Write code for you in{" "}
                    <span className="font-semibold">Various</span> languages,
                    like
                    <span className="font-semibold">
                      {" "}
                      C, C++, Python, Java{" "}
                    </span>
                    and many more.
                  </div>
                </li>
                <li className="my-5">
                  <div className="max-w-md p-1 rounded-lg">
                    Build your own React websites with this
                    <button className="font-semibold hover:bg-blue-500 rounded-lg px-2">
                      Template (Coming Soon)
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full"></div>
    </div>
  );
};

export default Content;
