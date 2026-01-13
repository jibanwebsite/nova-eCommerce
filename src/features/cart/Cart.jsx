import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

export function Cart() {
  return (
    <div className="min-h-screen bg-white">
      {/* Checkout Header */}
      <header className="border-b border-gray-200 py-4 sticky top-0 bg-white z-50">
        <div className="container mx-auto px-4 md:px-10 flex items-center justify-between">
            {/* Logo */}
            <Link to="/">
              <svg width="40" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="cursor-pointer">
                 <path d="M12.0002 4.0002L16.2202 12.0002L20.4402 4.0002H23.6002L17.2002 16.0002L12.0002 20.0002L6.8002 16.0002L0.400195 4.0002H3.5602L7.7802 12.0002L12.0002 4.0002Z" fill="#fd2f24"/>
                 <path d="M12.0002 4.0002L7.7802 12.0002L3.5602 4.0002" fill="#f48e2a"/> 
                 <path d="M12.0002 4.0002L16.2202 12.0002L20.4402 4.0002" fill="#d53867"/>
              </svg>
            </Link>

            {/* Steps */}
            <div className="hidden md:flex items-center gap-2 text-xs font-bold tracking-widest uppercase">
                <span className="text-green-500 border-b-2 border-green-500 pb-1">Bag</span>
                <span className="text-gray-400 mx-2">----------</span>
                <span className="text-gray-400">Address</span>
                <span className="text-gray-400 mx-2">----------</span>
                <span className="text-gray-400">Payment</span>
            </div>

            {/* Secure Badge */}
            <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-green-500 fill-green-100" />
                <span className="text-xs font-bold text-gray-600 tracking-wider">100% SECURE</span>
            </div>
        </div>
      </header>

      {/* Main Content - Empty State */}
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-12">
         {/* Bag Illustration */}
         <div className="mb-8 opacity-90">
             <svg width="120" height="150" viewBox="0 0 120 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bag Body */}
                <path d="M20 50L100 50L110 140H10L20 50Z" fill="#fff5f5" stroke="#fd2f24" strokeWidth="2" strokeLinejoin="round"/>
                {/* Bag Handle */}
                <path d="M40 50V30C40 20 48 10 60 10C72 10 80 20 80 30V50" stroke="#555" strokeWidth="2" strokeLinecap="round"/>
                {/* Wind Lines */}
                <path d="M10 80H1" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M8 88H3" stroke="#888" strokeWidth="1.5" strokeLinecap="round"/>
                {/* Flying Paper/Dust */}
                <circle cx="15" cy="70" r="1.5" fill="#888"/>
             </svg>
         </div>

         <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Hey, it feels so light!</h3>
            <p className="text-sm text-gray-500">There is nothing in your bag. Let's add some items.</p>
         </div>

         <Link to="/wishlist" className="border border-primary text-primary font-bold px-6 py-3.5 text-xs rounded-[2px] hover:bg-primary/5 transition-colors uppercase tracking-wide">
            Add items from wishlist
         </Link>
      </div>
      
      {/* Footer / Payment Icons Placeholder */}
      <footer className="border-t border-gray-100 py-6 mt-auto sticky top-[100vh] bg-white">
         <div className="container mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
             <div className="flex flex-wrap items-center gap-2">
                 {/* SSL Badge */}
                 <div className="h-8 w-14 border border-gray-200 rounded-[2px] flex flex-col items-center justify-center p-1">
                     <ShieldCheck className="w-3 h-3 text-gray-400" strokeWidth={2} />
                     <span className="text-[6px] font-bold text-gray-500 leading-none mt-0.5">256-bit</span>
                     <span className="text-[6px] font-bold text-gray-500 leading-none">SSL</span>
                 </div>
                 
                 {/* Payment Logos */}
                 {[
                    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/96px-Visa_Inc._logo.svg.png", alt: "Visa" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/96px-Mastercard-logo.svg.png", alt: "Mastercard" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/American_Express_logo.svg/96px-American_Express_logo.svg.png", alt: "Amex" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Diners_Club_Logo3.svg", alt: "Diners" },
                    { src: "https://constant.myntassets.com/checkout/assets/img/footer-bank-cod.png", alt: "COD", fallback: true },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/96px-Rupay-Logo.png", alt: "RuPay" },
                    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/96px-PayPal.svg.png", alt: "PayPal" },
                    { src: "https://upload.wikimedia.org/wikipedia/en/thumb/8/85/BHIM-Logo.png/96px-BHIM-Logo.png", alt: "BHIM" }
                 ].map((logo, idx) => (
                    <div key={idx} className="h-8 w-14 border border-gray-200 rounded-[2px] flex items-center justify-center p-1 bg-white">
                        <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="max-h-full max-w-full object-contain"
                            onError={(e) => {
                                // Fallback for specific Myntra assets if they break/don't exist publicly
                                if (logo.fallback) {
                                  e.target.style.display = 'none';
                                  e.target.parentElement.innerText = logo.alt;
                                  e.target.parentElement.className += " text-[8px] font-bold text-gray-500 text-center leading-tight";
                                }
                            }}
                        />
                    </div>
                 ))}
             </div>
             
             <div>
                <span className="text-sm font-bold text-gray-700">Need Help ? </span>
                <Link to="/contact" className="text-sm font-bold text-gray-700 hover:text-black">
                   Contact Us
                </Link>
             </div>
         </div>
      </footer>
    </div>
  );
}