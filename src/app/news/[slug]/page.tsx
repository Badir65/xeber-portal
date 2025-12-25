import { notFound } from "next/navigation";
import Link from "next/link";
import prisma from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import NewsDetailGallery from "./NewsDetailGallery";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const news = await prisma.news.findUnique({
    where: { slug },
    select: { title: true, description: true },
  });

  if (!news) return { title: "Xəbər tapılmadı" };

  return {
    title: `${news.title} | Yardımlı Xeyriyyə`,
    description: news.description,
  };
}

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;

  const news = await prisma.news.findUnique({
    where: { slug, published: true },
    include: { category: true },
  });

  if (!news) {
    notFound();
  }

  // Combine single image with images array
  const allImages = news.images.length > 0 
    ? news.images 
    : news.image 
      ? [news.image] 
      : [];

  // Get related news
  const relatedNews = await prisma.news.findMany({
    where: {
      categoryId: news.categoryId,
      id: { not: news.id },
      published: true,
    },
    take: 3,
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-[#2d9fd3] transition-colors">
            Ana səhifə
          </Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <Link href="/" className="hover:text-[#2d9fd3] transition-colors">
            Xəbərlər
          </Link>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          <span className="text-gray-900 font-medium truncate max-w-[200px]">{news.title}</span>
        </nav>

        <article className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Image Gallery */}
          {allImages.length > 0 && (
            <div className="relative aspect-[16/9] sm:aspect-[2/1] overflow-hidden">
              <NewsDetailGallery images={allImages} title={news.title} />
            </div>
          )}

          {/* Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Category & Meta */}
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span 
                className="px-3 py-1 rounded-full text-sm font-semibold"
                style={{
                  backgroundColor: `${news.category.color}15`,
                  color: news.category.color,
                }}
              >
                {news.category.name}
              </span>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(news.publishedAt || news.createdAt)}
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {news.readTime}
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">
              {news.title}
            </h1>

            {/* Subtitle */}
            {news.subtitle && (
              <h2 className="text-lg sm:text-xl text-gray-600 font-medium mb-6">
                {news.subtitle}
              </h2>
            )}

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed mb-6 pb-6 border-b border-gray-200">
              {news.description}
            </p>

            {/* Content */}
            {news.content && (
              <div 
                className="prose prose-lg max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: news.content.replace(/\n/g, '<br />') }}
              />
            )}

            {/* Share Buttons */}
            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-700">Paylaş:</span>
                <div className="flex gap-2">
                  {[
                    { name: "Facebook", color: "#1877F2", icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" },
                    { name: "Twitter", color: "#1DA1F2", icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" },
                    { name: "WhatsApp", color: "#25D366", icon: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" },
                  ].map((social) => (
                    <button
                      key={social.name}
                      className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                      style={{ backgroundColor: social.color }}
                      title={social.name}
                    >
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={social.icon} />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Related News */}
        {relatedNews.length > 0 && (
          <section className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Oxşar xəbərlər</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link
                  key={item.id}
                  href={`/news/${item.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                >
                  {item.image && (
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-2">{formatDate(item.createdAt)}</p>
                    <h4 className="font-semibold text-gray-900 group-hover:text-[#2d9fd3] transition-colors line-clamp-2">
                      {item.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back Button */}
        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#2d9fd3] font-medium hover:underline"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Bütün xəbərlər
          </Link>
        </div>
      </main>
    </div>
  );
}