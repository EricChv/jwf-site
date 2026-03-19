import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const heroInputClass = `w-full rounded-lg px-4 py-3 outline-none transition appearance-none ${
    darkMode
      ? "bg-black/28 text-theme-text placeholder-white/50 focus:ring-2 focus:ring-white/15"
      : "bg-white/24 text-theme-light-text placeholder-black/40 focus:ring-2 focus:ring-white/20"
  }`;

  // Phone number formatting function
  const formatPhoneNumber = (e) => {
    const input = e.target.value.replace(/\D/g, '').substring(0, 10); // Remove all non-digits, max 10 digits
    let formattedNumber = input;
 
    if (input.length > 6) {
      formattedNumber = `${input.substring(0, 3)}-${input.substring(3, 6)}-${input.substring(6, 10)}`;
    } else if (input.length > 3) {
      formattedNumber = `${input.substring(0, 3)}-${input.substring(3, 6)}`;
    }

    setPhoneNumber(formattedNumber); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);
    
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
      setPhoneNumber(''); 
      form.reset();
    } catch (err) {
      console.error("Error sending message:", err);
    }
  };

  return (
    <section
      id="home"
      className={`relative min-h-screen bg-cover flex items-center text-center
        text-theme-light-text dark:text-theme-text
        bg-[url('/src/assets/hero-floor2.webp')]
      `}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-colors duration-400 ${
          darkMode ? "bg-black/70" : "bg-black/35"
        }`}
      />

      <div className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8 items-stretch space-y-10 lg:space-y-0">
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left h-full flex flex-col justify-center" 
        >
          <h1
            className={`text-3xl md:text-5xl font-bold leading-tight ${
              darkMode ? "text-white" : "text-white/90"
            }`}
          >
            Professional flooring installation and refinishing in Union County, NJ.
          </h1>

          <p
            className={`mt-4 text-base md:text-lg hidden lg:block ${
              darkMode ? "text-white" : "text-white/85"
            }`}
          >
            Licensed and insured team delivering hardwood, vinyl, laminate, and refinishing services with clean workmanship and reliable timelines.
          </p>

          <p
            className={`mt-4 text-base md:text-lg ${
              darkMode ? "text-white/90" : "text-white/90"
            }`}
          >
            Get a free estimate today and we’ll help you choose the right flooring for your home or business.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? "bg-white/10 text-white" : "bg-white/20 text-white"}`}>
              Licensed & Insured
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? "bg-white/10 text-white" : "bg-white/20 text-white"}`}>
              20+ Years Experience
            </span>
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${darkMode ? "bg-white/10 text-white" : "bg-white/20 text-white"}`}>
              Union County & Nearby
            </span>
          </div>

        </motion.div>

        {/* Form */}
        <div className="flex lg:justify-end w-full">
          {submitted ? (
            // Thank You Message Container
            <div
              className={`backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.01] ${
                darkMode
                  ? "bg-black/25 text-theme-text border border-white/10"
                  : "bg-white/16 text-theme-light-text border border-white/20"
              }`}
              style={{ colorScheme: darkMode ? "dark" : "light" }}
            >
              <h2 className="text-xl font-semibold mb-2">Thank you!</h2>
              <p className={darkMode ? "text-theme-text-muted/80" : "text-theme-light-text-muted"}>
                Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          ) : (
            // Form Container
            <div
              className={`backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-full max-w-md text-left transition-all duration-300 hover:scale-[1.01] ${
                darkMode
                  ? "bg-black/25 text-theme-text border border-white/10"
                  : "bg-white/16 text-theme-light-text border border-white/20"
              }`}
              style={{ colorScheme: darkMode ? "dark" : "light" }}
            >
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <div>
                  <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-white/90"}`}>
                    Request a Free Estimate
                  </h2>
                  <p className={`text-sm mt-1 ${darkMode ? "text-gray-300" : "text-white/90"}`}>
                    Most replies are sent within one business day.
                  </p>
                </div>

                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                {/* First Name & Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  {/* First Name */}
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-theme-text/90" : "text-white/90"}`}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      required
                      className={heroInputClass}
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-theme-text/90" : "text-white/90"}`}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      required
                      className={heroInputClass}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-theme-text/90" : "text-white/90"}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    value={phoneNumber} 
                    onChange={formatPhoneNumber} 
                    maxLength="12" 
                    className={heroInputClass}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-theme-text/90" : "text-white/90"}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    required
                    className={heroInputClass}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-theme-text/90" : "text-white/90"}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Message"
                    required
                    className={heroInputClass}
                  />
                </div>


                {/* Button */}
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-semibold shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    darkMode
                      ? "bg-black/22 hover:bg-black/30 text-white"
                      : "bg-white/24 hover:bg-white/30 text-white"
                  }`}
                >
                  Request Free Estimate
                </button>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Hidden static form for Netlify detection */}
      <div style={{ display: "none" }}>
        <form name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="firstName" />
          <input type="text" name="lastName" />
          <input type="tel" name="phone" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;