import React from "react";
import Marquee from "react-fast-marquee";
import BannerMarquee from "./BannerMarquee";

export default function Footer() {
  return (
    <div className="w-full">
      <Marquee direction="right">
        <img src="/bannerMaybe.jpg" className={`h-[9rem] w-auto`} />
        <img src="/bannerMaybe.jpg" className={`h-[9rem] w-auto`} />
      </Marquee>
    </div>
  );
}
