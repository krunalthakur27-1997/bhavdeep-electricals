"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useLayoutEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";
import { createPortal } from "react-dom";
import Navbar from "./Navbar";

// ─── DATA ────────────────────────────────────────────────────────────────────

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
  {
    value: "35+",
    label: "Years Experience",
    color: "text-blue-400",
    end: 35,
    suffix: "+",
  },
  {
    value: "500+",
    label: "Projects Completed",
    color: "text-red-400",
    end: 500,
    suffix: "+",
  },
  {
    value: "200+",
    label: "Happy Clients",
    color: "text-blue-400",
    end: 200,
    suffix: "+",
  },
  {
    value: "12+",
    label: "Product Categories",
    color: "text-red-400",
    end: 12,
    suffix: "+",
  },
];

const highlightStats = [
  { label: "Established", value: "1988", icon: "🏭", color: "blue" },
  { label: "Experience", value: "35+ Years", icon: "⚡", color: "red" },
  { label: "Projects", value: "500+", icon: "🔧", color: "blue" },
  {
    label: "Coverage",
    value: "Gujarat & Union Territory",
    icon: "📍",
    color: "red",
  },
  { label: "License", value: "Govt. Approved", icon: "✅", color: "blue" },
  {
    label: "Services",
    value: "HT, LT, Solar & More",
    icon: "🌞",
    color: "red",
  },
  {
    label: "Govt. Licensed",
    value: "Electrical Contractor",
    icon: "🏛️",
    color: "blue",
  },
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
    icon: "⚡",
    items: [
      "11KV DO DP Structure Installation",
      "VCB Panel Supply & Installation",
      "Transformer Supply & Installation",
      "HT Cable Laying & Termination",
      "Earthing System Installation",
      "Testing & Commissioning",
      "Preventive Maintenance",
    ],
  },
  {
    title: "LT Power Installation",
    accent: "red",
    icon: "🔌",
    items: [
      "LT Panel Design & Manufacturing",
      "LT Panel Installation",
      "Power Distribution Consultancy",
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
    icon: "🔧",
    items: [
      "11KV DO DP Structure Servicing",
      "VCB / ACB / LT Panel / APFC Panel Servicing",
      "Transformer Oil Filtration",
      "DG Servicing",
      "VFD / Drive / Electronic Card Repair",
      "AC Motor Rewinding",
      "DC Motor Rewinding",
    ],
  },
  {
    title: "Solar Solutions",
    accent: "red",
    icon: "🌞",
    items: [
      "Solar PV System Design",
      "Rooftop Solar Installation",
      "Ground Mounted Solar Systems",
      "Solar Panel Mounting Structures",
      "Solar Inverter Installation",
      "DC & AC Cable Laying",
      "Net Metering Assistance",
      "Testing & Commissioning",
      "Operation & Maintenance (O&M)",
    ],
  },
];

const certifications = [
  {
    title:
      "Government Licensed Electrical Contractor (Gujarat & Union Territory)",
    icon: "🏛️",
  },
  { title: "HT & LT Power Installation Specialist", icon: "⚡" },
  { title: "LT Panel Manufacturing Facility", icon: "🏭" },
  { title: "Industrial Electrical Safety Compliance", icon: "🛡️" },
  { title: "Testing & Commissioning Expertise", icon: "✅" },
  { title: "Preventive Maintenance Services", icon: "🔧" },
  { title: "Established Since 1988", icon: "🏆" },
];

const trustItems = [
  { icon: "✓", text: "Govt. Licensed Electrical Contractor" },
  { icon: "✓", text: "Established Since 1988" },
  { icon: "✓", text: "500+ Projects Completed" },
  { icon: "✓", text: "HT & LT Power Installation Experts" },
  { icon: "✓", text: "Panel Manufacturing Specialists" },
];

// ─── ANIMATION VARIANTS ───────────────────────────────────────────────────────

// Valid Framer Motion cubic-bezier easings (replace invalid string easings).
const EASE_SMOOTH = [0.25, 0.46, 0.45, 0.94] as const; // smooth ease-out
const EASE_BACK = [0.34, 1.56, 0.64, 1] as const; // "backOut" overshoot equivalent
const EASE_INOUT = [0.42, 0, 0.58, 1] as const; // "easeInOut" equivalent
const EASE_OUT = [0, 0, 0.58, 1] as const; // "easeOut" equivalent

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.1,
      ease: EASE_SMOOTH,
    },
  }),
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.08,
      ease: EASE_BACK,
    },
  }),
};

const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

// ─── ANIMATED COUNTER ─────────────────────────────────────────────────────────

