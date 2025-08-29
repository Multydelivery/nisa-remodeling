"use client";

import { useState } from "react";
import Image from "next/image";

export default function Services() {
  const [activeService, setActiveService] = useState(null);

  const services = [
    {
      id: 1,
      title: "Luxury Bathroom Remodeling",
      description: "Transform your bathroom into a spa-like retreat with premium materials and custom design.",
      longDescription: "Our luxury bathroom remodeling service transforms ordinary spaces into extraordinary retreats. We specialize in high-end finishes, custom cabinetry, and premium fixtures that elevate your bathroom to a spa-like experience. From concept to completion, we ensure every detail reflects your personal style and functional needs.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M3 11h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M8 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1615874959479-1b9b7f4f6f5d?auto=format&fit=crop&w=600&q=80",
      features: ["Custom design", "Premium materials", "Spa-like features", "Expert installation"]
    },
    {
      id: 2,
      title: "Custom Design & Consultation",
      description: "Personalized design solutions tailored to your style and needs.",
      longDescription: "Our design consultation service helps you visualize your dream bathroom before construction begins. We work with you to create a cohesive design plan that balances aesthetics, functionality, and budget. Our designers are skilled in space planning, material selection, and creating mood boards that bring your vision to life.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2l9 4.9v9.8L12 22 3 16.7V6.9L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12l5.2-2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M12 12v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80",
      features: ["Space planning", "3D visualization", "Material selection", "Budget planning"]
    },
    {
      id: 3,
      title: "High-End Materials & Finishes",
      description: "We source and install only the finest materials for a lasting impression.",
      longDescription: "We have established relationships with premium suppliers to bring you the highest quality materials for your bathroom renovation. From natural stone and custom tile work to designer fixtures and smart technology, we ensure every element contributes to a cohesive, luxurious result that stands the test of time.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
          <rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=600&q=80",
      features: ["Natural stone", "Designer fixtures", "Custom tile work", "Quality guarantee"]
    },
    {
      id: 4,
      title: "Project Management",
      description: "End-to-end management for a seamless remodeling experience.",
      longDescription: "Our comprehensive project management service handles every aspect of your renovation, from initial planning to final cleanup. We coordinate all trades, manage timelines, maintain communication, and ensure quality control throughout the process. Our goal is to make your renovation experience as stress-free as possible.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
      features: ["Timeline management", "Trade coordination", "Quality control", "Regular updates"]
    },
    {
      id: 5,
      title: "Residential & Commercial",
      description: "Expertise in both home and business bathroom renovations.",
      longDescription: "Whether you're updating a master bath in your home or renovating facilities for your business, we have the expertise to deliver exceptional results. Our commercial projects focus on durability, accessibility, and efficiency, while our residential work emphasizes personalization and luxury.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 10H3M21 14H3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1505692794400-8a2ed6c3b14b?auto=format&fit=crop&w=600&q=80",
      features: ["Home renovations", "Business facilities", "Accessibility compliance", "Code adherence"]
    },
    {
      id: 6,
      title: "Accessibility Solutions",
      description: "Beautiful and functional accessible bathroom designs for all needs.",
      longDescription: "We specialize in creating beautiful bathrooms that are also fully accessible. Our designs incorporate universal design principles, safety features, and stylish elements to create spaces that are both functional and attractive for users of all abilities.",
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="12" cy="7" r="2" stroke="currentColor" strokeWidth="1.5"/>
          <path d="M15 21v-4a3 3 0 00-3-3h-2a3 3 0 00-3 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M17 11l-2.5-1.5M7 11l2.5-1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      ),
      image: "https://images.unsplash.com/photo-1613490493577-9b12b1d6c2e7?auto=format&fit=crop&w=600&q=80",
      features: ["Universal design", "Safety features", "Grab bars", "Zero-threshold showers"]
    }
  ];

  return (
    <section className="w-full min-h-screen flex flex-col items-center px-4 py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 rounded-xl shadow-2xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-300/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium" />
      </div>

      <div className="text-center mb-14 max-w-4xl">
        <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-amber-400 drop-shadow-md animate-fade-in">
          Our Services
        </h1>
        <p className="text-xl sm:text-3xl text-amber-200 animate-fade-in delay-100">
          Comprehensive bathroom remodeling services that transform your space with quality craftsmanship and attention to detail.
        </p>
      </div>

      {/* Services grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl mb-16 animate-fade-in delay-200">
        {services.map((service, index) => (
          <div 
            key={service.id}
            className={`bg-gray-800/40 rounded-xl p-7 shadow-lg border border-amber-400/20 hover:border-amber-400/40 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
              activeService === service.id ? "border-amber-400/60 bg-amber-400/10" : ""
            }`}
            onClick={() => setActiveService(activeService === service.id ? null : service.id)}
          >
            <div className="text-amber-400 mb-5">
              {service.icon}
            </div>
            <h2 className="text-2xl font-bold mb-4 text-amber-100">{service.title}</h2>
            <p className="text-amber-200 mb-5">
              {service.description}
            </p>
            
            {activeService === service.id && (
              <div className="mt-5 animate-fade-in">
                <p className="text-amber-200/90 text-base mb-5">
                  {service.longDescription}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-amber-200/80 text-base">
                      <svg className="w-5 h-5 text-amber-400 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            <div className="mt-5 text-amber-400 text-base font-medium flex items-center">
              {activeService === service.id ? "Click to collapse" : "Click for details"}
              <svg className={`w-5 h-5 ml-2 transition-transform ${activeService === service.id ? "rotate-180" : ""}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Process section */}
      <div className="w-full max-w-5xl mb-16 animate-fade-in delay-300">
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-amber-400 text-center">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-400/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl font-bold text-amber-400">1</span>
            </div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Consultation</h3>
            <p className="text-amber-200/80 text-base">We discuss your vision, needs, and budget</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-400/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl font-bold text-amber-400">2</span>
            </div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Design</h3>
            <p className="text-amber-200/80 text-base">We create a detailed plan and 3D visualization</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-400/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl font-bold text-amber-400">3</span>
            </div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Execution</h3>
            <p className="text-amber-200/80 text-base">Our skilled team brings the design to life</p>
          </div>
          <div className="text-center">
            <div className="w-20 h-20 bg-amber-400/10 border-2 border-amber-400/30 rounded-full flex items-center justify-center mx-auto mb-5">
              <span className="text-3xl font-bold text-amber-400">4</span>
            </div>
            <h3 className="text-xl font-semibold text-amber-200 mb-3">Completion</h3>
            <p className="text-amber-200/80 text-base">We deliver your dream bathroom with a quality guarantee</p>
          </div>
        </div>
      </div>

      {/* Call to action */}
      <div className="text-center animate-fade-in delay-400">
        <h2 className="text-3xl sm:text-4xl font-bold mb-7 text-amber-400">Ready to Transform Your Bathroom?</h2>
        <p className="text-xl text-amber-200 mb-8 max-w-3xl mx-auto">
          Contact us today to schedule a consultation and start your journey to the bathroom of your dreams.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a 
            href="/contact" 
            className="px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-amber-500 hover:scale-105 transition-all duration-300 transform text-center text-lg"
          >
            Schedule Consultation
          </a>
          <a 
            href="/quote" 
            className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-bold rounded-full shadow-lg hover:bg-amber-400/10 hover:scale-105 transition-all duration-300 transform text-center text-lg"
          >
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}