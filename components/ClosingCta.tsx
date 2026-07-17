import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const ClosingCta = () => {
  return (
    <section className="mx-auto max-w-7xl px-3 pb-5 pt-3 sm:px-6 sm:pb-8 sm:pt-4 lg:pb-10" aria-labelledby="closing-cta-title">
      <div className="card-glow relative overflow-hidden rounded-3xl border border-white/8 bg-[#121212] p-6 sm:p-8 lg:rounded-[32px] lg:p-10">
        <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#f06543]/10 blur-3xl" />
        <div className="relative grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.3em] text-[#f06543]">
              Project enquiry
            </p>
            <h2 id="closing-cta-title" className="max-w-2xl text-[clamp(1.75rem,4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.035em] text-white text-balance">
              Have a product worth building?
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#999999] sm:text-base">
              Let’s shape it into a dependable experience that performs as well as it looks.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-fit items-center gap-2 rounded-2xl border border-transparent bg-[#f06543] px-6 py-3.5 font-semibold text-white shadow-lg shadow-[#f06543]/10 transition-colors hover:bg-[#d95332]"
          >
            Start a conversation
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ClosingCta;
