import React from 'react';


// all categories data 
const categoriesData = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop", // Ethnic
    category: "Ethnic Wear",
    offer: "50-80% OFF",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop", // Casual
    category: "WFH Casual Wear",
    offer: "40-80% OFF",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop", // Activewear women
    category: "Activewear",
    offer: "30-70% OFF",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1483726234545-481d6e880fc6?q=80&w=1000&auto=format&fit=crop", // Activewear men
    category: "Activewear",
    offer: "30-70% OFF",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1562157873-818bc072ed2d?q=80&w=1000&auto=format&fit=crop", // Western
    category: "Western Wear",
    offer: "40-80% OFF",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1518336589701-26b0bd57b6f8?q=80&w=1000&auto=format&fit=crop", // Sportswear
    category: "Sportswear",
    offer: "30-80% OFF",
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1556906781-9a412961d28c?q=80&w=1000&auto=format&fit=crop", // Loungewear
    category: "Loungewear",
    offer: "30-60% OFF",
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=1000&auto=format&fit=crop", // Innerwear
    category: "Innerwear",
    offer: "UP TO 70% OFF",
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1000&auto=format&fit=crop", // Lingerie
    category: "Lingerie",
    offer: "UP TO 70% OFF",
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1000&auto=format&fit=crop", // Watches
    category: "Watches",
    offer: "UP TO 80% OFF",
  },
  {
    id: 11,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1000&auto=format&fit=crop", // Grooming
    category: "Grooming",
    offer: "UP TO 60% OFF",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1512204053088-b3379962f988?q=80&w=1000&auto=format&fit=crop", // Beauty
    category: "Beauty & Makeup",
    offer: "UP TO 60% OFF",
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&w=1000&auto=format&fit=crop", // Grooming
    category: "Grooming",
    offer: "UP TO 60% OFF",
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1512204053088-b3379962f988?q=80&w=1000&auto=format&fit=crop", // Beauty
    category: "Beauty & Makeup",
    offer: "UP TO 60% OFF",
  },
];

export function ShopByCategory() {
  return (
    <section className="bg-white pb-10">
      {/* Header */}
      <div className="px-5 md:px-10 py-8">
         <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.2em] text-[#3e4152] uppercase font-sans">
            SHOP BY CATEGORY
         </h2>
      </div>

      {/* Flex Container for Centered Layout (Centers the last row) */}
      <div className="flex flex-wrap justify-center gap-6 px-4 md:px-12 text-center">
          {categoriesData.map((item) => (
             <div 
                key={item.id} 
                className="relative group cursor-pointer overflow-hidden aspect-[4/5] md:aspect-[5/6] xl:aspect-[1/1.2] flex-shrink-0 w-[calc(50%-12px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] xl:w-[calc(16.666%-20px)]"
             >
                 {/* Image */}
                 <img 
                    src={item.image} 
                    alt={item.category} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 
                 {/* Orange Content - section (Inset/Floating 'in' the image) */}
                 <div className="absolute left-1 right-1 bottom-1 h-[90px] py-4 bg-gradient-to-br from-[#df5c42] to-[#c23e25] flex flex-col items-center justify-center text-center z-10 transition-colors duration-300 shadow-lg leading-tight">
                     <h4 className="text-white text-[15px] md:text-[19px] font-normal font-sans tracking-wide mb-1">
                         {item.category}
                     </h4>
                     <div className="text-white text-[16px] md:text-[20px] font-serif mb-1 tracking-tight">
                         {item.offer}
                     </div>
                     <div className="text-white text-[13px] md:text-[17px] font-medium font-sans tracking-wide">
                         Shop Now
                     </div>
                 </div>
             </div>
          ))}
      </div>
    </section>
  );
}
