import Link from "next/link";

export const metadata = {
  title: "Şəhidlərimiz | Yardımlı Xeyriyyə Cəmiyyəti",
  description: "44 günlük Vətən Müharibəsində şəhid olan Yardımlı övladlarının əziz xatirəsi",
};

const martyrs = [
  {
    id: 1,
    name: "Əliyev Elçin Sarvan oğlu",
    birthDate: "23.05.1995",
    martyrDate: "30.09.2020",
    rank: "MAXE",
    location: "Yardımlı rayonu, Kürəkçi kəndi",
  },
  {
    id: 2,
    name: "Zeynalov Cavid Vaqif oğlu",
    birthDate: "17.10.1990",
    martyrDate: "30.09.2020",
    rank: "MAXE",
    location: "Yardımlı rayonu, Mirimli kəndi",
  },
  {
    id: 3,
    name: "Rzalı Əli Nuru oğlu",
    birthDate: "17.04.2002",
    martyrDate: "02.10.2020",
    rank: "Əsgər",
    location: "Yardımlı rayonu, Bilnə kəndi",
  },
  {
    id: 4,
    name: "Məmiyev Elmir Zamin oğlu",
    birthDate: "22.12.2001",
    martyrDate: "03.10.2020",
    rank: "Əsgər",
    location: "Yardımlı rayonu, Kürəkçi kəndi",
  },
  {
    id: 5,
    name: "Qarayev Amal Ədalət oğlu",
    birthDate: "23.01.2001",
    martyrDate: "04.10.2020",
    rank: "Əsgər",
    location: "Yardımlı rayonu, Ərus kəndi",
  },
  {
    id: 6,
    name: "Eyniyev Tərlan Gölişad oğlu",
    birthDate: "22.01.1993",
    martyrDate: "07.10.2020",
    rank: "Gizir",
    location: "Xəzər rayonu, Şuvalan qəsəbəsi",
  },
  {
    id: 7,
    name: "Zairli Zahid Azad oğlu",
    birthDate: "10.05.2000",
    martyrDate: "08.10.2020",
    rank: "Əsgər",
    location: "Yardımlı rayonu, Dəlləkli kəndi",
  },
  {
    id: 8,
    name: "Alişanlı Amal Seyfəddin oğlu",
    birthDate: "11.02.2001",
    martyrDate: "08.10.2020",
    rank: "MAXE",
    location: "Yardımlı rayonu, Qabaqdibi kəndi",
  },
  {
    id: 9,
    name: "Səfərov Saleh İrzəxan oğlu",
    birthDate: "31.08.1983",
    martyrDate: "11.10.2020",
    rank: "MAXE",
    location: "Yardımlı şəhəri, Ünəç küçəsi",
  },
  {
    id: 10,
    name: "Mansurov Elçin Elşən oğlu",
    birthDate: "25.11.1984",
    martyrDate: "12.10.2020",
    rank: "Mayor",
    location: "Bakı şəhəri, II Fəxri Xiyaban",
  },
  {
    id: 11,
    name: "Sahratov Cavid Əlikömək oğlu",
    birthDate: "23.12.1981",
    martyrDate: "18.10.2020",
    rank: "Gizir",
    location: "Yardımlı şəhəri, Əsədabad küçəsi",
  },
  {
    id: 12,
    name: "Məmiyev Valeh İsbat oğlu",
    birthDate: "24.03.1994",
    martyrDate: "23.10.2020",
    rank: "Baş Leytenant",
    location: "Yardımlı rayonu, Kürəkçi kəndi",
  },
  {
    id: 13,
    name: "Eminli Rüstəm Mais oğlu",
    birthDate: "16.09.1999",
    martyrDate: "01.11.2020",
    rank: "Əsgər",
    location: "Yardımlı rayonu, Horonu kəndi",
  },
  {
    id: 14,
    name: "Aslanov Tural Elşən oğlu",
    birthDate: "05.06.1992",
    martyrDate: "07.11.2020",
    rank: "Leytenant",
    location: "Yardımlı rayonu, Çay Üzü kəndi",
  },
  {
    id: 15,
    name: "Talıbov Elməddin Məmməd oğlu",
    birthDate: "26.09.1998",
    martyrDate: "07.11.2020",
    rank: "Əsgər",
    location: "Yardımlı rayonu, Şıxlar kəndi",
  },
  {
    id: 16,
    name: "Rufullayev Rasim Yadigar oğlu",
    birthDate: "31.08.1997",
    martyrDate: "07.11.2020",
    rank: "MAXE",
    location: "Yardımlı rayonu, Zevin kəndi",
  },
  {
    id: 17,
    name: "Mirzəyev Şamil Afiq oğlu",
    birthDate: "02.03.1996",
    martyrDate: "11.11.2020",
    rank: "Əsgər",
    location: "Yardımlı şəhəri",
  },
  {
    id: 18,
    name: "Şirbəyli Siruz Hamil oğlu",
    birthDate: "20.02.1996",
    martyrDate: "11.11.2020",
    rank: "MAXE",
    location: "Yardımlı rayonu, Zevin kəndi",
  },
  {
    id: 19,
    name: "Mirzəyev Sarvan Əli oğlu",
    birthDate: "01.01.1995",
    martyrDate: "11.11.2020",
    rank: "MAXE",
    location: "Biləsuvar şəhəri",
  },
  {
    id: 20,
    name: "Məstəliyev Nurəddin Hasil oğlu",
    birthDate: "13.02.2000",
    martyrDate: "13.11.2020",
    rank: "Əsgər",
    location: "Qaradağ rayonu, Qızıldaş qəsəbəsi",
  },
  {
    id: 21,
    name: "Feyziyev Sadiq Tahir oğlu",
    birthDate: "01.09.1993",
    martyrDate: "18.11.2020",
    rank: "Gizir",
    location: "Yardımlı rayonu, Zevin kəndi",
  },
  {
    id: 22,
    name: "Sultanlı Elşən Nazim oğlu",
    birthDate: "19.02.2001",
    martyrDate: "18.11.2020",
    rank: "Əsgər",
    location: "Yardımlı rayonu, Teşkan kəndi",
  },
  {
    id: 23,
    name: "Abışov Zəka Zakir oğlu",
    birthDate: "19.03.2001",
    martyrDate: "23.11.2020",
    rank: "Əsgər",
    location: "Qaradağ rayonu, Qızıldaş qəsəbəsi",
  },
  {
    id: 24,
    name: "Mayıllı Mahmud Əflatun oğlu",
    birthDate: "12.07.2002",
    martyrDate: "30.11.2020",
    rank: "Əsgər",
    location: "Yardımlı rayonu, Avaş kəndi",
  },
  {
    id: 25,
    name: "Cəfərli Cəfər Babacəfər oğlu",
    birthDate: "11.12.1999",
    martyrDate: "14.12.2020",
    rank: "MAXE",
    location: "Yardımlı rayonu, Avun kəndi",
  },
  {
    id: 26,
    name: "Balaşzadə Röyal Atduxan oğlu",
    birthDate: "23.11.2003",
    martyrDate: "17.09.2022",
    rank: "Əsgər",
    location: "Xəzər rayonu, Binə Şəhidlər xiyabanı",
  },
  {
    id: 27,
    name: "Cahangirov Tural Qələmhüseyn oğlu",
    birthDate: "01.07.1991",
    martyrDate: "19.09.2023",
    rank: "Leytenant",
    location: "Pirallahı rayonu",
  },
];

