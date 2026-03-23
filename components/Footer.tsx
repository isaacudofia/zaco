'use client';

import { Mail, Phone, MapPin, ArrowUpRight, Send } from 'lucide-react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  // Replace 'YOUR_FORMSPREE_ID' with the ID provided by Formspree
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

  const contactDetails = [
    {
      icon: <Mail size={24} />,
      label: "Contact Email",
      value: "isaacudofia0@gmail.com",
      href: "mailto:isaacudofia0@gmail.com"
    },
    {
      icon: <Phone size={24} />,
      label: "Phone Number",
      value: "+234 810 570 7657",
      href: "tel:+2348105707657"
    },
    {
      icon: <MapPin size={24} />,
      label: "Current Location",
      value: "Lagos, Nigeria",
      href: "#"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* LEFT COLUMN: Contact Information */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-[#121212] rounded-[40px] p-10 border border-gray-800/40 flex flex-col justify-between h-full">
            <div>
              <p className="text-[#999999] uppercase tracking-[0.2em] text-[10px] font-bold mb-4">Contact Info</p>
              <h2 className="text-3xl font-bold text-white mb-10 tracking-tight">Let’s discuss your next project.</h2>
              
              <div className="space-y-8">
                {contactDetails.map((item, idx) => (
                  <Link key={idx} href={item.href} className="flex items-center gap-5 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#161616] border border-gray-800/50 flex items-center justify-center text-[#f06543] group-hover:bg-[#f06543] group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[#999999] text-xs uppercase tracking-wider mb-1">{item.label}</p>
                      <p className="text-white font-medium group-hover:text-[#f06543] transition-colors">{item.value}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <p className="text-[#999999] text-[10px] uppercase tracking-[0.2em] font-bold mb-6">Social Profiles</p>
              <div className="flex gap-4">
                {['LinkedIn', 'GitHub', 'Twitter'].map((social) => (
                  <Link key={social} href="#" className="w-12 h-12 rounded-2xl bg-[#161616] border border-gray-800/50 flex items-center justify-center text-[#999999] hover:text-white hover:bg-[#f06543] transition-all">
                    <ArrowUpRight size={18} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Functional Contact Form */}
        <div className="lg:col-span-8">
          <div className="bg-[#121212] rounded-[40px] p-10 md:p-16 border border-gray-800/40">
            {state.succeeded ? (
              <div className="text-center py-20">
                <h3 className="text-[#f06543] text-3xl font-bold mb-4">Message Sent!</h3>
                <p className="text-[#999999]">Thanks for reaching out, Isaac will get back to you shortly.</p>
                <button 
                  onClick={() => window.location.reload()} 
                  className="mt-8 text-white underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-10 leading-tight">
                  Ready to ship <span className="text-[#f06543]">scalable</span> code?
                </h2>
                
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <input id="name" name="name" type="text" required placeholder="Name *" className="bg-[#161616] border border-gray-800/50 rounded-2xl p-4 text-white focus:outline-none focus:border-[#f06543] transition-colors" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <input id="email" name="email" type="email" required placeholder="Email *" className="bg-[#161616] border border-gray-800/50 rounded-2xl p-4 text-white focus:outline-none focus:border-[#f06543] transition-colors" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs" />
                  </div>

                  <div className="md:col-span-2">
                    <input id="subject" name="subject" type="text" required placeholder="Subject *" className="bg-[#161616] border border-gray-800/50 rounded-2xl p-4 w-full text-white focus:outline-none focus:border-[#f06543] transition-colors" />
                  </div>

                  <div className="md:col-span-2">
                    <textarea id="message" name="message" rows={5} required placeholder="Your Message *" className="bg-[#161616] border border-gray-800/50 rounded-2xl p-4 w-full text-white focus:outline-none focus:border-[#f06543] transition-colors resize-none"></textarea>
                    <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs" />
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="md:col-span-2 bg-[#161616] text-white py-4 rounded-2xl font-bold border border-gray-800/50 hover:bg-[#f06543] hover:border-[#f06543] transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactPage;