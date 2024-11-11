import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";
import BannerMarquee from "@/components/BannerMarquee";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Content />
      <Projects />
      <Contact />
      <BannerMarquee />
      <ScrollTopButton />
    </div>
  );
}
