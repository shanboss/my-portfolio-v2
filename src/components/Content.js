// Content.js
/* a new comment */
import React from "react";
import My3DModelViewer from "./3DModel";

const Content = () => {
  return (
    <div>
      <div className="bg-neutral-950">
        <div className="container py-4 mx-auto flex-row">
          <div className="flex justify-between items-center text-white text-6xl font-regular my-16 mx-8 md:mx-auto">
            <div>
              Hi, my name is <br />
              <span className="font-bold">
                Manu.<span className="animate-blink">|</span>
              </span>
            </div>
            <img
              className="rounded-full w-[7rem] md:w-32 md:h-auto"
              src="pfp.png"
              alt="Profile"
            />
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
                  <div className="max-w-md p-1 rounded-lg ">
                    Build iOS and Android Apps in{" "}
                    <span className="font-semibold">Swift</span> and{" "}
                    <span className="font-semibold">Flutter</span>
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
