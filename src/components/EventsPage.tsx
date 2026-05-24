import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';

interface EventItem {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  descriptionHi: string;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  locationHi: string;
  category: 'camp' | 'workshop' | 'scheme' | 'festival' | 'announcement';
  status: 'upcoming' | 'ongoing' | 'completed';
  icon: string;
}

const eventsData: EventItem[] = [
  {
    id: 'aadhaar-camp-june',
    title: 'Aadhaar Update Camp',
    titleHi: 'आधार अपडेट कैंप',
    description: 'Free Aadhaar correction and update camp. Bring your old Aadhaar card and supporting documents for name, address, mobile number, and biometric updates.',
    descriptionHi: 'निःशुल्क आधार सुधार और अपडेट कैंप। नाम, पता, मोबाइल नंबर और बायोमेट्रिक अपडेट के लिए अपना पुराना आधार कार्ड और सहायक दस्तावेज़ लाएं।',
    date: '2026-06-10',
    endDate: '2026-06-15',
    time: '9:00 AM - 5:00 PM',
    location: 'CSC Centre, Nauwa Gaon',
    locationHi: 'CSC केंद्र, नौवा गांव',
    category: 'camp',
    status: 'upcoming',
    icon: '🆔',
  },
  {
    id: 'pm-kisan-registration',
    title: 'PM Kisan Registration Drive',
    titleHi: 'PM किसान पंजीकरण अभियान',
    description: 'Special registration drive for PM Kisan Samman Nidhi Yojana. Farmers can register and check their payment status. Bring Aadhaar, bank passbook, and land papers.',
    descriptionHi: 'PM किसान सम्मान निधि योजना के लिए विशेष पंजीकरण अभियान। किसान पंजीकरण और भुगतान स्थिति की जांच कर सकते हैं। आधार, बैंक पासबुक और भूमि दस्तावेज लाएं।',
    date: '2026-06-20',
    endDate: '2026-06-22',
    time: '10:00 AM - 4:00 PM',
    location: 'Village Panchayat Hall, Nauwa Gaon',
    locationHi: 'ग्राम पंचायत हॉल, नौवा गांव',
    category: 'scheme',
    status: 'upcoming',
    icon: '🌾',
  },
  {
    id: 'digital-literacy-workshop',
    title: 'Digital Literacy Workshop',
    titleHi: 'डिजिटल साक्षरता कार्यशाला',
    description: 'Learn to use smartphones, internet banking, UPI payments, and government portals. Open for all age groups. No prior experience needed.',
    descriptionHi: 'स्मार्टफोन, इंटरनेट बैंकिंग, UPI भुगतान और सरकारी पोर्टल का उपयोग करना सीखें। सभी आयु वर्ग के लिए खुला। पूर्व अनुभव की आवश्यकता नहीं।',
    date: '2026-07-01',
    endDate: '2026-07-05',
    time: '11:00 AM - 3:00 PM',
    location: 'CSC Centre, Nauwa Gaon',
    locationHi: 'CSC केंद्र, नौवा गांव',
    category: 'workshop',
    status: 'upcoming',
    icon: '💻',
  },
  {
    id: 'ayushman-bharat-camp',
    title: 'Ayushman Bharat Card Camp',
    titleHi: 'आयुष्मान भारत कार्ड कैंप',
    description: 'Free Ayushman Bharat (PM-JAY) health card creation camp. Get your health card for free hospitalization up to ₹5 lakh. Bring Aadhaar card and ration card.',
    descriptionHi: 'निःशुल्क आयुष्मान भारत (PM-JAY) हेल्थ कार्ड निर्माण कैंप। ₹5 लाख तक मुफ्त अस्पताल भर्ती के लिए हेल्थ कार्ड बनवाएं। आधार कार्ड और राशन कार्ड लाएं।',
    date: '2026-07-15',
    endDate: '2026-07-17',
    time: '9:00 AM - 5:00 PM',
    location: 'Primary Health Centre, Nauwa Gaon',
    locationHi: 'प्राथमिक स्वास्थ्य केंद्र, नौवा गांव',
    category: 'camp',
    status: 'upcoming',
    icon: '🏥',
  },
  {
    id: 'aadhaar-camp-may',
    title: 'Aadhaar Update Camp — May 2026',
    titleHi: 'आधार अपडेट कैंप — मई 2026',
    description: 'Successfully conducted Aadhaar correction camp. Over 200 citizens got their Aadhaar details updated including name, address, and biometric corrections.',
    descriptionHi: 'सफलतापूर्वक आयोजित आधार सुधार कैंप। 200 से अधिक नागरिकों ने नाम, पता और बायोमेट्रिक सुधार सहित अपने आधार विवरण अपडेट करवाए।',
    date: '2026-05-10',
    endDate: '2026-05-15',
    time: '9:00 AM - 5:00 PM',
    location: 'CSC Centre, Nauwa Gaon',
    locationHi: 'CSC केंद्र, नौवा गांव',
    category: 'camp',
    status: 'completed',
    icon: '🆔',
  },
  {
    id: 'scholarship-awareness',
    title: 'Scholarship Awareness Session',
    titleHi: 'छात्रवृत्ति जागरूकता सत्र',
    description: 'Information session about various state and central government scholarships for students. Guidance on application process and eligibility criteria.',
    descriptionHi: 'छात्रों के लिए विभिन्न राज्य और केंद्र सरकार की छात्रवृत्तियों के बारे में जानकारी सत्र। आवेदन प्रक्रिया और पात्रता मानदंड पर मार्गदर्शन।',
    date: '2026-04-25',
    time: '10:00 AM - 1:00 PM',
    location: 'Government School, Nauwa Gaon',
    locationHi: 'सरकारी स्कूल, नौवा गांव',
    category: 'workshop',
    status: 'completed',
    icon: '🎓',
  },
];

