import { useState, useEffect } from "react";
import { SideDrawer } from "../../../components/layout/SideDrawer";
import { Button } from "@/components/ui/Button";

// sildes images
const slides = [
  {
    id: "brand-activewear",
    type: "brand",
    image: "/assets/images/Slider/activewears.jpg",
    bgAlignment: "object-top",
    brandBadge: "HRX",
    logos: true,
    title: "Activewear",
    subtitle: "40-70% Off",
    offerText: "UPTO ₹300 OFF",
  },
  {
    id: "standard-caprese-handbags",
    type: "standard",
    image: "/assets/images/Slider/SliderHandbags.jpg",
    bgAlignment: "object-center",
    brandBadge: "Caprese",
    title: "HANDBAGS",
    subtitle: "Min. 60% Off",
    offerText: "FLAT 60% OFF",
  },
  {
    id: "standard-fossil-watches",
    type: "standard",
    image: "/assets/images/Slider/watche.jpg",
    bgAlignment: "object-center",
    brandBadge: "Fossil",
    title: "WATCHES",
    subtitle: "Up to 50% Off",
    offerText: "EXTRA 15% OFF",
  },
  {
    id: "premium-uspolo-clothes",
    type: "premium",
    image: "/assets/images/Slider/sliderUsPolo.png",
    bgAlignment: "object-center",
    brandBadge: "US Polo",
    title: "CLOTHES",
    subtitle: "Up to 50% Off",
    offerText: "EXTRA 15% OFF",
  },
];

export function HeroSlider() {
  /* Slider State */
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full bg-[#f4f6f8]">
      <div className="w-full relative group">
        <div className="relative w-full bg-white h-[500px] md:h-[550px] flex flex-col md:flex-row overflow-hidden shadow-sm">
          {/* Slides Container */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full flex transition-opacity duration-700 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              {/* Left Section (Image) */}
              <div className="w-full h-[60%] md:w-[70%] md:h-full relative bg-gray-50">
                {slide.brandBadge && (
                  <div className="absolute top-8 left-8 bg-white px-4 py-2 shadow-sm z-10">
                    <span className="text-[#5EC4B6] font-bold text-lg tracking-widest uppercase flex items-center gap-1">
                      <span className="text-2xl leading-none">
                        {slide.brandBadge.charAt(0)}
                      </span>
                      {slide.brandBadge.slice(1)}
                    </span>
                  </div>
                )}

                <img
                  src={slide.image}
                  alt={slide.title}
                  className={`w-full h-full object-cover ${slide.bgAlignment}`}
                />
              </div>

              {/* Right Section (Content) */}
              <div className="w-full h-[40%] md:w-[30%] md:h-full flex flex-col justify-center px-6 md:px-16 bg-white relative py-4 md:py-0">
                {/* Brand Logos (Only for 'brand' type) */}
                {slide.logos && (
                  <div className="flex items-center gap-4 mb-6">
                    <div className="border border-gray-200 p-1 w-16 h-10 flex items-center justify-center">
                      <span className="font-extrabold text-black italic tracking-tighter text-lg">
                        HRX
                      </span>
                    </div>
                    <div className="border border-gray-200 p-1 w-16 h-10 flex items-center justify-center">
                      <svg
                        viewBox="0 0 24 24"
                        className="w-10 h-6 fill-current text-black"
                      >
                        <path
                          d="M21.25 4.5l-13.5 12.5-5.5-5.5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          d="M2 12c0 0 5 4 9 4s11-10 11-10"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="3"
                          style={{ strokeLinecap: "round" }}
                        />
                      </svg>
                    </div>
                    <span className="text-gray-500 font-serif text-lg italic">
                      & More
                    </span>
                  </div>
                )}

                <h3 className="text-3xl md:text-5xl font-serif text-[#282C3F] mb-2 tracking-wide uppercase">
                  {slide.title}
                </h3>
                <p className="text-xl md:text-4xl text-[#282C3F] font-serif font-light mb-8 md:mb-12">
                  {slide.subtitle}
                </p>

                <div className="flex">
                  <Button
                    variant="link"
                    className="text-sm md:text-base font-semibold text-gray-500 border-b border-gray-300 pb-1 hover:text-black hover:border-black transition-colors uppercase tracking-wide p-0 h-auto rounded-none hover:no-underline"
                  >
                    + Explore
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Side Drawer (Extracted Component) */}
        <SideDrawer />

        {/* Dots Indicators - Moved below the container */}
        <div className="absolute bottom-2 md:-bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-30">
          {slides.map((_, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => goToSlide(index)}
              className={`rounded-full cursor-pointer transition-all duration-300 p-0 min-w-0 min-h-0 ${index === currentSlide ? "bg-[#535766] w-2.5 h-2.5 hover:bg-[#535766]" : "bg-[#d4d5d9] w-2.5 h-2.5 hover:bg-gray-400"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
