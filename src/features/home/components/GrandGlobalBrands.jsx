import { useState, useEffect } from 'react';

import imgKurta from '@/assets/images/slider/globalbrands/kurta.jpg';
import imgSndlec from '@/assets/images/slider/globalbrands/sndlec.jpg';
import imgShoesPng from '@/assets/images/slider/globalbrands/shoes.png';
import imgJackets from '@/assets/images/slider/globalbrands/ljckets.jpg';
import imgCamera from '@/assets/images/slider/globalbrands/camera.jpg';
import imgBaby from '@/assets/images/slider/globalbrands/baby.jpg';
import imgLadiesWatch from '@/assets/images/slider/globalbrands/ladieswatch.jpg';
import imgBag from '@/assets/images/slider/globalbrands/bag.jpg';
import imgLounge from '@/assets/images/slider/globalbrands/lounge1.jpg';
import imgShoesJpeg from '@/assets/images/slider/globalbrands/shoes.jpeg';

const grandGlobalData = [
  {
    id: 1,
    image: imgKurta, // Placeholder
    brandLogo: "", 
    brandName: "Dorothy Perkins",
    category: "Hottest Pairs",
    offer: "MIN. 30% OFF",
  },
  {
    id: 2,
    image: imgSndlec, 
    brandLogo: "",
    brandName: "Mango",
    category: "Stunning Footwear",
    offer: "UP TO 60% OFF",
  },
  {
    id: 3,
    image: imgShoesPng, 
    brandLogo: "",
    brandName: "Aldo",
    category: "Sneakers & More",
    offer: "MIN. 40% OFF",
  },
  {
    id: 4,
    image: imgJackets,
    brandLogo: "",
    brandName: "Calvin Klein",
    category: "Must-Have Collection",
    offer: "UP TO 50% OFF",
  },
  {
    id: 5,
    image: imgCamera,
    brandLogo: "",
    brandName: "Gant",
    category: "Laid-Back Styles",
    offer: "MIN. 30% OFF",
  },
  {
    id: 6,
    image: imgBaby,
    brandLogo: "",
    brandName: "Antony Morato",
    category: "Everyday Wear",
    offer: "UP TO 70% OFF",
  },
  {
    id: 7,
    image: imgLadiesWatch, 
    brandLogo: "", 
    brandName: "Dorothy Perkins",
    category: "Hottest Pairs",
    offer: "MIN. 30% OFF",
  },
  {
    id: 8,
    image: imgCamera, 
    brandLogo: "",
    brandName: "Mango",
    category: "Stunning Footwear",
    offer: "UP TO 60% OFF",
  },
  {
    id: 9,
    image: imgBag, 
    brandLogo: "",
    brandName: "Mango",
    category: "Stunning Footwear",
    offer: "UP TO 60% OFF",
  },
  {
    id: 10,
    image: imgKurta, 
    brandLogo: imgKurta,
    brandName: "Kurta",
    category: "Clothing",
    offer: "UP TO 60% OFF",
  },
  {
    id: 11,
    image: imgLounge, 
    brandLogo: imgKurta,
    brandName: "lounge",
    category: "Clothing",
    offer: "UP TO 60% OFF",
  },
  {
    id: 12,
    image: imgShoesJpeg, 
    brandLogo: imgKurta,
    brandName: "shoes",
    category: "shoes",
    offer: "UP TO 20% OFF",
  },
];

export function GrandGlobalBrands() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const totalPages = Math.ceil(grandGlobalData.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(2); // 3 items on mobile
      else if (window.innerWidth < 768) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else if (window.innerWidth < 1280) setItemsPerPage(4);
      else setItemsPerPage(6);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Reset active index when page count changes
  useEffect(() => {
    setActiveIndex(0);
  }, [itemsPerPage]);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 4000); 
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  return (
    <section className="bg-white pb-10">
      {/* Header */}
      <div className="px-5 md:px-10 py-8">
         <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.2em] text-[#3e4152] uppercase font-sans">
            GRAND GLOBAL BRANDS
         </h2>
       </div>

      {/* Slider Container */}
      <div 
        className="w-full relative group bg-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      > 
            {/* Sliding Track */}
            <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 bg-white gap-2 px-2 md:gap-0 md:px-0">
                        {grandGlobalData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
                            <div key={item.id} className="relative group/card cursor-pointer duration-300 z-0 bg-white pb-3 rounded-sm">
                                {/* Image Container */}
                                <div className="relative aspect-[1/1] overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.category} 
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                
                                {/* Content section Below Image */}
                                <div className="pt-3 pb-1 px-1 md:px-4 text-center"> 
                                    {/* Category Text */}
                                    <div className="text-[11px] md:text-[16px] text-[#282C3F] font-sans font-normal mb-1 leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
                                        {item.category}
                                    </div>

                                    {/* Offer / Price Text */}
                                    <div className="text-[16px] md:text-[18px] font-black text-black font-sans tracking-wide uppercase">
                                        {item.offer}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
      </div>
       {/* Dots Pagination */}
       <div className="flex justify-center mt-6 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
                <div 
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-1.5 w-1.5 rounded-full cursor-pointer transition-colors ${index === activeIndex ? 'bg-[#535766]' : 'bg-[#d4d5d9] hover:bg-gray-400'}`}
                ></div>
            ))}
        </div>
    </section>
  );
}
