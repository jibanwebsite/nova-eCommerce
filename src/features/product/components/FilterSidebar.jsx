import { Search } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export function FilterSidebar() {
  return (
    <div className="flex flex-col pr-4">
       {/* Header */}
       <div className="flex justify-between items-center py-4 border-b border-gray-200">
           <span className="font-bold text-[16px] text-[#282c3f]">FILTERS</span>
           <span className="text-[12px] font-bold text-primary cursor-pointer hover:underline">CLEAR ALL</span>
       </div>

       {/* Categories Section */}
       <div className="py-5 border-b border-gray-100">
          <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold text-[14px] text-[#282c3f] uppercase tracking-wide">Categories</h3>
             <div className="bg-gray-100 rounded-full p-1.5 cursor-pointer hover:bg-gray-200">
               <Search className="w-3.5 h-3.5 text-gray-500" />
             </div>
          </div>
          <div className="flex flex-col gap-2">
             <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="accent-[#ff3f6c] w-4 h-4 border-gray-300 rounded cursor-pointer" defaultChecked />
                <span className="text-[14px] text-[#282c3f] group-hover:text-black">Tshirts</span>
                <span className="text-[11px] text-[#94969f] font-normal">(12093)</span>
             </label>
             <label className="flex items-center gap-3 cursor-pointer group">
                <input type="checkbox" className="accent-[#ff3f6c] w-4 h-4 border-gray-300 rounded cursor-pointer" />
                <span className="text-[14px] text-[#282c3f] group-hover:text-black">Lounge Tshirts</span>
                <span className="text-[11px] text-[#94969f] font-normal">(452)</span>
             </label>
          </div>
       </div>

       {/* Brand Section */}
       <div className="py-5 border-b border-gray-100">
          <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold text-[14px] text-[#282c3f] uppercase tracking-wide">Brand</h3>
             <div className="bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200 transition-colors">
               <Search className="w-3.5 h-3.5 text-gray-500" />
             </div>
          </div>
          <div className="flex flex-col gap-2 max-h-48 overflow-y-auto pr-1">
             {['Roadster', 'HRX by Hrithik Roshan', 'Tommy Hilfiger', 'Levis', 'Puma', 'WROGN', 'U.S. Polo Assn.', 'Nike'].map((brand, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                   <input type="checkbox" className="accent-primary w-4 h-4 border-gray-300 rounded cursor-pointer" />
                   <span className="text-[14px] text-[#282c3f] group-hover:text-black truncate">{brand}</span>
                   <span className="text-[11px] text-[#94969f] font-normal">({Math.floor(Math.random() * 5000)})</span>
                </label>
             ))}
             <Button variant="link" className="text-primary text-[12px] font-bold text-left mt-1 hover:underline p-0 h-auto justify-start font-sans">
                + 879 more
             </Button>
          </div>
       </div>

       {/* Price Section */}
       <div className="py-5 border-b border-gray-100">
          <h3 className="font-bold text-[14px] text-[#282c3f] uppercase tracking-wide mb-4">Price</h3>
          <div className="flex flex-col gap-2">
             {['Rs. 179 to Rs. 2459', 'Rs. 2459 to Rs. 4739', 'Rs. 4739 to Rs. 7019', 'Rs. 7019 to Rs. 9299'].map((price, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                   <input type="checkbox" className="accent-primary w-4 h-4 border-gray-300 rounded cursor-pointer" />
                   <span className="text-[14px] text-[#282c3f] group-hover:text-black">{price}</span>
                   <span className="text-[11px] text-[#94969f] font-normal">({Math.floor(Math.random() * 10000)})</span>
                </label>
             ))}
          </div>
       </div>

       {/* Color Section */}
       <div className="py-5 border-b border-gray-100">
          <div className="flex justify-between items-center mb-4">
             <h3 className="font-bold text-[14px] text-[#282c3f] uppercase tracking-wide">Color</h3>
             <div className="bg-gray-100 rounded-full p-2 cursor-pointer hover:bg-gray-200 transition-colors">
               <Search className="w-3.5 h-3.5 text-gray-500" />
             </div>
          </div>
          <div className="flex flex-col gap-2">
             {[
               {name: 'Blue', color: '#3b82f6'},
               {name: 'Black', color: '#000000'},
               {name: 'White', color: '#f3f4f6', border: true},
               {name: 'Navy Blue', color: '#1e3a8a'},
               {name: 'Green', color: '#22c55e'},
               {name: 'Red', color: '#ef4444'},
               {name: 'Grey', color: '#6b7280'}
             ].map((item, idx) => (
                <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                   <input type="checkbox" className="accent-primary w-4 h-4 border-gray-300 rounded cursor-pointer" />
                   <div 
                     className={`w-3.5 h-3.5 rounded-full ${item.border ? 'border border-gray-300' : ''}`}
                     style={{ backgroundColor: item.color }}
                   ></div>
                   <span className="text-[14px] text-[#282c3f] group-hover:text-black">{item.name}</span>
                   <span className="text-[11px] text-[#94969f] font-normal">({Math.floor(Math.random() * 5000)})</span>
                </label>
             ))}
          </div>
       </div>

    </div>
  );
}
