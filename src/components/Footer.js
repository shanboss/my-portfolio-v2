import React from "react";
import Marquee from "react-fast-marquee";
import BannerMarquee from "./BannerMarquee";
import Image from "next/image";
export default function Footer() {
  return (
    <div className="w-full">
      <Marquee direction="right">
        <Image
          alt={"manu"}
          src="/bannerMaybe.jpg"
          width={600}
          height={600}
          className={`h-[9rem] w-auto`}
        />
        <Image
          src="/bannerMaybe.jpg"
          alt={"manu"}
          width={600}
          height={600}
          className={`h-[9rem] w-auto`}
        />
      </Marquee>
    </div>
  );
}
