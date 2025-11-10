import { useState } from "react";
import { motion } from "framer-motion";


const HeroSection = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      alert("Error sending message. Please try again.");
    }
  };

  return (
    <section
        id="home"
        className={`relative min-h-screen bg-cover flex items-center text-center
          ${darkMode ? "text-white" : "text-black"}
          bg-[url('/src/assets/hero-floor2.webp')] 
          md:bg-[url('/src/assets/hero-floor2.webp')]
        `}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 ${
            darkMode ? "bg-black/70" : "bg-black/30"
          }`}
        />

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 items-center">
        {/* --- Text Side --- */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
            Looking for a Flooring Contractor in Union County and Surrounding Areas?
          </h1>
          <p className="mt-4 text-lg text-white/90">
            Get a free estimate today — we are ready to help transform your home.
          </p>
        </motion.div>

        {/* Form Side */}
        <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
          {submitted ? (
            <div
              className={`backdrop-blur-xl ${
                darkMode ? "bg-gray-900/50 border-gray-700/30 text-white" : "bg-white/20 border-white/30 text-black"
              } p-8 rounded-2xl shadow-2xl w-full max-w-md text-center`}
            >
              <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
              <p className={darkMode ? "text-white/80" : "text-gray-800"}>
                Your message has been sent successfully. We will get back to you soon.
              </p>
            </div>
          ) : (
            <div
              className={`backdrop-blur-xl ${
                darkMode ? "bg-gray-900/30 border-gray-700/30 text-white" : "bg-white/20 border-white/30 text-black"
              } p-8 rounded-2xl shadow-2xl w-full max-w-md text-left`}
            >
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />

                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-white/90" : "text-gray-800"}`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className={`w-full rounded-lg px-4 py-3 border ${
                      darkMode
                        ? "bg-gray-900/20 border-gray-700 text-white placeholder-white/30 focus:border-white/10 focus:ring-2 focus:ring-white/30"
                        : "bg-white/10 border-white/20 text-black placeholder-black/30 focus:border-white/10 focus:ring-2 focus:ring-white/30"
                    } outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-white/90" : "text-gray-800"}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(999) 123-4567"
                    required
                    className={`w-full rounded-lg px-4 py-3 border ${
                      darkMode
                        ? "bg-gray-900/20 border-gray-700 text-white placeholder-white/30 focus:border-white/10 focus:ring-2 focus:ring-white/30"
                        : "bg-white/10 border-white/20 text-black placeholder-black/30 focus:border-white/10 focus:ring-2 focus:ring-white/30"
                    } outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-white/90" : "text-gray-800"}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className={`w-full rounded-lg px-4 py-3 border ${
                      darkMode
                        ? "bg-gray-900/20 border-gray-700 text-white placeholder-white/30 focus:border-white/10 focus:ring-2 focus:ring-white/30"
                        : "bg-white/10 border-white/20 text-black placeholder-black/30 focus:border-white/10 focus:ring-2 focus:ring-white/30"
                    } outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-white/90" : "text-gray-800"}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    required
                    className={`w-full rounded-lg px-4 py-3 border ${
                      darkMode
                        ? "bg-gray-900/20 border-gray-700 text-white placeholder-white/30 focus:border-white/10 focus:ring-2 focus:ring-white/30"
                        : "bg-white/10 border-white/20 text-black placeholder-black/30 focus:border-white/10 focus:ring-2 focus:ring-white/30"
                    } outline-none transition`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    darkMode
                      ? "bg-gray-900/20 hover:bg-gray-800/20 text-white"
                      : "bg-white/10 hover:bg-white/20 text-gray-800"
                  }`}
                >
                  Send
                </button>

                <p className="hidden">
                  <label>
                    Don’t fill this out if you’re human: <input name="bot-field" />
                  </label>
                </p>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;