import { useState, useEffect } from 'react';

const grandGlobalData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop", // Placeholder
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aldo_Group_logo.svg/2560px-Aldo_Group_logo.svg.png", 
    brandName: "Dorothy Perkins",
    category: "Hottest Pairs",
    offer: "MIN. 30% OFF",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop", 
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Mango_logo.svg",
    brandName: "Mango",
    category: "Stunning Footwear",
    offer: "UP TO 60% OFF",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=1000&auto=format&fit=crop", 
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aldo_Group_logo.svg/2560px-Aldo_Group_logo.svg.png", 
    brandName: "Aldo",
    category: "Sneakers & More",
    offer: "MIN. 40% OFF",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf6c?q=80&w=1000&auto=format&fit=crop",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Calvin_klein_logo.svg/2560px-Calvin_klein_logo.svg.png",
    brandName: "Calvin Klein",
    category: "Must-Have Collection",
    offer: "UP TO 50% OFF",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1581553690321-e8c7c7247734?q=80&w=1000&auto=format&fit=crop",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Gant_logo.svg/2560px-Gant_logo.svg.png",
    brandName: "Gant",
    category: "Laid-Back Styles",
    offer: "MIN. 30% OFF",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop",
    brandLogo: "https://logo.com/image-cdn/images/kts928pd/production/892bd03212871af9509df658b16c80cda1742457-340x340.png", // Antony Morato placeholder
    brandName: "Antony Morato",
    category: "Everyday Wear",
    offer: "UP TO 70% OFF",
  },
   // Duplicates 
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=1000&auto=format&fit=crop", 
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Aldo_Group_logo.svg/2560px-Aldo_Group_logo.svg.png", 
    brandName: "Dorothy Perkins",
    category: "Hottest Pairs",
    offer: "MIN. 30% OFF",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop", 
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Mango_logo.svg",
    brandName: "Mango",
    category: "Stunning Footwear",
    offer: "UP TO 60% OFF",
  },
];

export function GrandGlobalBrands() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const totalPages = Math.ceil(grandGlobalData.length / itemsPerPage);

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
                    <div key={pageIndex} className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 bg-white">
                        {grandGlobalData.slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage).map((item) => (
                            <div key={item.id} className="relative group/card cursor-pointer duration-300 z-0 bg-white pb-3 rounded-sm">
                                {/* Image Container */}
                                <div className="relative aspect-[1/1] overflow-hidden">
                                    <img 
                                        src={item.image} 
                                        alt={item.category} 
                                        className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Overlay Gradient for Logo visibility */}
                                    <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
                                    
                                    {/* Brand Logo Overlay */}
                                    <div className="absolute bottom-3 left-3 z-10">
                                        <img 
                                            src={item.brandLogo} 
                                            alt={item.brandName} 
                                            className="h-6 md:h-8 object-contain brightness-0 invert" 
                                        />
                                    </div>
                                </div>
                                
                                {/* Content section Below Image */}
                                <div className="pt-3 pb-1 px-4 text-center"> 
                                    {/* Category Text */}
                                    <div className="text-[15px] md:text-[16px] text-[#282C3F] font-sans font-normal mb-1 leading-snug">
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