interface GalleryImage {
  src: string;
  caption: string;
  captionHi: string;
  event: string;
  eventHi: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: '/images/gallery-1.png',
    caption: 'Citizens getting their Aadhaar details updated at the camp',
    captionHi: 'कैंप में नागरिक अपना आधार विवरण अपडेट करवा रहे हैं',
    event: 'Aadhaar Update Camp',
    eventHi: 'आधार अपडेट कैंप',
  },
  {
    src: '/images/gallery-2.png',
    caption: 'Villagers learning to use smartphones and digital payments',
    captionHi: 'ग्रामीण स्मार्टफोन और डिजिटल भुगतान का उपयोग सीख रहे हैं',
    event: 'Digital Literacy Workshop',
    eventHi: 'डिजिटल साक्षरता कार्यशाला',
  },
  {
    src: '/images/gallery-3.png',
    caption: 'Farmers registering for PM Kisan Samman Nidhi Yojana',
    captionHi: 'किसान PM किसान सम्मान निधि योजना के लिए पंजीकरण करा रहे हैं',
    event: 'PM Kisan Registration Drive',
    eventHi: 'PM किसान पंजीकरण अभियान',
  },
  {
    src: '/images/gallery-4.png',
    caption: 'Ayushman Bharat health card creation in progress',
    captionHi: 'आयुष्मान भारत हेल्थ कार्ड निर्माण प्रगति पर',
    event: 'Ayushman Bharat Camp',
    eventHi: 'आयुष्मान भारत कैंप',
  },
  {
    src: '/images/gallery-5.png',
    caption: 'Students learning about government scholarship opportunities',
    captionHi: 'छात्र सरकारी छात्रवृत्ति अवसरों के बारे में जान रहे हैं',
    event: 'Scholarship Awareness Session',
    eventHi: 'छात्रवृत्ति जागरूकता सत्र',
  },
  {
    src: '/images/gallery-6.png',
    caption: 'Community gathering at CSC centre during a registration drive',
    captionHi: 'पंजीकरण अभियान के दौरान CSC केंद्र पर सामुदायिक सभा',
    event: 'Community Event',
    eventHi: 'सामुदायिक कार्यक्रम',
  },
];

