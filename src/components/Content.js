"use client";
// Content.js
/* a new comment */

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
      <div className="bg-neutral-950">
        <div className="container py-4 mx-auto">
          <div className="flex flex-row justify-between items-center text-white text-6xl font-regular my-16 mx-8 md:mx-auto">
            <div className="h-[10rem]">
              Hi, my name is <br />
              <span className={`font-bold ${fonts[fontIndex]}`}>{text}</span>
              <span className="animate-blink">|</span>
            </div>
            <div>
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
    </div>
  );
};

export default Content;
