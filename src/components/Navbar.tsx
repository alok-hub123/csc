import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, toggleLang, t } = useLang();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.substring(1);

  const navLinks = [
    { id: 'home', label: t('nav.home') },
    { id: 'services', label: t('nav.services') },
    { id: 'events', label: t('nav.events') },
    { id: 'about', label: t('nav.about') },
    { id: 'contact', label: t('nav.contact') },
  ];

  const isTransparent = false; // Carousel hero is below navbar, no dark bg behind it

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isTransparent
      ? ''
      : 'bg-white/90 backdrop-blur-xl shadow-[0_1px_0_rgba(0,0,0,0.04)]'
      }`}>

      {/* Announcement Ticker */}
      <div className={`${isTransparent ? 'bg-white/[0.06] border-b border-white/[0.05]' : 'bg-[#F7F7F7] border-b border-slate-100'} overflow-hidden whitespace-nowrap py-1.5 text-[12px] font-bold tracking-wide transition-colors duration-300`}>
        <div className={`inline-block animate-ticker ${isTransparent ? 'text-white/70' : 'text-slate-600'}`}>
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
          <div className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-[14px] text-white bg-gradient-to-br from-orange-500 to-orange-600 shadow-[0_4px_16px_rgba(249,115,22,0.3)]">
            CSC
          </div>
          <div>
            <h1 className={`text-lg font-extrabold leading-tight tracking-tight transition-colors duration-300 ${isTransparent ? 'text-white' : 'text-[#0A0A0F]'}`}>
              KIOSK
            </h1>
            <span className={`text-[10px] font-semibold uppercase tracking-widest transition-colors duration-300 hidden sm:block ${isTransparent ? 'text-white/60' : 'text-slate-400'}`}>
              Digital Gramin Service Center
            </span>
          </div>
        </Link>

        {/* Desktop Links — Pill Style */}
        <div className={`hidden lg:flex items-center gap-1 p-1.5 rounded-full ${isTransparent ? 'bg-white/[0.06] border border-white/[0.06]' : 'bg-[#F7F7F7] border border-slate-100'}`}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              className={`cursor-pointer px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${currentPage === link.id
                ? (isTransparent ? 'bg-white text-[#0A0A0F] shadow-sm' : 'bg-white text-[#0A0A0F] shadow-sm')
                : (isTransparent ? 'text-white/80 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-[#0A0A0F] hover:bg-white')
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
            className={`cursor-pointer px-4 py-2 rounded-full text-[13px] font-bold transition-all duration-300 hover:-translate-y-0.5 ${isTransparent
              ? 'bg-white/[0.08] text-white border border-white/[0.1] hover:bg-white/[0.15]'
              : 'bg-[#F7F7F7] border border-slate-100 text-[#0A0A0F] hover:text-orange-500 hover:border-orange-200'
              }`}
          >
            {lang === 'en' ? 'हिंदी' : 'English'}
          </button>

          <button
            className="cursor-pointer flex lg:hidden flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-[#0A0A0F]'} ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-[#0A0A0F]'} ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${isTransparent ? 'bg-white' : 'bg-[#0A0A0F]'} ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-[0_16px_48px_rgba(0,0,0,0.06)] p-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id === 'home' ? '/' : `/${link.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`cursor-pointer text-left px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${currentPage === link.id
                ? 'bg-orange-50 text-orange-500'
                : 'text-slate-600 hover:bg-[#F7F7F7] hover:text-[#0A0A0F]'
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
