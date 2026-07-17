import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  current?: boolean;
}

const experienceData: ExperienceItem[] = [
  {
    period: 'Aug 2025 — Present',
    role: 'Shopify Front-End & SEO Developer',
    company: 'Ava & George',
    current: true,
  },
  {
    period: 'Jun 2023 — Feb 2024',
    role: 'Frontend Developer',
    company: 'FavourCo. Limited',
  },
  {
    period: 'Nov 2021 — Mar 2023',
    role: 'Software Engineer',
    company: 'Ventling Technologies',
  },
];

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 sm:px-6 py-5 sm:py-8 lg:py-10">
      <div className="card-glow overflow-hidden bg-[#121212] rounded-3xl lg:rounded-[40px] border border-white/8 p-6 sm:p-10 md:p-14 lg:p-20">
        <div className="grid gap-6 border-b border-white/8 pb-10 sm:pb-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[#f06543]">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#f06543]/20 bg-[#f06543]/10">
                <Briefcase size={18} aria-hidden="true" />
              </span>
              <span className="text-[10px] font-bold uppercase tracking-[0.35em]">Career journey</span>
            </div>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white">
              Experience
            </h2>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-[#999999] sm:text-base lg:justify-self-end">
            Building dependable products across software engineering, frontend development, and commerce-focused experiences.
          </p>
        </div>

        <div className="relative mt-10 sm:mt-14">
          <div className="absolute bottom-8 left-[7px] top-8 w-px bg-gradient-to-b from-[#f06543] via-white/15 to-transparent md:left-[12.5rem]" aria-hidden="true" />

          <div className="space-y-4 sm:space-y-5">
            {experienceData.map((item) => (
              <article
                key={`${item.company}-${item.period}`}
                className="group relative grid gap-3 pl-10 md:grid-cols-[11rem_3rem_1fr] md:items-center md:gap-0 md:pl-0"
              >
                <div className="md:pr-6 md:text-right">
                  <p className="text-xs font-semibold tracking-wide text-[#8f8f8f]">
                    {item.period}
                  </p>
                </div>

                <div className="absolute left-0 top-1.5 z-10 md:static md:flex md:h-full md:items-center md:justify-center">
                  <span className={`block h-[15px] w-[15px] rounded-full border-[4px] border-[#121212] ring-1 transition-all duration-300 group-hover:scale-125 ${
                    item.current
                      ? 'bg-[#f06543] ring-[#f06543]/50 shadow-[0_0_18px_rgba(240,101,67,0.45)]'
                      : 'bg-[#555] ring-white/15 group-hover:bg-[#f06543] group-hover:ring-[#f06543]/40'
                  }`} />
                </div>

                <div className="rounded-2xl border border-white/8 bg-[#181818]/80 p-5 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-white/15 group-hover:bg-[#1b1b1b] sm:rounded-3xl sm:p-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-white transition-colors group-hover:text-[#f06543] sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-[#999999]">{item.company}</p>
                    </div>

                    {item.current && (
                      <span className="w-fit rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-300">
                        Current
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
