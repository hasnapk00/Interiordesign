import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Sophie from "../assets/Sophie.svg";
import James from "../assets/James.svg";
import Roomm from "../assets/roomm.svg";

const testimonials = [
  {
    text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
    name: "Sophie Carter",
    location: "New York, USA",
    avatar: Sophie,
  },
  {
    text: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    name: "James Bennett",
    location: "Toronto, Canada",
    avatar: James,
  },
  {
    text: "The lighting design completely changed the vibe of our space. It's much more productive now and feels extremely premium. Great communication all through!",
    name: "Michael Chen",
    location: "San Francisco, USA",
    avatar: James,
  },
  {
    text: "From outdoor design to room layout spacing, the attention to detail is remarkable. They delivered exactly what was promised on time. 10/10 service.",
    name: "Emma Watson",
    location: "London, UK",
    avatar: Sophie,
  },
];

const Testimonials = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get visible testimonials (1 for mobile, 2 for desktop/tablet)
  const firstVisible = testimonials[startIndex];
  const secondVisible = testimonials[(startIndex + 1) % testimonials.length];

  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-16 lg:py-24 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Mobile-only Heading */}
        <h2 className="text-3xl font-semibold text-black leading-snug mb-8 lg:hidden">
          What Our Customers<br />Say About Us
        </h2>

        <div className="relative lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          
          {/* Left Column: Room Image + Navigation Buttons */}
          <div className="lg:col-span-5 flex flex-col">
            <img
              src={Roomm}
              alt="Interior Room"
              className="w-full h-[320px] md:h-[400px] lg:h-[440px] object-cover rounded-sm shadow-md"
            />
            {/* Navigation Arrows */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="w-12 h-12 bg-[#f4f4f5] hover:bg-[#e4e4e7] flex items-center justify-center transition-colors rounded-sm cursor-pointer border-none"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-5 h-5 text-[#27272a]" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 bg-[#f4f4f5] hover:bg-[#e4e4e7] flex items-center justify-center transition-colors rounded-sm cursor-pointer border-none"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-5 h-5 text-[#27272a]" />
              </button>
            </div>
          </div>

          {/* Right Column: Heading (desktop) + Testimonial Cards */}
          <div className="lg:col-span-7 flex flex-col mt-8 lg:mt-0">
            {/* Desktop Heading */}
            <h2 className="hidden lg:block text-[40px] font-semibold text-black leading-[1.2] mb-8">
              What Our Customers<br />Say About Us
            </h2>

            {/* Cards container with transition effects */}
            <div className="flex flex-col md:flex-row gap-6 lg:-ml-60 z-10 transition-all duration-500">
              
              {/* Card 1 */}
              <div className="lg:bg-white lg:pt-6 lg:pl-6 lg:pb-6 shrink-0 z-10 w-full md:w-[330px] lg:w-[370px]">
                <div className="w-full h-[340px] bg-[#1c1c1c] p-8 flex flex-col justify-between rounded-sm shadow-lg">
                  <div className="text-white text-5xl font-serif font-bold leading-none select-none">
                    “
                  </div>
                  <p className="text-zinc-300 text-[15px] leading-7 font-light h-[140px] overflow-y-auto">
                    {firstVisible.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={firstVisible.avatar}
                      alt={firstVisible.name}
                      className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                    />
                    <div>
                      <h4 className="text-white font-medium text-base">
                        {firstVisible.name}
                      </h4>
                      <p className="text-zinc-400 text-xs mt-0.5">
                        {firstVisible.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Only show on screens that aren't phone screen sizes, otherwise it stacks or overflows */}
              <div className="hidden md:block lg:pt-6 lg:pb-6 shrink-0 w-[330px] lg:w-[370px]">
                <div className="w-full h-[340px] bg-[#1c1c1c] p-8 flex flex-col justify-between rounded-sm shadow-lg">
                  <div className="text-white text-5xl font-serif font-bold leading-none select-none">
                    “
                  </div>
                  <p className="text-zinc-300 text-[15px] leading-7 font-light h-[140px] overflow-y-auto">
                    {secondVisible.text}
                  </p>
                  <div className="flex items-center gap-4">
                    <img
                      src={secondVisible.avatar}
                      alt={secondVisible.name}
                      className="w-12 h-12 rounded-full object-cover border border-zinc-700"
                    />
                    <div>
                      <h4 className="text-white font-medium text-base">
                        {secondVisible.name}
                      </h4>
                      <p className="text-zinc-400 text-xs mt-0.5">
                        {secondVisible.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;