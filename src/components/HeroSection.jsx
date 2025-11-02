import { useState } from "react";

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
      className={`relative min-h-screen bg-cover bg-center flex items-center ${
        darkMode ? "text-white" : "text-black"
      }`}
      style={{
        backgroundImage: "url('/src/assets/hero-floor.webp')",
      }}
    >
      {/* Overlay */}
      <div
        className={`absolute inset-0 ${
          darkMode ? "bg-black/40" : "bg-black/10"
        }`}
      />

      {/* Content wrapper */}
      <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 items-center">
        {/* Text Side */}
        <div className="text-center lg:text-left">
          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pt-20 sm:pt-20 lg:pt-0 ${
              darkMode ? "text-white" : "text-white"
            }`}
          >
            Looking for a Flooring Contractor in Union County and Surrounding Areas?
          </h1>
          <p className={`mt-4 text-lg ${darkMode ? "text-white/90" : "text-white/90"}`}>
            Get a free estimate today — we are ready to help transform your home.
          </p>
        </div>

        {/* Form Side */}
        <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
          {submitted ? (
            <div
              className={`backdrop-blur-xl ${
                darkMode ? "bg-gray-800/50 border-gray-700/30 text-white" : "bg-white/20 border-white/30 text-black"
              } p-8 rounded-2xl shadow-2xl w-full max-w-md text-center`}
            >
              <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
              <p className={darkMode ? "text-white/80" : "text-black/80"}>
                Your message has been sent successfully. We will get back to you soon.
              </p>
            </div>
          ) : (
            <div
              className={`backdrop-blur-xl ${
                darkMode ? "bg-gray-800/50 border-gray-700/30 text-white" : "bg-white/20 border-white/30 text-black"
              } p-8 rounded-2xl shadow-2xl w-full max-w-md`}
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
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-white/90" : "text-black/90"}`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className={`w-full rounded-lg px-4 py-3 border ${
                      darkMode
                        ? "bg-gray-900/20 border-gray-700 text-white placeholder-white/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                        : "bg-white/10 border-white/20 text-black placeholder-black/40 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                    } outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-white/90" : "text-black/90"}`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(999) 123-4567"
                    required
                    className={`w-full rounded-lg px-4 py-3 border ${
                      darkMode
                        ? "bg-gray-900/20 border-gray-700 text-white placeholder-white/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                        : "bg-white/10 border-white/20 text-black placeholder-black/40 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                    } outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-white/90" : "text-black/90"}`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className={`w-full rounded-lg px-4 py-3 border ${
                      darkMode
                        ? "bg-gray-900/20 border-gray-700 text-white placeholder-white/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                        : "bg-white/10 border-white/20 text-black placeholder-black/40 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                    } outline-none transition`}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-white/90" : "text-black/90"}`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    required
                    className={`w-full rounded-lg px-4 py-3 border ${
                      darkMode
                        ? "bg-gray-900/20 border-gray-700 text-white placeholder-white/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                        : "bg-white/10 border-white/20 text-black placeholder-black/40 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30"
                    } outline-none transition`}
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg font-medium shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    darkMode
                      ? "bg-gray-700 hover:bg-gray-600 text-white"
                      : "bg-white/10 hover:bg-white/0 text-black"
                  }`}
                >
                  Send Message
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