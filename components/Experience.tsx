'use client';

import { BookOpen, Briefcase } from 'lucide-react';

// 1. Define the Interface for your data items
interface TimelineItem {
  year: string;
  role: string;
  company: string;
}

const experienceData: TimelineItem[] = [
  {
    year: "Aug 2025 - Present",
    role: "Shopify Front-End & SEO Developer",
    company: "Ava & George"
  },
  {
    year: "Jun 2023 - Feb 2024",
    role: "Frontend Developer",
    company: "FavourCo. Limited"
  },
  {
    year: "Nov 2021 - Mar 2023",
    role: "Software Engineer",
    company: "Ventling Technologies"
  }
];

const educationData: TimelineItem[] = [
  {
    year: "Nov 2018 - Dec 2023",
    role: "B.Sc. Computer Science",
    company: "University of Benin"
  },
  {
    year: "2022",
    role: "JS Algorithms & Responsive Web Design",
    company: "freeCodeCamp"
  },
  {
    year: "2013 — 2017",
    role: "Senior Secondary Certificate of Education",
    company: "Jevic Science Academy"
  }
];

// 2. Apply the interface to the component props
interface TimelineSectionProps {
  title: string;
  data: TimelineItem[];
  icon: React.ElementType; // Added icon as a prop to differentiate sections
}

const TimelineSection = ({ title, data, icon: Icon }: TimelineSectionProps) => (
  <div className="flex flex-col gap-8">
    <div className="flex items-center gap-1">
      <div className="h-6 w-[1px] bg-gray-700"></div>
      <h2 className="text-white text-2xl font-semibold tracking-tight uppercase ml-2">
        {title}
      </h2>
    </div>

    <div className="flex flex-col gap-10">
      {data.map((item, index) => (
        <div key={index} className="group relative">
          <div className="flex gap-6 items-start">
            <div className="flex-shrink-0 w-12 h-12 bg-[#161616] border border-gray-800/40 rounded-xl flex items-center justify-center text-[#f06543] group-hover:bg-[#f06543] group-hover:text-white transition-all duration-300">
              <Icon size={20} />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[#999999] text-xs font-medium tracking-wide">
                {item.year}
              </span>
              <h3 className="text-white text-lg font-bold group-hover:text-[#f06543] transition-colors">
                {item.role}
              </h3>
              <p className="text-[#999999] text-sm">
                {item.company}
              </p>
            </div>
          </div>
          
          {index !== data.length - 1 && (
            <div className="mt-8 border-b border-gray-800/20 w-full ml-16"></div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10">
      <div className="bg-[#121212] rounded-[40px] border border-gray-800/40 p-10 md:p-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {/* Passed Briefcase icon for Experience and BookOpen for Education */}
          <TimelineSection title="Experience" data={experienceData} icon={Briefcase} />
          <TimelineSection title="Education" data={educationData} icon={BookOpen} />
        </div>
      </div>
    </section>
  );
};

export default Experience;