import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, Download, MapPin } from 'lucide-react';
import { FaGithub, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa6';

const socialLinks = [
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/isaacudofia', label: 'LinkedIn' },
  { icon: FaGithub, href: 'https://github.com/isaacudofia', label: 'GitHub' },
  { icon: FaWhatsapp, href: 'https://wa.me/2348105707657', label: 'WhatsApp' },
];

const capabilities = [
  { label: 'Frontend', value: 'React · Next.js' },
  { label: 'Backend', value: 'Node.js · NestJS' },
  { label: 'Commerce', value: 'Shopify · Liquid' },
];

const Hero = () => {
  return (
    <section className="mx-auto max-w-7xl px-3 pb-2 pt-5 sm:px-6 sm:pb-3 sm:pt-8 lg:pb-4 lg:pt-10">
      <div className="card-glow overflow-hidden rounded-3xl border border-white/8 bg-[#121212] p-3 sm:p-5 lg:rounded-[36px] lg:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr] lg:gap-6">
          <div className="flex flex-col justify-between px-3 py-6 sm:px-5 sm:py-8 lg:min-h-[31rem] lg:px-7 lg:py-9">
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#36d399] opacity-70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#36d399]" />
                  </span>
                  <span className="text-xs font-medium text-[#b3b3b3] sm:text-sm">Available for new opportunities</span>
                </div>
                <span className="hidden h-4 w-px bg-white/10 sm:block" aria-hidden="true" />
                <span className="flex items-center gap-2 text-xs text-white/40 sm:text-sm">
                  <MapPin size={14} className="text-[#f06543]" aria-hidden="true" /> Lagos, Nigeria
                </span>
              </div>

              <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f06543]">
                Isaac Udofia · Software Engineer
              </p>
              <h1 className="max-w-3xl text-[clamp(2.25rem,5vw,4.1rem)] font-semibold leading-[1.01] tracking-[-0.05em] text-white text-balance">
                Building digital products with clarity, craft, and scale.
              </h1>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-[#999999] sm:text-base">
                I engineer dependable web products—from performant interfaces and Shopify storefronts to APIs that support real business growth.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/works" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f06543] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#f06543]/15 transition-colors hover:bg-[#d95332]">
                Explore my work <ArrowDownRight size={18} aria-hidden="true" />
              </Link>
              <Link href="/Isaac's Resume.pdf" target="_blank" className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                View résumé <Download size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="theme-dark-content relative min-h-[25rem] overflow-hidden rounded-[22px] bg-[#f06543] sm:min-h-[30rem] lg:min-h-full lg:rounded-[28px]">
            <Image
              src="/profile pic.png"
              alt="Isaac Udofia"
              fill
              sizes="(max-width: 1024px) 100vw, 38vw"
              className="object-cover object-top"
              priority
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
              <div>
                <p className="text-lg font-semibold tracking-tight text-white">Isaac Udofia</p>
                <p className="mt-1 text-sm text-white/60">Full-stack engineering · Shopify</p>
              </div>
              <div className="flex gap-2">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <Link key={social.label} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-black/25 text-white/70 backdrop-blur-md transition-all hover:border-[#f06543] hover:text-white">
                      <Icon size={16} aria-hidden="true" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 grid overflow-hidden rounded-[20px] border border-white/8 bg-white/8 sm:grid-cols-3 lg:mt-6 lg:rounded-[24px]">
          {capabilities.map((capability, index) => (
            <div key={capability.label} className={`flex items-center justify-between gap-4 bg-[#161616] px-5 py-4 sm:block sm:px-6 sm:py-4 ${index > 0 ? 'border-t border-white/8 sm:border-l sm:border-t-0' : ''}`}>
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/30">{capability.label}</p>
              <p className="text-sm font-medium text-[#b3b3b3] sm:mt-1.5">{capability.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
