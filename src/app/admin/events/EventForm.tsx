"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const typeOptions = ["Tədbir", "Milli Bayram", "Zəfər Günü", "Beynəlxalq", "Dini Bayram"];

const iconOptions = [
  "📅", "🎉", "🇦🇿", "🏆", "⭐", "🔥", "💐", "🎄", "🤝", "🏛️", "🎖️", "🚩", "🎓", "🎵", "⚽", "🎭"
];

export default function EventForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    type: "Tədbir",
    icon: "📅",
    isHoliday: false,
    recurring: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Xəta baş verdi");
      }

      setFormData({
        title: "",
        date: "",
        type: "Tədbir",
        icon: "📅",
        isHoliday: false,
        recurring: false,
      });
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xəta baş verdi");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
          {error}
        </div>
      )}

      {/* Title */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Başlıq *</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          required
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          placeholder="Məs: Novruz bayramı"
        />
      </div>

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Tarix *</label>
        <input
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
          required
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500 transition-colors"
        />
      </div>

      {/* Type */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Tip</label>
        <select
          value={formData.type}
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500 transition-colors"
        >
          {typeOptions.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Icon */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">İkon</label>
        <div className="flex flex-wrap gap-2">
          {iconOptions.map((icon) => (
            <button
              key={icon}
              type="button"
              onClick={() => setFormData({ ...formData, icon })}
              className={`w-10 h-10 rounded-lg text-xl flex items-center justify-center transition-all duration-200 ${
                formData.icon === icon
                  ? "bg-sky-500 ring-2 ring-sky-400"
                  : "bg-slate-800 hover:bg-slate-700"
              }`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      {/* Checkboxes */}
      <div className="flex flex-wrap gap-6 pt-2">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.isHoliday}
              onChange={(e) => setFormData({ ...formData, isHoliday: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-5 h-5 bg-slate-800 border border-slate-600 rounded-md peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-colors"></div>
            <svg
              className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-slate-300 group-hover:text-white transition-colors text-sm">
            Rəsmi bayram
          </span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.recurring}
              onChange={(e) => setFormData({ ...formData, recurring: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-5 h-5 bg-slate-800 border border-slate-600 rounded-md peer-checked:bg-sky-500 peer-checked:border-sky-500 transition-colors"></div>
            <svg
              className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-slate-300 group-hover:text-white transition-colors text-sm">
            Hər il təkrarlanır
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !formData.title.trim() || !formData.date}
        className="w-full px-4 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed mt-2"
      >
        {isSubmitting ? "Əlavə olunur..." : "Əlavə et"}
      </button>
    </form>
  );
}
