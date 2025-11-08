"use client";

import AudioVisualizer from "@/components/AudioVisualizer";

export default function page() {
  return (
    <div>
      {" "}
      <AudioVisualizer
        song="/birdsOfAFeather.wav"
        showPlayer={true}
        showScrubber={true}
        playerPosition="bottom"
        colorGradient={["#ff00cc", "#3333ff"]}
        height={500}
        numBars={100}
        fftSize={4096}
        startFreq={20}
        endFreq={20000}
        graphStyle="centered"
        barStyle="rounded"
      />
    </div>
  );
}
