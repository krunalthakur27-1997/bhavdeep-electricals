"use client";

import { useState } from "react";
import Image from "next/image";

const ADMIN_PASSWORD = "bhavdeep2024";

/* ── TYPES ─────────────────────────────────────────────────────── */
type Tab = "projects" | "products";

interface ProjectCard {
  id: string;
  title: string;
  accent: "blue" | "red";
  items: string[];
}

interface ProductCard {
  id: string;
  name: string;
  category: string;
  description: string;
}

/* ── DEFAULT DATA (mirrors page.tsx) ───────────────────────────── */
const defaultProjects: ProjectCard[] = [
  {
    id: "pc1",
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
    id: "pc2",
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
    id: "pc3",
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
    id: "pc4",
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

const defaultProducts: ProductCard[] = [
  {
    id: "pr1",
    name: "PCC Panel",
    category: "Power",
    description:
      "Power Control Center panels for industrial power distribution.",
  },
  {
    id: "pr2",
    name: "MCC Panel",
    category: "Control",
    description: "Motor Control Center panels for industrial motor control.",
  },
  {
    id: "pr3",
    name: "APFC Panel",
    category: "Power",
    description: "Automatic Power Factor Correction panels.",
  },
  {
    id: "pr4",
    name: "ATS / AMF Panel",
    category: "Control",
    description: "Automatic transfer and generator synchronization panels.",
  },
  {
    id: "pr5",
    name: "Automation Panel",
    category: "Automation",
    description: "PLC, VFD and SCADA based automation systems.",
  },
  {
    id: "pr6",
    name: "Busbar Duct",
    category: "Power",
    description: "Efficient electrical power distribution busbar systems.",
  },
  {
    id: "pr7",
    name: "Control Panel",
    category: "Control",
    description: "Custom industrial process control panels.",
  },
  {
    id: "pr8",
    name: "Distribution Panel",
    category: "Power",
    description: "Reliable LT electrical distribution solutions.",
  },
  {
    id: "pr9",
    name: "ELR Panel",
    category: "Protection",
    description: "Earth Leakage Relay protection panels.",
  },
  {
    id: "pr10",
    name: "Fire Alarm Panel",
    category: "Protection",
    description: "Industrial fire alarm and monitoring systems.",
  },
  {
    id: "pr11",
    name: "Temperature Control Panel",
    category: "Control",
    description: "Industrial temperature monitoring and control panels.",
  },
  {
    id: "pr12",
    name: "Solar Panel",
    category: "Automation",
    description:
      "Efficient solar power generation systems for industrial and commercial use.",
  },
];

const categoryColors: Record<string, string> = {
  Power: "bg-blue-600/20 text-blue-400 border-blue-500/30",
  Control: "bg-red-600/20 text-red-400 border-red-500/30",
  Automation: "bg-blue-800/20 text-blue-300 border-blue-700/30",
  Protection: "bg-red-800/20 text-red-300 border-red-700/30",
};

/* ════════════════════════════════════════════════════════════════ */
export default function AdminPage() {
  /* auth */
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  /* ui */
  const [tab, setTab] = useState<Tab>("projects");
  const [toast, setToast] = useState<string | null>(null);

  /* data */
  const [projects, setProjects] = useState<ProjectCard[]>(defaultProjects);
  const [products, setProducts] = useState<ProductCard[]>(defaultProducts);

  /* project editing */
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);
  const [editProjectTitle, setEditProjectTitle] = useState("");
  const [editProjectItems, setEditProjectItems] = useState<string[]>([]);

  /* product editing */
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editProductName, setEditProductName] = useState("");
  const [editProductDesc, setEditProductDesc] = useState("");
  const [editProductCat, setEditProductCat] = useState("");

  /* ── helpers ── */
  const showToast = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 3000);
  };

  const handleLogin = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthed(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  /* ── project helpers ── */
  const startEditProject = (p: ProjectCard) => {
    setEditingProjectId(p.id);
    setEditProjectTitle(p.title);
    setEditProjectItems([...p.items]);
  };

  const saveProject = (id: string) => {
    setProjects((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              title: editProjectTitle.trim() || p.title,
              items: editProjectItems.filter((i) => i.trim() !== ""),
            }
          : p,
      ),
    );
    setEditingProjectId(null);
    showToast("Project card updated!");
  };

  const updateItem = (index: number, value: string) => {
    const updated = [...editProjectItems];
    updated[index] = value;
    setEditProjectItems(updated);
  };

  const addItem = () => setEditProjectItems((prev) => [...prev, ""]);

  const removeItem = (index: number) =>
    setEditProjectItems((prev) => prev.filter((_, i) => i !== index));

  /* ── product helpers ── */
  const startEditProduct = (p: ProductCard) => {
    setEditingProductId(p.id);
    setEditProductName(p.name);
    setEditProductDesc(p.description);
    setEditProductCat(p.category);
  };

  const saveProduct = (id: string) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.id === id
          ? {
              ...p,
              name: editProductName.trim() || p.name,
              description: editProductDesc.trim() || p.description,
              category: editProductCat.trim() || p.category,
            }
          : p,
      ),
    );
    setEditingProductId(null);
    showToast("Product updated!");
  };

  /* ══════════════════════════════════════════════════════════════ */
  /* LOGIN SCREEN                                                   */
  /* ══════════════════════════════════════════════════════════════ */
  if (!authed) {
    return (
      <div className="min-h-screen bg-[#050816] flex items-center justify-center px-6">
        <div className="bg-[#111827] rounded-3xl p-10 w-full max-w-md border border-gray-800 shadow-2xl">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-yellow-400/10 border border-yellow-400/30 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
              🔐
            </div>
            <h1 className="text-2xl font-bold text-white">Admin Panel</h1>
            <p className="text-gray-400 text-sm mt-2">
              Bhavdeep Electricals &amp; Engineering
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Enter admin password"
                className="w-full p-4 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm bg-red-400/10 border border-red-400/20 rounded-xl px-4 py-3">
                {error}
              </p>
            )}

            <button
              onClick={handleLogin}
              className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 rounded-xl transition-all duration-300"
            >
              Login →
            </button>
          </div>
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════════════════════════ */
  /* ADMIN DASHBOARD                                                */
  /* ══════════════════════════════════════════════════════════════ */
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl font-semibold">
          ✓ {toast}
        </div>
      )}

      {/* Header */}
      <header className="bg-[#020817] border-b border-gray-800 px-6 py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-xl font-bold text-white">
              <span className="text-yellow-400">Bhavdeep</span> Admin Panel
            </h1>
            <p className="text-gray-400 text-sm">
              Preview &amp; manage site content · Umbergaon, Gujarat
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="text-gray-400 hover:text-yellow-400 text-sm transition-colors border border-gray-700 hover:border-yellow-400/30 px-4 py-2 rounded-xl"
            >
              ← View Site
            </a>
            <button
              onClick={() => setAuthed(false)}
              className="text-sm text-gray-400 hover:text-red-400 transition-colors border border-gray-700 hover:border-red-400/30 px-4 py-2 rounded-xl"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Site overview cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              label: "Products",
              value: products.length,
              color: "text-blue-400",
              icon: "⚡",
            },
            {
              label: "Project Cards",
              value: projects.length,
              color: "text-red-400",
              icon: "🏗️",
            },
            {
              label: "Clients Listed",
              value: 18,
              color: "text-blue-400",
              icon: "🏢",
            },
            {
              label: "Years Experience",
              value: "35+",
              color: "text-red-400",
              icon: "📅",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-[#111827] rounded-2xl p-5 border border-gray-800 text-center"
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <p className={`text-3xl font-extrabold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="text-gray-400 text-xs mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 bg-[#111827] p-2 rounded-2xl w-fit border border-gray-800">
          {(["projects", "products"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                tab === t
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t === "projects" ? "🏗️ Projects & Capabilities" : "⚡ Products"}
            </button>
          ))}
        </div>

        {/* ── PROJECTS TAB ─────────────────────────────────────── */}
        {tab === "projects" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full inline-block" />
                Projects &amp; Capabilities Cards
                <span className="ml-2 text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-2.5 py-1 rounded-full font-semibold">
                  {projects.length} cards
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((card) => {
                const isEditing = editingProjectId === card.id;
                const isBlue = card.accent === "blue";

                return (
                  <div
                    key={card.id}
                    className={`bg-[#111827] rounded-2xl overflow-hidden border transition-all duration-200 ${
                      isEditing
                        ? "border-yellow-400/50"
                        : "border-gray-800 hover:border-gray-600"
                    }`}
                  >
                    {/* Top bar */}
                    <div
                      className={`h-1 w-full ${
                        isBlue
                          ? "bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700"
                          : "bg-gradient-to-r from-red-600 via-red-400 to-red-700"
                      }`}
                    />

                    <div className="p-6">
                      {isEditing ? (
                        /* ── Edit mode ── */
                        <div className="space-y-4">
                          <div>
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
                              Card Title
                            </label>
                            <input
                              type="text"
                              value={editProjectTitle}
                              onChange={(e) =>
                                setEditProjectTitle(e.target.value)
                              }
                              className="w-full p-3 rounded-xl bg-white/5 border border-yellow-400/40 text-white focus:outline-none text-sm"
                            />
                          </div>

                          <div>
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
                              Items
                            </label>
                            <div className="space-y-2">
                              {editProjectItems.map((item, idx) => (
                                <div key={idx} className="flex gap-2">
                                  <input
                                    type="text"
                                    value={item}
                                    onChange={(e) =>
                                      updateItem(idx, e.target.value)
                                    }
                                    className="flex-1 p-2.5 rounded-xl bg-white/5 border border-gray-700 text-white text-sm focus:outline-none focus:border-yellow-400/40 transition"
                                  />
                                  <button
                                    onClick={() => removeItem(idx)}
                                    className="px-3 py-2 rounded-xl bg-red-500/10 text-red-400 hover:bg-red-500/20 text-xs border border-red-500/20 transition"
                                  >
                                    ✕
                                  </button>
                                </div>
                              ))}
                            </div>
                            <button
                              onClick={addItem}
                              className="mt-2 w-full py-2 rounded-xl border border-dashed border-gray-600 hover:border-yellow-400/40 text-gray-400 hover:text-yellow-400 text-xs font-semibold transition"
                            >
                              + Add Item
                            </button>
                          </div>

                          <div className="flex gap-2 pt-2">
                            <button
                              onClick={() => saveProject(card.id)}
                              className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2.5 rounded-xl text-sm transition"
                            >
                              Save Changes
                            </button>
                            <button
                              onClick={() => setEditingProjectId(null)}
                              className="px-4 py-2.5 rounded-xl border border-gray-700 text-gray-400 hover:text-white text-sm transition"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        /* ── View mode ── */
                        <div>
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <span
                                className={`inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border mb-2 ${
                                  isBlue
                                    ? "bg-blue-600/20 text-blue-400 border-blue-500/30"
                                    : "bg-red-600/20 text-red-400 border-red-500/30"
                                }`}
                              >
                                {isBlue ? "Blue" : "Red"} accent
                              </span>
                              <h3 className="text-white font-bold text-lg">
                                {card.title}
                              </h3>
                            </div>
                            <button
                              onClick={() => startEditProject(card)}
                              className="px-3 py-1.5 rounded-xl bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 text-xs font-semibold border border-yellow-400/20 transition shrink-0"
                            >
                              ✏️ Edit
                            </button>
                          </div>

                          <ul className="space-y-1.5">
                            {card.items.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start gap-2 text-gray-400 text-sm"
                              >
                                <span
                                  className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 ${
                                    isBlue ? "bg-blue-500" : "bg-red-500"
                                  }`}
                                />
                                {item}
                              </li>
                            ))}
                          </ul>

                          <p className="mt-4 text-gray-600 text-xs">
                            {card.items.length} items
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* ── PRODUCTS TAB ─────────────────────────────────────── */}
        {tab === "products" && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full inline-block" />
                Product Range
                <span className="ml-2 text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-2.5 py-1 rounded-full font-semibold">
                  {products.length} products
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {products.map((product) => {
                const isEditing = editingProductId === product.id;
                const colorClass =
                  categoryColors[product.category] ??
                  "bg-blue-600/20 text-blue-400 border-blue-500/30";

                return (
                  <div
                    key={product.id}
                    className={`bg-[#111827] rounded-2xl overflow-hidden border transition-all duration-200 ${
                      isEditing
                        ? "border-yellow-400/50"
                        : "border-gray-800 hover:border-gray-600"
                    }`}
                  >
                    {/* Product image preview */}
                    <div className="relative h-36 bg-white overflow-hidden">
                      <Image
                        src={`/product/${product.name
                          .toLowerCase()
                          .replace(/\s+\/\s+/g, "-")
                          .replace(/\s+/g, "-")
                          .replace(/[^a-z0-9-]/g, "")}.png`}
                        alt={product.name}
                        fill
                        className="object-contain p-3"
                      />
                    </div>

                    <div className="p-5">
                      {isEditing ? (
                        <div className="space-y-3">
                          <div>
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
                              Product Name
                            </label>
                            <input
                              type="text"
                              value={editProductName}
                              onChange={(e) =>
                                setEditProductName(e.target.value)
                              }
                              className="w-full p-2.5 rounded-xl bg-white/5 border border-yellow-400/40 text-white text-sm focus:outline-none"
                            />
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
                              Category
                            </label>
                            <select
                              value={editProductCat}
                              onChange={(e) =>
                                setEditProductCat(e.target.value)
                              }
                              className="w-full p-2.5 rounded-xl bg-[#050816] border border-yellow-400/40 text-white text-sm focus:outline-none"
                            >
                              {[
                                "Power",
                                "Control",
                                "Automation",
                                "Protection",
                              ].map((c) => (
                                <option key={c} value={c}>
                                  {c}
                                </option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-1.5">
                              Description
                            </label>
                            <textarea
                              rows={3}
                              value={editProductDesc}
                              onChange={(e) =>
                                setEditProductDesc(e.target.value)
                              }
                              className="w-full p-2.5 rounded-xl bg-white/5 border border-yellow-400/40 text-white text-sm focus:outline-none resize-none"
                            />
                          </div>
                          <div className="flex gap-2 pt-1">
                            <button
                              onClick={() => saveProduct(product.id)}
                              className="flex-1 bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-2 rounded-xl text-sm transition"
                            >
                              Save
                            </button>
                            <button
                              onClick={() => setEditingProductId(null)}
                              className="px-4 py-2 rounded-xl border border-gray-700 text-gray-400 hover:text-white text-sm transition"
                            >
                              Cancel
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="flex items-start justify-between gap-2 mb-2">
                            <h3 className="text-white font-bold text-sm leading-snug">
                              {product.name}
                            </h3>
                            <button
                              onClick={() => startEditProduct(product)}
                              className="px-2.5 py-1 rounded-lg bg-yellow-400/10 hover:bg-yellow-400/20 text-yellow-400 text-xs font-semibold border border-yellow-400/20 transition shrink-0"
                            >
                              ✏️
                            </button>
                          </div>
                          <span
                            className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full border mb-2 ${colorClass}`}
                          >
                            {product.category}
                          </span>
                          <p className="text-gray-400 text-xs leading-relaxed">
                            {product.description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Info box */}
        <div className="mt-10 bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
            <span aria-hidden="true">ℹ️</span> How to permanently save changes
          </h3>
          <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
            <li>
              Edits made here are{" "}
              <strong className="text-white">preview only</strong> — they reset
              on page reload.
            </li>
            <li>
              To permanently update{" "}
              <strong className="text-white">
                Projects &amp; Capabilities
              </strong>
              , edit the{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                projectsData
              </code>{" "}
              array in{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                app/page.tsx
              </code>
              .
            </li>
            <li>
              To permanently update{" "}
              <strong className="text-white">Products</strong>, edit the{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                products
              </code>{" "}
              array in{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                app/page.tsx
              </code>
              .
            </li>
            <li>
              Product images must be placed in{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                /public/product/
              </code>{" "}
              and follow the naming convention{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                panel-name.png
              </code>
              .
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
