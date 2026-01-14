import { useState, useEffect } from 'react';

// Import Images
import imgComfort from '@/assets/images/slider/risingstar/comfort.jpg';
import imgTokyo from '@/assets/images/slider/risingstar/tokyowears.jpg';
import imgBerrylush from '@/assets/images/slider/risingstar/berrylush.jpg';
import imgDennison from '@/assets/images/slider/risingstar/dennison.jpg';
import imgBhama from '@/assets/images/slider/risingstar/bhama.jpg';
import imgRoadster from '@/assets/images/slider/risingstar/roadster.jpg';
import imgMaH from '@/assets/images/slider/risingstar/maH.jpg';
import imgLouis from '@/assets/images/slider/risingstar/louis.jpg';
import imgLevis from '@/assets/images/slider/risingstar/levis.jpg';
import imgPuma from '@/assets/images/slider/risingstar/puma.jpg';

// sliders data
const risingStarsData = [
  {
    id: 'standard-snitch&bewakoof',
    image: imgComfort,
    brandText: "SNITCH x BEWAKOOF",
    tagline: "Modern Comfort",
    discount: "MIN. 60% OFF",
    bgColor: "bg-white",
  },
  {
    id: 'tokyo-talkies&dassafras',
    image: imgTokyo,
    brandText: "TOKYO TALKIES",
    tagline: "Glam Meets Wild West",
    discount: "MIN. 70% OFF",
    bgColor: "bg-white",
  },
  {
    id: 'berrylush&street9',
    image: imgBerrylush,
    brandText: "BERRYLUSH x STREET9",
    tagline: "Shine with Confidence",
    discount: "MIN. 65% OFF",
    bgColor: "bg-white",
  },
  {
    id: 'dennison&faber',
    image: imgDennison,
    brandText: "DENNISON",
    tagline: "Timeless Style",
    discount: "MIN. 65% OFF",
    bgColor: "bg-white",
  },
  {
      id: 'bhama&shae',
      image: imgBhama,
      brandText: "BHAMA x SHAE",
      tagline: "Ethereal Beauty",
      discount: "MIN. 60% OFF",
      bgColor: "bg-white",
    },
    {
      id: 'roadster&life',
      image: imgRoadster,
      brandText: "ROADSTER",
      tagline: "Urban Adventures",
      discount: "MIN. 50% OFF",
      bgColor: "bg-white",
    },
    {
      id: 'mast&harbour',
      image: imgMaH,
      brandText: "MAST & HARBOUR",
      tagline: "Effortless Chic",
      discount: "MIN. 55% OFF",
      bgColor: "bg-white",
    },
    {
      id: 'louis&vanheusen',
      image: imgLouis,
      brandText: "LOUIS PHILIPPE",
      tagline: "Sharp & Sophisticated",
      discount: "MIN. 45% OFF",
      bgColor: "bg-white",
    },
    {
       id: 'levis&pepe',
       image: imgLevis,
       brandText: "LEVI'S x PEPE",
       tagline: "Denim for Life",
       discount: "MIN. 40% OFF",
       bgColor: "bg-white",
    },
    {
       id: 'puma&adidas',
       image: imgPuma,
       brandText: "PUMA x ADIDAS",
       tagline: "Game On",
       discount: "MIN. 30% OFF",
       bgColor: "bg-white",
    }
];

export function RisingStars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Minimum swipe distance (in px) 
  const minSwipeDistance = 50; 

  const onTouchStart = (e) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
        // Swipe Left -> Next Slide
        setActiveIndex((prev) => (prev + 1) % totalPages);
    } 
    if (isRightSwipe) {
        // Swipe Right -> Prev Slide (handle wrap around correctly)
        setActiveIndex((prev) => (prev - 1 + totalPages) % totalPages);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(2); // 2 on mobile
      else if (window.innerWidth < 768) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else if (window.innerWidth < 1280) setItemsPerPage(4);
      else setItemsPerPage(5);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(risingStarsData.length / itemsPerPage);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 4000); 
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  return (
    <section className="bg-white pb-16">
      {/* Header */}
      <div className="px-5 md:px-10 py-6">
         <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.2em] text-[#3e4152] uppercase font-sans">
            Rising Stars
         </h2>
       </div>

      <div 
        className="w-full relative group bg-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      > 
            {/* Sliding Track */}
            <div 
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white gap-4 px-4 md:px-10">
                        {risingStarsData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
                            <div key={item.id} className="cursor-pointer group/card flex flex-col relative">
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden mb-3">
                                    <img 
                                        src={item.image} 
                                        alt={item.tagline} 
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                                    />
                                    {/* Discount Badge - Top Right */}
                                    <div className="absolute top-2 right-2 bg-white/90 px-2 py-1 shadow-sm z-10">
                                        <span className="text-[10px] font-black font-sans text-black tracking-wider uppercase">
                                            {item.discount}
                                        </span>
                                    </div>

                                    {/* Content Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90 transition-opacity duration-300">
                                        <div className="absolute bottom-0 left-0 w-full p-4 flex flex-col justify-end h-full">
                                            {/* Brand Text - Slides up on hover to make room for tagline */}
                                            <div className="transform transition-transform duration-500 group-hover/card:-translate-y-2">
                                                <div className="text-[13px] md:text-[15px] font-bold uppercase tracking-widest text-white shadow-black drop-shadow-md">
                                                    {item.brandText}
                                                </div>
                                            </div>
                                            
                                            {/* Tagline - Reveals on hover */}
                                            <div className="overflow-hidden h-0 group-hover/card:h-auto transition-all duration-500 ease-in-out">
                                                <div className="text-[12px] md:text-[14px] text-gray-200 font-light translate-y-4 group-hover/card:translate-y-0 transition-transform duration-500 delay-100">
                                                    {item.tagline}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>

        {/* Dots Pagination */}
        <div className="flex justify-center mt-10 gap-2">
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
