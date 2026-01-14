import { Star, Heart, Layers } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function ProductCard({ product }) {
  if (!product) return null;

  return (
    <Link to={`/product/${product.id}`} target="_blank" rel="noopener noreferrer" className="group flex flex-col cursor-pointer bg-white mb-2 relative w-full overflow-hidden block">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-gray-100 mb-2">
         <img 
           src={product.image} 
           alt={product.name} 
           className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
         />
         
         {/* Rating Badge */}
         {product.rating && (
           <div className="absolute bottom-2 left-2 bg-white/90 backdrop-blur-[2px] px-1.5 py-0.5 rounded-[2px] flex items-center gap-1 shadow-sm z-0 group-hover:opacity-0 transition-opacity">
              <span className="font-bold text-[10px] text-gray-800">{product.rating}</span>
              <Star className="w-2.5 h-2.5 text-teal-500 fill-teal-500" />
              <div className="w-[1px] h-2.5 bg-gray-300 mx-0.5"></div>
              <span className="text-[10px] text-gray-500 font-medium">{product.ratingCount}</span>
           </div>
         )}

         {/* HOVER OVERLAY: Dots, Wishlist, Sizes */}
         <div className="absolute bottom-0 left-0 w-full bg-white/95 px-3 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-10 flex flex-col gap-2 shadow-inner">
             {/* Carousel Dots */}
             <div className="flex justify-center gap-1.5 overflow-hidden">
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5e7eb]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5e7eb]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5e7eb]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5e7eb]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5e7eb]"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#e5e7eb]"></div>
            </div>

            {/* Wishlist Button */}
            <Button variant="outline" className="w-full h-9 border-[#d4d5d9] bg-white hover:border-[#535766] hover:text-[#282c3f] text-[13px] font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-colors rounded-[2px]" onClick={(e) => e.preventDefault()}>
                <Heart className="w-4 h-4" />
                WISHLIST
            </Button>

            {/* Sizes */}
            <p className="text-[13px] text-[#535766] truncate text-center">
              Sizes: <span className="text-[#535766]">{product.sizes || 'S, M, L, XL'}</span>
            </p>
         </div>
      </div>

      {/* Static Content Below */}
      <div className="px-2 pb-2 bg-white flex flex-col gap-0.5 relative z-20">
          <h3 className="font-bold text-[16px] text-[#282c3f] leading-tight truncate">{product.brand}</h3>
          <p className="text-[14px] text-[#535766] truncate font-normal">{product.name}</p>
         
          <div className="flex items-center gap-2 text-[14px] leading-tight mt-0.5">
             <span className="font-bold text-[#282c3f]">Rs. {product.price}</span>
             {product.originalPrice && (
               <>
                 <span className="text-[12px] text-[#7e818c] line-through decoration-[#7e818c] font-normal">Rs. {product.originalPrice}</span>
                 <span className="text-[12px] text-[#ff905a] font-normal">({product.discount} OFF)</span>
               </>
             )}
          </div>
      </div>
    </Link>
  );

}
