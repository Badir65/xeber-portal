import Link from "next/link";

export const metadata = {
  title: "Haqqımızda | Yardımlı Xeyriyyə Cəmiyyəti",
  description: "Yardımlı Xeyriyyə Cəmiyyəti İctimai Birliyi haqqında məlumat. 2009-cu ildən fəaliyyət göstərir.",
};

const stats = [
  { value: "2009", label: "Təsis ili" },
  { value: "68400", label: "Rayon əhalisi" },
  { value: "87", label: "Kənd" },
];

const historicalSites = [
  { name: "Abi-Dərdə Türbəsi", description: "XIII-XIV əsrlərə aid ziyarətgah", icon: "🕌" },
  { name: "Çüzünqala", description: "Tarixi müdafiə qalası", icon: "🏛️" },
  { name: "Alar Mağarası", description: "Təbii tarixi abidə", icon: "⛰️" },
];

const famousPeople = [
  {
    name: "Sabir Rüstəmxanlı",
    title: "Xalq şairi, Milli Məclis deputatı",
    description: "Vətəndaş Həmrəyliyi Partiyasının sədri, Dünya Azərbaycanlıları Konqresinin həmsədri",
  },
  {
    name: "Musa Qasımlı",
    title: "Tarixçi, professor",
    description: "AMEA-nın müxbir üzvü, Qafqazşünaslıq İnstitutunun direktoru, Milli Məclis deputatı",
  },
  {
    name: "Mirşahin Ağayev",
    title: "Telejurnalist",
    description: "Real TV-nin baş direktoru, Azərbaycan Respublikasının əməkdar jurnalisti",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-[#2d9fd3] to-[#1e7ba8] text-white py-16 sm:py-24">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Yardımlı Xeyriyyə Cəmiyyəti
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              2009-cu ildən fəaliyyət göstərən cəmiyyətimiz Yardımlı rayonunun inkişafı, 
              mədəni irsinin qorunması və əhalinin sosial rifahının yaxşılaşdırılması 
              istiqamətində çalışır.
            </p>
          </div>
        </div>
      </section>

      <section className="relative -mt-8 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="text-2xl sm:text-3xl font-bold text-[#2d9fd3] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#2d9fd3] font-semibold text-sm tracking-wider uppercase">
                Tariximiz
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-6">
                Yardımlı Rayonu
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Yardımlı rayonu Azərbaycan Respublikasının cənub-şərq hissəsində, dağlıq ərazidə 
                  yerləşən inzibati-ərazi vahididir. İnzibati mərkəzi Yardımlı şəhəridir. 
                  8 avqust 1930-cu ildə Vərgədüz rayonu adı ilə təşkil edilib.
                </p>
                <p>
                  Yardımlı sözü qədim "Yardəm" şəhərinin adı ilə bağlıdır. Akademik Ziya Bünyadov 
                  "Azərbaycan VII-IX əsrlərdə" kitabında "Yardəm" şəhərini Ərdəbil şəhərindən 
                  şimalda — indiki Yardımlı rayon ərazisində göstərmişdir.
                </p>
                <p>
                  1920-ci ildən 1930-cu ilədək Lənkəran qəzasının Vərgədüz dairəsi adlandırılmışdır. 
                  1938-ci ildən Yardımlı rayonu adlandırılmış və mərkəz Yardımlı olmuşdur. 
                  2008-ci ildə isə şəhər statusu almışdır.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97889.5!2d48.2!3d38.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403070a68c0c1c5d%3A0x8e5a59d8b4b3b0a0!2sYard%C4%B1ml%C4%B1%2C%20Azerbaijan!5e0!3m2!1sen!2saz!4v1703500000000"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#00a651] font-semibold text-sm tracking-wider uppercase">
              Coğrafiya
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
              Coğrafi Mövqeyi
            </h2>
            <p className="text-gray-600">
              Yardımlı rayonu 39°–38° şimal en dairəsində, 48°–49° şərq uzunluq dairəsində yerləşir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-[#2d9fd3]/5 to-[#2d9fd3]/10 rounded-2xl p-6 border border-[#2d9fd3]/20">
              <div className="w-12 h-12 bg-[#2d9fd3] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Ərazi</h3>
              <p className="text-gray-600 text-sm">
                66.720 hektar torpaq sahəsi, 20.536 hektarı meşəlik. Viləş çayı rayonu mərkəzdən iki hissəyə bölür.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#00a651]/5 to-[#00a651]/10 rounded-2xl p-6 border border-[#00a651]/20">
              <div className="w-12 h-12 bg-[#00a651] rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Sərhədlər</h3>
              <p className="text-gray-600 text-sm">
                İran (96 km), Lerik (40 km), Masallı (11 km), Cəlilabad (20 km) rayonları ilə həmsərhəddir.
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-500/5 to-amber-500/10 rounded-2xl p-6 border border-amber-500/20">
              <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="font-bold text-gray-900 mb-2">İqlim</h3>
              <p className="text-gray-600 text-sm">
                11 iqlim qurşağından 4-ü mövcuddur: mülayim yarımsəhra, mülayim isti, soyuq yarımsəhra və quru çöl.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop"
                  alt="Yardımlı meşələri"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&h=300&fit=crop"
                  alt="Yardımlı dağları"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=400&h=300&fit=crop"
                  alt="Yardımlı çayları"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-8"
                />
                <img
                  src="https://images.unsplash.com/photo-1446329813274-7c9036bd9a1f?w=400&h=300&fit=crop"
                  alt="Yardımlı təbiəti"
                  className="rounded-2xl shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <span className="text-[#00a651] font-semibold text-sm tracking-wider uppercase">
                Təbiət
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-6">
                Əvəzolunmaz Təbiəti
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Yardımlı təbiətinin gözəlliyi və rəngarəngliyi ilə insanı valeh edir. 
                  Rayon ərazisinin böyük sahəsi meşələrlə örtülmüşdür. Bu yerlərin gözəl təbiəti, 
                  çayları, bulaqları və çoxsaylı tarixi abidələri Yardımlıya xüsusi bir gözəllik bəxş edir.
                </p>
                <p>
                  Yardımlı ərazisindəki qayalardan süzülüb gələn bulaqlar əsasən hidrogen-sulfidli, 
                  natrium-sulfatlı, sulfatlı-karbonatlı mineral sulardan ibarətdir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-[#2d9fd3] font-semibold text-sm tracking-wider uppercase">
              Mədəni İrs
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2 mb-4">
              Tarixi Abidələr
            </h2>
            <p className="text-gray-600">
              Ehtimal edilir ki, İslamdan əvvəl oda sitayiş edən atəşpərəstlər burada yaşayıb 
              və məbəd ucaldıblar. Bəzi müəlliflər qalanın tarixini V-IX əsrlərə aparıb çıxarırlar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {historicalSites.map((site, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gradient-to-br hover:from-[#2d9fd3]/5 hover:to-[#00a651]/5 transition-all duration-300 border border-gray-100 hover:border-[#2d9fd3]/30 group"
              >
                <span className="text-4xl mb-4 block group-hover:scale-110 transition-transform">
                  {site.icon}
                </span>
                <h3 className="font-bold text-gray-900 mb-2">{site.name}</h3>
                <p className="text-gray-500 text-sm">{site.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-16 sm:py-24 bg-gradient-to-br from-[#2d9fd3] to-[#1e7ba8] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-white/80 font-semibold text-sm tracking-wider uppercase">
                Cəmiyyətimiz
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mt-2 mb-6">
                Yardımlı Xeyriyyə Cəmiyyəti İctimai Birliyi
              </h2>
              <div className="space-y-4 text-white/90 leading-relaxed">
                <p>
                  2009-cu ildə təsis edilmiş Yardımlı Xeyriyyə Cəmiyyəti İctimai Birliyi rayonun 
                  sosial-iqtisadi inkişafına, mədəni irsinin qorunmasına və təbliğinə töhfə verməyi 
                  özünə məqsəd qoymuşdur.
                </p>
                <p>
                  Cəmiyyətimiz həmçinin ehtiyacı olan ailələrə, tələbələrə və yaşlı insanlara 
                  maddi və mənəvi dəstək göstərir, mədəni tədbirlər təşkil edir.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-white text-[#2d9fd3] font-semibold rounded-xl hover:bg-gray-100 transition-colors"
                >
                  Bizimlə əlaqə
                </Link>
                <Link
                  href="/volunteer"
                  className="px-6 py-3 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition-colors border border-white/30"
                >
                  Könüllü ol
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                style={{borderRadius: '50%', background: 'white'}}
                src="/logo.png"
                alt="Yardımlı Xeyriyyə Cəmiyyəti"
                className="w-64 h-64 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}