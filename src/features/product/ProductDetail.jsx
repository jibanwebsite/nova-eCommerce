import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Truck, Check } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
import { ProductCard } from './components/ProductCard';
import { SimilarProducts } from './components/SimilarProducts';
import { defaultTshirts } from './components/ProductGrid'; // Reuse mock data

export function ProductDetail() {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  
  // Find product or use default if not found (for demo)
  const product = defaultTshirts.find(p => p.id === parseInt(id)) || defaultTshirts[0];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      <div className="pt-32 max-w-[1600px] mx-auto px-4 mb-20">
        {/* Breadcrumbs */}
        <div className="text-[12px] text-[#535766] mb-6 tracking-wide font-normal uppercase">
          <span className="cursor-pointer hover:font-bold hover:text-black transition-colors">Home</span> / 
          <span className="cursor-pointer hover:font-bold hover:text-black transition-colors ml-1">Clothing</span> / 
          <span className="cursor-pointer hover:font-bold hover:text-black transition-colors ml-1">Men Clothing</span> / 
          <span className="cursor-pointer hover:font-bold hover:text-black transition-colors ml-1">Tshirts</span> / 
          <span className="font-bold text-black ml-1">{product.brand} Tshirts</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left: Image Grid (58%) */}
          <div className="lg:w-[58%] w-full">
            <div className="grid grid-cols-2 gap-2">
               {[1, 2, 3, 4, 5].map((item, index) => (
                 <div key={index} className="aspect-[4/5] overflow-hidden bg-gray-50 cursor-zoom-in group">
                    <img 
                      src={product.image} 
                      alt={`View ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105" 
                    />
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Product Info (Sticky) (42%) */}
          <div className="flex-1 relative">
             <div className="sticky top-24 pl-0 lg:pl-4">
                {/* Header Info */}
                <h1 className="text-[24px] font-bold text-[#282c3f] mb-1 leading-tight tracking-wide uppercase">{product.brand}</h1>
                <p className="text-[20px] text-[#535665] font-normal mb-4 leading-normal">{product.name}</p>

                {/* Rating Box */}
                <div className="inline-flex items-center gap-2 border border-[#eaeaec] bg-white bg-opacity-80 rounded-[2px] px-2 py-1 mb-5 cursor-pointer hover:border-[#282c3f] transition-all group shadow-sm">
                    <span className="text-[14px] font-bold text-[#282c3f] flex items-center gap-1 group-hover:text-black">
                        {product.rating} <Star className="w-3.5 h-3.5 text-teal-500 fill-teal-500" />
                    </span>
                    <div className="w-[1px] h-3 bg-[#d4d5d9] group-hover:bg-[#282c3f]"></div>
                    <span className="text-[14px] text-[#535665] group-hover:text-black">{product.ratingCount} Ratings</span>
                </div>

                <div className="h-[1px] w-full bg-[#d4d5d9] mb-5"></div>

                {/* Price */}
                <div className="mb-6">
                    <div className="flex items-baseline gap-3 mb-1">
                        <span className="text-[24px] font-bold text-[#282c3f]">Rs. {product.price}</span>
                        {product.originalPrice && (
                            <>
                                <span className="text-[20px] text-[#94969f] line-through font-normal">Rs. {product.originalPrice}</span>
                                <span className="text-[20px] text-[#ff905a] font-bold">({product.discount} OFF)</span>
                            </>
                        )}
                    </div>
                    <p className="text-[12px] text-[#03a685] font-bold tracking-wide mt-1">inclusive of all taxes</p>
                </div>

                <div className="mb-8">
                    <h4 className="text-[14px] font-bold text-[#282c3f] mb-4 uppercase tracking-widest flex items-center justify-between">
                      More Colors
                      <span className="text-[12px] font-semibold text-gray-500 lowercase tracking-normal">2 colors</span>
                    </h4>
                    <div className="flex gap-3">
                        {[1, 2].map((_, idx) => (
                             <div key={idx} className="w-16 h-20 overflow-hidden cursor-pointer border border-transparent hover:border-[#282c3f] p-[1px] rounded-[2px] transition-all">
                                <img src={product.image} className="w-full h-full object-cover" />
                             </div>
                        ))}
                    </div>
                </div>

                {/* Size Selector */}
                <div className="mb-8">
                     <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[14px] font-bold text-[#282c3f] uppercase tracking-widest">Select Size</h4>
                        <span className="text-[13px] font-semibold text-[#ff3f6c] cursor-pointer hover:underline flex items-center gap-1 uppercase tracking-wide">
                            Size Chart <span className="text-[10px]">&gt;</span>
                        </span>
                     </div>
                     <div className="flex gap-3 flex-wrap">
                        {sizes.map((size) => (
                             <button 
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-12 h-12 rounded-full border text-[14px] font-bold flex items-center justify-center transition-all duration-200
                                    ${selectedSize === size 
                                        ? 'border-[#ff3f6c] text-[#ff3f6c] bg-white shadow-sm ring-1 ring-[#ff3f6c]' 
                                        : 'border-[#bfc0c6] text-[#282c3f] hover:border-[#ff3f6c] hover:shadow-sm'}`}
                             >
                                 {size}
                             </button>
                        ))}
                     </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-8">
                     <Button className="flex-[1.5] bg-primary hover:bg-accent text-white font-bold h-14 rounded-[4px] text-[16px] uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-all duration-200">
                         <ShoppingBag className="w-5 h-5 fill-white" />
                         Add to Bag
                     </Button>
                     <Button variant="outline" className="flex-1 border-[#d4d5d9] hover:border-[#282c3f] text-black font-bold h-14 rounded-[4px] text-[16px] uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 bg-white hover:bg-secondary">
                         <Heart className="w-5 h-5" />
                         Wishlist
                     </Button>
                </div>

                <div className="border-t border-[#d4d5d9] pt-6 mb-4"></div>

                {/* Delivery Options */}
                <div className="mb-6">
                     <h4 className="text-[14px] font-bold text-[#282c3f] mb-4 flex items-center gap-3 uppercase tracking-widest">
                        Delivery Options <Truck className="w-5 h-5 text-gray-400 stroke-[1.5]" />
                     </h4>
                     <div className="flex items-center justify-between border border-[#d4d5d9] p-3 rounded-[4px] w-full max-w-[300px] mb-2 focus-within:border-[#282c3f] transition-colors">
                        <input type="text" placeholder="Enter pincode" className="outline-none text-[14px] text-[#282c3f] placeholder-gray-400 w-full bg-transparent" />
                        <span className="text-[13px] font-bold text-[#ff3f6c] cursor-pointer hover:opacity-80">Check</span>
                     </div>
                     <p className="text-[12px] text-[#696e79] mt-1">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                </div>
                
                <div className="space-y-3 mt-6">
                    <p className="text-[15px] text-[#282c3f] font-normal flex items-center gap-3">
                         <div className="w-8 flex justify-center"><img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902451-Original.png" className="h-6 w-auto opacity-70" /></div>
                         100% Original Products
                    </p>
                    <p className="text-[15px] text-[#282c3f] font-normal flex items-center gap-3">
                        <div className="w-8 flex justify-center"><img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-412f-bbbd-2fed291300a31574602902427-30-days-return.png" className="h-6 w-auto opacity-70" /></div>
                        Pay on delivery might be available
                    </p>
                    <p className="text-[15px] text-[#282c3f] font-normal flex items-center gap-3">
                        <div className="w-8 flex justify-center"><img src="https://constant.myntassets.com/web/assets/img/c54b99e3-e737-4380-aa46-1198c47915171574602902476-Truck.png" className="h-6 w-auto opacity-70" /></div>
                        Easy 14 days returns and exchanges
                    </p>
                </div>

             </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <SimilarProducts />

      </div>
      <Footer />
    </div>
  );
}
