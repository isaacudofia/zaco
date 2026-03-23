'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="w-full px-6 pt-6"> 
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-8 bg-black border-b border-gray-800/30">
        
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-white">
          Isaac
        </div>

        {/* Centered Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`${
                  isActive 
                    ? 'text-white border-b border-white' 
                    : 'text-gray-400 hover:text-[#eb5d3a] focus:text-[#eb5d3a]'
                } pb-1 transition-colors outline-none`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Hire Me Link */}
        <Link 
          href="/contact"
          className="border border-gray-700 rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-[#eb5d3a] hover:border-[#eb5d3a] focus:bg-[#eb5d3a] transition-all flex items-center gap-2 outline-none"
        >
          Hire Me 
          <span className="text-xs">↗</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;