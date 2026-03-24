'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <motion.div 
        className="flex flex-col lg:flex-row gap-6 items-stretch"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        
        {/* LEFT CARD: Profile Image */}
        <div className="bg-[#121212] rounded-[40px] p-8 border border-gray-800/40 flex flex-col items-center justify-center flex-shrink-0 w-full lg:w-[40%] min-h-[450px]">
          <motion.div 
            className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-gray-800/30 bg-[#161616] shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
          >
            <Image 
              src="/profile pic.jpeg" 
              alt="Isaac Godwin Udofia" 
              fill
              className="object-cover object-top"
              priority 
            />
          </motion.div>
        </div>

        {/* RIGHT CARD: Content Section */}
        <div className="bg-[#121212] rounded-[40px] p-10 md:p-16 border border-gray-800/40 flex flex-col justify-center flex-grow w-full lg:w-[60%]" >
          
          <h1 className="text-4xl md:text-5xl font-bold leading-[1.15] mb-8 text-white tracking-tight">
            I’m Isaac Udofia, a Full-Stack Software Engineer.
          </h1>
          
          <p className="text-[#999999] text-lg mb-8 tracking-tight leading-relaxed font-medium">
            I am a results-driven developer with over 3 years of experience specializing in backend architecture, 
            custom Shopify ecosystems, and high-performance frontend interfaces.
          </p>

          <div className="text-[#999999] text-[15px] leading-[1.8] space-y-6 max-w-2xl font-light">
            <p>
              My expertise lies in building scalable APIs and delivering high-impact e-commerce experiences 
              using modern frameworks like React and Node.js. I focus on clean architecture, 
              performance optimization, and technical SEO to ensure every project drives measurable business 
              growth. From engineering real-time inventory systems to leading front-end UX 
              improvements that boost conversions, I bridge the gap between complex technical requirements 
              and user-centric design.
            </p>
          </div>
          
          <div className="mt-10">
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-3 bg-[#f06543] text-white px-9 py-4 rounded-2xl font-bold hover:bg-[#000000] transition-all duration-300 border border-transparent hover:border-gray-800"
            >
              Get in touch
              <Mail size={20} />
            </Link>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;