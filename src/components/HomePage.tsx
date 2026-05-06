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
        <img src="/images/hero-banner.jpeg" alt="KIOSK Banner" className="w-full h-full object-cover block" />
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
      <div className="bg-white py-12 px-4 border-b border-slate-100">
        <h3 className="text-center text-sm text-slate-500 font-bold mb-8 uppercase tracking-widest">{t('schemes.title')}</h3>
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
          {schemes.map((s, i) => (
            <div key={i} className="bg-slate-50 border border-white/60 px-6 py-3 rounded-full text-sm font-semibold text-slate-900 whitespace-nowrap transition-all duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)]">
              🏛️ {s}
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">{t('home.why.title')}</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '⚡', title: t('home.why.1.title'), desc: t('home.why.1.desc') },
              { icon: '👨‍💼', title: t('home.why.2.title'), desc: t('home.why.2.desc') },
              { icon: '🔒', title: t('home.why.3.title'), desc: t('home.why.3.desc') }
            ].map((feature, i) => (
              <div key={i} className="bg-white border border-slate-100 p-8 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300 shadow-sm hover:shadow-xl">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl shadow-inner flex items-center justify-center text-3xl mx-auto mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{t('home.process.title')}</h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-slate-800 -translate-y-1/2 z-0" />

            {[
              { step: '1', text: t('home.process.1'), icon: '📱' },
              { step: '2', text: t('home.process.2'), icon: '📂' },
              { step: '3', text: t('home.process.3'), icon: '✅' },
            ].map((process, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center group">
                <div className="w-20 h-20 bg-slate-800 border-4 border-slate-900 rounded-full flex items-center justify-center text-3xl shadow-xl mb-6 relative group-hover:scale-110 group-hover:border-orange-500 transition-all duration-300">
                  {process.icon}
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 text-white text-sm font-bold rounded-full flex items-center justify-center border-4 border-slate-900 shadow-md">
                    {process.step}
                  </span>
                </div>
                <p className="text-lg font-medium text-slate-300 max-w-[200px]">{process.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Employees Section */}
      <section className="py-16 px-4 bg-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">{t('home.employees.title')}</h2>
            <p className="text-slate-600 font-medium mb-5">{t('home.employees.subtitle')}</p>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: 'Avesh Kumar', role: 'VLE & Centre Head', image: '👨‍💼' },
              { name: 'Sita Devi', role: 'Aadhaar Operator', image: '👩‍💻' },
              { name: 'Rahul Singh', role: 'Banking Correspondent', image: '👨‍💼' },
              { name: 'Pooja Sharma', role: 'Customer Support', image: '👩‍💼' }
            ].map((emp, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow duration-300 group">
                <div className="w-24 h-24 mx-auto bg-white rounded-full flex items-center justify-center text-5xl mb-4 shadow-sm border-2 border-transparent group-hover:border-orange-500 transition-colors duration-300">
                  {emp.image}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{emp.name}</h3>
                <p className="text-orange-600 font-medium text-sm">{emp.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial / Feedback Section */}
      <section className="py-16 px-4 bg-slate-50 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-3">{t('home.testimonials.title')}</h2>
            <p className="text-slate-600 font-medium mb-5">{t('home.testimonials.subtitle')}</p>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Amit Patel', text: 'Excellent service! Got my PAN card corrected within a week without any hassle. The staff is very helpful.', rating: 5 },
              { name: 'Sunita Yadav', text: 'I applied for PM Kisan Yojana here. They explained everything clearly and helped with all documentation.', rating: 5 },
              { name: 'Vikram Singh', text: 'Very convenient to pay all my utility bills here. Quick service and trustworthy people.', rating: 4 }
            ].map((feedback, i) => (
              <div key={i} className="bg-white border border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="flex text-orange-400 mb-4 text-sm">
                  {'★'.repeat(feedback.rating)}{'☆'.repeat(5 - feedback.rating)}
                </div>
                <p className="text-slate-600 italic mb-6 leading-relaxed">"{feedback.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-bold">
                    {feedback.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">{feedback.name}</h4>
                    <span className="text-slate-500 text-xs">Local Resident</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 relative overflow-hidden bg-slate-50">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-slate-900 text-3xl md:text-5xl font-extrabold mb-6 leading-tight drop-shadow-sm">
            {t('apply.title')}
          </h2>
          <p className="text-slate-900 text-lg md:text-xl text-orange-50 mb-10 max-w-2xl mx-auto font-medium">
            {t('apply.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button onClick={() => navigate('/contact')} className="px-8 py-4 bg-orange-600 text-white font-bold rounded-xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 active:translate-y-0 cursor-pointer">
              {t('nav.contact')}
            </button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
