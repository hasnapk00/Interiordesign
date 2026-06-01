import { useState } from "react";
import LightingIcon from "../assets/lighting.svg";
import InteriorIcon from "../assets/interior.svg";
import OutdoorIcon from "../assets/outdoor.svg";
import RoomImg from "../assets/room.svg";
import StepsImg from "../assets/steps.svg";
import StartIcon from "../assets/start.svg";
import CraftIcon from "../assets/craft.svg";
import ExecuteIcon from "../assets/execute.svg";


const services = [
  {
    icon: LightingIcon,
    title: "Lighting Design",
    description: "Achieve the perfect balance of ambient, task, and accent lighting for a functional atmosphere",
  },
  {
    icon: InteriorIcon,
    title: "Interior Design",
    description: "From concept to completion, we oversee every detail to bring your vision to life efficiently",
  },
  {
    icon: OutdoorIcon,
    title: "Outdoor Design",
    description: "Celebrate the changing seasons with our seasonal outdoor decor services",
  },
];

const faqs = [
  {
    title: "Living Room Interior Design",
    description: "We create comfortable and luxurious living spaces tailored to your lifestyle. By incorporating custom furniture layouts, ambient lighting, and rich texture palettes, we design the perfect gathering place for your family and guests.",
  },
  {
    title: "Commercial Office Room Interior Design",
    description: "Our commercial office designs optimize workspace functionality and aesthetic appeal. We focus on enhancing productivity, leaving positive client impressions, and boosting employee well-being through ergonomics and modern layouts.",
  },
];

const steps = [
  {
    icon: StartIcon,
    title: "Start Project",
    description: "Embark on your design adventure by initiating your project. Share your vision and set the stage for a bespoke design experience",
  },
  {
    icon: CraftIcon,
    title: "Craft",
    description: "Collaborate closely to achieve design excellence refining your vision and crafting brilliance into every aspect of your space",
  },
  {
    icon: ExecuteIcon,
    title: "Execute",
    description: "Witness your vision becoming a reality as we execute the design plan with precision. Celebrate the joy of your newly transformed space",
  },
];

const Services = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="services" className="w-full bg-white px-6 md:px-12 lg:px-20 py-16 flex flex-col gap-20">

      {/* Part 1 — Our Services */}
      <div>
        <div className="flex items-center gap-4 mb-12">
          <div className="w-10 h-[2px] bg-black" />
          <h2 className="text-3xl font-semibold text-black">Our Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service) => (
            <div key={service.title} className="flex flex-col gap-4">
              <img src={service.icon} alt={service.title} className="w-14 h-14 object-contain" />
              <h3 className="text-base font-semibold text-black">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-6">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Part 2 — Designing Your Dream */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <img src={RoomImg} alt="Interior Room" className="w-full h-[400px] object-cover" />

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug">
            Designing Your Dream With Brilliance
          </h2>

          <p className="text-sm text-gray-500 leading-6">
            Elevate your spaces with bespoke interior designs that reflect your
            unique style and aspirations, crafted with precision and brilliance
            for an unforgettable living experience
          </p>

          <div className="flex flex-col">
            {faqs.map((item, index) => (
              <div key={item.title} className="border-t border-gray-200 py-5">
                <div
                  className="flex items-center justify-between cursor-pointer select-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-sm font-semibold text-black">{item.title}</span>
                  <span className="text-xl text-black">
                    {openFaqIndex === index ? "−" : "+"}
                  </span>
                </div>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaqIndex === index ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm text-gray-500 leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-semibold text-black hover:underline cursor-pointer inline-flex items-center gap-1"
                  >
                    Learn More →
                  </a>
                </div>
              </div>
            ))}
            <div className="border-t border-gray-200" />
          </div>

          <button
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="w-fit bg-black text-white px-10 py-4 text-sm font-medium hover:bg-gray-800 transition cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Part 3 — Three Simple Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug mb-6">
            Designing Your Dream in Three Simple Steps
          </h2>

          {steps.map((step, index) => (
            <div key={step.title} className="flex gap-5">

              {/* Icon + Line */}
              <div className="flex flex-col items-center">
  
  {/* Icon Circle */}
  <div className="w-11 h-11 rounded-full bg-black flex items-center justify-center shrink-0">
    <img
      src={step.icon}
      alt={step.title}
      className="w-5 h-5 object-contain"
    />
  </div>

  {/* Line */}
  {index < steps.length - 1 && (
    <div className="w-[1px] flex-1 bg-gray-300 my-2" />
  )}
</div>

              {/* Text */}
              <div className="flex flex-col gap-2 pb-8">
                <h3 className="text-base font-semibold text-black">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-6">{step.description}</p>
              </div>

            </div>
          ))}
        </div>

        {/* Right Image */}
        <img src={StepsImg} alt="Design Steps" className="w-full h-[450px] object-cover" />
      </div>


    </section>
    
  );
};

export default Services;