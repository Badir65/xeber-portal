import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Logo" className="w-12 h-12 object-contain" />
              <div>
                <span className="text-xs font-bold text-[#2d9fd3]">YARDIMLI XEYRİYYƏ CƏMİYYƏTİ İCTİMAİ BİRLİYİ</span>
                {/* <p className="text-xs text-gray-500">Xeyriyyə Cəmiyyəti</p> */}
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Yardımlı Xeyriyyə Cəmiyyəti İctimai Birliyi 2009-cu ildən fəaliyyət göstərir.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Bölmələr</h4>
            <ul className="space-y-2">
              {["Ana Səhifə", "Xəbərlər", "Haqqımızda"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Ana Səhifə" ? "/" : `/${item.toLowerCase().replace("ə", "e")}`}
                    className="text-gray-500 hover:text-[#2d9fd3] text-sm transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Əlaqə</h4>
            <ul className="space-y-2 text-gray-500 text-sm">
              <li>Yardımlı, Azərbaycan</li>
              <li>info@yardimli.az</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Sosial şəbəkələr</h4>
            <div className="flex gap-3">
              {/* Facebook */}
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300 group hover:bg-[#1877F2] hover:scale-110 hover:shadow-lg hover:shadow-[#1877F2]/40"
              >
                <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300 group hover:bg-gradient-to-br hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] hover:scale-110 hover:shadow-lg hover:shadow-[#dc2743]/40"
              >
                <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>

              {/* YouTube */}
              <Link
                href="#"
                className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center transition-all duration-300 group hover:bg-[#FF0000] hover:scale-110 hover:shadow-lg hover:shadow-[#FF0000]/40"
              >
                <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Yardımlı Xeyriyyə Cəmiyyəti. Bütün hüquqlar qorunur.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-500 hover:text-[#2d9fd3] text-sm transition-colors">
              Gizlilik siyasəti
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#2d9fd3] text-sm transition-colors">
              İstifadə şərtləri
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}