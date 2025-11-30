import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "yet-another-react-lightbox/styles.css";
import "./index.css";

import AboutSection from "./components/AboutSection";
import GallerySection from "./components/GallerySection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ServicesSection from "./components/ServicesSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer"

// --- Helper function to determine the initial mode (System Check Only) ---
const getInitialMode = () => {
  // Check for system preference only
  if (typeof window !== 'undefined' && window.matchMedia) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return prefersDark; 
  }
  // Default to false (light mode)
  return false; 
};
// ---------------------------------------------------

const App = () => {
  // Initialize state using the helper function
  const [darkMode, setDarkMode] = useState(getInitialMode());

  // Effect to apply the 'dark' class to the HTML tag AND listen for system changes
  useEffect(() => {
    const root = window.document.documentElement;
    
    // Apply initial state
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    // Listen for system preference changes (e.g., user changes OS theme while app is open)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e) => {
        // Update state based on system change
        setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    
    // Cleanup the listener when the component unmounts
    return () => mediaQuery.removeEventListener('change', handleSystemChange);

  }, [darkMode]); // Dependency array includes darkMode to ensure initial class application

  return (
    <div
      className={`
        bg-theme-light-bg-main 
        dark:bg-theme-bg-main 
        transition-colors duration-400
      `}
    >
      {/* 💡 Removed toggleDarkMode prop */}
      <Navbar darkMode={darkMode} /> 
      <HeroSection darkMode={darkMode} />
      <AboutSection darkMode={darkMode} />
      
      {/* --- Animated Spacer Bar --- */}
      <div className="flex justify-center py-20">
        <motion.div
          className={`
            w-[330px] sm:w-[330px] md:w-[2500px] h-1 rounded-full 
            bg-theme-light-text-muted/10 
            dark:bg-theme-text-muted/10 
            transition-colors duration-300
          `}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
          viewport={{ once: true }}
        />
      </div>

      <ServicesSection darkMode={darkMode} />

      {/* --- Animated Spacer Bar --- */}
      <div className="flex justify-center py-10">
        <motion.div
          className={`
            w-[330px] sm:w-[330px] md:w-[1500px] h-1 rounded-full 
            bg-theme-light-text-muted/10 
            dark:bg-theme-text-muted/10 
            transition-colors duration-300
          `}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
          viewport={{ once: true }}
        />
      </div>

      <GallerySection darkMode={darkMode} />

      {/* --- Animated Spacer Bar --- */}
      <div className="flex justify-center py-10">
        <motion.div
          className={`
            w-[330px] sm:w-[330px] md:w-[1500px] h-1 rounded-full 
            bg-theme-light-text-muted/10 
            dark:bg-theme-text-muted/10 
            transition-colors duration-300
          `}
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          style={{ transformOrigin: "center" }}
          viewport={{ once: true }}
        />
      </div>
      
      <ContactSection darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default App;