'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto px-6 pb-12 w-full text-white">
      
      {/* CTA Card Section */}
      <div className="bg-[#121212] rounded-[40px] py-20 px-6 text-center border border-gray-800/50">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8 max-w-3xl mx-auto text-white">
          Ready to build scalable solutions or high-impact Shopify experiences?
        </h2>
        
        <p className="text-[#999999] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Let’s collaborate to turn your technical requirements into high-performance reality ✨. I am currently available for full-time roles or specialized contract projects.
        </p>

        {/* Let's Talk Button */}
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-[#f06543] hover:bg-[#000000] text-white px-8 py-4 rounded-2xl font-semibold transition-all group border border-transparent hover:border-gray-800"
        >
          Let’s Talk
          <span className="text-xl group-hover:translate-y-0.5 transition-transform">↓</span>
        </Link>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-[#999999] text-sm px-4">
        <p>
          Copyright @2026, <span className="text-[#f06543] font-medium tracking-tight">Isaac Udofia</span>. All Rights Reserved.
        </p>
        
        <div className="mt-4 md:mt-0 flex items-center gap-1">
          Built with <span className="text-[#f06543] animate-pulse">❤️</span> by Isaac
        </div>
      </div>
    </footer>
  );
};

export default Footer;