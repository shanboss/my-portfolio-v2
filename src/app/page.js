import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import ActiveProjects from "@/components/ActiveProjects";

import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollTopButton from "@/components/ScrollTopButton";
import BannerMarquee from "@/components/BannerMarquee";
import FuturisticNavbar from "@/components/FuturisticNavbar";
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Content />
      <ActiveProjects />
      <Contact />
      <ScrollTopButton />
    </div>
  );
}
