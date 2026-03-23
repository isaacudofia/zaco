'use client';

import { useState } from 'react';
import Image from 'next/image';

// 1. DYNAMIC DATA ARRAY
// You can easily add or remove items here.
const projectsData = [
  { id: 1, category: 'Design', title: 'Mobile Application Design', image: '/project1.jpg' },
  { id: 2, category: 'Game', title: 'Website Makeup Design', image: '/project2.jpg' },
  { id: 3, category: 'Branding', title: 'Brand Identity and Motion Design', image: '/project3.jpg' },
  { id: 4, category: 'Marketing', title: 'Social Media Strategy', image: '/project1.jpg' },
  { id: 5, category: 'Design', title: 'Dashboard UI Kit', image: '/project2.jpg' },
  { id: 6, category: 'Marketing', title: 'E-commerce Campaign', image: '/project3.jpg' },
];

const categories = ['All', 'Design', 'Game', 'Branding', 'Marketing'];

export default function Works() {
  const [activeTab, setActiveTab] = useState('All');

  // 2. FILTER LOGIC
  const filteredProjects = activeTab === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeTab);

  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      
      {/* THE MAIN WRAPPER CARD (Matching Hero/Footer Style) */}
      <div className="bg-[#121212] rounded-[40px] border border-gray-800/40 p-8 md:p-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Works & Projects</h2>
          <p className="text-[#999999] max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Check out some of my design projects, meticulously crafted with love and dedication.
          </p>
        </div>

        {/* 3. DYNAMIC TABS LOOP */}
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

        {/* 4. DYNAMIC PROJECTS GRID LOOP */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              {/* Image Card */}
              <div className="relative aspect-[1.3/1] rounded-[28px] overflow-hidden mb-5 border border-gray-800/30">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                />
              </div>

              {/* Text Info */}
              <div className="px-1">
                <span className="text-[#999999] text-[11px] uppercase tracking-[0.2em] font-bold">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-semibold mt-1 tracking-tight group-hover:text-[#f06543] transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}