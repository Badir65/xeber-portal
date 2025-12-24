import prisma from "@/lib/prisma";
import NewsForm from "../NewsForm";

export default async function NewNewsPage() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });

  return (
    <div className="p-8">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white">Yeni xəbər</h1>
          <p className="text-slate-400 text-sm mt-1">Yeni xəbər əlavə edin</p>
        </div>

        <NewsForm categories={categories} />
      </div>
    </div>
  );
}
