import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF2F1]">
      <Navbar />

      <main className="pt-20">
        <Hero />
        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
        
        <Footer />
      </main>
    </div>
  );
}
