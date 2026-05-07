import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-[#0A0A0F] text-white pt-20 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-w-7xl mx-auto pb-16">
        <div className="footer-brand">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[14px] text-white bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_4px_16px_rgba(249,115,22,0.3)]">
              CSC
            </div>
            <div>
              <h1 className="text-lg font-extrabold leading-tight tracking-tight transition-colors duration-300">
                KIOSK
              </h1>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-white/40">
                Digital Gramin Service Center
              </span>
            </div>
          </div>
          <p className="text-[15px] leading-relaxed text-white/40 mt-4 max-w-xs">{t('footer.desc')}</p>
        </div>

        <div>
          <h4 className="text-white text-sm font-extrabold mb-7 uppercase tracking-widest">{t('footer.links')}</h4>
          <ul className="list-none">
            <li className="mb-4"><Link to="/" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.home')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.services')}</Link></li>
            <li className="mb-4"><Link to="/events" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.events')}</Link></li>
            <li className="mb-4"><Link to="/about" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.about')}</Link></li>
            <li className="mb-4"><Link to="/contact" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('nav.contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-extrabold mb-7 uppercase tracking-widest">{t('footer.categories')}</h4>
          <ul className="list-none">
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.all')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.govt')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.financial')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.utility')}</Link></li>
            <li className="mb-4"><Link to="/services" className="cursor-pointer text-white/40 text-[15px] font-medium transition-all duration-200 hover:text-orange-500 hover:pl-1.5 block">{t('services.health')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-extrabold mb-7 uppercase tracking-widest">{t('nav.contact')}</h4>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Digital+Gramin+Service+Centre+Nauwa+Gaon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[15px] mb-5 flex items-start gap-3 text-white/40 hover:text-orange-500 transition-colors"
          >
            {t('contact.address')}
          </a>
          <a href="tel:+917233060698" className="text-[15px] mb-5 flex items-start gap-3 text-white/40 hover:text-orange-500 transition-colors">📞 +91 7233060698</a>
          <a href='mailto:digigraonline@gmail.com' className="text-[15px] mb-5 flex items-start gap-3 text-white/40 hover:text-orange-500 transition-colors">✉️ digigraonline@gmail.com</a>
        </div>
      </div>

      <div className="border-t border-white/[0.06] py-8 px-4 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-white/30">{t('footer.copyright')}</p>
        <p className="text-sm text-white/30">
          Operated by: Avesh Kumar | <span className="text-orange-500 font-extrabold font-mono tracking-widest">CSC ID: 232747440016</span>
        </p>
      </div>
    </footer>
  );
}
