import { useState, useEffect } from "react";
import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Optional: remember user preference
  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved) setDarkMode(JSON.parse(saved));
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem("darkMode", JSON.stringify(!prev));
      return !prev;
    });
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-gradient-to-b from-white/90 to-gray-200/70 dark:from-gray-900/90 dark:to-gray-800/90 min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <HeroSection darkMode={darkMode} />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
      </div>
    </div>
  );
};

export default App;