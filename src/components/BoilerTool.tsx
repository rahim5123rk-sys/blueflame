import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight, ArrowLeft, Home, Droplets, MapPin, Wrench, Thermometer, Filter } from 'lucide-react';

// --- IMAGES (Placeholders - Replace with real boiler images later if you have them) ---
const BOILER_IMGS = {
  w1000: "https://www.worcester-bosch.co.uk/images/products/boilers/greenstar-1000/greenstar-1000-front.png",
  w4000: "https://www.worcester-bosch.co.uk/images/products/boilers/greenstar-4000/greenstar-4000-front.png",
  w8000: "https://www.worcester-bosch.co.uk/images/products/boilers/greenstar-8000-lifestyle/greenstar-8000-white-front.png",
  idealEsprit: "https://idealheating.com/uploads/images/Esprit-Eco2.png", // Generic Ideal placeholder
  idealLogic: "https://idealheating.com/uploads/images/Logic-Max-Combi-C30.png",
  idealVogue: "https://idealheating.com/uploads/images/Vogue-Max-Combi-Gen2.png"
};

// "Instant" Animation Settings (GPU Optimized)
const transitionSettings = {
  type: "spring",
  stiffness: 500,
  damping: 40,
  mass: 0.5
} as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 10 : -10,
    opacity: 0,
    position: 'absolute' as 'absolute'
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    position: 'relative' as 'relative'
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 10 : -10,
    opacity: 0,
    position: 'absolute' as 'absolute'
  })
};

