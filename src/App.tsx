import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState<string>("home");

  // Track scroll position to update active navbar link automatically
  useEffect(() => {
    const sections = ["home", "about", "services", "portfolio", "contact"];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Trigger slightly before section hits top

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      setActiveSection("contact");
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-dark-bg min-h-screen text-text-white selection:bg-primary-blue/30 selection:text-white" id="portfolio-app-root">
      {/* Premium Header/Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Single-Page Sections */}
      <main id="main-content-flow">
        <Hero onHireClick={handleScrollToContact} onTalkClick={handleScrollToContact} />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
