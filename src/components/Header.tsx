"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Ana Səhifə", href: "/" },
  { name: "Xəbərlər", href: "/news" },
  { name: "Şəhidlərimiz", href: "/martyrs" },
  { name: "Haqqımızda", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
            />
            <div>
              <h3 className="text-sm sm:text-sm font-bold text-[#2d9fd3] tracking-tight">
                YARDIMLI XEYRİYYƏ CƏMİYYƏTİ İCTİMAİ BİRLİYİ
              </h3>
              {/* <p className="text-[10px] sm:text-xs text-gray-500 tracking-wide">
                İctimai Birliyi
              </p> */}
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href || 
                (item.href !== "/" && pathname.startsWith(item.href));
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#2d9fd3]/10 text-[#2d9fd3]"
                      : "text-gray-600 hover:text-[#2d9fd3] hover:bg-gray-100"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}