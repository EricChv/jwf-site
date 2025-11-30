import aboutImg from "../assets/about-img1.webp";
import { Ruler, Hammer, CheckCircle } from "lucide-react";

const processSteps = [
  {
    title: "Free Consultation & Estimate",
    description:
      "We visit your home or business, assess your needs, and provide a transparent project estimate with no hidden fees.", // Polished description
    icon: <Ruler size={24} />,
  },
  {
    title: "Precision Service Delivery",
    description:
      "Our team executes the work with precision and care, maintaining a tidy work area and ensuring minimal disruption to your daily routine.", // More detailed and reassuring
    icon: <Hammer size={24} />,
  },
  {
    title: "Final Review & Reveal",
    description:
      "We walk you through the finished floors, ensure your complete satisfaction, and leave your space spotless and ready to enjoy.", // Focuses on the end result
    icon: <CheckCircle size={24} />,
  },
];

const AboutSection = ({ darkMode }) => {
  return (
  <section 
    id="about" 
    className={`py-20 backdrop-blur-xl transition-colors duration-400 ${
      darkMode ? "bg-[#121212]" : "bg-white"
    }`}
  >
      <div className="container mx-auto px-6 lg:flex lg:items-start lg:gap-12">
        {/* Left Column: About + Process */}
        <div className="lg:flex-1 flex flex-col justify-center gap-1">
          {/* About text */}
          <div className="mb-6">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              About
            </h2>

            <p
              className={`max-w-xl leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <span className={`font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>
                Jersey Wood Flooring
              </span>{" "}
                is a family-owned, fully licensed, and insured business proudly serving Union County and the surrounding areas for
                over 20 years. We cater to the needs of both residential and commercial clients throughout
                New Jersey, providing professional installation, restoration, and maintenance of high-quality
                floors.
            </p>

            {/* Transition / lead-in text */}
            <p className={`italic max-w-md mt-3 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              Skip the stress and complication. We've structured the entire project into a straightforward journey that ensures peace of mind and stunning results.
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-6">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className={`rounded-2xl p-6 shadow-2xl transition-all duration-300 flex items-start gap-4 border hover:scale-[1.01] 
                  ${
                    darkMode 
                    // Dark Card Style
                    ? "bg-[#1f1f1f] border border-gray-700/40 shadow-xl shadow-black/60" 
                    // Light Card Style
                    : "bg-gray-50 border border-gray-200 shadow-xl shadow-gray-400/30"
                  }
                `}
              >
                {/* Icon color brown in light mode, muted white in dark mode */}
                <div className={`${darkMode ? "text-gray-400" : "text-[#8f6042]"} mt-1`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>
                    {step.title}
                  </h3>
                  <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="lg:flex-1 mb-8 lg:mb-0 rounded-2xl overflow-hidden shadow-2xl lg:order-last mt-6 lg:mt-7">
          <img
            src={aboutImg}
            alt="About Jersey Wood Flooring"
            className="w-full h-full object-cover lg:h-[870px] xl:h-[720px]"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;