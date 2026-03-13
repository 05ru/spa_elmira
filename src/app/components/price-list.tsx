import { Monitor, Printer, Tv, Zap, Armchair, Camera, ShoppingCart, Code, Settings } from "lucide-react";

const priceCategories = [
  {
    icon: Monitor,
    title: "Компьютеры и ПО",
    items: [
      { name: "Ноутбуки", price: "от 41 300 ₽" },
      { name: "Системные блоки", price: "от 46 700 ₽" },
      { name: "Игровые ПК", price: "от 112 500 ₽" },
      { name: "Мониторы", price: "от 10 900 ₽" },
      { name: "Клавиатуры", price: "от 1 650 ₽" },
      { name: "Лицензионное ПО", price: "от 8 800 ₽" },
    ],
  },
  {
    icon: Printer,
    title: "Офисное оборудование",
    items: [
      { name: "МФУ", price: "от 21 400 ₽" },
      { name: "Лазерные принтеры", price: "от 17 300 ₽" },
      { name: "Сканеры", price: "от 9 600 ₽" },
      { name: "Кассовое оборудование", price: "от 24 000 ₽" },
    ],
  },
  {
    icon: Tv,
    title: "Аудио и видео",
    items: [
      { name: "Телевизоры", price: "от 34 200 ₽" },
      { name: "Саундбары", price: "от 9 900 ₽" },
      { name: "Домашние кинотеатры", price: "от 48 000 ₽" },
    ],
  },
  {
    icon: Zap,
    title: "Бытовая техника",
    items: [
      { name: "Стиральные машины", price: "от 39 900 ₽" },
      { name: "Холодильники", price: "от 44 500 ₽" },
      { name: "Пылесосы", price: "от 11 300 ₽" },
      { name: "Мелкая техника", price: "от 2 400 ₽" },
    ],
  },
  {
    icon: Armchair,
    title: "Мебель и освещение",
    items: [
      { name: "Офисные кресла", price: "от 12 700 ₽" },
      { name: "Шкафы", price: "от 19 800 ₽" },
      { name: "Столы", price: "от 11 200 ₽" },
      { name: "Осветительные приборы", price: "от 3 900 ₽" },
    ],
  },
  {
    icon: Camera,
    title: "Фото и измерительная техника",
    items: [
      { name: "Фотоаппараты", price: "от 58 000 ₽" },
      { name: "Оптические приборы", price: "от 6 500 ₽" },
    ],
  },
  {
    icon: ShoppingCart,
    title: "Интернет-торговля",
    items: [
      { name: "Доставка", price: "750 ₽" },
      { name: "Бесплатная доставка", price: "от 25 000 ₽" },
    ],
  },
  {
    icon: Code,
    title: "Разработка ПО",
    items: [
      { name: "Лендинг", price: "от 60 000 ₽" },
      { name: "Интернет-магазин", price: "от 145 000 ₽" },
      { name: "CRM-система", price: "от 210 000 ₽" },
    ],
  },
  {
    icon: Settings,
    title: "IT-услуги",
    items: [
      { name: "Настройка сервера", price: "от 28 000 ₽" },
      { name: "IT-аудит", price: "от 37 000 ₽" },
    ],
  },
];

export function PriceList() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="mb-4">Прайс-лист</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Актуальные цены на товары и услуги
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {priceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
              >
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <IconComponent className="w-6 h-6" />
                    <h3 className="text-white">{category.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex justify-between items-center pb-3 border-b border-gray-100 last:border-0"
                      >
                        <span className="text-gray-700">{item.name}</span>
                        <span className="text-blue-600">{item.price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            * Цены указаны ориентировочные. Для уточнения стоимости свяжитесь с нами по телефону или электронной почте
          </p>
        </div>
      </div>
    </section>
  );
}
