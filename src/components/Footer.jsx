import { FaInstagram, FaFacebookF, FaTiktok, FaGoogle } from "react-icons/fa";
import { PhoneIcon, ChatBubbleBottomCenterTextIcon, EnvelopeIcon } from '@heroicons/react/24/solid'

const Footer = ({ darkMode }) => {
  const year = new Date().getFullYear();

  return (
    <footer
      className={`pt-10 py-10 transition-colors duration-500 ${
        darkMode ? "bg-[#0f0f0f] text-gray-100" : "bg-gray-100/50 text-gray-800"
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
              { href: "#about", label: "About" },
              { href: "#services", label: "Services" },
              { href: "#gallery", label: "Gallery" },
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
              href="https://www.google.com/search?q=Jersey+Wood+Flooring%0D%0A&sca_esv=d1a2c1eff646079b&biw=1376&bih=1058&sxsrf=AE3TifPu2BHWc5Od4obDW9tghR712DhfwQ%3A1764030254335&ei=LvckaeecFL6ew8cPw4rk4AE&ved=0ahUKEwjn67rlhIyRAxU-z_ACHUMFGRwQ4dUDCBE&uact=5&oq=Jersey+Wood+Flooring%0D%0A&gs_lp=Egxnd3Mtd2l6LXNlcnAiFUplcnNleSBXb29kIEZsb29yaW5nCjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIHECMYJxjqAjIXEAAYgAQYkQIYtAIY5wYYigUY6gLYAQEyFxAAGIAEGJECGLQCGOcGGIoFGOoC2AEBMhcQABiABBiRAhi0AhjnBhiKBRjqAtgBATIXEAAYgAQYkQIYtAIY5wYYigUY6gLYAQEyFxAAGIAEGJECGLQCGOcGGIoFGOoC2AEBMhcQABiABBiRAhi0AhjnBhiKBRjqAtgBAUiDtw9QwQpY0bUPcAV4AJABAJgBhQugAYULqgEDNy0xuAEDyAEA-AEB-AECmAIFoAINqAIQwgIHECMYsAMYJ8ICCBAAGIAEGLADwgIJEAAYsAMYCBgewgIOEAAYgAQYsAMYhgMYigXCAgsQABiABBiwAxiiBMICCBAAGLADGO8FmAMD8QVS6GVylDnZi4gGAZAGCroGBggBEAEYAZIHATWgB7IVsgcAuAcAwgcDMC41yAcK&sclient=gws-wiz-serp&lqi=ChRKZXJzZXkgV29vZCBGbG9vcmluZ0iGpbXQmryAgAhaLBAAEAEQAhgAGAEYAiIUamVyc2V5IHdvb2QgZmxvb3JpbmcqCAgCEAAQARACkgEed29vZF9mbG9vcl9yZWZpbmlzaGluZ19zZXJ2aWNlmgFEQ2k5RFFVbFJRVU52WkVOb2RIbGpSamx2VDJ4S2RHUjZXbGxqUlUxNVkyMDFjVk5WZUZaU1Z6VkpVMVV4Y1dWdVl4QUKqAYcBCg0vZy8xMXg2cDB2bm42CgkvbS8wMWMzNGIKCi9tLzAyN3hobTAKCC9tLzA4M3Z0EAEqGCIUamVyc2V5IHdvb2QgZmxvb3JpbmcoADIfEAEiGxZcTPh0jtunFu6ScG1zvoN4kDcDADG_5eCxZDIYEAIiFGplcnNleSB3b29kIGZsb29yaW5n4AEA-gEFCKkBEEo#rlimm=4337638996372242119"
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
