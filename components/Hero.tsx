'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from "react-icons/fa6";

const Hero = () => {
  const techStack = [
    "Node.js", "React", "Next.js", "NestJS", "TypeScript", 
    "Shopify", "PostgreSQL", "MongoDB", "Express","Docker", "Tailwind CSS", "Liquid"
  ];

  const socialLinks = [
    { 
      Icon: FaLinkedinIn, 
      href: "https://linkedin.com/in/isaacudofia", 
      label: "LinkedIn" 
    },
    { 
      Icon: FaWhatsapp, 
      href: "https://wa.me/2348105707657", 
      label: "WhatsApp" 
    },
    { 
      Icon: FaGithub, 
      href: "https://github.com/isaacudofia", 
      label: "GitHub" 
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 font-sans">
        
        {/* LEFT CARD: Profile Information */}
        <div className="md:col-span-4 bg-[#121212] rounded-[40px] p-8 border border-gray-800/50 flex flex-col items-center text-center">
          <div className="relative w-full aspect-square bg-[#f06543] rounded-[40px] overflow-hidden mb-8">
            <Image 
              src="/profile pic.jpeg" 
              alt="Isaac Udofia" 
              fill
              className="object-cover brightness-110 object-top"
              priority 
            />
          </div>
          
          <h1 className="text-3xl font-bold mb-2 text-white">Isaac Udofia</h1>
          <p className="text-[#999999] text-sm mb-8 tracking-tight leading-relaxed">
            Full-Stack Developer | JavaScript (Node.js/Nest.js) | <br />
            Shopify Expert
          </p>
          
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <Link 
                key={index} 
                href={social.href} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-black border border-gray-800/50 flex items-center justify-center text-[#999999] hover:text-white hover:border-[#f06543] hover:bg-[#f06543]/10 transition-all duration-300"
              >
                <social.Icon size={20} />
              </Link>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="md:col-span-8 flex flex-col gap-6">
          
          {/* TOP RIGHT CARD */}
          <div className="bg-[#121212] rounded-[40px] p-10 border border-gray-800/50 flex flex-col justify-center flex-grow">
            <p className="text-[#999999] uppercase tracking-[0.2em] text-[10px] font-bold mb-4">
              Frontend & Backend Software Engineer
            </p>
            <h2 className="text-4xl md:text-5xl font-medium leading-[1.2] mb-6 text-white tracking-tight">
              I’m Isaac Udofia, specialized in building scalable APIs, custom Shopify themes, and high-performance web interfaces.
            </h2>

            <div className="flex items-center gap-3 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36D399] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#36D399]"></span>
              </span>
              <span className="text-[#999999] text-sm font-medium">Available for Full-Stack Roles</span>
            </div>

            <Link 
              href="/ISAAC CV UPDATED.pdf" 
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#f06543] text-white w-fit px-8 py-3 rounded-2xl font-semibold hover:bg-[#000000] transition-all border border-transparent hover:border-gray-800"
            >
              Download CV <span className="text-lg">↓</span>
            </Link>
          </div>

          {/* BOTTOM RIGHT CARD: Moderated Skills Ticker */}
          <div className="bg-[#121212] rounded-[40px] p-8 border border-gray-800/50 overflow-hidden">
            <p className="text-[#999999] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              Core Technical Stack
            </p>
            
            <div className="relative flex overflow-x-hidden">
              <motion.div 
                className="flex whitespace-nowrap gap-12 items-center"
                animate={{ x: ["0%", "-100%"] }}
                transition={{
                  ease: "linear",
                  duration: 40, // Increased from 25 to 40 for a more moderate speed
                  repeat: Infinity,
                }}
              >
                {techStack.map((tech, index) => (
                  <span 
                    key={index} 
                    className="text-xl font-bold tracking-tighter text-white/20 uppercase hover:text-[#f06543] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
                {techStack.map((tech, index) => (
                  <span 
                    key={`dup-${index}`} 
                    className="text-xl font-bold tracking-tighter text-white/20 uppercase hover:text-[#f06543] transition-colors cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>

              <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none"></div>
              <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;