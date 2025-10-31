
const HeroSection = () => {
  return (
    <section
    className="relative min-h-screen bg-cover bg-center flex items-center text-white"
    style={{
      backgroundImage: "url('/src/assets/hero-floor.webp')",
    }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/40" />

    {/* Content wrapper */}
    <div className="relative z-10 container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-8 items-center">
      {/* Text Side */}
      <div className="text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight pt-20 sm:pt-20 lg:pt-0">
          Looking for a Flooring Contractor in Union County and Surrounding Areas?
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Get a free estimate today — we are are ready to help transform your home.
        </p>
      </div>

      {/* Form Side */}
      <div className="mt-10 lg:mt-0 flex justify-center lg:justify-end">
        <div className="backdrop-blur-xl bg-white/20 border border-white/30 text-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />

            <div>
              <label className="block text-sm font-medium mb-1 text-white/90">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white/90">Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="(555) 123-4567"
                required
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white/90">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="you@email.com"
                required
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 outline-none transition"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1 text-white/90">Message</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Tell us about your project..."
                required
                className="w-full rounded-lg bg-white/10 border border-white/20 px-4 py-3 text-white placeholder-white/60 focus:border-sky-500 focus:ring-2 focus:ring-sky-500/30 outline-none transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white/10 hover:bg-white/0 text-white py-3 rounded-lg font-medium shadow-md backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;