import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// FIXED: Removed 'Thermometer' and 'Filter' from imports
import { CheckCircle, ArrowRight, ArrowLeft, Home, Droplets, MapPin, Wrench, Calculator, ArrowUpCircle, ArrowRightCircle, RefreshCw, PlusCircle, Phone, Flame } from 'lucide-react';

// --- LOCAL IMAGES ---
const BOILER_IMGS = {
  w1000: "/images/boilers/w1000.png",
  w4000: "/images/boilers/w4000.png",
  w8000: "/images/boilers/w8000.png",
  idealEsprit: "/images/boilers/esprit.png", 
  idealLogic: "/images/boilers/logic.png",
  idealVogue: "/images/boilers/vogue.png"
};

const transitionSettings = {
  type: "spring",
  stiffness: 260,
  damping: 25,
} as const;

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 50 : -50,
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
    x: direction < 0 ? 50 : -50,
    opacity: 0,
    position: 'absolute' as 'absolute'
  })
};

export default function BoilerTool() {
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(0);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [selectedChoice, setSelectedChoice] = useState<'primary' | 'secondary'>('primary'); 
  const [exitToCall, setExitToCall] = useState(false);
  
  // YOUR EMAIL
  const BUSINESS_EMAIL = "rahim.5123.rk@gmail.com";

  const [data, setData] = useState({
    jobType: '', 
    houseType: '',
    bathrooms: '',
    location: '',
    floorLevel: '',
    flueType: '', 
    name: '',
    email: '',
    phone: ''
  });

  const nextStep = () => {
    setDirection(1);
    setStep(s => s + 1);
  };

  const prevStep = () => {
    if (exitToCall) {
      setExitToCall(false);
      setStep(1);
      return;
    }
    setDirection(-1);
    setStep(s => s - 1);
  };

  // --- PRICING LOGIC ---
  const calculatePrice = (baseMin: number, baseMax: number) => {
    let extra = 0;
    if (data.flueType === 'Vertical') extra += 100;
    if (data.floorLevel === 'Upper') extra += 50;

    return `£${(baseMin + extra).toLocaleString()} - £${(baseMax + extra).toLocaleString()}`;
  };

  const recommendations = useMemo(() => {
    // 1. ENTRY LEVEL
    if (data.bathrooms === '1' && (data.houseType === 'Flat' || data.houseType === 'Terraced')) {
      return {
        primary: {
          id: 'w1000',
          name: "Worcester Bosch Greenstar 1000",
          price: calculatePrice(1395, 1595),
          kw: "24kW",
          warranty: "5 Year Guarantee",
          img: BOILER_IMGS.w1000,
          pack: ["Worcester System Filter", "Comfort+ I Control"],
          desc: "Worcester's compact entry-level boiler. Reliable and quiet."
        },
        secondary: {
          id: 'esprit',
          name: "Ideal Esprit Eco 24",
          price: calculatePrice(1295, 1495),
          kw: "24kW",
          warranty: "5 Year Warranty",
          img: BOILER_IMGS.idealEsprit,
          pack: ["Adey Magnetic Filter", "ESI Programmable Stat"],
          desc: "Great value, compact design, and highly efficient."
        }
      };
    } 
    // 2. PREMIUM LEVEL
    else if (data.bathrooms === '3+' || data.houseType === 'Detached') {
      return {
        primary: {
          id: 'w8000',
          name: "Worcester Bosch 8000 Style",
          price: calculatePrice(2550, 2850),
          kw: "35kW - 40kW",
          warranty: "12 Year Guarantee",
          img: BOILER_IMGS.w8000,
          pack: ["Worcester Greenstar Filter", "Bosch EasyControl"],
          desc: "The ultimate in power and design. Industry-leading 12-year cover."
        },
        secondary: {
          id: 'vogue',
          name: "Ideal Vogue Max C40",
          price: calculatePrice(2350, 2650),
          kw: "40kW",
          warranty: "12 Year Warranty",
          img: BOILER_IMGS.idealVogue,
          pack: ["Adey Pro Filter", "ESI Smart Thermostat"],
          desc: "Premium components with a massive 12-year warranty included."
        }
      };
    } 
    // 3. MID RANGE
    else {
      return {
        primary: {
          id: 'w4000',
          name: "Worcester Bosch 4000",
          price: calculatePrice(1750, 1950),
          kw: "30kW",
          warranty: "10 Year Guarantee",
          img: BOILER_IMGS.w4000,
          pack: ["Worcester System Filter", "Wireless Thermostat"],
          desc: "The UK's favorite modern boiler. Quiet, smart, and built to last."
        },
        secondary: {
          id: 'logic',
          name: "Ideal Logic Max C30",
          price: calculatePrice(1650, 1850),
          kw: "30kW",
          warranty: "10 Year Warranty",
          img: BOILER_IMGS.idealLogic,
          pack: ["Adey Magnetic Filter", "ESI 7-Day Thermostat"],
          desc: "Award-winning reliability with a 10-year peace of mind warranty."
        }
      };
    }
  }, [data.bathrooms, data.houseType, data.flueType, data.floorLevel]);

  const activeBoiler = recommendations[selectedChoice];

  const handleFinish = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${BUSINESS_EMAIL}`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New Combi Estimate for ${data.name}`,
          _replyto: data.email, 
          _template: "table",
          _captcha: "false",
          
          Name: data.name,
          Phone: data.phone,
          Email: data.email,
          Job_Type: data.jobType,
          Property: data.houseType,
          Bathrooms: data.bathrooms,
          Location: data.location,
          Floor_Level: data.floorLevel,
          Flue_Type: data.flueType,
          
          Selected_Boiler: activeBoiler.name,
          Power_Output: activeBoiler.kw,
          Estimated_Price: activeBoiler.price,
          Warranty: activeBoiler.warranty,
          Package: activeBoiler.pack.join(' + ')
        })
      });

      if (response.ok) {
        setStatus('success');
        nextStep();
      } else {
        const errorData = await response.json();
        console.error("FormSubmit Error:", errorData);
        throw new Error('Failed to send');
      }
    } catch (error) {
      console.error(error);
      alert("Error sending request. Please call 07480 561 846 directly.");
      setStatus('idle');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 font-sans transform transition-all will-change-transform">
      
      {/* HEADER */}
      <div className="bg-[#005C9E] text-white p-6 text-center">
        <h2 className="text-2xl font-extrabold flex items-center justify-center gap-2">
          <Calculator size={24} /> 
          Combi Boiler Estimate
        </h2>
        <p className="text-blue-100 text-sm mt-1">
          {exitToCall ? "Survey Required" : "Instant quote for Combi swaps & installs"}
        </p>
      </div>

      {/* Progress Bar */}
      {!exitToCall && status !== 'success' && (
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center relative z-20">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
            Step {step} of 7
          </span>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div 
                key={i} 
                className={`h-1.5 w-4 rounded-full transition-all duration-300 ${step >= i ? 'bg-[#005C9E]' : 'bg-gray-200'}`}
              />
            ))}
          </div>
        </div>
      )}

      <div className="p-6 min-h-[500px] relative overflow-hidden bg-white">
        <AnimatePresence initial={false} custom={direction}>

          {/* EXIT SCREEN */}
          {exitToCall && (
            <motion.div
              key="exit"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-full absolute inset-0 p-8 flex flex-col items-center justify-center text-center"
            >
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Wrench size={40} className="text-[#005C9E]" />
              </div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Book a Free Survey</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                For brand new installations (where there is no existing boiler), we need to send an engineer to assess your property to give you an accurate price.
              </p>
              <a 
                href="tel:07480561846"
                className="w-full bg-[#D9232D] text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 transition-colors flex justify-center items-center gap-2 mb-4"
              >
                <Phone size={20} /> Call 07480 561 846
              </a>
              <button 
                onClick={() => { setExitToCall(false); setStep(1); }}
                className="text-gray-500 font-bold text-sm hover:text-[#005C9E]"
              >
                Start Over
              </button>
            </motion.div>
          )}
          
          {/* STEP 1: JOB TYPE */}
          {!exitToCall && step === 1 && (
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
                <Wrench className="text-[#005C9E]" /> Installation Type?
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => { setData({ ...data, jobType: 'Swap' }); nextStep(); }}
                  className="p-6 rounded-xl border-2 border-gray-100 hover:border-[#005C9E] hover:bg-blue-50 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-[#005C9E]">
                      <RefreshCw size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Combi Boiler Swap</h4>
                      <p className="text-sm text-gray-500">Replacing an existing combi boiler in the same location.</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => { setData({ ...data, jobType: 'New' }); setExitToCall(true); }}
                  className="p-6 rounded-xl border-2 border-gray-100 hover:border-[#005C9E] hover:bg-blue-50 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-[#005C9E]">
                      <PlusCircle size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">New / System Conversion</h4>
                      <p className="text-sm text-gray-500">Converting from a tank system or new location.</p>
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: HOUSE TYPE */}
          {!exitToCall && step === 2 && (
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

          {/* STEP 3: BATHROOMS */}
          {!exitToCall && step === 3 && (
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

          {/* STEP 4: LOCATION (ROOM) */}
          {!exitToCall && step === 4 && (
            <motion.div
              key="step4"
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

          {/* STEP 5: FLOOR LEVEL */}
          {!exitToCall && step === 5 && (
            <motion.div
              key="step5"
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
                <ArrowUpCircle className="text-[#005C9E]" /> Which Floor?
              </h3>
              <div className="space-y-4">
                <button
                  onClick={() => { setData({ ...data, floorLevel: 'Ground' }); nextStep(); }}
                  className="w-full p-6 text-left rounded-xl border border-gray-200 hover:border-[#005C9E] hover:bg-blue-50 transition-colors font-bold text-gray-700 group active:bg-blue-100"
                >
                  <div className="flex justify-between items-center">
                    <span>Ground Floor / Basement</span>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-[#005C9E]" />
                  </div>
                </button>

                <button
                  onClick={() => { setData({ ...data, floorLevel: 'Upper' }); nextStep(); }}
                  className="w-full p-6 text-left rounded-xl border border-gray-200 hover:border-[#005C9E] hover:bg-blue-50 transition-colors font-bold text-gray-700 group active:bg-blue-100"
                >
                  <div className="flex justify-between items-center">
                    <span>1st Floor or Higher</span>
                    <ArrowRight size={18} className="text-gray-300 group-hover:text-[#005C9E]" />
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 6: FLUE TYPE */}
          {!exitToCall && step === 6 && (
            <motion.div
              key="step6"
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
                <ArrowRightCircle className="text-[#005C9E]" /> Flue Type?
              </h3>
              <div className="grid grid-cols-1 gap-4">
                <button
                  onClick={() => { setData({ ...data, flueType: 'Horizontal' }); nextStep(); }}
                  className="p-6 rounded-xl border-2 border-gray-100 hover:border-[#005C9E] hover:bg-blue-50 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-[#005C9E]">
                      <ArrowRightCircle size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Horizontal (Wall)</h4>
                      <p className="text-sm text-gray-500">Comes out of the side of the house.</p>
                    </div>
                  </div>
                </button>

                <button
                  onClick={() => { setData({ ...data, flueType: 'Vertical' }); nextStep(); }}
                  className="p-6 rounded-xl border-2 border-gray-100 hover:border-[#005C9E] hover:bg-blue-50 transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-full text-[#005C9E]">
                      <ArrowUpCircle size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-800">Vertical (Roof)</h4>
                      <p className="text-sm text-gray-500">Goes up through the roof tiles.</p>
                    </div>
                  </div>
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 7: SELECTION & CAPTURE */}
          {!exitToCall && step === 7 && (
            <motion.div
              key="step7"
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

              <div className="flex bg-gray-100 p-1 rounded-lg mb-4">
                <button onClick={() => setSelectedChoice('primary')} className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${selectedChoice === 'primary' ? 'bg-white text-[#005C9E] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>Recommended</button>
                <button onClick={() => setSelectedChoice('secondary')} className={`flex-1 py-2 text-xs font-bold rounded-md transition-all ${selectedChoice === 'secondary' ? 'bg-white text-[#005C9E] shadow-sm' : 'text-gray-500 hover:text-gray-700'}`}>Alternative</button>
              </div>

              {/* NEW RESULT CARD DESIGN */}
              <div className="border border-gray-200 rounded-3xl p-5 mb-5 shadow-lg relative bg-white">
                
                {/* Combi Label Badge */}
                <div className="absolute top-4 left-4 bg-green-100 text-green-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider flex items-center gap-1">
                  <Flame size={10} fill="currentColor" /> Combi Boiler
                </div>

                <div className="absolute top-0 right-0 bg-[#D9232D] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">{activeBoiler.warranty}</div>
                
                {/* Large Centered Image */}
                <div className="w-full h-48 bg-gradient-to-b from-blue-50 to-white rounded-xl flex items-center justify-center mb-4 mt-2 p-2">
                   <img src={activeBoiler.img} alt="Boiler" className="h-full object-contain drop-shadow-xl" />
                </div>

                <div className="text-center mb-4">
                  <h3 className="font-extrabold text-gray-900 text-2xl leading-tight">{activeBoiler.name}</h3>
                  <div className="flex justify-center items-baseline gap-2 mt-1">
                    <p className="text-[#005C9E] font-extrabold text-3xl">{activeBoiler.price}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{activeBoiler.kw} Output • {data.flueType} Flue</p>
                </div>

                <div className="bg-blue-50 rounded-xl p-4 space-y-2 mb-2">
                   <p className="text-[10px] font-bold text-[#005C9E] uppercase tracking-wider mb-2">Package Includes:</p>
                   {activeBoiler.pack.map((item, i) => (
                     <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-700">
                       <div className="w-5 h-5 rounded-full bg-white text-[#005C9E] flex items-center justify-center shadow-sm">
                         <CheckCircle size={12} />
                       </div>
                       {item}
                     </div>
                   ))}
                </div>
              </div>

              <form onSubmit={handleFinish} className="space-y-3">
                <input type="text" placeholder="Your Name" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#005C9E] focus:bg-white outline-none transition-colors" onChange={(e) => setData({ ...data, name: e.target.value })} />
                <input type="email" placeholder="Email Address" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#005C9E] focus:bg-white outline-none transition-colors" onChange={(e) => setData({ ...data, email: e.target.value })} />
                <input type="tel" placeholder="Mobile Number" required className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:border-[#005C9E] focus:bg-white outline-none transition-colors" onChange={(e) => setData({ ...data, phone: e.target.value })} />
                <button type="submit" disabled={status === 'sending'} className="w-full bg-[#D9232D] text-white py-3.5 rounded-xl font-bold text-base hover:bg-red-700 transition-colors disabled:opacity-70 flex justify-center items-center gap-2">
                  {status === 'sending' ? 'Processing...' : <>Get My Estimate <ArrowRight size={16} /></>}
                </button>
              </form>
            </motion.div>
          )}

          {/* STEP 8: SUCCESS */}
          {step === 8 && (
            <motion.div
              key="step8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={transitionSettings}
              className="w-full absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4"><CheckCircle size={40} className="text-green-600" /></div>
              <h3 className="text-2xl font-extrabold text-gray-900 mb-2">Estimate Sent!</h3>
              <p className="text-sm text-gray-600 mb-6">We have emailed the details to <strong>{data.email}</strong>. We will be in touch shortly.</p>
              <button onClick={() => setStep(1)} className="text-[#005C9E] font-bold hover:underline flex items-center gap-2 text-sm"><Wrench size={14} /> Start New Quote</button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}