import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-700/20 bg-black/40 mt-8">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-md bg-slate-300/6 flex items-center justify-center">
              <span className="text-stone-200 font-bold text-lg">N</span>
            </div>
            <div>
              <h4 className="text-stone-200 font-semibold">NISA REMODELING</h4>
              <p className="text-stone-300 text-sm">High-end bathroom design & remodeling — Miami, FL</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-200">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.2"/>
                <path d="M8 11.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" stroke="currentColor" strokeWidth="1.2"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-200">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a4 4 0 00-4 4v3H8v3h3v7h3v-7h2.5l.5-3H14V6a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" className="text-stone-300 hover:text-stone-200">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2a10 10 0 100 20c1.3 0 2.5-.25 3.6-.7-.1-.9-.2-2-.1-2.9.2-.9 1.3-6 .9-7.4-.4-1.4-2.1-2-3.6-1.7-1.5.3-2.2 1.6-2.2 3 0 1.3.5 2 1.2 2.3.4.2.9.1 1-.2.1-.5.3-1 .4-1.5.1-.5 0-1-.3-1.3-.4-.4-1-.4-1.5-.1-.6.3-1 1-1 1.8 0 1 .7 1.6 1.6 1.6.1 0 .2 0 .3-.1l-.6 2.3c-.1.6-.2 1.2-.2 1.8A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h5 className="text-stone-200 font-semibold mb-3">Quick Links</h5>
          <ul className="space-y-2 text-stone-300">
            <li><Link href="/" className="hover:text-stone-200">Home</Link></li>
            <li><Link href="/projects" className="hover:text-stone-200">Projects</Link></li>
            <li><Link href="/services" className="hover:text-stone-200">Services</Link></li>
            <li><Link href="/quote" className="hover:text-stone-200">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-stone-200 font-semibold mb-3">Services</h5>
          <ul className="space-y-2 text-stone-300">
            <li><Link href="/services#luxury" className="hover:text-stone-200">Luxury Remodeling</Link></li>
            <li><Link href="/services#design" className="hover:text-stone-200">Design & Consultation</Link></li>
            <li><Link href="/services#materials" className="hover:text-stone-200">Materials & Finishes</Link></li>
            <li><Link href="/services#accessibility" className="hover:text-stone-200">Accessibility Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="text-stone-200 font-semibold mb-3">Contact</h5>
          <div className="text-stone-300 space-y-1">
            <div className="font-semibold text-stone-200">+1 (786) 933-1329</div>
            <div><a href="mailto:info@nisaremodeling.com" className="hover:text-stone-200">info@nisaremodeling.com</a></div>
            <div className="text-sm text-stone-300">Miami, FL — Serving the greater Miami area</div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-slate-700/10 mt-4">
        <div className="max-w-6xl mx-auto px-4 py-4 text-center text-sm text-stone-300/80">
          © {new Date().getFullYear()} NISA REMODELING — Built with care. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
