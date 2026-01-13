import { useState, useEffect } from 'react';


// luxeDealsData 
const luxeDealsData = [
  {
    id: 'forestessentials',
    image: "/src/assets/images/slider/luxedeals/makeup.jpg", // Skincare/Forest Essentials
    brand1: "FOREST ESSENTIALS",
    offer: "FREE GIFT WITH PURCHASE",
    logoStyle: "serif",
  },
  {
    id: 'kamaayurveda',
    image: "/src/assets/images/slider/luxedeals/ayurveda.jpg", // Ayurveda/Kama
    brand1: "KAMA AYURVEDA",
    offer: "B2G1 + FLAT 15% OFF",
    logoStyle: "serif",
  },
  {
    id: 'philipp plein',
    image: "/src/assets/images/slider/luxedeals/spectacles.jpeg", // Sunglasses/Philipp Plein
    brand1: "PHILIPP PLEIN",
    offer: "UP TO 50% OFF",
    logoStyle: "sans",
  },
  {
    id: 'chopard',
    image: "/src/assets/images/slider/luxedeals/chopard.jpeg", // Sunglasses/Chopard
    brand1: "Chopard",
    offer: "UP TO 50% OFF",
    logoStyle: "cursive", // Script style for Chopard
  },
  {
    id: 'swarovski',
    image: "/src/assets/images/slider/luxedeals/sharovski.jpg", // Jewelry/Swarovski
    brand1: "SWAROVSKI",
    offer: "UP TO 30% OFF",
    logoStyle: "serif",
  },
  {
    id: 'kayali',
    image: "/src/assets/images/slider/luxedeals/kayali.jpg", // Perfume/Kay Ali
    brand1: "KAY ALI",
    offer: "GIFT ON ALL ORDERS",
    logoStyle: "sans",
  },
  {
    id: 'tissot',
    image: "/src/assets/images/slider/luxedeals/Tissot.jpg", // Watches
    brand1: "TISSOT",
    offer: "FLAT 10% OFF",
    logoStyle: "sans",
  },
  {
    id: 'coach',
    image: "/src/assets/images/slider/luxedeals/justcavali.jpg", // Bags/Coach
    brand1: "COACH",
    brand2: "Just Cavalli",
    offer: "UP TO 40% OFF",
    logoStyle: "serif",
  },
  {
    id: 'diesel',
    image: "/src/assets/images/slider/luxedeals/diesel.jpg", // Fashion
    brand1: "DIESEL",
    offer: "FLAT 40% OFF",
    logoStyle: "sans",
  },
  {
    id: 'brooksbrothers',
    image: "/src/assets/images/slider/luxedeals/brookab.jpg", // Shirts
    brand1: "BROOKS BROTHERS",
    offer: "MIN. 50% OFF",
    logoStyle: "serif",
  },
  {
    id: 'damilano',
    image: "/src/assets/images/slider/luxedeals/damilano.jpg", // Handbags
    brand1: "DA MILANO",
    offer: "FLAT 40% OFF",
    logoStyle: "serif",
  },
  {
    id: 'aldo',
    image: "/src/assets/images/slider/luxedeals/aldoshoe.jpg", // Shoes
    brand1: "ALDO",
    offer: "MIN. 40% OFF",
    logoStyle: "sans",
  },
];

export function LuxeDeals() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const totalPages = Math.ceil(luxeDealsData.length / itemsPerPage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 768) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else if (window.innerWidth < 1280) setItemsPerPage(4);
      else setItemsPerPage(6);
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
            LUXE GRAND REDUCTION DEALS
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
                    <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 bg-white gap-2 px-2">
                        {luxeDealsData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
                            <div key={item.id} className="relative group/card cursor-pointer  duration-300 z-0 bg-white pb-3 rounded-sm">
                                {/* Image Container */}
                                <div className="relative h-[270px] overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.brand1} 
                                        className="w-full h-full object-cover object-top"
                                    />
                                    
                                    {/* Beige Overlay - Floating inside image to match "in the images" request */}
                                    <div className="absolute bottom-2 left-2 right-2 h-[64px] bg-[#fbf0eb] z-10 flex justify-center items-center text-center px-4 shadow-sm">
                                        {/* Brand Name - Logic for Single vs Split */}
                                        {item.brand2 ? (
                                            <div className="flex items-center gap-4">
                                                 <span className="text-[20px] md:text-[22px] text-[#282C3F] font-serif tracking-widest uppercase">
                                                    {item.brand1}
                                                </span>
                                                <div className="h-6 w-[1px] bg-gray-400 opacity-50"></div> {/* Separator line simulation */}
                                                <span className="text-[16px] md:text-[18px] text-[#282C3F] font-sans font-bold tracking-tight">
                                                    {item.brand2}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className={`text-[18px] md:text-[20px] text-[#282C3F] ${item.logoStyle === 'cursive' ? 'font-cursive italic' : item.logoStyle === 'serif' ? 'font-serif tracking-widest' : 'font-sans font-bold tracking-widest'} uppercase truncate w-full`}>
                                                {item.brand1}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                
                                {/* Offer Text Below Image */}
                                <div className="pt-3 pb-1 text-center bg-white px-1">
                                    <span className="text-[15px] md:text-[16px] font-bold text-[#282C3F] font-sans tracking-wide uppercase block truncate">
                                        {item.offer}
                                    </span>
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
