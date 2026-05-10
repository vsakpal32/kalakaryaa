import { FaWhatsapp } from "react-icons/fa";
import myImage from './assets/images/artist_image.jpeg'
export default function WallMuralArtistWebsite() {
  const projects = [
    {
      title: 'Urban Jungle',
      location: 'Mumbai Cafe',
      image:
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Ocean Dreams',
      location: 'Goa Resort',
      image:
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
    },
    {
      title: 'Abstract Motion',
      location: 'Bangalore Office',
      image:
        'https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transforming Walls Into Art
          </h1>

          <p className="mt-6 text-lg md:text-2xl text-gray-200">
            Custom murals for homes, cafes, offices, restaurants, and creative
            spaces.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#portfolio"
              className="bg-white text-black px-6 py-3 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="border border-white text-white px-6 py-3 rounded-2xl font-semibold hover:bg-white hover:text-black transition"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img
            src={myImage}
            alt="Artist"
            className="rounded-3xl shadow-2xl h-[500px] object-cover w-full"
          />

          <div>
            <h2 className="text-4xl font-bold mb-6">About the Artist</h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              I create large-scale hand-painted murals that bring personality,
              storytelling, and emotion into spaces. From vibrant cafes to
              luxury interiors, each mural is designed uniquely for the client.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-gray-600 mt-2">Murals Completed</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow">
                <h3 className="text-3xl font-bold">8</h3>
                <p className="text-gray-600 mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Featured Projects</h2>
            <p className="text-gray-600 mt-4 text-lg">
              Selected murals created across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="rounded-3xl overflow-hidden shadow-xl hover:-translate-y-2 transition duration-300 bg-white"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mt-2">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-16 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              'Residential Murals',
              'Cafe & Restaurant Art',
              'Office Wall Designs',
              'Kids Room Murals',
              '3D Wall Paintings',
              'Custom Artwork',
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-3xl p-8 backdrop-blur-md"
              >
                <h3 className="text-2xl font-semibold">{service}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Client Reviews</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg text-left">
              <p className="text-gray-700 text-lg leading-relaxed">
                “The mural completely transformed our cafe. Customers constantly
                take photos with it!”
              </p>

              <h4 className="mt-6 font-semibold">— Cafe Owner, Mumbai</h4>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg text-left">
              <p className="text-gray-700 text-lg leading-relaxed">
                “Professional, creative, and incredibly detailed work. Highly
                recommended.”
              </p>

              <h4 className="mt-6 font-semibold">— Interior Designer</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold">Let’s Paint Your Space</h2>

          <p className="text-lg text-gray-600 mt-4">
            Available for projects across India.
          </p>

          <div className="mt-10 bg-gray-100 rounded-3xl p-10 shadow-xl">
            <form className="grid gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="p-4 rounded-2xl border border-gray-300"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="p-4 rounded-2xl border border-gray-300"
              />

              <textarea
                rows="5"
                placeholder="Tell me about your mural project"
                className="p-4 rounded-2xl border border-gray-300"
              ></textarea>

              <button
                type="submit"
                className="bg-black text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition"
              >
                Send Inquiry
              </button>
              <a
                href="https://wa.me/919922437341?text=Hi%20I%20want%20to%20inquire%20about%20a%20wall%20mural%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-green-500 text-white py-4 rounded-2xl font-semibold text-center hover:opacity-90 transition"
              >
                Chat on WhatsApp
              </a>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 text-center">
        <p>© 2026 Art.Shubhangi. All rights reserved.</p>
      </footer>
    </div>
  );
}
