const services = [
  {
    title: "Hardwood Installation",
    description:
      "We install premium hardwood floors with precision and craftsmanship, delivering timeless beauty and unmatched durability for any space.",
    image: "/src/assets/service-hardwood.webp",
  },
  {
    title: "Laminate Floor Installation",
    description:
      "Laminate flooring is made of high-density fiberboard with a protective top layer. It offers the authentic look of hardwood, is durable, and water-resistant (not waterproof), making it ideal for living rooms, bedrooms, and other low-moisture areas.",
    image: "/src/assets/service-laminate.webp",
  },
  {
    title: "Luxury Vinyl Plank (LVP) Installation",
    description:
      "LVP is a synthetic vinyl composite, often SPC (stone plastic composite) or WPC (wood plastic composite), that is 100% waterproof. Perfect for kitchens, bathrooms, basements, or commercial spaces, it combines durability, comfort underfoot, and modern design.",
    image: "/src/assets/service-lvp.webp",
  },
  {
    title: "Vinyl Composite Tile (VCT) Installation",
    description:
      "VCT is a commercial-grade flooring material, commonly used in schools, hospitals, and retail spaces. Made from vinyl resin and limestone, it is durable and economical but requires regular waxing and polishing to maintain its finish.",
    image: "/src/assets/service-vct.webp",
  },
  {
    title: "Screen and Recoat (Refinishing)",
    description:
      "Our dustless refinishing process revives dull or worn floors with a light sanding and a fresh protective coat. Safe, clean, and efficient, it restores shine without a full refinishing project.",
    image: "/src/assets/service-refinish.webp",
  },
  {
    title: "Floor Repairs",
    description:
      "From small scratches to major damage, our expert repair services restore your floors’ strength and natural beauty seamlessly.",
    image: "/src/assets/service-repair.webp",
  },
  {
    title: "Base and Shoe Molding Installation",
    description:
      "We add finishing touches that make a difference. Crisp, perfectly fitted moldings complete the look of your new floors and enhance overall design.",
    image: "/src/assets/service-molding.webp",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 text-center">
        {/* --- Section Heading --- */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Our Services
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-2">
          We provide expert flooring installation, refinishing, and restoration services
          for both residential and commercial spaces.
        </p>
        <p className="text-sm text-gray-500 italic mb-12">
          *All sanding and refinishing services include a dustless system.
        </p>

        {/* --- Services Grid --- */}
        <div className="grid md:grid-cols-3 gap-10 justify-items-center">
          {services.map((service, index) => (
            <div
              key={index}
              className="group w-full max-w-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-400 bg-white/40 backdrop-blur-md border border-white/20"
            >
              <div className="overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;