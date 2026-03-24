'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Eye } from 'lucide-react';

// 1. DYNAMIC DATA ARRAY with updated categories
const projectsData = [
  { 
    id: 1, 
    category: 'Frontend', 
    title: 'GitHub Follower Manager', 
    image: '/project 2.png',
    link: 'https://github-follower-check.netlify.app/' 
  },
  { 
    id: 2, 
    category: 'Frontend', 
    title: 'Logistics Website Implementation', 
    image: '/Logistics.jpg',
    link: 'https://github.com/isaacudofia' 
  },
  { 
    id: 3, 
    category: 'Backend', 
    title: 'Scalable RESTful API & Authentication', 
    image: '/nodeStore.jpg',
    link: 'https://github.com/isaacudofia' 
  },
  { 
    id: 4, 
    category: 'Full-Stack', 
    title: 'Collaborative Document Editor', 
    image: '/project 1.png',
    link: 'https://github.com/isaacudofia' 
  },
];

const categories = ['All', 'Frontend', 'Full-Stack', 'Backend'];

export default function Works() {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-[#121212] rounded-[40px] border border-gray-800/40 p-8 md:p-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Works & Projects</h2>
          <p className="text-[#999999] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A showcase of my engineering projects, focused on performance optimization and scalable code.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-start gap-8 mb-12 border-b border-gray-800/20 pb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-sm font-medium transition-all relative pb-1 ${
                activeTab === cat ? 'text-[#f06543]' : 'text-[#999999] hover:text-white'
              }`}
            >
              {cat}
              {activeTab === cat && (
                <span className="absolute -bottom-[18px] left-0 w-full h-[2px] bg-[#f06543]" />
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative">
              {/* Image Container with Overlay */}
              <div className="relative aspect-[1.3/1] rounded-[28px] overflow-hidden mb-5 border border-gray-800/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
                
                {/* OVERLAY */}
                <Link 
                  href={project.link}
                  target="_blank"
                  className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20"
                >
                  <div className="w-14 h-14 bg-[#121212] border border-gray-800/50 rounded-full flex items-center justify-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye size={24} className="group-hover:text-[#f06543] transition-colors" />
                  </div>
                </Link>
              </div>

              {/* Project Details */}
              <div className="px-1">
                <span className="text-[#999999] text-[11px] uppercase tracking-[0.2em] font-bold">
                  {project.category}
                </span>
                <Link href={project.link} target="_blank">
                    <h3 className="text-white text-xl font-semibold mt-1 tracking-tight group-hover:text-[#f06543] transition-colors">
                    {project.title}
                    </h3>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}