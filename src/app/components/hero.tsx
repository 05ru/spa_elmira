import { Phone, Mail, MapPin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <h1 className="mb-6 animate-fade-in">
            ИП Магомедова Эльмира
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Официальный представитель в сфере торговли и IT-услуг
          </p>
          <p className="text-lg mb-12 text-blue-200 max-w-2xl mx-auto">
            Предлагаем широкий спектр товаров и услуг: от компьютерной техники и бытовой электроники до разработки программного обеспечения и IT-консалтинга
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
            <a 
              href="tel:89894435275" 
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 hover:bg-white/20 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>8 (989) 443-52-75</span>
            </a>
            <a 
              href="mailto:elmira.buhhh@mail.ru" 
              className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4 hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              <span className="truncate">elmira.buhhh@mail.ru</span>
            </a>
            <div className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-4">
              <MapPin className="w-5 h-5 flex-shrink-0" />
              <span className="text-sm">Дербент, Дагестан</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(249 250 251)"/>
        </svg>
      </div>
    </section>
  );
}
