import { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import AnimatedCounter from './AnimatedCounter';
import PageTransition from './PageTransition';
import SEO from './SEO';
import {
  AadhaarIcon,
  PanIcon,
  BankingIcon,
  CertificatesIcon,
  BillpayIcon,
  AyushmanIcon,
  SparklesIcon,
  HeadsetIcon,
  LockIcon,
  RechargeIcon,
  StarIcon,
  GovtIcon,
  ChevronRightIcon,
  CalendarIcon
} from './Icons';

// ─── Team Slider (Aimers Faculty-style) ────────────────────────
const teamMembers = [
  { name: 'Avesh Kumar', role: 'VLE & Centre Head', experience: '5+ yrs', bg: 'bg-[#FFF3E0]', accent: '#FF6B00' },
  { name: 'Sita Devi', role: 'Aadhaar Operator', experience: '3+ yrs', bg: 'bg-[#DBEAFE]', accent: '#3B82F6' },
  { name: 'Rahul Singh', role: 'Banking Correspondent', experience: '2+ yrs', bg: 'bg-[#D1FAE5]', accent: '#10B981' },
  { name: 'Pooja Sharma', role: 'Customer Support', experience: '2+ yrs', bg: 'bg-[#E8E0FF]', accent: '#8B5CF6' },
];

const CARD_WIDTH = 280;
const CARD_GAP = 20;

function getVisibleCards(): number {
  if (typeof window === 'undefined') return 2;
  if (window.innerWidth <= 500) return 1;
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1100) return 2;
  return 2;
}

