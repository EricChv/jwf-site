import React from "react";
import { motion } from "framer-motion";


const services = [
  {
    title: "Hardwood Installation",
    description:
      "We install premium hardwood floors with precision and craftsmanship, delivering timeless beauty and unmatched durability for any space.",
    image: "/src/assets/services/service-hardwood.webp",
  },
  {
  title: "Engineered Wood Floor Installation",
  description:
    "Engineered wood flooring features a real hardwood surface layer over a stable plywood or composite base. It provides the beauty of solid wood with added resistance to humidity and temperature changes, making it ideal for basements, apartments, and areas with varying moisture levels.",
  image: "/src/assets/services/service-engineered.webp",
  },
  {
    title: "Laminate Floor Installation",
    description:
      "Laminate flooring is made of high-density fiberboard with a protective top layer. It offers a similar look to hardwood at a low-cost, durable, and water-resistant (not waterproof), making it ideal for living rooms, bedrooms, and other low-moisture areas.",
    image: "/src/assets/services/service-laminate.webp",
  },
  {
    title: "Luxury Vinyl Plank (LVP) Installation",
    description:
      "LVP is a synthetic vinyl composite that is 100% waterproof. Perfect for kitchens, bathrooms, basements, or commercial spaces. It combines durability, comfort , and design flexibility.",
    image: "/src/assets/services/service-lvp.webp",
  },
  {
    title: "Vinyl Composite Tile (VCT) Installation",
    description:
      "A resilient, cost-effective flooring solution designed for commercial spaces such as schools, hospitals, and retail environments. VCT delivers reliable performance and can maintain its sheen through periodic waxing and polishing.",
    image: "/src/assets/services/service-vct.jpeg",
  },
  {
    title: "Refinishing",
    description:
      "A comprehensive restoration service that sands floors down to bare wood, removes imperfections, and applies fresh stain and finish. Ideal for worn or damaged surfaces that need a complete transformation.",
    image: "/src/assets/services/service-refinishing.webp",
  },
  {
    title: "Buff & Recoat",
    description:
      "A light maintenance process that refreshes existing floors without full sanding. The surface is gently screened and finished with a new protective coat, restoring natural luster and extending the life of the floor.",
    image: "/src/assets/services/service-recoat.webp",
  },
  {
    title: "Floor Repairs",
    description:
      "Targeted repair services for scratches, dents, or damaged boards. Each repair blends with surrounding flooring, restoring both the integrity and appearance of the surface.",
    image: "/src/assets/services/service-repair.webp",
  },
  {
    title: "Base and Shoe Molding Installation",
    description:
      "Custom-fit moldings that deliver the perfect finishing touch. Precisely installed base and shoe trim create a clean transition between walls and flooring.",
    image: "/src/assets/services/service-molding.webp",
  },
];

const ServicesSection = ({ darkMode }) => {
  return (
    
    <section
    id="services"
    className={`py-20 backdrop-blur-xl transition-colors  duration-400 `}
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
            Our Services
          </motion.h2>

        <p
          className={`max-w-2xl mx-auto mb-2 ${
            darkMode ? "text-gray-300" : "text-gray-600" // original light color
          }`}
        >
          We provide expert flooring installation, refinishing, and restoration
          services for both residential and commercial spaces.
        </p>
        <p
          className={`text-sm italic mb-12 ${
            darkMode ? "text-gray-400" : "text-gray-500" // original light color
          }`}
        >
          *All sanding and refinishing services include a dustless system.
        </p>

        {/* --- Services Grid --- */}
        <div className="grid md:grid-cols-3 gap-10 justify-items-center ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl  backdrop-blur-md ${
                darkMode
                  ? "bg-[#1f1f1f] border-gray-700/40"
                  : "bg-gray-50 border-white/20"
              }`}
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-103"
                />
              </div>
              <div className="p-6 text-left">
                <h3
                  className={`text-xl font-semibold mb-2 ${
                    darkMode ? "text-white" : "text-gray-900" // original light mode
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`leading-relaxed ${
                    darkMode ? "text-gray-300" : "text-gray-700" // original light mode
                  }`}
                >
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;