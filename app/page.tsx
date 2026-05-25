import Image from "next/image";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-[#050816] text-white overflow-hidden">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center text-center px-6"
        >
          <div className="absolute inset-0">
            <Image
              src="/projects/factory_wiring.png"
              alt="Industrial Electrical Work"
              fill
              priority
              className="object-cover opacity-30"
            />
          </div>

          <div className="relative z-10 max-w-5xl">
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="Bhavdeep Electricals Logo"
                width={160}
                height={160}
                className="drop-shadow-2xl"
              />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-8">
              Bhavdeep Electricals
              <span className="block text-yellow-400">& Engineering</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Industrial Electrical Experts Since 1988
            </p>

            <p className="mt-6 text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Delivering reliable electrical panels, industrial automation,
              maintenance services, fabrication work, and engineering solutions
              for factories and industrial plants.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="#contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-10 py-5 rounded-2xl text-lg transition duration-300 shadow-xl"
              >
                Get Quote
              </a>

              <a
                href="#products"
                className="border-2 border-white hover:bg-white hover:text-black px-10 py-5 rounded-2xl text-lg font-semibold transition duration-300"
              >
                View Products
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-28 px-6 bg-[#081224]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-yellow-400 mb-6">
                Our Services
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Complete industrial electrical solutions for factories,
                commercial projects, and infrastructure development.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              <div className="bg-[#111827] rounded-3xl p-10 hover:scale-105 transition duration-500 shadow-2xl border border-gray-700">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  Electrical Panels
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Manufacturing and installation of PCC, MCC, APFC,
                  Distribution, ATS, AMF and Automation Panels.
                </p>
              </div>

              <div className="bg-[#111827] rounded-3xl p-10 hover:scale-105 transition duration-500 shadow-2xl border border-gray-700">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  Industrial Maintenance
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Preventive and emergency electrical maintenance solutions for
                  industries and manufacturing plants.
                </p>
              </div>

              <div className="bg-[#111827] rounded-3xl p-10 hover:scale-105 transition duration-500 shadow-2xl border border-gray-700">
                <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                  Automation & PLC
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  PLC, VFD, SCADA, industrial automation and control system
                  integration services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section id="about" className="bg-gray-100 py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-blue-900 mb-6">
                Leadership & Expertise
              </h2>

              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Driven by decades of industrial electrical experience and
                engineering excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-14">
              {/* OWNER CARD 1 */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-96 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600 text-lg">Owner Photo Here</p>
                </div>

                <div className="p-10">
                  <h3 className="text-3xl font-bold text-blue-900">
                    Director Name
                  </h3>

                  <p className="text-yellow-600 font-semibold mt-2 text-lg">
                    Founder & Managing Director
                  </p>

                  <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                    Add owner details, experience, achievements, certifications
                    and leadership information here.
                  </p>
                </div>
              </div>

              {/* OWNER CARD 2 */}
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-96 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600 text-lg">Owner Photo Here</p>
                </div>

                <div className="p-10">
                  <h3 className="text-3xl font-bold text-blue-900">
                    Director Name
                  </h3>

                  <p className="text-yellow-600 font-semibold mt-2 text-lg">
                    Technical Director
                  </p>

                  <p className="mt-6 text-gray-700 leading-relaxed text-lg">
                    Add owner profile, technical expertise, industrial
                    experience and responsibilities here.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS SECTION */}
        <section id="products" className="py-28 px-6 bg-[#050816]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-yellow-400 mb-6">
                Our Product Range
              </h2>

              <p className="text-xl text-gray-300">
                High-quality industrial electrical products and panel solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                "PCC Panel",
                "MCC Panel",
                "APFC Panel",
                "Automation Panel",
                "ATS / AMF Panel",
                "Distribution Panel",
                "Temperature Control Panel",
                "Fire Panel",
                "Panel Fabrication",
                "Bus Bar Duct",
                "Solar Panel",
                "Cable Tray",
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl hover:scale-105 transition duration-500"
                >
                  <div className="h-64 bg-gray-300 flex items-center justify-center">
                    <p className="text-gray-700 font-semibold">Product Image</p>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-yellow-400">
                      {product}
                    </h3>

                    <p className="text-gray-300 mt-4 leading-relaxed">
                      Industrial-grade {product.toLowerCase()} designed for
                      reliability, safety, and performance.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENTS SECTION */}
        <section className="bg-[#081224] py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-yellow-400 mb-6">
                Trusted By Industries
              </h2>

              <p className="text-xl text-gray-300">
                Serving factories, industries and infrastructure projects.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Manufacturing",
                "Chemical",
                "Textile",
                "Pharmaceutical",
                "Food Industry",
                "Engineering",
                "Commercial",
                "Infrastructure",
              ].map((client, index) => (
                <div
                  key={index}
                  className="bg-[#111827] rounded-2xl py-10 px-6 text-center border border-gray-700 hover:border-yellow-400 transition"
                >
                  <h3 className="text-xl font-bold text-white">{client}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALLERY SECTION */}
        <section id="gallery" className="bg-gray-100 py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-blue-900 mb-6">
                Project Gallery
              </h2>

              <p className="text-xl text-gray-700">
                Our industrial projects and electrical installations.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                "/projects/control_panel.png",
                "/projects/factory_wiring.png",
                "/projects/plant_maintenance.png",
              ].map((img, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl shadow-2xl"
                >
                  <Image
                    src={img}
                    alt="Project"
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover hover:scale-110 transition duration-700"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MAP SECTION */}
        <section className="py-28 bg-[#050816] px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-yellow-400 mb-6">
                Our Location
              </h2>

              <p className="text-xl text-gray-300">
                Visit Bhavdeep Electricals & Engineering
              </p>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1221125607467!2d72.77494917500671!3d20.15724998128285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72b9c14b8e2f9%3A0x1005ee1349d1a84b!2sBhavdeep%20Electricals%20%26%20Engineering!5e1!3m2!1sen!2sin!4v1779454423220!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="bg-[#081224] py-28 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-yellow-400 mb-6">
                Contact Us
              </h2>

              <p className="text-xl text-gray-300">
                Get in touch for industrial electrical solutions.
              </p>
            </div>

            <form
              action="https://formsubmit.co/bhavdeepelectricals.engg@gmail.com"
              method="POST"
              className="bg-[#111827] p-10 rounded-3xl shadow-2xl border border-gray-700"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-5 rounded-xl bg-[#1f2937] border border-gray-600 text-white"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full p-5 rounded-xl bg-[#1f2937] border border-gray-600 text-white"
                />
              </div>

              <input
                type="text"
                name="subject"
                required
                placeholder="Subject"
                className="w-full p-5 rounded-xl bg-[#1f2937] border border-gray-600 text-white mb-8"
              />

              <textarea
                rows={6}
                name="message"
                required
                placeholder="Your Message"
                className="w-full p-5 rounded-xl bg-[#1f2937] border border-gray-600 text-white mb-8"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-5 rounded-2xl text-lg transition"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-black py-10 text-center border-t border-gray-800">
          <div className="flex justify-center mb-6">
            <Image src="/logo.png" alt="Logo" width={80} height={80} />
          </div>

          <h3 className="text-2xl font-bold text-yellow-400">
            Bhavdeep Electricals & Engineering
          </h3>

          <p className="text-gray-400 mt-4">
            Industrial Electrical Experts Since 1988
          </p>

          <p className="text-gray-500 mt-6">
            © 2026 Bhavdeep Electricals & Engineering. All Rights Reserved.
          </p>
        </footer>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919726197976"
          target="_blank"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl font-bold z-50"
        >
          WhatsApp
        </a>
      </main>
    </>
  );
}
