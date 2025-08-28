"use client";
import { Geist, Geist_Mono, Poppins, Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";

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



import Link from "next/link";





import { useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";

  const isActive = (p: string) => {
    if (p === "/") return pathname === "/";
    return pathname === p || pathname.startsWith(p + "/");
  };

  /*
    Nav behavior:
    - mobile (<= md): hamburger visible, menu overlays full screen when open
    - md+: menu shown inline, horizontal
  */
  return (
    <nav className="w-full bg-gradient-to-r from-black via-gray-900 to-black text-yellow-200 py-3 px-4 sm:px-6 shadow-lg backdrop-blur-md border-b border-yellow-400/20 relative z-20 font-mono">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-bold text-2xl tracking-wide drop-shadow-glow"> 
          <Link href="/" className="flex items-baseline gap-3">
            <span className={`${bebas.className} text-white text-3xl font-extrabold`}>NISA</span>
            <span className={`${poppins.className} text-yellow-300 text-2xl font-extrabold uppercase`}>REMODELING</span>
          </Link>
        </div>

        {/* Hamburger - visible below md */}
        <button
          className="md:hidden text-yellow-400 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop / md+ inline menu */}
        <ul className="hidden md:flex md:items-center md:gap-6 text-lg font-medium">
          <li>
            <Link href="/" className={`py-2 px-3 rounded transition ${isActive("/") ? "text-yellow-400 underline" : "hover:text-yellow-300"}`}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects" className={`py-2 px-3 rounded transition ${isActive("/projects") ? "text-yellow-400 underline" : "hover:text-yellow-300"}`}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/services" className={`py-2 px-3 rounded transition ${isActive("/services") ? "text-yellow-400 underline" : "hover:text-yellow-300"}`}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className={`py-2 px-3 rounded transition ${isActive("/contact") ? "text-yellow-400 underline" : "hover:text-yellow-300"}`}>
              Contact
            </Link>
          </li>
          <li>
            <Link href="/quote" className={`px-4 py-2 rounded-full shadow-lg transition border border-yellow-400/40 ${isActive("/quote") ? "bg-yellow-300 text-black" : "bg-yellow-400 text-black hover:bg-yellow-500"}`}>
              Get Quote
            </Link>
          </li>
          <li>
            <Link href="/appointment" className={`px-4 py-2 rounded-full shadow-lg transition border border-yellow-400/40 ${isActive("/appointment") ? "bg-yellow-300 text-black" : "bg-yellow-400 text-black hover:bg-yellow-500"}`}>
              Make Appointment
            </Link>
          </li>
        </ul>

        {/* Mobile overlay menu (shows when open) */}
        <div className={`md:hidden ${open ? 'fixed inset-0 z-30' : 'hidden'}`}>
          {/* Gradient dim + blur backdrop */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/95 backdrop-blur-sm" onClick={() => setOpen(false)} aria-hidden />

          {/* Panel container: center content with top offset, keep scrollable */}
          <div className="relative z-40 w-full max-h-screen overflow-y-auto flex flex-col items-center justify-start gap-6 p-6 pt-24 sm:p-8">
            {/* Glass panel that holds the links so background shows around it */}
            <div className="w-full max-w-md mx-auto bg-black/20 glassmorphism rounded-2xl p-6 border border-yellow-400/8 shadow-xl">
              <nav className="flex flex-col items-stretch gap-4 bg-violet-950 py-4 border-4">
                <Link href="/" className={`text-2xl text-center ${isActive("/") ? "text-yellow-400" : "text-yellow-200"}`} onClick={() => setOpen(false)}>Home</Link>
                <Link href="/projects" className={`text-2xl text-center ${isActive("/projects") ? "text-yellow-400" : "text-yellow-200"}`} onClick={() => setOpen(false)}>Projects</Link>
                <Link href="/services" className={`text-2xl text-center ${isActive("/services") ? "text-yellow-400" : "text-yellow-200"}`} onClick={() => setOpen(false)}>Services</Link>
                <Link href="/contact" className={`text-2xl text-center ${isActive("/contact") ? "text-yellow-400" : "text-yellow-200"}`} onClick={() => setOpen(false)}>Contact</Link>
                <Link href="/quote" className={`mt-4 px-6 py-3 rounded-full font-bold text-center ${isActive("/quote") ? "bg-yellow-300 text-black" : "bg-yellow-400 text-black"}`} onClick={() => setOpen(false)}>Get Quote</Link>
                <Link href="/appointment" className={`mt-2 px-6 py-3 rounded-full font-bold text-center ${isActive("/appointment") ? "bg-yellow-300 text-black" : "bg-yellow-400 text-black"}`} onClick={() => setOpen(false)}>Make Appointment</Link>
              </nav>
            </div>

            <button className="absolute top-6 right-6 text-yellow-200 text-3xl" onClick={() => setOpen(false)} aria-label="Close menu">&times;</button>
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
  <body className={`${geistSans.variable} ${geistMono.variable} ${inter.className} antialiased min-h-screen bg-gradient-to-br from-black via-gray-900 to-yellow-900 relative overflow-x-hidden`}>
        {/* Futuristic animated background */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-br from-yellow-400/8 via-black/85 to-yellow-900/18 animate-gradient-x" />
          <div className="absolute inset-0 bg-noise opacity-40 mix-blend-overlay pointer-events-none" />
          <div className="absolute top-1/3 left-1/2 w-[85vw] h-[85vw] max-w-[600px] max-h-[600px] sm:w-[50vw] sm:h-[50vw] md:w-[600px] md:h-[600px] bg-gradient-to-tr from-yellow-400/18 via-yellow-300/12 to-transparent rounded-full blur-3xl opacity-30 animate-pulse-slow -translate-x-1/2 transform" />
        </div>
        <Navbar />
  <main className="pt-8 px-3 sm:px-6 max-w-[92%] sm:max-w-5xl mx-auto glassmorphism rounded-xl shadow-2xl border border-yellow-400/10 mt-6 mb-8">
          {children}
        </main>
      </body>
    </html>
  );
}
