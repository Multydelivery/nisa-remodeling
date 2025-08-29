"use client";

import Image from "next/image";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const filters = [
    { id: "all", label: "All Projects" },
    { id: "luxury", label: "Luxury" },
    { id: "spa", label: "Spa Retreats" },
    { id: "minimalist", label: "Minimalist" },
    { id: "commercial", label: "Commercial" }
  ];

  const projects = [
    {
      id: 1,
      title: "Luxury Marble Bath",
      description: "A full renovation featuring bookmatched marble, frameless glass, and gold fixtures for an elevated finish.",
      image: "https://images.unsplash.com/photo-1615874959479-1b9b7f4f6f5d?auto=format&fit=crop&w=1200&q=80",
      category: "luxury",
      features: ["Tiles", "Gold fixtures"],
      icons: [
        <svg key="tile" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/></svg>,
        <svg key="faucet" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h7v6h8v-8a3 3 0 00-3-3h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 7v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ]
    },
    {
      id: 2,
      title: "Spa Retreat",
      description: "Custom lighting, large rain shower, and heated floors designed for ultimate relaxation and comfort.",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80",
      category: "spa",
      features: ["Rain shower", "Custom lighting"],
      icons: [
        <svg key="shower" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
        <svg key="light" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 20v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
      ]
    },
    {
      id: 3,
      title: "Minimalist Suite",
      description: "Clean lines, clever storage solutions, and premium finishing for a serene and clutter-free space.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      category: "minimalist",
      features: ["Smart storage", "Premium finishes"],
      icons: [
        <svg key="storage" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
        <svg key="material" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l9 4.9v9.8L12 22 3 16.7V6.9L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ]
    },
    {
      id: 4,
      title: "Executive Hotel Suite",
      description: "Luxurious commercial bathroom design for a high-end hotel with durability and elegance in mind.",
      image: "https://images.unsplash.com/photo-1631889992022-7cf37f3e7fcd?auto=format&fit=crop&w=1200&q=80",
      category: "commercial",
      features: ["Commercial grade", "Accessibility features"],
      icons: [
        <svg key="commercial" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 10H3M21 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/></svg>,
        <svg key="accessible" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M15 21v-4a3 3 0 00-3-3h-2a3 3 0 00-3 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M17 11l-2.5-1.5M7 11l2.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
      ]
    },
    {
      id: 5,
      title: "Vintage Elegance",
      description: "Classic design with modern functionality, featuring clawfoot tub and period-appropriate details.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
      category: "luxury",
      features: ["Clawfoot tub", "Vintage tiles"],
      icons: [
        <svg key="tub" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 11h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
        <svg key="vintage" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s7-4 7-11c0-4-3-7-7-7-4 0-7 3-7 7 0 7 7 11 7 11z" stroke="currentColor" strokeWidth="1.5"/></svg>
      ]
    },
    {
      id: 6,
      title: "Modern Wellness",
      description: "A holistic approach to bathroom design with natural materials and wellness-focused features.",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      category: "spa",
      features: ["Natural materials", "Steam shower"],
      icons: [
        <svg key="natural" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 7c-2.5 0-4.5 2-4.5 4.5S14.5 16 17 16s4.5-2 4.5-4.5S19.5 7 17 7z" stroke="currentColor" strokeWidth="1.5"/><path d="M7 13c-1.5 0-2.5 1-2.5 2.5S5.5 18 7 18s2.5-1 2.5-2.5S8.5 13 7 13z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 4c-1.5 0-2.5 1-2.5 2.5S10.5 9 12 9s2.5-1 2.5-2.5S13.5 4 12 4z" stroke="currentColor" strokeWidth="1.5"/></svg>,
        <svg key="steam" className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 15c-1.5 0-2.5 1-2.5 2.5S16.5 20 18 20s2.5-1 2.5-2.5S19.5 15 18 15z" stroke="currentColor" strokeWidth="1.5"/><path d="M6 11c-1.5 0-2.5 1-2.5 2.5S4.5 16 6 16s2.5-1 2.5-2.5S7.5 11 6 11z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 7c-1.5 0-2.5 1-2.5 2.5S10.5 12 12 12s2.5-1 2.5-2.5S13.5 7 12 7z" stroke="currentColor" strokeWidth="1.5"/></svg>
      ]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="w-full min-h-screen flex flex-col items-center px-4 py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 rounded-xl shadow-2xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-72 h-72 bg-amber-400/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-300/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium" />
      </div>

      <div className="text-center mb-14 max-w-4xl">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-amber-400 drop-shadow-md animate-fade-in">
          Our Projects
        </h1>
        <p className="text-xl sm:text-3xl text-amber-200 animate-fade-in delay-100">
          Showcase of high-end bathroom remodeling projects — a selection of recent work that highlights materials, lighting, and craftsmanship.
        </p>
      </div>

      {/* Filter buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-14 animate-fade-in delay-200">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`px-6 py-3 rounded-full text-base font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? "bg-amber-400 text-gray-900 shadow-lg font-bold"
                : "bg-gray-800/50 text-amber-200 border border-amber-400/30 hover:bg-amber-400/10 hover:border-amber-400/50"
            }`}
          >
            {filter.label}
          </button>
        ))}
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl animate-fade-in delay-300">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>

      {/* Call to action */}
      <div className="mt-20 text-center animate-fade-in delay-500">
        <h3 className="text-3xl sm:text-4xl font-bold mb-6 text-amber-400">Inspired by Our Work?</h3>
        <p className="text-xl text-amber-200 mb-8 max-w-3xl mx-auto">
          Let's discuss how we can transform your bathroom into a space you'll love.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/contact" 
            className="px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-amber-500 hover:scale-105 transition-all duration-300 transform text-center text-lg"
          >
            Start Your Project
          </a>
          <a 
            href="/quote" 
            className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-bold rounded-full shadow-lg hover:bg-amber-400/10 hover:scale-105 transition-all duration-300 transform text-center text-lg"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}

// Project Card Component
const ProjectCard = ({ project, index }) => (
  <article className="group bg-gray-800/40 rounded-xl overflow-hidden shadow-xl border border-amber-400/20 hover:border-amber-400/40 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 flex flex-col h-full">
    <div className="relative w-full h-72 overflow-hidden">
      <Image 
        src={project.image} 
        alt={project.title} 
        fill 
        className="object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute top-4 right-4">
        <span className="px-4 py-2 bg-amber-400/90 text-gray-900 text-sm font-bold rounded-full capitalize">
          {project.category}
        </span>
      </div>
    </div>
    <div className="p-6 flex-grow flex flex-col">
      <h3 className="text-2xl font-bold text-amber-100 group-hover:text-amber-300 transition-colors duration-300 mb-3">
        {project.title}
      </h3>
      <p className="text-amber-200 text-base mb-4 flex-grow">
        {project.description}
      </p>

      <div className="mt-auto pt-4 border-t border-amber-400/20">
        <div className="flex items-center gap-4 text-amber-200">
          {project.features.map((feature, i) => (
            <span key={i} className="flex items-center gap-2 text-sm">
              {project.icons[i]}
              {feature}
            </span>
          ))}
        </div>
        
        <button className="mt-5 w-full py-3 bg-amber-400/10 text-amber-400 text-base font-medium rounded-lg border border-amber-400/30 hover:bg-amber-400/20 transition-colors duration-300 group-hover:border-amber-400/50">
          View Project Details
        </button>
      </div>
    </div>
  </article>
);
