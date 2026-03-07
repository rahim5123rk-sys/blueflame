import { useState, useEffect, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import BoilerTool from '../components/BoilerTool';
import { BLOG_POSTS } from './Blog';

import { CheckCircle, Flame, ArrowRight, Zap, ShieldCheck, Star, MapPin, Clock, Phone, ChevronDown, Wrench, FileCheck, HardHat, AlertTriangle } from 'lucide-react';

/* ─── Reusable scroll-triggered wrapper ────────────────────────────── */
function Reveal({ children, delay = 0, className = '', direction = 'up' }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 60, y: 0 },
    right: { x: -60, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated counter for stats ───────────────────────────────────── */
function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = value;
    const stepTime = (duration * 1000) / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── SVG Icons ────────────────────────────────────────────────────── */
const WhatsAppIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="mr-2">
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
  </svg>
);

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg" className="inline-block mr-2">
    <path d="M17.64 9.20455C17.64 8.56682 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 12.0873 12.9973 13.1455 12.045 13.8245V15.7582H14.4955C15.96 14.3318 16.965 12.3818 17.295 10.05H17.64V9.20455Z" fill="#4285F4"/>
    <path d="M9 18C11.43 18 13.4673 17.2036 14.9618 15.7582L12.5114 13.8245C11.715 14.3318 10.4727 14.7273 9 14.7273C6.48955 14.7273 4.38545 12.9973 3.63818 10.9091H1.09091V12.915C2.56182 15.84 5.48727 18 9 18Z" fill="#34A853"/>
    <path d="M3.63818 10.9091C3.465 10.4018 3.36818 9.84545 3.36818 9.27273C3.36818 8.69999 3.465 8.14364 3.63818 7.63636V5.63001H1.09091C0.381818 7.02545 0 8.23636 0 9.27273C0 10.3091 0.381818 11.52 1.09091 12.915L3.63818 10.9091Z" fill="#FBBC05"/>
    <path d="M9 3.27273C10.275 3.27273 11.49 3.71999 12.4782 4.63636L15.0264 2.08818C13.4673 0.791818 11.43 0 9 0C5.48727 0 2.56182 2.15999 1.09091 5.63001L3.63818 7.63636C4.38545 5.54818 6.48955 3.27273 9 3.27273Z" fill="#EA4335"/>
  </svg>
);

