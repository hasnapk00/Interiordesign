import { HiOutlineMail } from 'react-icons/hi'

const Support = () => {
  return (
 <div id="support" className="w-full font-sans">
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
        
    </div>
  )
}

export default Support