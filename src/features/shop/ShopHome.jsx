import { useParams } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { CategoriesToBag } from './components/CategoriesToBag';
import { ExploreTopBrands } from './components/ExploreTopBrands';
import { Button } from '@/components/ui/Button';
import { ChevronRight } from 'lucide-react';

export function ShopHome() {
  const { gender } = useParams();
  const isWomen = gender === 'women';

  const womenDeals = [
    {
       id: 1,
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/d63fc430-4e3f-4275-8422-777e387f3bf01605339665893-Biba.png',
       offer: '30-60% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/ba1db543-9844-432d-8386-8149e000c00d1645602330456-Biba.jpg'
    },
    {
       id: 2, 
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/06745508-6202-4ae9-9069-4244a1bb32ca1605339666014-W.png',
       offer: '30-60% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/5d8b85cc-c635-430c-843e-7cb33758b97d1645602330467-W.jpg'
    },
    {
       id: 3,
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/7c037989-130e-4340-983d-0453de2b49c01605339665961-Marks---Spencer.png',
       offer: 'Up To 60% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/6314f2dc-7377-4404-9849-8086d630b91e1645602330485-Marks---Spencer.jpg'
    },
    {
       id: 4,
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/af96b862-23c3-4d0f-90db-2d64573173d11605339666004-Vero-Moda.png',
       offer: 'Min. 50% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/8040a43f-0498-466d-a19e-e8892f3d17961645602330477-Vero-Moda.jpg'
    },
    {
       id: 5,
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/56385d34-7541-4712-a8c6-b333423759da1605339665972-ONLY.png',
       offer: 'Min. 50% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/c66e2c90-95b0-4632-a27b-edef896796531645602330495-ONLY.jpg'
    }
  ];

  const menDeals = [
    {
       id: 1,
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/f3889bf7-975a-4cc2-9d8c-283152636a0e1598348260492-U.S.-Polo-Assn..jpg',
       offer: '30-60% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/6c507c6f-619f-4428-a3f1-469623832d291565261545615-US-Polo-Assn-Men-Caps-3741565261544257-1.jpg'
    },
    {
       id: 2, 
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/e979261a-289b-4402-ae45-b46241a37c091598348260408-Levis.jpg',
       offer: 'Min. 40% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg' // Reusing a placeholder or Levis lookalike as direct match is safer
    },
    {
       id: 3,
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/da33b8d4-266d-4786-980b-2dfeb9df2a821598348260485-Tommy-Hilfiger.jpg',
       offer: '30-50% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shir-1.jpg' // Using casual wear placeholder
    },
    {
       id: 4,
       brandLogo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/07469792-5881-4200-9883-9ae00523ed0a1598348260533-United-Colors-of-Benetton.jpg',
       offer: '40-70% Off',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a37452c5d3df1569305436738-United-Colors-of-Benetton-Men-Tshirts-1041569305434789-1.jpg'
    }
  ];

  const deals = isWomen ? womenDeals : menDeals;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <div className="pt-4 pb-10 relative">
        {/* Sticky Right Tab */}
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col items-center cursor-pointer">
           <div className="bg-[#535766] text-white py-4 px-1 writing-vertical-rl text-xs font-bold tracking-wider flex items-center gap-2 uppercase" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
              <span className="rotate-180">FLAT ₹300 OFF</span>
              <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[8px] border-b-white rotate-180"></div>
           </div>
        </div>

        <div className="container mx-auto px-4 md:px-10">
           {/* Main Banner Container */}
           <div className="flex flex-col md:flex-row h-auto md:h-[400px] border border-gray-100 shadow-sm">
              
              {/* Left Large Banner */}
              <div className="flex-[2] relative overflow-hidden cursor-pointer group">
                  <img 
                    src={isWomen 
                        ? "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/5/31/4031994d-9092-4aa7-aea5-87ae2249d9f41654006594976-Activewear_DK.jpg" 
                        : "https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2022/4/10/7b633939-2c63-44df-96dd-c73d9d6836941649578848480-Men-Workwear_Desk.jpg"
                    }
                    alt="Workwear" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dots overlay */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-500 scale-110"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                     <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                  </div>
              </div>

              {/* Right Promo Section - Workwear */}
              <div className="flex-1 bg-white flex flex-col justify-center px-10 relative">
                  {/* Brand Logos */}
                  {/* Reuse structure but make dynamic if needed, keeping simple for now */}
                  <div className="flex items-center gap-4 mb-6">
                     <div className="border border-gray-200 p-1 w-12 h-12 flex items-center justify-center">
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/a86b3a0f-5609-4118-97df-6320a9a135431598348260451-Raymond.jpg" alt="Raymond" className="w-full h-full object-contain mix-blend-multiply"/>
                     </div>
                     <div className="border border-gray-200 p-1 w-16 h-12 flex items-center justify-center">
                        <img src="https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/f4b002c8-779d-4886-9a2c-15a3297371191598348260515-Van-Heusen.jpg" alt="Van Heusen" className="w-full h-full object-contain mix-blend-multiply"/>
                     </div>
                     <span className="text-gray-500 font-serif text-lg">& More</span>
                  </div>

                  {/* Main Text */}
                  <div className="mb-6">
                     <h2 className="text-4xl text-gray-700 font-serif mb-2 tracking-wide">Workwear</h2>
                     <h3 className="text-3xl text-gray-700 font-serif font-light">Up To 60% Off</h3>
                  </div>

                  <div className="w-full h-px bg-gray-200 my-4"></div>

                  <Button variant="ghost" className="text-left text-gray-500 uppercase text-xs font-bold tracking-widest hover:text-black hover:bg-transparent transition-colors flex items-center gap-1 p-0 h-auto">
                     <span className="text-lg leading-none">+</span> Explore
                  </Button>
              </div>
           </div>
        </div>
      </div>

      {/* Biggest Deals Section */}
      <div className="container mx-auto px-4 md:px-10 pb-16">
         <h2 className="text-[18px] font-bold text-gray-800 mb-8 tracking-widest uppercase">BIGGEST DEALS ON TOP BRANDS</h2>
         
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
              {deals.map((deal) => (
                <div key={deal.id} className="cursor-pointer group flex flex-col items-center">
                   <div className="w-full aspect-[4/5] bg-gray-100 overflow-hidden relative mb-4">
                      <img 
                        src={deal.image} 
                        alt="Deal"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                   </div>

                   {/* Brand Logo */}
                   <div className="h-8 mb-2 flex items-center justify-center">
                      <img src={deal.brandLogo} alt="Brand" className="h-full object-contain max-w-[100px]"/>
                   </div>
                   {/* Offer Text */}
                   <span className="text-gray-800 text-lg font-normal">{deal.offer}</span>
                </div>
              ))}
         </div>
      </div>
      
      {/* Categories To Bag - Show for both Men and Women */}
      <CategoriesToBag gender={gender} />

      {/* Explore Top Brands */}
      <ExploreTopBrands gender={gender} />

    </div>
  );
}
