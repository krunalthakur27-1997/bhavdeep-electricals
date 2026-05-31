"use client";

import { useState, useRef } from "react";
import Image from "next/image";

const ADMIN_PASSWORD = "bhavdeep2024";

type Tab = "projects" | "events";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  type: Tab;
}

const defaultProjects: GalleryImage[] = [
  {
    id: "p1",
    src: "/projects/control_panel.png",
    alt: "Control Panel Installation",
    type: "projects",
  },
  {
    id: "p2",
    src: "/projects/factory_wiring.png",
    alt: "Factory Wiring Project",
    type: "projects",
  },
  {
    id: "p3",
    src: "/projects/plant_maintenance.png",
    alt: "Plant Maintenance",
    type: "projects",
  },
];

const defaultEvents: GalleryImage[] = [
  {
    id: "e1",
    src: "/gallery/events/event-1.jpg",
    alt: "Team Event",
    type: "events",
  },
  {
    id: "e2",
    src: "/gallery/events/event-2.jpg",
    alt: "Annual Celebration",
    type: "events",
  },
  {
    id: "e3",
    src: "/gallery/events/event-3.jpg",
    alt: "Workshop",
    type: "events",
  },
  {
    id: "e4",
    src: "/gallery/events/event-4.jpg",
    alt: "Award Ceremony",
    type: "events",
  },
];

