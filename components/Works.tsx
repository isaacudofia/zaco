import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Eye } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    category: 'Web application',
    title: 'ChopMenu',
    description: 'A responsive digital menu experience designed to make discovering dishes and navigating restaurant options quick and effortless.',
    image: '/chopmenu.png?v=20260717',
    stack: ['React', 'Responsive UI'],
    link: 'https://chopmenu2.netlify.app/',
    linkLabel: 'View live project',
  },
  {
    id: 2,
    category: 'Backend engineering',
    title: 'REST API & Authentication',
    description: 'A structured backend foundation implementing JWT authentication, protected resources, and maintainable API conventions.',
    image: '/nodeStore.jpg',
    stack: ['Node.js', 'Express', 'JWT'],
    link: 'https://github.com/isaacudofia/NODEJS-EXPRESS-JS-AUTHENTICATION-WITH-JWT',
    linkLabel: 'View source code',
  },
  {
    id: 4,
    category: 'Full-stack product',
    title: 'Collaborative Document Editor',
    description: 'A shared editing product exploring real-time interaction, document workflows, and collaborative application architecture.',
    image: '/project 1.png',
    stack: ['Full-stack', 'Real-time'],
    link: 'https://github.com/isaacudofia/COLLOBORATIVE-DOC-EDITOR',
    linkLabel: 'View source code',
  },
];

interface WorksProps {
  compact?: boolean;
}

const CompactProjects = () => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
    {projectsData.map((project) => (
      <article key={project.id} className="group relative rounded-[20px] border border-white/8 bg-[#181818] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-white/15">
        <div className="theme-dark-content relative mb-4 aspect-[1.55/1] overflow-hidden rounded-[15px] border border-white/8">
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 33vw" unoptimized={project.id === 1} className="object-cover transition-transform duration-700 group-hover:scale-105" />
          <Link href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title}`} className="absolute inset-0 z-20 flex items-end justify-end bg-gradient-to-t from-black/75 via-transparent to-transparent p-3 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
            <span className="flex h-11 w-11 translate-y-2 items-center justify-center rounded-full border border-white/10 bg-[#121212] text-white transition-transform group-hover:translate-y-0">
              <Eye size={19} aria-hidden="true" />
            </span>
          </Link>
        </div>

        <div className="px-1 pb-2">
          <div className="mb-3 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">{item}</span>
            ))}
          </div>
          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold tracking-tight text-white transition-colors group-hover:text-[#f06543]">{project.title}</h3>
            <ArrowUpRight size={17} className="mt-0.5 shrink-0 text-white/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#f06543]" aria-hidden="true" />
          </Link>
          <p className="mt-3 line-clamp-2 text-xs leading-relaxed text-[#888]">{project.description}</p>
        </div>
      </article>
    ))}
  </div>
);

const DetailedProjects = () => (
  <div className="space-y-4 sm:space-y-5">
    {projectsData.map((project, index) => (
      <article key={project.id} className="group grid overflow-hidden rounded-[24px] border border-white/8 bg-[#181818] transition-colors hover:border-white/15 lg:grid-cols-[1.05fr_0.95fr] lg:rounded-[28px]">
        <Link href={project.link} target="_blank" rel="noopener noreferrer" className={`theme-dark-content relative min-h-[17rem] overflow-hidden sm:min-h-[22rem] lg:min-h-[20rem] ${index % 2 === 1 ? 'lg:order-2' : ''}`} aria-label={`Open ${project.title}`}>
          <Image src={project.image} alt={project.title} fill sizes="(max-width: 1024px) 100vw, 52vw" unoptimized={project.id === 1} className="object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
          <span className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/35 text-white backdrop-blur-md transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-[#f06543] sm:bottom-5 sm:right-5">
            <ArrowUpRight size={18} aria-hidden="true" />
          </span>
        </Link>

        <div className={`flex flex-col justify-center p-6 sm:p-8 lg:p-10 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
          <div className="mb-7 flex items-center justify-between gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#f06543]">{project.category}</span>
            <span className="text-xs font-bold tracking-[0.2em] text-white/20">0{index + 1}</span>
          </div>

          <h2 className="max-w-xl text-[clamp(1.6rem,3vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.035em] text-white">{project.title}</h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#999999] sm:text-[15px]">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <span key={item} className="rounded-full border border-white/8 bg-white/[0.03] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white/45">{item}</span>
            ))}
          </div>

          <Link href={project.link} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex w-fit items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#f06543]">
            {project.linkLabel} <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </article>
    ))}
  </div>
);

export default function Works({ compact = false }: WorksProps) {
  const Heading = compact ? 'h2' : 'h1';

  return (
    <section className={`mx-auto max-w-7xl px-3 sm:px-6 ${compact ? 'py-3 sm:py-4' : 'py-5 sm:py-8 lg:py-10'}`}>
      <div className={`card-glow overflow-hidden rounded-3xl border border-white/8 bg-[#121212] ${compact ? 'p-5 sm:p-6 lg:rounded-[32px] lg:p-8' : 'p-5 sm:p-8 lg:rounded-[36px] lg:p-12'}`}>
        <div className={`grid gap-4 lg:grid-cols-[1fr_0.8fr] lg:items-end ${compact ? 'mb-7 sm:mb-8' : 'mb-10 border-b border-white/8 pb-10 sm:mb-12 sm:pb-12'}`}>
          <div>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.35em] text-[#f06543]">Selected work</p>
            <Heading className={`font-bold leading-[1.08] tracking-[-0.035em] text-white ${compact ? 'text-[clamp(1.65rem,3vw,2.25rem)]' : 'text-[clamp(2rem,4vw,3.25rem)]'}`}>
              Work built around real problems.
            </Heading>
          </div>
          <p className={`max-w-xl text-sm leading-relaxed text-[#999999] lg:justify-self-end ${compact ? '' : 'sm:text-base'}`}>
            Selected products that show how I approach interfaces, application architecture, and practical engineering decisions.
          </p>
        </div>

        {compact ? <CompactProjects /> : <DetailedProjects />}
      </div>
    </section>
  );
}
