import React, { useRef } from "react";
import { motion } from "framer-motion";

const galleryAlbums = [
  {
    title: "1. Hardwood Floor Project",
    description:
      "Removal of old carpet, installation, sanding, staining, buffing, and finishing.",
    images: [
      "/src/assets/prj-1/a1.webp",
      "/src/assets/prj-1/a2.webp",
      "/src/assets/prj-1/a3.webp",
      "/src/assets/prj-1/a4.webp",
      "/src/assets/prj-1/a5.webp",
      "/src/assets/prj-1/a6.webp",
      "/src/assets/prj-1/a7.webp",
    ],
  },
  {
    title: "2. Hardwood Floor Project",
    description: "Sanding, staining, buffing, and finishing.",
    images: [
      "/src/assets/prj-2/a1.gif",
      "/src/assets/prj-2/a3.webp",
    ],
  },
  {
    title: "3. Hardwood Floor Project",
    description: "Sanding, staining, buffing, and finishing.",
    images: [
      "/src/assets/prj-3/a1.webp",
      "/src/assets/prj-3/a2.webp",
      "/src/assets/prj-3/a3.webp",
      "/src/assets/prj-3/a1-2.webp",
      "/src/assets/prj-3/a2-2.webp",
      // "/src/assets/prj-3/a3-2.webp",
      "/src/assets/prj-3/a4.webp",
      // "/src/assets/prj-3/a3-3.webp",
    ],
  },
];

const GallerySection = ({ darkMode }) => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="gallery"
      className={`py-20 transition-colors duration-400`}
    >
      <div className="container mx-auto px-6 text-center">
        {/* --- Section Heading --- */}
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
          Explore our past work, organized into albums that highlight
          different styles, materials, and finishes.
        </p>

        {/* --- Albums --- */}
        <div className="flex flex-col gap-20">
          {galleryAlbums.map((album, index) => (
            <div key={index} className="text-left">
              {/* Album Header */}
              <div className="mb-6">
                <h3
                  className={`text-2xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {album.title}
                </h3>
                <p
                  className={`max-w-2xl ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {album.description}
                </p>
              </div>

              {/* 🧱 Masonry Layout start */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-2 sm:gap-3 md:gap-4 justify-center">
                {album.images.map((src, i) => (
                  <div
                    key={i}
                    className="w-full  aspect-[3/4] overflow-hidden rounded-xl hover:scale-103 transition-transform duration-300"
                  >
                    <img
                      src={src}
                      alt={`${album.title} ${i + 1}`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              {/* 🧱 Masonry Layout end */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;