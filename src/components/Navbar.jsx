import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="w-full bg-white px-6 md:px-10 py-4 sticky top-0 z-50">     
   <div className="flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center">
          <img src={Logo} alt="VivaDecor" className="h-8 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-sm font-medium">
          <li>
            <Link
              to="/"
              className="hover:text-gray-600 hover:underline"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className="hover:text-gray-600 hover:underline"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="hover:text-gray-600 hover:underline"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/support"
              className="hover:text-gray-600 hover:underline"
            >
              Support
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <Link
          to="/signup"
          className="hidden md:block bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition"
        >
          Sign Up
        </Link>

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
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium">
          <Link
            to="/"
            className="hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/services"
            className="hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/contact"
            className="hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/support"
            className="hover:text-gray-600"
            onClick={() => setIsOpen(false)}
          >
            Support
          </Link>

          <Link
            to="/signup"
            className="bg-black text-white px-6 py-2 rounded-lg text-center"
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