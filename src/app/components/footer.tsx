export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIG9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>
      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="mb-4 text-white">ИП Магомедова Эльмира</h3>
            <p className="text-blue-100 leading-relaxed">
              Официальный представитель в сфере торговли компьютерной техникой, бытовой электроникой и IT-услуг
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-white">Контакты</h4>
            <ul className="space-y-2 text-blue-100">
              <li>
                <a href="tel:89894435275" className="hover:text-white transition-colors">
                  8 (989) 443-52-75
                </a>
              </li>
              <li>
                <a href="mailto:elmira.buhhh@mail.ru" className="hover:text-white transition-colors break-all">
                  elmira.buhhh@mail.ru
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-white">Реквизиты</h4>
            <ul className="space-y-2 text-blue-100">
              <li>ИНН: 56012564220</li>
              <li>ОГРН: 317057100070697</li>
              <li className="text-sm leading-relaxed">
                368607, Дагестан Респ,<br />
                Дербент г, 5 Линия ул, дом № 7
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-blue-100">
          <p>© {currentYear} ИП Магомедова Эльмира. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
