import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper for active styling
  const linkStyles = ({ isActive }) =>
    `hover:text-black transition-colors ${
      isActive
        ? "text-black font-semibold underline underline-offset-8 decoration-2"
        : "text-gray-500 font-medium"
    }`;

  const mobileLinkStyles = ({ isActive }) =>
    `py-2 text-base transition-colors ${
      isActive
        ? "text-black font-semibold border-l-2 border-black pl-2"
        : "text-gray-500 pl-2"
    }`;

  return (
    <nav className="w-full bg-white px-6 md:px-12 lg:px-20 py-5 sticky top-0 z-50 shadow-sm border-b border-zinc-100 font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="VivaDecor" className="h-8 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-sm">
          <li>
            <NavLink to="/" className={linkStyles}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/services" className={linkStyles}>
              Services
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={linkStyles}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/support" className={linkStyles}>
              Support
            </NavLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link
          to="/signup"
          className="hidden md:block bg-black text-white px-6 py-2.5 rounded-sm font-medium hover:bg-gray-800 transition text-sm"
        >
          Sign Up
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-zinc-100 flex flex-col gap-4">
          <NavLink
            to="/"
            className={mobileLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={mobileLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={mobileLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>

          <NavLink
            to="/support"
            className={mobileLinkStyles}
            onClick={() => setIsOpen(false)}
          >
            Support
          </NavLink>

          <Link
            to="/signup"
            className="bg-black text-white px-6 py-3 rounded-sm text-center font-medium mt-2"
            onClick={() => setIsOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;