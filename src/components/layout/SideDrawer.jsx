import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';
import { ChevronRight, BadgeCheck, RefreshCcw, Truck } from 'lucide-react';

export function SideDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div 
      className={`fixed top-2/3 right-0 transform -translate-y-1/2 z-50 flex h-[280px] md:h-[320px] transition-transform duration-500 ease-out shadow-2xl ${isDrawerOpen ? 'translate-x-0' : 'translate-x-[calc(100%-40px)] md:translate-x-[calc(100%-45px)]'}`}
      style={{ width: 'auto' }}
    >
        {/* Handle */}
        <div 
          onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          className="bg-brand-gradient text-white flex flex-col items-center pt-4 cursor-pointer gap-5 hover:bg- w-[40px] md:w-[45px] h-full shadow-[-4px_0_15px_rgba(0,0,0,0.15)] relative z-20"
        >
            <div className="flex-shrink-0">
               <ChevronRight className={`w-6 h-6 transform transition-transform duration-300 ${isDrawerOpen ? 'rotate-180' : 'rotate-0'}`} />
            </div>
            <div className="flex-1 flex items-center justify-center pb-3 w-full">
                <span className="writing-mode-vertical-rl transform rotate-180 text-[20px] font-bold tracking-[0.2em] uppercase whitespace-nowrap" style={{ writingMode: 'vertical-rl' }}>
                    UPTO ₹300 OFF
                </span>
            </div>
        </div>

        {/* Drawer Content */}
        <div 
            className="w-[280px] max-w-[80vw] md:w-[520px] md:max-w-none bg-brand-gradient h-full flex flex-col relative overflow-hidden font-sans border-l border-white/50"
        >
             {/* Main Content */}
             <div className="flex-1 px-6 py-6 relative z-10 w-full flex flex-col justify-between">
                 
                 {/* Top Section */}
                 <div className="flex w-full relative">
                     {/* Left: Offer Text */}
                     <div className="flex flex-col items-start pt-2 z-10 mt-4 md:mt-0">
                        <span className="text-[#3e4152] text-[10px] md:text-[12px] font-bold mb-1">Avail Upto</span>
                        <h2 className="text-[24px] md:text-[52px] leading-none font-bold text-[#3e4152] tracking-tighter">300 OFF</h2>
                     </div>

                     {/* Right: Image & Badge */}
                     <div className="absolute right-[-10px] top-[-10px] pointer-events-none">
                         {/* Badge Card */}
                         <div className="absolute right-[60px] top-[30px] md:right-[100px] md:top-[40px] z-20 bg-gradient-to-r from-accent to-primary text-white p-2 rounded-[4px] shadow-sm flex flex-col items-start w-[80px] md:w-[100px] justify-center pl-2 md:pl-3 py-1.5 md:py-2">
                              <div className="absolute top-1 right-2 text-white/90 text-[8px]">✦</div>
                              <span className="text-[8px] md:text-[10px] font-bold uppercase leading-none mb-0.5">FLAT</span>
                              <span className="text-[14px] md:text-[18px] font-bold leading-none">₹300 OFF</span>
                              <div className="absolute bottom-1 right-2 text-white/90 text-[8px]">✦</div>
                         </div>
                         
                         {/* Image */}
                         <img 
                            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=400&auto=format&fit=crop" 
                            alt="Fashion" 
                            className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-full mix-blend-multiply opacity-100 relative z-10 left-[10px]"
                         />
                     </div>
                 </div>

                 {/* Bottom Section: Coupon & Button */}
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-end w-full pr-1 mt-auto gap-4 md:gap-0">
                     <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1.5">
                            <span className="text-[#3e4152] text-[11px] md:text-[13px] font-bold">Coupon Code:</span>
                            <span className="text-[#3e4152] font-bold text-[11px] md:text-[15px]">MYNTRA300</span>
                        </div>
                        <p className="text-[10px] md:text-[11px] text-[#94969f]">Applicable on your first order</p>
                     </div>
                     
                     <Link to="/login" className="w-full md:w-auto">
                       <Button className="w-full md:w-auto bg-primary text-white font-bold py-2.5 px-6 rounded-[3px] text-[12px] tracking-wide hover:shadow-lg hover:-translate-y-0.5 transition-all uppercase mb-0.5 hover:bg-primary/90 text-center flex justify-center">
                         SIGN UP NOW &gt;
                       </Button>
                     </Link>
                 </div>
             </div>

             {/* Footer Bar */}
             <div className="bg-white/95 backdrop-blur-sm py-3 px-6 flex justify-between border-t border-gray-100 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] z-30 relative items-center">
                <div className="flex flex-col items-center gap-1.5 group cursor-default flex-1">
                  <div className="p-1.5 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                    <BadgeCheck className="w-4 h-4 text-[#49A249] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[9px] md:text-[10px] text-gray-600 font-bold text-center leading-tight tracking-wide uppercase">Genuine<br/>Products</span>
                </div>
                
                <div className="w-[1px] h-8 bg-gray-100"></div>

                <div className="flex flex-col items-center gap-1.5 group cursor-default flex-1">
                  <div className="p-1.5 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                    <Truck className="w-4 h-4 text-[#49A249] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[9px] md:text-[10px] text-gray-600 font-bold text-center leading-tight tracking-wide uppercase">Try &<br/>Buy</span>
                </div>

                <div className="w-[1px] h-8 bg-gray-100"></div>

                 <div className="flex flex-col items-center gap-1.5 group cursor-default flex-1">
                  <div className="p-1.5 rounded-full bg-green-50 group-hover:bg-green-100 transition-colors">
                    <RefreshCcw className="w-4 h-4 text-[#49A249] group-hover:scale-110 transition-transform" />
                  </div>
                  <span className="text-[9px] md:text-[10px] text-gray-600 font-bold text-center leading-tight tracking-wide uppercase">Easy<br/>Returns</span>
                </div>
             </div>
        </div>
    </div>
  );
}