function calculateAge(birthDate: string, martyrDate: string): number {
  const [bDay, bMonth, bYear] = birthDate.split(".").map(Number);
  const [mDay, mMonth, mYear] = martyrDate.split(".").map(Number);
  let age = mYear - bYear;
  if (mMonth < bMonth || (mMonth === bMonth && mDay < bDay)) {
    age--;
  }
  return age;
}

export default function MartyrsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 sm:py-28">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=1920')] opacity-5 bg-cover bg-center"></div>
        
        <div className="absolute top-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[#0092BC]"></div>
          <div className="flex-1 bg-[#E00034]"></div>
          <div className="flex-1 bg-[#00A651]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Şəhidlərimiz
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            44 günlük Vətən Müharibəsində Azərbaycanın ərazi bütövlüyü uğrunda canlarını fəda edən 
            Yardımlının qəhrəman övladlarının əziz xatirəsinə
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">{martyrs.length}</div>
              <div className="text-sm text-white/60 mt-1">Şəhid</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">44</div>
              <div className="text-sm text-white/60 mt-1">Gün</div>
            </div>
            <div className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">2020</div>
              <div className="text-sm text-white/60 mt-1">Zəfər ili</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl sm:text-2xl text-gray-700 italic leading-relaxed">
            "Şəhidlərimizin qanı yerdə qalmadı. Biz zəfər çaldıq, torpaqlarımızı azad etdik. 
            Şəhidlərimizin ruhu qarşısında baş əyirik!"
          </blockquote>
          <p className="mt-4 text-gray-500 font-medium">— İlham Əliyev, Azərbaycan Respublikasının Prezidenti</p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Əbədi Şərəf Kitabı
            </h2>
            <p className="mt-3 text-gray-500">
              Yardımlı Rayon İcra Hakimiyyətinin rəsmi məlumatlarına əsasən
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {martyrs.map((martyr) => {
              const age = calculateAge(martyr.birthDate, martyr.martyrDate);
              
              return (
                <div
                  key={martyr.id}
                  className="group relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0092BC] via-[#E00034] to-[#00A651]"></div>
                  
                  <div className="p-6">
  
                    {/* <div className="flex justify-center mb-4">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                        {martyr.name.split(" ")[0].charAt(0)}
                        {martyr.name.split(" ")[1]?.charAt(0) || ""}
                      </div>
                    </div> */}
                    
                    <h3 className="text-center font-bold text-gray-900 text-lg leading-tight mb-1">
                      {martyr.name}
                    </h3>
                    
                    <p className="text-center text-[#E00034] font-semibold text-sm mb-4">
                      {martyr.rank}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between py-2 border-t border-gray-100">
                        <span className="text-gray-500">Doğum tarixi:</span>
                        <span className="font-medium text-gray-900">{martyr.birthDate}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-t border-gray-100">
                        <span className="text-gray-500">Şəhid olduğu tarix:</span>
                        <span className="font-medium text-gray-900">{martyr.martyrDate}</span>
                      </div>
                      <div className="flex items-center justify-between py-2 border-t border-gray-100">
                        <span className="text-gray-500">Yaşı:</span>
                        <span className="font-medium text-gray-900">{age} yaş</span>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-start gap-2">
                        <svg className="w-4 h-4 text-gray-400 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs text-gray-500">{martyr.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-2xl">🕯️</div>
                  </div> */}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="text-6xl mb-6">🕯️</div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Ruhları Şad Olsun
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              Vətənimizin ərazi bütövlüyü uğrunda canlarını qurban verən şəhidlərimiz 
              daim qəlbimizdə yaşayacaq. Onların qəhrəmanlığı gələcək nəsillərə örnək olacaq.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-6 py-3 bg-white/10 rounded-xl">
                {/* <span className="text-2xl mr-2">🇦🇿</span> */}
                <span>Qarabağ Azərbaycandır!</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-500">
            Məlumat mənbəyi:{" "}
            <a 
              href="http://yardimli-ih.gov.az/az/veten-muharibesi-sehidleri.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#2d9fd3] hover:underline"
            >
              Yardımlı Rayon İcra Hakimiyyətinin rəsmi veb-saytı
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}