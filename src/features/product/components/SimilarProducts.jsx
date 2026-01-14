import React from 'react';
import { ProductCard } from './ProductCard';
import { defaultTshirts } from './ProductGrid';

export function SimilarProducts() {
  return (
    <div className="mt-20">
        <h3 className="text-[16px] font-bold text-[#282c3f] uppercase mb-6 tracking-widest pl-1">Similar Products</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 lg:gap-6">
            {defaultTshirts.slice(0, 12).map((item) => (
                <ProductCard key={item.id} product={item} />
            ))}
        </div>
    </div>
  );
}
