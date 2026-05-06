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
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">About Us</span>
          <h2 className="section-heading">{t('about.title')}</h2>
          <p className="section-subheading">{t('about.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-8 lg:gap-8">
          <div className="bg-[#111] text-white rounded-[24px] p-10 shadow-[0_16px_48px_rgba(0,0,0,0.1)]" id="vle-profile">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-2xl font-extrabold text-white mb-7 shadow-[0_8px_24px_rgba(249,115,22,0.3)]">AK</div>
            <div className="text-orange-400 text-[12px] font-bold mb-4 uppercase tracking-[0.2em]">{t('about.vle.title')}</div>
            <h3 className="text-3xl font-extrabold mb-1 text-white">{t('about.vle.name')}</h3>
            <div className="text-white/40 text-[12px] font-bold mb-5 uppercase tracking-[0.15em]">Village Level Entrepreneur (VLE)</div>
            <p className="text-white/50 text-[15px] leading-relaxed">{t('about.vle.desc')}</p>
            <div className="inline-flex mt-7 bg-white/[0.06] px-5 py-2.5 rounded-full text-sm text-white/70 font-bold font-mono tracking-widest border border-white/[0.06]">CSC ID: 232747440016</div>
          </div>

          <div className="bg-white border border-slate-100 rounded-[24px] p-10 shadow-[0_4px_24px_rgba(0,0,0,0.04)]" id="mission-card">
            <h3 className="text-2xl font-extrabold mb-4 text-[#111]">
              {t('about.mission.title')}
            </h3>
            <p className="text-[15px] text-slate-500 leading-relaxed mb-6">
              {t('about.mission.desc')}
            </p>
            <ul className="list-none mt-6">
              <li className="py-4 text-[15px] font-medium text-slate-600 border-b border-slate-100 flex items-start gap-4"><span className="w-7 h-7 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 text-sm font-extrabold">✓</span> {t('about.mission.point1')}</li>
              <li className="py-4 text-[15px] font-medium text-slate-600 border-b border-slate-100 flex items-start gap-4"><span className="w-7 h-7 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 text-sm font-extrabold">✓</span> {t('about.mission.point2')}</li>
              <li className="py-4 text-[15px] font-medium text-slate-600 border-b border-slate-100 flex items-start gap-4"><span className="w-7 h-7 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 text-sm font-extrabold">✓</span> {t('about.mission.point3')}</li>
              <li className="py-4 text-[15px] font-medium text-slate-600 flex items-start gap-4"><span className="w-7 h-7 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center shrink-0 text-sm font-extrabold">✓</span> {t('about.mission.point4')}</li>
            </ul>
          </div>
        </div>

        <div className="bg-white border border-slate-100 py-12 px-6 mt-10 rounded-[24px]">
          <h3 className="text-center text-sm text-slate-400 font-bold mb-8 uppercase tracking-widest">
            {t('schemes.title')}
          </h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-5xl mx-auto">
            {schemes.map((s, i) => (
              <div key={i} className="bg-[#F7F7F7] border border-slate-100 px-5 py-2.5 rounded-full text-sm font-semibold text-[#111] whitespace-nowrap transition-all duration-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(249,115,22,0.2)]">
                🏛️ {s}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