export default function Home() {
  const navigate = useNavigate();
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const services = [
    { name: 'Annual Boiler Service', image: '/images/boiler-service.webp', icon: Wrench, desc: 'Keep your boiler running safely and efficiently all year round.' },
    { name: 'Landlord Gas Safety Certificate (CP12)', image: '/images/gas-certificate.webp', icon: FileCheck, desc: 'Stay legally compliant with certified annual inspections.' },
    { name: 'New Boiler Installation', image: '/images/boiler-install.webp', icon: HardHat, desc: 'Premium boilers supplied and fitted by accredited engineers.' },
    { name: 'Boiler Breakdown & Repair', image: '/images/emergency-repair.webp', icon: AlertTriangle, desc: 'Fast response emergency repairs when you need them most.' },
  ];

  const serviceAreas = {
    worcestershire: ['Worcester', 'Droitwich Spa', 'Malvern', 'Redditch', 'Bromsgrove', 'Evesham', 'Pershore'],
    westMidlands: ['Birmingham', 'Dudley', 'Wolverhampton', 'Walsall', 'Solihull', 'Stourbridge', 'Halesowen'],
  };

  const testimonials = [
    { name: 'Sarah L.', comment: 'The boys from Blue Flame saved the day when my boiler wasn\'t turning on, and straight away, they found the issue and resolved it. They have done numerous jobs for me, from boiler service to fitting new heaters around the house. They\'re very good at what they do.', rating: 5 },
    { name: 'Tom H.', comment: 'Needed a landlord gas safety certificate at short notice. They were able to fit me in quickly and the whole process was seamless. Excellent service.', rating: 5 },
    { name: 'Emily R.', comment: 'Our boiler broke down in the middle of winter. Blue Flame responded to our emergency call immediately and had it fixed the same day. Lifesavers!', rating: 5 },
  ];

  const faqs = [
    { q: 'Are you Gas Safe registered?', a: 'Yes, absolutely. All our engineers are fully qualified and on the Gas Safe Register. Your safety is our number one priority.' },
    { q: 'What is your call-out charge for breakdowns?', a: 'We have a standard call-out and diagnosis fee of £60. This covers the first hour of work. We will always provide you with a full quote for any required repairs before carrying out further work.' },
    { q: 'How often should I get my boiler serviced?', a: 'We recommend an annual boiler service to ensure it is running safely and efficiently. This can prevent costly breakdowns and prolong the life of your boiler.' },
    { q: 'What payment methods do you accept?', a: 'We accept bank transfers, cash, and all major credit and debit cards.' },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleServiceClick = (serviceName: string) => {
    if (serviceName === 'New Boiler Installation') {
      document.getElementById('boiler-quote-tool')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/services', { state: { service: serviceName } });
    }
  };

  /* ─── Stagger variants ──────────────────────────────────────────── */
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const } },
  };

  return (
    <div className="font-sans overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════
          1. HERO SECTION — Cinematic parallax with animated reveals
         ═══════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-[100svh] flex items-center overflow-hidden bg-gray-950">

        {/* Parallax background layers */}
        <motion.div style={{ y: heroY }} className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-blue-950 to-[#001a33]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
        </motion.div>

        {/* Animated ambient glow orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute -bottom-48 -right-48 w-[600px] h-[600px] bg-sky-500 rounded-full blur-[150px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], opacity: [0.08, 0.15, 0.08] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-600 rounded-full blur-[140px]"
        />

        <motion.div style={{ opacity: heroOpacity }} className="container mx-auto px-4 relative z-10 pt-32 pb-20 lg:pt-0 lg:pb-0">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT: Animated text reveals */}
            <div className="text-white text-center lg:text-left">

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/[0.08] backdrop-blur-sm border border-white/[0.12] rounded-full px-5 py-2.5 mb-8 text-sm font-semibold text-blue-200"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400"></span>
                </span>
                Gas Safe Registered · Worcester
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.4, 0.25, 1] }}
                className="text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-[4.5rem] font-extrabold mb-6 leading-[1.08] tracking-tight text-white"
              >
                Boiler Experts{' '}
                <br className="hidden lg:block"/>
                <span className="relative">
                  <span className="bg-gradient-to-r from-sky-300 via-sky-400 to-blue-400 bg-clip-text text-transparent">in Worcester.</span>
                  <motion.span
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.4, 0.25, 1] }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-blue-500 rounded-full origin-left"
                  />
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6 }}
                className="text-lg sm:text-xl text-blue-100/80 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
              >
                From emergency repairs to brand-new boiler installations. Honest pricing, quality workmanship, and 24/7 support across Worcestershire.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => document.getElementById('boiler-quote-tool')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group bg-gradient-to-r from-red-700 to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-[0_8px_30px_-4px_rgba(217,35,45,0.5)] hover:shadow-[0_12px_40px_-4px_rgba(217,35,45,0.6)] transition-shadow flex items-center justify-center gap-2"
                >
                  Get Instant Estimate
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </motion.button>
                <motion.a
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/447480561846"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/[0.08] backdrop-blur-md text-white font-bold py-4 px-8 rounded-2xl hover:bg-white/[0.15] transition-all border border-white/[0.15] flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon /> WhatsApp Us
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm font-semibold"
              >
                {[
                  { icon: <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />, label: 'Gas Safe Registered' },
                  { icon: <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />, label: 'Fully Insured' },
                  { icon: <Star className="w-4 h-4 text-yellow-400 flex-shrink-0 fill-yellow-400" />, label: '5★ Google Reviews' },
                ].map((badge, i) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                    className="flex items-center gap-2 bg-white/[0.06] border border-white/[0.1] rounded-xl px-3.5 py-2 text-white/90"
                  >
                    {badge.icon} {badge.label}
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT: Special offer card with floating animation */}
            <motion.div
              initial={{ opacity: 0, x: 40, rotateY: -5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              className="relative max-w-sm mx-auto lg:mr-0 w-full mt-8 lg:mt-0 perspective-1000"
            >
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative bg-white rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] overflow-hidden border border-white/20 group">

                  {/* Shimmer effect on hover */}
                  <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden rounded-3xl">
                    <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shimmer" />
                  </div>

                  {/* Special Offer Badge */}
                  <motion.div
                    initial={{ x: 20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1.0 }}
                    className="absolute top-0 right-0 bg-gradient-to-r from-red-700 to-red-600 text-white text-xs font-bold px-5 py-2.5 rounded-bl-2xl z-20 shadow-lg flex items-center gap-1.5"
                  >
                    <Flame size={12} fill="currentColor" /> SPECIAL OFFER
                  </motion.div>

                  {/* IMAGE SECTION */}
                  <div className="bg-gradient-to-b from-blue-50/80 to-white pt-10 pb-4 px-6 relative flex justify-center items-center h-64">
                    <div className="absolute w-48 h-48 bg-blue-200 rounded-full blur-3xl opacity-40" />
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                      src="/images/boilers/w1000.webp"
                      alt="Worcester 1000"
                      className="relative w-56 h-auto object-contain drop-shadow-2xl z-10"
                    />
                  </div>

                  {/* DETAILS SECTION */}
                  <div className="p-6 pt-2">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-extrabold text-gray-900 mb-1">Worcester Bosch 1000</h3>
                      <div className="inline-block bg-green-100 text-green-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                        30kW Upgrade Included
                      </div>
                    </div>

                    <div className="space-y-3 mb-6 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      {[
                        { icon: <Zap className="w-4 h-4 text-blue-800 mt-0.5 flex-shrink-0" />, text: 'ESI Programmable Thermostat', bold: true },
                        { icon: <ShieldCheck className="w-4 h-4 text-blue-800 mt-0.5 flex-shrink-0" />, text: 'Adey Filter & Chemicals', bold: false },
                        { icon: <CheckCircle className="w-4 h-4 text-blue-800 mt-0.5 flex-shrink-0" />, text: 'Full Installation & Fittings', bold: false },
                      ].map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          {feature.icon}
                          <span className={`text-sm ${feature.bold ? 'font-bold text-gray-700' : 'font-medium text-gray-600'}`}>{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-end mb-6 border-t border-gray-100 pt-4">
                      <div className="text-left">
                        <p className="text-xs text-gray-400 font-medium mb-0.5">Supplied & Fitted</p>
                        <p className="text-3xl font-extrabold text-blue-800">£1,650</p>
                      </div>
                      <div className="text-right pb-1">
                        <span className="text-sm text-gray-400 line-through font-medium">£1,850</span>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => document.getElementById('boiler-quote-tool')?.scrollIntoView({ behavior: 'smooth' })}
                      className="w-full bg-gradient-to-r from-blue-800 to-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-shadow flex justify-center items-center gap-2"
                    >
                      Claim Deal <ArrowRight size={18} />
                    </motion.button>
                    <p className="text-[10px] text-gray-400 text-center mt-3">*Standard horizontal flue swap.</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2"
        >
          <span className="text-white/40 text-xs font-medium tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          TRUST BADGE STRIP — Animated logo marquee
         ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white border-b border-gray-100 py-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <Reveal>
            <p className="text-center text-gray-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              Fully Accredited & Installing Top Brands
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
              {[
                { src: '/images/gas-safe.webp', alt: 'Gas Safe Register', h: 'h-14' },
                { src: '/images/worcester.webp', alt: 'Worcester Bosch Accredited', h: 'h-10' },
                { src: '/images/ideal.webp', alt: 'Ideal Boilers', h: 'h-12' },
              ].map((logo, i) => (
                <motion.img
                  key={logo.alt}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 0.7, y: 0 }}
                  whileHover={{ opacity: 1, scale: 1.1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.h} w-auto object-contain grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer`}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          STATS STRIP — Animated counters
         ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '24px 24px' }} />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { value: 500, suffix: '+', label: 'Boilers Installed', icon: <Flame className="w-6 h-6" /> },
              { value: 5, suffix: '★', label: 'Google Rating', icon: <Star className="w-6 h-6 fill-current" /> },
              { value: 24, suffix: '/7', label: 'Emergency Support', icon: <Clock className="w-6 h-6" /> },
              { value: 14, suffix: '+', label: 'Areas Covered', icon: <MapPin className="w-6 h-6" /> },
            ].map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-2xl text-sky-300 mb-4">
                  {stat.icon}
                </div>
                <p className="text-3xl sm:text-4xl font-extrabold text-white mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-blue-200/70 text-sm font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          2. SERVICES OVERVIEW — Cards with staggered entrance
         ═══════════════════════════════════════════════════════════════ */}
      <section id="services" className="bg-white py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-blue-800 font-bold uppercase tracking-[0.2em] text-xs mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Core Services</h2>
              <p className="mt-3 text-lg text-gray-500 max-w-2xl mx-auto">Professional solutions for all your heating needs — from routine servicing to full installations.</p>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.a
                  key={service.name}
                  variants={staggerItem}
                  href={service.name === 'New Boiler Installation' ? '#boiler-quote-tool' : '#services'}
                  onClick={(e) => { e.preventDefault(); handleServiceClick(service.name); }}
                  className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-500"
                >
                  <div className="relative h-52 overflow-hidden">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
                      src={service.image}
                      alt={service.name}
                      className="w-full h-full object-cover"
                      onError={(e) => { e.currentTarget.src = 'https://placehold.co/400x300/cccccc/ffffff?text=Image'; e.currentTarget.onerror = null; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm p-2.5 rounded-xl shadow-lg">
                      <Icon className="w-5 h-5 text-blue-800" />
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-800 transition-colors mb-2">{service.name}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
                    {service.name === 'New Boiler Installation' && (
                      <span className="inline-flex items-center gap-1 mt-3 px-3 py-1.5 bg-blue-800/10 text-blue-800 rounded-full font-bold text-xs uppercase tracking-wide">
                        Get Free Estimate <ArrowRight size={12} />
                      </span>
                    )}
                  </div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          3. BOILER QUOTE TOOL
         ═══════════════════════════════════════════════════════════════ */}
      <section id="boiler-quote-tool" className="bg-gradient-to-b from-blue-50 to-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#005C9E 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400 rounded-full blur-[150px] pointer-events-none"
        />
        <div className="container mx-auto px-4 relative z-10">
          <Reveal>
            <div className="text-center mb-10">
              <p className="text-blue-600 font-bold uppercase tracking-[0.2em] text-xs mb-3">Smart Estimator</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800">Looking for a New Boiler?</h2>
              <p className="text-gray-500 mt-3 text-lg max-w-lg mx-auto">Use our smart tool below to get an instant estimate in seconds.</p>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <BoilerTool />
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          4. LANDLORDS SECTION — Split layout with animated reveal
         ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-28 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Reveal direction="left">
              <div className="prose prose-lg text-gray-700">
                <p className="text-red-700 font-bold uppercase tracking-[0.2em] text-xs mb-3 not-prose">For Landlords</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Attention Landlords</h2>
                <p className="text-gray-500">
                  Stay compliant and keep your tenants safe with our comprehensive gas services. We understand your legal obligations and offer reliable, efficient solutions to meet them.
                </p>
                <ul className="space-y-3 list-none pl-0 not-prose">
                  {[
                    'Annual Gas Safety Certificates (CP12)',
                    'Boiler Servicing & Maintenance',
                    'Emergency Breakdown Cover',
                    'Special Landlord-Only Deals',
                  ].map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="font-medium">{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleServiceClick('Landlord Deal: Gas Cert + Boiler Service')}
                  className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-red-700 to-red-600 text-white font-bold py-4 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow no-underline"
                >
                  View Landlord Deal <ArrowRight size={18} />
                </motion.button>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-blue-100 to-red-50 rounded-3xl -z-10" />
                <img
                  src="/images/landlord-deal.webp"
                  alt="Specialist gas services for landlords"
                  className="rounded-2xl shadow-xl w-full h-auto"
                  onError={(e) => { e.currentTarget.src = 'https://placehold.co/600x400/cccccc/ffffff?text=Landlord+Services'; e.currentTarget.onerror = null; }}
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          6. TESTIMONIALS — Animated crossfade carousel
         ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-blue-800 font-bold uppercase tracking-[0.2em] text-xs mb-3">Testimonials</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">What Our Customers Say</h2>
              <a href="https://share.google/ugaj3yv88Z6JjYB77" target="_blank" rel="noopener noreferrer" className="inline-flex items-center mt-3 text-gray-500 hover:text-blue-800 font-medium transition-colors">
                <GoogleIcon />
                Verified on Google
              </a>
            </div>
          </Reveal>

          <div className="relative max-w-3xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.97 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg text-center border border-gray-100 mx-4">
                  <div className="flex justify-center gap-1 mb-5">
                    {Array.from({ length: testimonials[currentTestimonial].rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg text-gray-600 italic leading-relaxed">"{testimonials[currentTestimonial].comment}"</p>
                  <p className="mt-6 font-bold text-gray-800 text-lg">- {testimonials[currentTestimonial].name}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-center space-x-2.5 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-blue-800 w-8' : 'bg-gray-300 w-2.5 hover:bg-gray-400'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          7. SERVICE AREA — Animated map with hover effects
         ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-blue-800 font-bold uppercase tracking-[0.2em] text-xs mb-3">Coverage</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Service Area</h2>
              <p className="mt-3 text-lg text-gray-500">Covering Worcestershire and the wider West Midlands region.</p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { title: 'Worcestershire', areas: serviceAreas.worcestershire },
              { title: 'West Midlands', areas: serviceAreas.westMidlands },
            ].map((region, regionIndex) => (
              <Reveal key={region.title} delay={regionIndex * 0.15}>
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-500 group">
                  <h3 className="text-2xl font-bold text-center text-blue-800 mb-6 flex items-center justify-center gap-2">
                    <MapPin className="w-5 h-5 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {region.title}
                  </h3>
                  <ul className="space-y-3 text-center text-gray-600">
                    {region.areas.map((area, i) => (
                      <motion.li
                        key={area}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: regionIndex * 0.1 + i * 0.05 }}
                        className="font-medium hover:text-blue-800 transition-colors cursor-default"
                      >
                        {area}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          8. BLOG PREVIEW — Staggered card entrance
         ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-gray-50 py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="flex items-end justify-between mb-14">
              <div>
                <p className="text-blue-800 font-bold uppercase tracking-[0.2em] text-xs mb-3">Expert Advice</p>
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">From Our Blog</h2>
              </div>
              <Link to="/blog" className="text-blue-800 font-bold text-sm hover:underline flex items-center gap-1 group">
                View all articles <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <motion.div key={post.slug} variants={staggerItem}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl border border-gray-200 p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-500 h-full"
                >
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    {post.category}
                  </span>
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-800 transition-colors leading-snug mb-3 text-lg">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </p>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          9. FAQ — Animated accordion
         ═══════════════════════════════════════════════════════════════ */}
      <section className="bg-white py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-blue-800 font-bold uppercase tracking-[0.2em] text-xs mb-3">Got Questions?</p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
            </div>
          </Reveal>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => (
              <Reveal key={index} delay={index * 0.08}>
                <div className="bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden hover:border-blue-100 transition-colors">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full flex justify-between items-center text-left p-6 focus:outline-none group"
                  >
                    <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-800 transition-colors pr-4">{faq.q}</h3>
                    <motion.span
                      animate={{ rotate: openFaq === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-blue-800" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {openFaq === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-6 text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════
          CTA BANNER — Final call to action
         ═══════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-blue-950 to-gray-950" />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] pointer-events-none"
        />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-blue-200/70 text-lg mb-10 max-w-xl mx-auto">Get a free, no-obligation estimate for your boiler installation or book a service today.</p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => document.getElementById('boiler-quote-tool')?.scrollIntoView({ behavior: 'smooth' })}
                className="group bg-gradient-to-r from-red-700 to-red-600 text-white font-bold py-4 px-10 rounded-2xl shadow-[0_8px_30px_-4px_rgba(217,35,45,0.5)] hover:shadow-[0_12px_40px_-4px_rgba(217,35,45,0.6)] transition-shadow flex items-center justify-center gap-2"
              >
                Get Instant Estimate <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="tel:07480561846"
                className="bg-white/[0.08] backdrop-blur-md text-white font-bold py-4 px-10 rounded-2xl hover:bg-white/[0.15] transition-all border border-white/[0.15] flex items-center justify-center gap-2"
              >
                <Phone size={18} /> Call Now
              </motion.a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
