import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import AnimatedCounter from './AnimatedCounter';
import PageTransition from './PageTransition';
import SEO from './SEO';

export default function HomePage() {
  const { t } = useLang();
  const navigate = useNavigate();

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
      
      {/* Hero Banner */}
      <section className="w-full aspect-video max-h-[100vh] overflow-hidden relative bg-slate-50" id="hero-section">
        <img src="/images/hero-banner.jpeg" alt="Jan Seva Kendra Banner" className="w-full h-full object-cover block" />
      </section>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-8 max-w-7xl mx-auto relative z-10" id="stats-section">
        {[
          { end: 15000, suffix: '+', label: t('stats.citizens') },
          { end: 50, suffix: '+', label: t('stats.services') },
          { end: 8, suffix: '+', label: t('stats.years') },
          { end: 98, suffix: '%', label: t('stats.satisfaction') },
        ].map((stat, i) => (
          <div key={i} className="glass-panel glass-panel-hover p-8 md:p-10 text-center rounded-2xl">
            <span className="text-4xl md:text-5xl font-extrabold text-slate-900 block leading-tight mb-2">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} duration={2500} />
            </span>
            <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</span>
          </div>
        ))}
      </div>

      {/* Quick Services Grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">{t('quick.title')}</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-5" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {quickServices.map((s, i) => (
              <div key={i} onClick={() => navigate('/services')} className="glass-panel glass-panel-hover rounded-2xl p-8 text-center cursor-pointer relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-transparent opacity-50 pointer-events-none" />
                <span className="text-4xl mb-4 inline-block transition-transform duration-300 group-hover:scale-110">{s.icon}</span>
                <span className="block text-sm font-bold text-slate-900 relative z-10">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Government Schemes Badge Strip */}
      <div className="bg-white py-12 px-4">
        <h3 className="text-center text-sm text-slate-500 font-bold mb-8 uppercase tracking-widest">{t('schemes.title')}</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {schemes.map((s, i) => (
            <div key={i} className="bg-slate-50 border border-white/60 px-6 py-3 rounded-full text-sm font-semibold text-slate-900 whitespace-nowrap transition-all duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)]">
              🏛️ {s}
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
