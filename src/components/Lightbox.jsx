import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Lightbox = ({ images, currentImageIndex, isOpen, onClose, onNavigate, darkMode }) => {
  const active = !!isOpen && Array.isArray(images) && images.length > 0;
  const currentImage = active ? images[currentImageIndex] : null;
  const totalImages = Array.isArray(images) ? images.length : 0;
  const highResSrc = currentImage ? (currentImage.highResSrc || currentImage.src) : "";
  const isFirst = currentImageIndex === 0;
  const isLast = currentImageIndex === totalImages - 1;

  // --- Animation Variants ---
  const backdropVariants = {
    hidden: { opacity: 0, transition: { duration: 0.1 } },
    visible: { opacity: 1, transition: { duration: 0.15 } }
  };
  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } }
  };

  // --- Side Effects (Keyboard Navigation) ---
  useEffect(() => {
    if (!active) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowRight" && !isLast) onNavigate(1);
      else if (e.key === "ArrowLeft" && !isFirst) onNavigate(-1);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [active, currentImageIndex, isFirst, isLast, onClose, onNavigate]);

  // --- Side Effects (Block Background Scroll) ---
  useEffect(() => {
    if (!active) return;
    const doc = document.documentElement;
    const body = document.body;
    const scrollbarWidth = window.innerWidth - doc.clientWidth;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    body.style.overflow = "hidden";
    
    const prevent = (e) => e.preventDefault();
    window.addEventListener("wheel", prevent, { passive: false, capture: true });
    window.addEventListener("touchmove", prevent, { passive: false, capture: true });
    
    return () => {
      body.style.overflow = prevOverflow || "";
      body.style.paddingRight = prevPaddingRight || "";
      window.removeEventListener("wheel", prevent, { passive: false, capture: true });
      window.removeEventListener("touchmove", prevent, { passive: false, capture: true });
    };
  }, [active]);

  if (!active) return null;

  const backdropClass = darkMode ? "bg-black/65" : "bg-black/65";
  // Increased hover contrast for better visibility over images
  const arrowHover = darkMode ? "hover:bg-white/20" : "hover:bg-black/20"; 

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${backdropClass} backdrop-blur-sm p-4`}
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Clickable backdrop for closing (z-10) */}
      <div
        className="absolute inset-0 z-10 pointer-events-auto"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Content Container (z-20) */}
      <div className="relative flex flex-col w-full h-full max-w-7xl max-h-[90vh] z-20">

        <motion.div
          // This wrapper is the relative parent for navigation arrows
          className="relative flex flex-col items-center justify-center w-full h-full sm:p-2 md:p-10 my-1 md:my-6" 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
            {/* ------------------ Image and Footer Container ------------------ */}
            {/* This div is sized by the image and holds the relative position for the footer/controls */}
            <div
              className="relative max-w-full max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
                {/* Image itself */}
                <img
                    src={highResSrc}
                    alt={currentImage.caption}
                    className="object-contain max-w-full max-h-full rounded-xl"
                    loading="eager"
                    style={{ display: 'block' }} // Prevents common image bottom gap
                />

                {/* Top Bar (Counter & Close) - Placed over the image for consistency */}
                <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-30 text-white">
                    <span className="text-sm font-semibold text-shadow">
                      {currentImageIndex + 1} / {totalImages}
                    </span>
                    <button
                      onClick={onClose}
                      className="text-3xl p-1 leading-none transition hover:text-gray-300"
                      aria-label="Close Lightbox"
                    >
                      &times;
                    </button>
                </div>
                
                {/* Footer always at bottom of image - positioned absolutely over the image */}
                <div 
                    // Ensures the footer matches the image width perfectly and has correct bottom rounding
                    className="absolute bottom-0 left-0 right-0 p-3 text-center text-white bg-black/40 z-10"
                    style={{ 
                      borderBottomLeftRadius: '0.75rem', 
                      borderBottomRightRadius: '0.75rem' 
                    }}
                >
                    <h4 className="text-base font-semibold mb-1">{currentImage.caption}</h4>
                    <p className="text-xs text-gray-200">{currentImage.description}</p>
                </div>

                {/* ------------------ Prev Button (Over Image, Close to Edge) ------------------ */}
                <button
                    onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
                    disabled={isFirst}
                    // Positioning uses `left-0` relative to the image container, giving the desired consistency
                    className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-2 mx-2 rounded-full text-3xl text-white backdrop-blur-sm ${
                      isFirst ? "opacity-30 cursor-not-allowed" : `${arrowHover} bg-black/20`
                    } z-30`}
                    aria-label="Previous Image"
                >
                    &lsaquo;
                </button>

                {/* ------------------ Next Button (Over Image, Close to Edge) ------------------ */}
                <button
                    onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
                    disabled={isLast}
                    // Positioning uses `right-0` relative to the image container, giving the desired consistency
                    className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-2 mx-2 rounded-full text-3xl text-white backdrop-blur-sm ${
                      isLast ? "opacity-30 cursor-not-allowed" : `${arrowHover} bg-black/20`
                    } z-30`}
                    aria-label="Next Image"
                >
                    &rsaquo;
                </button>
            </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Lightbox;