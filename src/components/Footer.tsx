import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-slate-900 text-white pt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-w-7xl mx-auto pb-12">
        <div className="footer-brand">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-[15px] text-white bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_8px_20px_rgba(249,115,22,0.25)]">
              CSC
            </div>
            <div>
              <h1 className="text-lg font-extrabold leading-tight tracking-tight transition-colors duration-300">
                KIOSK
              </h1>
              <span className="text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300">
                Digital Gramin Service Center
              </span>
            </div>
          </div>
          <p className="text-[15px] leading-loose text-slate-400 mt-3">{t('footer.desc')}</p>
        </div>

        <div>
          <h4 className="text-white text-lg font-extrabold mb-6">{t('footer.links')}</h4>
          <ul className="list-none">
            <li className="mb-4"><Link to="/" className="cursor-pointer text-slate-400 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.home')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-slate-400 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.services')}</Link></li>
            <li className="mb-4"><Link to="/about" className="cursor-pointer text-slate-400 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.about')}</Link></li>
            <li className="mb-4"><Link to="/contact" className="cursor-pointer text-slate-400 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-extrabold mb-6">{t('footer.categories')}</h4>
          <ul className="list-none">
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-slate-400 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.govt')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-slate-400 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.financial')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-slate-400 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.utility')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-slate-400 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.health')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-lg font-extrabold mb-6">{t('nav.contact')}</h4>
          <p className="text-[15px] mb-4 flex items-start gap-3 text-slate-400">📍 {t('contact.address')}</p>
          <a href="tel:+917233060698" className="text-[15px] mb-4 flex items-start gap-3 text-slate-400">📞 +91 7233060698</a>
          <a href='mailto:digigraonline@gmail.com' className="text-[15px] mb-4 flex items-start gap-3 text-slate-400">✉️ digigraonline@gmail.com</a>
        </div>
      </div>

      <div className="border-t border-white/10 py-8 px-4 text-center max-w-7xl mx-auto">
        <p className="text-sm mb-2 text-slate-500">{t('footer.copyright')}</p>
        <p className="text-sm mb-2 text-slate-500">
          Operated by: Avesh Kumar | <span className="text-orange-500 font-extrabold font-mono tracking-widest">CSC ID: 232747440016</span>
        </p>
      </div>
    </footer>
  );
}
