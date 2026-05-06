import { useParams, useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';
import { servicesData } from '../data/servicesData';
import { useEffect } from 'react';

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
      <PageTransition className="mt-[116px]">
        <div className="py-20 text-center min-h-[50vh] flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-[#111] mb-4">{t('services.notFound')}</h2>
          <button onClick={() => navigate('/services')} className="pill-btn-primary cursor-pointer">
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
    <PageTransition className="mt-[116px]">
      <SEO title={t(service.nameKey)} description={t(service.descKey)} />

      <section className="py-12 lg:py-20 px-4 max-w-6xl mx-auto min-h-[70vh]">
        {/* Back Button */}
        <button
          onClick={() => navigate('/services')}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-100 text-slate-500 font-bold rounded-full hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all shadow-sm hover:shadow-md cursor-pointer group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          {lang === 'hi' ? 'वापस जाएं' : 'Back to Services'}
        </button>

        {/* Hero Header Card */}
        <div className="bg-[#111] rounded-[24px] p-8 md:p-12 relative overflow-hidden mb-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 border border-white/[0.04] rounded-full -translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-6 items-start relative z-10">
            <div className="w-20 h-20 shrink-0 bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl flex items-center justify-center text-5xl">
              {service.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{t(service.nameKey)}</h1>
              <p className="text-white/50 text-lg leading-relaxed max-w-2xl">{t(service.descKey)}</p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Brief Description */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-8 md:p-10">
              <h2 className="text-lg font-extrabold text-[#111] mb-4 flex items-center gap-3">
                <span className="w-1.5 h-5 bg-orange-500 rounded block" />
                {lang === 'hi' ? 'विवरण' : 'About this Service'}
              </h2>
              <p className="text-[15px] text-slate-500 leading-[1.8]">{brief}</p>
            </div>

            {/* Sub Services */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-8 md:p-10">
              <h2 className="text-lg font-extrabold text-[#111] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-5 bg-orange-500 rounded block" />
                {lang === 'hi' ? 'शामिल सेवाएं' : 'Services Included'}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {subServices.map((sub, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-[#F7F7F7] border border-slate-100 p-4 rounded-xl group hover:bg-orange-50 hover:border-orange-200 transition-all duration-300">
                    <span className="w-8 h-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center text-orange-500 text-sm font-extrabold shrink-0 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                      {idx + 1}
                    </span>
                    <span className="text-[14px] font-semibold text-slate-600 group-hover:text-orange-700 transition-colors">{sub}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-8 md:p-10">
              <h2 className="text-lg font-extrabold text-[#111] mb-6 flex items-center gap-3">
                <span className="w-1.5 h-5 bg-orange-500 rounded block" />
                {t('services.docsRequired')}
              </h2>
              <ul className="space-y-3">
                {docs.map((doc, idx) => (
                  <li key={idx} className="flex items-center gap-4 bg-[#F7F7F7] border border-slate-100 p-4 rounded-xl">
                    <span className="w-8 h-8 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 text-sm font-bold">📄</span>
                    <span className="text-[15px] font-medium text-slate-600">{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* CTA Card */}
            <div className="bg-white border border-slate-100 rounded-[24px] p-8 sticky top-[140px]">
              <h3 className="text-base font-extrabold text-[#111] mb-2">
                {lang === 'hi' ? 'इस सेवा के लिए आवेदन करें' : 'Apply for this Service'}
              </h3>
              <p className="text-[13px] text-slate-400 mb-6 leading-relaxed">
                {lang === 'hi' ? 'हमारे केंद्र पर आएं या ऑनलाइन संपर्क करें' : 'Visit our centre or contact us online'}
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => navigate('/contact', { state: { serviceId: service.id } })}
                  className="w-full py-4 px-6 bg-orange-500 text-white font-bold rounded-xl hover:bg-orange-600 hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                  style={{ boxShadow: '0 8px 24px rgba(249, 115, 22, 0.25)' }}
                >
                  📞 {t('services.contact')}
                </button>

                <a
                  href="https://wa.me/917233060698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-emerald-50 text-emerald-600 font-bold rounded-xl border border-emerald-100 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  💬 WhatsApp
                </a>

                <button
                  onClick={handleShare}
                  className="w-full py-3.5 px-6 bg-[#F7F7F7] text-slate-500 font-bold rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer text-sm"
                >
                  🔗 {t('services.quickShare')}
                </button>
              </div>

              {/* Info Badge */}
              <div className="mt-6 bg-[#F7F7F7] border border-slate-100 rounded-xl p-4">
                <div className="flex items-center gap-3 text-[12px] text-slate-400 font-bold">
                  <span className="text-lg">🏛️</span>
                  <span>{lang === 'hi' ? 'सरकार द्वारा अधिकृत CSC केंद्र' : 'Government Authorized CSC Centre'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
