import { createContext, useContext, useState, type ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  t: (key: string) => string;
}

const translations: Record<string, Record<Language, string>> = {
  // Navbar
  'nav.home': { en: 'Home', hi: 'होम' },
  'nav.services': { en: 'Services', hi: 'सेवाएं' },
  'nav.about': { en: 'About', hi: 'हमारे बारे में' },
  'nav.apply': { en: 'Apply Online', hi: 'ऑनलाइन आवेदन' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क' },

  // Hero
  'hero.badge': { en: '🏛️ Government Authorized Centre', hi: '🏛️ सरकारी अधिकृत केंद्र' },
  'hero.title': { en: 'Jan Seva Kendra', hi: 'जन सेवा केंद्र' },
  'hero.subtitle': { en: 'Common Service Centre (CSC)', hi: 'कॉमन सर्विस सेंटर (CSC)' },
  'hero.tagline': { en: 'Bringing Digital India to Your Doorstep', hi: 'डिजिटल इंडिया आपके दरवाज़े पर' },
  'hero.cta1': { en: 'Our Services', hi: 'हमारी सेवाएं' },
  'hero.cta2': { en: 'Apply Now', hi: 'अभी आवेदन करें' },

  // Stats
  'stats.citizens': { en: 'Citizens Served', hi: 'नागरिकों की सेवा' },
  'stats.services': { en: 'Services Offered', hi: 'उपलब्ध सेवाएं' },
  'stats.years': { en: 'Years Active', hi: 'वर्षों से सक्रिय' },
  'stats.satisfaction': { en: 'Satisfaction Rate', hi: 'संतुष्टि दर' },

  // Services page
  'services.title': { en: 'Our Services', hi: 'हमारी सेवाएं' },
  'services.subtitle': { en: 'Comprehensive digital services for every citizen', hi: 'हर नागरिक के लिए व्यापक डिजिटल सेवाएं' },
  'services.govt': { en: 'Government Services', hi: 'सरकारी सेवाएं' },
  'services.financial': { en: 'Financial Services', hi: 'वित्तीय सेवाएं' },
  'services.utility': { en: 'Utility Services', hi: 'यूटिलिटी सेवाएं' },
  'services.health': { en: 'Health Services', hi: 'स्वास्थ्य सेवाएं' },
  'services.contact': { en: 'Contact for this service', hi: 'इस सेवा के लिए संपर्क करें' },

  // Government Services
  'services.aadhaar': { en: 'Aadhaar Services', hi: 'आधार सेवाएं' },
  'services.aadhaar.desc': { en: 'New enrollment, update, correction & printing', hi: 'नया नामांकन, अपडेट, सुधार एवं प्रिंटिंग' },
  'services.pan': { en: 'PAN Card', hi: 'पैन कार्ड' },
  'services.pan.desc': { en: 'New PAN, correction, reprint & linking', hi: 'नया पैन, सुधार, रीप्रिंट एवं लिंकिंग' },
  'services.certificates': { en: 'Certificates', hi: 'प्रमाण पत्र' },
  'services.certificates.desc': { en: 'Birth, death, income, caste, domicile certificates', hi: 'जन्म, मृत्यु, आय, जाति, निवास प्रमाण पत्र' },
  'services.passport': { en: 'Passport Services', hi: 'पासपोर्ट सेवाएं' },
  'services.passport.desc': { en: 'New passport application & renewal assistance', hi: 'नया पासपोर्ट आवेदन एवं नवीनीकरण सहायता' },
  'services.voter': { en: 'Voter ID', hi: 'वोटर आईडी' },
  'services.voter.desc': { en: 'New voter ID registration & corrections', hi: 'नया वोटर आईडी पंजीकरण एवं सुधार' },
  'services.ration': { en: 'Ration Card', hi: 'राशन कार्ड' },
  'services.ration.desc': { en: 'New application, addition & deletion of members', hi: 'नया आवेदन, सदस्य जोड़ना एवं हटाना' },

  // Financial Services
  'services.banking': { en: 'Banking Services', hi: 'बैंकिंग सेवाएं' },
  'services.banking.desc': { en: 'Account opening, deposits, withdrawals & transfers', hi: 'खाता खोलना, जमा, निकासी एवं ट्रांसफर' },
  'services.insurance': { en: 'Insurance', hi: 'बीमा' },
  'services.insurance.desc': { en: 'PMJJBY, PMSBY, life & crop insurance', hi: 'PMJJBY, PMSBY, जीवन एवं फसल बीमा' },
  'services.pension': { en: 'Pension Schemes', hi: 'पेंशन योजनाएं' },
  'services.pension.desc': { en: 'Atal Pension Yojana, PM-SYM registration', hi: 'अटल पेंशन योजना, PM-SYM पंजीकरण' },
  'services.mudra': { en: 'MUDRA Loan', hi: 'मुद्रा लोन' },
  'services.mudra.desc': { en: 'Loan application assistance up to ₹10 lakh', hi: '₹10 लाख तक लोन आवेदन सहायता' },

  // Utility Services
  'services.billpay': { en: 'Bill Payment', hi: 'बिल भुगतान' },
  'services.billpay.desc': { en: 'Electricity, water, gas & telephone bills', hi: 'बिजली, पानी, गैस एवं टेलीफोन बिल' },
  'services.recharge': { en: 'Mobile Recharge', hi: 'मोबाइल रिचार्ज' },
  'services.recharge.desc': { en: 'Prepaid, postpaid & DTH recharge', hi: 'प्रीपेड, पोस्टपेड एवं DTH रिचार्ज' },
  'services.ticket': { en: 'Ticket Booking', hi: 'टिकट बुकिंग' },
  'services.ticket.desc': { en: 'Train, bus & flight ticket booking', hi: 'ट्रेन, बस एवं फ्लाइट टिकट बुकिंग' },
  'services.printScan': { en: 'Print & Scan', hi: 'प्रिंट और स्कैन' },
  'services.printScan.desc': { en: 'Document printing, scanning & photocopying', hi: 'दस्तावेज़ प्रिंटिंग, स्कैनिंग एवं फोटोकॉपी' },

  // Health Services
  'services.ayushman': { en: 'Ayushman Bharat', hi: 'आयुष्मान भारत' },
  'services.ayushman.desc': { en: 'PM-JAY card registration & hospital details', hi: 'PM-JAY कार्ड पंजीकरण एवं अस्पताल विवरण' },
  'services.telemedicine': { en: 'Telemedicine', hi: 'टेलीमेडिसिन' },
  'services.telemedicine.desc': { en: 'Online doctor consultation & health check', hi: 'ऑनलाइन डॉक्टर परामर्श एवं स्वास्थ्य जांच' },
  'services.digiHealth': { en: 'Digital Health ID', hi: 'डिजिटल हेल्थ आईडी' },
  'services.digiHealth.desc': { en: 'ABHA card creation & health records', hi: 'ABHA कार्ड निर्माण एवं स्वास्थ्य रिकॉर्ड' },

  // About page
  'about.title': { en: 'About Us', hi: 'हमारे बारे में' },
  'about.subtitle': { en: 'Serving our community with dedication', hi: 'समर्पण के साथ अपने समुदाय की सेवा' },
  'about.vle.title': { en: 'Village Level Entrepreneur (VLE)', hi: 'ग्राम स्तरीय उद्यमी (VLE)' },
  'about.vle.name': { en: 'Ramesh Kumar Verma', hi: 'रमेश कुमार वर्मा' },
  'about.vle.desc': { en: 'Dedicated VLE serving the community of Chandpur and nearby villages since 2017. Committed to bridging the digital divide and ensuring every citizen has access to government services.', hi: '2017 से चांदपुर और आस-पास के गांवों के समुदाय की सेवा करने वाले समर्पित VLE। डिजिटल विभाजन को पाटने और हर नागरिक को सरकारी सेवाओं तक पहुंच सुनिश्चित करने के लिए प्रतिबद्ध।' },
  'about.mission.title': { en: 'Our Mission', hi: 'हमारा उद्देश्य' },
  'about.mission.desc': { en: 'CSC (Common Service Centre) is an initiative under the Digital India programme. It provides a single-window platform for delivering government, financial, and social sector services to citizens in rural and semi-urban areas.', hi: 'CSC (कॉमन सर्विस सेंटर) डिजिटल इंडिया कार्यक्रम के तहत एक पहल है। यह ग्रामीण और अर्ध-शहरी क्षेत्रों में नागरिकों को सरकारी, वित्तीय और सामाजिक क्षेत्र की सेवाएं प्रदान करने का एकल-खिड़की मंच है।' },
  'about.mission.point1': { en: 'Provide accessible digital services to rural citizens', hi: 'ग्रामीण नागरिकों को सुलभ डिजिटल सेवाएं प्रदान करना' },
  'about.mission.point2': { en: 'Bridge the digital divide in underserved areas', hi: 'वंचित क्षेत्रों में डिजिटल विभाजन को पाटना' },
  'about.mission.point3': { en: 'Empower communities through technology & skill development', hi: 'प्रौद्योगिकी और कौशल विकास के माध्यम से समुदायों को सशक्त बनाना' },
  'about.mission.point4': { en: 'Ensure last-mile delivery of government schemes', hi: 'सरकारी योजनाओं की अंतिम-मील डिलीवरी सुनिश्चित करना' },

  // Apply page
  'apply.title': { en: 'Apply Online', hi: 'ऑनलाइन आवेदन' },
  'apply.subtitle': { en: 'Submit your service request from the comfort of your home', hi: 'अपने घर बैठे अपना सेवा अनुरोध जमा करें' },
  'apply.name': { en: 'Full Name', hi: 'पूरा नाम' },
  'apply.name.placeholder': { en: 'Enter your full name', hi: 'अपना पूरा नाम दर्ज करें' },
  'apply.mobile': { en: 'Mobile Number', hi: 'मोबाइल नंबर' },
  'apply.mobile.placeholder': { en: 'Enter 10-digit mobile number', hi: '10 अंकों का मोबाइल नंबर दर्ज करें' },
  'apply.service': { en: 'Select Service', hi: 'सेवा चुनें' },
  'apply.service.placeholder': { en: '-- Select a service --', hi: '-- सेवा चुनें --' },
  'apply.message': { en: 'Additional Details', hi: 'अतिरिक्त विवरण' },
  'apply.message.placeholder': { en: 'Any additional information about your request...', hi: 'आपके अनुरोध के बारे में कोई अतिरिक्त जानकारी...' },
  'apply.document': { en: 'Upload Document (Optional)', hi: 'दस्तावेज़ अपलोड करें (वैकल्पिक)' },
  'apply.document.hint': { en: 'Upload ID proof or relevant documents (PDF, JPG, PNG — Max 5MB)', hi: 'पहचान पत्र या संबंधित दस्तावेज़ अपलोड करें (PDF, JPG, PNG — अधिकतम 5MB)' },
  'apply.submit': { en: 'Submit Application', hi: 'आवेदन जमा करें' },
  'apply.success': { en: '✅ Your application has been submitted successfully! We will contact you shortly.', hi: '✅ आपका आवेदन सफलतापूर्वक जमा हो गया है! हम जल्द ही आपसे संपर्क करेंगे।' },

  // Contact page
  'contact.title': { en: 'Contact Us', hi: 'संपर्क करें' },
  'contact.subtitle': { en: 'We are here to help you', hi: 'हम आपकी मदद के लिए यहाँ हैं' },
  'contact.address.title': { en: 'Address', hi: 'पता' },
  'contact.address': { en: 'Digital Gramin Service Centre\nNauwa Gaon, Uttar Pradesh\nIndia', hi: 'डिजिटल ग्रामीण सेवा केंद्र\nनौवा गांव, उत्तर प्रदेश\nभारत' },
  'contact.phone.title': { en: 'Phone', hi: 'फ़ोन' },
  'contact.phone': { en: '+91 98765 43210', hi: '+91 98765 43210' },
  'contact.whatsapp.title': { en: 'WhatsApp', hi: 'व्हाट्सएप' },
  'contact.hours.title': { en: 'Working Hours', hi: 'कार्य समय' },
  'contact.hours': { en: 'Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed', hi: 'सोम - शनि: सुबह 9:00 - शाम 6:00\nरविवार: बंद' },
  'contact.whatsapp.btn': { en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर चैट करें' },
  'contact.map.title': { en: 'Find Us', hi: 'हमें ढूंढें' },

  // Footer
  'footer.desc': { en: 'Your trusted partner for all government and digital services in the local community. Bridging the digital divide one citizen at a time.', hi: 'स्थानीय समुदाय में सभी सरकारी और डिजिटल सेवाओं के लिए आपका विश्वसनीय साथी। एक समय में एक नागरिक के डिजिटल विभाजन को पाटना।' },
  'footer.links': { en: 'Quick Links', hi: 'त्वरित लिंक' },
  'footer.services': { en: 'Top Services', hi: 'शीर्ष सेवाएं' },
  'footer.quicklinks': { en: 'Quick Links', hi: 'त्वरित लिंक' },
  'footer.contactInfo': { en: 'Contact Info', hi: 'संपर्क जानकारी' },
  'footer.important': { en: 'Important Links', hi: 'महत्वपूर्ण लिंक' },
  'footer.digitalIndia': { en: 'Digital India', hi: 'डिजिटल इंडिया' },
  'footer.cscPortal': { en: 'CSC Official Portal', hi: 'CSC आधिकारिक पोर्टल' },
  'footer.govtUP': { en: 'UP Government', hi: 'उत्तर प्रदेश सरकार' },
  'footer.pmSchemes': { en: 'PM Schemes', hi: 'प्रधानमंत्री योजनाएं' },
  'footer.copyright': { en: '© 2026 Jan Seva Kendra (CSC). All rights reserved.', hi: '© 2026 जन सेवा केंद्र (CSC)। सर्वाधिकार सुरक्षित।' },
  'footer.cscId': { en: 'CSC ID', hi: 'CSC आईडी' },
  'footer.disclaimer': { en: 'This is an authorized Common Service Centre under the Digital India initiative by MeitY, Government of India.', hi: 'यह भारत सरकार के MeitY द्वारा डिजिटल इंडिया पहल के तहत एक अधिकृत कॉमन सर्विस सेंटर है।' },

  // Announcements
  'announce.1': { en: '📢 Aadhaar Update Camp — May 10-15, 2026 at CSC Center', hi: '📢 आधार अपडेट कैंप — 10-15 मई, 2026 CSC केंद्र पर' },
  'announce.2': { en: '🔔 PM Kisan Samman Nidhi 20th installment now available — Apply today!', hi: '🔔 PM किसान सम्मान निधि 20वीं किस्त अब उपलब्ध — आज ही आवेदन करें!' },
  'announce.3': { en: '📋 Ayushman Bharat card registration open — Free health coverage up to ₹5 lakh', hi: '📋 आयुष्मान भारत कार्ड पंजीकरण खुला — ₹5 लाख तक मुफ्त स्वास्थ्य कवरेज' },
  'announce.4': { en: '🎓 Free Digital Literacy Programme enrollment started', hi: '🎓 मुफ्त डिजिटल साक्षरता कार्यक्रम नामांकन शुरू' },

  // Scheme badges
  'schemes.title': { en: 'Government Schemes We Support', hi: 'हम जिन सरकारी योजनाओं का समर्थन करते हैं' },

  // Quick services
  'quick.title': { en: 'Popular Services', hi: 'लोकप्रिय सेवाएं' },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const toggleLang = () => {
    setLang(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key: string): string => {
    return translations[key]?.[lang] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLang must be used within LanguageProvider');
  return context;
}
