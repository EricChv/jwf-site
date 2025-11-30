import React, { useState, useMemo, useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const galleryAlbums = [
  {
    id: 1,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description: "Complete hardwood refinishing including sanding, staining, buffing, and protective finishing.",
    before: [
      "/project-gallery/prj-5/before/1.webp",
      "/project-gallery/prj-5/before/2.webp",
      "/project-gallery/prj-5/before/5.webp",
      "/project-gallery/prj-5/before/4.webp",
    ],
    after: [
      "/project-gallery/prj-5/after/2.webp",
      "/project-gallery/prj-5/after/3.webp",
      "/project-gallery/prj-5/after/5.webp",
      "/project-gallery/prj-5/after/4.webp",
    ],
  },
  {
    id: 2,
    title: "Vinyl Floor Project",
    category: "Vinyl",
    description: "Removal of old flooring and installation of new vinyl plank flooring.",
    before: [
      "/project-gallery/prj-6/before/1.webp",
      "/project-gallery/prj-6/before/2.webp",
      "/project-gallery/prj-6/before/3.webp",
      "/project-gallery/prj-6/before/4.webp",
      "/project-gallery/prj-6/before/5.webp",
    ],
    after: [
      "/project-gallery/prj-6/after/1.webp",
      "/project-gallery/prj-6/after/2.webp",
      "/project-gallery/prj-6/after/4.webp",
      "/project-gallery/prj-6/after/5.webp",
    ],
  },
  {
    id: 3,
    title: "Engineered Wood Floor Project",
    category: "Engineered",
    description:
      "Subfloor preparation, adhesive application, and installation of engineered wood flooring.",
    before: [
      "/project-gallery/prj-8/before/1.webp",
      "/project-gallery/prj-8/before/2.webp",
      "/project-gallery/prj-8/before/3.webp",
    ],
    after: [
      "/project-gallery/prj-8/after/1.webp",
      "/project-gallery/prj-8/after/2.webp",
      "/project-gallery/prj-8/after/3.webp",
    ],
  },
  {
    id: 4,
    title: "Vinyl Composite Tile (VCT) Project",
    category: "VCT",
    description:
      "Removal of old tiles, adhesive cleanup, subfloor preparation, and installation of new VCT tiles along the sides of the basketball court.",
    before: ["/project-gallery/prj-7/before/1.webp"],
    after: ["/project-gallery/prj-7/after/1.webp"],
  },
  {
    id: 5,
    title: "Hardwood Floor Refinishing",
    category: "Hardwood",
    description:
      "Complete hardwood refinishing including sanding, staining, buffing, and protective finishing.",
    before: [
      "/project-gallery/prj-4/before/1.webp",
      "/project-gallery/prj-4/before/2.webp",
      "/project-gallery/prj-4/before/4.webp",
      "/project-gallery/prj-4/before/5.webp",
      "/project-gallery/prj-4/before/6.webp",
    ],
    after: [
      "/project-gallery/prj-4/after/1.webp",
      "/project-gallery/prj-4/after/2.webp",
      "/project-gallery/prj-4/after/3.webp",
      "/project-gallery/prj-4/after/6.webp",
      "/project-gallery/prj-4/after/4.webp",
    ],
  },
  {
    id: 6,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description:
      "Complete hardwood refinishing including sanding, staining, buffing, and protective finishing.",
    before: [
      "/project-gallery/prj-1/before/1.webp",
    ],
    after: [
      "/project-gallery/prj-1/after/2.webp",
    ],
  },
  {
    id: 7,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description:
      "Complete hardwood refinishing including sanding, staining, buffing, and protective finishing.",
    before: [
      "/project-gallery/prj-3/before/1.webp",
      "/project-gallery/prj-3/before/2.webp",
      "/project-gallery/prj-3/before/3.webp",
      "/project-gallery/prj-3/before/4.webp",
    ],
    after: [
      "/project-gallery/prj-3/after/1.webp",
      "/project-gallery/prj-3/after/2.webp",
      "/project-gallery/prj-3/after/3.webp",
      "/project-gallery/prj-3/after/5.webp",
      "/project-gallery/prj-3/after/4.webp",
      "/project-gallery/prj-3/after/6.webp",
      "/project-gallery/prj-3/after/7.webp",

    ],
  },
  {
    id: 8,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description:
      "Complete hardwood refinishing including sanding, staining, buffing, and protective finishing.",
    before: [
      "/project-gallery/prj-9/before/1.webp",
    ],
    after: [
      "/project-gallery/prj-9/after/1.webp",
      "/project-gallery/prj-9/after/2.webp",
    ],
  },
  {
    id: 9,
    title: "Vinyl Floor Project",
    category: "Vinyl",
    description:
      "Removal of old carpet, adhesive cleanup, subfloor preparation, and installation of new vinyl flooring.",
    before: [
      "/project-gallery/prj-1/before/2.webp",
    ],
    after: [
      "/project-gallery/prj-1/after/1.webp",
      "/project-gallery/prj-1/after/3.webp",
    ],
  },
  {
    id: 10,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description:
    "Complete hardwood refinishing including sanding, staining, buffing, and protective finishing.",
    before: [
      "/project-gallery/prj-10/before/1.webp",
      "/project-gallery/prj-10/before/2.webp",
      "/project-gallery/prj-10/before/3.webp",
    ],
    after: [
      "/project-gallery/prj-10/after/1.webp",
      "/project-gallery/prj-10/after/2.webp",
      "/project-gallery/prj-10/after/3.webp",
    ],
  },
  {
    id: 11,
    title: "Vinyl Floor Project",
    category: "Vinyl",
    description:
    "Subfloor preparation and installation of new vinyl flooring on the staircase's landings.",
    before: [
      "/project-gallery/prj-11/before/1.webp",
      "/project-gallery/prj-11/before/2.webp",
      "/project-gallery/prj-11/before/3.webp",
      "/project-gallery/prj-11/before/4.webp",
    ],
    after: [
      "/project-gallery/prj-11/after/1.webp",
      "/project-gallery/prj-11/after/2.webp",
      "/project-gallery/prj-11/after/3.webp",
      "/project-gallery/prj-11/after/4.webp",
    ],
  },
  {
    id: 12,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description:
    "Hardwood floor reparation and complete refinishing including sanding, staining, buffing, and protective finishing.",
    before: [
      "/project-gallery/prj-12/before/1.webp",
    ],
    after: [
      "/project-gallery/prj-12/after/1.webp",
      "/project-gallery/prj-12/after/2.webp",
    ],
  },
  {
    id: 13,
    title: "Vinyl Floor Project",
    category: "Vinyl",
    description:
    "Subfloor preparation and installation of new vinyl flooring.",
    before: [
      "/project-gallery/prj-13/before/1.webp",
    ],
    after: [
      "/project-gallery/prj-13/after/1.webp",
    ],
  },
];

const categories = ["All", "Hardwood", "Vinyl", "Engineered", "VCT"];

const GallerySection = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  const galleryRef = useRef(null);

  const filteredAlbums = useMemo(
    () =>
      activeCategory === "All"
        ? galleryAlbums
        : galleryAlbums.filter((a) =>
            Array.isArray(a.category)
              ? a.category.includes(activeCategory)
              : a.category === activeCategory
          ),
    [activeCategory]
  );

  const getThumbSrc = (src) => {
    if (!src) return src;
    const normalized = src.replace(/\/{2,}/g, "/");
    const dir = normalized.replace(/\/[^/]+$/, "");
    const base = normalized.replace(/^.*\//, "");
    const name = base.replace(/\.[^/]+$/, "");
    // NOTE: If you  using external hosting, this thumb generation logic might need adjustment
    return `${dir}/thumbs/${name}.webp`;
  };

  useEffect(() => {
    if (galleryRef.current) {
      Fancybox.bind(galleryRef.current, "[data-fancybox]", {
        mainClass: "custom-fancybox-padding", 
        dragToClose: true,
        Toolbar: {
          display: {
            left: ["infobar"],
            middle: ["zoomIn", "zoomOut", "toggle1to1", "rotate"],
            right: ["close"],
          },
        },
        Thumbs: {
          type: "classic",
          autoStart: true,
        },

        caption: (fancybox, slide) => {
          const captionData = slide.caption || "";
          const [title, description] = captionData.split("||");
          
          return `
            <div style="text-align: center;">
              <h3 style="font-size: 0.685rem; font-weight: 600; margin-bottom: 0.3rem; padding-bottom: 0.3rem; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">${title || ''}</h3>
              <p style="font-size: 0.500rem; font-weight: 300; line-height: 1.4;">${description || ''}</p>
            </div>
          `;
        },
      });
    }

    return () => {
      Fancybox.destroy();
    };
  }, [filteredAlbums]);

  const prefersReducedMotion = useReducedMotion();

  // Grid container variant for stagger effect
  const gridVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: { transition: { 
          staggerChildren: 0.1,  
          delayChildren: 0.05
        } },
      };

  // Tile variant for pure fade-in (y: 0 removes vertical movement)
  const tileVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: { 
          opacity: 0, 
          y: 0 
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: { 
            duration: 0.5, 
            ease: "easeOut",
          },
        },
      };

  return (
    <section 
      id="gallery" 
      className={`py-20 transition-colors duration-400 ${
        darkMode ? "bg-[#121212]" : "bg-white"
      }`}
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
          className={`max-w-2xl mx-auto mb-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Explore our past work and see some of the flooring services we’ve completed for our clients.
        </p>

        <div 
          className={`w-full max-w-fit mx-auto p-3 mb-16 rounded-3xl shadow-xl transition-colors duration-300
            ${darkMode
              ? "bg-[#1f1f1f] shadow-black/60 border border-gray-700/40"
              : "bg-gray-50 shadow-gray-400/30 border border-gray-200"
            }
          `}
        >
          <div className="flex overflow-x-auto whitespace-nowrap gap-3 pb-0 md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full font-medium transition shrink-0 text-sm md:text-base 
                  ${
                    activeCategory === cat
                      ? darkMode
                        ? "bg-white/20 text-white shadow-md shadow-black/40"
                        : "bg-black/10 text-black shadow-md shadow-gray-300/40"
                      : darkMode
                      ? "bg-transparent text-gray-400 hover:text-white"
                      : "bg-transparent text-gray-600 hover:text-black"
                  }
                `}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Albums */}
        <div ref={galleryRef} className="flex flex-col gap-20">
          {filteredAlbums.map((album) => (
            <div key={album.id} className="text-left max-w-6xl mx-auto w-full">
              {/* Title + description */}
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

              {/* BEFORE */}
              {album.before?.length > 0 && (
                <div className="mb-8">
                  <h4
                    className={`text-base font-semibold mb-2 uppercase tracking-wide ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Before
                  </h4>

                  <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                  >
                    {album.before.map((src, i) => {
                      const captionContent = `<strong>${album.title} - Before ${i + 1}</strong>: ${album.description}`;
                      return (
                        <motion.a 
                          key={i}
                          variants={tileVariants}
                          className="relative w-fu-[ll aspect-3/4 overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] group"
                          data-fancybox={`album-${album.id}`}
                          href={src}
                          data-caption={captionContent}
                        >
                          <img
                            src={getThumbSrc(src)}
                            alt={`Before ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = src;
                            }}
                          />
                        </motion.a>
                      );
                    })}
                  </motion.div>
                </div>
              )}

              {/* AFTER */}
              {album.after?.length > 0 && (
                <div>
                  <h4
                    className={`text-base font-semibold mb-2 uppercase tracking-wide ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    After
                  </h4>

                  <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.12 }}
                  >
                    {album.after.map((src, i) => {
                      const captionContent = `<strong>${album.title} - After ${i + 1}</strong>: ${album.description}`;
                      return (
                        <motion.a 
                          key={i}
                          variants={tileVariants}
                          className="relative w-full aspect-3/4 overflow-hidden rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-[1.02] group"
                          data-fancybox={`album-${album.id}`}
                          href={src}
                          data-caption={captionContent}
                        >
                          <img
                            src={getThumbSrc(src)}
                            alt={`After ${i + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.05]"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.onerror = null;
                              e.currentTarget.src = src;
                            }}
                          />
                        </motion.a>
                      );
                    })}
                  </motion.div>
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