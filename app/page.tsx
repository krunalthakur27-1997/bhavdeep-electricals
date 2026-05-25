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
              panels, maintenance services and engineering support for factories
              and industrial plants.
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

        {/* LEADERSHIP SECTION */}
        <section id="about" className="bg-gray-200 py-28 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-blue-900 mb-6">
                Leadership & Expertise
              </h2>

              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Driven by decades of industrial electrical experience, our
                leadership team is committed to delivering reliable, safe and
                high-quality engineering solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* OWNER 1 */}
              <div className="contact-card bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-[420px] bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600 text-xl font-semibold">
                    Owner Photo Here
                  </p>
                </div>

                <div className="p-10">
                  <h3 className="text-4xl font-bold text-blue-900 mb-3">
                    Bhavdeep C. Bhandari
                  </h3>

                  <p className="text-yellow-500 font-bold text-xl mb-6">
                    Founder & Industrial Electrical Contractor
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Experienced in industrial electrical systems, factory
                    maintenance, control panel installation and engineering
                    project execution across various industrial sectors.
                  </p>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="bg-blue-50 rounded-2xl p-5 text-center">
                      <h4 className="text-3xl font-bold text-blue-900">36+</h4>

                      <p className="text-gray-600">Years Experience</p>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-5 text-center">
                      <h4 className="text-3xl font-bold text-blue-900">500+</h4>

                      <p className="text-gray-600">Projects</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* OWNER 2 */}
              <div className="contact-card bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="h-[420px] bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600 text-xl font-semibold">
                    Owner Photo Here
                  </p>
                </div>

                <div className="p-10">
                  <h3 className="text-4xl font-bold text-blue-900 mb-3">
                    C.K. Bhandari
                  </h3>

                  <p className="text-yellow-500 font-bold text-xl mb-6">
                    Technical Head & Engineering Support
                  </p>

                  <p className="text-gray-700 text-lg leading-relaxed mb-8">
                    Specializing in industrial troubleshooting, electrical
                    maintenance, project supervision and technical engineering
                    support for factories and industrial plants.
                  </p>

                  <div className="grid grid-cols-2 gap-5">
                    <div className="bg-blue-50 rounded-2xl p-5 text-center">
                      <h4 className="text-3xl font-bold text-blue-900">30+</h4>

                      <p className="text-gray-600">Industrial Clients</p>
                    </div>

                    <div className="bg-blue-50 rounded-2xl p-5 text-center">
                      <h4 className="text-3xl font-bold text-blue-900">24/7</h4>

                      <p className="text-gray-600">Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* CLIENT SECTION */}
        <section id="clients" className="bg-white py-24 px-6">
          <div className="max-w-7xl mx-auto">
            {/* TITLE */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-blue-900 mb-6">
                Trusted By Industries
              </h2>

              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We proudly provide industrial electrical solutions and
                engineering services to trusted businesses and manufacturing
                industries.
              </p>
            </div>

            {/* CLIENT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {[
                "/clients/client1.png",
                "/clients/client2.png",
                "/clients/client3.png",
                "/clients/client4.png",
                "/clients/client5.png",
                "/clients/client6.png",
              ].map((logo, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition duration-300 flex items-center justify-center group"
                >
                  <img
                    src={logo}
                    alt="Client Logo"
                    className="h-16 object-contain grayscale group-hover:grayscale-0 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* PRODUCTS SECTION */}
        <section id="products" className="bg-[#0b1120] py-28 px-6">
          <div className="max-w-7xl mx-auto">
            {/* TITLE */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-yellow-400 mb-6">
                Our Product Range
              </h2>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We manufacture and supply high-quality industrial electrical
                panels, automation systems, power distribution solutions, and
                engineering products.
              </p>
            </div>

            {/* PRODUCT GRID */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {/* PRODUCT CARD */}
              {[
                {
                  title: "PCC Panel",
                  image: "/products/pcc-panel.jpg",
                  desc: "Power Control Center panels for industrial power distribution.",
                },

                {
                  title: "MCC Panel",
                  image: "/products/mcc-panel.jpg",
                  desc: "Motor Control Center panels for industrial motor operations.",
                },

                {
                  title: "APFC Panel",
                  image: "/products/apfc-panel.jpg",
                  desc: "Automatic Power Factor Correction panels for energy efficiency.",
                },

                {
                  title: "Automation Panel",
                  image: "/products/automation-panel.jpg",
                  desc: "PLC, VFD and SCADA automation control systems.",
                },

                {
                  title: "ATS / AMF Panel",
                  image: "/products/amf-panel.jpg",
                  desc: "Automatic transfer switching and DG synchronization systems.",
                },

                {
                  title: "Distribution Panel",
                  image: "/products/distribution-panel.jpg",
                  desc: "Reliable industrial electrical distribution systems.",
                },

                {
                  title: "Fire Panel",
                  image: "/products/fire-panel.jpg",
                  desc: "Industrial fire alarm and protection control systems.",
                },

                {
                  title: "Solar Panel System",
                  image: "/products/solar-panel.jpg",
                  desc: "Industrial and commercial solar power solutions.",
                },

                {
                  title: "Bus Bar Duct",
                  image: "/products/busbar-duct.jpg",
                  desc: "Efficient electrical bus duct systems for power transmission.",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-[#111827] rounded-3xl overflow-hidden shadow-2xl hover:-translate-y-3 transition duration-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-72 object-cover hover:scale-110 transition duration-500"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-yellow-400 mb-4">
                      {product.title}
                    </h3>

                    <p className="text-gray-300 text-lg leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* GALLERY SECTION */}
        <section id="gallery" className="bg-gray-200 py-28 px-6">
          <div className="max-w-7xl mx-auto">
            {/* TITLE */}
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-blue-900 mb-6">
                Project Gallery
              </h2>

              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Industrial electrical projects, control panels, maintenance work
                and engineering services.
              </p>
            </div>

            {/* GALLERY GRID */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "/gallery/gallery1.jpg",
                "/gallery/gallery2.jpg",
                "/gallery/gallery3.jpg",
                "/gallery/gallery4.jpg",
                "/gallery/gallery5.jpg",
                "/gallery/gallery6.jpg",
              ].map((image, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl shadow-2xl bg-white group"
                >
                  <img
                    src={image}
                    alt="Gallery"
                    className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* GOOGLE MAPS SECTION */}
        <section id="location" className="bg-gray-200 py-28 px-6">
          <h2 className="text-5xl font-bold text-center text-blue-900 mb-20">
            Our Location
          </h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
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
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-black text-white py-28 px-6">
          <h2 className="text-5xl font-bold text-center mb-20">Contact Us</h2>

          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
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
      </main>
    </>
  );
}
