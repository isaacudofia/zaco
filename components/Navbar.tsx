'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Works', href: '/works' },
    { name: 'Contact', href: '/contact' },
  ];

  // 1. CLICK OUTSIDE LOGIC
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // 2. FIXED ROUTE CHANGE: Only triggers if the menu is actually open
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]); // Removed isOpen from deps to strictly trigger on path change

  return (
    <nav className="w-full px-6 pt-6 relative z-[999]"> 
      <div className="max-w-7xl mx-auto flex items-center justify-between py-5 px-8 bg-[#121212] rounded-[24px] border border-gray-800/40 relative">
        
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-[#f06543] transition-colors">
          Isaac
        </Link>

        {/* DESKTOP NAVIGATION: Hidden on Mobile, Visible on md+ */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link 
                key={link.name} 
                href={link.href} 
                className={`${
                  isActive ? 'text-[#f06543]' : 'text-gray-400 hover:text-white'
                } transition-colors`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <Link 
            href="/contact"
            className="hidden sm:flex border border-gray-800 rounded-full px-6 py-2 text-sm font-medium text-white hover:bg-[#f06543] hover:border-[#f06543] transition-all items-center gap-2"
          >
            Hire Me <ArrowUpRight size={14} />
          </Link>

          {/* MOBILE TOGGLE: Only visible on small screens */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-[#1a1a1a] border border-gray-800 text-gray-400 hover:text-white transition-all outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE DROPDOWN */}
        {isOpen && (
          <div 
            ref={menuRef}
            className="md:hidden absolute top-[115%] right-0 w-64 bg-[#1a1a1a] border border-gray-800/60 rounded-3xl shadow-2xl py-4 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200 z-[1000]"
          >
            <div className="flex flex-col">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link 
                    key={link.name} 
                    href={link.href} 
                    className={`px-8 py-4 text-sm font-medium transition-all flex items-center justify-between group ${
                      isActive ? 'text-[#f06543] bg-white/5' : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                    {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#f06543]" />}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;