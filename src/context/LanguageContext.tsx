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
  'nav.events': { en: 'Events', hi: 'कार्यक्रम' },
  'nav.about': { en: 'About', hi: 'हमारे बारे में' },
  'nav.contact': { en: 'Contact', hi: 'संपर्क' },

  // Hero
  'hero.badge': { en: '🏛️ Government Authorized Centre', hi: '🏛️ सरकारी अधिकृत केंद्र' },
  'hero.title': { en: 'KIOSK- Digital Gramin Service Center', hi: 'कियोस्क- डिजिटल ग्रामीण सेवा केंद्र' },
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
  'services.subtitle': { en: 'Comprehensive digital services for all your needs', hi: 'आपकी सभी जरूरतों के लिए व्यापक डिजिटल सेवाएं' },
  'services.govt': { en: 'Government Services', hi: 'सरकारी सेवाएं' },
  'services.financial': { en: 'Financial Services', hi: 'वित्तीय सेवाएं' },
  'services.utility': { en: 'Utility Services', hi: 'यूटिलिटी सेवाएं' },
  'services.health': { en: 'Health Services', hi: 'स्वास्थ्य सेवाएं' },
  'services.central': { en: 'Central Schemes', hi: 'केंद्रीय योजनाएं' },
  'services.state': { en: 'State Schemes', hi: 'राज्य योजनाएं' },
  'services.private': { en: 'Private Schemes', hi: 'निजी योजनाएं' },
  'services.other': { en: 'Other', hi: 'अन्य' },
  'services.contact': { en: 'Contact for this Service', hi: 'इस सेवा के लिए संपर्क करें' },
  'services.search.placeholder': { en: 'Search for a service...', hi: 'कोई सेवा खोजें...' },
  'services.viewDetail': { en: 'View Details', hi: 'विवरण देखें' },
  'services.docsRequired': { en: 'Documents Required', hi: 'आवश्यक दस्तावेज' },
  'services.quickShare': { en: 'Share Service', hi: 'सेवा साझा करें' },
  'services.notFound': { en: 'Service Not Found', hi: 'सेवा नहीं मिली' },
  'services.all': { en: 'All Services', hi: 'सभी सेवाएं' },
  
  // Quick Services missing keys
  'services.certificates': { en: 'Certificates', hi: 'प्रमाण पत्र' },

  // Government Services
  'services.aadhaar': { en: 'Aadhaar Services', hi: 'आधार सेवाएं' },
  'services.aadhaar.desc': { en: 'New enrollment, update, correction & printing', hi: 'नया नामांकन, अपडेट, सुधार एवं प्रिंटिंग' },
  'services.pan': { en: 'PAN Card', hi: 'पैन कार्ड' },
  'services.pan.desc': { en: 'New PAN, correction, reprint & linking', hi: 'नया पैन, सुधार, रीप्रिंट एवं लिंकिंग' },
  'services.passport': { en: 'Passport Services', hi: 'पासपोर्ट सेवाएं' },
  'services.passport.desc': { en: 'New passport application & renewal assistance', hi: 'नया पासपोर्ट आवेदन एवं नवीनीकरण सहायता' },
  'services.voter': { en: 'Voter ID', hi: 'वोटर आईडी' },
  'services.voter.desc': { en: 'New voter ID registration & corrections', hi: 'नया वोटर आईडी पंजीकरण एवं सुधार' },
  'services.ration': { en: 'Ration Card', hi: 'राशन कार्ड' },
  'services.ration.desc': { en: 'New application, addition & deletion of members', hi: 'नया आवेदन, सदस्य जोड़ना एवं हटाना' },
  'services.cmyuva': { en: 'CMYUVA Online', hi: 'मुख्यमंत्री युवा उद्यमी अभियान' },
  'services.cmyuva.desc': { en: 'Mukhyamantri Yuva Udyami Abhiyan application', hi: 'मुख्यमंत्री युवा उद्यमी अभियान आवेदन' },
  'services.udyam': { en: 'Udyam Registration', hi: 'उद्यम रजिस्ट्रेशन' },
  'services.udyam.desc': { en: 'MSME Udyam registration for businesses', hi: 'व्यवसायों के लिए MSME उद्यम रजिस्ट्रेशन' },
  'services.driving': { en: 'Driving License', hi: 'ड्राइविंग लाइसेंस' },
  'services.driving.desc': { en: 'New DL, learning license, and renewal', hi: 'नया डीएल, लर्निंग लाइसेंस और नवीनीकरण' },
  'services.labour': { en: 'Labour Registration', hi: 'श्रमिक पंजीयन' },
  'services.labour.desc': { en: 'Labour card application and renewal', hi: 'श्रमिक कार्ड आवेदन और नवीनीकरण' },
  'services.marriage': { en: 'Marriage Certificate', hi: 'शादी प्रमाण पत्र' },
  'services.marriage.desc': { en: 'Online marriage certificate application', hi: 'ऑनलाइन शादी प्रमाण पत्र आवेदन' },
  'services.virasat': { en: 'Virasat Online', hi: 'वरासत ऑनलाइन' },
  'services.virasat.desc': { en: 'Property mutation and Virasat application', hi: 'संपत्ति नामांतरण और वरासत आवेदन' },
  'services.scholarship': { en: 'Scholarship Application', hi: 'छात्रवृत्ति आवेदन' },
  'services.scholarship.desc': { en: 'Online scholarship form filling', hi: 'ऑनलाइन छात्रवृत्ति फॉर्म भरना' },
  'services.pmkisan': { en: 'PM Kisan Services', hi: 'पीएम किसान सेवाएं' },
  'services.pmkisan.desc': { en: 'PM Kisan Samman Nidhi registration, status & eKYC', hi: 'पीएम किसान सम्मान निधि पंजीकरण, स्थिति और ई-केवाईसी' },
  'services.pcc': { en: 'Police Clearance Certificate (PCC)', hi: 'पुलिस क्लीयरेंस सर्टिफिकेट (PCC)' },
  'services.pcc.desc': { en: 'Application for Police Clearance Certificate', hi: 'पुलिस क्लीयरेंस सर्टिफिकेट का आवेदन' },
  'services.passportImmigration': { en: 'Passport Emigration / Immigration', hi: 'पासपोर्ट इमिग्रेशन' },
  'services.passportImmigration.desc': { en: 'Emigration clearance and registration', hi: 'उत्प्रवास मंजूरी और पंजीकरण' },
  'services.farmerSubsidy': { en: 'Farmer Subsidy Registration', hi: 'किसान अनुदान पंजीकरण' },
  'services.farmerSubsidy.desc': { en: 'Subsidies on seeds, pesticides & implements', hi: 'बीज, कीटनाशकों और उपकरणों पर सरकारी अनुदान' },
  'services.farmerRegistry': { en: 'Farmer Registry (Digital Farmer ID)', hi: 'फार्मर रजिस्ट्री (किसान आईडी)' },
  'services.farmerRegistry.desc': { en: 'Farmer ID creation & missing accounts linking', hi: 'किसान आईडी निर्माण और छूटे हुए खातों को जोड़ना' },

  // --- New State Schemes ---
  'services.incomeCertificate': { en: 'Income Certificate', hi: 'आय प्रमाण पत्र' },
  'services.incomeCertificate.desc': { en: 'Apply for new income certificate online', hi: 'नए आय प्रमाण पत्र के लिए ऑनलाइन आवेदन करें' },
  'services.casteCertificate': { en: 'Caste Certificate', hi: 'जाति प्रमाण पत्र' },
  'services.casteCertificate.desc': { en: 'Apply for SC/ST/OBC caste certificate', hi: 'SC/ST/OBC जाति प्रमाण पत्र के लिए आवेदन करें' },
  'services.domicileCertificate': { en: 'Domicile Certificate', hi: 'निवास प्रमाण पत्र' },
  'services.domicileCertificate.desc': { en: 'Apply for domicile/residence certificate', hi: 'निवास प्रमाण पत्र के लिए आवेदन करें' },
  'services.netWorthCertificate': { en: 'Status/Net Worth Certificate', hi: 'हैसियत प्रमाण पत्र' },
  'services.netWorthCertificate.desc': { en: 'Apply for net worth/status certificate', hi: 'हैसियत प्रमाण पत्र के लिए आवेदन करें' },
  'services.characterCertificate': { en: 'Character Certificate', hi: 'चरित्र प्रमाण पत्र' },
  'services.characterCertificate.desc': { en: 'Apply for police character certificate', hi: 'पुलिस चरित्र प्रमाण पत्र के लिए आवेदन करें' },
  'services.daughterMarriageGrant': { en: 'Daughter Marriage Grant', hi: 'पुत्री विवाह हेतु अनुदान' },
  'services.daughterMarriageGrant.desc': { en: 'Financial assistance for daughter\'s marriage', hi: 'पुत्री के विवाह के लिए वित्तीय सहायता' },
  'services.cmCollectiveMarriage': { en: 'CM Collective Marriage', hi: 'मुख्यमंत्री सामूहिक विवाह' },
  'services.cmCollectiveMarriage.desc': { en: 'Chief Minister Collective Marriage Scheme', hi: 'मुख्यमंत्री सामूहिक विवाह योजना' },
  'services.oldAgePension': { en: 'Old Age Pension', hi: 'वृद्धा पेंशन योजना' },
  'services.oldAgePension.desc': { en: 'Old age pension application and status', hi: 'वृद्धावस्था पेंशन आवेदन और स्थिति' },
  'services.widowPension': { en: 'Widow Pension', hi: 'विधवा पेंशन योजना' },
  'services.widowPension.desc': { en: 'Widow pension scheme application', hi: 'विधवा पेंशन योजना आवेदन' },
  'services.disabilityPension': { en: 'Disability Pension', hi: 'विकलांग पेंशन योजना' },
  'services.disabilityPension.desc': { en: 'Disability/Leprosy pension scheme application', hi: 'विकलांग/कुष्ठावस्था पेंशन योजना आवेदन' },
  'services.familyBenefit': { en: 'Family Benefit Scheme', hi: 'पारिवारिक लाभ योजना' },
  'services.familyBenefit.desc': { en: 'National Family Benefit Scheme application', hi: 'राष्ट्रीय पारिवारिक लाभ योजना आवेदन' },
  'services.cmChildService': { en: 'CM Child Service', hi: 'मुख्यमंत्री बाल सेवा' },
  'services.cmChildService.desc': { en: 'Chief Minister Child Service Scheme', hi: 'मुख्यमंत्री बाल सेवा योजना' },
  'services.artificialLimbs': { en: 'Artificial Limbs Scheme', hi: 'कृत्रिम उपकरण सहायता' },
  'services.artificialLimbs.desc': { en: 'Assistive devices for persons with disabilities', hi: 'विकलांग व्यक्तियों के लिये कृत्रिम उपकरण सहायता योजना' },
  'services.borewell': { en: 'Borewell Application', hi: 'सिंचाई हेतु बोरिंग' },
  'services.borewell.desc': { en: 'Application for borewell for irrigation', hi: 'सिंचाई हेतु बोरिंग आवेदन' },
  'services.newElectricityConnection': { en: 'New Electricity Connection', hi: 'नया बिजली कनेक्शन' },
  'services.newElectricityConnection.desc': { en: 'Apply for new UPPCL electricity connection', hi: 'नए बिजली कनेक्शन के लिए आवेदन करें' },
  'services.cmJanArogya': { en: 'CM Jan Arogya Yojana', hi: 'मुख्यमंत्री जन आरोग्य' },
  'services.cmJanArogya.desc': { en: 'Chief Minister Public Health Scheme', hi: 'मुख्यमंत्री जन आरोग्य योजना आवेदन' },
  'services.labourSchemes': { en: 'Labourer Schemes', hi: 'श्रमिकों के लिए सभी योजनाएं' },
  'services.labourSchemes.desc': { en: 'All schemes for registered workers/labourers', hi: 'पंजीकृत श्रमिकों के लिए सभी सहायता योजनाएं' },
  'services.loanRepayment': { en: 'Loan Repayment', hi: 'लोन जमा' },
  'services.loanRepayment.desc': { en: 'Loan EMI repayment and deposit facility', hi: 'लोन EMI पुनर्भुगतान और जमा सुविधा' },
  'services.pvcPrint': { en: 'PVC Card Printing', hi: 'PVC Card Printing' },
  'services.pvcPrint.desc': { en: 'High-quality PVC card printing services', hi: 'उच्च गुणवत्ता वाली पीवीसी कार्ड प्रिंटिंग सेवाएं' },
  'services.lamination': { en: 'Lamination Services', hi: 'Lamination Services' },
  'services.lamination.desc': { en: 'Document lamination and protection services', hi: 'दस्तावेज़ लेमिनेशन और सुरक्षा सेवाएं' },
  'services.stateRecruitment': { en: 'State Recruitment Exams', hi: 'भर्ती परीक्षाओं का आवेदन' },
  'services.stateRecruitment.desc': { en: 'UPSSSC, UPPSC and other state exams application', hi: 'UPSSSC, UPPSC और अन्य राज्य परीक्षा आवेदन' },
  'services.oldAgeShelter': { en: 'Old Age Shelter Home', hi: 'वृद्धावस्था आश्रय गृह' },
  'services.oldAgeShelter.desc': { en: 'Old Age Shelter Home Scheme application', hi: 'वृद्धावस्था आश्रय गृह योजना आवेदन' },
  'services.abhyuday': { en: 'CM Abhyuday Yojana', hi: 'मुख्यमंत्री अभ्युदय योजना' },
  'services.abhyuday.desc': { en: 'Free coaching scheme for competitive exams', hi: 'प्रतियोगी परीक्षाओं के लिए मुफ्त कोचिंग योजना' },
  'services.preExamCoaching': { en: 'Pre-Exam Coaching', hi: 'परीक्षा पूर्व कोचिंग' },
  'services.preExamCoaching.desc': { en: 'Pre-Exam Coaching Center Scheme', hi: 'परीक्षा पूर्व कोचिंग सेंटर योजना' },
  'services.scHostel': { en: 'SC Hostel Scheme', hi: 'अनुसूचित जाति छात्रावास' },
  'services.scHostel.desc': { en: 'Scheduled Caste (SC) Hostel Scheme', hi: 'अनुसूचित जाति छात्रावास योजना' },
  'services.atrocityAssistance': { en: 'Atrocity Assistance', hi: 'अत्याचार वित्तीय सहायता' },
  'services.atrocityAssistance.desc': { en: 'Assistance for SC/ST affected by atrocities', hi: 'अत्याचार से प्रभावित अनुसूचित जाति/जनजाति के लिए वित्तीय सहायता' },
  'services.scScholarship': { en: 'SC National/Foreign Scholarship', hi: 'राष्ट्रीय/विदेशी छात्रवृत्ति' },
  'services.scScholarship.desc': { en: 'National and Foreign Scholarships for SC candidates', hi: 'अनुसूचित जाति के उम्मीदवारों के लिए राष्ट्रीय और विदेशी छात्रवृत्ति' },

  // --- New Central Schemes ---
  'services.eshram': { en: 'e-Shram Card', hi: 'ई-श्रम कार्ड' },
  'services.eshram.desc': { en: 'e-Shram card registration and correction', hi: 'ई-श्रम कार्ड पंजीकरण और सुधार' },
  'services.telelaw': { en: 'Tele-Law Service', hi: 'टेली लॉ' },
  'services.telelaw.desc': { en: 'Legal advice and consultation via Tele-Law', hi: 'टेली-लॉ के माध्यम से कानूनी सलाह और परामर्श' },
  'services.disability': { en: 'Disability Certificate', hi: 'विकलांग प्रमाण पत्र' },
  'services.disability.desc': { en: 'UDID card and disability certificate registration', hi: 'UDID कार्ड और विकलांग प्रमाण पत्र पंजीकरण' },
  'services.railwayConcession': { en: 'Railway Concession Certificate', hi: 'रेलवे रियायती प्रमाण पत्र' },
  'services.railwayConcession.desc': { en: 'Railway concession for physically challenged', hi: 'शारीरिक रूप से विकलांगों के लिए रेलवे रियायत' },
  'services.ecourt': { en: 'e-Court Services', hi: 'e-Court सेवाएँ' },
  'services.ecourt.desc': { en: 'Check case status and e-Court services', hi: 'केस की स्थिति और ई-कोर्ट सेवाएँ जांचें' },
  'services.csp': { en: 'CSP Registration', hi: 'CSP पंजीकरण' },
  'services.csp.desc': { en: 'Customer Service Point (Bank Mitra) registration', hi: 'ग्राहक सेवा केंद्र (बैंक मित्र) पंजीकरण' },
  'services.fssai': { en: 'Food License (FSSAI)', hi: 'खाद्य लाइसेंस (FSSAI)' },
  'services.fssai.desc': { en: 'FSSAI food business registration and license', hi: 'FSSAI खाद्य व्यवसाय पंजीकरण और लाइसेंस' },
  'services.echallan': { en: 'e-Challan Pay', hi: 'e-Challan Pay सुविधा' },
  'services.echallan.desc': { en: 'Online traffic e-Challan payment facility', hi: 'ऑनलाइन ट्रैफिक ई-चालान भुगतान सुविधा' },
  'services.roadtax': { en: 'Road Tax Deposit', hi: 'रोड टैक्स जमा सुविधा' },
  'services.roadtax.desc': { en: 'Online vehicle road tax payment', hi: 'ऑनलाइन वाहन रोड टैक्स भुगतान' },
  'services.vehiclePermit': { en: 'Vehicle Permit', hi: 'वाहन Permit सुविधा' },
  'services.vehiclePermit.desc': { en: 'Commercial vehicle permit application and renewal', hi: 'वाणिज्यिक वाहन परमिट आवेदन और नवीनीकरण' },
  'services.recruitmentExams': { en: 'Recruitment Exams', hi: 'भर्ती परीक्षाओं का आवेदन' },
  'services.recruitmentExams.desc': { en: 'Online application for SSC, UPSC, and other exams', hi: 'SSC, UPSC और अन्य परीक्षाओं के लिए ऑनलाइन आवेदन' },
  'services.vehicleTransfer': { en: 'Vehicle Transfer', hi: 'गाड़ी ट्रांसफर' },
  'services.vehicleTransfer.desc': { en: 'Vehicle ownership transfer (RC transfer) facility', hi: 'वाहन स्वामित्व हस्तांतरण (RC ट्रांसफर) सुविधा' },
  'services.swachhBharat': { en: 'Swachh Bharat Scheme', hi: 'शौचालय योजना' },
  'services.swachhBharat.desc': { en: 'Toilet construction scheme under Swachh Bharat Mission', hi: 'स्वच्छ भारत मिशन के तहत शौचालय निर्माण योजना' },
  'services.pmay': { en: 'PM Awas Yojana', hi: 'आवास योजना (PMAY)' },
  'services.pmay.desc': { en: 'Pradhan Mantri Awas Yojana housing scheme application', hi: 'प्रधानमंत्री आवास योजना आवास योजना आवेदन' },
  'services.jeevanPramaan': { en: 'Jeevan Pramaan Patra', hi: 'जीवन प्रमाण पत्र' },
  'services.jeevanPramaan.desc': { en: 'Digital life certificate for pensioners', hi: 'पेंशनभोगियों के लिए डिजिटल जीवन प्रमाण पत्र' },
  'services.gasEkyc': { en: 'Gas eKYC & Booking', hi: 'गैस eKYC और बुकिंग' },
  'services.gasEkyc.desc': { en: 'LPG gas cylinder eKYC and booking facility', hi: 'LPG गैस सिलेंडर eKYC और बुकिंग सुविधा' },
  'services.pmsym': { en: 'PM-SYM Yojana', hi: 'पीएम श्रम योगी मान-धन' },
  'services.pmsym.desc': { en: 'Pradhan Mantri Shram Yogi Maan-dhan Yojana registration', hi: 'प्रधानमंत्री श्रम योगी मान-धन योजना पंजीकरण' },
  'services.pmkmy': { en: 'PM-KMY Yojana', hi: 'पीएम किसान मान-धन' },
  'services.pmkmy.desc': { en: 'Pradhan Mantri Kisan Maan-dhan Yojana registration', hi: 'प्रधानमंत्री किसान मान-धन योजना पंजीकरण' },
  'services.pmlvmy': { en: 'PM Laghu Vyapari', hi: 'पीएम लघु व्यापारी मान-धन' },
  'services.pmlvmy.desc': { en: 'PM Laghu Vyapari Maan-dhan Yojana for small traders', hi: 'छोटे व्यापारियों के लिए पीएम लघु व्यापारी मान-धन योजना' },
  'services.pmsvanidhi': { en: 'PM SVANidhi Scheme', hi: 'पीएम स्वनिधि योजना' },
  'services.pmsvanidhi.desc': { en: 'Micro-credit scheme for street vendors', hi: 'स्ट्रीट वेंडरों के लिए सूक्ष्म ऋण योजना' },
  'services.pmvishwakarma': { en: 'PM Vishwakarma Yojana', hi: 'पीएम विश्वकर्मा योजना' },
  'services.pmvishwakarma.desc': { en: 'Scheme for traditional artisans and craftspeople', hi: 'पारंपरिक कारीगरों और शिल्पकारों के लिए योजना' },
  'services.pmfby': { en: 'PM Fasal Bima Yojana', hi: 'पीएम फसल बीमा योजना' },
  'services.pmfby.desc': { en: 'Pradhan Mantri Fasal Bima Yojana (Crop Insurance)', hi: 'प्रधानमंत्री फसल बीमा योजना (फसल बीमा)' },

  // Financial Services
  'services.banking': { en: 'Banking Services', hi: 'बैंकिंग सेवाएं' },
  'services.banking.desc': { en: 'Account opening, deposits, withdrawals & transfers', hi: 'खाता खोलना, जमा, निकासी एवं ट्रांसफर' },
  'services.insurance': { en: 'Insurance', hi: 'बीमा' },
  'services.insurance.desc': { en: 'PMJJBY, PMSBY, life & crop insurance', hi: 'PMJJBY, PMSBY, जीवन एवं फसल बीमा' },
  'services.pension': { en: 'Pension Schemes', hi: 'पेंशन योजनाएं' },
  'services.pension.desc': { en: 'Atal Pension Yojana, PM-SYM registration', hi: 'अटल पेंशन योजना, PM-SYM पंजीकरण' },
  'services.mudra': { en: 'MUDRA Loan', hi: 'मुद्रा लोन' },
  'services.mudra.desc': { en: 'Loan application assistance up to ₹10 lakh', hi: '₹10 लाख तक लोन आवेदन सहायता' },
  'services.itr': { en: 'Income Tax Return (ITR)', hi: 'इनकम टैक्स रिटर्न (ITR)' },
  'services.itr.desc': { en: 'ITR filing for individuals and businesses', hi: 'व्यक्तियों और व्यवसायों के लिए ITR फाइलिंग' },
  'services.gst': { en: 'GST Services', hi: 'जी एस टी सेवाएं' },
  'services.gst.desc': { en: 'GST registration and return filing', hi: 'जी एस टी रजिस्ट्रेशन और रिटर्न फाइलिंग' },
  'services.ekcc': { en: 'E-KCC Online', hi: 'ई-केसीसी ऑनलाइन' },
  'services.ekcc.desc': { en: 'Kisan Credit Card registration', hi: 'किसान क्रेडिट कार्ड रजिस्ट्रेशन' },
  'services.epf': { en: 'EPF Services', hi: 'पी एफ सेवाएं' },
  'services.epf.desc': { en: 'PF EKYC and PF Claim processing', hi: 'पी एफ ई-केवाईसी और पी एफ दावा' },

  // Utility Services
  'services.billpay': { en: 'Bill Payment', hi: 'बिल भुगतान' },
  'services.billpay.desc': { en: 'Electricity, water, gas & telephone bills', hi: 'बिजली, पानी, गैस एवं टेलीफोन बिल' },
  'services.recharge': { en: 'Mobile Recharge', hi: 'मोबाइल रिचार्ज' },
  'services.recharge.desc': { en: 'Prepaid, postpaid & DTH recharge', hi: 'प्रीपेड, पोस्टपेड एवं DTH रिचार्ज' },
  'services.ticket': { en: 'Ticket Booking', hi: 'टिकट बुकिंग' },
  'services.ticket.desc': { en: 'Train, bus & flight ticket booking', hi: 'ट्रेन, बस एवं फ्लाइट टिकट बुकिंग' },
  'services.airTicket': { en: 'Air Ticket Booking', hi: 'हवाई टिकट बुकिंग' },
  'services.airTicket.desc': { en: 'Domestic & international flight ticket booking', hi: 'घरेलू और अंतर्राष्ट्रीय उड़ान टिकट बुकिंग' },
  'services.tourPackage': { en: 'Tour Packages', hi: 'टूर पैकेज' },
  'services.tourPackage.desc': { en: 'Sacred pilgrimages & holiday tour packages', hi: 'तीर्थयात्रा और छुट्टी यात्रा पैकेज' },
  'services.visaAssistance': { en: 'Visa Assistance', hi: 'वीजा सहायता' },
  'services.visaAssistance.desc': { en: 'Tourist, business & study visa documentation', hi: 'पर्यटक, व्यवसाय और छात्र वीजा दस्तावेज' },
  'services.printScan': { en: 'Print & Scan', hi: 'प्रिंट और स्कैन' },
  'services.printScan.desc': { en: 'Document printing, scanning & photocopying', hi: 'दस्तावेज़ प्रिंटिंग, स्कैनिंग एवं फोटोकॉपी' },

  // Health Services
  'services.ayushman': { en: 'Ayushman Bharat', hi: 'आयुष्मान भारत' },
  'services.ayushman.desc': { en: 'PM-JAY card registration & hospital details', hi: 'PM-JAY कार्ड पंजीकरण एवं अस्पताल विवरण' },
  'services.telemedicine': { en: 'Telemedicine', hi: 'टेलीमेडिसिन' },
  'services.telemedicine.desc': { en: 'Online doctor consultation & health check', hi: 'ऑनलाइन डॉक्टर परामर्श एवं स्वास्थ्य जांच' },
  'services.digiHealth': { en: 'Digital Health ID', hi: 'डिजिटल हेल्थ आईडी' },
  'services.digiHealth.desc': { en: 'ABHA card creation & health records', hi: 'ABHA कार्ड निर्माण एवं स्वास्थ्य रिकॉर्ड' },

  // Events page
  'events.title': { en: 'Events', hi: 'कार्यक्रम' },
  'events.subtitle': { en: 'Join us for our events and workshops', hi: 'हमारे कार्यक्रमों और कार्यशालाओं में शामिल हों' },

  // About page
  'about.title': { en: 'About Us', hi: 'हमारे बारे में' },
  'about.subtitle': { en: 'Serving our community with dedication', hi: 'समर्पण के साथ अपने समुदाय की सेवा' },
  'about.vle.title': { en: 'Village Level Entrepreneur (VLE)', hi: 'ग्राम स्तरीय उद्यमी (VLE)' },
  'about.vle.name': { en: 'Avesh Kumar', hi: 'अवेश कुमार' },
  'about.vle.desc': { en: 'Dedicated VLE serving the community of Nauwadeeh || (Nauwa Gaon) and nearby villages since 2021. Committed to bridging the digital divide and ensuring every citizen has access to government services.', hi: '2021 से नौवदीह || (नौवा गांव) और आस-पास के गांवों के समुदाय की सेवा करने वाले समर्पित VLE। डिजिटल विभाजन को पाटने और हर नागरिक को सरकारी सेवाओं तक पहुंच सुनिश्चित करने के लिए प्रतिबद्ध।' },
  'about.mission.title': { en: 'Our Mission', hi: 'हमारा उद्देश्य' },
  'about.mission.desc': { en: 'CSC (Common Service Centre) is an initiative under the Digital India programme. It provides a single-window platform for delivering government, financial, and social sector services to citizens in rural and semi-urban areas.', hi: 'CSC (कॉमन सर्विस सेंटर) डिजिटल इंडिया कार्यक्रम के तहत एक पहल है। यह ग्रामीण और अर्ध-शहरी क्षेत्रों में नागरिकों को सरकारी, वित्तीय और सामाजिक क्षेत्र की सेवाएं प्रदान करने का एकल-खिड़की मंच है।' },
  'about.mission.point1': { en: 'Provide accessible digital services to rural citizens', hi: 'ग्रामीण नागरिकों को सुलभ डिजिटल सेवाएं प्रदान करना' },
  'about.mission.point2': { en: 'Bridge the digital divide in underserved areas', hi: 'वंचित क्षेत्रों में डिजिटल विभाजन को पाटना' },
  'about.mission.point3': { en: 'Empower communities through technology & skill development', hi: 'प्रौद्योगिकी और कौशल विकास के माध्यम से समुदायों को सशक्त बनाना' },
  'about.mission.point4': { en: 'Ensure last-mile delivery of government schemes', hi: 'सरकारी योजनाओं की अंतिम-मील डिलीवरी सुनिश्चित करना' },

  // Apply page
  'apply.title': { en: 'Request for Service', hi: 'सेवा के लिए अनुरोध' },
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
  'apply.otherService': { en: 'Other Service', hi: 'अन्य सेवा' },
  'apply.otherService.placeholder': { en: 'Please specify the service', hi: 'कृपया सेवा निर्दिष्ट करें' },
  'apply.requestType': { en: 'Request Type', hi: 'अनुरोध प्रकार' },
  'apply.requestType.query': { en: 'Query', hi: 'पूछताछ' },
  'apply.requestType.feedback': { en: 'Feedback', hi: 'प्रतिक्रिया' },
  'apply.requestType.complaint': { en: 'Complaint', hi: 'शिकायत' },
  'apply.requiredNote': { en: 'Indicates required field', hi: 'अनिवार्य फ़ील्ड को दर्शाता है' },

  // Contact page
  'contact.title': { en: 'Contact Us', hi: 'संपर्क करें' },
  'contact.subtitle': { en: 'We are here to help you', hi: 'हम आपकी मदद के लिए यहाँ हैं' },
  'contact.address.title': { en: 'Address', hi: 'पता' },
  'contact.address': { en: 'Digital Gramin Service Centre\nNauwa Gaon, Uttar Pradesh\nIndia', hi: 'डिजिटल ग्रामीण सेवा केंद्र\nनौवा गांव, उत्तर प्रदेश\nभारत' },
  'contact.phone.title': { en: 'Phone', hi: 'फ़ोन' },
  'contact.phone': { en: '+91 7233060698', hi: '+91 7233060698' },
  'contact.whatsapp.title': { en: 'WhatsApp', hi: 'व्हाट्सएप' },
  'contact.hours.title': { en: 'Working Hours', hi: 'कार्य समय' },
  'contact.hours': { en: 'Mon - Sat: 9:00 AM - 6:00 PM\nSunday: Closed', hi: 'सोम - शनि: सुबह 9:00 - शाम 6:00\nरविवार: बंद' },
  'contact.whatsapp.btn': { en: 'Chat on WhatsApp', hi: 'व्हाट्सएप पर चैट करें' },
  'contact.map.title': { en: 'Find Us', hi: 'हमें ढूंढें' },

  // Footer
  'footer.desc': { en: 'Your trusted partner for all government and digital services in the local community. Bridging the digital divide one citizen at a time.', hi: 'स्थानीय समुदाय में सभी सरकारी और डिजिटल सेवाओं के लिए आपका विश्वसनीय साथी। एक समय में एक नागरिक के डिजिटल विभाजन को पाटना।' },
  'footer.links': { en: 'Quick Links', hi: 'त्वरित लिंक' },
  'footer.services': { en: 'Top Services', hi: 'शीर्ष सेवाएं' },
  'footer.categories': { en: 'Service Categories', hi: 'सेवा श्रेणियां' },
  'footer.quicklinks': { en: 'Quick Links', hi: 'त्वरित लिंक' },
  'footer.contactInfo': { en: 'Contact Info', hi: 'संपर्क जानकारी' },
  'footer.important': { en: 'Important Links', hi: 'महत्वपूर्ण लिंक' },
  'footer.digitalIndia': { en: 'Digital India', hi: 'डिजिटल इंडिया' },
  'footer.cscPortal': { en: 'CSC Official Portal', hi: 'CSC आधिकारिक पोर्टल' },
  'footer.govtUP': { en: 'UP Government', hi: 'उत्तर प्रदेश सरकार' },
  'footer.pmSchemes': { en: 'PM Schemes', hi: 'प्रधानमंत्री योजनाएं' },
  'footer.copyright': { en: '© 2026 KIOSK (CSC). All rights reserved.', hi: '© 2026 जन सेवा केंद्र (CSC)। सर्वाधिकार सुरक्षित।' },
  'footer.cscId': { en: 'CSC ID', hi: 'CSC आईडी' },
  'footer.disclaimer': { en: 'This is an authorized Common Service Centre under the Digital India initiative by MeitY, Government of India.', hi: 'यह भारत सरकार के MeitY द्वारा डिजिटल इंडिया पहल के तहत एक अधिकृत कॉमन सर्विस सेंटर है।' },

  // Announcements
  'announce.1': { en: '📢 Registration for Pradhan Mantri Kisan Samman Nidhi is now open.', hi: '📢 प्रधानमंत्री किसान सम्मान निधि का रजिस्ट्रेशन चालू है।' },
  'announce.2': { en: '📱 Please send your details for any service to our WhatsApp number (+91 7233060698).', hi: '📱 आप हमें किसी सेवा के लिये अपनी Details whatsapp नम्बर (+91 7233060698) पर भेजें।' },
  'announce.3': { en: '⏱️ We will contact you and try to complete your work within 24 hours.', hi: '⏱️ 24 घण्टे के भीतर आपको सम्पर्क कर कार्य पूर्ण करने का प्रयास किया जायेगा।' },
  'announce.4': { en: '📢 Registration for Pradhan Mantri Kisan Samman Nidhi is now open.', hi: '📢 प्रधानमंत्री किसान सम्मान निधि का रजिस्ट्रेशन चालू है।' },

  // Scheme badges
  'schemes.title': { en: 'Government Schemes We Support', hi: 'हम जिन सरकारी योजनाओं का समर्थन करते हैं' },

  // Quick services
  'quick.title': { en: 'Popular Services', hi: 'लोकप्रिय सेवाएं' },

  // Home - Additional Sections
  'home.why.title': { en: 'Why Choose Us', hi: 'हमें क्यों चुनें' },
  'home.why.1.title': { en: 'Fast Processing', hi: 'तेज़ प्रोसेसिंग' },
  'home.why.1.desc': { en: 'Quick and hassle-free service delivery', hi: 'त्वरित और परेशानी मुक्त सेवा वितरण' },
  'home.why.2.title': { en: 'Expert Staff', hi: 'विशेषज्ञ कर्मचारी' },
  'home.why.2.desc': { en: 'Experienced professionals to guide you', hi: 'आपका मार्गदर्शन करने के लिए अनुभवी पेशेवर' },
  'home.why.3.title': { en: 'Secure & Reliable', hi: 'सुरक्षित और विश्वसनीय' },
  'home.why.3.desc': { en: '100% data privacy and secure processing', hi: '100% डेटा गोपनीयता और सुरक्षित प्रोसेसिंग' },
  'home.process.title': { en: 'How It Works', hi: 'यह कैसे काम करता है' },
  'home.process.1': { en: 'Visit our centre or enquiry online', hi: 'हमारे केंद्र पर आए या ऑनलाइन पूछताछ करें' },
  'home.process.2': { en: 'Submit required documents', hi: 'आवश्यक दस्तावेज़ जमा करें' },
  'home.process.3': { en: 'Track status and receive service', hi: 'स्थिति ट्रैक करें और सेवा प्राप्त करें' },

  // Employees section
  'home.employees.title': { en: 'Our Team', hi: 'हमारी टीम' },
  'home.employees.subtitle': { en: 'Dedicated professionals at your service', hi: 'आपकी सेवा में समर्पित पेशेवर' },
  'team.role.avesh': { en: 'Center Manager & Operations Head', hi: 'केंद्र प्रबंधक और संचालन प्रमुख' },
  'team.role.deepak': { en: 'Senior Service Delivery Officer', hi: 'वरिष्ठ सेवा वितरण अधिकारी' },
  'team.role.shahzad': { en: 'Customer Service Associate', hi: 'ग्राहक सेवा सहयोगी' },

  // Testimonial section
  'home.testimonials.title': { en: 'What Our Citizens Say', hi: 'हमारे नागरिक क्या कहते हैं' },
  'home.testimonials.subtitle': { en: 'Feedback from our valuable visitors', hi: 'हमारे मूल्यवान आगंतुकों की प्रतिक्रिया' },

  // --- New Other Schemes ---
  'services.vehicleInsurance': { en: 'Vehicle Insurance', hi: 'वाहन बीमा' },
  'services.vehicleInsurance.desc': { en: 'Insurance for 2-wheelers, 4-wheelers, trucks, etc.', hi: 'दोपहिया, चौपहिया, ट्रक आदि का बीमा' },
  'services.pollutionCertificate': { en: 'Pollution Certificate', hi: 'प्रदूषण प्रमाण पत्र' },
  'services.pollutionCertificate.desc': { en: 'Vehicle pollution certificate (PUC)', hi: 'वाहन प्रदूषण प्रमाण पत्र (PUC)' },
  'services.moneyTransfer': { en: 'Money Transfer', hi: 'मनी ट्रांसफर' },
  'services.moneyTransfer.desc': { en: 'Domestic money transfer facility', hi: 'घरेलू धन प्रेषण सुविधा' },
  'services.cashWithdrawal': { en: 'Cash Withdrawal', hi: 'धन निकासी' },
  'services.cashWithdrawal.desc': { en: 'Aadhaar ATM (AePS) cash withdrawal', hi: 'आधार एटीएम (AePS) धन निकासी' },
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
