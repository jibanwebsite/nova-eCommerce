import { useState } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

export function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    mobile: ''
  });
  const [showError, setShowError] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (showError) setShowError(false);
  };

  const handleSubmit = () => {
    const { fullName, email, password, mobile } = formData;
    if (!fullName || !email || !password || mobile.length < 10) {
      setShowError(true);
      return;
    }
    console.log("Creating account with:", formData);
    // Proceed with signup logic
  };

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
      <Header />
      
      <div className="flex-1 flex justify-center items-center py-10 px-4 sm:px-6">
        <div className="bg-white w-full max-w-[900px] shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100">
          
          {/* Left Side: Visual Hero */}
          <div className="hidden md:block w-1/2 relative bg-gray-900">
             <div className="absolute inset-0 bg-black/20 z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070&auto=format&fit=crop" 
               alt="Fashion Lifestyle" 
               className="w-full h-full object-cover opacity-90"
             />
             <div className="absolute bottom-10 left-10 right-10 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">Join the Revolution</h3>
                <p className="text-gray-200 text-sm leading-relaxed opacity-90">
                  Create your account to unlock exclusive deals, personalized recommendations, and seamless checkout.
                </p>
             </div>
          </div>

          {/* Right Side: Form Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            
            {/* Header */}
            <div className="mb-8 text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
                Create Account
              </h2>
              <p className="text-sm text-gray-500 font-normal">
                 Join us to get the best fashion experience
              </p>
            </div>

            {/* Inputs */}
            <div className="space-y-5 mb-8">
                
                {/* Full Name */}
                <div className="relative">
                   <input 
                     type="text" 
                     name="fullName"
                     value={formData.fullName}
                     onChange={handleChange}
                     className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium placeholder-gray-400 bg-gray-50/30"
                     placeholder="Full Name"
                   />
                </div>

                {/* Mobile */}
                <div className="relative">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm font-medium pointer-events-none">
                        +977
                    </div>
                   <input 
                     type="tel" 
                     name="mobile"
                     value={formData.mobile}
                     onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        if (val.length <= 10) handleChange({ target: { name: 'mobile', value: val }});
                     }}
                     className="w-full h-12 pl-14 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium placeholder-gray-400 bg-gray-50/30"
                     placeholder="Mobile Number"
                   />
                </div>

                {/* Email */}
                <div className="relative">
                   <input 
                     type="email" 
                     name="email"
                     value={formData.email}
                     onChange={handleChange}
                     className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium placeholder-gray-400 bg-gray-50/30"
                     placeholder="Email Address"
                   />
                </div>

                {/* Password */}
                <div className="relative">
                   <input 
                     type="password" 
                     name="password"
                     value={formData.password}
                     onChange={handleChange}
                     className="w-full h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all text-sm font-medium placeholder-gray-400 bg-gray-50/30"
                     placeholder="Create Password"
                   />
                </div>

                {showError && (
                  <p className="text-[11px] text-red-500 font-medium flex items-center gap-1">
                    <span className="block w-1 h-1 bg-red-500 rounded-full"></span>
                    Please fill all fields correctly
                  </p>
                )}
            </div>

            {/* Button */}
            <div className="mb-6">
              <Button 
                onClick={handleSubmit}
                className="w-full bg-[#fd2f24] hover:bg-[#d62016] text-white font-bold text-[14px] py-4 uppercase tracking-widest rounded-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Create Account
              </Button>
            </div>

            {/* Login Link */}
            <div className="text-center">
              <p className="text-[13px] text-gray-500 font-medium">
                Already have an account? <Link to="/login" className="text-[#fd2f24] font-bold cursor-pointer hover:underline">Login</Link>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
