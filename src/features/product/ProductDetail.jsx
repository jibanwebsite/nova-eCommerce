import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingBag, Truck, Check } from 'lucide-react';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/Button';
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
      
      <div className="pt-24 max-w-[1600px] mx-auto px-5 mb-10">
        {/* Breadcrumbs */}
        <div className="text-[14px] text-gray-900 mb-4">
          <span className="cursor-pointer hover:font-bold">Home</span> / 
          <span className="cursor-pointer hover:font-bold ml-1">Clothing</span> / 
          <span className="cursor-pointer hover:font-bold ml-1">Men Clothing</span> / 
          <span className="cursor-pointer hover:font-bold ml-1">Tshirts</span> / 
          <span className="font-bold ml-1">{product.brand} Tshirts</span>
        </div>

        <div className="flex gap-10">
          {/* Left: Image Grid (60%) */}
          <div className="w-[58%]">
            <div className="grid grid-cols-2 gap-4">
               {/* Simulating multiple angles with the same image for now */}
               {[1, 2, 3, 4, 5].map((item, index) => (
                 <div key={index} className="aspect-[3/4] overflow-hidden bg-gray-100 cursor-zoom-in hover:shadow-sm transition-all">
                    <img src={product.image} alt={`View ${index + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                 </div>
               ))}
            </div>
          </div>

          {/* Right: Product Info (Sticky) (40%) */}
          <div className="flex-1 relative">
             <div className="sticky top-24">
                {/* Header Info */}
                <h1 className="text-[24px] font-bold text-[#282c3f] mb-1">{product.brand}</h1>
                <p className="text-[20px] text-[#535665] font-normal mb-3">{product.name}</p>

                {/* Rating Box */}
                <div className="flex items-center gap-2 border border-[#eaeaec] rounded-[2px] w-fit px-2 py-1 mb-4 cursor-pointer hover:border-black transition-colors">
                    <span className="text-[14px] font-bold text-[#282c3f] flex items-center gap-1">
                        {product.rating} <Star className="w-3 h-3 text-teal-500 fill-teal-500" />
                    </span>
                    <div className="w-[1px] h-3 bg-[#eaeaec]"></div>
                    <span className="text-[14px] text-[#535665]">{product.ratingCount} Ratings</span>
                </div>

                <div className="h-[1px] w-full bg-[#d4d5d9] mb-4"></div>

                {/* Price */}
                <div className="mb-4">
                    <div className="flex items-center gap-3">
                        <span className="text-[24px] font-bold text-[#282c3f]">Rs. {product.price}</span>
                        {product.originalPrice && (
                            <>
                                <span className="text-[20px] text-[#7e818c] line-through font-normal">MRP <span className="line-through">Rs. {product.originalPrice}</span></span>
                                <span className="text-[20px] text-[#ff905a] font-bold">({product.discount} OFF)</span>
                            </>
                        )}
                    </div>
                    <p className="text-[14px] text-[#03a685] font-bold mt-1">inclusive of all taxes</p>
                </div>

                <div className="mb-6">
                    <h4 className="text-[14px] font-bold text-[#282c3f] mb-3 uppercase tracking-wide">MORE COLORS</h4>
                    <div className="flex gap-2">
                        {[1, 2].map((_, idx) => (
                             <div key={idx} className="w-16 h-20 overflow-hidden cursor-pointer border hover:border-black p-[2px] rounded-[2px]">
                                <img src={product.image} className="w-full h-full object-cover" />
                             </div>
                        ))}
                    </div>
                </div>

                {/* Size Selector */}
                <div className="mb-8">
                     <div className="flex justify-between items-center mb-4">
                        <h4 className="text-[14px] font-bold text-[#282c3f] uppercase tracking-wide">SELECT SIZE</h4>
                        <span className="text-[14px] font-bold text-primary cursor-pointer hover:underline flex items-center gap-1">
                            SIZE CHART <span className="text-[10px]">&gt;</span>
                        </span>
                     </div>
                     <div className="flex gap-3 flex-wrap">
                        {sizes.map((size) => (
                             <button 
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`w-12 h-12 rounded-full border text-[14px] font-bold flex items-center justify-center transition-all 
                                    ${selectedSize === size 
                                        ? 'border-primary text-primary bg-white shadow-md' 
                                        : 'border-[#bfc0c6] text-[#282c3f] hover:border-primary'}`}
                             >
                                 {size}
                             </button>
                        ))}
                     </div>
                </div>

                {/* Actions */}
                <div className="flex gap-4 mb-6">
                     <Button className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-14 rounded-[4px] text-[16px] uppercase tracking-wide flex items-center justify-center gap-2">
                         <ShoppingBag className="w-5 h-5 fill-white" />
                         ADD TO BAG
                     </Button>
                     <Button variant="outline" className="flex-1 border-[#d4d5d9] hover:border-[#282c3f] text-[#282c3f] font-bold h-14 rounded-[4px] text-[16px] uppercase tracking-wide flex items-center justify-center gap-2">
                         <Heart className="w-5 h-5" />
                         WISHLIST
                     </Button>
                </div>

                <div className="border-t border-[#d4d5d9] pt-6 mb-4"></div>

                {/* Delivery Options */}
                <div className="mb-4">
                     <h4 className="text-[14px] font-bold text-[#282c3f] mb-4 flex items-center gap-2">
                        DELIVERY OPTIONS <Truck className="w-5 h-5 opacity-60" />
                     </h4>
                     <div className="flex items-center justify-between border border-[#d4d5d9] p-3 rounded-[4px] max-w-xs mb-2">
                        <input type="text" placeholder="Enter pincode" className="outline-none text-[14px] text-[#282c3f] placeholder-gray-400 w-full" />
                        <span className="text-[13px] font-bold text-primary cursor-pointer">Check</span>
                     </div>
                     <p className="text-[12px] text-[#696e79]">Please enter PIN code to check delivery time & Pay on Delivery Availability</p>
                </div>
                
                <div className="space-y-2 mt-4">
                    <p className="text-[14px] text-[#282c3f] flex items-center gap-2">100% Original Products</p>
                    <p className="text-[14px] text-[#282c3f] flex items-center gap-2">Pay on delivery might be available</p>
                    <p className="text-[14px] text-[#282c3f] flex items-center gap-2">Easy 14 days returns and exchanges</p>
                    <p className="text-[14px] text-[#282c3f] flex items-center gap-2">Try & Buy might be available</p>
                </div>

             </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
