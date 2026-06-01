import { useState } from "react";
import Logo from "../assets/Logo.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const linkClass = (section) =>
    active === section
      ? "text-black font-semibold underline underline-offset-8 decoration-2"
      : "text-gray-500 hover:text-black";

  return (
    <nav className="w-full bg-white px-6 md:px-12 lg:px-20 py-5 sticky top-0 z-50 shadow-sm border-b border-zinc-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#home" onClick={() => setActive("home")}>
          <img src={Logo} alt="VivaDecor" className="h-8 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-sm">
          <li>
            <a
              href="#home"
              onClick={() => setActive("home")}
              className={linkClass("home")}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#services"
              onClick={() => setActive("services")}
              className={linkClass("services")}
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#contact"
              onClick={() => setActive("contact")}
              className={linkClass("contact")}
            >
              Contact
            </a>
          </li>

          <li>
            <a
              href="#support"
              onClick={() => setActive("support")}
              className={linkClass("support")}
            >
              Support
            </a>
          </li>
        </ul>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-4">
          <a
            href="#home"
            onClick={() => {
              setActive("home");
              setIsOpen(false);
            }}
            className={linkClass("home")}
          >
            Home
          </a>

          <a
            href="#services"
            onClick={() => {
              setActive("services");
              setIsOpen(false);
            }}
            className={linkClass("services")}
          >
            Services
          </a>

          <a
            href="#contact"
            onClick={() => {
              setActive("contact");
              setIsOpen(false);
            }}
            className={linkClass("contact")}
          >
            Contact
          </a>

          <a
            href="#support"
            onClick={() => {
              setActive("support");
              setIsOpen(false);
            }}
            className={linkClass("support")}
          >
            Support
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;