import Navbar from "@/components/Navbar";
import Content from "@/components/Content";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Content />
      <Projects />
      <Contact />
    </div>
  );
}
