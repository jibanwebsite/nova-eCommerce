import { useState, useEffect } from 'react';
import { Header } from '@/components/layout/Header';
import { Button } from '@/components/ui/Button';
import { Link } from 'react-router-dom';

const countryCodes = [
  { code: '+93', country: 'AF', label: 'Afghanistan' },
  { code: '+355', country: 'AL', label: 'Albania' },
  { code: '+213', country: 'DZ', label: 'Algeria' },
  { code: '+1', country: 'AS', label: 'American Samoa' },
  { code: '+376', country: 'AD', label: 'Andorra' },
  { code: '+244', country: 'AO', label: 'Angola' },
  { code: '+1', country: 'AI', label: 'Anguilla' },
  { code: '+1', country: 'AG', label: 'Antigua and Barbuda' },
  { code: '+54', country: 'AR', label: 'Argentina' },
  { code: '+374', country: 'AM', label: 'Armenia' },
  { code: '+297', country: 'AW', label: 'Aruba' },
  { code: '+61', country: 'AU', label: 'Australia' },
  { code: '+43', country: 'AT', label: 'Austria' },
  { code: '+994', country: 'AZ', label: 'Azerbaijan' },
  { code: '+1', country: 'BS', label: 'Bahamas' },
  { code: '+973', country: 'BH', label: 'Bahrain' },
  { code: '+880', country: 'BD', label: 'Bangladesh' },
  { code: '+1', country: 'BB', label: 'Barbados' },
  { code: '+375', country: 'BY', label: 'Belarus' },
  { code: '+32', country: 'BE', label: 'Belgium' },
  { code: '+501', country: 'BZ', label: 'Belize' },
  { code: '+229', country: 'BJ', label: 'Benin' },
  { code: '+1', country: 'BM', label: 'Bermuda' },
  { code: '+975', country: 'BT', label: 'Bhutan' },
  { code: '+591', country: 'BO', label: 'Bolivia' },
  { code: '+387', country: 'BA', label: 'Bosnia and Herzegovina' },
  { code: '+267', country: 'BW', label: 'Botswana' },
  { code: '+55', country: 'BR', label: 'Brazil' },
  { code: '+1', country: 'VG', label: 'British Virgin Islands' },
  { code: '+673', country: 'BN', label: 'Brunei' },
  { code: '+359', country: 'BG', label: 'Bulgaria' },
  { code: '+226', country: 'BF', label: 'Burkina Faso' },
  { code: '+257', country: 'BI', label: 'Burundi' },
  { code: '+855', country: 'KH', label: 'Cambodia' },
  { code: '+237', country: 'CM', label: 'Cameroon' },
  { code: '+1', country: 'CA', label: 'Canada' },
  { code: '+238', country: 'CV', label: 'Cape Verde' },
  { code: '+1', country: 'KY', label: 'Cayman Islands' },
  { code: '+236', country: 'CF', label: 'Central African Republic' },
  { code: '+235', country: 'TD', label: 'Chad' },
  { code: '+56', country: 'CL', label: 'Chile' },
  { code: '+86', country: 'CN', label: 'China' },
  { code: '+57', country: 'CO', label: 'Colombia' },
  { code: '+269', country: 'KM', label: 'Comoros' },
  { code: '+682', country: 'CK', label: 'Cook Islands' },
  { code: '+506', country: 'CR', label: 'Costa Rica' },
  { code: '+385', country: 'HR', label: 'Croatia' },
  { code: '+53', country: 'CU', label: 'Cuba' },
  { code: '+357', country: 'CY', label: 'Cyprus' },
  { code: '+420', country: 'CZ', label: 'Czech Republic' },
  { code: '+243', country: 'CD', label: 'Democratic Republic of the Congo' },
  { code: '+45', country: 'DK', label: 'Denmark' },
  { code: '+253', country: 'DJ', label: 'Djibouti' },
  { code: '+1', country: 'DM', label: 'Dominica' },
  { code: '+1', country: 'DO', label: 'Dominican Republic' },
  { code: '+670', country: 'TL', label: 'East Timor' },
  { code: '+593', country: 'EC', label: 'Ecuador' },
  { code: '+20', country: 'EG', label: 'Egypt' },
  { code: '+503', country: 'SV', label: 'El Salvador' },
  { code: '+240', country: 'GQ', label: 'Equatorial Guinea' },
  { code: '+291', country: 'ER', label: 'Eritrea' },
  { code: '+372', country: 'EE', label: 'Estonia' },
  { code: '+251', country: 'ET', label: 'Ethiopia' },
  { code: '+500', country: 'FK', label: 'Falkland Islands' },
  { code: '+298', country: 'FO', label: 'Faroe Islands' },
  { code: '+679', country: 'FJ', label: 'Fiji' },
  { code: '+358', country: 'FI', label: 'Finland' },
  { code: '+33', country: 'FR', label: 'France' },
  { code: '+594', country: 'GF', label: 'French Guiana' },
  { code: '+689', country: 'PF', label: 'French Polynesia' },
  { code: '+241', country: 'GA', label: 'Gabon' },
  { code: '+220', country: 'GM', label: 'Gambia' },
  { code: '+995', country: 'GE', label: 'Georgia' },
  { code: '+49', country: 'DE', label: 'Germany' },
  { code: '+233', country: 'GH', label: 'Ghana' },
  { code: '+350', country: 'GI', label: 'Gibraltar' },
  { code: '+30', country: 'GR', label: 'Greece' },
  { code: '+299', country: 'GL', label: 'Greenland' },
  { code: '+1', country: 'GD', label: 'Grenada' },
  { code: '+590', country: 'GP', label: 'Guadeloupe' },
  { code: '+1', country: 'GU', label: 'Guam' },
  { code: '+502', country: 'GT', label: 'Guatemala' },
  { code: '+224', country: 'GN', label: 'Guinea' },
  { code: '+245', country: 'GW', label: 'Guinea-Bissau' },
  { code: '+592', country: 'GY', label: 'Guyana' },
  { code: '+509', country: 'HT', label: 'Haiti' },
  { code: '+504', country: 'HN', label: 'Honduras' },
  { code: '+852', country: 'HK', label: 'Hong Kong' },
  { code: '+36', country: 'HU', label: 'Hungary' },
  { code: '+354', country: 'IS', label: 'Iceland' },
  { code: '+91', country: 'IN', label: 'India' },
  { code: '+62', country: 'ID', label: 'Indonesia' },
  { code: '+98', country: 'IR', label: 'Iran' },
  { code: '+964', country: 'IQ', label: 'Iraq' },
  { code: '+353', country: 'IE', label: 'Ireland' },
  { code: '+972', country: 'IL', label: 'Israel' },
  { code: '+39', country: 'IT', label: 'Italy' },
  { code: '+225', country: 'CI', label: 'Ivory Coast' },
  { code: '+1', country: 'JM', label: 'Jamaica' },
  { code: '+81', country: 'JP', label: 'Japan' },
  { code: '+962', country: 'JO', label: 'Jordan' },
  { code: '+7', country: 'KZ', label: 'Kazakhstan' },
  { code: '+254', country: 'KE', label: 'Kenya' },
  { code: '+686', country: 'KI', label: 'Kiribati' },
  { code: '+965', country: 'KW', label: 'Kuwait' },
  { code: '+996', country: 'KG', label: 'Kyrgyzstan' },
  { code: '+856', country: 'LA', label: 'Laos' },
  { code: '+371', country: 'LV', label: 'Latvia' },
  { code: '+961', country: 'LB', label: 'Lebanon' },
  { code: '+266', country: 'LS', label: 'Lesotho' },
  { code: '+231', country: 'LR', label: 'Liberia' },
  { code: '+218', country: 'LY', label: 'Libya' },
  { code: '+423', country: 'LI', label: 'Liechtenstein' },
  { code: '+370', country: 'LT', label: 'Lithuania' },
  { code: '+352', country: 'LU', label: 'Luxembourg' },
  { code: '+853', country: 'MO', label: 'Macau' },
  { code: '+389', country: 'MK', label: 'Macedonia' },
  { code: '+261', country: 'MG', label: 'Madagascar' },
  { code: '+265', country: 'MW', label: 'Malawi' },
  { code: '+60', country: 'MY', label: 'Malaysia' },
  { code: '+960', country: 'MV', label: 'Maldives' },
  { code: '+223', country: 'ML', label: 'Mali' },
  { code: '+356', country: 'MT', label: 'Malta' },
  { code: '+692', country: 'MH', label: 'Marshall Islands' },
  { code: '+596', country: 'MQ', label: 'Martinique' },
  { code: '+222', country: 'MR', label: 'Mauritania' },
  { code: '+230', country: 'MU', label: 'Mauritius' },
  { code: '+262', country: 'YT', label: 'Mayotte' },
  { code: '+52', country: 'MX', label: 'Mexico' },
  { code: '+691', country: 'FM', label: 'Micronesia' },
  { code: '+373', country: 'MD', label: 'Moldova' },
  { code: '+377', country: 'MC', label: 'Monaco' },
  { code: '+976', country: 'MN', label: 'Mongolia' },
  { code: '+382', country: 'ME', label: 'Montenegro' },
  { code: '+1', country: 'MS', label: 'Montserrat' },
  { code: '+212', country: 'MA', label: 'Morocco' },
  { code: '+258', country: 'MZ', label: 'Mozambique' },
  { code: '+95', country: 'MM', label: 'Myanmar' },
  { code: '+264', country: 'NA', label: 'Namibia' },
  { code: '+674', country: 'NR', label: 'Nauru' },
  { code: '+977', country: 'NP', label: 'Nepal' },
  { code: '+31', country: 'NL', label: 'Netherlands' },
  { code: '+599', country: 'AN', label: 'Netherlands Antilles' },
  { code: '+687', country: 'NC', label: 'New Caledonia' },
  { code: '+64', country: 'NZ', label: 'New Zealand' },
  { code: '+505', country: 'NI', label: 'Nicaragua' },
  { code: '+227', country: 'NE', label: 'Niger' },
  { code: '+234', country: 'NG', label: 'Nigeria' },
  { code: '+683', country: 'NU', label: 'Niue' },
  { code: '+850', country: 'KP', label: 'North Korea' },
  { code: '+1', country: 'MP', label: 'Northern Mariana Islands' },
  { code: '+47', country: 'NO', label: 'Norway' },
  { code: '+968', country: 'OM', label: 'Oman' },
  { code: '+92', country: 'PK', label: 'Pakistan' },
  { code: '+680', country: 'PW', label: 'Palau' },
  { code: '+970', country: 'PS', label: 'Palestine' },
  { code: '+507', country: 'PA', label: 'Panama' },
  { code: '+675', country: 'PG', label: 'Papua New Guinea' },
  { code: '+595', country: 'PY', label: 'Paraguay' },
  { code: '+51', country: 'PE', label: 'Peru' },
  { code: '+63', country: 'PH', label: 'Philippines' },
  { code: '+48', country: 'PL', label: 'Poland' },
  { code: '+351', country: 'PT', label: 'Portugal' },
  { code: '+1', country: 'PR', label: 'Puerto Rico' },
  { code: '+974', country: 'QA', label: 'Qatar' },
  { code: '+242', country: 'CG', label: 'Republic of the Congo' },
  { code: '+262', country: 'RE', label: 'Reunion' },
  { code: '+40', country: 'RO', label: 'Romania' },
  { code: '+7', country: 'RU', label: 'Russia' },
  { code: '+250', country: 'RW', label: 'Rwanda' },
  { code: '+590', country: 'BL', label: 'Saint Barthelemy' },
  { code: '+290', country: 'SH', label: 'Saint Helena' },
  { code: '+1', country: 'KN', label: 'Saint Kitts and Nevis' },
  { code: '+1', country: 'LC', label: 'Saint Lucia' },
  { code: '+590', country: 'MF', label: 'Saint Martin' },
  { code: '+508', country: 'PM', label: 'Saint Pierre and Miquelon' },
  { code: '+1', country: 'VC', label: 'Saint Vincent and the Grenadines' },
  { code: '+685', country: 'WS', label: 'Samoa' },
  { code: '+378', country: 'SM', label: 'San Marino' },
  { code: '+239', country: 'ST', label: 'Sao Tome and Principe' },
  { code: '+966', country: 'SA', label: 'Saudi Arabia' },
  { code: '+221', country: 'SN', label: 'Senegal' },
  { code: '+381', country: 'RS', label: 'Serbia' },
  { code: '+248', country: 'SC', label: 'Seychelles' },
  { code: '+232', country: 'SL', label: 'Sierra Leone' },
  { code: '+65', country: 'SG', label: 'Singapore' },
  { code: '+421', country: 'SK', label: 'Slovakia' },
  { code: '+386', country: 'SI', label: 'Slovenia' },
  { code: '+677', country: 'SB', label: 'Solomon Islands' },
  { code: '+252', country: 'SO', label: 'Somalia' },
  { code: '+27', country: 'ZA', label: 'South Africa' },
  { code: '+82', country: 'KR', label: 'South Korea' },
  { code: '+34', country: 'ES', label: 'Spain' },
  { code: '+94', country: 'LK', label: 'Sri Lanka' },
  { code: '+249', country: 'SD', label: 'Sudan' },
  { code: '+597', country: 'SR', label: 'Suriname' },
  { code: '+268', country: 'SZ', label: 'Swaziland' },
  { code: '+46', country: 'SE', label: 'Sweden' },
  { code: '+41', country: 'CH', label: 'Switzerland' },
  { code: '+963', country: 'SY', label: 'Syria' },
  { code: '+886', country: 'TW', label: 'Taiwan' },
  { code: '+992', country: 'TJ', label: 'Tajikistan' },
  { code: '+255', country: 'TZ', label: 'Tanzania' },
  { code: '+66', country: 'TH', label: 'Thailand' },
  { code: '+228', country: 'TG', label: 'Togo' },
  { code: '+690', country: 'TK', label: 'Tokelau' },
  { code: '+676', country: 'TO', label: 'Tonga' },
  { code: '+1', country: 'TT', label: 'Trinidad and Tobago' },
  { code: '+216', country: 'TN', label: 'Tunisia' },
  { code: '+90', country: 'TR', label: 'Turkey' },
  { code: '+993', country: 'TM', label: 'Turkmenistan' },
  { code: '+1', country: 'TC', label: 'Turks and Caicos Islands' },
  { code: '+688', country: 'TV', label: 'Tuvalu' },
  { code: '+256', country: 'UG', label: 'Uganda' },
  { code: '+380', country: 'UA', label: 'Ukraine' },
  { code: '+971', country: 'AE', label: 'UAE' },
  { code: '+44', country: 'GB', label: 'UK' },
  { code: '+1', country: 'US', label: 'USA' },
  { code: '+598', country: 'UY', label: 'Uruguay' },
  { code: '+998', country: 'UZ', label: 'Uzbekistan' },
  { code: '+678', country: 'VU', label: 'Vanuatu' },
  { code: '+379', country: 'VA', label: 'Vatican' },
  { code: '+58', country: 'VE', label: 'Venezuela' },
  { code: '+84', country: 'VN', label: 'Vietnam' },
  { code: '+681', country: 'WF', label: 'Wallis and Futuna' },
  { code: '+967', country: 'YE', label: 'Yemen' },
  { code: '+260', country: 'ZM', label: 'Zambia' },
  { code: '+263', country: 'ZW', label: 'Zimbabwe' }
];

