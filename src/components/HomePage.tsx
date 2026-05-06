import { useState, useEffect, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import AnimatedCounter from './AnimatedCounter';
import PageTransition from './PageTransition';
import SEO from './SEO';

export default function HomePage() {
  const { t } = useLang();
  const navigate = useNavigate();

  // Carousel state
  const carouselImages = [
    '/images/carousel-1.jpeg',
    '/images/carousel-2.jpeg',
    '/images/carousel-3.jpeg',
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
    { icon: '🆔', label: t('services.aadhaar') },
    { icon: '💳', label: t('services.pan') },
    { icon: '🏦', label: t('services.banking') },
    { icon: '📄', label: t('services.certificates') },
    { icon: '💡', label: t('services.billpay') },
    { icon: '🏥', label: t('services.ayushman') },
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
      <section className="w-full relative h-[95vh] pt-[136px] px-4 md:px-8" id="hero-carousel">
        <div className="relative w-full h-full rounded-[20px] overflow-hidden">
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
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
          ))}

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 cursor-pointer group"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-all duration-300 cursor-pointer group"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>


        </div>

        {/* Indicator Dots — below banner */}
        <div className="flex items-center justify-center gap-2.5 mt-4">
          {carouselImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all duration-300 cursor-pointer ${currentSlide === idx
                ? 'w-8 h-2.5 bg-orange-500 shadow-[0_2px_8px_rgba(249,115,22,0.5)]'
                : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats — overlaps hero with negative margin */}
      <div className="relative z-20 my-8 md:my-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[
              { end: 15000, suffix: '+', label: t('stats.citizens'), icon: '👥' },
              { end: 50, suffix: '+', label: t('stats.services'), icon: '⚙️' },
              { end: 8, suffix: '+', label: t('stats.years'), icon: '📅' },
              { end: 98, suffix: '%', label: t('stats.satisfaction'), icon: '⭐' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 md:p-7 text-center shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-slate-100 hover:-translate-y-1 transition-all duration-300">
                <span className="text-2xl mb-2 block">{stat.icon}</span>
                <span className="text-2xl md:text-3xl font-extrabold text-[#0A0A0F] block leading-tight mb-1">
                  <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2500} />
                </span>
                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Services Grid */}
      <section className="py-20 px-4 bg-[#F7F7F7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">Services</span>
            <h2 className="section-heading">{t('quick.title')}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
            {quickServices.map((s, i) => (
              <div key={i} onClick={() => navigate('/services')} className="bg-white rounded-2xl p-7 text-center cursor-pointer relative overflow-hidden group border border-slate-100 hover:border-orange-200 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-400">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                <span className="text-4xl mb-4 inline-block transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">{s.icon}</span>
                <span className="block text-sm font-bold text-[#0A0A0F] relative z-10">{s.label}</span>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link to="/services" className="pill-btn-outline inline-flex items-center gap-2 text-sm">
              {t('hero.cta1')}
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Marquee Schemes Strip */}
      <div className="bg-[#0A0A0F] py-5 overflow-hidden relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0F] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0F] to-transparent z-10" />
        <div className="flex whitespace-nowrap" style={{ animation: 'marquee 25s linear infinite' }}>
          {[...schemes, ...schemes, ...schemes].map((s, i) => (
            <span key={i} className="mx-8 text-white/60 text-sm font-bold uppercase tracking-widest flex items-center gap-3 shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0" />
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* Why Choose Us — Feature Cards */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">Why Us</span>
            <h2 className="section-heading">{t('home.why.title')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '⚡', title: t('home.why.1.title'), desc: t('home.why.1.desc'), color: 'from-amber-400 to-orange-500' },
              { icon: '👨‍💼', title: t('home.why.2.title'), desc: t('home.why.2.desc'), color: 'from-blue-400 to-indigo-500' },
              { icon: '🔒', title: t('home.why.3.title'), desc: t('home.why.3.desc'), color: 'from-emerald-400 to-teal-500' }
            ].map((feature, i) => (
              <div key={i} className="bg-[#F7F7F7] border border-slate-100 rounded-[24px] p-8 lg:p-10 text-center hover:-translate-y-2 transition-all duration-400 group cursor-default hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)]">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} shadow-lg flex items-center justify-center text-3xl mx-auto mb-7 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-extrabold text-[#0A0A0F] mb-3">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed text-[15px]">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works — Timeline */}
      <section className="py-20 px-4 bg-[#0A0A0F] text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/[0.03] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/[0.04] pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] text-orange-400 text-xs font-bold uppercase tracking-widest mb-5">Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold mb-4 text-white">{t('home.process.title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-14 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />

            {[
              { step: '01', text: t('home.process.1'), icon: '📱' },
              { step: '02', text: t('home.process.2'), icon: '📂' },
              { step: '03', text: t('home.process.3'), icon: '✅' },
            ].map((process, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-24 h-24 bg-white/[0.05] border border-white/[0.08] rounded-3xl flex items-center justify-center text-4xl mb-7 relative group-hover:bg-white/[0.08] group-hover:border-orange-500/30 transition-all duration-300">
                  {process.icon}
                  <span className="absolute -top-3 -right-3 w-8 h-8 bg-orange-500 text-white text-xs font-extrabold rounded-xl flex items-center justify-center shadow-lg">
                    {process.step}
                  </span>
                </div>
                <p className="text-lg font-semibold text-white/80 max-w-[220px] leading-relaxed">{process.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes Section */}
      <section className="py-16 px-4 bg-[#F7F7F7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-sm text-slate-500 font-bold uppercase tracking-widest">{t('schemes.title')}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {schemes.map((s, i) => (
              <div key={i} className="bg-white border border-slate-100 px-5 py-2.5 rounded-full text-sm font-semibold text-[#0A0A0F] whitespace-nowrap transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)] cursor-default">
                🏛️ {s}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employees Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">Team</span>
            <h2 className="section-heading">{t('home.employees.title')}</h2>
            <p className="section-subheading">{t('home.employees.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Avesh Kumar', role: 'VLE & Centre Head', image: '👨‍💼' },
              { name: 'Sita Devi', role: 'Aadhaar Operator', image: '👩‍💻' },
              { name: 'Rahul Singh', role: 'Banking Correspondent', image: '👨‍💼' },
              { name: 'Pooja Sharma', role: 'Customer Support', image: '👩‍💼' }
            ].map((emp, i) => (
              <div key={i} className="bg-[#F7F7F7] border border-slate-100 rounded-[24px] p-7 text-center hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-400 group">
                <div className="w-24 h-24 mx-auto bg-white rounded-2xl flex items-center justify-center text-5xl mb-5 shadow-sm border border-slate-100 group-hover:border-orange-300 group-hover:shadow-[0_0_0_4px_rgba(249,115,22,0.1)] transition-all duration-300">
                  {emp.image}
                </div>
                <h3 className="text-lg font-extrabold text-[#0A0A0F] mb-1">{emp.name}</h3>
                <p className="text-orange-500 font-semibold text-sm">{emp.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action — Dark CTA Block */}
      <section className="py-20 px-4 relative overflow-hidden bg-[#0A0A0F]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[80px] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] text-orange-400 text-xs font-bold uppercase tracking-widest mb-7">Get Started</span>
          <h2 className="text-white text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            {t('apply.title')}
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium leading-relaxed">
            {t('apply.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="pill-btn-primary text-base px-10 py-4 shadow-[0_8px_30px_rgba(249,115,22,0.3)] cursor-pointer">
              {t('nav.contact')}
            </button>
            <Link to="/services" className="pill-btn text-base px-10 py-4 bg-transparent text-white border-2 border-white/15 hover:bg-white hover:text-[#0A0A0F] cursor-pointer inline-flex items-center justify-center">
              {t('hero.cta1')}
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial / Feedback Section */}
      <section className="py-20 px-4 bg-[#F7F7F7] relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">Testimonials</span>
            <h2 className="section-heading">{t('home.testimonials.title')}</h2>
            <p className="section-subheading">{t('home.testimonials.subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Amit Patel', text: 'Excellent service! Got my PAN card corrected within a week without any hassle. The staff is very helpful.', rating: 5 },
              { name: 'Sunita Yadav', text: 'I applied for PM Kisan Yojana here. They explained everything clearly and helped with all documentation.', rating: 5 },
              { name: 'Vikram Singh', text: 'Very convenient to pay all my utility bills here. Quick service and trustworthy people.', rating: 4 }
            ].map((feedback, i) => (
              <div key={i} className="bg-white border border-slate-100 p-8 rounded-[24px] hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 transition-all duration-400 group">
                {/* Quote mark */}
                <div className="text-5xl text-orange-200 font-serif leading-none mb-3">"</div>
                <p className="text-slate-600 mb-7 leading-relaxed text-[15px]">{feedback.text}</p>
                <div className="flex text-orange-400 mb-5 text-sm gap-0.5">
                  {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                </div>
                <div className="flex items-center gap-3 pt-5 border-t border-slate-100">
                  <div className="w-11 h-11 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-sm shadow-sm">
                    {feedback.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[#0A0A0F] font-bold text-sm">{feedback.name}</h4>
                    <span className="text-slate-400 text-xs font-medium">Local Resident</span>
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
