import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// ensure motion is referenced so eslint doesn't incorrectly report it as unused
void motion;

import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer"

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
    <div
  className={`${
    darkMode
      ? "bg-[#161616]"
      : "bg-gradient-to-b from-gray-50 to-gray-100"
  } transition-colors duration-400`}
>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      
      {/* --- Animated Spacer Bar --- */}
      {/* <div className="flex justify-center py-20">
        <motion.div
          className={`w-[330px] sm:w-[330px] md:w-[2500px] h-1 rounded-full transition-colors duration-300 ${
            darkMode ? "bg-white/10" : "bg-black/10"
          }`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
          viewport={{ once: true }}
        />
      </div> */}

      <ServicesSection darkMode={darkMode} />

      {/* --- Animated Spacer Bar --- */}
      {/* <div className="flex justify-center py-10">
        <motion.div
          className={`w-[330px] sm:w-[330px] md:w-[1500px] h-1 rounded-full transition-colors duration-300 ${
            darkMode ? "bg-white/10" : "bg-black/10"
          }`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
          viewport={{ once: true }}
        />
      </div> */}

      <GallerySection darkMode={darkMode} />

      {/* --- Animated Spacer Bar --- */}
      {/* <div className="flex justify-center py-10">
        <motion.div
          className={`w-[330px] sm:w-[330px] md:w-[1500px] h-1 rounded-full transition-colors duration-300 ${
            darkMode ? "bg-white/10" : "bg-black/10"
          }`}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
          viewport={{ once: true }}
        />
      </div> */}
      
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;