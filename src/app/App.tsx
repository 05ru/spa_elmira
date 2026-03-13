import { Hero } from "./components/hero";
import { Activities } from "./components/activities";
import { PriceList } from "./components/price-list";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <Activities />
      <PriceList />
      <Contact />
      <Footer />
    </div>
  );
}
