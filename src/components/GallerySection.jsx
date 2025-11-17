import React, { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const galleryAlbums = [
  {
    id: 1,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description: "Sanding, staining, buffing, and finishing of hardwood flooring.",
    before: [
      "/src/assets/prj-5/before/1.webp",
      "/src/assets/prj-5/before/2.webp",
      "/src/assets/prj-5/before/5.webp",
      "/src/assets/prj-5/before/4.webp",
    ],
    after: [
      "/src/assets/prj-5/after/2.webp",
      "/src/assets/prj-5/after/3.webp",
      "/src/assets/prj-5/after/5.webp",
      "/src/assets/prj-5/after/4.webp",
    ],
  },
  {
    id: 2,
    title: "Vinyl Floor Project",
    category: "Vinyl",
    description: "Removal of old flooring and installation of new vinyl plank flooring.",
    before: [
      "/src/assets/prj-6/before/1.webp",
      "/src/assets/prj-6/before/2.webp",
      "/src/assets/prj-6/before/3.webp",
      "/src/assets/prj-6/before/4.webp",
      "/src/assets/prj-6/before/5.webp",
    ],
    after: [
      "/src/assets/prj-6/after/1.webp",
      "/src/assets/prj-6/after/2.webp",
      "/src/assets/prj-6/after/4.webp",
      "/src/assets/prj-6/after/5.webp",
    ],
  },
  {
    id: 3,
    title: "Engineered Wood Floor Project",
    category: "Engineered",
    description:
      "Subfloor preparation, adhesive application, and installation of engineered wood flooring.",
    before: [
      "/src/assets/prj-8/before/1.webp",
      "/src/assets/prj-8/before/2.webp",
      "/src/assets/prj-8/before/3.webp",
    ],
    after: [
      "/src/assets/prj-8/after/1.webp",
      "/src/assets/prj-8/after/2.webp",
      "/src/assets/prj-8/after/3.webp",
    ],
  },
  {
    id: 4,
    title: "Vinyl Composite Tile (VCT) Project",
    category: "VCT",
    description:
      "Removal of old tiles, adhesive cleanup, subfloor preparation, and installation of new VCT tiles along the sides of the basketball court.",
    before: ["/src/assets/prj-7/before/1.webp"],
    after: ["/src/assets/prj-7/after/1.webp"],
  },
  {
    id: 5,
    title: "Hardwood Floor Refinishing",
    category: "Hardwood",
    description:
      "Complete hardwood refinishing including sanding, staining, buffing, and protective finishing.",
    before: [
      "/src/assets/prj-4/before/1.webp",
      "/src/assets/prj-4/before/2.webp",
      "/src/assets/prj-4/before/4.webp",
      "/src/assets/prj-4/before/5.webp",
      "/src/assets/prj-4/before/6.webp",
    ],
    after: [
      "/src/assets/prj-4/after/1.webp",
      "/src/assets/prj-4/after/2.webp",
      "/src/assets/prj-4/after/3.webp",
      "/src/assets/prj-4/after/6.webp",
      "/src/assets/prj-4/after/4.webp",
    ],
  },
  {
    id: 6,
    title: "Hardwood & Vinyl Floor Project",
    category: ["Hardwood", "Vinyl"],
    description:
      "Hardwood floor refinishing paired with removal of old carpet and installation of new vinyl flooring.",
    before: [
      "/src/assets/prj-1/before/1.webp",
      "/src/assets/prj-1/before/2.webp",
    ],
    after: [
      "/src/assets/prj-1/after/1.webp",
      "/src/assets/prj-1/after/2.webp",
      "/src/assets/prj-1/after/3.webp",
    ],
  },
  {
    id: 7,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description:
      "Sanding, staining, buffing, and finishing of hardwood flooring.",
    before: [
      "/src/assets/prj-3/a1.webp",
      "/src/assets/prj-3/a2.webp",
      "/src/assets/prj-3/a3.webp",
    ],
    after: [
      "/src/assets/prj-3/a1-2.webp",
      "/src/assets/prj-3/a2-2.webp",
      "/src/assets/prj-3/a3-2.webp",
      "/src/assets/prj-3/a4.webp",
    ],
  },
];

const categories = ["All", "Hardwood", "Vinyl", "Engineered", "VCT"];

// --- Lightbox Sub-Component ---
const Lightbox = ({ isOpen, images, currentIndex, onClose, onNext, onPrev }) => {
  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex];
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === images.length - 1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 backdrop-blur-sm p-4 font-sans"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full h-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-3xl z-10 p-2 opacity-80 hover:opacity-100 transition font-sans"
          aria-label="Close Lightbox"
        >
          &times;
        </button>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="w-full h-full flex items-center justify-center"
        >
          <img
            src={currentImage.src}
            alt={`Gallery Image ${currentIndex + 1}`}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
          />
        </motion.div>

        {/* Navigation */}
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`absolute left-2 top-1/2 -translate-y-1/2 p-1 text-white text-2xl bg-black/20 md:bg-black/40 rounded-md md:rounded-full backdrop-blur-sm transition-opacity font-sans ${
            isFirst ? "opacity-20 cursor-not-allowed" : "hover:bg-black/60"
          }`}
          aria-label="Previous Image"
        >
          &larr;
        </button>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 text-white text-2xl bg-black/20 md:bg-black/40 rounded-md md:rounded-full backdrop-blur-sm transition-opacity font-sans ${
            isLast ? "opacity-20 cursor-not-allowed" : "hover:bg-black/60"
          }`}
          aria-label="Next Image"
        >
          &rarr;
        </button>

        {/* Counter */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-md bg-black/50 px-4 py-1 rounded-full font-sans">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

// --- GallerySection Component ---
const GallerySection = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Lightbox State
  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const filteredAlbums =
    activeCategory === "All"
      ? galleryAlbums
      : galleryAlbums.filter((a) =>
          Array.isArray(a.category)
            ? a.category.includes(activeCategory)
            : a.category === activeCategory
        );

  const openLightbox = (album, index, section) => {
    const allImages = [
      ...(album.before || []).map((src) => ({ src, type: "before" })),
      ...(album.after || []).map((src) => ({ src, type: "after" })),
    ];
    const startIndex = section === "before" ? index : (album.before?.length || 0) + index;
    setLightbox({ isOpen: true, images: allImages, currentIndex: startIndex });
  };

  const closeLightbox = () => setLightbox({ isOpen: false, images: [], currentIndex: 0 });

  const nextImage = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: Math.min(prev.currentIndex + 1, prev.images.length - 1),
    }));
  }, []);

  const prevImage = useCallback(() => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: Math.max(prev.currentIndex - 1, 0),
    }));
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      if (!lightbox.isOpen) return;
      if (event.key === "Escape") closeLightbox();
      else if (event.key === "ArrowRight") nextImage();
      else if (event.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [lightbox.isOpen, nextImage, prevImage]);

  return (
    <section className="py-20 transition-colors duration-400">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-3xl md:text-4xl font-bold mb-4 ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Gallery
        </motion.h2>

        <p
          className={`max-w-2xl mx-auto mb-12 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Explore our past work and see some of the flooring services we’ve completed for our clients.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-15 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? darkMode
                    ? "bg-white/20 text-white"
                    : "bg-black/10 text-black"
                  : darkMode
                  ? "bg-black/20 text-gray-400 hover:text-white"
                  : "bg-white/10 text-gray-600 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Albums */}
        <div className="flex flex-col gap-20">
          {filteredAlbums.map((album) => (
            <div key={album.id} className="text-left max-w-6xl mx-auto w-full">
              <div className="mb-6">
                <h3 className={`text-2xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                  {album.title}
                </h3>
                <p className={`max-w-3xl ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {album.description}
                </p>
              </div>

              {/* BEFORE section */}
              {album.before?.length > 0 && (
                <div className="mb-8">
                  <h4 className={`text-base font-semibold mb-2 uppercase tracking-wide ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Before
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {album.before.map((src, i) => (
                      <div
                        key={i}
                        className="relative w-full aspect-[3/4] overflow-hidden rounded-xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                        onClick={() => openLightbox(album, i, "before")}
                      >
                        <img
                          src={src}
                          alt={`Before ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* AFTER section */}
              {album.after?.length > 0 && (
                <div>
                  <h4 className={`text-base font-semibold mb-2 uppercase tracking-wide ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    After
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {album.after.map((src, i) => (
                      <div
                        key={i}
                        className="relative w-full aspect-[3/4] overflow-hidden rounded-xl cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                        onClick={() => openLightbox(album, i, "after")}
                      >
                        <img
                          src={src}
                          alt={`After ${i + 1}`}
                          className="w-full h-full object-cover transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <Lightbox
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrev={prevImage}
      />
    </section>
  );
};

export default GallerySection;