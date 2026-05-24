import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';
import { serviceIconMap, SearchIcon } from './Icons';

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
        { id: 'pcc', icon: '👮', name: t('services.pcc'), desc: t('services.pcc.desc') },
        { id: 'passportImmigration', icon: '🛂', name: t('services.passportImmigration'), desc: t('services.passportImmigration.desc') },
        { id: 'farmerSubsidy', icon: '🚜', name: t('services.farmerSubsidy'), desc: t('services.farmerSubsidy.desc') },
        { id: 'farmerRegistry', icon: '📝', name: t('services.farmerRegistry'), desc: t('services.farmerRegistry.desc') },
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
        { id: 'airTicket', icon: '✈️', name: t('services.airTicket'), desc: t('services.airTicket.desc') },
        { id: 'tourPackage', icon: '🏖️', name: t('services.tourPackage'), desc: t('services.tourPackage.desc') },
        { id: 'visaAssistance', icon: '🛂', name: t('services.visaAssistance'), desc: t('services.visaAssistance.desc') },
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

  const pastelColors = ['bg-[#FFF3E0]', 'bg-[#DBEAFE]', 'bg-[#D1FAE5]', 'bg-[#E8E0FF]', 'bg-[#FFE4E6]'];

  return (
    <PageTransition>
      <SEO
        title={t('nav.services')}
        description={t('services.subtitle')}
      />
      <div className="min-h-screen bg-[#FFFDF5] relative overflow-x-hidden pt-[136px] pb-24 z-10">

        <section className="px-4 max-w-7xl mx-auto relative z-10" id="services-page">
          <div className="text-center mb-14">
            <span className="brutal-badge mb-4">Service Hub</span>
            <h2 className="section-heading mt-4">{t('services.title')}</h2>
            <p className="text-black/50 font-bold text-sm mt-3 max-w-md mx-auto leading-relaxed">{t('services.subtitle')}</p>
            <div className="w-16 h-1.5 bg-[#FF6B00] mx-auto mt-5 border border-black" />
          </div>

          {/* Filtering and Search Area */}
          <div className="flex flex-col lg:flex-row gap-5 mb-12 items-center justify-between bg-white border-2 border-black p-4 rounded-xl max-w-6xl mx-auto" style={{ boxShadow: '4px 4px 0px 0px #000' }}>

            {/* Tabs Brutalist Style */}
            <div className="flex overflow-x-auto items-center gap-1.5 p-1.5 bg-[#FFFDF5] border-2 border-black rounded-xl w-full lg:w-auto">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-lg font-black text-xs transition-all duration-200 cursor-pointer whitespace-nowrap ${currentTab === tab ? 'bg-[#FF6B00] text-white border-2 border-black' : 'text-black/50 hover:text-black hover:bg-[#FFF3E0]'}`}
                  style={currentTab === tab ? { boxShadow: '2px 2px 0px 0px #000' } : {}}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Search Input Box */}
            <div className="relative w-full lg:w-96 flex items-center">
              <input
                type="text"
                placeholder={t('services.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="brutal-input pr-12"
              />
              <SearchIcon size={16} className="absolute right-5 text-black/40 pointer-events-none stroke-[2.2]" />
            </div>
          </div>

          {/* Cards Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-black/50 text-base font-bold max-w-sm mx-auto">
              {lang === 'hi' ? 'कोई सेवा नहीं मिली' : `No services found matching "${searchQuery}"`}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredItems.map((item, idx) => {
                const IconComponent = serviceIconMap[item.id] || SearchIcon;
                const cardBg = pastelColors[idx % pastelColors.length];
                return (
                  <div
                    className="bg-white border-2 border-black rounded-xl p-8 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group cursor-pointer flex flex-col justify-between"
                    style={{ boxShadow: '4px 4px 0px 0px #000' }}
                    key={item.id}
                    onClick={() => navigate(`/service/${item.id}`)}
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl ${cardBg} border-2 border-black flex items-center justify-center mb-6 transition-all duration-200 group-hover:scale-105 text-black`} style={{ boxShadow: '2px 2px 0px 0px #000' }}>
                        <IconComponent size={22} />
                      </div>
                      <h4 className="text-base font-black text-black mb-2 group-hover:text-[#FF6B00] transition-colors">{item.name}</h4>
                      <p className="text-[13px] text-black/50 font-bold leading-relaxed mb-6">{item.desc}</p>
                    </div>

                    <button className="cursor-pointer text-[#FF6B00] font-black text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-all group-hover:gap-2.5">
                      {t('services.viewDetail')}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
}

