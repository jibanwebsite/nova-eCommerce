import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, MessageSquare, Package, RotateCcw, CreditCard, User } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      
      <div className="pt-28 pb-16 container mx-auto px-4 md:px-20 lg:px-32">
        
        {/* Page Title Section */}
        <div className="text-center mb-16">
            <h5 className="text-primary font-bold uppercase tracking-widest text-xs mb-3">Support</h5>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">How can we help you?</h1>
            <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
               Please select a topic below related to your inquiry. If you don't find what you need, feel free to contact us directly.
            </p>
        </div>

        {/* Quick Topics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
                { icon: Package, title: 'Order Issues', desc: 'Track, cancel, or modify orders' },
                { icon: RotateCcw, title: 'Returns & Refunds', desc: 'Return products or check refund status' },
                { icon: CreditCard, title: 'Payment Queries', desc: 'Payment failures, offers, and methods' },
                { icon: User, title: 'Account Settings', desc: 'Manage profile, addresses, and privacy' }
            ].map((item, idx) => (
                <div key={idx} className="bg-white border border-gray-100 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center group">
                    <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-pink-100 transition-colors">
                        <item.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-bold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
            ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            {/* Contact Form */}
            <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 relative inline-block">
                    Send us a message
                    <span className="absolute bottom-0 left-0 w-1/3 h-1 bg-primary rounded-full"></span>
                </h2>
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">First Name</label>
                           <input type="text" className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary transition-colors text-gray-800 placeholder-gray-300" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                           <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Last Name</label>
                           <input type="text" className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary transition-colors text-gray-800 placeholder-gray-300" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Email Address</label>
                        <input type="email" className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary transition-colors text-gray-800 placeholder-gray-300" placeholder="john.doe@example.com" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Phone Number</label>
                        <input type="tel" className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary transition-colors text-gray-800 placeholder-gray-300" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Message</label>
                        <textarea className="w-full border-b border-gray-300 py-2 outline-none focus:border-primary transition-colors text-gray-800 placeholder-gray-300 min-h-[100px] resize-none" placeholder="Write your query here..."></textarea>
                    </div>

                    <Button type="button" className="bg-primary text-white font-bold py-4 px-10 rounded-sm hover:bg-primary/90 transition-colors w-full md:w-auto uppercase tracking-wider text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
                        Send Message
                    </Button>
                </form>
            </div>

            {/* Contact Information */}
            <div className="lg:w-[350px]">
               <h2 className="text-2xl font-bold text-gray-800 mb-8">Contact Information</h2>
               
               <div className="space-y-8">
                   <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5 text-gray-600" />
                       </div>
                       <div>
                           <h4 className="font-bold text-gray-800 mb-1">Corporate Office</h4>
                           <p className="text-sm text-gray-500 leading-relaxed">
                               Buildings Alyssa, Begonia & Clover,<br/>
                               Embassy Tech Village, Outer Ring Road,<br/>
                               Devarabeesanahalli Village, Varthur Hobli,<br/>
                               Bengaluru – 560103, India
                           </p>
                       </div>
                   </div>

                   <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5 text-gray-600" />
                       </div>
                       <div>
                           <h4 className="font-bold text-gray-800 mb-1">Email Us</h4>
                           <p className="text-sm text-gray-500">support@myntra.com</p>
                           <p className="text-sm text-gray-500">queries@myntra.com</p>
                       </div>
                   </div>

                   <div className="flex items-start gap-4">
                       <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5 text-gray-600" />
                       </div>
                       <div>
                           <h4 className="font-bold text-gray-800 mb-1">Call Us</h4>
                           <p className="text-sm text-gray-500">+91-80-61561999</p>
                           <p className="text-xs text-gray-400 mt-1">Mon - Sat, 9am - 6pm</p>
                       </div>
                   </div>
               </div>

               {/* Map Placeholder or Decorative Box */}
               <div className="mt-10 h-48 w-full bg-gray-100 rounded-lg overflow-hidden relative grayscale opacity-80">
                   {/* Simple decorative map visual using CSS patterns or empty div */}
                   <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center opacity-20"></div>
                   <div className="flex items-center justify-center h-full">
                       <span className="text-gray-400 font-bold text-xs uppercase tracking-widest border border-gray-300 px-4 py-2">Locate on Map</span>
                   </div>
               </div>
            </div>
        </div>

      </div>
    </div>
  );
}
