import { useState, useEffect } from "react";

// import images so Vite includes them in the production build
import comfort from "../../../assets/images/slider/risingstar/comfort.jpg";
import tokyowears from "../../../assets/images/slider/risingstar/tokyowears.jpg";
import berrylush from "../../../assets/images/slider/risingstar/berrylush.jpg";
import dennison from "../../../assets/images/slider/risingstar/dennison.jpg";
import bhama from "../../../assets/images/slider/risingstar/bhama.jpg";
import roadster from "../../../assets/images/slider/risingstar/roadster.jpg";
import maH from "../../../assets/images/slider/risingstar/maH.jpg";
import louis from "../../../assets/images/slider/risingstar/louis.jpg";
import levis from "../../../assets/images/slider/risingstar/levis.jpg";
import puma from "../../../assets/images/slider/risingstar/puma.jpg";

// sliders data
const risingStarsData = [
  {
    id: "standard-snitch&bewakoof",
    image: comfort, // Fashion model
    brand1: "SNITCH",
    brand2: "Bewakoof",
    tagline: "Modern Comfort",
    discount: "Min. 60% Off",
    bgColor: "bg-white",
  },
  {
    id: "tokyo-talkies&dassafras",
    image: tokyowears, // Fashion model
    brand1: "TOKYO TALKIES",
    brand2: "DASSAFRAS", // Intentional typo to match screenshot text "SASSAFRAS" if needed, but sticking to readable
    tagline: "Where Glam Meets the Wild West",
    discount: "Min. 70% Off",
    bgColor: "bg-white",
  },
  {
    id: "berrylush&street9",
    image: berrylush, // Fashion model with sunglasses
    brand1: "Berrylush",
    brand2: "STREET9",
    tagline: "Shine with Confidence",
    discount: "Min. 65% Off",
    bgColor: "bg-white",
  },
  {
    id: "dennison&faber",
    image: dennison, // Men's fashion
    brand1: "DENNISON",
    brand2: "Faber", // Placeholder for logo
    tagline: "Timeless Style",
    discount: "Min. 65% Off",
    bgColor: "bg-white",
  },
  {
    id: "bhama&shae",
    image: bhama, // Ethnic wear
    brand1: "Bhama",
    brand2: "Shae",
    tagline: "Ethereal Beauty",
    discount: "Min. 60% Off",
    bgColor: "bg-white",
  },
  {
    id: "roadster&life",
    image: roadster, // Men's casual
    brand1: "Roadster",
    brand2: "Life",
    tagline: "Urban Adventures",
    discount: "Min. 50% Off",
    bgColor: "bg-white",
  },
  {
    id: "mast&harbour",
    image: maH, // Women's accessories
    brand1: "Mast & Harbour",
    brand2: "",
    tagline: "Effortless Chic",
    discount: "Min. 55% Off",
    bgColor: "bg-white",
  },
  {
    id: "louis&vanheusen",
    image: louis, // Men's formal
    brand1: "Louis Philippe",
    brand2: "Van Heusen",
    tagline: "Sharp & Sophisticated",
    discount: "Min. 45% Off",
    bgColor: "bg-white",
  },
  {
    id: "levis&pepe",
    image: levis, // Women's denim
    brand1: "Levis",
    brand2: "Pepe",
    tagline: "Denim for Life",
    discount: "Min. 40% Off",
    bgColor: "bg-white",
  },
  {
    id: "puma&adidas",
    image: puma, // Sportswear
    brand1: "Puma",
    brand2: "Adidas",
    tagline: "Game On",
    discount: "Min. 30% Off",
    bgColor: "bg-white",
  },
];

export function RisingStars() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 768) setItemsPerPage(2);
      else if (window.innerWidth < 1024) setItemsPerPage(3);
      else if (window.innerWidth < 1280) setItemsPerPage(4);
      else setItemsPerPage(5);
    };

    handleResize(); // Set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const totalPages = Math.ceil(risingStarsData.length / itemsPerPage);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalPages);
    }, 4000); // 4 seconds for reading time
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  return (
    <section className="bg-white pb-10">
      {/* Header */}
      <div className="px-5 md:px-10 py-6">
        <h2 className="text-[20px] md:text-[24px] font-bold tracking-[0.3em] text-[#3e4152] uppercase font-sans">
          Rising Stars
        </h2>
      </div>

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
            <div
              key={pageIndex}
              className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 bg-white border-b border-gray-200"
            >
              {risingStarsData
                .slice(pageIndex * itemsPerPage, (pageIndex + 1) * itemsPerPage)
                .map((item) => (
                  <div
                    key={item.id}
                    className="relative group/card cursor-pointer hover:shadow-xl transition-shadow duration-300 border-r border-[#eaeaec] last:border-r-0 z-0 hover:z-10 bg-white"
                  >
                    {/* Image Container */}
                    <div className="relative h-[350px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.tagline}
                        className="w-full h-full object-cover object-top"
                      />

                      {/* Content Container - White Box Overlay IN the image */}
                      <div className="absolute bottom-2 left-2 right-2 px-2 pt-2 pb-2 text-center bg-white shadow-sm z-20">
                        {/* Brands Row */}
                        <div className="flex justify-between items-center mb-2 pb-2 border-b border-gray-200">
                          {/* Brand 1 */}
                          <div className="flex-1 px-1 border-r border-gray-200 flex justify-center items-center h-8">
                            {item.brand1 === "SNITCH" ? (
                              <div className="flex items-center gap-1">
                                <span className="text-xl font-light text-gray-900 leading-none">
                                  #
                                </span>
                                <span className="text-[16px] font-black font-sans text-gray-900 tracking-widest uppercase truncate">
                                  SNITCH
                                </span>
                              </div>
                            ) : (
                              <span className="text-[15px] font-bold font-serif text-gray-900 tracking-wider truncate">
                                {item.brand1}
                              </span>
                            )}
                          </div>
                          {/* Brand 2 */}
                          {item.brand2 && (
                            <div className="flex-1 px-1 flex justify-center items-center h-8">
                              <div
                                className={`relative ${item.brand2 === "Bewakoof" ? "bg-[#FFD200] px-2 py-0.5" : ""}`}
                              >
                                <span
                                  className={`text-[13px] font-bold font-sans tracking-wide ${item.brand2 === "Bewakoof" ? "text-black lowercase" : "text-gray-900"}`}
                                >
                                  {item.brand2}
                                </span>
                                {item.brand2 === "Bewakoof" && (
                                  <span className="absolute -top-1 -right-2 text-[8px] font-bold text-black">
                                    ®
                                  </span>
                                )}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Tagline */}
                        <h3 className="text-[14px] text-[#3e4152] font-normal leading-tight mb-0.5 font-sans">
                          {item.tagline}
                        </h3>

                        {/* Discount */}
                        <div className="text-[18px] font-bold text-[#282C3F] font-sans">
                          {item.discount}
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
      <div className="flex justify-center mt-8 gap-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`h-1.5 w-1.5 rounded-full cursor-pointer transition-colors ${index === activeIndex ? "bg-[#535766]" : "bg-[#d4d5d9] hover:bg-gray-400"}`}
          ></div>
        ))}
      </div>
    </section>
  );
}
