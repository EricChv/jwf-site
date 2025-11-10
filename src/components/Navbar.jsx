import { useState } from "react";
import logoLight from "../assets/logoLight.webp";

import { navItems } from "../constants";
import { Menu, X, Sun, Moon } from "lucide-react";
import { FaInstagram, FaFacebookF, FaTiktok, FaGoogle } from "react-icons/fa";


const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <>
      {/* --- Navbar --- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl shadow-md transition-all duration-500 ${
          darkMode
            ? "bg-black/30 text-white"
            : "bg-white/10 text-black"
        }`}
      >
        <nav className="container mx-auto flex justify-between items-center px-1">
          {/* --- Left: Logo --- */}
          <div className="flex items-center gap-2">
            <img
              src={logoLight}
              alt="logo"
              className="lg:h-17 lg:w-17 h-12 w-12"
            />
            <span className="text-base lg:text-xl font-semibold">
              Jersey Wood Flooring
            </span>
          </div>

          {/* --- Right: Nav Items + Dark Mode Toggle --- */}
          <div className="flex items-center gap-4">
            {/* Nav Items for large screens */}
            <ul className="hidden lg:flex gap-6 text-sm font-medium items-center">
              {navItems.map((item, idx) =>
                item.children ? (
                  <li key={idx} className="group relative">
                    <div
                      className={`absolute top-full right-0 rounded shadow-lg mt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300  ${
                        darkMode ? "bg-[#0f0f0f] text-gray-200" : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <ul className="p-3 w-44 space-y-1">
                        {item.children.map((child) => (
                          <li key={child.label}>
                            <a
  href={child.href}
  className={`px-3 py-2 rounded-md transition-all duration-300 ${
    darkMode
      ? "text-gray-200 hover:text-white hover:bg-gray-700/50"
      : "text-gray-800 hover:text-black hover:bg-gray-300/30"
  }`}
>
  {child.label}
</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ) : (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className={`px-3 py-2 rounded-md transition-all duration-300 ${
                        darkMode
                          ? "text-gray-200 hover:text-white hover:bg-gray-700/50"
                          : "text-gray-800 hover:text-black hover:bg-gray-300/30"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                )
              )}
            </ul>

            {/* --- Dark Mode Toggle Button --- */}
            <button
              onClick={toggleDarkMode}
              className="p-3 rounded hover:bg-gray-300/30 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            {/* --- Mobile Hamburger --- */}
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="p-2 rounded hover:bg-gray-300/30 transition"
                aria-label="Toggle menu"
                aria-expanded={mobileDrawerOpen}
              >
                {mobileDrawerOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* --- Mobile Drawer --- */}
      <div
        className={`fixed top-11 left-0 w-full z-40 backdrop-blur-xl transition-all duration-300 transform ${
          mobileDrawerOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } ${
          darkMode 
          ? "bg-black/30 text-white" 
          : "bg-white/30 text-black"
        } 
        rounded-b-3xl 
        shadow-[0_8px_25px_rgba(0,0,0,0.80)] 
        border-t 
        border-gray-500/20`}
      >
        <div className="p-6">
          <ul className="flex flex-col items-center gap-4 w-full text-lg">
            {navItems.map((item, idx) =>
              item.children ? (
                <details key={idx} className="w-full">
                  <summary className="font-medium cursor-pointer py-1">{item.label}</summary>
                  <ul className="pl-4 mt-2 space-y-1 text-sm">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block px-2 py-1 rounded hover:bg-gray-300/30 transition w-full"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </details>
              ) : (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="block w-full text-center px-2 py-1 rounded hover:bg-gray-300/30 transition"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* Separator line */}
          <div className="w-16 h-px bg-gray-400/40 mx-auto my-4" />

          {/* Social Icons */}
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram size={22}/>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF size={21}/>
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer">
              <FaTiktok size={21}/>
            </a>
            <a href="https://google.com" target="_blank" rel="noreferrer">
              <FaGoogle size={21}/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;