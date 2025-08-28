export default function Services() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-gradient-to-br from-black via-gray-900 rounded-xl shadow-2xl">
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-yellow-400 text-center drop-shadow-glow">Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <div className="bg-black/60 rounded-lg p-6 shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold mb-2">Luxury Bathroom Remodeling</h2>
          <p className="text-yellow-200">Transform your bathroom into a spa-like retreat with premium materials and custom design.</p>
        </div>
        <div className="bg-black/60 rounded-lg p-6 shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold mb-2">Custom Design & Consultation</h2>
          <p className="text-yellow-200">Personalized design solutions tailored to your style and needs.</p>
        </div>
        <div className="bg-black/60 rounded-lg p-6 shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold mb-2">High-End Materials & Finishes</h2>
          <p className="text-yellow-200">We source and install only the finest materials for a lasting impression.</p>
        </div>
        <div className="bg-black/60 rounded-lg p-6 shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold mb-2">Project Management</h2>
          <p className="text-yellow-200">End-to-end management for a seamless remodeling experience.</p>
        </div>
        <div className="bg-black/60 rounded-lg p-6 shadow-lg border border-yellow-400/20">
          <h2 className="text-2xl font-bold mb-2">Residential & Commercial</h2>
          <p className="text-yellow-200">Expertise in both home and business bathroom renovations.</p>
        </div>
      </div>
    </section>
  );
}
