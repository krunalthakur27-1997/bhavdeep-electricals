"use client";

import Navbar from "./Navbar";
import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    const form = e.currentTarget;

    const data = new FormData(form);

    const response = await fetch(
      "https://formsubmit.co/ajax/bhavdeepelectricals.engg@gmail.com",
      {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      },
    );

    if (response.ok) {
      setSuccess(true);
      form.reset();
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        {/* HERO SECTION */}
        <section
          id="home"
          className="relative h-screen flex items-center justify-center text-white"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url('/projects/factory_wiring.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="text-center px-6 max-w-4xl hero-animation">
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Bhavdeep Electricals <br />& Engineering
            </h1>

            <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
              Industrial Electrical Experts Since 1988
            </p>

            <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
              Delivering reliable industrial electrical solutions, control
              panels, maintenance services, and engineering support for
              factories and industrial plants.
            </p>

            <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center">
              <a
                href="#contact"
                className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-4 rounded-xl text-lg transition glow-button"
              >
                Get Quote
              </a>

              <a
                href="#projects"
                className="border-2 border-white hover:bg-white hover:text-black font-bold px-8 py-4 rounded-xl text-lg transition"
              >
                View Projects
              </a>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="bg-black text-white py-28 px-6">
          <h2 className="text-5xl font-bold text-center mb-20">Our Services</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="service-card bg-[#111827] rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                Industrial Wiring
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Complete industrial electrical wiring solutions for factories
                and plants.
              </p>
            </div>

            <div className="service-card bg-[#111827] rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                Control Panels
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Custom electrical control panel design and installation
                services.
              </p>
            </div>

            <div className="service-card bg-[#111827] rounded-3xl p-10 shadow-xl">
              <h3 className="text-3xl font-bold text-yellow-400 mb-6">
                Maintenance
              </h3>

              <p className="text-gray-300 text-lg leading-relaxed">
                Preventive and emergency electrical maintenance solutions.
              </p>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="bg-gray-200 py-28 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-bold text-blue-900 mb-10">
                About Us
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                Bhavdeep Electricals & Engineering has been delivering trusted
                industrial electrical solutions since 1988.
              </p>

              <p className="text-gray-700 text-lg leading-relaxed">
                We specialize in industrial wiring, maintenance, control panels
                and complete engineering support for factories and industrial
                plants.
              </p>
            </div>

            <div className="bg-blue-900 text-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold mb-10">Why Choose Us</h3>

              <ul className="space-y-5 text-lg">
                <li>✓ 36+ Years Experience</li>
                <li>✓ Trusted By Industries</li>
                <li>✓ Industrial Specialists</li>
                <li>✓ Reliable Service</li>
                <li>✓ Professional Team</li>
              </ul>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="bg-black text-white py-28 px-6">
          <h2 className="text-5xl font-bold text-center mb-20">Our Projects</h2>

          <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
            <div className="project-card bg-[#111827] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/projects/factory_wiring.png"
                alt="Factory Wiring"
                className="w-full h-72 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  Factory Wiring
                </h3>

                <p className="text-gray-300 text-lg">
                  Complete electrical setup for manufacturing units.
                </p>
              </div>
            </div>

            <div className="project-card bg-[#111827] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/projects/control_panel.png"
                alt="Control Panel"
                className="w-full h-72 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  Control Panel Installation
                </h3>

                <p className="text-gray-300 text-lg">
                  Advanced industrial control panel systems.
                </p>
              </div>
            </div>

            <div className="project-card bg-[#111827] rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/projects/plant_maintenance.png"
                alt="Plant Maintenance"
                className="w-full h-72 object-cover"
              />

              <div className="p-8">
                <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                  Plant Maintenance
                </h3>

                <p className="text-gray-300 text-lg">
                  Preventive and emergency maintenance support.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* GOOGLE MAPS SECTION */}
        <section id="location" className="bg-gray-200 py-28 px-6">
          <h2 className="text-5xl font-bold text-center text-blue-900 mb-20">
            Our Location
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* MAP */}
            <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1221125607467!2d72.77494917500671!3d20.15724998128285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72b9c14b8e2f9%3A0x1005ee1349d1a84b!2sBhavdeep%20Electricals%20%26%20Engineering!5e1!3m2!1sen!2sin!4v1779454423220!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            {/* LOCATION INFO */}
            <div className="bg-white rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-blue-900 mb-10">
                Visit Our Office
              </h3>

              <div className="space-y-8 text-lg text-gray-700">
                <div>
                  <p className="font-bold text-blue-900 mb-2">Office Address</p>

                  <p>
                    Bhavdeep Electricals & Engineering
                    <br />
                    Shed No. C-2/01,
                    <br />
                    Near Arihant Transport,
                    <br />
                    GIDC, Umbergaon,
                    <br />
                    Dist. Valsad,
                    <br />
                    Gujarat - 396171
                  </p>
                </div>

                <div>
                  <p className="font-bold text-blue-900 mb-2">Working Hours</p>

                  <p>
                    Monday - Saturday
                    <br />
                    9:00 AM - 7:00 PM
                  </p>
                </div>

                <div>
                  <p className="font-bold text-blue-900 mb-2">Contact Number</p>

                  <p>+91 97261 97976</p>
                </div>

                <div>
                  <p className="font-bold text-blue-900 mb-2">Email</p>

                  <p>bhavdeepelectricals.engg@gmail.com</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/Bhavdeep+Electricals+%26+Engineering/@20.1572499,72.7749492,17z"
                target="_blank"
                className="inline-block mt-10 bg-blue-900 hover:bg-blue-800 text-white font-bold px-8 py-4 rounded-xl transition"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-black text-white py-28 px-6">
          <h2 className="text-5xl font-bold text-center mb-20">Contact Us</h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
            {/* CONTACT INFO */}
            <div className="contact-card bg-white text-black rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold text-blue-900 mb-10">
                Contact Information
              </h3>

              <div className="space-y-8 text-lg">
                <div>
                  <p className="font-bold text-blue-900 mb-2">Contact Person</p>

                  <p>Bhavdeep C. Bhandari — +91 97261 97976</p>

                  <p>C.K. Bhandari — +91 93770 16990</p>
                </div>

                <div>
                  <p className="font-bold text-blue-900 mb-2">Email</p>

                  <p>bhavdeepelectricals.engg@gmail.com</p>
                </div>
              </div>
            </div>

            {/* INQUIRY FORM */}
            <div className="contact-card bg-blue-900 rounded-3xl p-12 shadow-2xl">
              <h3 className="text-4xl font-bold mb-10">Send Inquiry</h3>

              {success && (
                <div className="bg-green-500 text-white p-4 rounded-xl mb-6">
                  Inquiry submitted successfully!
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your Name"
                  className="w-full p-5 rounded-xl bg-blue-800 border border-blue-700 text-white"
                />

                <input
                  type="text"
                  name="phone"
                  required
                  placeholder="Phone Number"
                  className="w-full p-5 rounded-xl bg-blue-800 border border-blue-700 text-white"
                />

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="w-full p-5 rounded-xl bg-blue-800 border border-blue-700 text-white"
                />

                <textarea
                  rows={5}
                  name="message"
                  required
                  placeholder="Your Message"
                  className="w-full p-5 rounded-xl bg-blue-800 border border-blue-700 text-white"
                ></textarea>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-5 rounded-xl text-lg glow-button"
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="bg-[#111827] text-white py-10 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold text-yellow-400">
                Bhavdeep Electricals & Engineering
              </h3>

              <p className="text-gray-400 mt-2">
                Industrial Electrical Experts Since 1988
              </p>
            </div>

            <div className="text-gray-400 text-center md:text-right mt-6 md:mt-0">
              <p>© 2026 Bhavdeep Electricals & Engineering</p>

              <p className="mt-2">All Rights Reserved</p>
            </div>
          </div>
        </footer>

        {/* WHATSAPP BUTTON */}
        <a
          href="https://wa.me/919726197976"
          target="_blank"
          className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white px-5 py-4 rounded-full shadow-2xl font-bold z-50"
        >
          WhatsApp
        </a>
      </main>
    </>
  );
}
