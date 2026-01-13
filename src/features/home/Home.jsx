import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FlatOffBanner } from './components/FlatOffBanner';
import { HeroSlider } from './components/HeroSlider';
import { RisingStars } from './components/RisingStars';
import { LuxeDeals } from './components/LuxeDeals';
import { WorthyBrands } from './components/WorthyBrands';
import { GrandGlobalBrands } from './components/GrandGlobalBrands';
import { ShopByCategory } from './components/ShopByCategory';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <FlatOffBanner />
        <HeroSlider />
        <RisingStars />
        <LuxeDeals />
        <WorthyBrands />
        <GrandGlobalBrands />
        <ShopByCategory />
      </main>
      <Footer />
    </div>
  );
}
