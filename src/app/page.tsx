
import Image from "next/image";


export default function Home() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-gradient-to-br from-black via-gray-900 rounded-xl shadow-2xl">
      {/* Logo Placeholder */}
      <div className="mb-8 flex justify-center">
        {/* Center-cropped logo: container masks image and Image uses fill+object-cover */}
        <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-black/20 shadow-lg">
          <Image
            src="/nissaremodelinglogoscshot.jpeg"
            alt="NISA REMODELING logo"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
      </div>
      {/* Company Name & Tagline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold mb-4 text-yellow-400 text-center drop-shadow-glow">NISA REMODELING</h1>
      <h2 className="text-xl sm:text-3xl font-semibold mb-8 text-yellow-200 text-center">High-end bathroom design</h2>
      {/* Contact Info */}
      <div className="mb-8 text-center">
        <p className="text-base sm:text-lg text-yellow-100 mb-3">Want a free consultation? Call us now.</p>
        <a href="tel:+17869331329" className="inline-block bg-yellow-400 text-black font-bold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition">+1 (786) 933-1329</a>
        <p className="mt-4 text-sm text-yellow-200/80">Be, think, do = éxito 💪💪💪🙏🧿</p>
      </div>
      {/* Services Section */}
      <section className="w-full max-w-3xl mb-8">
        <h3 className="text-2xl sm:text-4xl font-bold mb-6 text-center text-yellow-400">Our Services</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <article className="bg-black/50 rounded-lg overflow-hidden shadow border border-yellow-400/10">
            <div className="relative w-full h-56">
              <Image src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80" alt="luxury bathroom" fill className="object-cover" />
            </div>
            <div className="p-4 text-yellow-200">
              <h4 className="font-bold text-lg">Luxury bathroom remodeling</h4>
              <p className="mt-2 text-sm">Full renovations with premium fixtures and finishes.</p>
            </div>
          </article>

          <article className="bg-black/50 rounded-lg overflow-hidden shadow border border-yellow-400/10">
            <div className="relative w-full h-56">
              <Image src="https://images.unsplash.com/photo-1505691723518-36a0b5c4f3c0?auto=format&fit=crop&w=1200&q=80" alt="design consultation" fill className="object-cover" />
            </div>
            <div className="p-4 text-yellow-200">
              <h4 className="font-bold text-lg">Custom design & consultation</h4>
              <p className="mt-2 text-sm">Bespoke layouts and material selection guidance.</p>
            </div>
          </article>

          <article className="bg-black/50 rounded-lg overflow-hidden shadow border border-yellow-400/10">
            <div className="relative w-full h-56">
              <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80" alt="materials finishes" fill className="object-cover" />
            </div>
            <div className="p-4 text-yellow-200">
              <h4 className="font-bold text-lg">High-end materials & finishes</h4>
              <p className="mt-2 text-sm">Marble, custom cabinetry, designer fixtures.</p>
            </div>
          </article>

          <article className="bg-black/50 rounded-lg overflow-hidden shadow border border-yellow-400/10">
            <div className="relative w-full h-56">
              <Image src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80" alt="project management" fill className="object-cover" />
            </div>
            <div className="p-4 text-yellow-200">
              <h4 className="font-bold text-lg">Project management</h4>
              <p className="mt-2 text-sm">End-to-end coordination and scheduling.</p>
            </div>
          </article>

          <article className="bg-black/50 rounded-lg overflow-hidden shadow border border-yellow-400/10">
            <div className="relative w-full h-56">
              <Image src="https://images.unsplash.com/photo-1505692794400-8a2ed6c3b14b?auto=format&fit=crop&w=1200&q=80" alt="residential commercial" fill className="object-cover" />
            </div>
            <div className="p-4 text-yellow-200">
              <h4 className="font-bold text-lg">Residential & commercial</h4>
              <p className="mt-2 text-sm">Services for homes and businesses of all sizes.</p>
            </div>
          </article>
        </div>
      </section>
      {/* Footer */}
      <footer className="mt-auto pt-8 text-center text-white-600">
        &copy; {new Date().getFullYear()} NISA REMODELING. All rights reserved.
      </footer>
    </section>
  );
}