const categoryConfig: Record<EventItem['category'], { label: string; labelHi: string; color: string; bg: string }> = {
  camp: { label: 'Camp', labelHi: 'कैंप', color: 'text-blue-600', bg: 'bg-blue-50 border-blue-100' },
  workshop: { label: 'Workshop', labelHi: 'कार्यशाला', color: 'text-purple-600', bg: 'bg-purple-50 border-purple-100' },
  scheme: { label: 'Scheme', labelHi: 'योजना', color: 'text-emerald-600', bg: 'bg-emerald-50 border-emerald-100' },
  festival: { label: 'Festival', labelHi: 'उत्सव', color: 'text-amber-600', bg: 'bg-amber-50 border-amber-100' },
  announcement: { label: 'Announcement', labelHi: 'घोषणा', color: 'text-rose-600', bg: 'bg-rose-50 border-rose-100' },
};

const statusConfig: Record<EventItem['status'], { label: string; labelHi: string; dot: string; text: string }> = {
  upcoming: { label: 'Upcoming', labelHi: 'आगामी', dot: 'bg-emerald-500', text: 'text-emerald-600' },
  ongoing: { label: 'Ongoing', labelHi: 'चल रहा है', dot: 'bg-orange-500 animate-pulse', text: 'text-orange-600' },
  completed: { label: 'Completed', labelHi: 'सम्पन्न', dot: 'bg-slate-400', text: 'text-slate-500' },
};

function formatDate(dateStr: string, lang: string): { day: string; month: string; year: string } {
  const date = new Date(dateStr);
  const day = date.getDate().toString().padStart(2, '0');
  const monthEn = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
  const monthHi = date.toLocaleString('hi-IN', { month: 'short' });
  const year = date.getFullYear().toString();
  return { day, month: lang === 'hi' ? monthHi : monthEn, year };
}

function formatDateRange(start: string, end: string | undefined, lang: string): string {
  const s = new Date(start);
  const opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  if (!end) return s.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', opts);
  const e = new Date(end);
  const startStr = s.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'long' });
  const endStr = e.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', opts);
  return `${startStr} - ${endStr}`;
}

