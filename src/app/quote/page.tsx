"use client";

import React, { useState } from "react";

export default function Quote() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    date: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

  const services = [
    "Luxury Bathroom Remodel",
    "Custom Design Consultation",
    "High-End Materials Installation",
    "Project Management",
    "Commercial Bathroom Renovation",
    "Accessibility Solutions",
    "Other"
  ];

  const budgets = [
    "Under $5,000",
    "$5,000 - $10,000",
    "$10,000 - $20,000",
    "$20,000 - $35,000",
    "$35,000 - $50,000",
    "$50,000+"
  ];

  const timelines = [
    "ASAP",
    "Within 1 month",
    "Within 3 months",
    "Within 6 months",
    "Just exploring options"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ 
        name: "", 
        email: "", 
        phone: "", 
        service: "", 
        budget: "", 
        timeline: "", 
        date: "", 
        details: "" 
      });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center px-4 py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-amber-900 rounded-xl shadow-2xl relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/5 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium" />
      </div>

      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-amber-400 drop-shadow-glow animate-fade-in">
          Get a Quote
        </h1>
        <p className="text-lg sm:text-2xl text-amber-200/90 animate-fade-in delay-100">
          Request a free, no-obligation quote for your bathroom remodeling project.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl animate-fade-in delay-200">
        {/* Benefits Section */}
        <div className="flex-1">
          <div className="bg-black/40 rounded-xl p-8 border border-yellow-400/20 shadow-lg h-full">
            <h2 className="text-2xl font-bold mb-6 text-amber-400">Why Get a Quote?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-yellow-400/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2l9 4.9v9.8L12 22 3 16.7V6.9L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-200 mb-1">Transparent Pricing</h3>
                  <p className="text-amber-200/80">No hidden fees or surprises. We provide detailed breakdowns of all costs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-200 mb-1">No Obligation</h3>
                  <p className="text-amber-200/80">Our quotes are completely free with no commitment required.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10V3L4 14h7v7l9-11h-7z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-200 mb-1">Fast Response</h3>
                  <p className="text-amber-200/80">We typically respond to quote requests within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-400/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-amber-200 mb-1">Expert Assessment</h3>
                  <p className="text-amber-200/80">Our quotes include professional insights and recommendations.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-yellow-400/20">
              <h3 className="text-lg font-semibold text-amber-200 mb-4">What&apos;s Next?</h3>
              <ol className="space-y-3">
                <li className="flex items-start text-amber-200/90 text-sm">
                  <span className="bg-amber-400/20 text-amber-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">1</span>
                  Submit your quote request
                </li>
                <li className="flex items-start text-amber-200/90 text-sm">
                  <span className="bg-amber-400/20 text-amber-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">2</span>
                  We&apos;ll contact you to discuss details
                </li>
                <li className="flex items-start text-amber-200/90 text-sm">
                  <span className="bg-amber-400/20 text-amber-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">3</span>
                  Receive your personalized quote
                </li>
                <li className="flex items-start text-amber-200/90 text-sm">
                  <span className="bg-amber-400/20 text-amber-400 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mr-3">4</span>
                  Schedule your project (if you choose)
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="flex-1">
          <div className="bg-black/40 rounded-xl p-8 border border-yellow-400/20 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-amber-400">Request Your Quote</h2>
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-400/30 rounded-lg text-green-300 animate-fade-in">
                Thank you for your quote request! We&apos;ll contact you within 24 hours to discuss your project.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-400/30 rounded-lg text-red-300 animate-fade-in">
                There was an error submitting your request. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-amber-200 font-semibold" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-amber-100 border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all placeholder:text-amber-200/40"
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 text-amber-200 font-semibold" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-amber-100 border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all placeholder:text-amber-200/40"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-amber-200 font-semibold" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-amber-100 border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all placeholder:text-amber-200/40"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-amber-200 font-semibold" htmlFor="service">
                    Service Interested In *
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-amber-100 border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="" className="text-yellow-200/40">Select a service</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="text-yellow-50">{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-amber-200 font-semibold" htmlFor="budget">
                    Project Budget
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-amber-100 border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                  >
                    <option value="" className="text-yellow-200/40">Select budget range</option>
                    {budgets.map((budget, index) => (
                      <option key={index} value={budget} className="text-yellow-50">{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-amber-200 font-semibold" htmlFor="timeline">
                    Project Timeline
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-amber-100 border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                  >
                    <option value="" className="text-yellow-200/40">Select timeline</option>
                    {timelines.map((timeline, index) => (
                      <option key={index} value={timeline} className="text-yellow-50">{timeline}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-amber-200 font-semibold" htmlFor="date">
                    Preferred Start Date
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-amber-100 border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-amber-200 font-semibold" htmlFor="details">
                  Project Details *
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-amber-100 border border-amber-400/30 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all placeholder:text-amber-200/40"
                  id="details"
                  name="details"
                  rows={5}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Please describe your project, including room dimensions, desired features, materials, and any specific requirements..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-amber-400 text-black py-3 rounded-lg font-bold hover:bg-amber-500 disabled:bg-amber-400/50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Request Free Quote"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
