import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, ArrowUp } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#141414] text-white font-sans text-[13px] mt-16 pb-8 border-t border-gray-800">
      
      {/* Main Links Section */}
      <div className="max-w-[1240px] mx-auto px-6 py-14 border-b border-gray-800 relative">
          
          {/* Back to Top Button */}
          <button 
            onClick={scrollToTop}
            className="absolute right-6 top-0 -mt-6 md:mt-0 md:top-12 flex flex-col items-center gap-1 group"
          >
             <div className="bg-[#fd2f24] p-3 rounded-full shadow-[0_4px_14px_rgba(253,47,36,0.4)] group-hover:scale-110 transition-all duration-300">
                <ArrowUp className="w-5 h-5 text-white" />
             </div>
             <span className="text-[10px] font-bold tracking-widest uppercase text-gray-400 group-hover:text-white transition-colors">Top</span>
          </button>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 pr-0 cursor-default">
              
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                  <h4 className="font-bold text-[13px] uppercase tracking-widest text-white mb-1">About Nova</h4>
                  <div className="flex flex-col gap-3">
                    {['About Nova', 'Careers', 'Social Impact', 'Affiliates', 'Supply Chain Transparency', 'Sitemap', 'Global Sites'].map(item => (
                        <a key={item} href="#" className="text-gray-400 hover:text-[#fd2f24] hover:pl-1 transition-all duration-300 transform">{item}</a>
                    ))}
                  </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                  <h4 className="font-bold text-[13px] uppercase tracking-widest text-white mb-1">My Nova</h4>
                  <div className="flex flex-col gap-3">
                    {['My Account', 'Order Status', 'Beauty Insider', 'Rewards Bazaar', 'Loves', 'Subscribe Now', 'Flash Unlimited Shipping'].map(item => (
                        <a key={item} href="#" className="text-gray-400 hover:text-[#fd2f24] hover:pl-1 transition-all duration-300 transform">{item}</a>
                    ))}
                  </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-6">
                  <h4 className="font-bold text-[13px] uppercase tracking-widest text-white mb-1">Help & FAQs</h4>
                  <div className="flex flex-col gap-3">
                    {['Online Ordering', 'Shipping', 'Billing', 'Returns & Exchanges', 'International Shipments', 'Customer Service', 'Contact Us'].map(item => (
                        <a key={item} href="#" className="text-gray-400 hover:text-[#fd2f24] hover:pl-1 transition-all duration-300 transform">{item}</a>
                    ))}
                  </div>
              </div>

               {/* Column 4 */}
               <div className="flex flex-col gap-6">
                  <h4 className="font-bold text-[13px] uppercase tracking-widest text-white mb-1">Ways to Shop</h4>
                  <div className="flex flex-col gap-3">
                    {['Just Arrived', 'Bestsellers', 'Beauty Offers', 'Gift Cards', 'Store Locations, Events & Classes', 'Book a Reservation'].map(item => (
                        <a key={item} href="#" className="text-gray-400 hover:text-[#fd2f24] hover:pl-1 transition-all duration-300 transform">{item}</a>
                    ))}
                  </div>
              </div>
          </div>
      </div>

      {/* Social & Newsletter Section */}
      <div className="max-w-[1240px] mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full md:w-auto">
             <div className="text-center sm:text-left">
                <span className="font-bold text-[16px] text-white block">Sign up for Nova Emails</span>
                <span className="text-[12px] text-gray-400">Get the latest news & exclusive offers</span>
             </div>
             <div className="flex w-full sm:w-auto shadow-sm">
                 <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="px-4 py-3 w-full sm:w-[300px] bg-white text-black rounded-l-md focus:outline-none text-[14px]"
                 />
                 <button className="bg-brand-accent text-white font-bold px-8 py-3 rounded-r-md hover:bg-brand-primary transition-colors uppercase tracking-wide text-[10px] md:text-[12px]">
                    Sign Up
                 </button>
             </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#1877F2] transition-colors group"><Facebook className="w-5 h-5 text-gray-300 group-hover:text-white" /></a>
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#1DA1F2] transition-colors group"><Twitter className="w-5 h-5 text-gray-300 group-hover:text-white" /></a>
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#FF0000] transition-colors group"><Youtube className="w-5 h-5 text-gray-300 group-hover:text-white" /></a>
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#E4405F] transition-colors group"><Instagram className="w-5 h-5 text-gray-300 group-hover:text-white" /></a>
               <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-[#0A66C2] transition-colors group"><Linkedin className="w-5 h-5 text-gray-300 group-hover:text-white" /></a>
          </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="max-w-[1240px] mx-auto px-6 text-center border-t border-gray-800 pt-10 flex flex-col gap-5">
          <p className="text-gray-400">© 2026 Nova Apparels Nepal, Inc. All rights reserved.</p>
          
          <div className="flex flex-wrap justify-center gap-6 text-[12px] text-gray-500 font-medium">
              <a href="#" className="hover:text-[#fd2f24] transition-colors">Privacy Policy</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-[#fd2f24] transition-colors">Terms of Use</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-[#fd2f24] transition-colors">Accessibility</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="hover:text-[#fd2f24] transition-colors">Sitemap</a>
          </div>

          <p className="text-gray-500 mt-2 text-[12px] tracking-wide">+977 9800000000 (01400009) | Tel- (01400009)</p>
      </div>

    </footer>
  );
}
