import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';
import { 
  AadhaarIcon, 
  PmKisanIcon, 
  RechargeIcon, 
  AyushmanIcon, 
  ScholarshipIcon, 
  CalendarIcon, 
  ClockIcon, 
  MapPinIcon, 
  WhatsAppIcon, 
  GovtIcon,
  ChevronRightIcon
} from './Icons';

const eventIconMap: Record<string, React.ComponentType<any>> = {
  'aadhaar-camp-june': AadhaarIcon,
  'pm-kisan-registration': PmKisanIcon,
  'digital-literacy-workshop': RechargeIcon,
  'ayushman-bharat-camp': AyushmanIcon,
  'aadhaar-camp-may': AadhaarIcon,
  'scholarship-awareness': ScholarshipIcon,
};

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
  camp: { label: 'Camp', labelHi: 'कैंप', color: 'text-black', bg: 'bg-[#DBEAFE] border-2 border-black' },
  workshop: { label: 'Workshop', labelHi: 'कार्यशाला', color: 'text-black', bg: 'bg-[#E8E0FF] border-2 border-black' },
  scheme: { label: 'Scheme', labelHi: 'योजना', color: 'text-black', bg: 'bg-[#D1FAE5] border-2 border-black' },
  festival: { label: 'Festival', labelHi: 'उत्सव', color: 'text-black', bg: 'bg-[#FFF3E0] border-2 border-black' },
  announcement: { label: 'Announcement', labelHi: 'घोषणा', color: 'text-black', bg: 'bg-[#FFE4E6] border-2 border-black' },
};