function AnimatedCounter({
  end,
  suffix,
  duration = 2000,
}: {
  end: number;
  suffix: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

// ─── SECTION WRAPPER ──────────────────────────────────────────────────────────

function RevealSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
}

// ─── FLOATING PARTICLES (Hydration-safe) ─────────────────────────────────────

const PARTICLES = Array.from({ length: 20 }, (_, i) => {
  const seed = (i * 137.508 + 33.33) % 100;
  const seed2 = (i * 97.3 + 11.11) % 100;
  const seed3 = (i * 61.8 + 55.55) % 100;
  const seed4 = (i * 43.2 + 77.77) % 100;
  const seed5 = (i * 29.7 + 22.22) % 100;
  const colorIndex = i % 3;
  const color =
    colorIndex === 0
      ? "bg-blue-500/10"
      : colorIndex === 1
        ? "bg-red-500/10"
        : "bg-white/5";
  return {
    id: i,
    color,
    width: 2 + (seed % 6),
    height: 2 + (seed2 % 6),
    left: `${seed3}%`,
    top: `${seed4}%`,
    duration: 3 + (seed5 % 4),
    delay: (i * 0.3) % 3,
  };
});

function FloatingParticles() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {PARTICLES.map((p) => (
        <motion.div
          key={p.id}
          className={`absolute rounded-full ${p.color}`}
          style={{
            width: p.width,
            height: p.height,
            left: p.left,
            top: p.top,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: EASE_INOUT,
          }}
        />
      ))}
    </div>
  );
}

// ─── PRODUCT PREVIEW POPUP (desktop) ─────────────────────────────────────────

type Product = (typeof products)[0];

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (hover: hover)");
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isDesktop;
}

function ProductPreviewPopup({
  product,
  anchorRect,
}: {
  product: Product;
  anchorRect: DOMRect;
}) {
  const [pos, setPos] = useState<{
    left: number;
    top: number;
    placement: "right" | "left" | "above" | "below";
  } | null>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const W = 360;
    const H = 460;
    const gap = 16;
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let left = anchorRect.right + gap;
    let top = anchorRect.top + anchorRect.height / 2 - H / 2;
    let placement: "right" | "left" | "above" | "below" = "right";

    if (left + W > vw - 12) {
      // Place left
      left = anchorRect.left - gap - W;
      placement = "left";
      if (left < 12) {
        // Fallback: above or below
        left = Math.min(
          Math.max(12, anchorRect.left + anchorRect.width / 2 - W / 2),
          vw - W - 12,
        );
        if (anchorRect.top > vh / 2) {
          top = anchorRect.top - gap - H;
          placement = "above";
        } else {
          top = anchorRect.bottom + gap;
          placement = "below";
        }
      }
    }

    // Clamp vertical
    top = Math.max(12, Math.min(top, vh - H - 12));

    setPos({ left, top, placement });
  }, [anchorRect]);

  if (!pos) return null;

  return createPortal(
    <motion.div
      ref={popupRef}
      initial={{ opacity: 0, scale: 0.92, y: 8 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.94, y: 4 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "fixed",
        left: pos.left,
        top: pos.top,
        width: 360,
        zIndex: 80,
        pointerEvents: "none",
        transformOrigin:
          pos.placement === "right"
            ? "left center"
            : pos.placement === "left"
              ? "right center"
              : pos.placement === "above"
                ? "center bottom"
                : "center top",
      }}
      aria-hidden="true"
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-blue-400/30"
        style={{
          background:
            "linear-gradient(160deg, rgba(8,20,40,0.92) 0%, rgba(4,11,25,0.92) 100%)",
          backdropFilter: "blur(20px) saturate(140%)",
          WebkitBackdropFilter: "blur(20px) saturate(140%)",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.55), 0 0 50px rgba(59,130,246,0.35), inset 0 1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Top tricolor accent */}
        <div
          className="h-[3px] w-full"
          style={{
            background:
              "linear-gradient(to right, #1d4ed8, #ffffff66, #dc2626)",
          }}
        />

        {/* Image */}
        <div className="relative h-56 bg-gradient-to-b from-blue-950/40 to-[#020b18]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="360px"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020b18]/90 via-transparent to-transparent" />
          <span
            className={`absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full ${categoryColors[product.category]} shadow-lg`}
          >
            {product.category}
          </span>
          {/* Glow */}
          <div className="pointer-events-none absolute -inset-10 bg-blue-500/10 blur-3xl" />
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue-300 mb-1.5">
            {product.category}
          </p>
          <h4 className="text-white text-xl font-bold leading-tight">
            {product.name}
          </h4>
          <p className="text-slate-300/90 text-sm leading-relaxed mt-2.5">
            {product.description}
          </p>

          <div className="mt-5 flex items-center justify-between gap-3 pt-4 border-t border-white/[0.08]">
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-400">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              In Production
            </span>
            <span
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white px-4 py-2 rounded-xl"
              style={{
                background: "linear-gradient(to right, #1d4ed8, #2563eb)",
                boxShadow: "0 8px 20px rgba(29,78,216,0.45)",
              }}
            >
              Enquire Now <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>

        {/* Subtle inner glow ring */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
      </div>
    </motion.div>,
    document.body,
  );
}

// ─── PRODUCT CARD ─────────────────────────────────────────────────────────────

