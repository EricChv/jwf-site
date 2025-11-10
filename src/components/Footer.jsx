import { FaInstagram, FaFacebookF, FaTiktok, FaGoogle } from "react-icons/fa";
import { PhoneIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon } from '@heroicons/react/24/solid'



const Footer = ({ darkMode }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`pt-10 py-10 transition-colors duration-500 ${
        darkMode ? "bg-[#0f0f0f] text-gray-100" : "bg-white text-gray-800"
      }`}
    >
      <div className="container mx-auto px-6 text-center md:text-left grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* --- Column 1: Business Info --- */}
        <div>
          <h3 className="text-2xl font-semibold mb-3">Jersey Wood Flooring</h3>
          <p className={`${darkMode ? "text-gray-400" : "text-gray-600"} mb-4`}>
            Fully licensed and insured flooring services across New Jersey.
            Locally owned and dedicated to excellence.
          </p>

          <div className="space-y-2 text-sm">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <PhoneIcon className={`h-4 w-4 ${darkMode ? "text-[#caced4]" : "text-[#4a5565]"}`} />
              <a href="tel:+19088848213" className="hover:underline">
                +1 (908) 884-8213
              </a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
            <EnvelopeIcon className={`h-4 w-4 ${darkMode ? "text-[#caced4]" : "text-[#4a5565]"}`} />
              <a
                href="mailto:jerseywoodflooring@gmail.com"
                className="hover:underline"
              >
                jerseywoodflooring@gmail.com
              </a>
            </p>
          </div>
        </div>

        {/* --- Column 2: Quick Links --- */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { href: "#home", label: "Home" },
              { href: "#services", label: "Services" },
              { href: "#about", label: "About Us" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`transition ${
                    darkMode
                      ? "hover:text-white text-gray-300"
                      : "hover:text-black text-gray-700"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Column 3: Socials --- */}
        <div>
          <h4 className="text-xl font-semibold mb-3">Connect With Us</h4>
          <div className="flex justify-center md:justify-start gap-5 text-2xl">
            <a
              href="https://www.instagram.com/jerseywoodflooring"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.facebook.com/p/Jersey-wood-flooring-LLC-100090366427710/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-500 transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.tiktok.com/@jerseywoodfloorin"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:text-[#00f2ea] transition"
            >
              <FaTiktok />
            </a>
            <a
              href="https://share.google/R0AYZoTSpi26DHWUP"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <FaGoogle />
            </a>
          </div>
        </div>
      </div>

      {/* --- Bottom line --- */}
      <div
        className={`mt-10 pt-5 border-t text-sm text-center ${
          darkMode ? "border-gray-700 text-gray-400" : "border-gray-300 text-gray-500"
        }`}
      >
        <p>
          © {year} Jersey Wood Flooring. All rights reserved.  
        </p>
      </div>
    </footer>
  );
};

export default Footer;