export default function EventsPage() {
  const { t, lang } = useLang();
  const [filter, setFilter] = useState<'all' | 'upcoming' | 'completed'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex + 1) % galleryImages.length);
  }, [lightboxIndex]);

  const goPrev = useCallback(() => {
    if (lightboxIndex !== null) setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length);
  }, [lightboxIndex]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [lightboxIndex, goNext, goPrev]);

  const upcomingEvents = eventsData.filter(e => e.status === 'upcoming' || e.status === 'ongoing');
  const pastEvents = eventsData.filter(e => e.status === 'completed');

  const filteredEvents = filter === 'all' ? eventsData
    : filter === 'upcoming' ? upcomingEvents
      : pastEvents;

  const filterOptions: { key: 'all' | 'upcoming' | 'completed'; label: string; labelHi: string; count: number }[] = [
    { key: 'all', label: 'All Events', labelHi: 'सभी कार्यक्रम', count: eventsData.length },
    { key: 'upcoming', label: 'Upcoming', labelHi: 'आगामी', count: upcomingEvents.length },
    { key: 'completed', label: 'Completed', labelHi: 'सम्पन्न', count: pastEvents.length },
  ];

  return (
    <PageTransition className="mt-[116px]">
      <SEO title={t('nav.events')} description={t('events.subtitle')} />

      {/* Page Header */}
      <section className="py-20 lg:py-10 px-4 max-w-7xl mx-auto" id="events-page">
        <div className="text-center mb-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">
            {lang === 'hi' ? 'कार्यक्रम' : 'Events'}
          </span>
          <h2 className="section-heading">{t('events.title')}</h2>
          <p className="section-subheading">{t('events.subtitle')}</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {filterOptions.map(opt => (
            <button
              key={opt.key}
              onClick={() => setFilter(opt.key)}
              className={`cursor-pointer px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${filter === opt.key
                  ? 'bg-[#0A0A0F] text-white shadow-[0_4px_16px_rgba(0,0,0,0.15)]'
                  : 'bg-white border border-slate-100 text-slate-500 hover:text-[#0A0A0F] hover:border-slate-200'
                }`}
            >
              {lang === 'hi' ? opt.labelHi : opt.label}
              <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${filter === opt.key ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-400'
                }`}>
                {opt.count}
              </span>
            </button>
          ))}
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredEvents.map((event, index) => {
              const dateInfo = formatDate(event.date, lang);
              const catConfig = categoryConfig[event.category];
              const statConfig = statusConfig[event.status];
              const dateRangeStr = formatDateRange(event.date, event.endDate, lang);

              return (
                <div
                  key={event.id}
                  className={`bg-white border border-slate-100 rounded-[24px] p-0 overflow-hidden hover:shadow-[0_16px_48px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-400 group ${event.status === 'completed' ? 'opacity-75 hover:opacity-100' : ''
                    }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  <div className="flex">
                    {/* Date Card */}
                    <div className={`shrink-0 w-[100px] md:w-[120px] flex flex-col items-center justify-center text-center p-5 ${event.status === 'completed'
                        ? 'bg-slate-50'
                        : 'bg-gradient-to-br from-orange-500 to-orange-600'
                      }`}>
                      <span className={`text-3xl md:text-4xl font-extrabold leading-none ${event.status === 'completed' ? 'text-slate-400' : 'text-white'
                        }`}>
                        {dateInfo.day}
                      </span>
                      <span className={`text-xs font-bold uppercase tracking-widest mt-1.5 ${event.status === 'completed' ? 'text-slate-400' : 'text-white/80'
                        }`}>
                        {dateInfo.month}
                      </span>
                      <span className={`text-[10px] font-semibold mt-0.5 ${event.status === 'completed' ? 'text-slate-300' : 'text-white/50'
                        }`}>
                        {dateInfo.year}
                      </span>
                      <span className="text-2xl mt-3 group-hover:scale-110 transition-transform duration-300">
                        {event.icon}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-7 min-w-0">
                      {/* Tags Row */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold border ${catConfig.bg} ${catConfig.color}`}>
                          {lang === 'hi' ? catConfig.labelHi : catConfig.label}
                        </span>
                        <span className={`inline-flex items-center gap-1.5 text-[11px] font-bold ${statConfig.text}`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${statConfig.dot}`} />
                          {lang === 'hi' ? statConfig.labelHi : statConfig.label}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-lg md:text-xl font-extrabold text-[#0A0A0F] mb-2 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                        {lang === 'hi' ? event.titleHi : event.title}
                      </h3>

                      {/* Description */}
                      <p className="text-slate-500 text-[14px] leading-relaxed mb-4 line-clamp-2">
                        {lang === 'hi' ? event.descriptionHi : event.description}
                      </p>

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-x-5 gap-y-2 text-[12px] text-slate-400 font-medium">
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                          </svg>
                          {dateRangeStr}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {event.time}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                          </svg>
                          {lang === 'hi' ? event.locationHi : event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20">
            <span className="text-6xl mb-5 block">📭</span>
            <h3 className="text-xl font-extrabold text-[#0A0A0F] mb-2">
              {lang === 'hi' ? 'कोई कार्यक्रम नहीं मिला' : 'No events found'}
            </h3>
            <p className="text-slate-500 text-sm">
              {lang === 'hi' ? 'इस श्रेणी में अभी कोई कार्यक्रम नहीं है।' : 'There are no events in this category yet.'}
            </p>
          </div>
        )}
      </section>

      {/* Event Gallery Section */}
      <section className="py-20 px-4 bg-[#F7F7F7]" id="events-gallery">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">
              {lang === 'hi' ? 'गैलरी' : 'Gallery'}
            </span>
            <h2 className="section-heading">
              {lang === 'hi' ? 'कार्यक्रम गैलरी' : 'Event Gallery'}
            </h2>
            <p className="section-subheading">
              {lang === 'hi'
                ? 'हमारे पिछले कार्यक्रमों और शिविरों की झलकियाँ'
                : 'Glimpses from our past events and camps'}
            </p>
          </div>

          {/* Gallery Grid — Masonry-like */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className={`relative rounded-[20px] overflow-hidden cursor-pointer group ${
                  index === 0 ? 'sm:row-span-2' : ''
                }`}
              >
                <img
                  src={img.src}
                  alt={lang === 'hi' ? img.captionHi : img.caption}
                  className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                    index === 0 ? 'h-full min-h-[300px]' : 'h-[260px] md:h-[280px]'
                  }`}
                  draggable={false}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-end p-5">
                  <span className="text-orange-400 text-[11px] font-bold uppercase tracking-widest mb-1">
                    {lang === 'hi' ? img.eventHi : img.event}
                  </span>
                  <p className="text-white text-sm font-medium leading-snug">
                    {lang === 'hi' ? img.captionHi : img.caption}
                  </p>
                </div>
                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-9 h-9 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-100 scale-75">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer z-10"
            aria-label="Close lightbox"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer z-10"
            aria-label="Previous image"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-all duration-300 cursor-pointer z-10"
            aria-label="Next image"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Image + Caption */}
          <div
            className="max-w-5xl w-full mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={lang === 'hi' ? galleryImages[lightboxIndex].captionHi : galleryImages[lightboxIndex].caption}
              className="w-full max-h-[75vh] object-contain rounded-2xl"
              draggable={false}
            />
            <div className="text-center mt-5">
              <span className="text-orange-400 text-xs font-bold uppercase tracking-widest block mb-1">
                {lang === 'hi' ? galleryImages[lightboxIndex].eventHi : galleryImages[lightboxIndex].event}
              </span>
              <p className="text-white/70 text-sm font-medium">
                {lang === 'hi' ? galleryImages[lightboxIndex].captionHi : galleryImages[lightboxIndex].caption}
              </p>
              <span className="text-white/30 text-xs font-bold mt-2 block">
                {lightboxIndex + 1} / {galleryImages.length}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Notification / Subscribe CTA */}
      <section className="py-20 px-4 bg-[#0A0A0F] text-white relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-orange-500/5 blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/[0.03] pointer-events-none" />

        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/[0.06] text-orange-400 text-xs font-bold uppercase tracking-widest mb-7">
            {lang === 'hi' ? 'सूचना' : 'Stay Updated'}
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight tracking-tight">
            {lang === 'hi' ? 'कार्यक्रमों की जानकारी पाएं' : 'Never Miss an Event'}
          </h2>
          <p className="text-white/50 text-lg md:text-xl mb-10 max-w-xl mx-auto font-medium leading-relaxed">
            {lang === 'hi'
              ? 'हमारे सभी आगामी कैंप, कार्यशालाओं और योजनाओं की जानकारी के लिए हमसे संपर्क करें या WhatsApp पर जुड़ें।'
              : 'Contact us or connect on WhatsApp to stay informed about all upcoming camps, workshops, and government scheme drives.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="pill-btn-primary text-base px-10 py-4 shadow-[0_8px_30px_rgba(249,115,22,0.3)] cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              {t('nav.contact')}
            </Link>
            <a
              href="https://wa.me/917233060698?text=Hello%20Jan%20Seva%20Kendra%20-%20Events%20Info"
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn text-base px-10 py-4 bg-transparent text-white border-2 border-white/15 hover:bg-emerald-500 hover:border-emerald-500 cursor-pointer inline-flex items-center justify-center gap-2 transition-all duration-300"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
