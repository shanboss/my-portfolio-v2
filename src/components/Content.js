"use client";
// Content.js
/* a new comment */
import React from "react";

import ImageSlider from "./ImageSlider";
import Image from "next/image";

const Content = () => {
  return (
    <div>
      <div className="bg-neutral-950">
        <div className="container py-4 mx-auto">
          <div className="flex flex-row justify-between items-center text-white text-6xl font-regular my-16 mx-8 md:mx-auto">
            <div className="">
              Hi, my name is <br />
              <span className="font-bold">
                Manu.<span className="animate-blink">|</span>
              </span>
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
            {/* PFP GRID */}
            {/* <div className="w-1/2 flex justify-end">
              <ImageSlider
                images={[
                  "/cyberManuBlue.png",
                  "/cyberManuGreen.png",
                  "/cyberManuRed.png",
                  "/cyberManuPurple.png",
                ]}
                interval={3000} // 3 seconds per image
              />
            </div> */}
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
