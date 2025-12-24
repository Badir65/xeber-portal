import { notFound } from "next/navigation";
import prisma from "@/lib/prisma";
import NewsForm from "../NewsForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditNewsPage({ params }: PageProps) {
  const { id } = await params;

  const [news, categories] = await Promise.all([
    prisma.news.findUnique({ where: { id } }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
  ]);

  if (!news) {
    notFound();
  }

  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Xəbəri redaktə et</h1>
          <p className="text-slate-400 text-sm mt-1">Xəbər məlumatlarını yeniləyin</p>
        </div>

        <NewsForm news={news} categories={categories} />
      </div>
    </div>
  );
}
