import { Header } from '@/components/layout/Header';
import { Link } from 'react-router-dom';

export function Wishlist() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
        <h2 className="text-xl font-bold tracking-wide text-gray-800 mb-2 mt-[-50px]">PLEASE LOG IN</h2>
        <p className="text-gray-500 text-base mb-10">Login to view items in your wishlist.</p>
        
        {/* Wishlist Icon Graphic */}
        <div className="relative mb-8">
           <svg width="100" height="120" viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Card Outline */}
              <rect x="15" y="10" width="70" height="90" rx="4" stroke="#8de0d8" strokeWidth="2" strokeDasharray="6 6" fill="#fcfcfc" />
              
              {/* Plus Sign */}
              <path d="M50 45V65M40 55H60" stroke="#fba94b" strokeWidth="4" strokeLinecap="round" />
              
              {/* Sparkles */}
              <path d="M25 25L27 20L29 25L34 27L29 29L27 34L25 29L20 27L25 25Z" fill="#ffecbf" />
              <path d="M75 85L77 80L79 85L84 87L79 89L77 94L75 89L70 87L75 85Z" fill="#ffecbf" />
           </svg>
           {/* Add a generic colored background blob if needed, but keeping it simple first */}
        </div>

        <Link to="/login" className="border border-blue-600 text-blue-600 font-bold px-12 py-3 rounded-[2px] text-sm hover:bg-blue-50 transition-colors tracking-wider">
          LOGIN
        </Link>
      </div>
    </div>
  );
}
