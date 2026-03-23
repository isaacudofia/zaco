import Link from 'next/link';

const Footer = () => {
  return (
    // STEP 1: Move max-w-7xl and mx-auto to the outer wrapper
    <footer className="max-w-7xl mx-auto px-6 pb-12 w-full text-white">
      
      {/* CTA Card Section */}
      {/* STEP 2: Remove max-w-7xl from here so it takes 100% of the parent (the 7xl) */}
      <div className="bg-[#121212] rounded-[40px] py-20 px-6 text-center border border-gray-800/50">
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-8 max-w-3xl mx-auto text-white">
          Are You Ready to kickstart your project with a touch of magic?
        </h2>
        
        <p className="text-[#999999] text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Reach out and let us make it happen ✨. I am also available for full-time or Part-time opportunities to push the boundaries of design and deliver exceptional work.
        </p>

        {/* Let's Talk Button */}
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-2 bg-[#f06543] hover:bg-[#d95636] text-white px-8 py-4 rounded-2xl font-semibold transition-all group"
        >
          Let us Talk
          <span className="text-xl group-hover:translate-y-0.5 transition-transform">↓</span>
        </Link>
      </div>

      {/* Bottom Copyright Bar */}
      {/* STEP 3: Remove max-w-7xl here as well */}
      <div className="mt-16 flex flex-col md:flex-row justify-between items-center text-[#999999] text-sm px-4">
        <p>
          Copyright @2026, <span className="text-[#f06543] font-medium">Bentos</span> All Rights Reserved.
        </p>
        
        <div className="mt-4 md:mt-0 flex items-center gap-1">
          Crafted with <span className="text-red-500">❤️</span> theme_ocean
        </div>
      </div>
    </footer>
  );
};

export default Footer;