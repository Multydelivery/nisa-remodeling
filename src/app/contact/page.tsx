

export default function Contact() {
  return (
    <section className="w-full min-h-[70vh] flex flex-col items-center justify-center px-2 sm:px-4 py-8 sm:py-16 bg-gradient-to-br from-black via-gray-900 rounded-xl shadow-2xl">
      <h1 className="text-3xl sm:text-5xl font-extrabold mb-6 text-yellow-200 text-center drop-shadow-glow">Contact Us</h1>
      <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 w-full max-w-2xl sm:max-w-4xl items-center justify-center">
        <div className="flex-1 mb-8 sm:mb-0 w-full">
          <p className="text-lg sm:text-2xl mb-4">Phone: <a href="tel:+17869331329" className="underline">+1 (786) 933-1329</a></p>
          <p className="text-lg sm:text-2xl mb-4">Email: <span className="underline">info@nisaremodeling.com</span> (replace with your real email)</p>
          <p className="text-lg sm:text-xl">Or use the form to get in touch.</p>
        </div>
        <form className="flex-1 bg-black/60 rounded-lg p-4 sm:p-8 shadow-lg border border-yellow-400/20 w-full max-w-sm sm:max-w-md mx-auto">
          <div className="mb-4">
            <label className="block mb-2 text-yellow-300 font-semibold" htmlFor="name">Name</label>
            <input className="w-full px-3 py-2 rounded bg-gray-900 text-yellow-400 border border-yellow-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-400" type="text" id="name" name="name" placeholder="Your Name" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-yellow-300 font-semibold" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 rounded bg-gray-900 text-yellow-400 border border-yellow-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-400" type="email" id="email" name="email" placeholder="Your Email" />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-yellow-300 font-semibold" htmlFor="message">Message</label>
            <textarea className="w-full px-3 py-2 rounded bg-gray-900 text-yellow-400 border border-yellow-400/30 focus:outline-none focus:ring-2 focus:ring-yellow-400" id="message" name="message" rows={4} placeholder="Your Message" />
          </div>
          <button type="submit" className="w-full bg-yellow-400 text-black py-2 rounded font-bold hover:bg-yellow-500 transition">Send</button>
        </form>
      </div>
    </section>
  );
}
