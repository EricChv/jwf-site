import React from "react";
import aboutImg from "../assets/img-about.jpeg";
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

const AboutSection = () => {
  return (
    <section className="py-20 bg-white/10 backdrop-blur-xl">
      <div className="container mx-auto px-6 lg:flex lg:items-stretch lg:gap-12">
        
  {/* Left Column: About + Process */}
  <div className="lg:flex-1 flex flex-col justify-center gap-1">

  {/* About text */}
  <div className="mb-6">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">About</h2>
    <p className="text-black/80 max-w-xl leading-relaxed">
      <span className="font-semibold">Jersey Wood Flooring</span> is a family-owned business proudly serving Union County and surrounding areas for over 20 years. We cater to the needs of both residential and commercial clients throughout New Jersey, providing expert installation, restoration, and maintenance of high-quality flooring solutions.  
    </p>
{/* 
    <p className="text-black/80 max-w-xl leading-relaxed">
      Our team is dedicated to delivering unparalleled craftsmanship and exceptional customer service. From the initial consultation to the final reveal, we work closely with our clients to bring their vision to life, ensuring every project is completed with precision, attention to detail, and professionalism.  
    </p> */}

    {/* Transition / lead-in text */}
    <p className="text-black/80 italic max-w-md mt-3">
      Our simple, 3-step process ensures a seamless and stress-free flooring experience from start to finish. Here’s how it works:
    </p>
    </div>

    {/* Process Steps */}
    <div className="flex flex-col gap-6">
      {processSteps.map((step) => (
        <div
          key={step.title}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition flex items-start gap-4"
        >
          <div className="text-amber-800 mt-1">{step.icon}</div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-black">
              {step.title}
            </h3>
            <p className="text-black/80">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

        {/* Right Column: Image */}
        <div className="lg:flex-1 mb-8 lg:mb-0 rounded-2xl overflow-hidden shadow-2xl lg:order-last">
          <img
            src={aboutImg}
            alt="About Jersey Wood Flooring"
            className="w-full h-full object-cover lg:h-full"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;