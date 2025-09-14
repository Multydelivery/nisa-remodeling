"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);

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
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
  <section className="w-full min-h-screen flex flex-col items-center px-4 py-12 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl shadow-2xl relative overflow-hidden border border-slate-700/20 ring-1 ring-slate-700/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
  <div className="absolute top-0 right-0 w-72 h-72 bg-slate-400/6 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 pointer-events-none" />
      </div>

      <div className="text-center mb-10 max-w-4xl">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-stone-200 drop-shadow-md animate-fade-in">
          Contact Us
        </h1>
        <p className="text-base sm:text-lg text-stone-300 animate-fade-in delay-100">
          Ready to transform your bathroom? Get in touch with us for a free consultation and quote.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-7xl animate-fade-in delay-200">
        {/* Contact Information */}
        <div className="flex-1">
          <div className="bg-gray-800/40 rounded-xl p-8 border border-amber-400/30 shadow-lg">
            <h2 className="text-2xl font-semibold mb-8 text-stone-200">Get In Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-slate-300/6 p-4 rounded-lg mr-5">
                  <svg className="w-7 h-7 text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-300 mb-2">Phone</h3>
                  <a href="tel:+17869331329" className="text-stone-200 hover:text-stone-100 transition-colors text-lg">
                    +1 (786) 933-1329
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-300/6 p-4 rounded-lg mr-5">
                  <svg className="w-7 h-7 text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-300 mb-2">Email</h3>
                  <a href="mailto:info@nisaremodeling.com" className="text-stone-200 hover:text-stone-100 transition-colors text-lg">
                    info@nisaremodeling.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-300/6 p-4 rounded-lg mr-5">
                  <svg className="w-7 h-7 text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-300 mb-2">Location</h3>
                  <p className="text-stone-200 text-lg">Miami, Florida</p>
                  <p className="text-stone-300/80 text-base">Serving the greater Miami area</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-300/6 p-4 rounded-lg mr-5">
                  <svg className="w-7 h-7 text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-stone-300 mb-2">Business Hours</h3>
                  <p className="text-stone-200 text-lg">Monday - Friday: 8am - 6pm</p>
                  <p className="text-stone-300/80 text-base">Weekends by appointment</p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-slate-700/20">
              <h3 className="text-lg font-semibold text-stone-300 mb-5">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center text-stone-300/90 text-base">
                  <svg className="w-5 h-5 text-slate-300 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Free consultations and estimates
                </li>
                <li className="flex items-center text-stone-300/90 text-base">
                  <svg className="w-5 h-5 text-slate-300 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Licensed and insured professionals
                </li>
                <li className="flex items-center text-stone-300/90 text-base">
                  <svg className="w-5 h-5 text-slate-300 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Quality craftsmanship guaranteed
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex-1">
          <div className="bg-gray-800/40 rounded-xl p-8 border border-slate-700/20 shadow-lg">
            <h2 className="text-2xl font-semibold mb-8 text-stone-200">Send Us a Message</h2>
            
            {submitStatus === "success" && (
              <div className="mb-7 p-5 bg-green-900/30 border border-green-400/50 rounded-lg text-green-400 text-base animate-fade-in">
                Thank you for your message! We&apos;ll get back to you within 24 hours.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mb-7 p-5 bg-red-900/30 border border-red-400/50 rounded-lg text-red-400 text-base animate-fade-in">
                There was an error sending your message. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label className="block mb-3 text-stone-300 font-semibold text-lg" htmlFor="name">
                  Full Name *
                </label>
                <input
                  className="w-full px-5 py-4 rounded-lg bg-gray-900 text-stone-200 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-base"
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
                <label className="block mb-3 text-stone-300 font-semibold text-lg" htmlFor="email">
                  Email Address *
                </label>
                <input
                  className="w-full px-5 py-4 rounded-lg bg-gray-900 text-stone-200 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-base"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label className="block mb-3 text-stone-300 font-semibold text-lg" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="w-full px-5 py-4 rounded-lg bg-gray-900 text-stone-200 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-base"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label className="block mb-3 text-stone-300 font-semibold text-lg" htmlFor="projectType">
                  Project Type
                </label>
                <select
                  className="w-full px-5 py-4 rounded-lg bg-gray-900 text-stone-200 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-base"
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                >
                  <option value="">Select a project type</option>
                  <option value="bathroom-remodel">Bathroom Remodel</option>
                  <option value="luxury-bathroom">Luxury Bathroom</option>
                  <option value="spa-retreat">Spa Retreat</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block mb-3 text-stone-300 font-semibold text-lg" htmlFor="message">
                  Message *
                </label>
                <textarea
                  className="w-full px-5 py-4 rounded-lg bg-gray-900 text-stone-200 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all text-base"
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-200 text-gray-900 py-4 rounded-lg font-bold hover:bg-slate-300 disabled:bg-slate-200/60 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-base"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}