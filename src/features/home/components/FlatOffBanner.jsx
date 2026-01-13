export function FlatOffBanner() {
  return (
    <div className="w-full bg-white py-12 flex items-center justify-center overflow-hidden">
      <div className="sawtooth-banner w-full max-w-[95%] md:max-w-[1240px] h-auto py-8 md:py-14 px-4 md:px-12 flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 md:gap-20 mx-auto shadow-sm">
         
         <div className="flex-1 flex justify-center md:justify-end">
            <h2 className="text-5xl md:text-[85px] font-extrabold text-[#282C3F] tracking-tight text-center md:text-right leading-none">
              FLAT ₹300 OFF<span className="align-top text-3xl md:text-5xl ml-2 font-bold">*</span>
            </h2>
         </div>
         
         <div className="flex-1 flex justify-center md:justify-start">
             <div className="bg-[#F7EFA1] px-8 py-3 md:px-10 md:py-4 border-none">
                 <div className="text-center">
                    <p className="text-xs md:text-lg font-bold text-gray-800 uppercase tracking-widest leading-none mb-2">USE CODE:</p>
                    <p className="text-3xl md:text-4xl font-extrabold text-[#282C3F] tracking-wide leading-none">MYNTRA300</p>
                 </div>
             </div>
         </div>
      </div>
    </div>
  );
}
