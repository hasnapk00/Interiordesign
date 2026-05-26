import React from "react";
import Logo from "../assets/Logo.svg";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full font-sans">
      {/* Newsletter Section */}
      <section className="bg-white px-6 md:px-12 lg:px-20 pt-20 pb-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-[44px] font-semibold text-[#1a1a1a] leading-tight max-w-2xl mx-auto">
            Subscribe to Our Newsletter
            <br />
            for Design Insights
          </h2>
          
          <p className="text-zinc-500 text-sm md:text-base max-w-xl mx-auto mt-6 leading-relaxed">
            Be the first to discover trends, inspirations, and special offers as
            we bring the world of design directly to your inbox
          </p>

          {/* Overlapping Input Container */}
          <div className="absolute left-6 right-6 bottom-0 translate-y-1/2 z-20">
            <div className="mx-auto bg-white rounded-md shadow-[0_15px_30px_-5px_rgba(0,0,0,0.15)] p-2 flex flex-col sm:flex-row items-center gap-3 sm:gap-0 max-w-3xl w-full border border-zinc-100/50">
              <div className="flex items-center flex-grow w-full px-3 gap-3">
                <HiOutlineMail className="text-zinc-400 w-5 h-5 shrink-0" />
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-transparent text-[#1a1a1a] placeholder-zinc-400 text-sm md:text-[15px] py-2.5 outline-none border-none"
                />
              </div>
              <button className="w-full sm:w-auto bg-[#1c1c1c] text-white px-8 py-3.5 rounded-sm font-medium hover:bg-black transition-colors text-sm md:text-[15px] shrink-0 cursor-pointer text-center">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Footer Section */}
      <footer className="bg-[#1c1c1c] text-white px-6 md:px-12 lg:px-20 pt-28 pb-16 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Logo, description, social icons */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center">
              <img src={Logo} alt="VivaDecor" className="h-8 w-auto brightness-0 invert" />
            </div>
            
            <p className="text-zinc-400 text-sm leading-relaxed max-w-[280px]">
              VivaDecor your premier destination for luxury and modern interior design
            </p>
            
            <div className="flex gap-4 mt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#27272a] hover:bg-zinc-700 rounded-sm flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <FaFacebookF size={16} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#27272a] hover:bg-zinc-700 rounded-sm flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <FaTwitter size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#27272a] hover:bg-zinc-700 rounded-sm flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <FaInstagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 bg-[#27272a] hover:bg-zinc-700 rounded-sm flex items-center justify-center text-white transition-colors cursor-pointer"
              >
                <FaLinkedinIn size={16} />
              </a>
              
            </div>
          </div>

          {/* Column 2: Our Services (First list) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-white font-medium text-base mb-2">Our Services</h3>
            <ul className="flex flex-col gap-4 text-zinc-400 text-sm">
              <li>
                <a href="#interior" className="hover:text-white transition-colors cursor-pointer">
                  Interior design
                </a>
              </li>
              <li>
                <a href="#outdoor" className="hover:text-white transition-colors cursor-pointer">
                  Outdoor design
                </a>
              </li>
              <li>
                <a href="#lightning" className="hover:text-white transition-colors cursor-pointer">
                  Lightning design
                </a>
              </li>
              <li>
                <a href="#office" className="hover:text-white transition-colors cursor-pointer">
                  Office design
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services (Second list) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h3 className="text-white font-medium text-base mb-2">Our Services</h3>
            <ul className="flex flex-col gap-4 text-zinc-400 text-sm">
              <li>
                <a href="#reviews" className="hover:text-white transition-colors cursor-pointer">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors cursor-pointer">
                  Careers
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors cursor-pointer">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#press" className="hover:text-white transition-colors cursor-pointer">
                  Press inquires
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Our Services (Contact & Address) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h3 className="text-white font-medium text-base mb-2">Our Services</h3>
            <div className="flex flex-col gap-4 text-zinc-400 text-sm leading-relaxed">
              <a href="mailto:info@vivadecor.com" className="hover:text-white transition-colors cursor-pointer">
                info@vivadecor.com
              </a>
              <div className="mt-2 text-zinc-400 leading-normal">
                <p>Design Avenue Cityville,</p>
                <p>CA 90210 United States</p>
              </div>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
};

export default Footer;