function ProductCard({
  product,
  index,
  onHoverChange,
}: {
  product: Product;
  index: number;
  onHoverChange?: (hovered: boolean, rect: DOMRect | null) => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const reportHover = (hovered: boolean) => {
    if (!onHoverChange) return;
    const rect = cardRef.current?.getBoundingClientRect() ?? null;
    onHoverChange(hovered, rect);
  };

  return (
    <motion.div
      ref={cardRef}
      variants={scaleIn}
      custom={index}
      onMouseEnter={() => reportHover(true)}
      onMouseLeave={() => reportHover(false)}
      onFocus={() => reportHover(true)}
      onBlur={() => reportHover(false)}
      whileHover={{ y: -10, scale: 1.04 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group relative bg-[#020b18] rounded-2xl overflow-hidden border border-blue-900/40 hover:border-blue-400/60 transition-[border-color,box-shadow] duration-300 shadow-lg hover:shadow-[0_18px_45px_rgba(29,78,216,0.45)] flex flex-col h-full"
      tabIndex={0}
    >
      {/* Premium glow overlay on hover */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, rgba(59,130,246,0.18) 0%, rgba(59,130,246,0) 60%)",
        }}
      />
      {/* Inner ring */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/[0.04] group-hover:ring-blue-400/20 transition-colors duration-300" />

      <div className="relative h-48 overflow-hidden bg-blue-950/30">
        <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-110">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020b18] via-transparent to-transparent" />
        <div className="absolute top-3 right-3">
          <span
            className={`text-xs font-bold px-2.5 py-1 rounded-full shadow-md ${categoryColors[product.category]}`}
          >
            {product.category}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-bold text-base mb-2 group-hover:text-blue-300 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed flex-1">
          {product.description}
        </p>
        <div className="mt-4 pt-4 border-t border-white/[0.07]">
          <a
            href="#contact"
            className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center gap-1 transition-colors duration-200"
          >
            Enquire Now{" "}
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const isDesktop = useIsDesktop();

  // Track which product is hovered + anchor rect for the floating preview
  const [hoveredProduct, setHoveredProduct] = useState<{
    product: Product;
    rect: DOMRect;
  } | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dismiss preview on scroll/resize to avoid stale positioning
  useEffect(() => {
    if (!hoveredProduct) return;
    const dismiss = () => setHoveredProduct(null);
    window.addEventListener("scroll", dismiss, { passive: true });
    window.addEventListener("resize", dismiss);
    return () => {
      window.removeEventListener("scroll", dismiss);
      window.removeEventListener("resize", dismiss);
    };
  }, [hoveredProduct]);

  return (
    <>
      <Navbar scrolled={scrolled} />

      <main className="bg-[#020b18] text-white overflow-x-hidden">
        {/* ═══ HERO ═══════════════════════════════════════════════════════════ */}
        <section
          id="home"
          className="relative min-h-screen flex items-center justify-center text-center px-6 scroll-mt-32"
          aria-label="Hero"
        >
          {/* Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: 8, ease: EASE_OUT }}
            >
              <Image
                src="/projects/factory_wiring.png"
                alt=""
                fill
                sizes="100vw"
                className="object-cover object-center"
                priority
                aria-hidden="true"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-blue-950/85 via-[#020b18]/75 to-[#020b18]" />
          </div>

          <div
            className="absolute inset-0 grid-overlay opacity-20"
            aria-hidden="true"
          />
          <FloatingParticles />

          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: EASE_INOUT }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 7, repeat: Infinity, ease: EASE_INOUT }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-5xl flex flex-col items-center pt-36 pb-20">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/5 border border-white/20 text-white text-sm font-semibold px-5 py-2 rounded-full mb-8 backdrop-blur-sm"
            >
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              <span className="text-blue-300">Trusted</span>
              <span className="text-white/40">·</span>
              <span className="text-white">Since 1988</span>
              <span className="text-white/40">·</span>
              <span className="text-red-400">Umbergaon, Gujarat</span>
            </motion.div>

            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: EASE_OUT }}
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: EASE_INOUT,
                }}
              >
                <Image
                  src="/logo-full.png"
                  alt="Bhavdeep Electricals & Engineering"
                  width={900}
                  height={320}
                  className="w-[380px] md:w-[650px] h-auto drop-shadow-[0_0_50px_rgba(29,78,216,0.4)]"
                  priority
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="tricolor-bar w-48 mx-auto mb-6"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            />

            <motion.h1
              className="text-2xl md:text-4xl font-bold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              HT &amp; LT Electrical Infrastructure{" "}
              <span className="text-blue-400">Experts</span>{" "}
              <span className="text-red-400">Since 1988</span>
            </motion.h1>

            <motion.p
              className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Delivering complete HT/LT power solutions, electrical panels,
              industrial automation, maintenance services and solar energy
              systems across Gujarat and Union Territory industrial sectors
              since 1988.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 1.2 }}
            >
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 30px rgba(220,38,38,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-red-600 hover:bg-red-500 text-white font-bold px-10 py-4 rounded-2xl text-lg shadow-lg transition-colors duration-200"
              >
                Get Free Quote →
              </motion.a>
              <motion.a
                href="#products"
                whileHover={{
                  scale: 1.06,
                  boxShadow: "0 0 30px rgba(29,78,216,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                className="bg-blue-700 hover:bg-blue-600 border border-blue-500/50 px-10 py-4 rounded-2xl text-white font-bold text-lg transition-colors duration-200"
              >
                View Products
              </motion.a>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 mb-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.4 }}
            >
              {[
                {
                  icon: "✓",
                  text: "Govt. Licensed Electrical Contractor",
                  color: "blue",
                },
                {
                  icon: "✓",
                  text: "Gujarat & Union Territory Approved",
                  color: "red",
                },
                { icon: "✓", text: "Established Since 1988", color: "blue" },
              ].map((badge) => (
                <motion.div
                  key={badge.text}
                  whileHover={{ scale: 1.05, y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold backdrop-blur-md border transition-all duration-300 ${
                    badge.color === "blue"
                      ? "bg-blue-600/15 border-blue-400/40 text-blue-200 hover:bg-blue-600/25 hover:border-blue-400/60 shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.3)]"
                      : "bg-red-600/15 border-red-400/40 text-red-200 hover:bg-red-600/25 hover:border-red-400/60 shadow-[0_0_15px_rgba(220,38,38,0.15)] hover:shadow-[0_0_25px_rgba(220,38,38,0.3)]"
                  }`}
                >
                  <span
                    className={`text-base font-bold ${badge.color === "blue" ? "text-blue-400" : "text-red-400"}`}
                  >
                    {badge.icon}
                  </span>
                  {badge.text}
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2 text-slate-400 text-xs tracking-widest uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.8 }}
            >
              <span>Scroll to explore</span>
              <motion.div
                className="w-5 h-8 border-2 border-slate-500 rounded-full flex items-start justify-center p-1"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div
                  className="w-1 h-2 bg-blue-400 rounded-full"
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: EASE_INOUT,
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══ STATS ══════════════════════════════════════════════════════════ */}
        <RevealSection className="relative z-10 py-0 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              variants={fadeUp}
              custom={0}
              className="p-[2px] rounded-3xl"
              style={{
                background:
                  "linear-gradient(to right, #1d4ed8, #ffffff22, #dc2626)",
              }}
            >
              <div className="bg-[#04111f] rounded-3xl px-8 py-10">
                <motion.div
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  {stats.map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      variants={scaleIn}
                      custom={i}
                      className="flex flex-col items-center gap-2"
                    >
                      <p
                        className={`text-4xl md:text-5xl font-extrabold ${stat.color}`}
                      >
                        <AnimatedCounter end={stat.end} suffix={stat.suffix} />
                      </p>
                      <p className="text-slate-300 font-medium text-sm md:text-base">
                        {stat.label}
                      </p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </RevealSection>

        {/* ═══ TRUST BANNER ═════════════════════════════════════════════════════ */}
        <section className="py-12 px-6 bg-[#020b18]" aria-label="Trust Banner">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="relative rounded-2xl overflow-hidden border border-blue-800/30 p-[1px]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7 }}
              style={{
                background:
                  "linear-gradient(to right, rgba(29,78,216,0.4), rgba(220,38,38,0.2), rgba(29,78,216,0.4))",
              }}
            >
              <div className="bg-[#04111f]/95 rounded-2xl px-6 py-5">
                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                  {trustItems.map((item, i) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-center gap-2 text-sm font-semibold"
                    >
                      <span className="text-blue-400 font-bold text-base">
                        {item.icon}
                      </span>
                      <span className="text-slate-300">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ═══ ABOUT ══════════════════════════════════════════════════════════ */}
        <section
          id="about"
          className="py-28 px-6 bg-[#04111f] scroll-mt-32"
          aria-label="About"
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                <span className="section-badge">About Us</span>
                <h2 className="section-title text-white mt-4 text-left">
                  Bhavdeep Electricals &amp;{" "}
                  <span className="text-blue-400">Engineering</span>
                </h2>
                <div className="tricolor-bar w-24 mt-4 mb-8" />
                <div className="space-y-5 text-slate-400 leading-relaxed">
                  <p>
                    Bhavdeep Electricals &amp; Engineering is a trusted
                    industrial electrical engineering company established in{" "}
                    <span className="text-blue-400 font-semibold">1988</span>{" "}
                    under the visionary leadership of{" "}
                    <span className="text-white font-semibold">
                      Mr. C.K. Bhandari
                    </span>
                    . With more than three decades of experience, the company
                    has successfully delivered HT &amp; LT power installations,
                    electrical panel manufacturing, industrial maintenance, and
                    turnkey electrical solutions across various industries.
                  </p>
                  <p>
                    Continuing this legacy,{" "}
                    <span className="text-white font-semibold">
                      Mr. Bhavdeep C. Bhandari (B.E. Electrical Engineer)
                    </span>{" "}
                    leads the technical operations of the organization with a
                    strong focus on innovation, quality, safety, and customer
                    satisfaction.
                  </p>
                  <p>
                    Today, Bhavdeep Electricals &amp; Engineering is recognized
                    as a reliable electrical contractor providing complete
                    solutions from{" "}
                    <span className="text-red-400 font-semibold">
                      design and manufacturing
                    </span>{" "}
                    to{" "}
                    <span className="text-blue-400 font-semibold">
                      installation, commissioning, and maintenance
                    </span>
                    .
                  </p>
                </div>

                <motion.div
                  className="mt-8 flex flex-wrap gap-3"
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {[
                    "Est. 1988",
                    "Govt. Licensed",
                    "500+ Projects",
                    "Gujarat & Union Territory",
                  ].map((tag, i) => (
                    <motion.span
                      key={tag}
                      variants={scaleIn}
                      custom={i}
                      className="text-xs text-blue-300 bg-blue-900/40 border border-blue-700/40 px-4 py-2 rounded-full font-semibold"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden border border-blue-800/40 shadow-2xl">
                  <div className="h-1 tricolor-bar rounded-none" />
                  <div className="relative h-72 md:h-96 bg-blue-950/30">
                    <Image
                      src="/projects/factory_wiring.png"
                      alt="Bhavdeep Electricals Factory"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04111f] via-transparent to-transparent" />
                    <div
                      className="absolute top-4 left-4 px-4 py-3 rounded-xl border border-blue-400/40"
                      style={{
                        background: "rgba(4, 17, 31, 0.80)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        boxShadow: "0 0 20px rgba(29,78,216,0.35)",
                      }}
                    >
                      <p className="text-2xl font-extrabold text-blue-400 leading-none">
                        1988
                      </p>
                      <p className="text-xs text-blue-200 mt-0.5 font-semibold">
                        Year Established
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#04111f] p-6">
                    <p className="text-slate-300 text-sm leading-relaxed italic">
                      &ldquo;Delivering excellence in industrial electrical
                      engineering for over 35 years across Gujarat and Union
                      Territory.&rdquo;
                    </p>
                    <p className="text-blue-400 font-bold mt-3 text-sm">
                      — Mr. C.K. Bhandari, Founder
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ COMPANY HIGHLIGHTS ═════════════════════════════════════════════ */}
        <section
          className="py-20 px-6 bg-[#020b18]"
          aria-label="Company Highlights"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-14"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
            >
              <span className="section-badge">Company Highlights</span>
              <h2 className="section-title text-white mt-4">
                Why <span className="text-blue-400">We Stand Out</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
            </motion.div>

            <motion.div
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {highlightStats.map((item, i) => (
                <motion.div
                  key={item.label}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ y: -8, scale: 1.04 }}
                  className={`flex flex-col items-center text-center p-5 rounded-2xl border transition-all duration-300 cursor-default ${
                    item.color === "blue"
                      ? "bg-blue-950/30 border-blue-800/40 hover:border-blue-500/60 hover:shadow-lg hover:shadow-blue-900/30"
                      : "bg-red-950/20 border-red-800/40 hover:border-red-500/60 hover:shadow-lg hover:shadow-red-900/20"
                  }`}
                >
                  <motion.span
                    className="text-3xl mb-3 block"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3 + i * 0.3,
                      repeat: Infinity,
                      ease: EASE_INOUT,
                    }}
                    aria-hidden="true"
                  >
                    {item.icon}
                  </motion.span>
                  <p
                    className={`text-sm font-bold mb-1 ${item.color === "blue" ? "text-blue-300" : "text-red-300"}`}
                  >
                    {item.value}
                  </p>
                  <p className="text-slate-400 text-xs">{item.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ PRODUCTS ═══════════════════════════════════════════════════════ */}
        <section
          id="products"
          className="py-28 px-6 bg-[#04111f] scroll-mt-32"
          aria-label="Products"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="section-badge">What We Make</span>
              <h2 className="section-title text-white mt-4">
                Our Product <span className="text-red-400">Range</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                High-quality industrial electrical products and panel solutions
                built for reliability.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {products.map((product, i) => (
                <div
                  key={product.name}
                  className="relative z-0 hover:z-30 focus-within:z-30 transition-[z-index] duration-0"
                >
                  <ProductCard
                    product={product}
                    index={i}
                    onHoverChange={(hovered, rect) => {
                      if (!isDesktop) return;
                      if (hovered && rect) {
                        setHoveredProduct({ product, rect });
                      } else {
                        setHoveredProduct((cur) =>
                          cur && cur.product.name === product.name ? null : cur,
                        );
                      }
                    }}
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating preview popup (desktop only) */}
          <AnimatePresence>
            {isDesktop && hoveredProduct && (
              <ProductPreviewPopup
                key={hoveredProduct.product.name}
                product={hoveredProduct.product}
                anchorRect={hoveredProduct.rect}
              />
            )}
          </AnimatePresence>
        </section>

        {/* ═══ PROJECTS & SERVICES ════════════════════════════════════════════ */}
        <section
          id="projects"
          className="relative py-28 px-6 overflow-hidden bg-[#020b18] scroll-mt-32"
          aria-label="Projects and Services"
        >
          <div className="absolute inset-0">
            <Image
              src="/projects/plant_maintenance.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#020b18]/93" />
          </div>
          <FloatingParticles />

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="section-badge">What We Do</span>
              <h2 className="section-title text-white mt-4">
                Projects &amp; <span className="text-blue-400">Services</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                Comprehensive HT, LT, Maintenance and Solar Engineering
                Solutions.
              </p>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {projectsData.map((card, i) => {
                const isBlue = card.accent === "blue";
                return (
                  <motion.div
                    key={card.title}
                    variants={fadeUp}
                    custom={i}
                    whileHover={{
                      y: -10,
                      scale: 1.03,
                      boxShadow: isBlue
                        ? "0 25px 60px rgba(29,78,216,0.3)"
                        : "0 25px 60px rgba(220,38,38,0.2)",
                    }}
                    className={`group relative flex flex-col bg-[#04111f] rounded-2xl overflow-hidden border transition-all duration-300 ${
                      isBlue
                        ? "border-blue-800/40 hover:border-blue-500/60"
                        : "border-red-800/40 hover:border-red-500/60"
                    }`}
                  >
                    <div
                      className={`h-1 w-full ${
                        isBlue
                          ? "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700"
                          : "bg-gradient-to-r from-red-600 via-red-400 to-red-700"
                      }`}
                    />
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl ${
                        isBlue
                          ? "bg-gradient-to-br from-blue-600/5 to-transparent"
                          : "bg-gradient-to-br from-red-600/5 to-transparent"
                      }`}
                    />

                    <div className="relative z-10 p-7 flex flex-col flex-1">
                      <motion.div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 shrink-0 text-2xl ${
                          isBlue
                            ? "bg-blue-600/20 border border-blue-500/30"
                            : "bg-red-600/20 border border-red-500/30"
                        }`}
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                          duration: 3 + i * 0.4,
                          repeat: Infinity,
                          ease: EASE_INOUT,
                        }}
                        aria-hidden="true"
                      >
                        {card.icon}
                      </motion.div>

                      <h3
                        className={`text-xl font-bold mb-5 leading-snug transition-colors duration-200 ${
                          isBlue
                            ? "text-white group-hover:text-blue-300"
                            : "text-white group-hover:text-red-300"
                        }`}
                      >
                        {card.title}
                      </h3>

                      <div
                        className={`w-12 h-0.5 mb-5 rounded-full ${
                          isBlue ? "bg-blue-600/60" : "bg-red-600/60"
                        }`}
                      />

                      <ul className="space-y-2.5 flex-1">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed"
                          >
                            <span
                              className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                                isBlue ? "bg-blue-500" : "bg-red-500"
                              }`}
                              aria-hidden="true"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div
                        className={`mt-7 pt-5 border-t ${
                          isBlue ? "border-blue-900/40" : "border-red-900/40"
                        }`}
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
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* ═══ LEADERSHIP ═════════════════════════════════════════════════════ */}
        <section
          id="leadership"
          className="py-28 px-6 bg-[#020b18] scroll-mt-32"
          aria-label="Leadership"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-20"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
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
            </motion.div>

            <div className="grid md:grid-cols-2 gap-10 items-stretch">
              {/* Card 1 — Founder */}
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8 }}
                className="group bg-[#04111f] rounded-3xl overflow-hidden border border-blue-900/40 hover:border-blue-500/50 transition-all duration-300 shadow-xl hover:shadow-blue-900/30 flex flex-col h-full"
              >
                <div className="h-1 tricolor-bar rounded-none" />
                <div className="relative h-[420px] overflow-hidden bg-blue-950/30">
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                    <Image
                      src="/team/ck-bhandari.jpg"
                      alt="Mr. C.K. Bhandari"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: "center 20%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04111f] via-[#04111f]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="inline-block bg-blue-600/30 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm"
                    >
                      Founder &amp; Chairman
                    </motion.span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors duration-300">
                    Mr. C.K. Bhandari
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    35+ Years Experience
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm flex-1">
                    Mr. C.K. Bhandari founded Bhavdeep Electricals &amp;
                    Engineering in 1988 with a vision to deliver dependable and
                    high-quality electrical solutions. His decades of experience
                    and leadership have built the foundation of the
                    company&apos;s reputation for excellence and reliability.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {[
                      "Founder",
                      "35+ Yrs Exp",
                      "Panel Manufacturing",
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
              </motion.div>

              {/* Card 2 — Technical Director */}
              <motion.div
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                whileHover={{ y: -8 }}
                className="group bg-[#04111f] rounded-3xl overflow-hidden border border-red-900/40 hover:border-red-500/50 transition-all duration-300 shadow-xl hover:shadow-red-900/20 flex flex-col h-full"
              >
                <div className="h-1 bg-gradient-to-r from-red-600 via-white/20 to-blue-600 rounded-none" />
                <div className="relative h-[420px] overflow-hidden bg-red-950/20">
                  <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:scale-105">
                    <Image
                      src="/team/bhavdeep-bhandari.jpg"
                      alt="Mr. Bhavdeep C. Bhandari"
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                      style={{ objectPosition: "center 12%" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04111f] via-[#04111f]/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="inline-block bg-red-600/30 border border-red-400/30 text-red-200 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full backdrop-blur-sm"
                    >
                      Technical Director
                    </motion.span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-red-300 transition-colors duration-300">
                    Mr. Bhavdeep C. Bhandari
                  </h3>
                  <p className="text-slate-400 text-sm mb-4">
                    B.E. Electrical Engineer
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm flex-1">
                    Mr. Bhavdeep C. Bhandari leads the technical and project
                    execution divisions of the company. With a strong
                    engineering background and extensive industry expertise, he
                    ensures that every project is delivered with the highest
                    standards of safety, quality, and performance.
                  </p>
                  <div className="mt-6 pt-6 border-t border-white/10 flex flex-wrap gap-2">
                    {[
                      "B.E. Electrical",
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ CERTIFICATIONS ═════════════════════════════════════════════════ */}
        <section
          className="py-24 px-6 bg-[#04111f]"
          aria-label="Certifications"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="section-badge">Trust &amp; Compliance</span>
              <h2 className="section-title text-white mt-4">
                Certifications &amp;{" "}
                <span className="text-red-400">Compliance</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                Recognized, licensed and compliant with all industrial
                electrical standards.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.title}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                    boxShadow:
                      i % 2 === 0
                        ? "0 20px 50px rgba(29,78,216,0.25)"
                        : "0 20px 50px rgba(220,38,38,0.2)",
                  }}
                  className={`flex flex-col items-center text-center p-7 rounded-2xl border transition-all duration-300 cursor-default ${
                    i % 2 === 0
                      ? "bg-blue-950/20 border-blue-800/40 hover:border-blue-500/60"
                      : "bg-red-950/10 border-red-800/40 hover:border-red-500/60"
                  }`}
                >
                  <motion.span
                    className="text-4xl mb-4 block"
                    animate={{ y: [0, -5, 0], rotate: [0, 5, 0, -5, 0] }}
                    transition={{
                      duration: 4 + i * 0.3,
                      repeat: Infinity,
                      ease: EASE_INOUT,
                      delay: i * 0.2,
                    }}
                    aria-hidden="true"
                  >
                    {cert.icon}
                  </motion.span>
                  <p
                    className={`text-sm font-bold leading-snug ${
                      i % 2 === 0 ? "text-blue-300" : "text-red-300"
                    }`}
                  >
                    {cert.title}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ CLIENTS ════════════════════════════════════════════════════════ */}
        <section
          className="relative py-24 px-6 overflow-hidden"
          aria-label="Our Clients"
        >
          <div className="absolute inset-0">
            <Image
              src="/projects/factory_wiring.png"
              alt=""
              fill
              sizes="100vw"
              className="object-cover object-center"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-[#020b18]/93" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="section-badge">Who We Serve</span>
              <h2 className="section-title text-white mt-4">
                Our Valued <span className="text-blue-400">Clients</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                Proud to serve these reputed companies across Gujarat and
                beyond.
              </p>
            </motion.div>

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

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {clients.map((client, index) => (
                <motion.div
                  key={client}
                  variants={fadeUp}
                  custom={index % 6}
                  whileHover={{ x: 4, borderColor: "rgba(59,130,246,0.4)" }}
                  className="flex items-center gap-4 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl px-5 py-4 transition-all duration-300 group"
                >
                  <span
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${
                      index % 2 === 0
                        ? "bg-blue-600/20 border border-blue-500/30 text-blue-400"
                        : "bg-red-600/20 border border-red-500/30 text-red-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-slate-300 font-medium text-sm group-hover:text-white transition-colors duration-200">
                    {client}
                  </p>
                </motion.div>
              ))}

              <motion.div
                variants={scaleIn}
                className="flex items-center gap-4 rounded-2xl px-5 py-4 border border-dashed border-red-600/40 bg-red-600/5"
              >
                <span className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center text-white font-bold text-xs shrink-0">
                  +
                </span>
                <p className="text-red-400 font-bold text-sm">
                  And Many More...
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ═══ TESTIMONIALS ═══════════════════════════════════════════════════ */}
        <section className="py-24 px-6 bg-[#020b18]" aria-label="Testimonials">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="section-badge">Client Reviews</span>
              <h2 className="section-title text-white mt-4">
                What Our <span className="text-red-400">Clients Say</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
            </motion.div>

            <motion.div
              className="grid md:grid-cols-3 gap-7"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
            >
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  variants={fadeUp}
                  custom={i}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`bg-[#04111f] rounded-2xl p-8 border transition-all duration-300 ${
                    i % 2 === 0
                      ? "border-blue-900/40 hover:border-blue-500/40"
                      : "border-red-900/40 hover:border-red-500/40"
                  }`}
                >
                  <div className="flex gap-1 mb-5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <motion.span
                        key={j}
                        className="text-red-400 text-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + j * 0.08 }}
                        aria-hidden="true"
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-4 pt-5 border-t border-white/[0.08]">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-bold text-lg ${
                        i % 2 === 0
                          ? "bg-blue-600/20 border border-blue-500/30 text-blue-400"
                          : "bg-red-600/20 border border-red-500/30 text-red-400"
                      }`}
                    >
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold">{t.name}</p>
                      <p className="text-slate-400 text-sm">{t.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ═══ CONTACT ════════════════════════════════════════════════════════ */}
        <section
          id="contact"
          className="py-24 px-6 bg-[#04111f] scroll-mt-32"
          aria-label="Contact"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <span className="section-badge">Get In Touch</span>
              <h2 className="section-title text-white mt-4">
                Contact <span className="text-blue-400">Us</span>
              </h2>
              <div className="tricolor-bar w-32 mx-auto mt-4 mb-6" />
              <p className="section-subtitle">
                Get in touch for industrial electrical solutions and free
                quotations.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-5 mb-14"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  href: "tel:+919726197976",
                  icon: "📞",
                  label: "Call Us",
                  value: "+91 97261 97976",
                  style:
                    "bg-blue-900/20 hover:bg-blue-900/40 border-blue-700/30 hover:border-blue-500/50",
                  hover: "group-hover:text-blue-400",
                },
                {
                  href: "mailto:bhavdeepelectricals.engg@gmail.com",
                  icon: "✉️",
                  label: "Email Us",
                  value: "bhavdeepelectricals.engg@gmail.com",
                  style:
                    "bg-blue-900/20 hover:bg-blue-900/40 border-blue-700/30 hover:border-blue-500/50",
                  hover: "group-hover:text-blue-400",
                },
                {
                  href: "https://wa.me/919726197976",
                  icon: "💬",
                  label: "WhatsApp",
                  value: "Chat Now",
                  style:
                    "bg-green-900/20 hover:bg-green-900/30 border-green-700/30 hover:border-green-500/50",
                  hover: "group-hover:text-green-400",
                  external: true,
                },
              ].map((item, i) => (
                <motion.a
                  key={item.label}
                  variants={scaleIn}
                  custom={i}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-3 border px-6 py-4 rounded-2xl transition-all duration-300 group ${item.style}`}
                >
                  <span className="text-2xl" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <p
                      className={`text-xs text-slate-400 ${item.hover} transition-colors uppercase tracking-wider`}
                    >
                      {item.label}
                    </p>
                    <p className="text-white font-bold text-sm">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              <motion.div
                variants={slideLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="bg-[#020b18] p-10 rounded-3xl shadow-2xl border border-blue-900/40"
              >
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

                  <motion.button
                    type="submit"
                    whileHover={{
                      scale: 1.03,
                      boxShadow: "0 0 30px rgba(220,38,38,0.4)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full bg-red-600 hover:bg-red-500 text-white font-bold py-4 rounded-2xl text-lg flex items-center justify-center gap-2 transition-colors duration-200"
                  >
                    Submit Inquiry <span aria-hidden="true">→</span>
                  </motion.button>
                </form>
              </motion.div>

              <motion.div
                variants={slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="space-y-5"
              >
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-blue-900/40 min-h-[380px]">
                  <div className="h-1 tricolor-bar rounded-none" />
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1221125607467!2d72.77494917500671!3d20.15724998128285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be72b9c14b8e2f9%3A0x1005ee1349d1a84b!2sBhavdeep%20Electricals%20%26%20Engineering!5e1!3m2!1sen!2sin!4v1779454423220!5m2!1sen!2sin"
                    width="100%"
                    height="380"
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
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative bg-[#020b18] rounded-2xl p-6 border border-blue-700/40 overflow-hidden"
                  style={{ boxShadow: "0 0 30px rgba(29,78,216,0.12)" }}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2 relative z-10">
                    <span className="text-blue-400" aria-hidden="true">
                      🕐
                    </span>
                    Working Hours
                  </h4>
                  <div className="relative z-10 flex items-center justify-between">
                    <div>
                      <p className="text-blue-300 font-bold text-base">
                        Tuesday – Sunday
                      </p>
                      <p className="text-white font-extrabold text-xl mt-1">
                        9:00 AM – 7:30 PM
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-2xl">
                      🕐
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-800/30 relative z-10">
                    <p className="text-slate-400 text-xs">
                      Monday: Closed &nbsp;·&nbsp; Emergency support available
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ═══ FOOTER ═════════════════════════════════════════════════════════ */}
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
                <p className="text-slate-500 text-xs mt-3">
                  Umbergaon, Gujarat, India
                </p>
                <div className="mt-4 inline-flex items-center gap-2 bg-blue-600/10 border border-blue-500/20 px-3 py-2 rounded-xl">
                  <span className="text-sm" aria-hidden="true">
                    🏛️
                  </span>
                  <span className="text-blue-300 text-xs font-semibold">
                    Govt. Licensed · Gujarat &amp; Union Territory
                  </span>
                </div>
              </div>

              <div>
                <h4 className="text-white font-bold mb-5 flex items-center gap-2">
                  <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" />
                  Quick Links
                </h4>
                <ul className="space-y-3">
                  {[
                    { label: "Home", href: "#home" },
                    { label: "About Us", href: "#about" },
                    { label: "Products", href: "#products" },
                    { label: "Projects", href: "#projects" },
                    { label: "Leadership", href: "#leadership" },
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
                  <span className="w-1 h-5 bg-red-500 rounded-full inline-block" />
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
                    <div>
                      <p className="text-blue-300 font-semibold">
                        Tuesday – Sunday
                      </p>
                      <p>9:00 AM – 7:30 PM</p>
                      <p className="text-slate-500 text-xs mt-0.5">
                        Monday: Closed
                      </p>
                    </div>
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

        {/* ═══ WHATSAPP FLOAT ══════════════════════════════════════════════════ */}
        <motion.a
          href="https://wa.me/919726197976"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          initial={{ opacity: 0, scale: 0, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5, ease: EASE_BACK }}
          whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(34,197,94,0.5)" }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-500 text-white px-5 py-4 rounded-full shadow-[0_0_30px_rgba(34,197,94,0.4)] font-bold z-50 flex items-center gap-2 transition-colors duration-200"
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
        </motion.a>
      </main>
    </>
  );
}