export function Login() {
  const [selectedCode, setSelectedCode] = useState('+977');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    // Attempt to guess country based on timezone
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    
    if (timeZone === 'Asia/Kathmandu') {
      setSelectedCode('+977');
    } else if (timeZone === 'Asia/Kolkata') {
      setSelectedCode('+91');
    } else if (timeZone.startsWith('America/')) {
      setSelectedCode('+1');
    } else if (timeZone === 'Europe/London') {
      setSelectedCode('+44');
    } else if (timeZone.startsWith('Australia/')) {
      setSelectedCode('+61');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50/50 flex flex-col font-sans">
      <Header />
      
      <div className="flex-1 flex justify-center items-center py-10 px-4 sm:px-6">
        <div className="bg-white w-full max-w-[900px] shadow-2xl rounded-xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100">
          
          {/* Left Side: Visual Hero */}
          <div className="hidden md:block w-1/2 relative bg-gray-900">
             <div className="absolute inset-0 bg-black/20 z-10"></div>
             <img 
               src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
               alt="Fashion Editorial" 
               className="w-full h-full object-cover opacity-90"
             />
             <div className="absolute bottom-10 left-10 right-10 z-20 text-white">
                <h3 className="text-3xl font-bold mb-2 tracking-tight">Welcome to Nova</h3>
                <p className="text-gray-200 text-sm leading-relaxed opacity-90">
                  Discover the latest trends in fashion and explore a world of style tailored just for you.
                </p>
             </div>
          </div>

          {/* Right Side: Form Content */}
          <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            
            {/* Header */}
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-2 tracking-tight">
                Get Started
              </h2>
              <p className="text-sm text-gray-500 font-normal">
                 Please enter your mobile number to continue
              </p>
            </div>

            {/* Input */}
            <div className="mb-8">
              <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Mobile Number</label>
              <div className={`border ${showError ? 'border-red-500' : 'border-gray-300'} flex items-center h-12 px-4 rounded-lg focus-within:border-black focus-within:ring-1 focus-within:ring-black transition-all relative bg-gray-50/50`}>
                {/* Country Code (Visual) */}
                <div className="flex items-center gap-2 cursor-pointer pr-4 border-r border-gray-300 h-full">
                    <span className="text-gray-900 text-sm font-semibold">
                        {selectedCode}
                    </span>
                    <span className="text-gray-400 text-[10px] transform scale-75">▼</span>
                </div>

                {/* Invisible Native Select */}
                <select 
                    value={selectedCode}
                    onChange={(e) => setSelectedCode(e.target.value)}
                    className="absolute left-0 top-0 w-[90px] h-full opacity-0 cursor-pointer"
                >
                    {countryCodes.map((item) => (
                    <option key={item.code + item.country} value={item.code}>
                        {item.country} {item.code} ({item.label})
                    </option>
                    ))}
                </select>
                
                <input 
                  type="tel" 
                  value={phoneNumber}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, '');
                    if (val.length <= 10) {
                        setPhoneNumber(val);
                        setShowError(false); 
                    }
                  }}
                  className="flex-1 outline-none text-gray-900 text-sm font-semibold placeholder-gray-400 pl-4 bg-transparent h-full"
                  placeholder="Enter 10 digit mobile number"
                />
              </div>
              {/* Error Message */}
              {showError && (
                <p className="text-[11px] text-red-500 mt-2 font-medium flex items-center gap-1">
                  <span className="block w-1 h-1 bg-red-500 rounded-full"></span>
                  Valid 10 digit number required
                </p>
              )}
            </div>

            {/* Terms */}
            <div className="mb-8 flex items-start gap-3 group cursor-pointer" onClick={() => setIsChecked(!isChecked)}>
              <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors ${isChecked ? 'bg-black border-black' : 'border-gray-300 bg-white group-hover:border-gray-400'}`}>
                 {isChecked && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
              </div>
              
              <div className="flex-1 text-[13px] text-gray-600 leading-relaxed select-none">
                By continuing, I agree to the <span className="text-black font-semibold hover:underline">Terms of Use</span> & <span className="text-black font-semibold hover:underline">Privacy Policy</span>
              </div>
            </div>

            {/* Button */}
            <div className="mb-8">
              <Button 
                disabled={!isChecked}
                onClick={() => {
                  if (phoneNumber.length < 10) {
                    setShowError(true);
                  } else {
                    console.log("Proceeding with login:", selectedCode, phoneNumber);
                  }
                }}
                className={`w-full text-white font-bold text-[14px] py-4 uppercase tracking-widest rounded-lg transition-all shadow-lg ${
                  isChecked 
                    ? 'bg-[#fd2f24] hover:bg-[#d62016] hover:shadow-xl hover:-translate-y-0.5' 
                    : 'bg-gray-200 cursor-not-allowed text-gray-400 shadow-none'
                }`}
              >
                Continue
              </Button>
            </div>

            {/* Social / Divider */}
            <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-400 text-[11px] uppercase tracking-widest font-semibold">Or login using</span>
                </div>
            </div>

            <button className="w-full flex items-center justify-center gap-3 border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-700 font-semibold py-3 rounded-lg transition-all duration-200 text-sm mb-6 group shadow-sm hover:shadow">
                <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 group-hover:scale-110 transition-transform"/>
                <span>Continue with Google</span>
            </button>

            {/* Help Link */}
            <div className="text-center mt-auto space-y-2">
              <p className="text-[13px] text-gray-500 font-medium tracking-wide">
                New to Nova? <Link to="/signup" className="text-[#fd2f24] font-bold cursor-pointer hover:underline uppercase text-[12px]">Create Account</Link>
              </p>
              <p className="text-[13px] text-gray-400">
                Trouble logging in? <span className="text-gray-600 font-bold cursor-pointer hover:underline">Get Help</span>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
