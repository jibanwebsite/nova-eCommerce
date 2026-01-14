import { Link } from 'react-router-dom';
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
        {/* <FlatOffBanner /> */}       
        <HeroSlider />
        
        {/* Explore More CTA */}
        <div className="flex justify-center py-16 border-b border-gray-50">
          <Link 
            to="/shop" 
            className="px-11 py-3.5 bg-brand-accent rounded-xl text-white font-bold text-[13px] tracking-[0.2em] uppercase hover:bg-brand-primary transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            Explore More
          </Link>
        </div>

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
