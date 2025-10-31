import { useState } from "react";
import logo from "../assets/logo-nobg-1.png";
import { navItems } from "../constants";
import { Menu, X, ChevronDown } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";
import { FaTiktok, FaGoogle } from "react-icons/fa";

const NavbarRightNav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const toggleNavbar = () => setMobileDrawerOpen(!mobileDrawerOpen);

  return (
    <>
      {/* --- Navbar --- */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-neutral-100/70 text-black shadow-md transition-all duration-500">
        <nav className="container mx-auto flex justify-between items-center px-4">
          {/* --- Left: Logo --- */}
          <div className="flex items-center shrink-0 gap-2">
            <img className="h-18 w-20" src={logo} alt="logo" />
            <span className="text-xl tracking-tight font-semibold">
              Jersey Wood Flooring
            </span>
          </div>

          {/* --- Right: Nav Items --- */}
          <ul className="hidden lg:flex gap-8 text-sm font-medium items-center mr-5">
            {navItems.map((item, index) =>
              item.children ? (
                <li key={index} className="group relative">
                  <button className="flex items-center gap-1 hover:text-gray-500 transition">
                    {item.label} <ChevronDown size={14} />
                  </button>
                  <div className="absolute top-full right-0 bg-white text-black rounded shadow-lg mt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-300">
                    <ul className="p-3 w-44 space-y-1">
                      {item.children.map((child) => (
                        <li key={child.label}>
                          <a
                            href={child.href}
                            className="block hover:text-gray-500"
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
                    className="hover:text-gray-500 transition"
                  >
                    {item.label}
                  </a>
                </li>
              )
            )}
          </ul>

          {/* --- Mobile Hamburger --- */}
          <div className="lg:hidden">
            <button
              onClick={toggleNavbar}
              className="cursor-pointer p-2"
              aria-label="Toggle menu"
              aria-expanded={mobileDrawerOpen}
            >
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </header>

      {/* --- Mobile Drawer (Smooth transition, stays mounted) --- */}
<div
  className={`fixed top-18 left-0 w-full z-40 backdrop-blur-xl bg-neutral-100/70 text-black border-t border-white/30 shadow-2xl rounded-b-3xl transition-all duration-300 ease-in-out transform ${
    mobileDrawerOpen
      ? "opacity-100 translate-y-0 pointer-events-auto"
      : "opacity-0 -translate-y-4 pointer-events-none"
  }`}
>
  <div className="p-6">
    {/* Mobile Nav Items */}
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
                    className="block hover:text-black/50"
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

    {/* Separator line */}
    <div className="w-16 h-px bg-black/20 mx-auto mt-4 mb-3" />

    {/* Social Icons */}
    <div className="flex justify-center px-4 gap-6 mt-6 text-black/80">
      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <Facebook size={22} />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <Instagram size={22} />
      </a>
      <a href="https://tiktok.com" target="_blank" rel="noreferrer">
        <FaTiktok size={22} />
      </a>
      <a href="https://google.com" target="_blank" rel="noreferrer">
        <FaGoogle size={22} />
      </a>
    </div>
  </div>
</div>
      
    </>
  );
};

export default NavbarRightNav;