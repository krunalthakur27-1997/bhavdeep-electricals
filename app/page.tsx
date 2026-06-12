import Image from "next/image";
import Navbar from "./Navbar";

const products = [
  {
    name: "PCC Panel",
    image: "/product/pcc-panel.png",
    description:
      "Power Control Center panels for industrial power distribution.",
    category: "Power",
  },
  {
    name: "MCC Panel",
    image: "/product/mcc-panel.png",
    description: "Motor Control Center panels for industrial motor control.",
    category: "Control",
  },
  {
    name: "APFC Panel",
    image: "/product/apfc-panel.png",
    description: "Automatic Power Factor Correction panels.",
    category: "Power",
  },
  {
    name: "ATS / AMF Panel",
    image: "/product/ats-panel.png",
    description: "Automatic transfer and generator synchronization panels.",
    category: "Control",
  },
  {
    name: "Automation Panel",
    image: "/product/automation-panel.png",
    description: "PLC, VFD and SCADA based automation systems.",
    category: "Automation",
  },
  {
    name: "Busbar Duct",
    image: "/product/busbar-duct.png",
    description: "Efficient electrical power distribution busbar systems.",
    category: "Power",
  },
  {
    name: "Control Panel",
    image: "/product/control-panel.png",
    description: "Custom industrial process control panels.",
    category: "Control",
  },
  {
    name: "Distribution Panel",
    image: "/product/distribution-panel.png",
    description: "Reliable LT electrical distribution solutions.",
    category: "Power",
  },
  {
    name: "ELR Panel",
    image: "/product/elr-panel.png",
    description: "Earth Leakage Relay protection panels.",
    category: "Protection",
  },
  {
    name: "Fire Alarm Panel",
    image: "/product/fire-panel.png",
    description: "Industrial fire alarm and monitoring systems.",
    category: "Protection",
  },
  {
    name: "Temperature Control Panel",
    image: "/product/tc-panel.png",
    description: "Industrial temperature monitoring and control panels.",
    category: "Control",
  },
  {
    name: "Solar Panel",
    image: "/product/solar-panel.png",
    description:
      "Efficient solar power generation systems for industrial and commercial use.",
    category: "Automation",
  },
];

const stats = [
  { value: "35+", label: "Years Experience", color: "text-blue-400" },
  { value: "500+", label: "Projects Completed", color: "text-red-400" },
  { value: "200+", label: "Happy Clients", color: "text-blue-400" },
  { value: "12+", label: "Product Categories", color: "text-red-400" },
];

const clients = [
  "Precision Rubber Industries Pvt. Ltd.",
  "Shubhlaxmi Metal's & Tubes Pvt. Ltd.",
  "Union Park Chemicals Pvt. Ltd.",
  "Mats & More Pvt. Ltd.",
  "Faze Three Limited",
  "Everest Food Products Pvt. Ltd.",
  "MLTI Private Limited",
  "Euro Bond Panel Products Pvt. Ltd.",
  "Harkesh Rubber LLP Pvt. Ltd.",
  "V.P. Bedekar & Sons Pvt. Ltd.",
  "Lesol City LLP",
  "Phoenix Foils Pvt. Ltd.",
  "New Bharat Cylinder LLP Pvt. Ltd.",
  "Umid Electricals Works",
  "Dynamic Technology Engineering",
  "Shree Sales Pack",
  "S.K. Pharma Machinery Pvt. Ltd.",
  "Western Rubber India Pvt. Ltd.",
];

const testimonials = [
  {
    name: "Rajesh Patel",
    company: "Precision Rubber Industries Pvt. Ltd.",
    text: "Bhavdeep Electricals delivered our MCC panel on time with excellent quality. Their team is highly professional and responsive.",
    rating: 5,
  },
  {
    name: "Suresh Shah",
    company: "Union Park Chemicals Pvt. Ltd.",
    text: "We have been working with them for over 10 years. Reliable, skilled and always available for emergencies.",
    rating: 5,
  },
  {
    name: "Amit Desai",
    company: "Faze Three Limited",
    text: "Their VFD repair service saved us significant downtime. Excellent technical knowledge and quick turnaround.",
    rating: 5,
  },
];

