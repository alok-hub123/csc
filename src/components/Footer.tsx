import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="bg-black text-white pt-24 px-4 border-t-2 border-white relative overflow-hidden">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-w-6xl mx-auto pb-16 relative z-10">
        
        {/* Brand column */}
        <div className="footer-brand">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-white bg-white flex items-center justify-center shrink-0" style={{ boxShadow: '3px 3px 0px 0px #fff' }}>
              <img src="/images/logo.png" alt="CSC Logo" className="w-full h-full object-cover p-1" />
            </div>
            <div>
              <h1 className="text-lg font-black leading-tight tracking-tight">
                KIOSK
              </h1>
              <span className="text-[10px] font-black uppercase tracking-widest text-white/50 block leading-none mt-1">
                Digital Gramin Service Center
              </span>
            </div>
          </div>
          <p className="text-[13.5px] leading-relaxed text-white/50 mt-4 max-w-xs font-bold">{t('footer.desc')}</p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-xs font-black mb-7 uppercase tracking-widest border-l-2 border-[#FF6B00] pl-3">{t('footer.links')}</h4>
          <ul className="list-none space-y-3.5">
            {[
              { to: '/', label: t('nav.home') },
              { to: '/services', label: t('nav.services') },
              { to: '/events', label: t('nav.events') },
              { to: '/about', label: t('nav.about') },
              { to: '/contact', label: t('nav.contact') }
            ].map((link, idx) => (
              <li key={idx}>
                <Link to={link.to} className="cursor-pointer text-white/50 text-[13.5px] font-black transition-all duration-200 hover:text-[#FF6B00] hover:pl-2 block">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-white text-xs font-black mb-7 uppercase tracking-widest border-l-2 border-[#FF6B00] pl-3">{t('footer.categories')}</h4>
          <ul className="list-none space-y-3.5">
            {[
              { label: t('services.all') },
              { label: t('services.central') },
              { label: t('services.state') },
              { label: t('services.private') },
              { label: t('services.other') }
            ].map((cat, idx) => (
              <li key={idx}>
                <Link to="/services" className="cursor-pointer text-white/50 text-[13.5px] font-black transition-all duration-200 hover:text-[#FF6B00] hover:pl-2 block">
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-white text-xs font-black mb-7 uppercase tracking-widest border-l-2 border-[#FF6B00] pl-3">{t('nav.contact')}</h4>
          <div className="space-y-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=Digital+Gramin+Service+Centre+Nauwa+Gaon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-black flex items-start gap-3 text-white/50 hover:text-[#FF6B00] transition-colors leading-relaxed"
            >
              📍 {t('contact.address')}
            </a>
            <a href="tel:+917233060698" className="text-[13px] font-black flex items-center gap-3 text-white/50 hover:text-[#FF6B00] transition-colors">
              📞 +91 7233060698
            </a>
            <a href='mailto:digigraonline@gmail.com' className="text-[13px] font-black flex items-center gap-3 text-white/50 hover:text-[#FF6B00] transition-colors leading-none">
              ✉️ digigraonline@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Copy info */}
      <div className="border-t-2 border-white/20 py-8 px-4 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-xs text-white/40 font-black uppercase tracking-wider">{t('footer.copyright')}</p>
        <p className="text-xs text-white/40 font-black uppercase tracking-wider">
          Operated by: Avesh Kumar | <span className="text-[#FF6B00] font-black font-mono tracking-widest">CSC ID: 232747440016</span>
        </p>
      </div>
    </footer>
  );
}
