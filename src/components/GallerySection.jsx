import { useState, useCallback } from "react";
import { motion, useReducedMotion } from "framer-motion";
// ensure `motion` is referenced so linters that don't detect JSX usage treat it as used
void motion;
import Lightbox from "./Lightbox";


const galleryAlbums = [
  {
    id: 1,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description: "Sanding, staining, buffing, and finishing of hardwood flooring.",
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
      "/project-gallery//prj-8/before/3.webp",
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
    before: ["/project-gallery//prj-7/before/1.webp"],
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
    title: "Hardwood & Vinyl Floor Project",
    category: ["Hardwood", "Vinyl"],
    description:
      "Hardwood floor refinishing paired with removal of old carpet and installation of new vinyl flooring.",
    before: [
      "/project-gallery/prj-1/before/1.webp",
      "/project-gallery/prj-1/before/2.webp",
    ],
    after: [
      "/project-gallery/prj-1/after/1.webp",
      "/project-gallery/prj-1/after/2.webp",
      "/project-gallery/prj-1/after/3.webp",
    ],
  },
  {
    id: 7,
    title: "Hardwood Floor Project",
    category: "Hardwood",
    description:
      "Sanding, staining, buffing, and finishing of hardwood flooring.",
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

    ]
  }
];

const categories = ["All", "Hardwood", "Vinyl", "Engineered", "VCT"];


const GallerySection = ({ darkMode }) => {
  const [activeCategory, setActiveCategory] = useState("All");
  
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

  // Function to gather all images from a specific album*
  const getAlbumImages = useCallback((album) => {
    const images = [];

    // Before Images
    album.before?.forEach((src) => {
      images.push({
        src: src,
        highResSrc: src,
        caption: `Before - ${album.title}`,
        description: album.description,
      });
    });

    // After Images
    album.after?.forEach((src) => {
      images.push({
        src: src,
        highResSrc: src,
        caption: `After - ${album.title}`,
        description: album.description,
      });
    });

    return images;
  }, []);

  // Helper to map an original image path to the generated thumbnail path.
  // Thumbnails are written as `<same-dir>/thumbs/<basename>.webp` by the generator.
  const getThumbSrc = (src) => {
  if (!src) return src;
  // normalize accidental double slashes
  const normalized = src.replace(/\/{2,}/g, '/');
  const dir = normalized.replace(/\/[^/]+$/, '');
  const base = normalized.replace(/^.*\//, '');
  const name = base.replace(/\.[^/]+$/, '');
    return `${dir}/thumbs/${name}.webp`;
  };

  // Handler to open the lightbox
  const openLightbox = useCallback((album, currentSrc) => {
    const allAlbumImages = getAlbumImages(album);
    const currentIndex = allAlbumImages.findIndex(img => img.src === currentSrc);
    
    if (currentIndex !== -1) {
      setLightbox({
        isOpen: true,
        images: allAlbumImages,
        currentIndex: currentIndex,
      });
    }
  }, [getAlbumImages]);

  // Handler to close the lightbox
  const closeLightbox = useCallback(() => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  }, []);

  // Handler to navigate (direction: 1 for next, -1 for previous)
  const navigateLightbox = useCallback((direction) => {
    setLightbox(prev => {
      let newIndex = prev.currentIndex + direction;
      
      if (newIndex < 0) {
        newIndex = 0;
      } else if (newIndex >= prev.images.length) {
        newIndex = prev.images.length - 1;
      }
      
      return { ...prev, currentIndex: newIndex };
    });
  }, []);

  const prefersReducedMotion = useReducedMotion();

  const gridVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: {},
        visible: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
      };

  const tileVariants = prefersReducedMotion
    ? { hidden: {}, visible: {} }
    : {
        hidden: { opacity: 0, y: 8 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.36, ease: 'easeOut' } },
      };

  return (
  <section id="gallery" className="py-20 transition-colors duration-400">
      <div className="container mx-auto px-6 text-center">
        {/* ... (Header and Description) ... */}
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
        <div className="w-full mb-15">
            {/*
              1. Added md:justify-center to center only on larger screens.
              2. Added pl-6 for left padding on mobile (px-6 is container padding).
            */}
            <div className="flex overflow-x-auto whitespace-nowrap gap-4 pb-2 pl-6 md:justify-center md:p-0">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        // Prevent buttons from shrinking on mobile
                        className={`px-4 py-2 rounded-full font-medium transition shrink-0 ${ 
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
        </div>

        {/* Albums */}
        <div className="flex flex-col gap-20">
          {filteredAlbums.map((album) => (
            <div key={album.id} className="text-left max-w-6xl mx-auto w-full">
              <div className="mb-6">
                <h3
                  className={`text-2xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {album.title}
                </h3>
                <p className={`max-w-3xl ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  {album.description}
                </p>
              </div>

              {/* BEFORE section: Use onClick to open lightbox, passing the album object */}
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
                    {album.before.map((src, i) => (
                      <motion.div
                        key={i}
                        variants={tileVariants}
                        className="relative w-full aspect-3/4 overflow-hidden rounded-xl cursor-pointer hover:opacity-80 transition"
                        onClick={() => openLightbox(album, src)}
                      >
                        <img
                          src={getThumbSrc(src)}
                          alt={`Before ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = src;
                          }}
                        />
                        <span className="absolute inset-0 bg-black/10 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition text-4xl font-light pointer-events-none">
                            &#x2b;
                        </span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              )}

              {/* AFTER section: Use onClick to open lightbox, passing the album object */}
              {album.after?.length > 0 && (
                <div>
                  <h4
                    className={`text-base font-semibold mb-2 uppercase tracking-wide ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    After
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {album.after.map((src, i) => (
                      <div
                        key={i}
                        className="relative w-full aspect-3/4 overflow-hidden rounded-xl cursor-pointer hover:opacity-80 transition"
                        onClick={() => openLightbox(album, src)} // Pass album and image source
                      >
                        <img
                          src={getThumbSrc(src)}
                          alt={`After ${i + 1}`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // If thumbnail is missing or fails, fall back to full image
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = src;
                          }}
                        />
                          <span className="absolute inset-0 bg-black/10 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition text-4xl font-light pointer-events-none">
                            &#x2b;
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Render the custom Lightbox */}
      <Lightbox
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        currentImageIndex={lightbox.currentIndex}
        onClose={closeLightbox}
        onNavigate={navigateLightbox}
        darkMode={darkMode}
      />
      
    </section>
  );
};

export default GallerySection;