const categoryColors: Record<string, string> = {
  Power: "bg-blue-600 text-white",
  Control: "bg-red-600 text-white",
  Automation: "bg-blue-800 text-white",
  Protection: "bg-red-800 text-white",
};

const projectsData = [
  {
    title: "HT Power Installation",
    accent: "blue",
    items: [
      "11KV DO DP Structure Installation",
      "VCB Panel Supply & Installation",
      "Transformer Supply & Installation",
      "HT Cable Laying & Termination",
      "Earthing System",
      "Testing & Commissioning",
      "Preventive Maintenance",
    ],
  },
  {
    title: "LT Power Installation",
    accent: "red",
    items: [
      "LT Panel Design & Manufacturing",
      "LT Panel Installation",
      "Power Distribution Consultation",
      "Power Cable Laying & Termination",
      "Lighting Power Installation",
      "DG Erection & Power Installation",
      "Earthing System",
      "Testing & Commissioning",
    ],
  },
  {
    title: "Maintenance Services",
    accent: "blue",
    items: [
      "11KV DO DP Structure Servicing",
      "VCB / ACB / LT Panel & APFC Panel Servicing",
      "Transformer Oil Filtration",
      "DG Servicing",
      "VFD / Drive / Electronic Card Servicing",
      "AC & DC Motor Rewinding",
    ],
  },
  {
    title: "Solar Solutions",
    accent: "red",
    items: [
      "Solar PV System Design",
      "Rooftop Solar Installation",
      "Ground-Mounted Solar Systems",
      "Solar Panel Mounting Structures",
      "Solar Inverter Installation",
      "DC & AC Cable Laying",
      "Net Metering Assistance",
      "Testing & Commissioning",
      "Operation & Maintenance (O&M)",
    ],
  },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-[#020b18] text-white overflow-hidden">
        {/* ═══ HERO ═══════════════════════════════════════════════ */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center text-center px-6"
          aria-label="Hero"
        >
          <div className="absolute inset-0">
            <Image
              src="/projects/factory_wiring.png"
              alt=""
              fill
              className="object-cover object-center"
              priority
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-[#020b18]/75 to-[#020b18]" />
          </div>
          <div
            className="absolute inset-0 grid-overlay opacity-30"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl flex flex-col items-center pt-28 pb-20 hero-animation">
            {/* Tricolor badge */}
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-300">Trusted</span>
              <span className="text-white/40">·</span>
              <span className="text-white">Since 1988</span>
              <span className="text-white/40">·</span>
              <span className="text-red-400">Umbergaon, Gujarat</span>
            </div>

            {/* Logo */}
            <div className="mb-8 floating">
              <Image
                src="/logo-full.png"
                alt="Bhavdeep Electricals & Engineering"
                width={900}
                height={320}
                className="w-[380px] md:w-[650px] h-auto drop-shadow-[0_0_50px_rgba(29,78,216,0.4)]"
                priority
              />
            </div>

            {/* Tricolor accent */}
            <div className="tricolor-bar w-48 mx-auto mb-6" />

            <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight">
              HT &amp; LT Electrical Infrastructure{" "}
              <span className="text-blue-400">Experts</span>{" "}
              <span className="text-red-400">Since 1988</span>
            </h1>

            <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              Delivering complete HT/LT power solutions, electrical panels,
              industrial automation, maintenance services and solar energy
              systems across Gujarat.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="#contact"
                className="glow-btn-red bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-lg"
              >
                Get Free Quote →
              </a>
              <a
                href="#products"
                className="glow-btn-blue bg-blue-700 hover:bg-blue-600 border border-blue-500/50 px-10 py-4 rounded-2xl text-white font-bold text-lg"
              >
                View Products
              </a>
            </div>

            <div className="flex flex-col items-center gap-2 text-slate-400 text-xs tracking-widest uppercase">
              <span>Scroll to explore</span>
              <div className="scroll-indicator" />
            </div>
          </div>
        </section>

        {/* ═══ STATS ══════════════════════════════════════════════ */}
        <section className="relative z-10 py-0 px-6" aria-label="Stats">
          <div className="max-w-6xl mx-auto">
            {/* Tricolor border gradient */}
            <div
              className="p-[2px] rounded-3xl"
              style={{
                background:
                  "linear-gradient(to right, #1d4ed8, #ffffff22, #dc2626)",
              }}
            >
              <div className="bg-[#04111f] rounded-3xl px-8 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col items-center gap-2"
                    >
                      <p
                        className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}
                      >
                        {stat.value}
                      </p>
                      <p className="text-slate-300 font-medium text-sm md:text-base">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ WHY CHOOSE US ══════════════════════════════════════ */}
        <section
          className="relative py-20 px-6 overflow-hidden"
          aria-label="Why Choose Us"
        >
          <div className="absolute inset-0">
            <Image
              src="/projects/control_panel.png"
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#020b18]/92" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="section-badge">Why Choose Us</span>
                <h2 className="section-title text-white mt-4 text-left">
                  Built on <span className="text-blue-400">Trust</span> &amp;{" "}
                  <span className="text-red-400">Quality</span>
                </h2>
                <div className="tricolor-bar w-24 mt-4 mb-8" />
                <p className="text-slate-400 text-lg leading-relaxed mb-10">
                  With over 35 years of hands-on experience in industrial
                  electrical engineering, we bring unmatched expertise, speed
                  and reliability to every project.
                </p>

                <div className="grid gap-5">
                  {[
                    {
                      title: "ISO Certified Quality",
                      desc: "All panels manufactured to IS & IEC standards with rigorous QC.",
                      accent: "bg-blue-600",
                    },
                    {
                      title: "Fast Turnaround",
                      desc: "Quick delivery and emergency breakdown support 24/7.",
                      accent: "bg-red-600",
                    },
                    {
                      title: "Expert Engineering Team",
                      desc: "Qualified engineers with decades of industrial experience.",
                      accent: "bg-blue-600",
                    },
                    {
                      title: "End-to-End Service",
                      desc: "Design, manufacture, installation and lifetime AMC support.",
                      accent: "bg-red-600",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl border border-white/10 hover:border-blue-500/30 transition-all duration-300"
                    >
                      <span
                        className={`w-2 h-2 ${item.accent} rounded-full mt-2 shrink-0`}
                      />
                      <div>
                        <h4 className="text-white font-bold mb-1">
                          {item.title}
                        </h4>
                        <p className="text-slate-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden lg:flex items-center justify-center h-[520px]">
                <div className="absolute w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />
                <div className="relative z-10 w-full max-w-sm space-y-4">
                  {[
                    {
                      label: "Panel Quality Rating",
                      value: "98%",
                      color: "bg-blue-500",
                    },
                    {
                      label: "On-Time Delivery",
                      value: "96%",
                      color: "bg-red-500",
                    },
                    {
                      label: "Client Satisfaction",
                      value: "99%",
                      color: "bg-blue-400",
                    },
                  ].map((bar) => (
                    <div
                      key={bar.label}
                      className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="text-slate-300 font-medium text-sm">
                          {bar.label}
                        </span>
                        <span className="text-white font-bold">
                          {bar.value}
                        </span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2.5">
                        <div
                          className={`${bar.color} h-2.5 rounded-full progress-bar`}
                          style={{ width: bar.value }}
                        />
                      </div>
                    </div>
                  ))}

                  {/* Tricolor card */}
                  <div className="rounded-2xl overflow-hidden">
                    <div className="h-1 tricolor-bar rounded-none" />
                    <div className="bg-blue-900/60 backdrop-blur-sm p-6 border border-blue-700/30">
                      <p className="text-5xl font-extrabold text-white">35+</p>
                      <p className="font-bold mt-1 text-blue-300">
                        Years of Excellence
                      </p>
                      <p className="text-sm mt-2 text-slate-400">
                        Serving Gujarat&apos;s industries since 1988
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ LEADERSHIP ═════════════════════════════════════════ */}
        <section
          id="about"
          className="py-28 px-6 bg-[#020b18]"
          aria-label="About"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="section-badge">Our Team</span>
              <h2 className="section-title text-white mt-4">
                Leadership &amp;{" "}
                <span className="text-blue-400">Expertise</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                Driven by decades of industrial electrical experience and
                engineering excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-10">
              {/* Managing Director */}
              <div className="group bg-[#04111f] rounded-3xl overflow-hidden border border-blue-900/40 hover:border-blue-500/50 transition-all duration-300 shadow-xl">
                <div className="h-1 tricolor-bar rounded-none" />
                <div className="relative h-80 overflow-hidden bg-blue-950/30">
                  <Image
                    src="/team/managing-director.jpg"
                    alt="Managing Director"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04111f] via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <span className="inline-block bg-blue-600/20 text-blue-400 border border-blue-500/30 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                    Founder &amp; Managing Director
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                    Director Name
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    B.E. Electrical · 35+ Years Experience
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    With over 35 years of hands-on experience in industrial
                    electrical engineering, he has led Bhavdeep Electricals from
                    inception to becoming one of Gujarat&apos;s most trusted
                    electrical panel manufacturers and service providers.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {[
                      "35+ Yrs Exp",
                      "Panel Manufacturing",
                      "Industrial Automation",
                      "Gujarat",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-blue-300 bg-blue-900/40 border border-blue-700/40 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Director */}
              <div className="group bg-[#04111f] rounded-3xl overflow-hidden border border-red-900/40 hover:border-red-500/50 transition-all duration-300 shadow-xl">
                <div className="h-1 bg-gradient-to-r from-red-600 via-white/20 to-blue-600 rounded-none" />
                <div className="relative h-80 overflow-hidden bg-red-950/20">
                  <Image
                    src="/team/technical-director.jpg"
                    alt="Technical Director"
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04111f] via-transparent to-transparent" />
                </div>
                <div className="p-8">
                  <span className="inline-block bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-3">
                    Technical Director
                  </span>
                  <h3 className="text-2xl font-bold text-white mt-2 mb-1">
                    Director Name
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    B.E. Electrical · 35+ Years Experience
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Bringing 35+ years of deep technical expertise in electrical
                    systems, panel design and industrial automation, he oversees
                    all technical operations ensuring every product meets the
                    highest quality and safety standards.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {[
                      "35+ Yrs Exp",
                      "Panel Design",
                      "VFD & Drives",
                      "PLC/SCADA",
                    ].map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-red-300 bg-red-900/40 border border-red-700/40 px-3 py-1.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ PRODUCTS ═══════════════════════════════════════════ */}
        <section
          id="products"
          className="py-28 px-6 bg-[#04111f]"
          aria-label="Products"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="section-badge">What We Make</span>
              <h2 className="section-title text-white mt-4">
                Our Product <span className="text-red-400">Range</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                High-quality industrial electrical products and panel solutions
                built for reliability.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="group bg-[#020b18] rounded-2xl overflow-hidden border border-white/8 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/20 hover:-translate-y-1"
                >
                  <div className="relative">
                    <div className="h-52 bg-white relative overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                    </div>
                    <span
                      className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full ${categoryColors[product.category] ?? "bg-blue-600 text-white"}`}
                    >
                      {product.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-200">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <div className="mt-4 pt-4 border-t border-white/8">
                      <a
                        href="#contact"
                        className="text-red-400 text-sm font-semibold hover:text-red-300 transition-colors duration-200 flex items-center gap-1"
                      >
                        Request Quote <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ PROJECTS & CAPABILITIES ════════════════════════════ */}
        <section
          id="projects"
          className="relative py-28 px-6 overflow-hidden bg-[#020b18]"
          aria-label="Projects and Capabilities"
        >
          {/* Subtle background image */}
          <div className="absolute inset-0">
            <Image
              src="/projects/plant_maintenance.png"
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#020b18]/93" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="section-badge">What We Do</span>
              <h2 className="section-title text-white mt-4">
                Projects &amp;{" "}
                <span className="text-blue-400">Capabilities</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                Comprehensive HT, LT, Maintenance and Solar Engineering
                Solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">
              {projectsData.map((card) => {
                const isBlue = card.accent === "blue";
                return (
                  <div
                    key={card.title}
                    className={`group relative flex flex-col bg-[#04111f] rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                      isBlue
                        ? "border-blue-800/40 hover:border-blue-500/60 hover:shadow-blue-900/30"
                        : "border-red-800/40 hover:border-red-500/60 hover:shadow-red-900/20"
                    }`}
                  >
                    {/* Top accent bar */}
                    <div
                      className={`h-1 w-full rounded-none ${
                        isBlue
                          ? "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700"
                          : "bg-gradient-to-r from-red-600 via-red-400 to-red-700"
                      }`}
                    />

                    {/* Glow overlay on hover */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl ${
                        isBlue
                          ? "bg-gradient-to-br from-blue-600/5 to-transparent"
                          : "bg-gradient-to-br from-red-600/5 to-transparent"
                      }`}
                    />

                    <div className="relative z-10 p-7 flex flex-col flex-1">
                      {/* Icon badge */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center mb-5 shrink-0 ${
                          isBlue
                            ? "bg-blue-600/20 border border-blue-500/30"
                            : "bg-red-600/20 border border-red-500/30"
                        }`}
                      >
                        <span
                          className={`text-lg font-extrabold ${isBlue ? "text-blue-400" : "text-red-400"}`}
                          aria-hidden="true"
                        >
                          {card.title.charAt(0)}
                        </span>
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-xl font-bold mb-5 leading-snug transition-colors duration-200 ${
                          isBlue
                            ? "text-white group-hover:text-blue-300"
                            : "text-white group-hover:text-red-300"
                        }`}
                      >
                        {card.title}
                      </h3>

                      {/* Divider */}
                      <div
                        className={`w-12 h-0.5 mb-5 rounded-full ${isBlue ? "bg-blue-600/60" : "bg-red-600/60"}`}
                      />

                      {/* Items */}
                      <ul className="space-y-2.5 flex-1">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                          >
                            <span
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${isBlue ? "bg-blue-500" : "bg-red-500"}`}
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div
                        className={`mt-7 pt-5 border-t ${isBlue ? "border-blue-900/40" : "border-red-900/40"}`}
                      >
                        <a
                          href="#contact"
                          className={`text-sm font-semibold flex items-center gap-1 transition-colors duration-200 ${
                            isBlue
                              ? "text-blue-400 hover:text-blue-300"
                              : "text-red-400 hover:text-red-300"
                          }`}
                        >
                          Get a Quote <span aria-hidden="true">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ═══ CLIENTS ════════════════════════════════════════════ */}
        <section
          className="relative py-24 px-6 overflow-hidden"
          aria-label="Our Clients"
        >
          <div className="absolute inset-0">
            <Image
              src="/projects/factory_wiring.png"
              alt=""
              fill
              className="object-cover object-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#020b18]/93" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-badge">Who We Serve</span>
              <h2 className="section-title text-white mt-4">
                Our Valued <span className="text-blue-400">Clients</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                Proud to serve these reputed companies across Gujarat and
                beyond.
              </p>
            </div>

            {/* Marquee */}
            <div className="relative overflow-hidden mb-12">
              <div className="marquee-track flex gap-5 w-max">
                {[...clients, ...clients].map((client, i) => (
                  <div
                    key={i}
                    className="shrink-0 bg-blue-900/20 backdrop-blur-sm border border-blue-700/30 hover:border-red-500/40 rounded-2xl px-6 py-3.5 transition-all duration-300"
                  >
                    <p className="text-white font-semibold text-sm whitespace-nowrap">
                      {client}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {clients.map((client, index) => (
                <div
                  key={client}
                  className="flex items-center gap-4 bg-white/4 backdrop-blur-sm border border-white/8 hover:border-blue-500/40 rounded-2xl px-5 py-4 transition-all duration-300 group"
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${index % 2 === 0 ? "bg-blue-600/20 border border-blue-500/30 text-blue-400" : "bg-red-600/20 border border-red-500/30 text-red-400"}`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-200">
                    {client}
                  </p>
                </div>
              ))}

              {/* And many more */}
              <div className="flex items-center gap-4 rounded-2xl px-5 py-4 border border-dashed border-red-600/40 bg-red-600/5">
                <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  +
                </span>
                <p className="text-red-400 font-bold text-sm">
                  And Many More...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══════════════════════════════════════ */}
        <section className="py-24 px-6 bg-[#020b18]" aria-label="Testimonials">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-badge">Client Reviews</span>
              <h2 className="section-title text-white mt-4">
                What Our <span className="text-red-400">Clients Say</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
            </div>
            <div className="grid md:grid-cols-3 gap-7">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className={`bg-[#04111f] rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${i % 2 === 0 ? "border-blue-900/40 hover:border-blue-500/40" : "border-red-900/40 hover:border-red-500/40"}`}
                >
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <span
                        key={j}
                        className="text-red-400 text-lg"
                        aria-hidden="true"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-5 border-t border-white/8">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg ${i % 2 === 0 ? "bg-blue-600/20 border border-blue-500/30 text-blue-400" : "bg-red-600/20 border border-red-500/30 text-red-400"}`}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold">{t.name}</p>
                      <p className="text-slate-400 text-sm">{t.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══ CONTACT ════════════════════════════════════════════ */}
        <section
          id="contact"
          className="py-24 px-6 bg-[#04111f]"
          aria-label="Contact"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="section-badge">Get In Touch</span>
              <h2 className="section-title text-white mt-4">
                Contact <span className="text-blue-400">Us</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                Get in touch for industrial electrical solutions and free
                quotations.
              </p>
            </div>

            {/* Quick contact */}
            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-14">
              <a
                href="tel:+919726197976"
                className="flex items-center gap-3 bg-blue-900/20 hover:bg-blue-900/40 border border-blue-700/30 hover:border-blue-500/50 px-6 py-4 rounded-2xl transition-all duration-300 group"
              >
                <span className="text-2xl" aria-hidden="true">
                  📞
                </span>
                <div>
                  <p className="text-xs text-slate-400 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                    Call Us
                  </p>
                  <p className="text-white font-bold">+91 97261 97976</p>
                </div>
              </a>
              <a
                href="mailto:bhavdeepelectricals.engg@gmail.com"
                className="flex items-center gap-3 bg-blue-900/20 hover:bg-blue-900/40 border border-blue-700/30 hover:border-blue-500/50 px-6 py-4 rounded-2xl transition-all duration-300 group"
              >
                <span className="text-2xl" aria-hidden="true">
                  ✉️
                </span>
                <div>
                  <p className="text-xs text-slate-400 group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                    Email Us
                  </p>
                  <p className="text-white font-bold text-sm">
                    bhavdeepelectricals.engg@gmail.com
                  </p>
                </div>
              </a>
              <a
                href="https://wa.me/919726197976"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-900/20 hover:bg-green-900/30 border border-green-700/30 hover:border-green-500/50 px-6 py-4 rounded-2xl transition-all duration-300 group"
              >
                <span className="text-2xl" aria-hidden="true">
                  💬
                </span>
                <div>
                  <p className="text-xs text-slate-400 group-hover:text-green-400 transition-colors uppercase tracking-wider">
                    WhatsApp
                  </p>
                  <p className="text-white font-bold">Chat Now</p>
                </div>
              </a>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Form */}
              <div className="bg-[#020b18] p-10 rounded-3xl shadow-2xl border border-blue-900/40">
                <div className="h-1 tricolor-bar rounded-full mb-8" />
                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1 h-8 bg-blue-500 rounded-full inline-block" />
                  Send Us a Message
                </h3>
                <form
                  action="https://formsubmit.co/bhavdeepelectricals.engg@gmail.com"
                  method="POST"
                  noValidate
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input
                    type="hidden"
                    name="_subject"
                    value="New Inquiry — Bhavdeep Electricals"
                  />
                  <input type="text" name="_honey" className="hidden" />
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-group">
                      <label className="form-label">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Rajesh Patel"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="+91 98765 43210"
                        className="form-input"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="MCC Panel Inquiry"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div className="form-group mb-6">
                    <label className="form-label">Your Message *</label>
                    <textarea
                      rows={5}
                      name="message"
                      required
                      placeholder="Tell us about your requirements..."
                      className="form-input resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="glow-btn-red w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2"
                  >
                    Submit Inquiry <span aria-hidden="true">→</span>
                  </button>
                </form>
              </div>

              {/* Map + address */}
              <div className="space-y-5">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-900/40 min-h-[420px]">
                  <div className="h-1 tricolor-bar rounded-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1221125607467!2d72.77494917500671!3d20.15724998128285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72b9c14b8e2f9%3A0x1005ee1349d1a84b!2sBhavdeep%20Electricals%20%26%20Engineering!5e1!3m2!1sen!2sin!4v1779454423220!5m2!1sen!2sin"
                    width="100%"
                    height="420"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Bhavdeep Electricals Location"
                    allowFullScreen
                  />
                </div>
                <div className="bg-[#020b18] rounded-2xl p-6 border border-blue-900/40">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                    <span className="text-blue-400" aria-hidden="true">
                      📍
                    </span>
                    Our Location
                  </h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Bhavdeep Electricals &amp; Engineering
                    <br />
                    Umbergaon, Gujarat — India
                    <br />
                    <span className="text-blue-400 font-semibold">
                      Mon – Sat: 9:00 AM – 7:00 PM
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FOOTER ═════════════════════════════════════════════ */}
        <footer
          className="bg-[#010810] border-t border-blue-900/30"
          aria-label="Footer"
        >
          <div className="tricolor-bar rounded-none" />
          <div className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-12 mb-12">
              <div>
                <Image
                  src="/logo-full.png"
                  alt="Bhavdeep Electricals"
                  width={300}
                  height={120}
                  className="w-[220px] h-auto mb-5"
                />
                <p className="text-slate-400 text-sm leading-relaxed">
                  Industrial electrical experts delivering quality panels,
                  automation and engineering solutions since 1988.
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" />{" "}
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "Home", href: "#home" },
                    { label: "About Us", href: "#about" },
                    { label: "Products", href: "#products" },
                    { label: "Projects", href: "#projects" },
                    { label: "Contact", href: "#contact" },
                  ].map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-slate-400 hover:text-blue-400 transition-colors duration-200 text-sm flex items-center gap-2"
                      >
                        <span
                          className="text-red-500 text-xs"
                          aria-hidden="true"
                        >
                          →
                        </span>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-white font-bold mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-red-500 rounded-full inline-block" />{" "}
                  Contact Info
                </h4>
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start gap-3 text-slate-400">
                    <span className="text-blue-400 mt-0.5" aria-hidden="true">
                      📍
                    </span>
                    Umbergaon, Gujarat, India
                  </li>
                  <li>
                    <a
                      href="tel:+919726197976"
                      className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors"
                    >
                      <span className="text-blue-400 mt-0.5" aria-hidden="true">
                        📞
                      </span>
                      +91 97261 97976
                    </a>
                  </li>
                  <li>
                    <a
                      href="mailto:bhavdeepelectricals.engg@gmail.com"
                      className="flex items-start gap-3 text-slate-400 hover:text-blue-400 transition-colors break-all"
                    >
                      <span
                        className="text-blue-400 mt-0.5 shrink-0"
                        aria-hidden="true"
                      >
                        ✉️
                      </span>
                      bhavdeepelectricals.engg@gmail.com
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-slate-400">
                    <span className="text-blue-400 mt-0.5" aria-hidden="true">
                      🕐
                    </span>
                    Mon – Sat: 9:00 AM – 7:00 PM
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-blue-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © {new Date().getFullYear()} Bhavdeep Electricals &amp;
                Engineering. All Rights Reserved.
              </p>
              <a
                href="/admin"
                className="text-slate-700 hover:text-slate-500 text-xs transition-colors"
              >
                Admin ⚙️
              </a>
            </div>
          </div>
        </footer>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919726197976"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 text-white px-5 py-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] font-bold z-50 flex items-center gap-2 transition-all duration-300 hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          WhatsApp
        </a>
      </main>
    </>
  );
}
