'use client';

import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-6 py-10">
      {/* THE MAIN WRAPPER CARD */}
      <div className="bg-[#121212] rounded-[40px] border border-gray-800/40 p-8 md:p-16 lg:p-20">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#999999] text-[10px] uppercase tracking-[0.4em] font-bold mb-4">
            contact
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Get in Touch with Me!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Office */}
            <div className="flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#161616] border border-gray-800/50 flex items-center justify-center text-[#f06543] group-hover:bg-[#f06543] group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Our Office:</p>
                <p className="text-[#999999] text-sm leading-relaxed">Jurain, Dhaka Bangladesh</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#161616] border border-gray-800/50 flex items-center justify-center text-[#f06543] group-hover:bg-[#f06543] group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Contact Number:</p>
                <p className="text-[#999999] text-sm leading-relaxed">+1234321321</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#161616] border border-gray-800/50 flex items-center justify-center text-[#f06543] group-hover:bg-[#f06543] group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Email Us:</p>
                <p className="text-[#999999] text-sm leading-relaxed">websitename@mail.com</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-8 bg-[#161616] rounded-[30px] p-8 md:p-10 border border-gray-800/30">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium ml-1">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Steve Milner" 
                    className="w-full bg-[#121212] border border-gray-800/50 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#f06543] transition-all"
                  />
                </div>
                {/* Email Address */}
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium ml-1">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="hello@websitename.com" 
                    className="w-full bg-[#121212] border border-gray-800/50 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#f06543] transition-all"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-white text-sm font-medium ml-1">Your Message</label>
                <textarea 
                  rows={5}
                  placeholder="Write Your message" 
                  className="w-full bg-[#121212] border border-gray-800/50 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#f06543] transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button 
                type="submit"
                className="inline-flex items-center gap-2 bg-[#f06543] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#000000] transition-all"
              >
                Send Me Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;