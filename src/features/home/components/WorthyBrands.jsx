import { useState, useEffect } from 'react';

// Import Images
import imgCruelty from '@/assets/images/slider/modalworthy/cruelty.jpg';
import imgMakeup from '@/assets/images/slider/modalworthy/makeup.jpg';
import imgShoes from '@/assets/images/slider/modalworthy/shoes.jpeg';
import imgManwears from '@/assets/images/slider/modalworthy/manwears.jpg';
import imgSaree from '@/assets/images/slider/modalworthy/saree.jpg';
import imgSareed from '@/assets/images/slider/modalworthy/sareed.jpg';
import imgAldo from '@/assets/images/slider/modalworthy/aldo.jpg';

// Import Logos
import logoMakeup from '@/assets/images/slider/modalworthy/brands/makeup.jpg';
import logoNike from '@/assets/images/slider/modalworthy/brands/nike.png';
import logoMelange from '@/assets/images/slider/modalworthy/brands/melange.jpg';
import logoDivine from '@/assets/images/slider/modalworthy/brands/divinesaree.jpg';
import logoKurta from '@/assets/images/slider/modalworthy/brands/kurta.jpg';
import logoAldo from '@/assets/images/slider/modalworthy/brands/also.jpg';


// worthy brands data 
const worthyBrandsData = [
  {
    id: 1,
    image: imgCruelty, 
    brandLogo: logoMakeup,
    category: "Cruelty-Free Personal Care",
    offer: "BUY 1, GET 1 FREE",
    hasMore: false
  },
  {
    id: 2,
    image: imgMakeup, 
    brandLogo: logoMakeup,
    category: "Trending Casuals",
    offer: "MIN. 40% OFF", 
    hasMore: false
  },
  {
    id: 3,
    image: imgShoes, 
    brandLogo: logoNike,
    category: "International Picks",
    offer: "MIN. 50% OFF",
    hasMore: false
  },
  {
    id: 4,
    image: imgManwears, 
    brandLogo: logoMelange, 
    category: "Must-Haves Ethnic Wear",
    offer: "FLAT 65% OFF",
    hasMore: false
  },
  {
    id: 5,
    image: imgSaree, 
    brandLogo: logoDivine, 
    category: "Stylish Collection Sarees",
    offer: "MIN. 85% OFF",
    hasMore: false
  },
  {
    id: 6,
    image: imgSareed, 
    brandLogo: logoKurta, 
    category: "Designer Sarees",
    offer: "UNDER Rs.699",
    hasMore: false
  },

  {
    id: 7,
    image: imgAldo, 
    brandLogo: logoAldo,
    category: "International Picks",
    offer: "MIN. 50% OFF",
    hasMore: false
  },
  {
    id: 8,
    image: imgManwears, 
    brandLogo: logoMelange, 
    category: "Must-Haves Ethnic Wear",
    offer: "FLAT 65% OFF",
    hasMore: false
  },
  {
    id: 9,
    image: imgSaree, 
    brandLogo: logoMelange, 
    category: "Stylish Collection Sarees",
    offer: "MIN. 85% OFF",
    hasMore: false
  },
  {
    id: 10,
    image: imgSareed, 
    brandLogo: logoKurta, 
    category: "Designer Sarees",
    offer: "UNDER ₹699",
    hasMore: false
  },
    {
    id: 11,
    image: imgSaree, 
    brandLogo: logoMelange, 
    category: "Stylish Collection Sarees",
    offer: "MIN. 85% OFF",
    hasMore: false
  },
  {
    id: 12,
    image: imgSareed, 
    brandLogo: logoDivine, 
    category: "Designer Sarees",
    offer: "UNDER Rs.699",
    hasMore: false
  },
];

export function WorthyBrands() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const totalPages = Math.ceil(worthyBrandsData.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(2); // 2 items on mobile
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
            MEDAL WORTHY BRANDS TO BAG
         </h2>
       </div>

      {/* Slider Container */}
      <div 
        className="w-full relative group bg-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      > 
            <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 bg-white gap-2 px-2 md:gap-2 md:px-0">
                        {worthyBrandsData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
                            <div key={item.id} className="relative group/card cursor-pointer duration-300 z-0 bg-white pb-3 rounded-sm">
                                {/* Image Container */}
                                <div className="relative aspect-[1/1] overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.category} 
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Logo Overlay - Positioned Bottom Right */}
                                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 via-black/10 to-transparent pointer-events-none"></div>
                                    <div className="absolute bottom-3 right-3 z-10 flex flex-col items-end">
                                         {item.isSplit ? (
                                            <div className="flex items-center gap-2">
                                                <div className="bg-white p-1 rounded shadow-sm w-9 h-9 flex items-center justify-center">
                                                    <img src={item.brandLogo} alt="brand1" className="max-h-full max-w-full object-contain" />
                                                </div>
                                                <div className="bg-white p-1 rounded shadow-sm w-9 h-9 flex items-center justify-center">
                                                    <img src={item.brandLogo2} alt="brand2" className="max-h-full max-w-full object-contain" />
                                                </div>
                                            </div>
                                         ) : (
                                            <div className="flex flex-col items-end gap-1">
                                                <div className="bg-white p-1 rounded shadow-sm w-12 h-12 flex items-center justify-center">
                                                    <img src={item.brandLogo} alt="brand" className="max-h-full max-w-full object-contain" />
                                                </div>
                                                {item.hasMore && (
                                                    <span className="text-[10px] text-white font-medium tracking-wide shadow-black drop-shadow-md">+ MORE</span>
                                                )}
                                            </div>
                                         )}
                                    </div>
                                </div>
                                
                                {/* Content section Below Image */}
                                <div className="pt-4 pb-2 px-3">
                                    {/* Link removed from here, now on image */}

                                    {/* Category Text */}
                                    <div className="text-[15px] md:text-[17px] text-center text-[#282C3F] font-sans font-normal mb-1 leading-snug whitespace-nowrap overflow-hidden text-ellipsis">
                                        {item.category}
                                    </div>

                                    {/* Offer / Price Text */}
                                    <div className="text-[16px] text-center md:text-[18px] font-black text-black font-sans tracking-wide uppercase">
                                        {item.offer ? (
                                            item.offer
                                        ) : (
                                            <div className="flex items-center gap-1">
                                                <span>{item.pricePrefix}</span>
                                                <span className="line-through text-gray-400 text-[12px] md:text-[14px] font-normal">{item.priceOriginal}</span>
                                                <span>{item.priceDiscounted}</span>
                                            </div>
                                        )}
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

