import logo from "../assets/logo-nobg-1.png";
import { navItems, socialLinks } from "../constants";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        mobileDrawerOpen
          ? "bg-white text-black shadow-md"
          : "bg-gradient-to-b from-black/80 to-transparent text-white lg:bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* --- Left: Logo & Name --- */}
        <div className="flex items-center shrink-0 gap-2">
          <img className="h-20 w-20" src={logo} alt="logo" />
          <span className="text-xl tracking-tight font-semibold">
            Jersey Wood Flooring
          </span>
        </div>

        {/* --- Center: Nav Items with optional dropdowns --- */}
        <ul className="hidden lg:flex gap-8 text-sm font-medium">
          {navItems.map((item, index) =>
            item.children ? (
              <li key={index} className="group relative">
                <button className="flex items-center gap-1 hover:text-white/50">
                  {item.label}
                  <ChevronDown size={14} />
                </button>
                <div className="absolute top-full left-0 bg-white text-black rounded shadow-lg mt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                  <ul className="p-3 w-44 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <a
                          href={child.href}
                          className="block hover:text-white/50"
                        >
                          {child.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ) : (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-white/50 transition-colors"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        {/* --- Right: Social Links --- */}
        <div className="hidden lg:flex items-center gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/50 transition-transform transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* --- Mobile Hamburger --- */}
        <div className="lg:hidden">
          <button 
            onClick={toggleNavbar}
            className="cursor-pointer p-2"
            aria-label="Toggle menu"
          >
            {mobileDrawerOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* --- Mobile Drawer --- */}
      <div
        className={`lg:hidden bg-white text-black w-full p-6 flex flex-col items-center border-t border-neutral-300 overflow-hidden transform transition-all duration-300 ${
          mobileDrawerOpen
            ? "opacity-100 max-h-screen translate-y-0 pointer-events-auto"
            : "opacity-0 max-h-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-4 w-full text-lg">
          {navItems.map((item, index) =>
            item.children ? (
              <details key={index} className="w-full">
                <summary className="font-medium cursor-pointer py-1">
                  {item.label}
                </summary>
                <ul className="pl-4 mt-2 space-y-1 text-sm">
                  {item.children.map((child) => (
                    <li key={child.label}>
                      <a
                        href={child.href}
                        className="block hover:text-white/50"
                      >
                        {child.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <li key={index}>
                <a
                  href={item.href}
                  className="block hover:text-black/50 w-full text-center"
                >
                  {item.label}
                </a>
              </li>
            )
          )}
        </ul>

        <div className="w-16 h-px bg-neutral-400/40 my-4" />

        {/* Mobile Social Links */}
        <div className="flex gap-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black/50 transition-transform transform hover:scale-110"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
