import { Phone, Mail, MapPin, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        message: "",
      });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="w-full bg-white px-6 md:px-12 lg:px-20 py-20 font-sans border-t border-zinc-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
        
        {/* Left Side: Contact Information Card */}
        <div className="lg:col-span-5 bg-black text-white p-8 md:p-12 flex flex-col justify-between rounded-sm relative overflow-hidden">
          {/* Subtle design element */}
          <div className="absolute right-0 bottom-0 translate-x-12 translate-y-12 w-64 h-64 border border-zinc-800 rounded-full opacity-30 pointer-events-none" />
          
          <div>
            <span className="text-zinc-400 text-xs font-semibold uppercase tracking-widest">Connect With Us</span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 leading-tight">
              Let’s Create Your <br />Dream Space
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-12 max-w-sm">
              Ready to elevate your home? Reach out to our design experts. We are here to bring luxury, efficiency, and timeless aesthetics to your project.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Call Us</p>
                  <a href="tel:+1321456789" className="text-sm font-semibold hover:text-zinc-300 transition">+1 (321) 456-7890</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Email Us</p>
                  <a href="mailto:design@vivadecor.com" className="text-sm font-semibold hover:text-zinc-300 transition">design@vivadecor.com</a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Visit Office</p>
                  <p className="text-sm font-semibold">Design Avenue Cityville, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 lg:mt-0 pt-8 border-t border-zinc-900">
            <p className="text-xs text-zinc-500">Working Hours: Mon - Fri: 9am - 6pm IST</p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold text-black mb-2">Send Us a Message</h3>
          <p className="text-sm text-gray-500 mb-8">Fill out the form below and our design coordinator will get back to you within 24 hours.</p>

          {submitted ? (
            <div className="bg-zinc-50 border border-zinc-200 text-black p-8 text-center rounded-sm transition-all">
              <h4 className="text-xl font-semibold mb-2">Thank You!</h4>
              <p className="text-sm text-zinc-600">Your design inquiry has been successfully sent. We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-xs font-semibold text-black uppercase tracking-wider">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="John"
                    className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black focus:bg-white text-zinc-900 text-sm py-3 px-4 outline-none rounded-sm transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-xs font-semibold text-black uppercase tracking-wider">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Doe"
                    className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black focus:bg-white text-zinc-900 text-sm py-3 px-4 outline-none rounded-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-semibold text-black uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black focus:bg-white text-zinc-900 text-sm py-3 px-4 outline-none rounded-sm transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-xs font-semibold text-black uppercase tracking-wider">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black focus:bg-white text-zinc-900 text-sm py-3 px-4 outline-none rounded-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="projectType" className="text-xs font-semibold text-black uppercase tracking-wider">Project Type</label>
                  <select
                    id="projectType"
                    name="projectType"
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black focus:bg-white text-zinc-800 text-sm py-3 px-4 outline-none rounded-sm transition-all"
                  >
                    <option value="">Select an option</option>
                    <option value="living-room">Living Room Interior</option>
                    <option value="bedroom">Bedroom Design</option>
                    <option value="commercial-office">Commercial/Office</option>
                    <option value="outdoor">Outdoor/Landscaping</option>
                    <option value="full-home">Full Home Makeover</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="budget" className="text-xs font-semibold text-black uppercase tracking-wider">Budget Range</label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black focus:bg-white text-zinc-800 text-sm py-3 px-4 outline-none rounded-sm transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under 10,000</option>
                    <option value="10k-25k">10,000 - 25,000</option>
                    <option value="25k-50k">25,000 - 50,000</option>
                    <option value="50k-plus">50,000+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-black uppercase tracking-wider">Project details / Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your design goals, timeline, or any specific requirements..."
                  className="w-full bg-[#fcfcfc] border border-zinc-200 focus:border-black focus:bg-white text-zinc-900 text-sm py-3 px-4 outline-none rounded-sm resize-none transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-sm font-semibold uppercase tracking-wider text-xs hover:bg-gray-800 active:scale-[0.99] transition-all duration-200 mt-2 flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                Send Enquiry <Send size={14} />
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
