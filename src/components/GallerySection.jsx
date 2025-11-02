import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const galleryAlbums = [
  {
    title: "Hardwood Floor Project",
    description:
      "Removal of old flooring, installation, sanding, buffing, staining, and finishing.",
    images: [
      "/src/assets/project-gallery/a1.webp",
      "/src/assets/project-gallery/a2.webp",
      "/src/assets/project-gallery/a3.webp",
      "/src/assets/project-gallery/a4.webp",
      "/src/assets/project-gallery/a5.webp",
    ],
  },
  {
    title: "Album 2",
    description:
      "Clean, modern installations that highlight our precision and design versatility across a range of interiors.",
    images: [
      
      "/src/assets/project-gallery/6.webp",
    ],
  },
  {
    title: "Album 3",
    description:
      "Restorations and refinishing projects that bring old floors back to life with a timeless, natural finish.",
    images: [
      "/src/assets/project-gallery/7.webp",
      "/src/assets/project-gallery/8.webp",
      "/src/assets/project-gallery/9.webp",
    ],
  },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px" });

  return (
    <section
      ref={ref}
      id="gallery"
      className="py-24"
    >
      <div className="container mx-auto px-6 text-center">
        {/* --- Section Heading --- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Explore our past work, organized into curated albums that highlight
          different styles, materials, and finishes.
        </p>

        {/* --- Albums --- */}
        <div className="flex flex-col gap-20">
          {galleryAlbums.map((album, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 40 } // fade in/out as you scroll
              }
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-left"
            >
              {/* Album Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">
                  {album.title}
                </h3>
                <p className="text-gray-700 max-w-2xl">
                  {album.description}
                </p>
              </div>

              {/* Album Images */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {album.images.map((src, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 40 }
                    }
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl bg-white/50 backdrop-blur-md border border-white/20 transition-all duration-500"
                  >
                    <img
                      src={src}
                      alt={`${album.title} ${i + 1}`}
                      className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;