const testimonials = [
  {
    text: "Working with your design team was an absolute pleasure. The attention to detail and creativity exceeded my expectations. Thank you for making my home beautiful!",
    name: "Sophie Carter",
    location: "New York, USA",
    avatar: SophieImg,
  },
  {
    text: "Exceptional service! From the initial consultation to the final reveal, your team demonstrated professionalism and a keen eye for design. Highly recommend!",
    name: "James Bennett",
    location: "Toronto, Canada",
    avatar: JamesImg,
  },
];

const Testimonials = () => {
  return (
    <section className="w-full bg-white px-6 md:px-12 lg:px-20 py-16">

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* Left — Heading + Room Image */}
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold text-black leading-snug mb-6">
            What Our Customers<br />Say About Us
          </h2>
          <img
            src={RoomImg}
            alt="Interior Room"
            className="w-full h-72 object-cover"
          />
        </div>

        {/* Right — Cards shifted left to overlap the image */}
        <div className="flex gap-5 -ml-20 mt-20">

          {testimonials.map((t) => (
            <div key={t.name} className="flex-1 bg-[#222] text-white p-8 flex flex-col gap-5">
              <span className="text-4xl leading-none">"</span>
              <p className="text-sm text-gray-400 leading-7">{t.text}</p>
              <div className="flex items-center gap-3 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-gray-400">{t.location}</div>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>

      {/* Nav Arrows */}
      <div className="flex gap-3 mt-6">
        <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-base hover:bg-gray-100 transition">←</button>
        <button className="w-10 h-10 border border-gray-300 flex items-center justify-center text-base hover:bg-gray-100 transition">→</button>
      </div>

    </section>
  );
};

export default Testimonials;