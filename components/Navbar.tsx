'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
  { name: 'Services', href: '/services' },
  { name: 'Works', href: '/works' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const navigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (navigationRef.current && !navigationRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-6 sm:pt-4" aria-label="Main navigation">
      <div ref={navigationRef} className="relative mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center rounded-[20px] border border-white/8 bg-[#111]/90 px-4 py-3.5 shadow-xl shadow-black/20 backdrop-blur-xl md:grid-cols-[1fr_auto_1fr] md:px-6">
        <Link href="/" onClick={() => setIsOpen(false)} className="group w-fit" aria-label="Isaac Udofia — home">
          <span className="block text-[1.4rem] font-bold leading-none tracking-[-0.055em] text-white transition-colors group-hover:text-white/75">
            Isaac<span className="text-[#f06543]">.</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-xs font-medium transition-colors ${
                  isActive
                    ? 'text-white'
                    : 'text-white/45 hover:text-white/80'
                }`}
              >
                {link.name}
                {isActive && <span className="absolute inset-x-0 -bottom-0.5 mx-auto h-0.5 w-4 rounded-full bg-[#f06543]" aria-hidden="true" />}
              </Link>
            );
          })}
        </div>

        <div className="hidden justify-self-end md:block">
          <ThemeToggle />
        </div>

        <div className="flex items-center justify-self-end gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/[0.035] text-white/60 transition-colors hover:text-white"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="absolute left-0 right-0 top-[calc(100%+0.6rem)] overflow-hidden rounded-[20px] border border-white/10 bg-[#151515] p-2 shadow-2xl shadow-black/50 md:hidden">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium transition-colors ${
                    isActive ? 'bg-white/[0.06] text-white' : 'text-white/50 hover:bg-white/[0.035] hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`h-1.5 w-1.5 rounded-full ${isActive ? 'bg-[#f06543]' : 'bg-white/15'}`} aria-hidden="true" />
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
