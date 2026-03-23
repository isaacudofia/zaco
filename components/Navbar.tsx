import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-full px-6 pt-6"> 
      {/* This wrapper ensures it matches the width of your Footer/Hero cards */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-8 bg-black border-b border-gray-800/30">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-white">
          Bentos
        </div>

        {/* Centered Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <Link href="/" className="text-white border-b border-white pb-1">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/works" className="hover:text-white transition-colors">Works</Link>
          <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
        </div>

        {/* Hire Me Button */}
        <button className="border border-gray-700 rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-white hover:text-black transition-all flex items-center gap-2">
          Hire Me 
          <span className="text-xs">↗</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;