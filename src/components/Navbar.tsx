import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'events', label: t('nav.events') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const isTransparent = currentPage === 'home' && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent
      ? 'bg-transparent'
      : 'bg-white border-b-2 border-black'
      }`}>

      {/* Announcement Ticker */}
      <div className={`${isTransparent ? 'bg-black text-white' : 'bg-[#FFF3E0] text-black'} overflow-hidden whitespace-nowrap py-2 text-[11px] font-black uppercase tracking-widest border-b-2 border-black transition-colors duration-300`}>
        <div className="inline-block animate-ticker">
          <span className="mr-20 inline-flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#FF6B00] before:mr-3 before:border before:border-black">{t('announce.1')}</span>
          <span className="mr-20 inline-flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#FF6B00] before:mr-3 before:border before:border-black">{t('announce.2')}</span>
          <span className="mr-20 inline-flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#FF6B00] before:mr-3 before:border before:border-black">{t('announce.3')}</span>
          <span className="mr-20 inline-flex items-center before:content-[''] before:inline-block before:w-2 before:h-2 before:bg-[#FF6B00] before:mr-3 before:border before:border-black">{t('announce.4')}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-11 h-11 rounded-xl overflow-hidden border-2 border-black bg-white flex items-center justify-center shrink-0" style={{ boxShadow: '3px 3px 0px 0px #000' }}>
            <img src="/images/logo.png" alt="CSC Logo" className="w-full h-full object-cover p-1" />
          </div>
          <div>
            <h1 className="text-lg font-black leading-none tracking-tight text-black">
              KIOSK
            </h1>
            <span className={`text-[9px] font-black uppercase tracking-widest hidden sm:block ${isTransparent ? 'text-black/50' : 'text-black/40'}`}>
              Digital Gramin Service Center
            </span>
          </div>
        </Link>

        {/* Desktop Links — Brutalist Style */}
        <div className="hidden lg:flex items-center gap-1 p-1.5 rounded-xl border-2 border-black bg-[#FFFDF5]" style={{ boxShadow: '3px 3px 0px 0px #000' }}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              className={`cursor-pointer px-5 py-2 rounded-lg text-[12px] font-black uppercase tracking-wide transition-all duration-200 ${currentPage === link.id
                ? 'bg-[#FF6B00] text-white border-2 border-black'
                : 'text-black/60 hover:text-black hover:bg-[#FFF3E0]'
                }`}
              style={currentPage === link.id ? { boxShadow: '2px 2px 0px 0px #000' } : {}}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="cursor-pointer px-4.5 py-2 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all duration-200 bg-white text-black border-2 border-black hover:-translate-x-0.5 hover:-translate-y-0.5"
            style={{ boxShadow: '2px 2px 0px 0px #000' }}
          >
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>

          <button
            className="cursor-pointer flex lg:hidden flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-[2.5px] rounded-sm transition-all duration-300 bg-black ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-[2.5px] rounded-sm transition-all duration-300 bg-black ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-[2.5px] rounded-sm transition-all duration-300 bg-black ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>


      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b-2 border-x-2 border-black p-4 flex flex-col gap-1" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`cursor-pointer text-left px-5 py-3 rounded-xl text-sm font-black uppercase tracking-wide transition-all duration-200 ${currentPage === link.id
                ? 'bg-[#FF6B00] text-white border-2 border-black'
                : 'text-black/60 hover:bg-[#FFF3E0] hover:text-black'
                }`}
              style={currentPage === link.id ? { boxShadow: '2px 2px 0px 0px #000' } : {}}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
