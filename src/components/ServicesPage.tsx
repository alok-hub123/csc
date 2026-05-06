import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';

export default function ServicesPage() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    {
      title: t('services.govt'),
      items: [
        { id: 'aadhaar', icon: '🆔', name: t('services.aadhaar'), desc: t('services.aadhaar.desc') },
        { id: 'pan', icon: '💳', name: t('services.pan'), desc: t('services.pan.desc') },
        { id: 'certificates', icon: '📄', name: t('services.certificates'), desc: t('services.certificates.desc') },
        { id: 'passport', icon: '🛂', name: t('services.passport'), desc: t('services.passport.desc') },
        { id: 'voter', icon: '🗳️', name: t('services.voter'), desc: t('services.voter.desc') },
        { id: 'ration', icon: '🍚', name: t('services.ration'), desc: t('services.ration.desc') },
        { id: 'cmyuva', icon: '👨‍💼', name: t('services.cmyuva'), desc: t('services.cmyuva.desc') },
        { id: 'udyam', icon: '🏭', name: t('services.udyam'), desc: t('services.udyam.desc') },
        { id: 'driving', icon: '🚗', name: t('services.driving'), desc: t('services.driving.desc') },
        { id: 'labour', icon: '👷', name: t('services.labour'), desc: t('services.labour.desc') },
        { id: 'marriage', icon: '💍', name: t('services.marriage'), desc: t('services.marriage.desc') },
        { id: 'virasat', icon: '📜', name: t('services.virasat'), desc: t('services.virasat.desc') },
        { id: 'scholarship', icon: '🎓', name: t('services.scholarship'), desc: t('services.scholarship.desc') },
        { id: 'pmkisan', icon: '🌾', name: t('services.pmkisan'), desc: t('services.pmkisan.desc') },
      ],
    },
    {
      title: t('services.financial'),
      items: [
        { id: 'banking', icon: '🏦', name: t('services.banking'), desc: t('services.banking.desc') },
        { id: 'insurance', icon: '🛡️', name: t('services.insurance'), desc: t('services.insurance.desc') },
        { id: 'pension', icon: '👴', name: t('services.pension'), desc: t('services.pension.desc') },
        { id: 'mudra', icon: '💰', name: t('services.mudra'), desc: t('services.mudra.desc') },
        { id: 'itr', icon: '📊', name: t('services.itr'), desc: t('services.itr.desc') },
        { id: 'gst', icon: '🧾', name: t('services.gst'), desc: t('services.gst.desc') },
        { id: 'ekcc', icon: '💳', name: t('services.ekcc'), desc: t('services.ekcc.desc') },
        { id: 'epf', icon: '💼', name: t('services.epf'), desc: t('services.epf.desc') },
      ],
    },
    {
      title: t('services.utility'),
      items: [
        { id: 'billpay', icon: '💡', name: t('services.billpay'), desc: t('services.billpay.desc') },
        { id: 'recharge', icon: '📱', name: t('services.recharge'), desc: t('services.recharge.desc') },
        { id: 'ticket', icon: '🎫', name: t('services.ticket'), desc: t('services.ticket.desc') },
        { id: 'printScan', icon: '🖨️', name: t('services.printScan'), desc: t('services.printScan.desc') },
      ],
    },
    {
      title: t('services.health'),
      items: [
        { id: 'ayushman', icon: '🏥', name: t('services.ayushman'), desc: t('services.ayushman.desc') },
        { id: 'telemedicine', icon: '👨‍⚕️', name: t('services.telemedicine'), desc: t('services.telemedicine.desc') },
        { id: 'digiHealth', icon: '💊', name: t('services.digiHealth'), desc: t('services.digiHealth.desc') },
      ],
    },
  ];

  // Always ensure 'All' defaults to t('services.all') on first render or language change
  const currentTab = activeTab === 'All' ? t('services.all') : activeTab;
  const tabs = [t('services.all'), ...categories.map(c => c.title)];

  const displayedCategories = currentTab === t('services.all')
    ? categories
    : categories.filter(c => c.title === currentTab);

  const filteredItems = displayedCategories.flatMap(cat => cat.items).filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageTransition className="mt-[116px]">
      <SEO
        title={t('nav.services')}
        description={t('services.subtitle')}
      />
      <section className="py-20 lg:py-24 px-4 max-w-7xl mx-auto" id="services-page">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">{t('services.title')}</h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mb-8" />

          <div className="max-w-xl mx-auto relative">
            <input
              type="text"
              placeholder={t('services.search.placeholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full border-2 border-slate-200 focus:border-orange-500 focus:outline-none shadow-sm text-lg transition-colors"
            />
            <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-slate-400">
              🔍
            </span>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {tabs.map((tab, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${currentTab === tab ? 'bg-orange-500 text-white shadow-[0_4px_12px_rgba(249,115,22,0.25)] border border-orange-500' : 'bg-white text-slate-600 hover:bg-orange-50 border border-slate-200 hover:border-orange-200 hover:text-orange-600'}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-slate-500 text-lg font-medium">
            {lang === 'hi' ? 'कोई सेवा नहीं मिली' : `No services found matching "${searchQuery}"`}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredItems.map((item, ii) => (
              <div
                className="glass-panel glass-panel-hover rounded-[24px] p-8 md:p-10 transition-all duration-300 relative overflow-hidden group cursor-pointer"
                key={item.id}
                onClick={() => navigate(`/service/${item.id}`)}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full pointer-events-none" />
                <div className="w-16 h-16 rounded-2xl bg-white/50 border border-white/60 shadow-[0_4px_12px_rgba(15,23,42,0.05)] flex items-center justify-center text-3xl mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-slate-900 mb-3">{item.name}</h4>
                  <p className="text-[15px] text-slate-600 font-medium leading-relaxed mb-6">{item.desc}</p>
                  <button className="cursor-pointer text-orange-500 font-extrabold text-[13.5px] uppercase tracking-wide flex items-center gap-2 transition-all opacity-80 group-hover:opacity-100">
                    👁️ {t('services.viewDetail')}
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </PageTransition>
  );
}
