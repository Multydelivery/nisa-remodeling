import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-600/30 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-black/95 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-slate-700/40 to-slate-800/60 border border-slate-600/20 flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl tracking-tight">N</span>
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-xl tracking-wide mb-2" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
                  NISA REMODELING
                </h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-md" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
                  Transforming bathrooms into luxury retreats with premium craftsmanship and innovative design solutions throughout Miami.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:+17869331329" className="text-slate-200 font-semibold text-lg hover:text-white transition-colors" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
                  +1 (786) 933-1329
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:info@nisaremodeling.com" className="text-slate-300 hover:text-slate-200 transition-colors" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
                  info@nisaremodeling.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                </svg>
                <span className="text-slate-300" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
                  Miami, FL & Surrounding Areas
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-slate-400 text-sm font-medium" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Follow us:</span>
              <div className="flex gap-3">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-600/30 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M8 11.5a3.5 3.5 0 107 0 3.5 3.5 0 00-7 0z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-600/30 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 2h-3a4 4 0 00-4 4v3H8v3h3v7h3v-7h2.5l.5-3H14V6a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" 
                   className="w-10 h-10 rounded-lg bg-slate-800/60 border border-slate-600/30 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700/60 transition-all duration-200">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2a10 10 0 100 20c1.3 0 2.5-.25 3.6-.7-.1-.9-.2-2-.1-2.9.2-.9 1.3-6 .9-7.4-.4-1.4-2.1-2-3.6-1.7-1.5.3-2.2 1.6-2.2 3 0 1.3.5 2 1.2 2.3.4.2.9.1 1-.2.1-.5.3-1 .4-1.5.1-.5 0-1-.3-1.3-.4-.4-1-.4-1.5-.1-.6.3-1 1-1 1.8 0 1 .7 1.6 1.6 1.6.1 0 .2 0 .3-.1l-.6 2.3c-.1.6-.2 1.2-.2 1.8A10 10 0 0012 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg tracking-wide" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Home</Link></li>
              <li><Link href="/projects" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Projects</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Services</Link></li>
              <li><Link href="/quote" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Get a Quote</Link></li>
              <li><Link href="/appointment" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Schedule Consultation</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg tracking-wide" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
              Our Services
            </h4>
            <ul className="space-y-3">
              <li><Link href="/services#luxury" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Luxury Remodeling</Link></li>
              <li><Link href="/services#design" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Design & Consultation</Link></li>
              <li><Link href="/services#materials" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Premium Materials</Link></li>
              <li><Link href="/services#project-management" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Project Management</Link></li>
              <li><Link href="/services#accessibility" className="text-slate-300 hover:text-white transition-colors text-base" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>Accessibility Solutions</Link></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-slate-600/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
              © {new Date().getFullYear()} NISA REMODELING. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <Link href="/privacy" className="text-slate-400 hover:text-slate-300 transition-colors" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-400 hover:text-slate-300 transition-colors" style={{fontFamily: 'var(--font-geist-sans), system-ui, sans-serif'}}>
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
