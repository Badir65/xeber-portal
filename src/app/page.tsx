import Link from "next/link";
import prisma from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import HomeGallery from "@/components/HomeGallery";

const upcomingEvents = [
  { id: 1, title: "Dünya Azərbaycanlılarının Həmrəyliyi Günü", date: "31 Dekabr 2024", type: "Milli Bayram" },
  { id: 2, title: "Yeni il bayramı", date: "1 Yanvar 2025", type: "Rəsmi Bayram" },
  { id: 3, title: "Novruz bayramı", date: "20-24 Mart 2025", type: "Milli Bayram" },
  { id: 4, title: "Qarabağ Zəfər Günü", date: "8 Noyabr 2025", type: "Zəfər Günü" },
];

const holidays = [
  { name: "Yeni il", date: "1 Yanvar", icon: "🎄" },
  { name: "Qadınlar günü", date: "8 Mart", icon: "💐" },
  { name: "Novruz bayramı", date: "20-24 Mart", icon: "🔥" },
  { name: "Qələbə günü", date: "9 May", icon: "⭐" },
  { name: "Respublika günü", date: "28 May", icon: "🇦🇿" },
  { name: "Silahlı Qüvvələr günü", date: "26 İyun", icon: "🎖️" },
  { name: "Müstəqillik günü", date: "18 Oktyabr", icon: "🏛️" },
  { name: "Zəfər günü", date: "8 Noyabr", icon: "🏆" },
  { name: "Bayraq günü", date: "9 Noyabr", icon: "🚩" },
  { name: "Həmrəylik günü", date: "31 Dekabr", icon: "🤝" },
];

