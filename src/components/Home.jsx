import Box from "../assets/rectangle.svg";

const Home = () => {
  return (
    <section className="w-full min-h-[calc(100vh-64px)] bg-white px-6 md:px-12 lg:px-20 py-10 overflow-hidden flex items-center">
      <div className="grid lg:grid-cols-2 gap-10 items-center w-full">
        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-black">
            Interior Design
          </h1>

          <p className="mt-6 text-gray-600 max-w-xl leading-7 text-sm md:text-base">
            Step into a world where the art of Interior Design is meticulously
            crafted to bring together timeless elegance and cutting-edge modern
            innovation, Allowing you to transform your living spaces into the
            epitome of luxury and sophistication
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition">
            Start Project
          </button>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-10 md:gap-16">
            <div>
              <h2 className="text-4xl font-medium text-gray-700">400+</h2>
              <p className="text-gray-500 text-sm mt-1">Project Complete</p>
            </div>
            <div>
              <h2 className="text-4xl font-medium text-gray-700">600+</h2>
              <p className="text-gray-500 text-sm mt-1">Satisfied Clients</p>
            </div>
            <div>
              <h2 className="text-4xl font-medium text-gray-700">100+</h2>
              <p className="text-gray-500 text-sm mt-1">Unique Styles</p>
            </div>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex flex-col items-end space-y-12">
          {/* Top Image */}
          <img
            src="/Home1.jpg"
            alt="Interior Design"
            className="w-[320px] lg:w-[380px] h-[250px] lg:h-[280px] object-cover"
          />

          {/* Bottom Image */}
          <div className="relative -mt-10 mr-auto">
            {/* Square outline */}
            <div className="absolute -left-8 -top-8 w-25 h-25 border border-gray-700" />

            <img
              src="/Home2.jpg"
              alt="Living Room"
              className="w-[380px] lg:w-[440px] h-[240px] lg:h-[300px] object-cover relative z-10"
            />

            {/* Arrow Button */}
            <button className="absolute bottom-0 right-0 w-[80px] h-[80px] bg-black flex items-center justify-center z-10 text-white text-3xl">
              ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
