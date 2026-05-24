import { useParams, useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';
import { servicesData } from '../data/servicesData';
import { useEffect } from 'react';
import { serviceIconMap, SearchIcon, PhoneIcon, WhatsAppIcon, GovtIcon } from './Icons';

export default function ServiceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { t, lang } = useLang();
  const navigate = useNavigate();

  const service = id ? servicesData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!service) {
    return (
      <PageTransition>
        <div className="min-h-screen bg-[#FFFDF5] flex flex-col items-center justify-center pt-[116px]">
          <h2 className="text-3xl font-black text-black mb-4">{t('services.notFound')}</h2>
          <button onClick={() => navigate('/services')} className="brutal-btn-primary cursor-pointer">
            Go Back
          </button>
        </div>
      </PageTransition>
    );
  }

  const handleShare = async () => {
    const shareData = {
      title: t(service.nameKey),
      text: `Check out this service: ${t(service.nameKey)} - ${t(service.descKey)}`,
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        const waLink = `https://wa.me/?text=${encodeURIComponent(shareData.text + ' ' + shareData.url)}`;
        window.open(waLink, '_blank');
      }
    } catch (err) {
      console.error('Error sharing:', err);
    }
  };

  const docs = lang === 'hi' ? service.documentsHi : service.documentsEn;
  const brief = lang === 'hi' ? service.briefHi : service.briefEn;
  const subServices = lang === 'hi' ? service.subServicesHi : service.subServicesEn;

  return (
    <PageTransition>
      <SEO title={t(service.nameKey)} description={t(service.descKey)} />

      <div className="min-h-screen bg-[#FFFDF5] relative overflow-x-hidden pt-[124px] pb-24 z-10">

        <section className="px-4 max-w-6xl mx-auto relative z-10">

          {/* Back Button */}
          <button
            onClick={() => navigate('/services')}
            className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-black text-black font-black rounded-xl hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer group"
            style={{ boxShadow: '3px 3px 0px 0px #000' }}
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            {lang === 'hi' ? 'वापस जाएं' : 'Back to Services'}
          </button>

          {/* Hero Header Card — Dark Brutalist */}
          <div className="bg-black border-2 border-white rounded-xl p-8 md:p-12 relative overflow-hidden mb-8" style={{ boxShadow: '6px 6px 0px 0px rgba(255,107,0,0.5)' }}>

            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
              <div className="w-16 h-16 shrink-0 bg-[#FF6B00] border-2 border-white rounded-xl flex items-center justify-center text-white" style={{ boxShadow: '3px 3px 0px 0px #fff' }}>
                {(() => {
                  const IconComp = serviceIconMap[service.id] || SearchIcon;
                  return <IconComp size={28} className="text-white" />;
                })()}
              </div>
              <div className="flex-1">
                <span className="inline-block px-3 py-1 rounded-lg bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-wider mb-2 border border-white/30">Service Details</span>
                <h1 className="text-2xl md:text-3.5xl font-black text-white mb-2 tracking-tight leading-tight">{t(service.nameKey)}</h1>
                <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl font-bold">{t(service.descKey)}</p>
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
            {/* Left Column */}
            <div className="space-y-6">
              
              {/* Brief Description */}
              <div className="bg-white border-2 border-black rounded-xl p-8 md:p-10 group" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                <h2 className="text-lg font-black text-black mb-4 flex items-center gap-3">
                  <span className="w-2 h-6 bg-[#FF6B00] rounded-sm block border border-black" />
                  {lang === 'hi' ? 'विवरण' : 'About this Service'}
                </h2>
                <p className="text-[14px] text-black/60 leading-[1.8] font-bold">{brief}</p>
              </div>

              {/* Sub Services */}
              <div className="bg-white border-2 border-black rounded-xl p-8 md:p-10 group" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                <h2 className="text-lg font-black text-black mb-6 flex items-center gap-3">
                  <span className="w-2 h-6 bg-[#FF6B00] rounded-sm block border border-black" />
                  {lang === 'hi' ? 'शामिल सेवाएं' : 'Services Included'}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {subServices.map((sub, idx) => (
                    <div key={idx} className="flex items-center gap-3 bg-[#FFFDF5] border-2 border-black p-4 rounded-xl group hover:bg-[#FFF3E0] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200" style={{ boxShadow: '2px 2px 0px 0px #000' }}>
                      <span className="w-8 h-8 rounded-lg bg-[#FF6B00] border-2 border-black flex items-center justify-center text-white text-xs font-black shrink-0">
                        {idx + 1}
                      </span>
                      <span className="text-[13px] font-bold text-black/70 group-hover:text-black transition-colors leading-snug">{sub}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Documents Required */}
              <div className="bg-white border-2 border-black rounded-xl p-8 md:p-10 group" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                <h2 className="text-lg font-black text-black mb-6 flex items-center gap-3">
                  <span className="w-2 h-6 bg-[#FF6B00] rounded-sm block border border-black" />
                  {t('services.docsRequired')}
                </h2>
                <ul className="grid grid-cols-1 gap-3">
                  {docs.map((doc, idx) => (
                    <li key={idx} className="flex items-center gap-4 bg-[#FFFDF5] border-2 border-black p-4 rounded-xl" style={{ boxShadow: '2px 2px 0px 0px #000' }}>
                      <div className="w-8 h-8 rounded-lg bg-[#FFF3E0] border-2 border-black text-[#FF6B00] flex items-center justify-center shrink-0">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                      </div>
                      <span className="text-[13.5px] font-bold text-black/70 leading-snug">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar — Brutalist CTA Card */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-black rounded-xl p-7 sticky top-[140px]" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                
                <h3 className="text-[15px] font-black text-black mb-1.5">

                  {lang === 'hi' ? 'इस सेवा के लिए आवेदन करें' : 'Apply for this Service'}
                </h3>
                <p className="text-[12px] text-black/50 mb-6 leading-relaxed font-bold">
                  {lang === 'hi' ? 'हमारे केंद्र पर आएं या ऑनलाइन संपर्क करें' : 'Visit our centre or contact us online'}
                </p>

                <div className="space-y-3 relative z-10">
                  <button
                    onClick={() => navigate('/contact', { state: { serviceId: service.id } })}
                    className="w-full py-3.5 px-6 bg-[#FF6B00] text-white font-black rounded-xl border-2 border-black hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
                    style={{ boxShadow: '3px 3px 0px 0px #000' }}
                  >
                    <PhoneIcon size={12} className="stroke-[2.5]" />
                    {t('services.contact')}
                  </button>

                  <a
                     href="https://wa.me/917233060698"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="w-full py-3.5 px-6 bg-[#D1FAE5] text-black font-black rounded-xl border-2 border-black hover:bg-[#25D366] hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer text-xs uppercase tracking-wider"
                     style={{ boxShadow: '3px 3px 0px 0px #000' }}
                  >
                    <WhatsAppIcon size={12} className="stroke-[2.5]" />
                    WhatsApp
                  </a>

                  <button
                    onClick={handleShare}
                    className="w-full py-3.5 px-6 bg-white text-black font-black rounded-xl border-2 border-black hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer text-xs uppercase tracking-wider"
                    style={{ boxShadow: '3px 3px 0px 0px #000' }}
                  >
                    <svg className="w-3.5 h-3.5 stroke-[2.2]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186l5.308-2.654m-5.308 2.654l5.308 2.654m3.614-5.068a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-4.5 9a2.25 2.25 0 114.5 0 2.25 2.25 0 01-4.5 0z" /></svg>
                    {t('services.quickShare')}
                  </button>
                </div>

                {/* Info Badge */}
                <div className="mt-6 bg-[#FFF3E0] border-2 border-black rounded-xl p-4" style={{ boxShadow: '2px 2px 0px 0px #000' }}>
                  <div className="flex items-center gap-3 text-[10px] text-black font-black tracking-wide uppercase leading-tight">
                    <GovtIcon size={14} className="text-[#FF6B00] shrink-0" />
                    <span>{lang === 'hi' ? 'अधिकृत CSC केंद्र' : 'Authorized CSC Centre'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
