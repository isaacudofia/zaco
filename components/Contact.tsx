'use client';

import { MapPin, Phone, Mail, Send, Loader2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  // Replace "xbjvnrvz" with your actual Formspree ID after registering https://formspree.io/f/mkoqdjbz
  const [state, handleSubmit] = useForm("mkoqdjbz");

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
            Let’s Build Something Great!
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT COLUMN: Contact Info */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Location */}
            <div className="flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#161616] border border-gray-800/50 flex items-center justify-center text-[#f06543] group-hover:bg-[#f06543] group-hover:text-white transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Location:</p>
                <p className="text-[#999999] text-sm leading-relaxed">Lagos, Nigeria</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#161616] border border-gray-800/50 flex items-center justify-center text-[#f06543] group-hover:bg-[#f06543] group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Phone Number:</p>
                <p className="text-[#999999] text-sm leading-relaxed">+234 810 570 7657</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-[#161616] border border-gray-800/50 flex items-center justify-center text-[#f06543] group-hover:bg-[#f06543] group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-white font-semibold mb-1">Email Me:</p>
                <p className="text-[#999999] text-sm leading-relaxed">isaacudofia0@gmail.com</p>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Functional Contact Form */}
          <div className="lg:col-span-8 bg-[#161616] rounded-[30px] p-8 md:p-10 border border-gray-800/30">
            {state.succeeded ? (
              <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                <h3 className="text-[#f06543] text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-[#999999]">Thanks for reaching out, Isaac will get back to you shortly.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-8 text-white underline underline-offset-4 hover:text-[#f06543] transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Full Name */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium ml-1">Full Name</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      required
                      placeholder="Your Name" 
                      className="w-full bg-[#121212] border border-gray-800/50 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#f06543] transition-all"
                    />
                  </div>
                  {/* Email Address */}
                  <div className="space-y-2">
                    <label className="text-white text-sm font-medium ml-1">Email Address</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      placeholder="hello@example.com" 
                      className="w-full bg-[#121212] border border-gray-800/50 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#f06543] transition-all"
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-[#f06543] text-xs mt-1" />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-white text-sm font-medium ml-1">Your Message</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell me about your project or role..." 
                    className="w-full bg-[#121212] border border-gray-800/50 rounded-2xl px-6 py-4 text-white placeholder:text-gray-700 focus:outline-none focus:border-[#f06543] transition-all resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-[#f06543] text-xs mt-1" />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={state.submitting}
                  className="inline-flex items-center gap-2 bg-[#f06543] text-white px-8 py-4 rounded-2xl font-semibold hover:bg-[#000000] transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-transparent hover:border-gray-800"
                >
                  {state.submitting ? (
                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                  ) : (
                    <>Send Me Message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;