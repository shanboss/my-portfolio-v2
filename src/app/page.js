import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";
import BannerMarquee from "@/components/BannerMarquee";
import FuturisticNavbar from "@/components/FuturisticNavbar";
import AudioVisualizer from "@/components/AudioVisualizer";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Content />
      <div className="text-white text-2xl font-bold text-left p-10">
        Check out some of my music with this visualizer I made with React and
        Tailwind CSS
        <br></br>
      </div>
      <div className="text-white px-4 text-xl">
        Billie Eilish - Birds of a Feather (Redline Remix)
      </div>
      <AudioVisualizer song="/birdsOfAFeather.wav" />

      <Projects />
      <Contact />
      <ScrollTopButton />
    </div>
  );
}