export default function AdminPage() {
  const [authed, setAuthed] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [tab, setTab] = useState<Tab>("projects");
  const [projects, setProjects] = useState<GalleryImage[]>(defaultProjects);
  const [events, setEvents] = useState<GalleryImage[]>(defaultEvents);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editAlt, setEditAlt] = useState("");
  const [previewSrc, setPreviewSrc] = useState<string | null>(null);
  const [uploadAlt, setUploadAlt] = useState("");
  const [uploadSrc, setUploadSrc] = useState("");
  const [toast, setToast] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

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

  const currentList = tab === "projects" ? projects : events;
  const setCurrentList = tab === "projects" ? setProjects : setEvents;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewSrc(url);
    setUploadSrc(url);
  };

  const handleAdd = () => {
    if (!uploadSrc || !uploadAlt.trim()) {
      showToast("Please select an image and add a caption.");
      return;
    }
    const newImage: GalleryImage = {
      id: Date.now().toString(),
      src: uploadSrc,
      alt: uploadAlt.trim(),
      type: tab,
    };
    setCurrentList((prev) => [...prev, newImage]);
    setUploadSrc("");
    setUploadAlt("");
    setPreviewSrc(null);
    if (fileRef.current) fileRef.current.value = "";
    showToast("Image added successfully!");
  };

  const handleDelete = (id: string) => {
    setCurrentList((prev) => prev.filter((img) => img.id !== id));
    showToast("Image removed.");
  };

  const handleEditStart = (img: GalleryImage) => {
    setEditingId(img.id);
    setEditAlt(img.alt);
  };

  const handleEditSave = (id: string) => {
    setCurrentList((prev) =>
      prev.map((img) => (img.id === id ? { ...img, alt: editAlt } : img)),
    );
    setEditingId(null);
    showToast("Caption updated!");
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...currentList];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setCurrentList(updated);
  };

  const handleMoveDown = (index: number) => {
    if (index === currentList.length - 1) return;
    const updated = [...currentList];
    [updated[index], updated[index + 1]] = [updated[index + 1], updated[index]];
    setCurrentList(updated);
  };

  /* ── LOGIN SCREEN ─────────────────────────────────── */
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

  /* ── ADMIN DASHBOARD ──────────────────────────────── */
  return (
    <div className="min-h-screen bg-[#050816] text-white">
      {/* Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-2xl font-semibold animate-fadeIn">
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
              Manage gallery images and project photos
            </p>
          </div>
          <div className="flex items-center gap-4">
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
        {/* Tabs */}
        <div className="flex gap-2 mb-10 bg-[#111827] p-2 rounded-2xl w-fit border border-gray-800">
          {(["projects", "events"] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 capitalize ${
                tab === t
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {t === "projects"
                ? "🏗️ Project Images"
                : "🎉 Events & Celebrations"}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Upload Panel */}
          <div className="lg:col-span-1">
            <div className="bg-[#111827] rounded-2xl p-7 border border-gray-800 sticky top-6">
              <h2 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full inline-block" />
                Add New Image
              </h2>

              {/* File drop zone */}
              <div
                className="border-2 border-dashed border-gray-700 hover:border-yellow-400/50 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 mb-5 group"
                onClick={() => fileRef.current?.click()}
              >
                {previewSrc ? (
                  <div className="relative h-40 rounded-xl overflow-hidden">
                    <Image
                      src={previewSrc}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="py-6">
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                      📸
                    </div>
                    <p className="text-gray-400 text-sm font-medium">
                      Click to select image
                    </p>
                    <p className="text-gray-600 text-xs mt-1">
                      JPG, PNG, WEBP supported
                    </p>
                  </div>
                )}
              </div>

              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {/* Alt text */}
              <div className="mb-5">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider block mb-2">
                  Image Caption *
                </label>
                <input
                  type="text"
                  value={uploadAlt}
                  onChange={(e) => setUploadAlt(e.target.value)}
                  placeholder={
                    tab === "projects"
                      ? "e.g. MCC Panel Installation"
                      : "e.g. Diwali Celebration 2024"
                  }
                  className="w-full p-3.5 rounded-xl bg-white/5 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-400 transition text-sm"
                />
              </div>

              <button
                onClick={handleAdd}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3.5 rounded-xl transition-all duration-300 text-sm"
              >
                + Add to Gallery
              </button>

              {previewSrc && (
                <button
                  onClick={() => {
                    setPreviewSrc(null);
                    setUploadSrc("");
                    if (fileRef.current) fileRef.current.value = "";
                  }}
                  className="w-full mt-3 text-gray-400 hover:text-red-400 text-sm transition-colors border border-gray-700 hover:border-red-400/30 py-2.5 rounded-xl"
                >
                  Clear Selection
                </button>
              )}
            </div>
          </div>

          {/* Image Grid */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-white flex items-center gap-2">
                <span className="w-1 h-6 bg-yellow-400 rounded-full inline-block" />
                {tab === "projects"
                  ? "Project Images"
                  : "Events & Celebrations"}
                <span className="ml-2 text-xs bg-yellow-400/10 text-yellow-400 border border-yellow-400/20 px-2.5 py-1 rounded-full font-semibold">
                  {currentList.length} images
                </span>
              </h2>
              <p className="text-gray-500 text-xs">Drag arrows to reorder</p>
            </div>

            {currentList.length === 0 ? (
              <div className="bg-[#111827] rounded-2xl border border-gray-800 border-dashed p-16 text-center">
                <div className="text-5xl mb-4">🖼️</div>
                <p className="text-gray-400 font-medium">No images yet</p>
                <p className="text-gray-600 text-sm mt-1">
                  Upload your first image using the panel on the left.
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                {currentList.map((img, index) => (
                  <div
                    key={img.id}
                    className="bg-[#111827] rounded-2xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-200 group"
                  >
                    {/* Image */}
                    <div className="relative h-44 bg-gray-900 overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Order badge */}
                      <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        #{index + 1}
                      </div>
                    </div>

                    {/* Controls */}
                    <div className="p-4">
                      {editingId === img.id ? (
                        <div className="flex gap-2 mb-3">
                          <input
                            type="text"
                            value={editAlt}
                            onChange={(e) => setEditAlt(e.target.value)}
                            className="flex-1 text-sm p-2.5 rounded-xl bg-white/5 border border-yellow-400/40 text-white focus:outline-none"
                            autoFocus
                          />
                          <button
                            onClick={() => handleEditSave(img.id)}
                            className="bg-yellow-400 text-black text-xs font-bold px-3 py-2 rounded-xl hover:bg-yellow-300 transition"
                          >
                            Save
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="text-gray-400 hover:text-white text-xs border border-gray-700 px-3 py-2 rounded-xl transition"
                          >
                            ✕
                          </button>
                        </div>
                      ) : (
                        <p
                          className="text-gray-300 text-sm font-medium mb-3 truncate"
                          title={img.alt}
                        >
                          {img.alt}
                        </p>
                      )}

                      <div className="flex items-center gap-2">
                        {/* Reorder */}
                        <button
                          onClick={() => handleMoveUp(index)}
                          disabled={index === 0}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition text-sm"
                          title="Move up"
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => handleMoveDown(index)}
                          disabled={index === currentList.length - 1}
                          className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition text-sm"
                          title="Move down"
                        >
                          ↓
                        </button>

                        {/* Edit caption */}
                        <button
                          onClick={() => handleEditStart(img)}
                          className="flex-1 py-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 hover:text-blue-300 text-xs font-semibold border border-blue-500/20 hover:border-blue-400/40 transition"
                        >
                          ✏️ Edit Caption
                        </button>

                        {/* Delete */}
                        <button
                          onClick={() => handleDelete(img.id)}
                          className="py-2 px-3 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 hover:text-red-300 text-xs font-semibold border border-red-500/20 hover:border-red-400/40 transition"
                          title="Delete"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Instructions box */}
        <div className="mt-10 bg-blue-500/5 border border-blue-500/20 rounded-2xl p-6">
          <h3 className="text-blue-400 font-bold mb-3 flex items-center gap-2">
            <span aria-hidden="true">ℹ️</span> How to permanently save images
          </h3>
          <ul className="text-gray-400 text-sm space-y-2 list-disc list-inside">
            <li>
              Place <strong className="text-white">project photos</strong> in
              the{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                /public/projects/
              </code>{" "}
              folder.
            </li>
            <li>
              Place{" "}
              <strong className="text-white">event / celebration photos</strong>{" "}
              in{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                /public/gallery/events/
              </code>{" "}
              folder.
            </li>
            <li>
              Update the image arrays in{" "}
              <code className="bg-white/10 px-2 py-0.5 rounded text-yellow-400">
                app/page.tsx
              </code>{" "}
              with the new filenames.
            </li>
            <li>
              Changes made here via upload are{" "}
              <strong className="text-white">preview only</strong> — they reset
              on page reload.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
