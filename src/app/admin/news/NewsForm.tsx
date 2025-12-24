"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { News, Category } from "@prisma/client";

interface NewsFormProps {
  news?: News;
  categories: Category[];
}

export default function NewsForm({ news, categories }: NewsFormProps) {
  const router = useRouter();
  const isEditing = !!news;

  const [formData, setFormData] = useState({
    title: news?.title || "",
    subtitle: news?.subtitle || "",
    description: news?.description || "",
    content: news?.content || "",
    image: news?.image || "",
    images: news?.images || [],
    categoryId: news?.categoryId || "",
    published: news?.published || false,
    featured: news?.featured || false,
    readTime: news?.readTime || "3 dəq",
  });

  const [newImageUrl, setNewImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleAddImage = () => {
    if (newImageUrl.trim()) {
      setFormData({
        ...formData,
        images: [...formData.images, newImageUrl.trim()],
      });
      setNewImageUrl("");
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData({
      ...formData,
      images: formData.images.filter((_, i) => i !== index),
    });
  };

  const handleMoveImage = (index: number, direction: "up" | "down") => {
    const newImages = [...formData.images];
    const newIndex = direction === "up" ? index - 1 : index + 1;
    if (newIndex >= 0 && newIndex < newImages.length) {
      [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
      setFormData({ ...formData, images: newImages });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const url = isEditing ? `/api/admin/news/${news.id}` : "/api/admin/news";
      const method = isEditing ? "PUT" : "POST";

      const submitData = {
        ...formData,
        image: formData.image || (formData.images.length > 0 ? formData.images[0] : ""),
      };

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submitData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Xəta baş verdi");
      }

      router.push("/admin/news");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Xəta baş verdi");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
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
          placeholder="Xəbərin başlığı"
        />
      </div>

      {/* Subtitle */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Alt başlıq</label>
        <input
          type="text"
          value={formData.subtitle}
          onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
          placeholder="Xəbərin alt başlığı (istəyə bağlı)"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Qısa açıqlama *</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          required
          rows={3}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
          placeholder="Xəbərin qısa açıqlaması (kartda görünəcək)"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Mətn</label>
        <textarea
          value={formData.content}
          onChange={(e) => setFormData({ ...formData, content: e.target.value })}
          rows={8}
          className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors resize-none"
          placeholder="Xəbərin tam mətni"
        />
      </div>

      {/* Images Section */}
      <div className="space-y-4">
        <label className="block text-sm font-medium text-slate-300">Şəkillər</label>
        
        {/* Current Images */}
        {formData.images.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs text-slate-500">Mövcud şəkillər ({formData.images.length})</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {formData.images.map((img, index) => (
                <div key={index} className="relative group">
                  <img
                    src={img}
                    alt={`Şəkil ${index + 1}`}
                    className="w-full h-24 object-cover rounded-lg border border-slate-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/200x150?text=Xəta";
                    }}
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center gap-1">
                    {index > 0 && (
                      <button
                        type="button"
                        onClick={() => handleMoveImage(index, "up")}
                        className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                        title="Sola"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                    )}
                    {index < formData.images.length - 1 && (
                      <button
                        type="button"
                        onClick={() => handleMoveImage(index, "down")}
                        className="p-1.5 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors"
                        title="Sağa"
                      >
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="p-1.5 bg-red-500/80 hover:bg-red-500 rounded-lg transition-colors"
                      title="Sil"
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  {index === 0 && (
                    <span className="absolute top-1 left-1 px-1.5 py-0.5 bg-sky-500 text-white text-[10px] font-bold rounded">
                      Əsas
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add New Image */}
        <div className="flex gap-2">
          <input
            type="url"
            value={newImageUrl}
            onChange={(e) => setNewImageUrl(e.target.value)}
            className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            placeholder="Şəkil URL-i daxil edin"
          />
          <button
            type="button"
            onClick={handleAddImage}
            disabled={!newImageUrl.trim()}
            className="px-4 py-3 bg-slate-700 hover:bg-slate-600 text-white font-medium rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-slate-500">
          İlk şəkil əsas şəkil kimi istifadə olunacaq.
        </p>
      </div>

      {/* Category & Read Time */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Kateqoriya *</label>
          <select
            value={formData.categoryId}
            onChange={(e) => setFormData({ ...formData, categoryId: e.target.value })}
            required
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-sky-500 transition-colors"
          >
            <option value="">Seçin...</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {categories.length === 0 && (
            <p className="text-amber-400 text-xs mt-2">
              Əvvəlcə kateqoriya əlavə edin →{" "}
              <Link href="/admin/categories" className="underline">
                Kateqoriyalar
              </Link>
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Oxuma müddəti</label>
          <input
            type="text"
            value={formData.readTime}
            onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
            className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors"
            placeholder="3 dəq"
          />
        </div>
      </div>

      {/* Checkboxes */}
      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.published}
              onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
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
          <span className="text-slate-300 group-hover:text-white transition-colors">Yayımla</span>
        </label>

        <label className="flex items-center gap-3 cursor-pointer group">
          <div className="relative">
            <input
              type="checkbox"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-5 h-5 bg-slate-800 border border-slate-600 rounded-md peer-checked:bg-amber-500 peer-checked:border-amber-500 transition-colors"></div>
            <svg
              className="absolute top-0.5 left-0.5 w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-slate-300 group-hover:text-white transition-colors">
            Önə çıxart (Ana səhifədə böyük)
          </span>
        </label>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4 pt-4">
        <button
          type="submit"
          disabled={isSubmitting || categories.length === 0}
          className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-sky-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Saxlanır..." : isEditing ? "Yenilə" : "Əlavə et"}
        </button>
        <Link
          href="/admin/news"
          className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-xl transition-colors"
        >
          Ləğv et
        </Link>
      </div>
    </form>
  );
}