export default function BoilerTool() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [selectedChoice, setSelectedChoice] = useState<'primary' | 'secondary'>('primary'); // NEW: Toggle state
  
  const [data, setData] = useState({
    houseType: '',
    bathrooms: '',
    location: '',
    name: '',
    phone: ''
  });

  const nextStep = () => {
    setDirection(1);
    setStep(s => s + 1);
  };

  const prevStep = () => {
    setDirection(-1);
    setStep(s => s - 1);
  };

  // --- LOGIC ENGINE ---
  const recommendations = useMemo(() => {
    // 1. ENTRY LEVEL (Flats/1 Bath)
    if (data.bathrooms === '1' && (data.houseType === 'Flat' || data.houseType === 'Terraced')) {
      return {
        primary: {
          id: 'w1000',
          name: "Worcester Bosch Greenstar 1000",
          price: "£1,750 - £2,050",
          kw: "24kW",
          warranty: "5 Year Guarantee",
          img: BOILER_IMGS.w1000,
          pack: ["Worcester System Filter", "Comfort+ I Control"],
          desc: "Worcester's compact entry-level boiler. Reliable and quiet."
        },
        secondary: {
          id: 'esprit',
          name: "Ideal Esprit Eco 24",
          price: "£1,650 - £1,950",
          kw: "24kW",
          warranty: "5 Year Warranty",
          img: BOILER_IMGS.idealEsprit,
          pack: ["Adey Magnetic Filter", "ESI Programmable Stat"],
          desc: "Great value, compact design, and highly efficient."
        }
      };
    } 
    // 2. PREMIUM LEVEL (Large/Detached)
    else if (data.bathrooms === '3+' || data.houseType === 'Detached') {
      return {
        primary: {
          id: 'w8000',
          name: "Worcester Bosch 8000 Style",
          price: "£3,100 - £3,600",
          kw: "35kW - 40kW",
          warranty: "12 Year Guarantee",
          img: BOILER_IMGS.w8000,
          pack: ["Worcester Greenstar Filter", "Bosch EasyControl"],
          desc: "The ultimate in power and design. Industry-leading 12-year cover."
        },
        secondary: {
          id: 'vogue',
          name: "Ideal Vogue Max C40",
          price: "£2,900 - £3,400",
          kw: "40kW",
          warranty: "12 Year Warranty",
          img: BOILER_IMGS.idealVogue,
          pack: ["Adey Pro Filter", "ESI Smart Thermostat"],
          desc: "Premium components with a massive 12-year warranty included."
        }
      };
    } 
    // 3. MID RANGE (Standard)
    else {
      return {
        primary: {
          id: 'w4000',
          name: "Worcester Bosch 4000",
          price: "£2,250 - £2,650",
          kw: "30kW",
          warranty: "10 Year Guarantee",
          img: BOILER_IMGS.w4000,
          pack: ["Worcester System Filter", "Wireless Thermostat"],
          desc: "The UK's favorite modern boiler. Quiet, smart, and built to last."
        },
        secondary: {
          id: 'logic',
          name: "Ideal Logic Max C30",
          price: "£2,100 - £2,500",
          kw: "30kW",
          warranty: "10 Year Warranty",
          img: BOILER_IMGS.idealLogic,
          pack: ["Adey Magnetic Filter", "ESI 7-Day Thermostat"],
          desc: "Award-winning reliability with a 10-year peace of mind warranty."
        }
      };
    }
  }, [data.bathrooms, data.houseType]);

  const activeBoiler = recommendations[selectedChoice];

  const handleFinish = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch('/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_name: "Interactive Boiler Quote",
          customer_name: data.name,
          customer_email: "User@BoilerTool.com", 
          customer_phone: data.phone,
          contact_preference: "Phone Call",
          message: `PROPERTY: ${data.houseType}, ${data.bathrooms} Baths, ${data.location}. 
                    SELECTED: ${activeBoiler.name} (${activeBoiler.kw}). 
                    PRICE: ${activeBoiler.price}. 
                    WARRANTY: ${activeBoiler.warranty}.
                    INCLUDES: ${activeBoiler.pack.join(' + ')}`
        })
      });

      if (response.ok) {
        setStatus('success');
        nextStep();
      } else {
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      alert("Error. Please call 07480 561 846.");
      setStatus('idle');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 font-sans transform transition-all will-change-transform">
      
      {/* Header */}
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center relative z-20">
        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
          Quick Quote
        </span>
        <div className="flex gap-1.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div 
              key={i} 
              className={`h-1.5 w-6 rounded-full transition-all duration-300 ${step >= i ? 'bg-[#005C9E]' : 'bg-gray-200'}`}
            />
          ))}
        </div>
      </div>

      <div className="p-6 min-h-[500px] relative overflow-hidden bg-white">
        <AnimatePresence initial={false} custom={direction}>
          
          {/* STEP 1: HOUSE TYPE */}
          {step === 1 && (
            <motion.div
              key="step1"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings}
              className="w-full absolute inset-0 p-6 will-change-transform"
            >
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                <Home className="text-[#005C9E]" /> Property Type?
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {['Flat', 'Terraced', 'Semi', 'Detached'].map(type => (
                  <button
                    key={type}
                    onClick={() => { setData({ ...data, houseType: type }); nextStep(); }}
                    className="h-28 rounded-xl border border-gray-200 hover:border-[#005C9E] hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-1 group active:bg-blue-100"
                  >
                    <span className="text-lg font-bold text-gray-700 group-hover:text-[#005C9E]">{type}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 2: BATHROOMS */}
          {step === 2 && (
            <motion.div
              key="step2"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings}
              className="w-full absolute inset-0 p-6 will-change-transform"
            >
              <button onClick={prevStep} className="text-gray-400 hover:text-[#005C9E] mb-4 text-xs font-bold flex items-center gap-1 uppercase tracking-wide">
                <ArrowLeft size={14} /> Back
              </button>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                <Droplets className="text-[#005C9E]" /> Bathrooms?
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {['1', '2', '3+'].map(num => (
                  <button
                    key={num}
                    onClick={() => { setData({ ...data, bathrooms: num }); nextStep(); }}
                    className="h-32 rounded-xl border border-gray-200 hover:border-[#005C9E] hover:bg-blue-50 transition-colors flex flex-col items-center justify-center gap-1 group active:bg-blue-100"
                  >
                    <span className="text-3xl font-extrabold text-gray-300 group-hover:text-[#005C9E] transition-colors">{num}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 3: LOCATION */}
          {step === 3 && (
            <motion.div
              key="step3"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings}
              className="w-full absolute inset-0 p-6 will-change-transform"
            >
              <button onClick={prevStep} className="text-gray-400 hover:text-[#005C9E] mb-4 text-xs font-bold flex items-center gap-1 uppercase tracking-wide">
                <ArrowLeft size={14} /> Back
              </button>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                <MapPin className="text-[#005C9E]" /> Boiler Location?
              </h3>
              <div className="space-y-3">
                {['Kitchen', 'Airing Cupboard', 'Garage', 'Loft'].map(loc => (
                  <button
                    key={loc}
                    onClick={() => { setData({ ...data, location: loc }); nextStep(); }}
                    className="w-full p-4 text-left rounded-xl border border-gray-200 hover:border-[#005C9E] hover:bg-blue-50 transition-colors font-bold text-gray-700 flex justify-between items-center group active:bg-blue-100"
                  >
                    {loc}
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-[#005C9E]" />
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {/* STEP 4: SELECTION & CAPTURE */}
          {step === 4 && (
            <motion.div
              key="step4"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={transitionSettings}
              className="w-full absolute inset-0 p-6 overflow-y-auto scrollbar-hide"
            >
              <button onClick={prevStep} className="text-gray-400 hover:text-[#005C9E] mb-2 text-xs font-bold flex items-center gap-1 uppercase tracking-wide">
                <ArrowLeft size={14} /> Back
              </button>

              {/* TOGGLE SWITCH */}
              <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
                <button
                  onClick={() => setSelectedChoice('primary')}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                    selectedChoice === 'primary' ? 'bg-white text-[#005C9E] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Recommended
                </button>
                <button
                  onClick={() => setSelectedChoice('secondary')}
                  className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${
                    selectedChoice === 'secondary' ? 'bg-white text-[#005C9E] shadow-sm' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Alternative
                </button>
              </div>

              {/* BOILER CARD */}
              <div className="border border-gray-200 rounded-2xl p-4 mb-6 shadow-sm relative">
                <div className="absolute top-0 right-0 bg-[#D9232D] text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
                  {activeBoiler.warranty}
                </div>
                
                <div className="flex gap-4 items-center mb-4">
                  {/* Boiler Image (Hidden on very small screens if needed) */}
                  <div className="w-20 h-24 bg-gray-50 rounded-lg flex-shrink-0 flex items-center justify-center p-2">
                     <img src={activeBoiler.img} alt="Boiler" className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-gray-900 text-lg leading-tight">{activeBoiler.name}</h3>
                    <p className="text-[#005C9E] font-bold text-xl">{activeBoiler.price}</p>
                    <p className="text-xs text-gray-500">{activeBoiler.kw} Output • Installed</p>
                  </div>
                </div>

                {/* ADD-ONS SECTION */}
                <div className="bg-blue-50 rounded-lg p-3 space-y-2 mb-4">
                   <p className="text-[10px] font-bold text-[#005C9E] uppercase tracking-wider">Installation Includes:</p>
                   {activeBoiler.pack.map((item, i) => (
                     <div key={i} className="flex items-center gap-2 text-xs font-bold text-gray-700">
                       {i === 0 ? <Filter size={12} className="text-[#005C9E]" /> : <Thermometer size={12} className="text-[#005C9E]" />}
                       {item}
                     </div>
                   ))}
                </div>

                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle size={12} className="text-green-500" /> Gas Safe Installation
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle size={12} className="text-green-500" /> Old Boiler Removal
                  </div>
                </div>
              </div>

              <form onSubmit={handleFinish} className="space-y-3">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#005C9E] focus:bg-white outline-none transition-colors"
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  required
                  className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#005C9E] focus:bg-white outline-none transition-colors"
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-[#D9232D] text-white py-3.5 rounded-xl font-bold text-base hover:bg-red-700 transition-colors disabled:opacity-70 flex justify-center items-center gap-2"
                >
                  {status === 'sending' ? (
                    'Processing...'
                  ) : (
                    <>
                      Confirm {activeBoiler.name} Quote <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 5: SUCCESS */}
          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={transitionSettings}
              className="w-full absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle size={40} className="text-green-600" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Request Sent!</h3>
              <p className="text-sm text-gray-600 mb-6">
                We'll call <strong>{data.name}</strong> shortly to discuss your <strong>{activeBoiler.name}</strong> install.
              </p>
              <button
                onClick={() => setStep(1)}
                className="text-[#005C9E] font-bold hover:underline flex items-center gap-2 text-sm"
              >
                <Wrench size={14} /> Start New Quote
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}