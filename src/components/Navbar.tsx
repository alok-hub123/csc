import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const isHome = currentPage === 'home';
  const isTransparent = isHome && !scrolled;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isTransparent
      ? 'backdrop-blur-xl backdrop-blur-xl'
      : 'bg-white/80 backdrop-blur-xl shadow-[0_10px_40px_-10px_rgba(15,23,42,0.08)]'
      }`}>

      {/* Announcement Ticker */}
      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/50 text-slate-700 overflow-hidden whitespace-nowrap py-1.5 text-[12px] font-bold tracking-wide shadow-sm">
        <div className="inline-block animate-ticker">
          <span className="mr-20 inline-flex items-center before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:mr-3">{t('announce.1')}</span>
          <span className="mr-20 inline-flex items-center before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:mr-3">{t('announce.2')}</span>
          <span className="mr-20 inline-flex items-center before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:mr-3">{t('announce.3')}</span>
          <span className="mr-20 inline-flex items-center before:content-[''] before:inline-block before:w-1.5 before:h-1.5 before:bg-orange-500 before:rounded-full before:mr-3">{t('announce.4')}</span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-[15px] text-white bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_8px_20px_rgba(249,115,22,0.25)]">
            CSC
          </div>
          <div>
            <h1 className={`text-lg font-extrabold leading-tight tracking-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-slate-900'}`}>
              Jan Seva Kendra
            </h1>
            <span className={`text-[11px] font-semibold uppercase tracking-widest transition-colors duration-300 ${isTransparent ? 'text-white/80' : 'text-slate-500'}`}>
              COMMON SERVICE CENTRE
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              className={`cursor-pointer px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${currentPage === link.id
                ? (isTransparent ? 'bg-white/20 text-white' : 'bg-orange-500/10 text-orange-600')
                : (isTransparent ? 'text-white hover:bg-white/10 hover:text-white' : 'text-slate-600 hover:bg-orange-500/10 hover:text-orange-600')
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLang}
            className={`cursor-pointer px-4 py-2 rounded-full text-[13px] font-bold shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${isTransparent
              ? 'bg-white/20 text-white border border-white/30 hover:bg-white/30'
              : 'bg-white border border-white/60 text-slate-900 hover:text-orange-500'
              }`}
          >
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>

          <button
            className="cursor-pointer flex lg:hidden flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-slate-900'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-slate-900'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-slate-900'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-slate-200/50 shadow-xl p-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`cursor-pointer text-left px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${currentPage === link.id
                ? 'bg-orange-500/10 text-orange-600'
                : 'text-slate-600 hover:bg-orange-500/10 hover:text-orange-600'
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
