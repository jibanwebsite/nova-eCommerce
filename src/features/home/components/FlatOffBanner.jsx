export function FlatOffBanner() {
  return (
    <div className="w-full bg-white py-4 md:py-8 flex items-center justify-center overflow-hidden">
      <div className="flat-offer-banner w-full max-w-[95%] md:max-w-[1240px] h-auto py-10 md:py-16 px-6 md:px-14 flex flex-col md:flex-row items-center justify-center md:justify-around gap-6 md:gap-10 mx-auto">
         
         <div className="flex-1 flex justify-center md:justify-end">
            <h2 className="text-[55px] md:text-[90px] font-black text-[#002335] tracking-tight text-center md:text-right leading-[0.9] flex items-start">
              FLAT ₹300 <br className="md:hidden"/> OFF
              <span className="text-4xl md:text-6xl mt-2 ml-1">*</span>
            </h2>
         </div>
         
         <div className="flex-1 flex justify-center md:justify-start">
             <div className="bg-[#fee65c] shadow-[4px_4px_0px_rgba(0,0,0,0.1)] px-8 py-3 md:px-12 md:py-5 border-none transform rotate-1">
                 <div className="text-center">
                    <p className="text-sm md:text-lg font-bold text-[#002335] uppercase tracking-[0.2em] leading-none mb-2">USE CODE:</p>
                    <p className="text-4xl md:text-5xl font-black text-[#002335] tracking-wide leading-none">NOVA300</p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
}
