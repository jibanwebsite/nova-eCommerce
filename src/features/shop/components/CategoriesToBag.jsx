export function CategoriesToBag({ gender = 'women' }) {
  const womenCategories = [
    {
      id: 1,
      title: 'Kurtas & Kurta Sets',
      image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22901396/2023/4/26/5183864a-297c-4743-98cb-14cc299ae8601682494879737Kurtas1.jpg',
      bgColor: 'bg-[#f4f4f5]' 
    },
    {
      id: 2,
      title: 'Sarees',
      image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22901416/2023/4/26/b9522197-0f79-4595-b076-9c44654fc9f61682494879796Sarees1.jpg',
      bgColor: 'bg-[#fbfbfd]' 
    },
    {
      id: 3,
      title: 'Dresses',
      image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22901414/2023/4/26/f4039160-cfdf-4b77-a5ec-3a64932371911682494879780Dresses1.jpg',
      bgColor: 'bg-[#fff5f5]' 
    },
    {
      id: 4,
      title: 'Flats & Heels',
      image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22901428/2023/4/26/d24497a7-59a8-48b6-96a1-30949f5728561682494879830Flats1.jpg',
      bgColor: 'bg-[#fcfafa]' 
    },
    {
      id: 5,
      title: 'Handbags',
      image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22901430/2023/4/26/8750e417-062e-4363-9d8a-87422179836e1682494879840Handbags1.jpg',
      bgColor: 'bg-[#fdfdf9]' 
    },
    {
        id: 6,
        title: 'Shorts',
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/22901402/2023/4/26/0f1eac16-d668-450f-a943-7622d16454741682494879758Shorts1.jpg',
        bgColor: 'bg-[#f5f5f7]'
      }
  ];

  const menCategories = [
    {
        id: 1,
        title: 'Shirts',
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1376577/2016/9/15/11473928353466-Roadster-Men-Black-Regular-Fit-Checked-Casual-Shirt-4501473928353310-1.jpg',
        bgColor: 'bg-[#f4f4f5]'
    },
    {
        id: 2,
        title: 'T-Shirts',
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1700944/2019/6/8/972c9498-3a37-4d5d-976c-4493b4d5c0021559989322793-HRX-by-Hrithik-Roshan-Men-Yellow-Printed-Round-Neck-T-Shir-1.jpg',
        bgColor: 'bg-[#f8f8fa]'
    },
    {
        id: 3,
        title: 'Jeans',
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/1827439/2017/5/12/11494572825827-Roadster-Men-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stretchable-Jeans-4361494572825488-1.jpg',
        bgColor: 'bg-[#f0f4f8]'
    },
    {
        id: 4,
        title: 'Trousers',
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12377258/2020/9/11/ce1b7bcb-a65a-4eb0-a317-42ac02718f1e1599798741705-Highlander-Men-Olive-Green-Slim-Fit-Trousers-5901599798740-1.jpg',
        bgColor: 'bg-[#f5f5dc]'
    },
    {
        id: 5,
        title: 'Casual Shoes',
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/13753634/2021/6/1/2569502b-a010-482a-a92c-68d839bb87121622543884849-Roadster-Men-Grey-Sneakers-5781622543884394-1.jpg',
        bgColor: 'bg-[#fdfdf9]'
    },
    {
        id: 6,
        title: 'Sports Shoes',
        image: 'https://assets.myntassets.com/f_webp,dpr_1.5,q_60,w_210,c_limit,fl_progressive/assets/images/12344716/2020/12/3/e6bf47e2-7667-4634-9343-ae62b3228a071607000780211-Nike-Men-Sports-Shoes-2221607000778759-1.jpg',
        bgColor: 'bg-[#eeeeee]'
    }
  ];

  const categories = gender === 'men' ? menCategories : womenCategories;

  return (
    <div className="container mx-auto px-4 md:px-10 py-10">
      <h2 className="text-[18px] font-bold text-gray-800 mb-8 tracking-widest uppercase">CATEGORIES TO BAG</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((item) => (
          <div key={item.id} className="group cursor-pointer flex flex-col items-center">
            {/* Circular Image Container with gradient text/background effect from screenshot */}
            <div className={`rounded-full aspect-square w-full ${item.bgColor} relative overflow-hidden mb-3 p-2 bg-gradient-to-t from-transparent via-transparent to-white/50`}>
                 {/* The circular shape is actually the mask, typically these images are square but cropped in a circle. 
                     Looking at the screenshot, the images are in a circle with a gradient background inside the square container? 
                     Or simply circular images. Let's do circular images for now as 'Categories to Bag' usually implies distinct circles.
                 */}
                 <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-sm relative">
                    <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                 </div>
            </div>
            
            <h3 className="text-sm font-semibold text-gray-800 text-center">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
