import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testemonial from "@/components/Testimonial";
import Footer from "@/components/Footer";
import Feedback from "@/components/Feedback"
import Journey from "@/components/Journey"

export default function Home() {
  return (
    <main className="text-gray-400 bg-gray-900 body-font">
      <Navbar />
      <About/>
      <Skills/>
      <Journey />
      <Projects/>
      <Feedback />
      <Contact />
      <Footer />
    </main>
  );
}
