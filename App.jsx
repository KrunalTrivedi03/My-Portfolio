import { Routes, Route } from "react-router-dom";
import Home from "./src/Components/Pages/Home";
import About from "./src/Components/Pages/About";
import Hero from "./src/Components/Hero";
import Skills from "./src/Components/Pages/Skills";
import Projects from "./src/Components/Pages/Projects";
import Experience from "./src/Components/Pages/Experience";
import Contact from "./src/Components/Pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Hero" element={<Hero />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/Contact" element={<Contact />} />
    </Routes>
  );
}