function TeamSlider({ t, navigate }: { t: (key: string) => string; navigate: ReturnType<typeof useNavigate> }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => setVisibleCards(getVisibleCards());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, teamMembers.length - visibleCards);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [maxIndex, currentIndex]);

  const handlePrev = () => setCurrentIndex(prev => Math.max(prev - 1, 0));
  const handleNext = () => setCurrentIndex(prev => Math.min(prev + 1, maxIndex));

  return (
    <section className="py-24 px-4 bg-white relative overflow-hidden border-b-2 border-black" id="team-slider">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-12 lg:gap-16 items-start">

          {/* Left — Title & Controls */}
          <div className="lg:sticky lg:top-[140px]">
            <span className="brutal-badge mb-5">Team</span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black text-black tracking-tight leading-[1.1] mt-4 mb-5">
              {t('home.employees.title').split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-[#FF6B00]">{t('home.employees.title').split(' ').slice(-1)}</span>
            </h2>
            <p className="text-black/50 font-bold text-base leading-relaxed mb-10 max-w-sm">
              {t('home.employees.subtitle')}
            </p>

            {/* Slider Controls */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`w-14 h-14 rounded-xl border-2 border-black flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  currentIndex === 0 ? 'bg-[#FFFDF5] opacity-40 cursor-not-allowed' : 'bg-white hover:-translate-x-0.5 hover:-translate-y-0.5'
                }`}
                style={currentIndex === 0 ? {} : { boxShadow: '3px 3px 0px 0px #000' }}
                aria-label="Previous team member"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={currentIndex === maxIndex}
                className={`w-14 h-14 rounded-xl border-2 border-black flex items-center justify-center transition-all duration-200 cursor-pointer ${
                  currentIndex === maxIndex ? 'bg-[#FFFDF5] opacity-40 cursor-not-allowed' : 'bg-[#FFF3E0] hover:-translate-x-0.5 hover:-translate-y-0.5'
                }`}
                style={currentIndex === maxIndex ? {} : { boxShadow: '3px 3px 0px 0px #000' }}
                aria-label="Next team member"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>

            {/* Progress Indicator */}
            <div className="flex items-center gap-3">
              <span className="text-2xl font-black text-[#FF6B00]">
                0{currentIndex + 1}
              </span>
              <div className="flex-1 h-1.5 bg-[#FFFDF5] border border-black/10 rounded overflow-hidden">
                <div
                  className="h-full bg-[#FF6B00] rounded transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / (maxIndex + 1)) * 100}%` }}
                />
              </div>
              <span className="text-base font-bold text-black/40">
                0{maxIndex + 1}
              </span>
            </div>
          </div>

          {/* Right — Card Slider */}
          <div className="overflow-hidden pb-3 pr-3 -mr-3">
            <div
              className="flex gap-5 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                transform: `translateX(-${currentIndex * (CARD_WIDTH + CARD_GAP)}px)`,
              }}
            >
              {teamMembers.map((emp, i) => (
                <div
                  key={i}
                  className="bg-white border-2 border-black rounded-xl overflow-hidden shrink-0 transition-all duration-300"
                  style={{
                    minWidth: `${CARD_WIDTH}px`,
                    maxWidth: `${CARD_WIDTH}px`,
                    boxShadow: '5px 5px 0px 0px #000',
                    opacity: i < currentIndex ? 0.3 : 1,
                  }}
                >
                  {/* Avatar Block */}
                  <div className={`${emp.bg} h-[220px] flex items-center justify-center relative border-b-2 border-black`}>
                    <div
                      className="w-28 h-28 rounded-xl border-2 border-black flex items-center justify-center text-4xl font-black text-white"
                      style={{ backgroundColor: emp.accent, boxShadow: '4px 4px 0px 0px #000' }}
                    >
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    {/* Experience Badge */}
                    <div
                      className="absolute top-4 right-4 bg-white border-2 border-black rounded-lg px-3 py-1 text-[10px] font-black uppercase tracking-wider"
                      style={{ boxShadow: '2px 2px 0px 0px #000' }}
                    >
                      {emp.experience}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-black text-black mb-1">{emp.name}</h3>
                    <p className="font-black text-sm uppercase tracking-wider mb-1" style={{ color: emp.accent }}>
                      {emp.role}
                    </p>
                  </div>

                  {/* Separator */}
                  <div className="h-[2px] bg-black mx-6" />

                  {/* CTA */}
                  <div className="p-5 flex gap-3">
                    <button
                      onClick={() => navigate('/contact')}
                      className="flex-1 py-3 rounded-xl border-2 border-black bg-[#FFF3E0] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:bg-black hover:text-white"
                      style={{ boxShadow: '2px 2px 0px 0px #000' }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                      Contact
                    </button>
                    <a
                      href="https://wa.me/917233060698"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3 rounded-xl border-2 border-black bg-white text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 hover:bg-[#25D366] hover:text-white"
                      style={{ boxShadow: '2px 2px 0px 0px #000' }}
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                      </svg>
                      Chat
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  const { t } = useLang();
  const navigate = useNavigate();

  // Carousel state
  const carouselImages = [
    '/images/carousel-1.jpeg',
    '/images/carousel-2.jpeg',
    '/images/carousel-3.jpeg',
    '/images/carousel-4.jpeg',
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + carouselImages.length) % carouselImages.length);
  }, [carouselImages.length]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const quickServices = [
    { Icon: AadhaarIcon, label: t('services.aadhaar'), bg: 'bg-[#DBEAFE]' },
    { Icon: PanIcon, label: t('services.pan'), bg: 'bg-[#FFF3E0]' },
    { Icon: BankingIcon, label: t('services.banking'), bg: 'bg-[#D1FAE5]' },
    { Icon: CertificatesIcon, label: t('services.certificates'), bg: 'bg-[#E8E0FF]' },
    { Icon: BillpayIcon, label: t('services.billpay'), bg: 'bg-[#FFE4E6]' },
    { Icon: AyushmanIcon, label: t('services.ayushman'), bg: 'bg-[#DBEAFE]' },
  ];


  const schemes = [
    'PM Kisan', 'PM Awas', 'Ujjwala', 'Jan Dhan', 'MUDRA',
    'Ayushman Bharat', 'Atal Pension', 'Skill India', 'Digital India',
    'PM-SYM', 'PMJJBY', 'PMSBY',
  ];

  return (
    <PageTransition>
      <SEO
        title={t('nav.home')}
        description={t('services.subtitle')}
      />

      {/* Hero Carousel Section */}
      <section className="w-full relative pt-[120px] px-4 md:px-8 mx-auto z-10" id="hero-carousel">
        <div className="relative w-full rounded-xl overflow-hidden border-2 border-black group" style={{ aspectRatio: '16/6', boxShadow: '6px 6px 0px 0px #000' }}>
          {/* Slides */}
          {carouselImages.map((img, idx) => (
            <div
              key={idx}
              className="absolute inset-0 transition-opacity duration-700 ease-in-out"
              style={{ opacity: currentSlide === idx ? 1 : 0 }}
            >
              <img
                src={img}
                alt={`KIOSK Banner ${idx + 1}`}
                className="w-full h-full"
                draggable={false}
              />
            </div>
          ))}

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white border-2 border-black flex items-center justify-center text-black hover:-translate-x-0.5 hover:-translate-y-[calc(50%+1px)] transition-all duration-200 cursor-pointer"
            style={{ boxShadow: '3px 3px 0px 0px #000' }}
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white border-2 border-black flex items-center justify-center text-black hover:-translate-x-0.5 hover:-translate-y-[calc(50%+1px)] transition-all duration-200 cursor-pointer"
            style={{ boxShadow: '3px 3px 0px 0px #000' }}
            aria-label="Next slide"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>


        </div>

        {/* Indicator Dots — below banner */}
        <div className="flex items-center justify-center gap-3 mt-5">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-lg transition-all duration-200 cursor-pointer border-2 border-black ${currentSlide === idx
                ? 'w-10 h-3 bg-[#FF6B00]'
                : 'w-3 h-3 bg-white hover:bg-[#FFF3E0]'
                }`}
              style={{ boxShadow: '2px 2px 0px 0px #000' }}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats */}
      <div className="relative z-20 my-8 md:my-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
            {[
              { end: 15000, suffix: '+', label: t('stats.citizens'), Icon: AadhaarIcon, bg: 'bg-[#DBEAFE]' },
              { end: 50, suffix: '+', label: t('stats.services'), Icon: GovtIcon, bg: 'bg-[#FFF3E0]' },
              { end: 8, suffix: '+', label: t('stats.years'), Icon: CalendarIcon, bg: 'bg-[#D1FAE5]' },
              { end: 98, suffix: '%', label: t('stats.satisfaction'), Icon: StarIcon, bg: 'bg-[#E8E0FF]' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 md:p-7 text-center border-2 border-black hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                <span className={`mb-3 w-10 h-10 ${stat.bg} border-2 border-black rounded-lg flex items-center justify-center mx-auto`}>
                  <stat.Icon size={20} className="text-black" />
                </span>
                <span className="text-2xl md:text-3xl font-black text-black block leading-tight mb-1">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2500} />
                </span>
                <span className="text-[10px] text-black/50 font-black uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Services Grid */}
      <section className="py-24 px-4 bg-[#FFFDF5] relative">
        <div className="max-w-6xl mx-auto relative z-10">

          <div className="text-center mb-16">
            <span className="brutal-badge mb-5">Services</span>
            <h2 className="section-heading mt-4">{t('quick.title')}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {quickServices.map((s, i) => (
              <div key={i} onClick={() => navigate('/services')} className="bg-white rounded-xl p-8 text-center cursor-pointer relative overflow-hidden group border-2 border-black hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                <span className={`mb-5 w-12 h-12 ${s.bg} border-2 border-black rounded-lg flex items-center justify-center mx-auto transition-all duration-200 group-hover:scale-110 group-hover:-rotate-3`}>
                  <s.Icon size={24} className="text-black" />
                </span>
                <span className="block text-xs font-black text-black relative z-10">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="brutal-btn-outline inline-flex items-center gap-2.5 text-xs">
              {t('hero.cta1')}
              <ChevronRightIcon size={14} className="stroke-[2.5]" />
            </Link>
          </div>
        </div>
      </section>


      {/* Marquee Schemes Strip */}
      <div className="bg-black py-5 overflow-hidden relative border-y-2 border-black">
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite' }}>
          {[...schemes, ...schemes, ...schemes].map((s, i) => (
            <span key={i} className="mx-8 text-white/80 text-sm font-black uppercase tracking-widest flex items-center gap-3 shrink-0">
              <span className="w-2 h-2 bg-[#FF6B00] shrink-0 border border-white/30" />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Why Choose Us — Feature Cards */}
      <section className="py-24 px-4 bg-white relative overflow-hidden border-b-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="brutal-badge mb-5">Why Us</span>
            <h2 className="section-heading mt-4">{t('home.why.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { Icon: SparklesIcon, title: t('home.why.1.title'), desc: t('home.why.1.desc'), bg: 'bg-[#FFF3E0]' },
              { Icon: HeadsetIcon, title: t('home.why.2.title'), desc: t('home.why.2.desc'), bg: 'bg-[#DBEAFE]' },
              { Icon: LockIcon, title: t('home.why.3.title'), desc: t('home.why.3.desc'), bg: 'bg-[#D1FAE5]' }
            ].map((feature, i) => (
              <div key={i} className="bg-white border-2 border-black rounded-xl p-8 lg:p-10 text-center hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 group cursor-default" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                <div className={`w-14 h-14 rounded-xl ${feature.bg} border-2 border-black flex items-center justify-center mx-auto mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-200 text-black`} style={{ boxShadow: '2px 2px 0px 0px #000' }}>
                  <feature.Icon size={24} />
                </div>
                <h3 className="text-lg font-black text-black mb-3">{feature.title}</h3>
                <p className="text-black/50 leading-relaxed text-[13px] font-bold">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Timeline */}
      <section className="py-24 px-4 bg-black text-white relative overflow-hidden">

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-18">
            <span className="inline-block px-4 py-1.5 rounded-lg bg-[#FF6B00] text-white text-xs font-black uppercase tracking-widest mb-5 border-2 border-white" style={{ boxShadow: '2px 2px 0px 0px #fff' }}>Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-[44px] font-black mb-4 text-white tracking-tight">{t('home.process.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {[
              { step: '01', text: t('home.process.1'), Icon: RechargeIcon },
              { step: '02', text: t('home.process.2'), Icon: CertificatesIcon },
              { step: '03', text: t('home.process.3'), Icon: AyushmanIcon },
            ].map((process, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-white/10 border-2 border-white rounded-xl flex items-center justify-center mb-7 relative group-hover:bg-white/20 transition-all duration-200 text-white" style={{ boxShadow: '3px 3px 0px 0px rgba(255,255,255,0.3)' }}>
                  <process.Icon size={30} />
                  <span className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-[#FF6B00] text-white text-[10px] font-black rounded-lg flex items-center justify-center border-2 border-white">
                    {process.step}
                  </span>
                </div>
                <p className="text-base font-bold text-white/80 max-w-[200px] leading-relaxed">{process.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Government Schemes Section */}
      <section className="py-24 px-4 bg-[#FFFDF5] border-y-2 border-black">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-xs text-black/50 font-black uppercase tracking-widest">{t('schemes.title')}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {schemes.map((s, i) => (
              <div key={i} className="bg-white border-2 border-black px-5 py-3 rounded-xl text-xs font-black text-black whitespace-nowrap transition-all duration-200 hover:bg-[#FF6B00] hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-default flex items-center gap-2 group" style={{ boxShadow: '3px 3px 0px 0px #000' }}>
                <GovtIcon size={14} className="text-[#FF6B00] group-hover:text-white transition-colors" />
                {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section — Aimers Faculty Style Slider */}
      <TeamSlider t={t} navigate={navigate} />

      {/* Call to Action — Dark CTA Block */}
      <section className="py-24 px-4 relative overflow-hidden bg-black">
        <div className="max-w-3xl mx-auto text-center relative z-10">

          <span className="inline-block px-4 py-1.5 rounded-lg bg-[#FF6B00] text-white text-xs font-black uppercase tracking-widest mb-7 border-2 border-white" style={{ boxShadow: '2px 2px 0px 0px #fff' }}>Get Started</span>
          <h2 className="text-white text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
            {t('apply.title')}
          </h2>
          <p className="text-white/50 text-base md:text-lg mb-10 max-w-xl mx-auto font-bold leading-relaxed">
            {t('apply.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-10 py-4.5 rounded-xl font-black text-xs uppercase tracking-wider bg-[#FF6B00] text-white border-2 border-white cursor-pointer transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5" style={{ boxShadow: '3px 3px 0px 0px #fff' }}>
              {t('nav.contact')}
            </button>
            <Link to="/services" className="px-10 py-4.5 rounded-xl font-black text-xs uppercase tracking-wider bg-transparent text-white border-2 border-white cursor-pointer inline-flex items-center justify-center transition-all duration-200 hover:bg-white hover:text-black hover:-translate-x-0.5 hover:-translate-y-0.5" style={{ boxShadow: '3px 3px 0px 0px rgba(255,255,255,0.3)' }}>
              {t('hero.cta1')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Feedback Section */}
      <section className="py-24 px-4 bg-[#FFFDF5] relative overflow-hidden border-t-2 border-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="brutal-badge mb-5">Testimonials</span>
            <h2 className="section-heading mt-4">{t('home.testimonials.title')}</h2>
            <p className="section-subheading">{t('home.testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Amit Patel', text: 'Excellent service! Got my PAN card corrected within a week without any hassle. The staff is very helpful.', rating: 5, bg: 'bg-[#FFF3E0]' },
              { name: 'Sunita Yadav', text: 'I applied for PM Kisan Yojana here. They explained everything clearly and helped with all documentation.', rating: 5, bg: 'bg-[#D1FAE5]' },
              { name: 'Vikram Singh', text: 'Very convenient to pay all my utility bills here. Quick service and trustworthy people.', rating: 4, bg: 'bg-[#DBEAFE]' }
            ].map((feedback, i) => (
              <div key={i} className="bg-white border-2 border-black p-8 rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col justify-between" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                <div>
                  {/* Rating Stars Vector */}
                  <div className="flex text-[#FF6B00] mb-5 gap-0.5 justify-start">
                    {[...Array(5)].map((_, starIdx) => (
                      <StarIcon
                        key={starIdx}
                        size={14}
                        className={starIdx < feedback.rating ? "text-[#FF6B00] fill-[#FF6B00]" : "text-black/20 fill-none"}
                      />
                    ))}
                  </div>
                  <p className="text-black/60 mb-8 leading-relaxed text-[13.5px] font-bold">"{feedback.text}"</p>
                </div>
                <div className="flex items-center gap-3 pt-5 border-t-2 border-black/10">
                  <div className={`w-10 h-10 ${feedback.bg} border-2 border-black rounded-xl flex items-center justify-center text-black font-black text-xs`}>
                    {feedback.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-black font-black text-sm leading-none mb-1">{feedback.name}</h4>
                    <span className="text-black/40 text-[10px] font-black uppercase tracking-wide">Local Resident</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </PageTransition>
  );
}
