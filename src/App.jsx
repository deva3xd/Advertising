import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,  
      once: true,    
    });
  }, []);
  
  return (
    <div className="min-h-screen bg-[#f0f2f3] text-white">
      <NavBar sectionId="hero" />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
