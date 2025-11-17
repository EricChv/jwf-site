import React, { useRef } from "react";
import { motion } from "framer-motion";

const galleryAlbums = [
  {
    title: "1. Hardwood Floor Project",
    description:
      "Sanding, staining, buffing, and finishing of hardwood flooring.",
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
    title: "2. Vinyl Floor Project",
    description:
      "Removal of old flooring and installation of new vinyl plank flooring.",
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
    title: "3. Engineered Wood Floor Project",
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
    title: "4. Vinyl Composite Tile (VCT) Project",
    description:
      "Removal of old tiles, adhesive cleanup, subfloor preparation, and installation of new VCT tiles along the sides of the basketball court.",
    before: ["/src/assets/prj-7/before/1.webp"],
    after: ["/src/assets/prj-7/after/1.webp"],
  },

  {
    title: "5. Hardwood Floor Project",
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
    title: "6. Hardwood & Vinyl Floor Project",
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
    title: "7. Hardwood Floor Project",
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

const GallerySection = ({ darkMode }) => {
  const ref = useRef(null);

  return (
    <section
      ref={ref}
      id="gallery"
      className="py-20 transition-colors duration-400"
    >
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
          className={`max-w-2xl mx-auto mb-25 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Explore our past work and see some of the flooring services we’ve completed for our clients.

        </p>

        <div className="flex flex-col gap-20">
          {galleryAlbums.map((album, index) => (
            <div key={index} className="text-left max-w-6xl mx-auto">
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
                  className={`max-w-3xl ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {album.description}
                </p>
              </div>

              {/* BEFORE section */}
              {album.before?.length > 0 && (
                <div className="mb-8">
                  <h4
                    className={`text-base font-semibold mb-2 uppercase tracking-wide ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Before
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 justify-center">
                    {album.before.map((src, i) => (
                      <div
                        key={i}
                        className="relative w-full aspect-[3/4] overflow-hidden rounded-xl group"
                      >
                        <img
                          src={src}
                          alt={`${album.title} before ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover bg-black/20 transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* AFTER section */}
              {album.after?.length > 0 && (
                <div>
                  <h4
                    className={`text-base font-semibold mb-2 uppercase tracking-wide ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    After
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-3 justify-center">
                    {album.after.map((src, i) => (
                      <div
                        key={i}
                        className="relative w-full aspect-[3/4] overflow-hidden rounded-xl group"
                      >
                        <img
                          src={src}
                          alt={`${album.title} after ${i + 1}`}
                          loading="lazy"
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
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
    </section>
  );
};

export default GallerySection;