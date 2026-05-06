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
          <button
            onClick={() => navigate('/services')}
            className="pill-btn-primary cursor-pointer"
          >
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

  return (
    <PageTransition className="mt-[116px]">
      <SEO
        title={t(service.nameKey)}
        description={t(service.descKey)}
      />
      <section className="py-12 lg:py-20 px-4 max-w-4xl mx-auto min-h-[70vh]">
        <button
          onClick={() => navigate('/services')}
          className="mb-8 inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-100 text-slate-500 font-bold rounded-full hover:bg-orange-50 hover:text-orange-600 hover:border-orange-200 transition-all shadow-sm hover:shadow-md cursor-pointer group"
        >
          <span className="transition-transform group-hover:-translate-x-1">←</span>
          {lang === 'hi' ? 'वापस जाएं' : 'Back to Services'}
        </button>

        <div className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.04)] border border-slate-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-orange-50 to-transparent rounded-bl-full pointer-events-none" />

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="w-20 h-20 shrink-0 bg-[#F7F7F7] border border-slate-100 rounded-2xl flex items-center justify-center text-5xl">
              {service.icon}
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#111] mb-4">{t(service.nameKey)}</h1>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                {t(service.descKey)}
              </p>

              <div className="mb-10">
                <h3 className="text-lg font-extrabold text-[#111] mb-5 flex items-center gap-3 before:content-[''] before:block before:w-1.5 before:h-5 before:bg-orange-500 before:rounded">
                  {t('services.docsRequired')}
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {docs.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-3 bg-[#F7F7F7] p-4 rounded-xl border border-slate-100">
                      <span className="text-orange-500 mt-0.5">📄</span>
                      <span className="text-slate-600 font-medium text-[15px]">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100">
                <button
                  onClick={() => navigate('/contact', { state: { serviceId: service.id } })}
                  className="flex-1 py-4 px-6 bg-orange-500 text-white font-bold rounded-xl hover:shadow-[0_8px_24px_rgba(249,115,22,0.3)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  📞 {t('services.contact')}
                </button>
                <button
                  onClick={handleShare}
                  className="sm:flex-none py-4 px-8 bg-[#F7F7F7] text-slate-600 font-bold rounded-xl border border-slate-100 hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  🔗 {t('services.quickShare')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
