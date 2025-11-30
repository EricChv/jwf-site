import { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const ContactSection = ({ darkMode }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!res.ok) {
        throw new Error(`Network response was not ok: ${res.status}`);
      }

      setSubmitted(true);
      e.target.reset();

    } catch (err) {
      console.error("Form submission error:", err);
      console.log("Error sending message. Please try again.");
    }
  };
  return (
    <section id="contact" className="pt-20 pb-25 transition-colors duration-400">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Contact Us
          </motion.h2>

          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto`}>
            Have a question, need an estimate, or want to schedule a consultation?
            <br />
            Reach out — we’d love to hear from you.
          </p>
        </div>

        <div className="flex justify-center">
          <div
            className={`w-full max-w-2xl rounded-2xl p-8 transition-all duration-300 border hover:scale-[1.01] ${
              darkMode
                ? "bg-[#1f1f1f] border-gray-700/40 shadow-xl shadow-black/60"
                : "bg-gray-50 border-gray-200 shadow-xl shadow-gray-400/30"
            }`}
          >
            {submitted ? (
              <div className="text-center p-10">
                <h2 className={`text-2xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-900"}`}>Thank you!</h2>
                <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
                  Your message has been sent successfully. We’ll get back to you soon.
                </p>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don’t fill this out if you're human: <input name="bot-field" />
                  </label>
                </p>

                {/* Full Name */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>Full Name</label>
                  <input type="text" name="name" placeholder="John Doe" required
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                      darkMode
                        ? "bg-black/25 text-white placeholder-white/30 focus:ring-white/30"
                        : "bg-white text-gray-900 placeholder-gray-500 focus:ring-gray-200"
                    }`} 
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>Phone Number</label>
                  <input type="tel" name="phone" placeholder="(999) 123-4567" required
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                      darkMode
                        ? "bg-black/25 text-white placeholder-white/30 focus:ring-white/30"
                        : "bg-white text-gray-900 placeholder-gray-500 focus:ring-gray-200"
                    }`} 
                  />
                </div>

                {/* Email */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>Email Address</label>
                  <input type="email" name="email" placeholder="you@email.com" required
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                      darkMode
                        ? "bg-black/25 text-white placeholder-white/30 focus:ring-white/30"
                        : "bg-white text-gray-900 placeholder-gray-500 focus:ring-gray-200"
                    }`} 
                  />
                </div>

                {/* Message */}
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? "text-gray-200" : "text-gray-800"}`}>Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us about your project..." required
                    className={`w-full rounded-lg px-4 py-3 focus:outline-none focus:ring-2 transition ${
                      darkMode
                        ? "bg-black/25 text-white placeholder-white/30 focus:ring-white/30"
                        : "bg-white text-gray-900 placeholder-gray-500 focus:ring-gray-200"
                    }`} 
                  />
                </div>

                <button type="submit"
                  className={`w-full py-3 rounded-lg font-semibold shadow-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                    darkMode
                      ? "bg-black/40 text-gray-200 hover:bg-black/30"
                      : "bg-white text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Send
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className={`mt-20 text-center space-y-5 ${darkMode ? "text-white" : "text-gray-600"}`}>
          <p className="text-sm opacity-70">Prefer to reach out directly?</p>

          <p className="text-lg font-medium flex items-center justify-center gap-3">
            <PhoneIcon className={`h-5 w-5 ${darkMode ? "text-[#caced4]" : "text-gray-600"}`} />
            <a href="tel:+19088848213" className="hover:underline">+1 (908) 884-8213</a>
          </p>

          <p className="text-lg font-medium flex items-center justify-center gap-3">
            <ChatBubbleBottomCenterTextIcon className={`h-5 w-5 ${darkMode ? "text-[#caced4]" : "text-gray-600"}`} />
            Text or call for a quick response.
          </p>

          <p className="text-lg font-medium flex items-center justify-center gap-3">
            <EnvelopeIcon className={`h-5 w-5 ${darkMode ? "text-[#caced4]" : "text-gray-600"}`} />
            <a href="mailto:jerseywoodflooring@gmail.com" className="hover:underline">
              jerseywoodflooring@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Hidden static form for Netlify detection */}
      <div style={{ display: "none" }}>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <input type="text" name="name" />
          <input type="email" name="email" />
          <textarea name="message"></textarea>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;