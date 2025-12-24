"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const colorOptions = [
  { name: "Mavi", value: "#0ea5e9" },
  { name: "Yaşıl", value: "#22c55e" },
  { name: "Qırmızı", value: "#ef4444" },
  { name: "Sarı", value: "#eab308" },
  { name: "Bənövşəyi", value: "#a855f7" },
  { name: "Narıncı", value: "#f97316" },
  { name: "Çəhrayı", value: "#ec4899" },
  { name: "Firuzəyi", value: "#14b8a6" },
];

export default function CategoryForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [color, setColor] = useState("#0ea5e9");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/admin/categories", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, color }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Xəta baş verdi");
      }

      setName("");
      setColor("#0ea5e9");
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

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Kateqoriya adı *</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          placeholder="Məs: İdman, Siyasət..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Rəng</label>
        <div className="flex flex-wrap gap-2">
          {colorOptions.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => setColor(opt.value)}
              className={`w-8 h-8 rounded-lg transition-all duration-200 ${
                color === opt.value ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900" : ""
              }`}
              style={{ backgroundColor: opt.value }}
              title={opt.name}
            />
          ))}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting || !name.trim()}
        className="w-full px-4 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Əlavə olunur..." : "Əlavə et"}
      </button>
    </form>
  );
}
