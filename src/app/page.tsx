import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testemonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About/>
      <Skills/>
      <Projects/>
      <Testemonial/>
      <Contact />
    </main>
  );
}
