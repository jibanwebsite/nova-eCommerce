import { ProductCard } from './ProductCard';

import imgWatches from '@/assets/images/slider/watche.jpg';
import imgHM from '@/assets/images/HM-Hero.jpg';
import imgRigo from '@/assets/images/rigo-tshirt.jpg';
import imgLevis from '@/assets/images/levis.jpg';
import imgPowerlook from '@/assets/images/powerlook.jpg';
import imgRoadster from '@/assets/images/roadster.jpg';
import imgHrx from '@/assets/images/hrx.jpg';
import imgTommy from '@/assets/images/tommy.jpg';
import imgTricycle from '@/assets/images/tricycle.jpg';

export const defaultTshirts = [
  {
    id: 1,
    brand: 'Levis',
    name: 'Solid Lounge T-shirt',
    price: 616,
    originalPrice: 649,
    discount: '5%',
    rating: 4.4,
    ratingCount: '17.7k',
    sizes: 'S, M, L, XL',
    image: imgWatches
  },
  {
    id: 2,
    brand: 'H&M',
    name: 'Cotton Pure Cotton T-shirt Regular Fit',
    price: 399,
    originalPrice: null,
    discount: null,
    rating: 4.2,
    ratingCount: '58.4k',
    sizes: 'M',
    image: imgHM
  },
  {
    id: 3,
    brand: 'Rigo',
    name: 'Unisex Printed Cotton T-shirt',
    price: 428,
    originalPrice: 1599,
    discount: '73%',
    rating: 4.1,
    ratingCount: '137',
    sizes: 'S, M, L, XL, XXL',
    image: imgRigo
  },
  {
    id: 4,
    brand: 'Levis',
    name: 'Solid Lounge T-shirt',
    price: 616,
    originalPrice: 649,
    discount: '5%',
    rating: 4.4,
    ratingCount: '17.7k',
    sizes: 'M, L',
    image: imgLevis
  },
  {
    id: 5,
    brand: 'Powerlook',
    name: 'Crochet Striped T Shirt',
    price: 499,
    originalPrice: 1999,
    discount: '75%',
    rating: 4.1,
    ratingCount: '1.5k',
    sizes: 'S, M, L, XL',
    image: imgPowerlook
  },
  {
    id: 6,
    brand: 'Roadster',
    name: 'Men Solid Cotton T-shirt',
    price: 299,
    originalPrice: 599,
    discount: '50%',
    rating: 4.0,
    ratingCount: '102.1k',
    sizes: 'S, M, L',
    image: imgRoadster
  },
  {
    id: 7,
    brand: 'HRX by Hrithik Roshan',
    name: 'Printed Bio Wash T-shirt',
    price: 349,
    originalPrice: 699,
    discount: '50%',
    rating: 4.2,
    ratingCount: '45.1k',
    sizes: 'M, L, XL',
    image: imgHrx
  },
  {
    id: 8,
    brand: 'Tommy Hilfiger',
    name: 'Men Regular Fit T-shirt',
    price: 1899,
    originalPrice: 2299,
    discount: '15%',
    rating: 4.5,
    ratingCount: '2.3k',
    sizes: 'S, M, L, XL',
    image: imgTommy
  },
];

export const defaultClothing = [
  {
    id: 101,
    brand: 'Tricycle Clothing',
    name: 'Reversible Long Sleeves Quilted Jacket',
    price: 1532,
    originalPrice: 2499,
    discount: '39% OFF',
    rating: 4.4,
    ratingCount: '201',
    image: imgTricycle
  },
  {
    id: 102,
    brand: 'ELPIXIE FASHION',
    name: 'Unisex Green Clothing Set',
    price: 345,
    originalPrice: 999,
    discount: '65% OFF',
    rating: 4.1,
    ratingCount: '942',
    image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22904536/2023/4/26/1ef8f06f-b25c-4217-9150-13f9827618991682500858852ELPIXIEFASHIONBoysGreen21.jpg'
  },
  {
    id: 103,
    brand: 'YK',
    name: 'Kids Beige Clothing Set',
    price: 579,
    originalPrice: 1999,
    discount: '71% OFF',
    rating: 4.2,
    ratingCount: '441',
    image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/24647900/2023/8/25/f8bad3d0-302a-4467-9302-3c2242173f4e1692942487440ClothingSet1.jpg'
  },
  {
    id: 104,
    brand: 'FABIZZA',
    name: 'Boys Shirt with Trousers',
    price: 497,
    originalPrice: 2499,
    discount: '80% OFF',
    rating: 4.0,
    ratingCount: '129',
    image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/23668276/2023/6/17/c9da9f62-108a-4933-9114-1e089270559d1686985799986ClothingSet1.jpg'
  },
  {
    id: 105,
    brand: 'ELPIXIE FASHION',
    name: 'Unisex Multi Clothing Set',
    price: 354,
    originalPrice: 999,
    discount: '65% OFF',
    rating: 4.3,
    ratingCount: '20',
    image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22904576/2023/4/26/d217743d-0d61-4835-abfa-3d1200f402121682501062095ELPIXIEFASHIONBoysMulti1.jpg'
  }
];

export function ProductGrid({ products = defaultTshirts }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
      {/* Repeating products to fill grid if needed, or just showing what's passed */}
      {products.length < 10 && products.map((product) => (
         <ProductCard key={`${product.id}-dup`} product={{...product, id: `${product.id}-dup`}} />
      ))}
    </div>
  );
}
