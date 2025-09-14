"use client";

import React, { useState } from "react";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    location: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | "success" | "error">(null);
  const [selectedDate, setSelectedDate] = useState("");

  const services = [
    "Initial Consultation",
    "Design Planning Session",
    "Project Quote Discussion",
    "Material Selection",
    "Project Review",
    "Other"
  ];

  const timeSlots = [
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "1:00 PM", "1:30 PM", 
    "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", 
    "4:00 PM", "4:30 PM"
  ];

  const locations = [
    "Virtual Meeting (Video Call)",
    "In-Person at Our Showroom",
    "At My Home/Project Location",
    "Phone Consultation"
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
    const { name, value } = target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const date = e.target.value;
    setSelectedDate(date);
    setFormData(prev => ({
      ...prev,
      date: date
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
        date: "", 
        time: "", 
        location: "", 
        details: "" 
      });
      setSelectedDate("");
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  // Generate next 30 days for date selection
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 30; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      // Exclude weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  return (
  <section className="w-full min-h-screen flex flex-col items-center px-4 py-12 sm:py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl shadow-2xl relative overflow-hidden border border-slate-700/20 ring-1 ring-slate-700/10">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
  <div className="absolute top-0 right-0 w-72 h-72 bg-slate-400/6 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" />
  <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-300/10 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium" />
        {/* subtle vignette for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 pointer-events-none" />
      </div>

      <div className="text-center mb-12 max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-stone-200 drop-shadow-md animate-fade-in">
          Schedule an Appointment
        </h1>
        <p className="text-base sm:text-lg text-stone-300 animate-fade-in delay-100 max-w-2xl mx-auto">
          Book a short consultation with our experts to discuss your bathroom remodeling project — we keep it focused, practical and clear.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl animate-fade-in delay-200">
        {/* Benefits Section */}
        <div className="flex-1">
          <div className="bg-black/40 rounded-xl p-8 border border-slate-700/20 shadow-lg h-full">
            <h2 className="text-2xl font-semibold mb-6 text-stone-200">Why Schedule a Consultation?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-slate-400/6 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-300 mb-1">Expert Advice</h3>
                  <p className="text-stone-300/80">Get personalized recommendations from experienced professionals.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-400/6 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-300 mb-1">No Obligation</h3>
                  <p className="text-stone-300/80">Consultations are completely free with no commitment required.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-400/6 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-300 mb-1">Custom Solutions</h3>
                  <p className="text-stone-300/80">Receive tailored solutions for your specific space and needs.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-slate-400/6 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-slate-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-stone-300 mb-1">Time Saving</h3>
                  <p className="text-stone-300/80">Get all your questions answered in one focused session.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700/20">
              <h3 className="text-lg font-semibold text-stone-300 mb-4">What to Expect</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-stone-300/90 text-sm">
                  <svg className="w-4 h-4 text-yellow-400 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  30-60 minute consultation
                </li>
                <li className="flex items-center text-stone-300/90 text-sm">
                  <svg className="w-4 h-4 text-slate-300 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Professional assessment of your needs
                </li>
                <li className="flex items-center text-stone-300/90 text-sm">
                  <svg className="w-4 h-4 text-slate-300 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Preliminary ideas and suggestions
                </li>
                <li className="flex items-center text-stone-300/90 text-sm">
                  <svg className="w-4 h-4 text-slate-300 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Next steps and timeline discussion
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Appointment Form */}
        <div className="flex-1">
          <div className="bg-black/40 rounded-xl p-8 border border-slate-700/20 shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-stone-200">Book Your Appointment</h2>
            
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-900/30 border border-green-400/30 rounded-lg text-green-400 animate-fade-in">
                Thank you for booking an appointment! We&apos;ve sent a confirmation to your email and will contact you shortly.
              </div>
            )}
            
            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-400/30 rounded-lg text-red-400 animate-fade-in">
                There was an error scheduling your appointment. Please try again or contact us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-stone-300 font-semibold" htmlFor="name">
                    Full Name *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-stone-100 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
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
                  <label className="block mb-2 text-stone-300 font-semibold" htmlFor="email">
                    Email Address *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-stone-100 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
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
                  <label className="block mb-2 text-stone-300 font-semibold" htmlFor="phone">
                  Phone Number *
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-stone-100 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-stone-300 font-semibold" htmlFor="service">
                    Consultation Type *
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-stone-100 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select consultation type</option>
                    {services.map((service, index) => (
                      <option key={index} value={service}>{service}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-stone-300 font-semibold" htmlFor="location">
                    Meeting Format *
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-stone-100 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select meeting format</option>
                    {locations.map((location, index) => (
                      <option key={index} value={location}>{location}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-stone-300 font-semibold" htmlFor="date">
                    Preferred Date *
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-stone-100 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleDateSelect}
                    required
                  >
                    <option value="">Select a date</option>
                    {availableDates.map((date, index) => {
                      const dateObj = new Date(date);
                      const formattedDate = dateObj.toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                      });
                      return (
                        <option key={index} value={date}>{formattedDate}</option>
                      );
                    })}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 text-stone-300 font-semibold" htmlFor="time">
                    Preferred Time *
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg bg-gray-900 text-stone-100 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                    disabled={!selectedDate}
                  >
                    <option value="">{selectedDate ? "Select a time" : "Select date first"}</option>
                    {timeSlots.map((time, index) => (
                      <option key={index} value={time}>{time}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                  <label className="block mb-2 text-stone-300 font-semibold" htmlFor="details">
                  Project Details & Questions
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-gray-900 text-stone-100 border border-slate-700/30 focus:outline-none focus:ring-2 focus:ring-slate-300 transition-all"
                  id="details"
                  name="details"
                  rows={4}
                  value={formData.details}
                  onChange={handleChange}
                  placeholder="Please share any specific questions, project details, or special requirements you'd like to discuss..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-200 text-gray-900 py-3 rounded-lg font-bold hover:bg-slate-300 disabled:bg-slate-200/60 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Scheduling...
                  </>
                ) : (
                  "Schedule Appointment"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
