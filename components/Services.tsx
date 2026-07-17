import { Code2, Server, ShoppingBag } from 'lucide-react';

const servicesData = [
  {
    icon: ShoppingBag,
    title: 'Shopify development',
    description:
      'Custom storefront experiences built around your brand, content workflow, and customers—not a one-size-fits-all theme.',
    deliverables: [
      'Custom Liquid sections',
      'Theme performance',
      'Technical SEO',
      'Storefront maintenance',
    ],
  },
  {
    icon: Server,
    title: 'Backend & API systems',
    description:
      'Reliable application foundations with clear API contracts, thoughtful data models, and security designed in from the start.',
    deliverables: [
      'REST API architecture',
      'Authentication & access',
      'Database integration',
      'Testing & documentation',
    ],
  },
  {
    icon: Code2,
    title: 'Full-stack products',
    description:
      'Responsive web products that connect polished interfaces to dependable services while remaining easy to extend.',
    deliverables: [
      'React & Next.js',
      'Responsive interfaces',
      'Accessible interactions',
      'Performance optimization',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-3 sm:px-6 py-5 sm:py-8 lg:py-10">
      <div className="card-glow overflow-hidden rounded-3xl border border-white/8 bg-[#121212] p-5 sm:p-8 md:p-12 lg:rounded-[40px] lg:p-20">
        <div className="grid gap-6 border-b border-white/8 pb-10 sm:pb-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div>
            <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.35em] text-[#f06543]">
              Product capabilities
            </p>
            <h1 className="max-w-3xl text-[clamp(2rem,5vw,3.5rem)] font-bold leading-[1.05] tracking-[-0.035em] text-white text-balance">
              Engineering across the stack, with purpose.
            </h1>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-[#999999] sm:text-base lg:justify-self-end">
            I help teams move from a rough requirement to production-ready software—balancing user experience, maintainable engineering, and business goals at every step.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-10 sm:gap-6 sm:pt-14 lg:grid-cols-3">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex min-h-full flex-col overflow-hidden rounded-2xl border border-white/8 bg-[#181818]/85 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-[#1b1b1b] sm:rounded-[30px] sm:p-8"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[#f06543]/0 to-transparent transition-all duration-300 group-hover:via-[#f06543]/80" />

                <div className="mb-9 flex items-start justify-between gap-4">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/8 bg-white/5 text-[#999999] transition-colors duration-300 group-hover:border-[#f06543]/20 group-hover:bg-[#f06543]/10 group-hover:text-[#f06543]">
                    <Icon size={26} strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold tracking-[0.2em] text-white/20">0{index + 1}</span>
                </div>

                <h2 className="mb-4 text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {service.title}
                </h2>
                <p className="mb-8 text-sm leading-relaxed text-[#999999] sm:text-[15px]">
                  {service.description}
                </p>

                <div className="mt-auto border-t border-white/8 pt-6">
                  <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-white/35">
                    Focus areas
                  </p>
                  <ul className="grid gap-3" aria-label={`${service.title} focus areas`}>
                    {service.deliverables.map((deliverable) => (
                      <li key={deliverable} className="flex items-center gap-3 text-sm text-[#b3b3b3]">
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#f06543]" aria-hidden="true" />
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
