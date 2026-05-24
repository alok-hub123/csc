import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';
import { GovtIcon } from './Icons';

export default function AboutPage() {
  const { t } = useLang();

  const schemes = [
    'Digital India', 'PM Kisan', 'PM Awas Yojana', 'Ujjwala Yojana',
    'Jan Dhan Yojana', 'Skill India', 'Ayushman Bharat', 'Make in India',
  ];

  return (
    <PageTransition>
      <SEO
        title={t('nav.about')}
        description={t('about.subtitle')}
      />
      <div className="min-h-screen bg-[#FFFDF5] relative overflow-x-hidden pt-[136px] pb-24 z-10">

        <section className="px-4 max-w-7xl mx-auto relative z-10" id="about-page">
          <div className="text-center mb-14">
            <span className="brutal-badge mb-4">Our Story</span>
            <h2 className="section-heading mt-4">{t('about.title')}</h2>
            <p className="text-black/50 font-bold text-sm mt-3 max-w-md mx-auto leading-relaxed">{t('about.subtitle')}</p>
            <div className="w-16 h-1.5 bg-[#FF6B00] mx-auto mt-5 border border-black" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-6 max-w-6xl mx-auto">
            {/* VLE Profile — Dark Brutalist Card */}
            <div className="bg-black border-2 border-white text-white rounded-xl p-8 md:p-10 relative overflow-hidden flex flex-col justify-between" style={{ boxShadow: '6px 6px 0px 0px rgba(255,107,0,0.5)' }} id="vle-profile">
              
              <div>

                <div className="w-16 h-16 rounded-xl bg-[#FF6B00] border-2 border-white flex items-center justify-center text-xl font-black text-white mb-7" style={{ boxShadow: '3px 3px 0px 0px #fff' }}>
                  AK
                </div>
                <div className="text-[#FF6B00] text-[10px] font-black mb-3 uppercase tracking-widest">{t('about.vle.title')}</div>
                <h3 className="text-2xl md:text-3xl font-black mb-1.5 text-white tracking-tight leading-none">{t('about.vle.name')}</h3>
                <div className="text-white/50 text-[10px] font-black mb-6 uppercase tracking-wider">Village Level Entrepreneur (VLE)</div>
                <p className="text-white/70 text-[13.5px] leading-relaxed font-bold">{t('about.vle.desc')}</p>
              </div>

              <div className="mt-8 pt-6 border-t-2 border-white/20 flex items-center">
                <div className="inline-flex bg-white/10 px-5 py-2.5 rounded-xl text-xs text-white/80 font-mono tracking-widest border-2 border-white/20 font-black">
                  CSC ID: 232747440016
                </div>
              </div>
            </div>

            {/* Mission Card — Brutalist White panel */}
            <div className="bg-white border-2 border-black rounded-xl p-8 md:p-10 group" style={{ boxShadow: '4px 4px 0px 0px #000' }} id="mission-card">
              <h3 className="text-xl font-black mb-4 text-black tracking-tight">
                {t('about.mission.title')}
              </h3>
              <p className="text-[13.5px] text-black/60 font-bold leading-[1.7] mb-6">
                {t('about.mission.desc')}
              </p>
              
              <ul className="list-none grid grid-cols-1 gap-1.5 border-t-2 border-black/10 pt-6">
                {[t('about.mission.point1'), t('about.mission.point2'), t('about.mission.point3'), t('about.mission.point4')].map((pt, pIdx) => (
                  <li key={pIdx} className="py-3 text-[13px] font-bold text-black/70 flex items-start gap-4">
                    <div className="w-6 h-6 rounded-lg bg-[#FF6B00] border-2 border-black text-white flex items-center justify-center shrink-0">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <span className="leading-normal">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Schemes grid */}
          <div className="bg-white border-2 border-black p-8 md:p-10 mt-6 rounded-xl max-w-6xl mx-auto" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
            <h3 className="text-center text-xs text-black/50 font-black mb-8 uppercase tracking-widest">
              {t('schemes.title')}
            </h3>
            <div className="flex flex-wrap justify-center gap-2.5 max-w-5xl mx-auto">
              {schemes.map((s, i) => (
                <div key={i} className="bg-[#FFFDF5] border-2 border-black px-5 py-2.5 rounded-xl text-xs font-black text-black whitespace-nowrap transition-all duration-200 hover:bg-[#FF6B00] hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5 cursor-default flex items-center gap-2.5 group" style={{ boxShadow: '2px 2px 0px 0px #000' }}>
                  <GovtIcon size={13} className="text-[#FF6B00] group-hover:text-white transition-colors" />
                  {s}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
}
