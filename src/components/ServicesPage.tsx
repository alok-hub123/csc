import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';

export default function ServicesPage() {
  const { t } = useLang();
  const navigate = useNavigate();

  const categories = [
    {
      title: t('services.govt'),
      items: [
        { icon: '🆔', name: t('services.aadhaar'), desc: t('services.aadhaar.desc') },
        { icon: '💳', name: t('services.pan'), desc: t('services.pan.desc') },
        { icon: '📄', name: t('services.certificates'), desc: t('services.certificates.desc') },
        { icon: '🛂', name: t('services.passport'), desc: t('services.passport.desc') },
        { icon: '🗳️', name: t('services.voter'), desc: t('services.voter.desc') },
        { icon: '🍚', name: t('services.ration'), desc: t('services.ration.desc') },
      ],
    },
    {
      title: t('services.financial'),
      items: [
        { icon: '🏦', name: t('services.banking'), desc: t('services.banking.desc') },
        { icon: '🛡️', name: t('services.insurance'), desc: t('services.insurance.desc') },
        { icon: '👴', name: t('services.pension'), desc: t('services.pension.desc') },
        { icon: '💰', name: t('services.mudra'), desc: t('services.mudra.desc') },
      ],
    },
    {
      title: t('services.utility'),
      items: [
        { icon: '💡', name: t('services.billpay'), desc: t('services.billpay.desc') },
        { icon: '📱', name: t('services.recharge'), desc: t('services.recharge.desc') },
        { icon: '🎫', name: t('services.ticket'), desc: t('services.ticket.desc') },
        { icon: '🖨️', name: t('services.printScan'), desc: t('services.printScan.desc') },
      ],
    },
    {
      title: t('services.health'),
      items: [
        { icon: '🏥', name: t('services.ayushman'), desc: t('services.ayushman.desc') },
        { icon: '👨‍⚕️', name: t('services.telemedicine'), desc: t('services.telemedicine.desc') },
        { icon: '💊', name: t('services.digiHealth'), desc: t('services.digiHealth.desc') },
      ],
    },
  ];

  return (
    <PageTransition className="mt-[116px]">
      <SEO 
        title={t('nav.services')} 
        description={t('services.subtitle')} 
      />
      <section className="py-20 lg:py-24 px-4 max-w-7xl mx-auto" id="services-page">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">{t('services.title')}</h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
        </div>
        
        {categories.map((cat, ci) => (
          <div className="mb-16" key={ci}>
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 flex items-center gap-3 before:content-[''] before:block before:w-1.5 before:h-6 before:bg-orange-500 before:rounded">
              {cat.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {cat.items.map((item, ii) => (
                  <div 
                  className="glass-panel glass-panel-hover rounded-[24px] p-8 md:p-10 transition-all duration-300 relative overflow-hidden group cursor-pointer" 
                  key={ii} 
                  onClick={() => navigate('/contact')}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full pointer-events-none" />
                  <div className="w-16 h-16 rounded-2xl bg-white/50 border border-white/60 shadow-[0_4px_12px_rgba(15,23,42,0.05)] flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-extrabold text-slate-900 mb-3">{item.name}</h4>
                    <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6">{item.desc}</p>
                    <button className="cursor-pointer text-orange-500 font-extrabold text-[13.5px] uppercase tracking-wide flex items-center gap-2 transition-all opacity-80 group-hover:opacity-100">
                      📞 {t('services.contact')}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </PageTransition>
  );
}
