import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });
      setSubmitted(true);
      e.target.reset();
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
      <div className={`absolute inset-0 bg-black/30 dark:bg-black/70`} />

      <div className="relative z-10 container mx-auto px-6 py-16 grid lg:grid-cols-2 gap-8 items-stretch space-y-10 lg:space-y-0">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center lg:text-left h-full flex flex-col justify-center" 
        >
          <h1 className="text-3xl md:text-5xl font-bold leading-tight text-white">
            Looking for a flooring contractor in Union County and the surrounding areas?
          </h1>

          <p className="mt-4 text-base md:text-lg text-white/90 hidden lg:block">
            We offer a wide variety of flooring services, including installation, sanding, refinishing, and repairs. Our team brings care and skill to every project, treating your space like our own and ensuring the work is done right, every time.
          </p>

          <p className="mt-4 text-base md:text-lg text-white/90">
            Get a <strong>free estimate today</strong>—we’re ready to help transform your space.
          </p>
        </motion.div>

        {/* Form */}
        <div className="flex justify-center lg:justify-end w-full">
          {submitted ? (
            <div className={`backdrop-blur-xl 
                bg-white/20 text-theme-light-text 
                dark:bg-black/30 dark:text-theme-text 
                p-8 rounded-2xl shadow-2xl w-full max-w-md 
                
                {/* Vertically centered thank you message */}
                h-full flex flex-col items-center justify-center text-center 
                
                transition-all duration-300 hover:scale-[1.01]
            `}
            >
              <h2 className="text-2xl font-semibold mb-2">Thank you!</h2>
              <p className="text-theme-light-text-muted dark:text-theme-text-muted/80">
                Your message has been sent successfully. We'll get back to you soon.
              </p>
            </div>
          ) : (
            <div className={`backdrop-blur-xl 
                bg-white/20 text-theme-light-text 
                dark:bg-black/30 dark:text-theme-text 
                p-8 rounded-2xl shadow-2xl w-full max-w-md text-left
                transition-all duration-300 hover:scale-[1.01]
            `}
            >
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                {/* Full Name */}
                <div>
                  <label className={`block text-sm font-medium mb-1 text-theme-light-text dark:text-theme-text/90`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                    className={`w-full rounded-lg px-4 py-3 outline-none transition
                      bg-white/10 text-theme-light-text placeholder-black/30 focus:border-white/10 focus:ring-2 focus:ring-white/30 
                      dark:bg-black/20 dark:text-theme-text dark:placeholder-white/40 dark:focus:border-white/40 dark:focus:ring-2 dark:focus:ring-white/20
                    `}
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={`block text-sm font-medium mb-1 text-theme-light-text dark:text-theme-text/90`}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(999) 123-4567"
                    required
                    className={`w-full rounded-lg px-4 py-3 outline-none transition
                      bg-white/10 text-theme-light-text placeholder-black/30 focus:border-white/10 focus:ring-2 focus:ring-white/30 
                      dark:bg-black/20 dark:text-theme-text dark:placeholder-white/40 dark:focus:border-white/40 dark:focus:ring-2 dark:focus:ring-white/20
                    `}
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-medium mb-1 text-theme-light-text dark:text-theme-text/90`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    required
                    className={`w-full rounded-lg px-4 py-3 outline-none transition
                      bg-white/10 text-theme-light-text placeholder-black/30 focus:border-white/10 focus:ring-2 focus:ring-white/30 
                      dark:bg-black/20 dark:text-theme-text dark:placeholder-white/40 dark:focus:border-white/40 dark:focus:ring-2 dark:focus:ring-white/20
                    `}
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-medium mb-1 text-theme-light-text dark:text-theme-text/90`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    placeholder="Tell us about your project..."
                    required
                    className={`w-full rounded-lg px-4 py-3 outline-none transition
                      bg-white/10 text-theme-light-text placeholder-black/30 focus:border-white/10 focus:ring-2 focus:ring-white/30 
                      dark:bg-black/20 dark:text-theme-text dark:placeholder-white/40 dark:focus:border-white/40 dark:focus:ring-2 dark:focus:ring-white/20
                    `}
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className={`w-full py-3 rounded-lg shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] 
                    bg-white/10 hover:bg-white/20 text-theme-light-text
                    dark:bg-black/10 dark:hover:bg-black/30 dark:text-theme-text
                  `}
                >
                  Send
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
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;