
import Image from "next/image";

export default function Projects() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-gradient-to-br from-black via-gray-900  rounded-xl shadow-2xl">
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 text-yellow-400 text-center drop-shadow-glow">Our Projects</h1>
      <p className="text-lg sm:text-2xl mb-10 text-center max-w-2xl text-yellow-200">Showcase of high-end bathroom remodeling projects — a selection of recent work that highlights materials, lighting, and craftsmanship.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Project 1 */}
        <article className="group bg-black/30 rounded-lg overflow-hidden shadow-xl border border-yellow-400/10 hover:shadow-2xl transition">
          <div className="relative w-full h-64">
            <Image src="https://images.unsplash.com/photo-1615874959479-1b9b7f4f6f5d?auto=format&fit=crop&w=1200&q=80" alt="Luxury marble bathroom" fill className="object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-bold text-yellow-100">Luxury Marble Bath</h3>
            <p className="mt-2 text-yellow-200 text-sm">A full renovation featuring bookmatched marble, frameless glass, and gold fixtures for an elevated finish.</p>

            <div className="mt-4 flex items-center gap-3 text-yellow-200">
              <span className="flex items-center gap-2 text-sm">
                {/* tile icon */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="3" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/><rect x="3" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/><rect x="13" y="13" width="8" height="8" stroke="currentColor" strokeWidth="1.5"/></svg>
                Tiles
              </span>
              <span className="flex items-center gap-2 text-sm">
                {/* faucet */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12h7v6h8v-8a3 3 0 00-3-3h-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 7v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Gold fixtures
              </span>
            </div>
          </div>
        </article>

        {/* Project 2 */}
        <article className="group bg-black/30 rounded-lg overflow-hidden shadow-xl border border-yellow-400/10 hover:shadow-2xl transition">
          <div className="relative w-full h-64">
            <Image src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80" alt="Spa shower" fill className="object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-bold text-yellow-100">Spa Retreat</h3>
            <p className="mt-2 text-yellow-200 text-sm">Custom lighting, large rain shower, and heated floors designed for relaxation.</p>

            <div className="mt-4 flex items-center gap-3 text-yellow-200">
              <span className="flex items-center gap-2 text-sm">
                {/* shower */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M8 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M16 11v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Rain shower
              </span>
              <span className="flex items-center gap-2 text-sm">
                {/* light */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M12 20v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
                Custom lighting
              </span>
            </div>
          </div>
        </article>

        {/* Project 3 */}
        <article className="group bg-black/30 rounded-lg overflow-hidden shadow-xl border border-yellow-400/10 hover:shadow-2xl transition">
          <div className="relative w-full h-64">
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" alt="Minimalist suite" fill className="object-cover group-hover:scale-105 transition-transform" />
          </div>
          <div className="p-5">
            <h3 className="text-2xl font-bold text-yellow-100">Minimalist Suite</h3>
            <p className="mt-2 text-yellow-200 text-sm">Clean lines, clever storage, and premium finishing for a serene space.</p>

            <div className="mt-4 flex items-center gap-3 text-yellow-200">
              <span className="flex items-center gap-2 text-sm">
                {/* storage */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M8 8h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
                Smart storage
              </span>
              <span className="flex items-center gap-2 text-sm">
                {/* material */}
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l9 4.9v9.8L12 22 3 16.7V6.9L12 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Premium finishes
              </span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
