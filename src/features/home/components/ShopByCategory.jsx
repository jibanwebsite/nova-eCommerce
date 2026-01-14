import React from 'react';

// Import Images
import imgEthnic from '@/assets/images/slider/category/ethnic.jpg';
import imgCasual from '@/assets/images/slider/category/casual.jpg';
import imgActive from '@/assets/images/slider/category/active.jpg';
import imgActiveMen from '@/assets/images/slider/category/activemen.jpg';
import imgWestern from '@/assets/images/slider/category/westren.jpg';
import imgSports from '@/assets/images/slider/category/sports.jpg';
import imgLounge from '@/assets/images/slider/category/lounge.jpg';
import imgInnerwear from '@/assets/images/slider/category/innerwear.jpg';
import imgLingerie from '@/assets/images/slider/category/lingerie.jpg';
import imgWatches from '@/assets/images/slider/category/matches.jpg';
import imgShoes from '@/assets/images/slider/category/shoes.jpeg';
import imgMakeup from '@/assets/images/slider/category/makeup.jpg';

// all categories data 
const categoriesData = [
  {
    id: 1,
    image: imgEthnic,
    category: "Ethnic Wear",
    offer: "50-80% OFF",
  },
  {
    id: 2,
    image: imgCasual,
    category: "WFH Casual Wear",
    offer: "40-80% OFF",
  },
  {
    id: 3,
    image: imgActive,
    category: "Activewear",
    offer: "30-70% OFF",
  },
  {
    id: 4,
    image: imgActiveMen,
    category: "Activewear",
    offer: "30-70% OFF",
  },
  {
    id: 5,
    image: imgWestern,
    category: "Western Wear",
    offer: "40-80% OFF",
  },
  {
    id: 6,
    image: imgSports,
    category: "Sportswear",
    offer: "30-80% OFF",
  },
  {
    id: 7,
    image: imgLounge,
    category: "Loungewear",
    offer: "30-60% OFF",
  },
  {
    id: 8,
    image: imgInnerwear,
    category: "Innerwear",
    offer: "UP TO 70% OFF",
  },
  {
    id: 9,
    image: imgLingerie,
    category: "Lingerie",
    offer: "UP TO 70% OFF",
  },
  {
    id: 10,
    image: imgWatches,
    category: "Watches",
    offer: "UP TO 80% OFF",
  },
  {
    id: 11,
    image: imgShoes,
    category: "Shoes",
    offer: "UP TO 60% OFF",
  },
  {
    id: 12,
    image: imgMakeup,
    category: "Beauty & Makeup",
    offer: "UP TO 60% OFF",
  },
];

export function ShopByCategory() {
  return (
    <section className="bg-white pb-16">
      {/* Header */}
      <div className="px-5 md:px-10 py-10">
         <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.2em] text-[#3e4152] uppercase font-sans">
            SHOP BY CATEGORY
         </h2>
      </div>

      {/* Flex Container for Centered Layout (Centers the last row) */}
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-10 text-center">
          {categoriesData.map((item) => (
             <div 
                key={item.id} 
                className="relative group cursor-pointer overflow-hidden aspect-[4/5] flex-shrink-0 w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(20%-18px)] xl:w-[calc(16.666%-20px)] shadow-sm hover:shadow-xl transition-all duration-300"
             >
                 {/* Image */}
                 <img 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 
                 {/* Gradient Overlay */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                 {/* Content Section */}
                 <div className="absolute inset-x-0 bottom-0 py-6 flex flex-col items-center justify-end text-center z-10 p-4 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                     <h4 className="text-white text-[13px] md:text-[15px] font-bold font-sans tracking-[0.15em] uppercase mb-1 drop-shadow-md">
                         {item.category}
                     </h4>
                     <div className="text-white/90 text-[16px] md:text-[20px] font-light mb-2">
                         {item.offer}
                     </div>
                     <div className="bg-brand-gradient backdrop-blur-sm px-4 py-1.5 rounded-full text-white text-[10px] md:text-[11px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                         Shop Now
                     </div>
                 </div>
             </div>
          ))}
      </div>
    </section>
  );
}
