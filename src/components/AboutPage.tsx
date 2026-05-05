import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';

export default function AboutPage() {
  const { t } = useLang();

  const schemes = [
    'Digital India', 'PM Kisan', 'PM Awas Yojana', 'Ujjwala Yojana',
    'Jan Dhan Yojana', 'Skill India', 'Ayushman Bharat', 'Make in India',
  ];

  return (
    <PageTransition className="mt-[116px]">
      <SEO 
        title={t('nav.about')} 
        description={t('about.subtitle')} 
      />
      <section className="py-20 lg:py-24 px-4 max-w-7xl mx-auto" id="about-page">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">{t('about.title')}</h2>
          <p className="text-base text-slate-500 max-w-2xl mx-auto">{t('about.subtitle')}</p>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-10">
          <div className="bg-slate-900 text-white rounded-[32px] p-10 shadow-[0_10px_40px_-10px_rgba(15,23,42,0.08)]" id="vle-profile">
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-3xl font-extrabold text-white mb-6 border-4 border-white/20">RK</div>
            <div className="text-orange-400 text-[13px] font-bold mb-4 uppercase tracking-widest">{t('about.vle.title')}</div>
            <h3 className="text-3xl font-extrabold mb-1 text-white">{t('about.vle.name')}</h3>
            <div className="text-orange-400 text-[13px] font-bold mb-4 uppercase tracking-widest">Village Level Entrepreneur (VLE)</div>
            <p className="text-slate-300 text-[15px] leading-loose">{t('about.vle.desc')}</p>
            <div className="inline-flex mt-6 bg-white/10 px-5 py-2.5 rounded-full text-sm text-white font-bold font-mono tracking-widest border border-white/20">CSC ID: UP123456789</div>
          </div>

          <div className="glass-panel rounded-[32px] p-10" id="mission-card">
            <h3 className="text-2xl font-extrabold mb-4 text-slate-900">
              {t('about.mission.title')}
            </h3>
            <p className="text-base text-slate-600 leading-loose mb-5">
              {t('about.mission.desc')}
            </p>
            <ul className="list-none mt-6">
              <li className="py-4 text-[15px] font-medium text-slate-600 border-b border-white/60 flex items-start gap-4"><span className="text-orange-500 font-extrabold shrink-0 text-lg">✓</span> {t('about.mission.point1')}</li>
              <li className="py-4 text-[15px] font-medium text-slate-600 border-b border-white/60 flex items-start gap-4"><span className="text-orange-500 font-extrabold shrink-0 text-lg">✓</span> {t('about.mission.point2')}</li>
              <li className="py-4 text-[15px] font-medium text-slate-600 border-b border-white/60 flex items-start gap-4"><span className="text-orange-500 font-extrabold shrink-0 text-lg">✓</span> {t('about.mission.point3')}</li>
              <li className="py-4 text-[15px] font-medium text-slate-600 flex items-start gap-4"><span className="text-orange-500 font-extrabold shrink-0 text-lg">✓</span> {t('about.mission.point4')}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white py-12 px-4 mt-10 rounded-3xl">
          <h3 className="text-center text-sm text-slate-500 font-bold mb-8 uppercase tracking-widest">
            {t('schemes.title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {schemes.map((s, i) => (
              <div key={i} className="bg-slate-50 border border-white/60 px-6 py-3 rounded-full text-sm font-semibold text-slate-900 whitespace-nowrap transition-all duration-200 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)]">
                🏛️ {s}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
