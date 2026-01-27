import { useState } from 'react';

export default function BoilerTool() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    houseType: '',
    bathrooms: '',
    location: '',
    name: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const nextStep = () => setStep(step + 1);

  const calculateEstimate = () => {
    // Your base price for a basic swap
    let min = 500;
    let max = 550;

    // Adjustments based on property size or complexity
    if (data.bathrooms === '2' || data.bathrooms === '3+') {
      min += 150; 
      max += 200;
    }
    if (data.location === 'Upper Floor') {
      min += 50;
      max += 100;
    }

    return `£${min} - £${max}`;
  };

  const handleFinish = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    try {
      // Sends data to your existing Brevo backend
      await fetch('/functions/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          service_name: "Interactive Boiler Quote",
          customer_name: data.name,
          customer_email: "User@BoilerTool.com",
          customer_phone: data.phone,
          contact_preference: "Phone Call",
          message: `BRAND PREFERENCE: Ideal/Worcester | PROPERTY: ${data.houseType} | BATHS: ${data.bathrooms} | FLOOR: ${data.location} | ESTIMATE: ${calculateEstimate()}`
        })
      });
      setStatus('success');
      nextStep();
    } catch (error) {
      console.error(error);
      alert("Error sending request.");
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#D9232D] animate-fadeIn">
      {/* Progress Bar */}
      <div className="flex justify-between mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className={`h-2 w-1/5 rounded ${step >= i ? 'bg-[#005C9E]' : 'bg-gray-200'}`} />
        ))}
      </div>

      {step === 1 && (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">What type of property is it?</h3>
          <div className="grid grid-cols-2 gap-4">
            {['Flat', 'Terraced', 'Semi', 'Detached'].map(type => (
              <button key={type} onClick={() => { setData({...data, houseType: type}); nextStep(); }} 
                className="p-6 border-2 rounded-xl hover:border-[#005C9E] hover:bg-blue-50 transition-all font-bold text-gray-700">
                {type}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 2 && (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">How many bathrooms?</h3>
          <div className="grid grid-cols-3 gap-4">
            {['1', '2', '3+'].map(num => (
              <button key={num} onClick={() => { setData({...data, bathrooms: num}); nextStep(); }}
                className="p-6 border-2 rounded-xl hover:border-[#005C9E] hover:bg-blue-50 transition-all font-bold text-gray-700 text-xl">
                {num}
              </button>
            ))}
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Where is the boiler?</h3>
          <div className="grid grid-cols-2 gap-4">
            <button onClick={() => { setData({...data, location: 'Ground Floor'}); nextStep(); }} className="p-6 border-2 rounded-xl hover:border-[#005C9E] font-bold text-gray-700">Ground Floor</button>
            <button onClick={() => { setData({...data, location: 'Upper Floor'}); nextStep(); }} className="p-6 border-2 rounded-xl hover:border-[#005C9E] font-bold text-gray-700">Upper Floor</button>
          </div>
        </div>
      )}

      {step === 4 && (
        <div className="text-center">
          <div className="bg-blue-50 p-6 rounded-xl mb-6">
            <p className="text-sm font-bold text-[#005C9E] uppercase tracking-wider mb-2">Your Recommended Install</p>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-2">{calculateEstimate()}</h2>
            <p className="text-gray-600 font-medium">For a premium <strong>Ideal Esprit</strong> or <strong>Worcester Bosch</strong></p>
            <div className="mt-4 text-left text-xs text-gray-500 space-y-1 bg-white/50 p-3 rounded-lg">
              <p>✓ Basic boiler swap included</p>
              <p>✓ New Horizontal Flue included</p>
              <p>✓ Professional Filter & Thermostat included</p>
            </div>
          </div>
          
          <form onSubmit={handleFinish} className="space-y-4">
            <input type="text" placeholder="Your Name" required className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" onChange={(e)=>setData({...data, name: e.target.value})} />
            <input type="tel" placeholder="Phone Number" required className="w-full p-4 border rounded-xl focus:ring-2 focus:ring-blue-500 outline-none" onChange={(e)=>setData({...data, phone: e.target.value})} />
            <button type="submit" disabled={status === 'sending'} className="w-full bg-[#D9232D] text-white py-4 rounded-xl font-bold text-lg hover:bg-red-700 shadow-lg transition-all transform hover:scale-[1.02] disabled:bg-gray-400">
              {status === 'sending' ? 'Sending...' : 'Secure This Price Now'}
            </button>
          </form>
        </div>
      )}

      {step === 5 && (
        <div className="text-center py-10 animate-bounceIn">
          <div className="text-6xl mb-4">🚀</div>
          <h3 className="text-2xl font-bold text-gray-800">All Set!</h3>
          <p className="text-gray-600 mt-2">We've received your request for an Ideal/Worcester install. We will call you on <strong>{data.phone}</strong> shortly.</p>
        </div>
      )}
    </div>
  );
}