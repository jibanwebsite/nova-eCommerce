export function ExploreTopBrands({ gender = 'women' }) {
  const womenBrands = [
    { 
       id: 1, 
       name: 'Biba', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/d63fc430-4e3f-4275-8422-777e387f3bf01605339665893-Biba.png',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/ba1db543-9844-432d-8386-8149e000c00d1645602330456-Biba.jpg',
       offer: 'Ethnic Collection'
    },
    { 
       id: 2, 
       name: 'Vero Moda', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/af96b862-23c3-4d0f-90db-2d64573173d11605339666004-Vero-Moda.png',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/8040a43f-0498-466d-a19e-e8892f3d17961645602330477-Vero-Moda.jpg',
       offer: 'Chic Styles'
    },
    { 
       id: 3, 
       name: 'Only', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/56385d34-7541-4712-a8c6-b333423759da1605339665972-ONLY.png',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/c66e2c90-95b0-4632-a27b-edef896796531645602330495-ONLY.jpg',
       offer: 'Up To 50% Off' 
    },
    { 
       id: 4, 
       name: 'W', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/06745508-6202-4ae9-9069-4244a1bb32ca1605339666014-W.png',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/5d8b85cc-c635-430c-843e-7cb33758b97d1645602330467-W.jpg',
       offer: 'Festive Ready' 
    },
    { 
       id: 5, 
       name: 'Forever 21', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/11/14/351336e3-b1d5-4a6c-b36d-0e42d99217031605342531649-Forever21.png',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/2022/2/23/6314f2dc-7377-4404-9849-8086d630b91e1645602330485-Marks---Spencer.jpg', // Placeholder
       offer: 'Youth Trends' 
    },
  ];

  const menBrands = [
    { 
       id: 1, 
       name: 'Nike', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/08de6296-653a-4467-8278-df033066345d1598348260443-Nike.jpg',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10356511/2019/8/8/6c507c6f-619f-4428-a3f1-469623832d291565261545615-US-Polo-Assn-Men-Caps-3741565261544257-1.jpg', // Using placeholder lifestyle from prev deals
       offer: 'Fitness Collection' 
    },
    { 
       id: 2, 
       name: 'Levis', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/e979261a-289b-4402-ae45-b46241a37c091598348260408-Levis.jpg',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
       offer: 'Flat 50% Off'
    },
    { 
       id: 3, 
       name: 'Roadster', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/a9a544c0-e70c-485c-974a-25920d32152a1598348260477-Roadster.jpg',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shir-1.jpg',
       offer: '40-70% Off'
    },
    { 
       id: 4, 
       name: 'Jack & Jones', 
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/f99dbe6e-69f3-441d-b841-f8f41189ea731598348260416-Jack-_-Jones.jpg',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/10673544/2019/9/24/6b9c7688-7ca2-4d11-9e5b-a37452c5d3df1569305436738-United-Colors-of-Benetton-Men-Tshirts-1041569305434789-1.jpg',
       offer: 'Up To 60% Off'
    },
    {
       id: 5,
       name: 'HRX',
       logo: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_200,c_limit,fl_progressive/assets/images/2020/8/25/9f665a36-1216-4191-88c7-43cf062d85471598348260384-HRX.jpg',
       image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12344716/2020/12/3/e6bf47e2-7667-4634-9343-ae62b3228a071607000780211-Nike-Men-Sports-Shoes-2221607000778759-1.jpg',
       offer: '30-70% Off'
    }
  ];

  const brands = gender === 'men' ? menBrands : womenBrands;

  return (
    <div className="container mx-auto px-4 md:px-10 pb-16">
      <h2 className="text-[18px] font-bold text-gray-800 mb-8 tracking-widest uppercase">EXPLORE TOP BRANDS</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {brands.map((brand) => (
           <div key={brand.id} className="cursor-pointer group flex flex-col items-center">
              {/* Image Container with Shadow */}
              <div className="w-full aspect-[4/5] relative mb-4 shadow-[0_4px_12px_rgba(0,0,0,0.1)] rounded-sm overflow-hidden bg-gray-50">
                  <img src={brand.image} alt={brand.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              
              {/* Brand Logo */}
              <div className="h-6 mb-2 flex items-center justify-center">
                  <img src={brand.logo} alt={brand.name} className="h-full object-contain max-w-[80px]" />
              </div>

              {/* Offer Text */}
              <span className="text-gray-800 text-lg font-normal">{brand.offer}</span>
           </div>
        ))}
      </div>
    </div>
  );
}
