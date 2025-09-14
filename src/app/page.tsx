import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16 sm:py-24 bg-gradient-to-br from-black/95 via-gray-900/90  rounded-xl shadow-2xl relative overflow-hidden border border-amber-400/8 ring-1 ring-amber-400/6">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-amber-400/6 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-300/12 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-medium" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-500/6 rounded-full mix-blend-soft-light filter blur-3xl animate-pulse-slow" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 pointer-events-none" />
      </div>

      {/* Logo with animation */}
      <div className="mb-10 flex justify-center transform transition-all duration-700 hover:scale-105">
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-full overflow-hidden bg-black/20 shadow-lg border-2 border-amber-400/30 group">
          <Image
            src="/nissaremodelinglogoscshot.jpeg"
            alt="NISA REMODELING logo"
            fill
            priority
            className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      {/* Company Name & Tagline */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-stone-300 drop-shadow-md animate-fade-in">
          NISA REMODELING
        </h1>
        <h2 className="text-lg sm:text-2xl font-medium text-stone-200 animate-fade-in delay-100">
          High-end Bathroom Design & Remodeling
        </h2>
      </div>

      {/* Contact Info */}
      <div className="mb-10 text-center animate-fade-in delay-200">
        <p className="text-lg sm:text-xl text-amber-100 mb-4">Want a free consultation? Call us now.</p>
        <a
          href="tel:+17869331329"
          className="inline-block bg-amber-400 text-gray-900 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-amber-500 hover:scale-105 transition-all duration-300 transform text-lg"
        >+1 (786) 933-1329</a>
        <p className="mt-4 text-amber-200/90 animate-pulse text-base">Be, think, do = éxito 💪💪💪🙏🧿</p>
      </div>

      {/* Services Section */}
      <section className="w-full max-w-6xl mb-12 animate-fade-in delay-300">
  <h3 className="text-2xl sm:text-3xl font-semibold mb-10 text-center text-stone-300">Our Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="flex flex-col sm:flex-row gap-6 mb-12 animate-fade-in delay-500">
        <Link 
          href="/quote" 
          className="px-8 py-4 bg-amber-400 text-gray-900 font-bold rounded-full shadow-lg hover:bg-amber-500 hover:scale-105 transition-all duration-300 transform text-center text-lg"
        >
          Get Free Quote
        </Link>
        <Link 
          href="/appointment" 
          className="px-8 py-4 bg-transparent border-2 border-amber-400 text-amber-400 font-bold rounded-full shadow-lg hover:bg-amber-400/10 hover:scale-105 transition-all duration-300 transform text-center text-lg"
        >
          Schedule Consultation
        </Link>
      </div>

      {/* Testimonials Preview */}
      <section className="w-full max-w-4xl mb-12 animate-fade-in delay-600">
  <h3 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-stone-300">What Our Clients Say</h3>
        <div className="bg-gray-800/50 rounded-xl p-8 border border-amber-400/30">
          <p className="text-amber-100 italic text-center text-lg">NISA Remodeling transformed our outdated bathroom into a luxurious spa-like retreat. Their attention to detail and quality craftsmanship exceeded our expectations!</p>
          <p className="text-amber-400 text-center mt-6 font-semibold text-base">- Maria Rodriguez, Miami</p>
        </div>
      </section>
    </section>
  );
}

// Service Card Component
type Service = {
  title: string;
  description: string;
  image: string;
};

const ServiceCard = ({ service }: { service: Service }) => (
  <article className="bg-gray-800/40 rounded-xl overflow-hidden shadow-lg border border-amber-400/20 group hover:border-amber-400/40 transition-all duration-500 hover:scale-105 transform h-full flex flex-col">
    <div className="relative w-full h-64 overflow-hidden">
      <Image 
        src={service.image} 
        alt={service.title} 
        fill 
        className="object-cover group-hover:scale-110 transition-transform duration-700" 
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
      <div className="absolute bottom-0 left-0 right-0 p-4 text-amber-400 font-bold text-center text-xl">
        {service.title}
      </div>
    </div>
    <div className="p-5 text-amber-100 flex-grow">
      <p className="text-base">{service.description}</p>
    </div>
  </article>
);

// Services Data
const services = [
  {
    title: "Luxury Bathroom Remodeling",
    description: "Full renovations with premium fixtures and finishes that transform your space.",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Custom Design & Consultation",
    description: "Bespoke layouts and material selection guidance tailored to your vision.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "High-end Materials & Finishes",
    description: "Marble, custom cabinetry, designer fixtures for a luxurious finish.",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Project Management",
    description: "End-to-end coordination and scheduling for a seamless experience.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Residential & Commercial",
    description: "Services for homes and businesses of all sizes with expert craftsmanship.",
    image: "https://images.unsplash.com/photo-1505692794400-8a2ed6c3b14b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Accessibility Solutions",
    description: "Beautiful and functional accessible bathroom designs for all needs.",
    image: "https://images.unsplash.com/photo-1613490493577-9b12b1d6c2e7?auto=format&fit=crop&w=1200&q=80"
  }
];