const statusConfig: Record<EventItem['status'], { label: string; labelHi: string; dot: string; text: string }> = {
  upcoming: { label: 'Upcoming', labelHi: 'आगामी', dot: 'bg-[#25D366] border border-black', text: 'text-black font-black' },
  ongoing: { label: 'Ongoing', labelHi: 'चल रहा है', dot: 'bg-[#FF6B00] animate-pulse border border-black', text: 'text-[#FF6B00] font-black' },
  completed: { label: 'Completed', labelHi: 'सम्पन्न', dot: 'bg-black/30 border border-black', text: 'text-black/50 font-black' },
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
    <PageTransition>
      <SEO title={t('nav.events')} description={t('events.subtitle')} />

      <div className="min-h-screen bg-[#FFFDF5] relative overflow-x-hidden pt-[136px] pb-24 z-10">

        <section className="px-4 max-w-7xl mx-auto relative z-10" id="events-page">

          <div className="text-center mb-10">
            <span className="brutal-badge mb-4">
              {lang === 'hi' ? 'कार्यक्रम' : 'Events'}
            </span>
            <h2 className="section-heading mt-4">{t('events.title')}</h2>
            <p className="text-black/50 font-bold text-sm mt-3 max-w-md mx-auto leading-relaxed">{t('events.subtitle')}</p>
            <div className="w-16 h-1.5 bg-[#FF6B00] mx-auto mt-5 border border-black" />
          </div>

          {/* Filter Tabs — Brutalist Style */}
          <div className="flex items-center justify-center gap-2 mb-12 bg-white border-2 border-black p-2 rounded-xl max-w-md mx-auto" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
            {filterOptions.map(opt => (
              <button
                key={opt.key}
                onClick={() => setFilter(opt.key)}
                className={`cursor-pointer px-5 py-2.5 rounded-lg text-xs font-black transition-all duration-200 flex items-center gap-2 ${filter === opt.key
                    ? 'bg-[#FF6B00] text-white border-2 border-black'
                    : 'text-black/50 hover:text-black hover:bg-[#FFF3E0]'
                  }`}
                style={filter === opt.key ? { boxShadow: '2px 2px 0px 0px #000' } : {}}
              >
                {lang === 'hi' ? opt.labelHi : opt.label}
                <span className={`text-[10px] px-2 py-0.5 rounded-lg font-black ${filter === opt.key ? 'bg-white/20 text-white' : 'bg-[#FFFDF5] border border-black/20 text-black/50'
                  }`}>
                  {opt.count}
                </span>
              </button>
            ))}
          </div>

          {/* Events Grid */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {filteredEvents.map((event, index) => {
                const dateInfo = formatDate(event.date, lang);
                const catConfig = categoryConfig[event.category];
                const statConfig = statusConfig[event.status];
                const dateRangeStr = formatDateRange(event.date, event.endDate, lang);

                return (
                  <div
                    key={event.id}
                    className={`bg-white border-2 border-black rounded-xl p-0 overflow-hidden hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 group flex flex-col sm:flex-row ${event.status === 'completed' ? 'opacity-80 hover:opacity-100' : ''
                      }`}
                    style={{ boxShadow: '4px 4px 0px 0px #000', animationDelay: `${index * 80}ms` }}
                  >
                    {/* Date Card */}
                    <div className={`shrink-0 w-full sm:w-[110px] md:w-[120px] flex sm:flex-col items-center justify-between sm:justify-center text-center p-6 ${event.status === 'completed'
                        ? 'bg-[#FFFDF5] border-b-2 sm:border-b-0 sm:border-r-2 border-black'
                        : 'bg-[#FF6B00] text-white border-b-2 sm:border-b-0 sm:border-r-2 border-black'
                      }`}>
                      <div className="flex sm:flex-col items-center sm:justify-center">
                        <span className="text-3xl md:text-4.5xl font-black leading-none tracking-tight">
                          {dateInfo.day}
                        </span>
                        <div className="flex flex-col items-start sm:items-center ml-3 sm:ml-0">
                          <span className={`text-[10px] font-black uppercase tracking-widest mt-1.5 ${event.status === 'completed' ? 'text-black/50' : 'text-white/80'
                            }`}>
                            {dateInfo.month}
                          </span>
                          <span className={`text-[9px] font-black mt-0.5 ${event.status === 'completed' ? 'text-black/30' : 'text-white/50'
                            }`}>
                            {dateInfo.year}
                          </span>
                        </div>
                      </div>
                      <span className="sm:mt-4 group-hover:scale-105 transition-all duration-200 flex justify-center">
                        {(() => {
                          const IconComp = eventIconMap[event.id] || GovtIcon;
                          return <IconComp size={24} className={event.status === 'completed' ? "text-black/40" : "text-white"} />;
                        })()}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-6 md:p-8 min-w-0 flex flex-col justify-between">
                      <div>
                        {/* Tags Row */}
                        <div className="flex flex-wrap items-center gap-2 mb-3.5">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-black uppercase ${catConfig.bg} ${catConfig.color}`}>
                            {lang === 'hi' ? catConfig.labelHi : catConfig.label}
                          </span>
                          <span className={`inline-flex items-center gap-1.5 text-[10px] font-black uppercase ${statConfig.text}`}>
                            <span className={`w-2 h-2 rounded-sm ${statConfig.dot}`} />
                            {lang === 'hi' ? statConfig.labelHi : statConfig.label}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-black text-black mb-2 leading-tight group-hover:text-[#FF6B00] transition-colors">
                          {lang === 'hi' ? event.titleHi : event.title}
                        </h3>

                        {/* Description */}
                        <p className="text-black/50 text-[13px] font-bold leading-relaxed mb-6 line-clamp-2">
                          {lang === 'hi' ? event.descriptionHi : event.description}
                        </p>
                      </div>

                      {/* Meta Info */}
                      <div className="flex flex-col gap-2.5 pt-4 border-t-2 border-black/10 text-[11px] text-black/50 font-black uppercase tracking-wide">
                        <span className="inline-flex items-center gap-2">
                          <CalendarIcon size={13} className="text-black/40 shrink-0" />
                          {dateRangeStr}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <ClockIcon size={13} className="text-black/40 shrink-0" />
                          {event.time}
                        </span>
                        <span className="inline-flex items-center gap-2">
                          <MapPinIcon size={13} className="text-black/40 shrink-0" />
                          {lang === 'hi' ? event.locationHi : event.location}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 max-w-sm mx-auto flex flex-col items-center justify-center">
              <GovtIcon size={36} className="text-black/30 mb-4" />
              <h3 className="text-base font-black text-black mb-2">
                {lang === 'hi' ? 'कोई कार्यक्रम नहीं मिला' : 'No events found'}
              </h3>
              <p className="text-black/50 text-xs font-bold">
                {lang === 'hi' ? 'इस श्रेणी में अभी कोई कार्यक्रम नहीं है।' : 'There are no events in this category yet.'}
              </p>
            </div>
          )}
        </section>

        {/* Event Gallery Section */}
        <section className="py-24 px-4 bg-white border-t-2 border-black mt-20" id="events-gallery">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className="brutal-badge mb-4">
                {lang === 'hi' ? 'गैलरी' : 'Gallery'}
              </span>
              <h2 className="section-heading mt-4">
                {lang === 'hi' ? 'कार्यक्रम गैलरी' : 'Event Gallery'}
              </h2>
              <p className="text-black/50 font-bold text-sm mt-3 max-w-md mx-auto leading-relaxed">
                {lang === 'hi'
                  ? 'हमारे पिछले कार्यक्रमों और शिविरों की झलकियाँ'
                  : 'Glimpses from our past events and camps'}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {galleryImages.map((img, index) => (
                <div
                  key={index}
                  onClick={() => openLightbox(index)}
                  className="relative rounded-xl overflow-hidden cursor-pointer group border-2 border-black bg-white hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200"
                  style={{ boxShadow: '4px 4px 0px 0px #000' }}
                >
                  <div className="overflow-hidden h-[240px] md:h-[260px] relative">
                    <img
                      src={img.src}
                      alt={lang === 'hi' ? img.captionHi : img.caption}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      draggable={false}
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <span className="text-[#FF6B00] text-[10px] font-black uppercase tracking-wider mb-1">
                        {lang === 'hi' ? img.eventHi : img.event}
                      </span>
                      <p className="text-white text-xs font-black leading-snug">
                        {lang === 'hi' ? img.captionHi : img.caption}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-xl bg-white border-2 border-black flex items-center justify-center text-black transition-all duration-200 cursor-pointer z-10"
              style={{ boxShadow: '2px 2px 0px 0px #000' }}
              aria-label="Close lightbox"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white border-2 border-black flex items-center justify-center text-black transition-all duration-200 cursor-pointer z-10"
              style={{ boxShadow: '3px 3px 0px 0px #000' }}
              aria-label="Previous image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-white border-2 border-black flex items-center justify-center text-black transition-all duration-200 cursor-pointer z-10"
              style={{ boxShadow: '3px 3px 0px 0px #000' }}
              aria-label="Next image"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
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
                className="w-full max-h-[70vh] object-contain rounded-xl border-2 border-white"
                style={{ boxShadow: '6px 6px 0px 0px rgba(255,107,0,0.5)' }}
                draggable={false}
              />
              <div className="text-center mt-6">
                <span className="text-[#FF6B00] text-xs font-black uppercase tracking-widest block mb-1">
                  {lang === 'hi' ? galleryImages[lightboxIndex].eventHi : galleryImages[lightboxIndex].event}
                </span>
                <p className="text-white/80 text-sm font-black">
                  {lang === 'hi' ? galleryImages[lightboxIndex].captionHi : galleryImages[lightboxIndex].caption}
                </p>
                <span className="text-white/30 text-xs font-black mt-2.5 block font-mono">
                  {lightboxIndex + 1} / {galleryImages.length}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Notification / Subscribe CTA */}
        <section className="py-24 px-4 bg-black text-white relative overflow-hidden border-t-2 border-black">
          
          <div className="bg-black border-2 border-white rounded-xl p-8 md:p-14 text-center max-w-4xl mx-auto relative z-10" style={{ boxShadow: '6px 6px 0px 0px rgba(255,107,0,0.5)' }}>

            <span className="inline-block px-4 py-1.5 rounded-lg bg-[#FF6B00] text-white text-[10px] font-black uppercase tracking-widest mb-6 border-2 border-white" style={{ boxShadow: '2px 2px 0px 0px #fff' }}>
              {lang === 'hi' ? 'सूचना' : 'Stay Updated'}
            </span>
            <h2 className="text-white text-3xl md:text-5xl font-black mb-5 leading-tight tracking-tight">
              {lang === 'hi' ? 'कार्यक्रमों की जानकारी पाएं' : 'Never Miss an Event'}
            </h2>
            <p className="text-white/50 text-base md:text-lg mb-10 max-w-xl mx-auto font-bold leading-relaxed">
              {lang === 'hi'
                ? 'हमारे सभी आगामी कैंप, कार्यशालाओं और योजनाओं की जानकारी के लिए हमसे संपर्क करें या WhatsApp पर जुड़ें।'
                : 'Contact us or connect on WhatsApp to stay informed about all upcoming camps, workshops, and government scheme drives.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="px-10 py-4 rounded-xl font-black text-xs uppercase tracking-wider bg-[#FF6B00] text-white border-2 border-white cursor-pointer inline-flex items-center justify-center gap-2 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{ boxShadow: '3px 3px 0px 0px #fff' }}
              >
                <ChevronRightIcon size={14} className="stroke-[2.5]" />
                {t('nav.contact')}
              </Link>
              <a
                href="https://wa.me/917233060698?text=Hello%20Jan%20Seva%20Kendra%20-%20Events%20Info"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 rounded-xl font-black text-xs uppercase tracking-wider bg-transparent text-white border-2 border-white cursor-pointer inline-flex items-center justify-center gap-2 transition-all duration-200 hover:bg-[#25D366] hover:text-white hover:-translate-x-0.5 hover:-translate-y-0.5"
                style={{ boxShadow: '3px 3px 0px 0px rgba(255,255,255,0.3)' }}
              >
                <WhatsAppIcon size={14} className="stroke-[2.5]" />
                WhatsApp
              </a>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
