"use client";
import { Geist, Geist_Mono, Poppins, Bebas_Neue, Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import { usePathname } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-poppins",
});

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400","600","700"],
  variable: "--font-playfair",
});

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname() || "/";
  const navRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const lastScrollY = useRef(0);

  // Handle scroll effect - hide navbar on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past a threshold (20px)
      const isScrolled = currentScrollY > 20;
      setScrolled(isScrolled);
      
      // Hide navbar when scrolling down (only on mobile), show when scrolling up
  if (isMobile) {
        if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
          // Scrolling down
          setIsHidden(true);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up
          setIsHidden(false);
        }
      }

      // Close mobile menu when the user scrolls (helps avoid overlay remaining open)
  if (open) setOpen(false);
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, open]);

  // Track viewport size so hide-on-scroll only applies to small screens
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = (ev: MediaQueryListEvent) => setIsMobile(ev.matches);
    setIsMobile(mq.matches);
    // modern browsers: addEventListener; fallback to addListener
    if (typeof mq.addEventListener === "function") mq.addEventListener("change", update as EventListener);
    else mq.addListener(update as unknown as EventListener);
    return () => {
      if (typeof mq.removeEventListener === "function") mq.removeEventListener("change", update as EventListener);
      else mq.removeListener(update as unknown as EventListener);
    };
  }, []);

  // Close mobile menu with Escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open and restore focus
  useEffect(() => {
    const original = document.body.style.overflow || "";
    if (open) {
      document.body.style.overflow = "hidden";
      // focus first focusable element in the panel for keyboard users
      requestAnimationFrame(() => {
        const first = panelRef.current?.querySelector<HTMLElement>("a,button, [tabindex]:not([tabindex='-1'])");
        first?.focus();
      });
    } else {
      document.body.style.overflow = original;
      // return focus to hamburger button
      btnRef.current?.focus();
    }

    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // Simple focus trap for the mobile panel when open
  useEffect(() => {
    if (!open) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = panel.querySelectorAll<HTMLElement>(
        'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link
      href={href}
      className={`px-3 py-2 rounded-md transition-all duration-200 ${
        isActive(href)
          ? "text-amber-400 bg-amber-400/10 border border-amber-400/20"
          : "text-amber-200 hover:text-amber-300 hover:bg-amber-400/5"
      }`}
      onClick={() => setOpen(false)}
    >
      {children}
    </Link>
  );

  return (
    <nav 
      ref={navRef}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ease-in-out ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      } ${
        scrolled 
          ? "bg-black/95 backdrop-blur-md py-2 shadow-xl border-b border-amber-400/20" 
          : "bg-gradient-to-r from-black/95 via-gray-900/95 to-black/95 backdrop-blur-md py-3"
      } px-4 sm:px-6`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 hover:scale-105 transition-transform duration-200"
        >
          <span className={`${bebas.className} text-white text-3xl font-extrabold`}>NISA</span>
          <span className={`${poppins.className} text-amber-400 text-xl font-bold uppercase hidden sm:block`}>
            REMODELING
          </span>
        </Link>

  {/* Desktop Navigation */}
  <div className="hidden md:flex items-center gap-3 ml-auto whitespace-nowrap bg-black/20 px-2 py-1 rounded-md">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          
          <div className="ml-4 flex items-center gap-2 border-l border-amber-400/20 pl-4">
            <Link 
              href="/quote" 
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                isActive("/quote") 
                  ? "bg-amber-300 text-black scale-105 border-amber-400/60" 
                  : "bg-amber-400/90 text-black hover:bg-amber-300 hover:scale-105 border-amber-400/40"
              }`}
            >
              Get Quote
            </Link>
            <Link 
              href="/appointment" 
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                isActive("/appointment") 
                  ? "bg-amber-300 text-black scale-105 border-amber-400/60" 
                  : "bg-amber-400/90 text-black hover:bg-amber-300 hover:scale-105 border-amber-400/40"
              }`}
            >
              Appointment
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          ref={btnRef}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 rounded-md text-amber-300 bg-amber-400/10 hover:bg-amber-400/20 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all duration-200 ${isHidden ? 'opacity-0 pointer-events-none -translate-y-2' : 'opacity-100 translate-y-0'}`}
        >
          <div className="w-6 h-6 relative">
            <span className={`block absolute left-0 right-0 h-0.5 bg-current transform transition duration-200 ${open ? "rotate-45 top-2.5" : "-translate-y-1 top-1"}`} />
            <span className={`block absolute left-0 right-0 h-0.5 bg-current transition-all duration-200 ${open ? "opacity-0" : "opacity-100 top-2.5"}`} />
            <span className={`block absolute left-0 right-0 h-0.5 bg-current transform transition duration-200 ${open ? "-rotate-45 top-2.5" : "translate-y-1 top-4"}`} />
          </div>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 z-50 transition-all duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
            onClick={() => setOpen(false)} 
            aria-hidden 
          />
          
          <div ref={panelRef} id="mobile-menu" role="dialog" aria-modal="true" tabIndex={-1} className={`absolute right-0 top-0 h-full w-80 max-w-full bg-gradient-to-b from-black via-gray-900 to-black p-6 border-l border-amber-400/20 shadow-2xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
            <div className="flex justify-between items-center mb-8">
              <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
                <span className={`${bebas.className} text-white text-3xl font-extrabold`}>NISA</span>
                <span className={`${poppins.className} text-amber-400 text-xl font-bold uppercase`}>
                  REMODELING
                </span>
              </Link>
              <button
                onClick={() => setOpen(false)}
                className="p-2 text-amber-300 hover:text-amber-400 rounded-full hover:bg-amber-400/10"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <nav className="flex flex-col gap-3 bg-black p-3">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/services">Services</NavLink>
              <NavLink href="/contact">Contact</NavLink>
              
              <div className="mt-6 pt-6 border-t border-amber-400/20 flex flex-col gap-4">
                <Link 
                  href="/quote" 
                  className={`px-6 py-3 rounded-full text-center font-semibold transition-all duration-300 border ${
                    isActive("/quote") 
                      ? "bg-amber-300 text-black scale-105 border-amber-400/60" 
                      : "bg-amber-400/90 text-black hover:bg-amber-300 hover:scale-105 border-amber-400/40"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Get Quote
                </Link>
                <Link 
                  href="/appointment" 
                  className={`px-6 py-3 rounded-full text-center font-semibold transition-all duration-300 border ${
                    isActive("/appointment") 
                      ? "bg-amber-300 text-black scale-105 border-amber-400/60" 
                      : "bg-amber-400/90 text-black hover:bg-amber-300 hover:scale-105 border-amber-400/40"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Make Appointment
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <body className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} ${inter.className} ${playfair.variable} antialiased min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900 relative overflow-x-hidden`}>
        {/* Futuristic animated background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400/8 via-black/85 to-yellow-900/18 animate-gradient-x" />
          <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 w-[85vw] h-[85vw] max-w-[600px] max-h-[600px] sm:w-[50vw] sm:h-[50vw] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-yellow-400/18 via-yellow-300/12 to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow -translate-x-1/2 transform" />
        </div>
        
        <Navbar />
        
        <main className="pt-24 px-3 sm:px-6 max-w-[92%] sm:max-w-5xl mx-auto glassmorphism rounded-xl shadow-2xl border border-yellow-400/10 mt-6 mb-8">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
