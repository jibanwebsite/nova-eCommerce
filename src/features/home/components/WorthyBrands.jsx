import { useState, useEffect } from 'react';


// worthy brands data 
const worthyBrandsData = [
  {
    id: 1,
    image: "/src/assets/images/slider/modalworthy/cruelty.jpg", // placeholder for Body Shop
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Body_Shop_logo.svg/1200px-The_Body_Shop_logo.svg.png",
    category: "Cruelty-Free Personal Care",
    offer: "BUY 1, GET 1 FREE",
    hasMore: false
  },
  {
    id: 2,
    image: "/src/assets/images/slider/modalworthy/makeup.jpg", // US Polo Sneakers
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/U.S._Polo_Assn._logo.svg/2560px-U.S._Polo_Assn._logo.svg.png",
    category: "Trending Casuals",
    offer: "MIN. 40% OFF", 
    hasMore: false
  },
  {
    id: 3,
    image: "/src/assets/images/slider/modalworthy/shoes.jpeg", // Aldo Shoes
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aldo_Group_logo.svg/2560px-Aldo_Group_logo.svg.png",
    category: "International Picks",
    offer: "MIN. 50% OFF",
    hasMore: true
  },
  {
    id: 4,
    image: "/src/assets/images/slider/modalworthy/manwears.jpg", // Ethnic
    brandLogo: "https://w7.pngwing.com/pngs/387/565/png-transparent-melange-clothing-fashion-brand-logos-miscellaneous-text-logo.png", // Melange
    category: "Must-Haves Ethnic Wear",
    offer: "FLAT 65% OFF",
    hasMore: false
  },
  {
    id: 5,
    image: "/src/assets/images/slider/modalworthy/saree.jpg", // Saree
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Myntra_logo.svg/1200px-Myntra_logo.svg.png", // Placeholder for 'M'
    category: "Stylish Collection Sarees",
    offer: "MIN. 85% OFF",
    hasMore: false
  },
  {
    id: 6,
    image: "/src/assets/images/slider/modalworthy/sareed.jpg", // Saree
    brandLogo: "https://logodix.com/logo/1823903.png", // Sangria
    category: "Designer Sarees",
    offer: "UNDER ₹699",
    hasMore: false
  },
  // Duplicates for slider loop
  {
    id: 7,
    image: "/src/assets/images/slider/modalworthy/watches.jpg",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/The_Body_Shop_logo.svg/1200px-The_Body_Shop_logo.svg.png",
    category: "Cruelty-Free Personal Care",
    offer: "BUY 1, GET 1 FREE",
    hasMore: false
  },
   {
    id: 8,
    image: "/src/assets/images/slider/modalworthy/sandals.jpg", 
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/U.S._Polo_Assn._logo.svg/2560px-U.S._Polo_Assn._logo.svg.png",
    category: "Trending Casuals",
    offer: "MIN. 40% OFF",
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
            MEDAL WORTHY BRANDS TO BAG
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
                    <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 bg-white">
                        {worthyBrandsData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
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
                                <div className="pt-3 pb-1 px-4">
                                    {/* Logo Row */}
                                    <div className="h-10 mb-2 flex items-center">
                                         {item.isSplit ? (
                                            <div className="flex items-center gap-3">
                                                <img src={item.brandLogo} alt="brand1" className="h-full object-contain max-w-[60px] max-h-[35px]" />
                                                <img src={item.brandLogo2} alt="brand2" className="h-full object-contain max-w-[60px] max-h-[35px]" />
                                            </div>
                                         ) : (
                                            <div className="flex items-end gap-1">
                                                <img src={item.brandLogo} alt="brand" className="h-full object-contain max-w-[100px] max-h-[40px]" />
                                                {item.hasMore && (
                                                    <span className="text-[10px] text-gray-500 font-sans mb-0.5">& More</span>
                                                )}
                                            </div>
                                         )}
                                    </div>

                                    {/* Category Text */}
                                    <div className="text-[15px] md:text-[17px] text-[#282C3F] font-sans font-normal mb-1 leading-snug">
                                        {item.category}
                                    </div>

                                    {/* Offer / Price Text */}
                                    <div className="text-[16px] md:text-[18px] font-black text-black font-sans tracking-wide uppercase">
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

