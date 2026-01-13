import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import Icon from '@/assets/Nova Apparels FInal Logo/SVG/Gradient Icon.svg';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { 
      label: 'MEN', 
      href: '/shop/men',
      sections: [
        {
          title: 'Topwear',
          column: 1,
          items: ['T-Shirts', 'Casual Shirts', 'Formal Shirts', 'Sweatshirts', 'Sweaters', 'Jackets', 'Blazers & Coats', 'Suits', 'Rain Jackets']
        },
        {
          title: 'Indian & Festive Wear',
          column: 1,
          items: ['Kurtas & Kurta Sets', 'Sherwanis', 'Nehru Jackets', 'Dhotis']
        },
        {
          title: 'Bottomwear',
          column: 2,
          items: ['Jeans', 'Casual Trousers', 'Formal Trousers', 'Shorts', 'Track Pants & Joggers']
        },
        {
          title: 'Innerwear & Sleepwear',
          column: 2,
          items: ['Briefs & Trunks', 'Boxers', 'Vests', 'Sleepwear & Loungewear', 'Thermals']
        },
        {
          title: 'Plus Size',
          column: 2,
          items: []
        },
        {
          title: 'Footwear',
          column: 3,
          items: ['Casual Shoes', 'Sports Shoes', 'Formal Shoes', 'Sneakers', 'Sandals & Floaters', 'Flip Flops', 'Socks']
        },
        {
          title: 'Personal Care & Grooming',
          column: 3,
          items: []
        },
        {
          title: 'Sunglasses & Frames',
          column: 3,
          items: []
        },
        {
          title: 'Watches',
          column: 3,
          items: []
        },
        {
          title: 'Sports & Active Wear',
          column: 4,
          items: ['Sports Shoes', 'Sports Sandals', 'Active T-Shirts', 'Track Pants & Shorts', 'Tracksuits', 'Jackets & Sweatshirts', 'Sports Accessories', 'Swimwear']
        },
        {
          title: 'Gadgets',
          column: 4,
          items: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers']
        },
        {
          title: 'Fashion Accessories',
          column: 5,
          items: ['Wallets', 'Belts', 'Perfumes & Body Mists', 'Trimmers', 'Deodorants', 'Ties, Cufflinks & Pocket Squares', 'Accessory Gift Sets', 'Caps & Hats', 'Mufflers, Scarves & Gloves', 'Phone Cases', 'Rings & Wristwear', 'Helmets']
        },
        {
          title: 'Bags & Backpacks',
          column: 5,
          items: []
        },
        {
            title: 'Luggages & Trolleys',
            column: 5,
            items: []
        }
      ]
    },
    { label: 'WOMEN', href: '/shop/women',
      sections: [
        {
          title: 'Indian & Fusion Wear',
          column: 1,
          items: ['Kurtas & Suits', 'Kurtis, Tunics & Tops', 'Sarees', 'Ethnic Wear', 'Leggings, Salwars & Churidars', 'Skirts & Palazzos', 'Dress Materials', 'Lehenga Cholis', 'Dupattas & Shawls', 'Jackets']
        },
        {
          title: 'Belts, Scarves & More',
          column: 1,
          items: []
        },
        {
          title: 'Watches & Wearables',
          column: 1,
          items: []
        },
        {
          title: 'Western Wear',
          column: 2,
          items: ['Dresses', 'Tops', 'Tshirts', 'Jeans', 'Trousers & Capris', 'Shorts & Skirts', 'Co-ords', 'Playsuits', 'Jumpsuits', 'Shrugs', 'Sweaters & Sweatshirts', 'Jackets & Coats', 'Blazers & Waistcoats']
        },
        {
           title: 'Plus Size',
           column: 2,
           items: []
        },
        {
          title: 'Maternity',
          column: 3,
          items: []
        },
        {
          title: 'Sunglasses & Frames',
          column: 3,
          items: []
        },
        {
          title: 'Footwear',
          column: 3,
          items: ['Flats', 'Casual Shoes', 'Heels', 'Boots', 'Sports Shoes & Floaters']
        },
        {
          title: 'Sports & Active Wear',
          column: 3,
          items: ['Clothing', 'Footwear', 'Sports Accessories', 'Sports Equipment']
        },
        {
          title: 'Lingerie & Sleepwear',
          column: 4,
          items: ['Bra', 'Briefs', 'Shapewear', 'Sleepwear & Loungewear', 'Swimwear', 'Camisoles & Thermals']
        },
        {
          title: 'Beauty & Personal Care',
          column: 4,
          items: ['Makeup', 'Skincare', 'Premium Beauty', 'Lipsticks', 'Fragrances']
        },
        {
          title: 'Gadgets',
          column: 5,
          items: ['Smart Wearables', 'Fitness Gadgets', 'Headphones', 'Speakers']
        },
        {
          title: 'Jewellery',
          column: 5,
          items: ['Fashion Jewellery', 'Fine Jewellery', 'Earrings']
        },
        {
          title: 'Backpacks',
          column: 5,
          items: []
        },
        {
          title: 'Handbags, Bags & Wallets',
          column: 5,
          items: ['Luggages & Trolleys']
        },
        {
          title: 'Luggages & Trolleys',
          column: 5,
          items: []
        }
      ]
     },
    { 
      label: 'KIDS', 
      href: '/shop/kids',
      color: 'orange',
      sections: [
        {
          title: 'Boys Clothing',
          column: 1,
          items: ['T-Shirts', 'Shirts', 'Shorts', 'Jeans', 'Trousers', 'Clothing Sets', 'Ethnic Wear', 'Track Pants & Pyjamas', 'Jacket, Sweater & Sweatshirts', 'Party Wear', 'Innerwear & Thermals', 'Nightwear & Loungewear', 'Value Packs']
        },
        {
          title: 'Girls Clothing',
          column: 2,
          items: ['Dresses', 'Tops', 'Tshirts', 'Clothing Sets', 'Lehenga choli', 'Kurta Sets', 'Party wear', 'Dungarees & Jumpsuits', 'Skirts & shorts', 'Tights & Leggings', 'Jeans, Trousers & Capris', 'Jacket, Sweater & Sweatshirts', 'Innerwear & Thermals', 'Nightwear & Loungewear', 'Value Packs']
        },
        {
          title: 'Footwear',
          column: 3,
          items: ['Casual Shoes', 'Flipflops', 'Sports Shoes', 'Flats', 'Sandals', 'Heels', 'School Shoes', 'Socks']
        },
        {
          title: 'Toys & Games',
          column: 3,
          items: ['Learning & Development', 'Activity Toys', 'Soft Toys', 'Action Figure / Play set']
        },
        {
          title: 'Infants',
          column: 4,
          items: ['Bodysuits', 'Rompers & Sleepsuits', 'Clothing Sets', 'Tshirts & Tops', 'Dresses', 'Bottom wear', 'Winter Wear', 'Innerwear & Sleepwear', 'Infant Care']
        },
        {
          title: 'Home & Bath',
          column: 4,
          items: ['Personal Care']
        },
        {
          title: 'Kids Accessories',
          column: 5,
          items: ['Bags & Backpacks', 'Watches', 'Jewellery & Hair accessory', 'Sunglasses', 'Masks & Protective Gears', 'Caps & Hats']
        },
        {
          title: 'Brands',
          column: 5,
          items: ['H&M', 'Max Kids', 'Pantaloons', 'United Colors Of Benetton Kids', 'YK', 'U.S. Polo Assn. Kids', 'Mothercare', 'HRX']
        }
      ]
    },
    { 
      label: 'HOME', 
      href: '/shop/home',
      color: 'yellow',
      sections: [
        {
          title: 'Bed Linen & Furnishing',
          column: 1,
          items: ['Bed Runners', 'Mattress Protectors', 'Bedsheets', 'Bedding Sets', 'Blankets, Quilts & Dohars', 'Pillows & Pillow Covers', 'Bed Covers', 'Diwan Sets', 'Chair Pads & Covers', 'Sofa Covers']
        },
        {
          title: 'Flooring',
          column: 1,
          items: ['Floor Runners', 'Carpets', 'Floor Mats & Dhurries', 'Door Mats']
        },
        {
          title: 'Bath',
          column: 2,
          items: ['Bath Towels', 'Hand & Face Towels', 'Beach Towels', 'Towels Set', 'Bath Rugs', 'Bath Robes', 'Bathroom Accessories', 'Shower Curtains']
        },
        {
          title: 'Lamps & Lighting',
          column: 2,
          items: ['Floor Lamps', 'Ceiling Lamps', 'Table Lamps', 'Wall Lamps', 'Outdoor Lamps', 'String Lights']
        },
        {
          title: 'Home Décor',
          column: 3,
          items: ['Plants & Planters', 'Aromas & Candles', 'Clocks', 'Mirrors', 'Wall Décor', 'Festive Decor', 'Pooja Essentials', 'Wall Shelves', 'Fountains', 'Showpieces & Vases', 'Ottoman']
        },
        {
          title: 'Cushions & Cushion Covers',
          column: 3,
          items: []
        },
        {
          title: 'Curtains',
          column: 3,
          items: []
        },
        {
          title: 'Furniture',
          column: 4,
          items: []
        },
        {
          title: 'Home Gift Sets',
          column: 4,
          items: []
        },
        {
          title: 'Kitchen & Table',
          column: 4,
          items: ['Table Runners', 'Dinnerware & Serveware', 'Cups and Mugs', 'Bakeware & Cookware', 'Kitchen Storage & Tools', 'Bar & Drinkware', 'Table Covers & Furnishings']
        },
        {
          title: 'Storage',
          column: 5,
          items: ['Bins', 'Hangers', 'Organisers', 'Hooks & Holders', 'Laundry Bags']
        }
      ]
    },
    { 
      label: 'BEAUTY', 
      href: '/shop/beauty',
      color: 'teal',
      sections: [
        {
          title: 'Makeup',
          column: 1,
          items: ['Lipstick', 'Lip Gloss', 'Lip Liner', 'Mascara', 'Eyeliner', 'Kajal', 'Eyeshadow', 'Foundation', 'Primer', 'Concealer', 'Compact', 'Nail Polish']
        },
        {
          title: 'Skincare, Bath & Body',
          column: 2,
          items: ['Face Moisturiser', 'Cleanser', 'Masks & Peel', 'Sunscreen', 'Serum', 'Face Wash', 'Eye Cream', 'Lip Balm', 'Body Lotion', 'Body Wash', 'Body Scrub', 'Hand Cream']
        },
        {
          title: 'Baby Care',
          column: 2,
          items: []
        },
        {
          title: 'Masks',
          column: 2,
          items: []
        },
        {
          title: 'Haircare',
          column: 3,
          items: ['Shampoo', 'Conditioner', 'Hair Cream', 'Hair Oil', 'Hair Gel', 'Hair Color', 'Hair Serum', 'Hair Accessory']
        },
        {
          title: 'Fragrances',
          column: 3,
          items: ['Perfume', 'Deodorant', 'Body Mist']
        },
        {
          title: 'Appliances',
          column: 4,
          items: ['Hair Straightener', 'Hair Dryer', 'Epilator']
        },
        {
          title: "Men's Grooming",
          column: 4,
          items: ['Trimmers', 'Beard Oil', 'Hair Wax']
        },
        {
          title: 'Beauty Gift & Makeup Set',
          column: 4,
          items: ['Beauty Gift', 'Makeup Kit']
        },
        {
          title: 'Premium Beauty',
          column: 4,
          items: []
        },
        {
          title: 'Wellness & Hygiene',
          column: 4,
          items: []
        },
        {
          title: 'Top Brands',
          column: 5,
          items: ['Lakme', 'Maybelline', 'LOreal', 'Philips', 'Bath & Body Works', 'THE BODY SHOP', 'Biotique', 'Mamaearth', 'MCaffeine', 'Nivea', 'Lotus Herbals', 'LOreal Professionnel', 'KAMA AYURVEDA', 'M.A.C', 'Forest Essentials']
        }
      ]
    },
    { 
      label: 'GENZ', 
      href: '/shop/genz',
      color: 'teal',
      sections: [
        {
          title: "Women's Western Wear",
          column: 1,
          items: ['Dresses Under ₹599', 'Tops Under ₹399', 'Jeans Under ₹599', 'Trousers Under ₹699', 'T-shirts Under ₹299', 'Shirts Under ₹499', 'Skirts Under ₹499', 'Shorts Under ₹699', 'Co-ords Under ₹799', 'Jumpsuits Under ₹899', 'Track pants Under ₹699', 'Jackets Under ₹899', 'Sweatshirts Under ₹699', 'Sweaters Under ₹899']
        },
        {
          title: 'Lingerie & Loungewear',
          column: 1,
          items: ['Bras Under ₹399', 'Night suits Under ₹799', 'Nightdresses Under ₹999', 'Lounge pants Under ₹999', 'Briefs Under ₹599']
        },
        {
          title: "Women's Ethnic Wear",
          column: 2,
          items: ['Kurtas Under ₹399', 'Kurtis Under ₹499', 'Kurta sets Under ₹499', 'Ethnic Dresses Under ₹999', 'Palazzos Under ₹799']
        },
        {
          title: "Men's Casual Wear",
          column: 3,
          items: ['T-shirts Under ₹299', 'Shirts Under ₹499', 'Jeans Under ₹599', 'Trousers Under ₹699', 'Shorts Under ₹599', 'Track pants Under ₹699', 'Jackets Under ₹899', 'Sweatshirts Under ₹699', 'Sweaters Under ₹999', 'Co-ords Under ₹999']
        },
        {
          title: "Men's Occassion Wear",
          column: 3,
          items: ['Kurtas Under ₹799', 'Kurta Sets Under ₹999']
        },
        {
          title: "Women's Footwear",
          column: 4,
          items: ['Heels Under ₹599', 'Flats Under ₹499', 'Casual shoes Under ₹699', 'Sports shoes Under ₹999', 'Flip flops Under ₹799', 'Boots Under ₹999', 'Ballerinas Under ₹799']
        },
        {
          title: "Men's Footwear",
          column: 4,
          items: ['Casual shoes Under ₹799', 'Sports shoes Under ₹999', 'Formal shoes Under ₹999', 'Sandals Under ₹799', 'Flip flops Under ₹499', 'Boots Under ₹999']
        },
         {
          title: 'Beauty & Grooming',
          column: 5,
          items: ['Skincare Under ₹299', 'Haircare Under ₹399', 'Bath & Body Under ₹399', 'Makeup Under ₹299', 'Fragrances Under ₹399', 'Appliances Under ₹999']
        },
        {
          title: 'Accessories',
          column: 5,
          items: ['Jewellery Under ₹299', 'Handbags Under ₹499', 'Clutches Under ₹999', 'Backpacks Under ₹699', 'Wallets Under ₹499', 'Sunglasses Under ₹699', 'Belts Under ₹799', 'Caps Under ₹899']
        }
      ]
    },
    { label: 'STUDIO', href: '/studio', isNew: true, isStudio: true },
  ];

  // Define color mappings for Tailwind JIT safety
  const colorClasses = {
    pink: { text: 'text-primary', border: 'group-hover:border-primary' },
    orange: { text: 'text-orange-500', border: 'group-hover:border-orange-500' },
    yellow: { text: 'text-yellow-500', border: 'group-hover:border-yellow-500' },
    teal: { text: 'text-teal-500', border: 'group-hover:border-teal-500' },
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-0 h-20 flex items-center justify-between relative">
        {/* Logo */}
        <div className="flex items-center gap-4 md:gap-12">
          {/* Mobile Menu Button */}
          <button 
             className="lg:hidden p-1"
             onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="h-6 w-6 text-gray-700" />
          </button>

          <a href="/" className="flex-shrink-0">
             {/* Nova Apparels Logo */}
             <img src={Icon} alt="Nova Apparels" className="h-[50px] w-auto" />
          </a>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 h-full">
            {navItems.map((item) => {
              const theme = colorClasses[item.color] || colorClasses['pink'];
              const borderClass = theme.border;
              const textClass = theme.text;
              const isStudio = item.isStudio;
              
              return (
              <div key={item.label} className="group h-full flex items-center">
                <a
                  href={item.href}
                  className={`text-xs font-bold text-gray-700 group-hover:text-gray-900 group-hover:border-b-4 ${borderClass} h-full flex items-center transition-all relative px-1 border-b-4 border-transparent`}
                >
                  {item.label}
                  {item.isNew && (
                    <span className="absolute bottom-3 -right-3 text-[8px] font-sans font-bold text-primary">
                      NEW
                    </span>
                  )}
                </a>

                {/* Mega Menu Dropdown */}
                {(item.sections || isStudio) && (
                  <div className={`absolute top-full ${isStudio ? 'left-0 right-0 mx-auto w-[550px]' : 'left-0 w-[950px]'} bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[100]`}>
                    
                    {/* STUDIO CONTENT */}
                    {isStudio ? (
                       <div className="flex flex-col items-center justify-center p-8 text-center">
                         <div className="mb-4 text-primary">
                           {/* Studio Logo */}
                           <svg width="100" height="40" viewBox="0 0 100 40" fill="none" className="mx-auto block">
                              <path d="M15 20 L25 10 L35 20 M15 20 L5 10 L15 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                              <path d="M35 20 L45 10 L55 20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                              <circle cx="30" cy="20" r="18" stroke="currentColor" strokeWidth="2" />
                              <text x="55" y="25" fill="black" fontSize="18" fontFamily="sans-serif" fontWeight="bold">Studio</text>
                           </svg>
                         </div>
                         <p className="text-gray-500 text-lg mb-6">Your daily inspiration for everything fashion</p>
                         
                         <div className="w-full h-64 bg-gray-100 mb-8 overflow-hidden relative">
                             {/* Placeholder Banner Image */}
                            <img src="https://images.unsplash.com/photo-1529139574466-a302d27f608c?q=80&w=1000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Studio Banner" />
                         </div>

                         <Button variant="outline" className="border border-gray-300 px-8 py-3 uppercase font-bold text-sm tracking-wide text-gray-800 hover:border-black transition-colors bg-white h-auto rounded-none hover:bg-white hover:text-gray-800">
                            Explore Studio &gt;
                         </Button>
                       </div>
                    ) : (
                    /* STANDARD GRID CONTENT */
                    <div className="px-8 py-4">
                      <div className="grid grid-cols-5 gap-x-2">
                        {[1, 2, 3, 4, 5].map((colNum) => (
                          <div key={colNum} className="flex flex-col">
                            {item.sections.filter(s => s.column === colNum).map((section, index, arr) => (
                              <div key={section.title} className={index !== arr.length - 1 ? "border-b border-gray-100 pb-4 mb-4" : ""}>
                                <h4 className={`${textClass} font-bold text-xs mb-3 uppercase tracking-wide`}>{section.title}</h4>
                                <ul className="flex flex-col gap-1">
                                  {section.items.map(subItem => (
                                    <li key={subItem}>
                                      <Link 
                                        to={`/shop/${item.label.toLowerCase()}/${subItem.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`} 
                                        className="text-gray-500 text-[13px] hover:text-black hover:font-semibold leading-relaxed block hover:underline decoration-transparent"
                                      >
                                        {subItem}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    )}
                  </div>
                )}
              </div>
            )})}
          </nav>
        </div>

        {/* Search Bar - Desktop */}
        <div className="hidden md:flex flex-1 max-w-lg mx-6">
          <div className="relative w-full bg-gray-50 rounded-md border border-gray-100 focus-within:border-gray-200 focus-within:bg-white transition-colors">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2.5 bg-transparent text-sm text-gray-700 placeholder-gray-400 focus:outline-none"
              placeholder="Search for products, brands and more"
            />
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-6 h-full">
           <div className="flex flex-col items-center gap-1 cursor-pointer group relative h-full justify-center">
             <User className="h-5 w-5 text-gray-600 group-hover:text-black" strokeWidth={1.5} />
             <span className="text-[10px] font-bold text-gray-700 group-hover:text-black">Profile</span>
             <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary hidden group-hover:block"></div>
             
             {/* Profile Dropdown */}
             <div className="absolute top-full right-[-150px] w-72 bg-white shadow-lg border border-gray-100 p-5 invisible group-hover:visible opacity-0 group-hover:opacity-100 transition-all duration-200 z-[100] cursor-default">
                
                {/* Welcome Section */}
                <div className="mb-3 text-left">
                  <h3 className="font-bold text-gray-800 text-sm mb-0.5">Welcome</h3>
                  <p className="text-gray-600 text-[12px] mb-3">To access account and manage orders</p>
                  <Link to="/login" className="inline-block text-primary border border-gray-200 px-3 py-2 font-bold text-xs hover:border-primary transition-colors uppercase">
                    Login / Signup
                  </Link>
                </div>

                <div className="w-full h-px bg-gray-200 my-2"></div>

                {/* Menu 1 */}
                <ul className="flex flex-col text-left py-0.5">
                  <li className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Orders</li>
                  <Link to="/wishlist" className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Wishlist</Link>
                  <li className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Gift Cards</li>
                  <Link to="/contact" className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Contact Us</Link>
                  <li className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 flex items-center">
                    Myntra Insider 
                    <span className="bg-primary text-white text-[9px] font-bold px-1 py-[1px] rounded ml-2 uppercase transform skew-x-[-10deg]">New</span>
                  </li>
                </ul>

                <div className="w-full h-px bg-gray-200 my-2"></div>

                {/* Menu 2 */}
                <ul className="flex flex-col text-left py-0.5">
                  <li className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Myntra Credit</li>
                  <li className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Coupons</li>
                  <li className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Saved Cards</li>
                  <li className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Saved VPA</li>
                  <li className="text-gray-600 hover:text-black hover:font-bold text-[13px] cursor-pointer py-1 block">Saved Addresses</li>
                </ul>
             </div>
           </div>
           
           <Link to="/wishlist" className="flex flex-col items-center gap-1 cursor-pointer group h-full justify-center">
             <Heart className="h-5 w-5 text-gray-600 group-hover:text-black" strokeWidth={1.5} />
             <span className="text-[10px] font-bold text-gray-700 group-hover:text-black">Wishlist</span>
           </Link>

           <Link to="/cart" className="flex flex-col items-center gap-1 cursor-pointer group h-full justify-center">
             <ShoppingBag className="h-5 w-5 text-gray-600 group-hover:text-black" strokeWidth={1.5} />
             <span className="text-[10px] font-bold text-gray-700 group-hover:text-black">Bag</span>
           </Link>
        </div>
      </div>
      
      {/* Mobile Menu Drawer */}
      <div className={`fixed inset-0 z-[100] transform transition-transform duration-300 ease-in-out lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
         {/* Overlay */}
         <div className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsMobileMenuOpen(false)}></div>
         
         {/* Drawer Content */}
         <div className="absolute top-0 left-0 w-[80%] max-w-xs h-full bg-white shadow-xl overflow-y-auto">
            <div className="p-4 flex items-center justify-between border-b border-gray-100">
               <img src={Icon} alt="Nova" className="h-[40px] w-auto" />
               <button onClick={() => setIsMobileMenuOpen(false)}>
                 <X className="h-6 w-6 text-gray-500" />
               </button>
            </div>
            
            <div className="flex flex-col py-2">
               {navItems.map((item) => (
                 <div key={item.label} className="border-b border-gray-50">
                   <Link 
                     to={item.href} 
                     className="block px-4 py-3 text-sm font-bold text-gray-800 hover:bg-gray-50 uppercase flex justify-between items-center"
                     onClick={() => setIsMobileMenuOpen(false)}
                   >
                     {item.label}
                     {item.isNew && <span className="text-[10px] text-primary font-bold">NEW</span>}
                   </Link>
                 </div>
               ))}
               
               <div className="mt-4 px-4">
                  <h3 className="text-xs font-bold text-gray-400 uppercase mb-2">Account</h3>
                  <Link to="/login" className="block py-2 text-sm text-gray-600">Login / Signup</Link>
                  <Link to="/orders" className="block py-2 text-sm text-gray-600">Orders</Link>
               </div>
            </div>
         </div>
      </div>
    </header>
  );
}
