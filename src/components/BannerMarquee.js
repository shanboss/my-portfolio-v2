import React from "react";
import Marquee from "react-fast-marquee";
import BlinkingCursor from "./BlinkingCursor";

export default function BannerMarquee() {
  return (
    <div className="">
      <Marquee>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          <BlinkingCursor text={"COMING SOON"} />
        </div>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          WEBPAGE TEMPLATES ·
        </div>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          <BlinkingCursor text={"COMING SOON"} />
        </div>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          WEBPAGE TEMPLATES ·
        </div>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          <BlinkingCursor text={"COMING SOON"} />
        </div>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          WEBPAGE TEMPLATES ·
        </div>
      </Marquee>
    </div>
  );
}
