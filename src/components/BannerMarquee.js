import React from "react";
import Marquee from "react-fast-marquee";
import BlinkingCursor from "./BlinkingCursor";

export default function BannerMarquee() {
  return (
    <>
      <Marquee>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          <BlinkingCursor text={"Playlists Updated Weekly ·"} />
        </div>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          Playlists Updated Weekly ·
        </div>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          <BlinkingCursor text={"Playlists Updated Weekly ·"} />
        </div>
        <div className="font-kosmos text-4xl bg-white text-red-500 p-2">
          Playlists Updated Weekly ·
        </div>
      </Marquee>
    </>
  );
}
