import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Smartphone, CheckCircle, RotateCcw } from 'lucide-react';
import PrimaryLogo from '@/assets/Nova Apparels FInal Logo/SVG/Primary Logo.svg';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10 font-sans text-[#282c3f]">
      
      {/* App Download Banner */}
      <div className="bg-[#fcf8ed] py-8 px-4 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 overflow-hidden relative">
         <div className="flex flex-col items-center md:items-start text-center md:text-left z-10">
             <h2 className="text-[26px] font-bold tracking-wide mb-2 flex items-center md:items-start gap-3">
                MORE KNOCKOUT OFFERS WAITING!
             </h2>
             <div className="text-[20px] font-medium flex items-center gap-2 mb-6 justify-center md:justify-start">
                Only On The 
                <img src={PrimaryLogo} alt="Nova Apparels" className="h-[28px] w-auto inline-block mx-1" />
                App
             </div>
             
             <button className="bg-white border border-gray-300 px-6 py-2.5 rounded shadow-sm text-[16px] font-bold uppercase tracking-wide text-gray-700 hover:shadow-md transition-shadow mb-6 md:mb-0 md:hidden">
                Download Now
             </button>

             <div className="hidden md:flex gap-4">
                 <div className="bg-black text-white px-3 py-1.5 rounded-md flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors border border-gray-600 w-[140px]">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path d="M3.609 1.814L13.792 12 3.61 22.186c-.184-.132-.338-.306-.437-.514-.148-.308-.224-.652-.224-1V3.328c0-.348.076-.692.224-1 .099-.208.253-.382.437-.514zM15.42 13.628l-1.628-1.628 4.27-4.27c.433.242.7.697.7 1.198 0 .502-.267.956-.7 1.198l-2.642 3.502zm-3.256-3.256l-10-10C2.651.558 3.284.978 3.284 3.328v17.344c0 2.35-.633 2.77-1.12 2.956l10-10zm4.884-3.256l-2.642-3.502c.433.242.7.697.7 1.198 0 .502-.267.956-.7 1.198l2.642 1.106z"/></svg>
                    <div className="flex flex-col leading-none">
                        <span className="text-[8px] font-medium uppercase text-gray-400">Get it on</span>
                        <span className="text-[14px] font-bold">Google Play</span>
                    </div>
                 </div>
                 <div className="bg-black text-white px-3 py-1.5 rounded-md flex items-center gap-2 cursor-pointer hover:bg-gray-800 transition-colors border border-gray-600 w-[140px]">
                    <svg viewBox="0 0 384 512" fill="currentColor" className="w-6 h-6"><path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-11.4 69.5-34.3z"/></svg>
                    <div className="flex flex-col leading-none">
                        <span className="text-[8px] font-medium uppercase text-gray-400">Download on the</span>
                        <span className="text-[14px] font-bold">App Store</span>
                    </div>
                 </div>
             </div>
         </div>
         
         <div className="hidden md:block w-[300px] relative">
             {/* Phone Mockup Placeholder */}
             <div className="relative mx-auto border-gray-800 bg-gray-800 border-[8px] rounded-[2.5rem] h-[300px] w-[170px] shadow-xl flex items-center justify-center overflow-hidden">
                 <div className="h-[32px] w-[3px] bg-gray-800 absolute -left-[10px] top-[72px] rounded-l-lg"></div>
                 <div className="h-[46px] w-[3px] bg-gray-800 absolute -left-[10px] top-[124px] rounded-l-lg"></div>
                 <div className="h-[64px] w-[3px] bg-gray-800 absolute -right-[10px] top-[142px] rounded-r-lg"></div>
                 <div className="rounded-[2rem] overflow-hidden w-full h-full bg-white flex flex-col pt-4">
                     {/* Screen Content */}
                     <div className="w-full flex justify-between px-3 mb-2">
                        <div className="w-8 h-1 bg-gray-200 rounded"></div>
                        <div className="w-4 h-4 rounded-full bg-gray-200"></div>
                     </div>
                     <div className="flex-1 bg-gray-50 flex flex-col items-center justify-center gap-2">
                        <img src={PrimaryLogo} className="w-16 h-auto opacity-80" />
                        <span className="text-[10px] font-bold text-gray-400">SHOP NOW</span>
                     </div>
                     <div className="h-10 bg-white border-t border-gray-100 flex justify-around items-center px-2">
                         <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                         <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                         <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                         <div className="w-4 h-4 bg-gray-200 rounded-full"></div>
                     </div>
                 </div>
             </div>
         </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-[1200px] mx-auto px-5 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-[14px]">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[12px] uppercase mb-4 tracking-wide text-[#282c3f]">Online Shopping</h4>
              {['Men', 'Women', 'Kids', 'Home & Living', 'Beauty', 'Gift Cards', 'Myntra Insider'].map(item => (
                  <a key={item} href="#" className="text-[#696b79] hover:text-[#282c3f] hover:font-semibold no-underline pb-1 transition-colors">{item}</a>
              ))}
              
              <h4 className="font-bold text-[12px] uppercase mb-4 mt-6 tracking-wide text-[#282c3f]">Useful Links</h4>
              {['Blog', 'Careers', 'Site Map', 'Corporate Information', 'Whitehat', 'Cleartrip'].map(item => (
                   <a key={item} href="#" className="text-[#696b79] hover:text-[#282c3f] hover:font-semibold no-underline pb-1 transition-colors">{item}</a>
              ))}
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-1">
              <h4 className="font-bold text-[12px] uppercase mb-4 tracking-wide text-[#282c3f]">Customer Policies</h4>
              {['Contact Us', 'FAQ', 'T&C', 'Terms Of Use', 'Track Orders', 'Shipping', 'Cancellation', 'Returns', 'Privacy policy', 'Grievance Redressal'].map(item => (
                  <a key={item} href="#" className="text-[#696b79] hover:text-[#282c3f] hover:font-semibold no-underline pb-1 transition-colors">{item}</a>
              ))}
          </div>

          {/* Column 3 + 4 (merged visually on larger screens usually, but we'll stick to grid) */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Mobile App Links Repetition (Small) */}
              <div className="flex flex-col">
                   <h4 className="font-bold text-[12px] uppercase mb-4 tracking-wide text-[#282c3f]">Experience Nova App on Mobile</h4>
                   <div className="flex gap-2">
                        <img src="https://constant.myntassets.com/web/assets/img/80cc455a-92d2-4b5c-a038-7da0d92af33f1539674178924-google_play.png" alt="Google Play" className="h-[42px] cursor-pointer" />
                        <img src="https://constant.myntassets.com/web/assets/img/bc5e11ad-0250-420a-ac71-115a57ca35d51539674178941-apple_store.png" alt="App Store" className="h-[42px] cursor-pointer" />
                   </div>
                   
                   <h4 className="font-bold text-[12px] uppercase mb-3 mt-6 tracking-wide text-[#282c3f]">Keep in touch</h4>
                   <div className="flex gap-3">
                       <Facebook className="w-5 h-5 text-gray-500 hover:text-gray-800 cursor-pointer" />
                       <Twitter className="w-5 h-5 text-gray-500 hover:text-gray-800 cursor-pointer" />
                       <Youtube className="w-5 h-5 text-gray-500 hover:text-red-600 cursor-pointer" />
                       <Instagram className="w-5 h-5 text-gray-500 hover:text-primary cursor-pointer" />
                   </div>
              </div>

              {/* Guarantees */}
              <div className="col-span-2 flex flex-col gap-4 pl-0 md:pl-10">
                   <div className="flex items-start gap-3">
                       <div className="w-12 h-12 min-w-[48px] rounded-full flex items-center justify-center">
                           <img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" className="w-full h-full object-contain" alt="Original" />
                       </div>
                       <div>
                           <p className="font-bold text-[#282c3f] mt-1">100% ORIGINAL</p>
                           <p className="text-[#696b79] text-sm">guarantee for all products at myntra.com</p>
                       </div>
                   </div>
                   <div className="flex items-start gap-3">
                       <div className="w-12 h-12 min-w-[48px] rounded-full flex items-center justify-center">
                            <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" className="w-10 h-10 object-contain mx-auto" alt="Return" />
                       </div>
                       <div>
                           <p className="font-bold text-[#282c3f] mt-1">Return within 14days</p>
                           <p className="text-[#696b79] text-sm">of receiving your order</p>
                       </div>
                   </div>
              </div>
          </div>
      </div>
      
      {/* Popular Searches */}
      <div className="max-w-[1200px] mx-auto px-5 mb-8">
         <h4 className="font-bold text-[12px] uppercase mb-2 tracking-wide text-[#282c3f]">Popular Searches</h4>
         <p className="text-[#696b79] text-sm leading-relaxed">
            Makeup | Dresses For Girls | T-Shirts | Sandals | Headphones | Babydolls | Blazers For Men | Handbags | Ladies Watches | Bags | Sport Shoes | Reebok Shoes | Puma Shoes | Boxers | Wallets | Tops | Earrings | Fastrack Watches | Kurtis | Nike | Smart Watches | Titan Watches | Designer Blouse | Gowns | Rings | Cricket Shoes | Forever 21 | Eye Makeup | Photo Frames | Punjabi Suits | Bikini | Myntra Fashion Show | Lipstick | Saree | Watches | Dresses | Lehenga | Nike Shoes | Goggles | Bras | Suit | Chinos | Shoes | Adidas Shoes | Woodland Shoes | Jewellery | Designers Sarees
         </p>
      </div>

       {/* Copyright */}
       <div className="max-w-[1200px] mx-auto px-5 py-4 flex flex-col md:flex-row justify-between items-center border-t border-gray-200 text-sm text-[#696b79]">
          <p>In case of any concern, <span className="font-bold text-primary">Contact Us</span></p>
          <p>© 2026 www.nova.com. All rights reserved.</p>
       </div>

    </footer>
  );
}
