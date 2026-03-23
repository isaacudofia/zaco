'use client';

import { Server, ShoppingBag, Code2 } from 'lucide-react';

const servicesData = [
  {
    icon: <ShoppingBag size={40} strokeWidth={1.5} />,
    title: "Shopify Development",
    description: "Developing custom Shopify themes and optimizing e-commerce performance to drive traffic and increase conversion rates."
  },
  {
    icon: <Server size={40} strokeWidth={1.5} />,
    title: "Backend & API Design",
    description: "Engineering scalable RESTful APIs and microservices using Node.js and NestJS for robust, data-driven applications."
  },
  {
    icon: <Code2 size={40} strokeWidth={1.5} />,
    title: "Full-Stack Web Apps",
    description: "Building high-performance, responsive web interfaces with React and TypeScript, focused on clean architecture and speed."
  }
];

const Services = () => {
  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-10">
      
      {/* THE MAIN WRAPPER CARD */}
      <div className="bg-[#121212] rounded-[40px] border border-gray-800/40 p-10 md:p-20">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="flex flex-col items-center">
            {/* Small line and text matching the screenshot */}
            <div className="h-6 w-[1px] bg-gray-700 mb-2"></div>
            <p className="text-[#999999] text-[10px] uppercase tracking-[0.3em] font-bold mb-4">
              Expertise
            </p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Specialized Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#161616] rounded-[30px] p-10 border border-gray-800/30 flex flex-col items-start transition-all duration-300 hover:border-[#f06543] group"
            >
              {/* Icon container */}
              <div className="text-[#999999] mb-8 group-hover:text-[#f06543] transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#999999] leading-relaxed text-[15px]">
                {service.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;