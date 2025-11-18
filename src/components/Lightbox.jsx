// Lightbox.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";

const Lightbox = ({ images, currentImageIndex, isOpen, onClose, onNavigate, darkMode }) => {
  const active = !!isOpen && Array.isArray(images) && images.length > 0;
  const currentImage = active ? images[currentImageIndex] : null;
  const totalImages = Array.isArray(images) ? images.length : 0;
  const highResSrc = currentImage ? (currentImage.highResSrc || currentImage.src) : "";
  const isFirst = currentImageIndex === 0;
  const isLast = currentImageIndex === totalImages - 1;

  const backdropVariants = {
    hidden: { opacity: 0, transition: { duration: 0.1 } },
    visible: { opacity: 1, transition: { duration: 0.15 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.15, ease: "easeOut" } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.1 } }
  };

  // Keyboard navigation
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

  // Block background scroll
  useEffect(() => {
    if (!active) return;
    const doc = document.documentElement;
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPaddingRight = body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - doc.clientWidth;
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
  const arrowHover = darkMode ? "hover:bg-white/10" : "hover:bg-black/10";

  return (
    <motion.div
      className={`fixed inset-0 z-50 flex items-center justify-center ${backdropClass} backdrop-blur-sm p-4`}
      // keep top-level onClick as a fallback, but add an explicit backdrop below
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {/* Explicit clickable backdrop layer: covers entire viewport and closes lightbox on click */}
      <div
        className="absolute inset-0 z-10 pointer-events-auto"
        onClick={onClose}
        onMouseDown={onClose}
        onTouchStart={onClose}
        aria-hidden="true"
      />

      <div className="relative flex flex-col w-full h-full max-w-7xl max-h-[90vh] z-20">

        {/* ------------------ Top Bar is now inside the image wrapper ------------------ */}

        {/* Image & Footer Wrapper (Content) */}
        <motion.div

          className="relative flex flex-col items-center justify-center w-full h-full sm:p-2 md:p-10 my-1 md:my-6" 
          variants={contentVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          // only stop propagation for clicks directly on the inner image area
          // so clicks on the blank sides (the blue overlay in the screenshot)
          // will bubble up and be handled by the backdrop to close the lightbox.
        >
            <div className="absolute top-0 left-0 right-0 px-4 pt-12 md:p-4 flex justify-between items-center z-20 text-white">
            <span className="text-sm font-semibold">
              {currentImageIndex + 1} / {totalImages}
            </span>
            <button
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="text-2xl p-1 leading-none transition hover:text-gray-300"
              aria-label="Close Lightbox"
            >
              &times;
            </button>
          </div>

          <div
            className="relative max-w-full max-h-full flex flex-col items-center justify-end rounded-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={highResSrc}
              alt={currentImage.caption}
              className="object-contain max-w-full max-h-full"
              loading="eager"
            />

            {/* Footer always at bottom of image */}
            <div className="w-full p-3 text-center text-white bg-black/50 z-10">
              <h4 className="text-base font-semibold mb-1">{currentImage.caption}</h4>
              <p className="text-xs text-gray-300">{currentImage.description}</p>
            </div>
          </div>
        </motion.div>
        {/* ------------------ End of Image Wrapper ------------------ */}


        {/* Prev Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(-1); }}
          disabled={isFirst}
          className={`absolute left-0 top-1/2 transform -translate-y-1/2 p-4 text-3xl text-white ${
            isFirst ? "opacity-30 cursor-not-allowed" : arrowHover
          } z-20`}
          aria-label="Previous Image"
        >
          &lsaquo;
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNavigate(1); }}
          disabled={isLast}
          className={`absolute right-0 top-1/2 transform -translate-y-1/2 p-4 text-3xl text-white ${
            isLast ? "opacity-30 cursor-not-allowed" : arrowHover
          } z-20`}
          aria-label="Next Image"
        >
          &rsaquo;
        </button>
      </div>
    </motion.div>
  );
};

export default Lightbox;