export default async function Home() {
  const featuredNews = await prisma.news.findFirst({
    where: { published: true, featured: true },
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  const news = await prisma.news.findMany({
    where: { 
      published: true,
      id: featuredNews ? { not: featuredNews.id } : undefined,
    },
    include: { category: true },
    orderBy: { createdAt: "desc" },
    take: 6,
  });

  const featuredImages = featuredNews 
    ? (featuredNews.images.length > 0 ? featuredNews.images : featuredNews.image ? [featuredNews.image] : [])
    : [];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/" className="flex items-center gap-3">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 sm:w-14 sm:h-14 object-contain" />
              <div>
                <h1 className="text-lg sm:text-xl font-bold text-[#2d9fd3] tracking-tight">
                  YARDIMLI XEYRİYYƏ CƏMİYYƏTİ
                </h1>
                {/* <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">İctimai Birliyi</p> */}
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-1">
              {["Ana Səhifə", "Xəbərlər", "Təqvim", "Haqqımızda"].map((item, i) => (
                <Link
                  key={item}
                  href="#"
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    i === 0 ? "bg-[#2d9fd3]/10 text-[#2d9fd3]" : "text-gray-600 hover:text-[#2d9fd3] hover:bg-gray-100"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </nav>

            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#2d9fd3]/5 via-white to-[#00a651]/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-red-600 tracking-wider uppercase">Son Xəbərlər</span>
              <div className="h-px flex-1 bg-gradient-to-r from-red-300 to-transparent" />
            </div>

            {featuredNews ? (
              <article className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-500">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
                    {featuredImages.length > 0 ? (
                      <HomeGallery images={featuredImages} title={featuredNews.title} />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-white/20 pointer-events-none" />
                    <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
                      <span 
                        className="px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm font-bold rounded-full shadow-lg"
                        style={{ backgroundColor: featuredNews.category.color }}
                      >
                        {featuredNews.category.name}
                      </span>
                    </div>
                  </div>

                  <div className="relative p-6 sm:p-8 lg:p-10 xl:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {formatDate(featuredNews.publishedAt || featuredNews.createdAt)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {featuredNews.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900 group-hover:text-[#2d9fd3] transition-colors duration-300">
                      {featuredNews.title}
                    </h2>

                    {featuredNews.subtitle && (
                      <h3 className="text-base sm:text-lg text-gray-600 font-medium mb-4">
                        {featuredNews.subtitle}
                      </h3>
                    )}

                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                      {featuredNews.description}
                    </p>

                    <Link
                      href={`/news/${featuredNews.slug}`}
                      className="inline-flex items-center gap-2 text-[#2d9fd3] font-semibold group/link"
                    >
                      <span>Ətraflı oxu</span>
                      <svg className="w-5 h-5 transition-transform duration-300 group-hover/link:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ) : (
              <div className="text-center py-16 bg-white rounded-2xl border border-gray-200">
                <p className="text-gray-500">Hələ xəbər yoxdur</p>
                <Link href="/admin/news" className="text-[#2d9fd3] font-medium mt-2 inline-block">
                  Admin paneldən xəbər əlavə edin →
                </Link>
              </div>
            )}
          </div>
        </section>

        {/* News Grid & Sidebar */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Son Xəbərlər</h2>
                <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent" />
              </div>

              {news.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-6">
                  {news.map((item) => {
                    const itemImages = item.images.length > 0 ? item.images : item.image ? [item.image] : [];
                    return (
                      <Link
                        key={item.id}
                        href={`/news/${item.slug}`}
                        className="group relative rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative aspect-[16/10] overflow-hidden">
                          {itemImages.length > 0 ? (
                            <img
                              src={itemImages[0]}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                          <span 
                            className="absolute top-3 left-3 px-2.5 py-1 bg-white/95 backdrop-blur-sm text-xs font-semibold rounded-md shadow"
                            style={{ color: item.category.color }}
                          >
                            {item.category.name}
                          </span>
                          {itemImages.length > 1 && (
                            <span className="absolute top-3 right-3 px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-md">
                              📷 {itemImages.length}
                            </span>
                          )}
                        </div>
                        <div className="p-5">
                          <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                            <span>{formatDate(item.publishedAt || item.createdAt)}</span>
                            <span className="w-1 h-1 rounded-full bg-gray-400" />
                            <span>{item.readTime}</span>
                          </div>
                          <h3 className="font-bold text-base leading-snug mb-2 text-gray-900 group-hover:text-[#2d9fd3] transition-colors line-clamp-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{item.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 bg-white rounded-2xl border border-gray-200">
                  <p className="text-gray-500">Hələ xəbər yoxdur</p>
                </div>
              )}

              {news.length >= 6 && (
                <div className="flex justify-center mt-10">
                  <button className="px-8 py-3 bg-[#2d9fd3] hover:bg-[#2589b8] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2">
                    <span>Daha çox</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              <div className="rounded-2xl bg-white border border-gray-200 shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Yaxınlaşan Tədbirlər</h3>
                </div>
                <div className="space-y-3">
                  {upcomingEvents.map((event) => (
                    <div key={event.id} className="group p-4 rounded-xl bg-gray-50 hover:bg-[#2d9fd3]/5 border border-gray-100 hover:border-[#2d9fd3]/30 transition-all duration-300 cursor-pointer">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h4 className="font-semibold text-sm text-gray-900 group-hover:text-[#2d9fd3] transition-colors">{event.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{event.date}</p>
                        </div>
                        <span className="shrink-0 px-2 py-1 bg-amber-100 text-amber-700 text-[10px] font-semibold rounded-md">{event.type}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white border border-gray-200 shadow-md p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00a651] to-[#008c44] flex items-center justify-center shadow">
                    <span className="text-lg">🇦🇿</span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-900">Rəsmi Bayramlar</h3>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {holidays.map((holiday, index) => (
                    <div key={index} className="p-3 rounded-xl bg-gray-50 border border-gray-100 hover:border-[#00a651]/30 hover:bg-[#00a651]/5 transition-all duration-300 cursor-pointer group">
                      <span className="text-xl mb-2 block">{holiday.icon}</span>
                      <h4 className="font-medium text-xs text-gray-900 group-hover:text-[#00a651] transition-colors">{holiday.name}</h4>
                      <p className="text-[10px] text-gray-500 mt-0.5">{holiday.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* <div className="rounded-2xl bg-gradient-to-br from-[#2d9fd3] to-[#1e7ba8] p-6 shadow-lg">
                <h3 className="font-bold text-lg mb-2 text-white">Abunə olun</h3>
                <p className="text-sm text-white/80 mb-4">Ən son xəbərləri birbaşa e-poçtunuza alın</p>
                <div className="space-y-3">
                  <input type="email" placeholder="E-poçt ünvanınız" className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-sm text-white placeholder:text-white/60 focus:outline-none focus:border-white/50 focus:bg-white/20 transition-colors" />
                  <button className="w-full px-4 py-3 bg-white text-[#2d9fd3] font-semibold rounded-xl transition-all duration-300 hover:bg-gray-100 shadow-lg">Abunə ol</button>
                </div>
              </div> */}
            </aside>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
                <div>
                  {/* <span className="text-lg font-bold text-[#2d9fd3]">YARDIMLI</span>
                  <p className="text-xs text-gray-500">Xeyriyyə Cəmiyyəti</p> */}
                </div>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">Yardımlı Xeyriyyə Cəmiyyəti İctimai Birliyi. 2009-cu ildən fəaliyyət göstərir.</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Bölmələr</h4>
              <ul className="space-y-2">
                {["Siyasət", "İqtisadiyyat", "Cəmiyyət", "İdman", "Mədəniyyət"].map((item) => (
                  <li key={item}><Link href="#" className="text-gray-500 hover:text-[#2d9fd3] text-sm transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Əlaqə</h4>
              <ul className="space-y-2">
                {["Haqqımızda", "Əlaqə", "Könüllülük", "Layihələr"].map((item) => (
                  <li key={item}><Link href="#" className="text-gray-500 hover:text-[#2d9fd3] text-sm transition-colors">{item}</Link></li>
                ))}
              </ul>
            </div>
            <div>
  <h4 className="font-semibold text-gray-900 mb-4">Sosial şəbəkələr</h4>
  <div className="flex gap-3">
    {/* Facebook */}
    <Link href="#" className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#1877F2] flex items-center justify-center transition-all duration-300 group">
      <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    </Link>

    {/* Instagram */}
    <Link href="#" className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center transition-all duration-300 group">
      <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    </Link>

    {/* YouTube */}
    <Link href="#" className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-[#FF0000] flex items-center justify-center transition-all duration-300 group">
      <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    </Link>

    {/* TikTok */}
    <Link href="#" className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-black flex items-center justify-center transition-all duration-300 group">
      <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    </Link>
  </div>
</div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">© 2024 Yardımlı Xeyriyyə Cəmiyyəti. Bütün hüquqlar qorunur.</p>
            <div className="flex gap-6">
              <Link href="#" className="text-gray-500 hover:text-[#2d9fd3] text-sm transition-colors">Gizlilik siyasəti</Link>
              <Link href="#" className="text-gray-500 hover:text-[#2d9fd3] text-sm transition-colors">İstifadə şərtləri</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}