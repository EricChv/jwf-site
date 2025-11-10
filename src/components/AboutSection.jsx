import React from "react";
import aboutImg from "../assets/about-img1.webp";
import { Ruler, Hammer, CheckCircle } from "lucide-react";

const processSteps = [
  {
    title: "Free Estimate",
    description:
      "We visit your home or business, assess your space, and provide a transparent estimate with no hidden fees.",
    icon: <Ruler size={24} />,
  },
  {
    title: "Service Delivery",
    description:
      "Our team comes to do the work with precision and care, ensuring minimal disruption to your space.",
    icon: <Hammer size={24} />,
  },
  {
    title: "Project Reveal",
    description:
      "We show you the finished floors, make sure you’re completely satisfied, and leave your space spotless.",
    icon: <CheckCircle size={24} />,
  },
];

const AboutSection = ({ darkMode }) => {
  return (
    <section
    className={`py-20 backdrop-blur-xl transition-colors duration-400`}
    >
      <div className="container mx-auto px-6 lg:flex lg:items-start lg:gap-12">
        {/* Left Column: About + Process */}
        <div className="lg:flex-1 flex flex-col justify-center gap-1">
          {/* About text */}
          <div className="mb-6">
            <h2
              className={`text-3xl md:text-4xl font-bold mb-4 ${
                darkMode ? "text-white" : "text-[#161616]"
              }`}
            >
              About
            </h2>

            <p
              className={`max-w-xl leading-relaxed ${
                darkMode ? "text-gray-200" : "text-[#161616]"
              }`}
            >
              <span className={`font-semibold ${darkMode ? "text-white" : "text-black"}`}>
                Jersey Wood Flooring
              </span>{" "}
                is a family-owned, fully licensed, and insured business proudly serving Union County and the surrounding areas for
                over 20 years. We cater to the needs of both residential and commercial clients throughout
                New Jersey, providing expert installation, restoration, and maintenance of high-quality
                floors.
            </p>

            {/* Transition / lead-in text */}
            <p className={`italic max-w-md mt-3 ${darkMode ? "text-gray-300" : "text-black/80"}`}>
              Our simple, 3-step process ensures a straightforward and stress-free flooring experience
              from start to finish. Here’s how it works:
            </p>
          </div>

          {/* Process Steps */}
          <div className="flex flex-col gap-6">
            {processSteps.map((step) => (
              <div
                key={step.title}
                className={`rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4 border backdrop-blur-xl ${
                  darkMode 
                  ? "bg-gray-700/20 border-gray-700/40 hover:shadow-gray-700/40" 
                  : "bg-white/40 border-white/20 hover:shadow-gray-300/40"
                }`}
              >
                <div className={`${darkMode ? "text-gray-300" : "text-[#8f6042]"} mt-1`}>
                  {step.icon}
                </div>
                <div>
                  <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-black"}`}>
                    {step.title}
                  </h3>
                  <p className={darkMode ? "text-gray-300" : "text-black/80"}>
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
            className="w-full h-full object-cover lg:h-[720px]"
          />
        </div>
      </div>



    </section>
  );
};

export default AboutSection;