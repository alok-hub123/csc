export interface ServiceDetail {
  id: string;
  icon: string;
  nameKey: string;
  descKey: string;
  documentsEn: string[];
  documentsHi: string[];
  briefEn: string;
  briefHi: string;
  subServicesEn: string[];
  subServicesHi: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  aadhaar: {
    id: 'aadhaar',
    icon: '🆔',
    nameKey: 'services.aadhaar',
    descKey: 'services.aadhaar.desc',
    briefEn: 'Aadhaar is a 12-digit unique identity number issued by UIDAI to every resident of India. It serves as a universal proof of identity and address across the country. Our centre provides complete Aadhaar services including new enrollment for all ages, biometric and demographic updates, mobile number linking, address correction, and instant Aadhaar printing.',
    briefHi: 'आधार UIDAI द्वारा भारत के प्रत्येक निवासी को जारी किया गया 12 अंकों का विशिष्ट पहचान नंबर है। यह पूरे देश में पहचान और पते के सार्वभौमिक प्रमाण के रूप में कार्य करता है। हमारा केंद्र सभी आयु के लिए नया नामांकन, बायोमेट्रिक और डेमोग्राफिक अपडेट, मोबाइल नंबर लिंकिंग, पता सुधार, और तत्काल आधार प्रिंटिंग सहित पूर्ण आधार सेवाएं प्रदान करता है।',
    subServicesEn: ['New Aadhaar Enrollment', 'Aadhaar Update (Name, Address, DOB, Mobile)', 'Biometric Update (Fingerprint & Iris)', 'Aadhaar-PAN Linking', 'Aadhaar Print / e-Aadhaar Download', 'Aadhaar-Bank Account Linking', 'Child Aadhaar (Baal Aadhaar)'],
    subServicesHi: ['नया आधार नामांकन', 'आधार अपडेट (नाम, पता, जन्मतिथि, मोबाइल)', 'बायोमेट्रिक अपडेट (फिंगरप्रिंट और आइरिस)', 'आधार-पैन लिंकिंग', 'आधार प्रिंट / ई-आधार डाउनलोड', 'आधार-बैंक खाता लिंकिंग', 'बाल आधार'],
    documentsEn: ['Aadhaar Form (if new)', 'Proof of Identity (POI)', 'Proof of Address (POA)', 'Proof of Date of Birth (PDB)'],
    documentsHi: ['आधार फॉर्म (यदि नया है)', 'पहचान का प्रमाण (POI)', 'पते का प्रमाण (POA)', 'जन्म तिथि का प्रमाण (PDB)']
  },
  pan: {
    id: 'pan',
    icon: '💳',
    nameKey: 'services.pan',
    descKey: 'services.pan.desc',
    briefEn: 'PAN (Permanent Account Number) is a 10-character alphanumeric identifier issued by the Income Tax Department. It is mandatory for filing income tax returns, opening bank accounts, and financial transactions above specified limits. We provide end-to-end PAN services from fresh application to corrections and reprinting.',
    briefHi: 'पैन (स्थायी खाता संख्या) आयकर विभाग द्वारा जारी 10 अक्षरों का पहचानकर्ता है। यह आयकर रिटर्न दाखिल करने, बैंक खाता खोलने और निर्दिष्ट सीमा से अधिक वित्तीय लेनदेन के लिए अनिवार्य है। हम नए आवेदन से लेकर सुधार और रीप्रिंटिंग तक पूर्ण पैन सेवाएं प्रदान करते हैं।',
    subServicesEn: ['New PAN Card Application', 'PAN Card Correction (Name, DOB, Photo)', 'PAN Card Reprint / Duplicate', 'PAN-Aadhaar Linking', 'PAN Verification & Status Check', 'Minor to Major PAN Update'],
    subServicesHi: ['नया पैन कार्ड आवेदन', 'पैन कार्ड सुधार (नाम, जन्मतिथि, फोटो)', 'पैन कार्ड रीप्रिंट / डुप्लीकेट', 'पैन-आधार लिंकिंग', 'पैन सत्यापन और स्थिति जांच', 'माइनर से मेजर पैन अपडेट'],
    documentsEn: ['Aadhaar Card', 'Passport size photograph', 'Signature on white paper'],
    documentsHi: ['आधार कार्ड', 'पासपोर्ट साइज फोटो', 'सफेद कागज पर हस्ताक्षर']
  },
  certificates: {
    id: 'certificates',
    icon: '📄',
    nameKey: 'services.certificates',
    descKey: 'services.certificates.desc',
    briefEn: 'Government certificates are essential legal documents required for various purposes including admissions, jobs, property, and availing government schemes. We help citizens apply for and obtain all types of certificates issued by the Revenue and District Administration through the official e-District portal of Uttar Pradesh.',
    briefHi: 'सरकारी प्रमाण पत्र विभिन्न उद्देश्यों जैसे प्रवेश, नौकरी, संपत्ति और सरकारी योजनाओं का लाभ उठाने के लिए आवश्यक कानूनी दस्तावेज हैं। हम नागरिकों को उत्तर प्रदेश के आधिकारिक ई-डिस्ट्रिक्ट पोर्टल के माध्यम से राजस्व और जिला प्रशासन द्वारा जारी सभी प्रकार के प्रमाण पत्र प्राप्त करने में मदद करते हैं।',
    subServicesEn: ['Income Certificate (आय प्रमाण पत्र)', 'Caste Certificate (जाति प्रमाण पत्र)', 'Domicile Certificate (निवास प्रमाण पत्र)', 'Birth Certificate', 'Death Certificate', 'Character Certificate', 'OBC / SC / ST Certificate'],
    subServicesHi: ['आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'निवास प्रमाण पत्र', 'जन्म प्रमाण पत्र', 'मृत्यु प्रमाण पत्र', 'चरित्र प्रमाण पत्र', 'OBC / SC / ST प्रमाण पत्र'],
    documentsEn: ['Aadhaar Card', 'Ration Card / Voter ID', 'Self Declaration Form', 'Photograph'],
    documentsHi: ['आधार कार्ड', 'राशन कार्ड / वोटर आईडी', 'स्व-घोषणा पत्र', 'फोटोग्राफ']
  },
  passport: {
    id: 'passport',
    icon: '🛂',
    nameKey: 'services.passport',
    descKey: 'services.passport.desc',
    briefEn: 'A passport is a travel document issued by the Government of India that certifies the identity and nationality of the holder for international travel. We assist in the complete passport application process through the Passport Seva portal including form filling, document verification, appointment booking, and status tracking.',
    briefHi: 'पासपोर्ट भारत सरकार द्वारा जारी एक यात्रा दस्तावेज है जो अंतरराष्ट्रीय यात्रा के लिए धारक की पहचान और राष्ट्रीयता प्रमाणित करता है। हम पासपोर्ट सेवा पोर्टल के माध्यम से फॉर्म भरने, दस्तावेज सत्यापन, अपॉइंटमेंट बुकिंग और स्थिति ट्रैकिंग सहित पूर्ण पासपोर्ट आवेदन प्रक्रिया में सहायता करते हैं।',
    subServicesEn: ['Fresh Passport Application', 'Passport Renewal', 'Tatkal Passport Application', 'Passport Status Tracking', 'Police Verification Assistance'],
    subServicesHi: ['नया पासपोर्ट आवेदन', 'पासपोर्ट नवीनीकरण', 'तत्काल पासपोर्ट आवेदन', 'पासपोर्ट स्थिति ट्रैकिंग', 'पुलिस सत्यापन सहायता'],
    documentsEn: ['Aadhaar Card', '10th Marksheet', 'Voter ID or PAN Card', 'Electricity Bill / Bank Passbook'],
    documentsHi: ['आधार कार्ड', '10वीं की मार्कशीट', 'वोटर आईडी या पैन कार्ड', 'बिजली बिल / बैंक पासबुक']
  },
  voter: {
    id: 'voter',
    icon: '🗳️',
    nameKey: 'services.voter',
    descKey: 'services.voter.desc',
    briefEn: 'Voter ID (EPIC - Electors Photo Identity Card) is issued by the Election Commission of India. It is the primary document for exercising your right to vote and also serves as a valid identity proof. We provide complete voter ID services through the NVSP (National Voters Service Portal).',
    briefHi: 'वोटर आईडी (EPIC - मतदाता फोटो पहचान पत्र) भारत के चुनाव आयोग द्वारा जारी किया जाता है। यह मतदान के अधिकार का प्रयोग करने के लिए प्राथमिक दस्तावेज है और वैध पहचान प्रमाण के रूप में भी कार्य करता है। हम NVSP (राष्ट्रीय मतदाता सेवा पोर्टल) के माध्यम से पूर्ण वोटर आईडी सेवाएं प्रदान करते हैं।',
    subServicesEn: ['New Voter ID Registration (Form 6)', 'Voter ID Correction (Form 8)', 'Voter ID Transfer (Form 6A)', 'e-EPIC Download', 'Voter List Name Search'],
    subServicesHi: ['नया वोटर आईडी पंजीकरण (फॉर्म 6)', 'वोटर आईडी सुधार (फॉर्म 8)', 'वोटर आईडी ट्रांसफर (फॉर्म 6A)', 'ई-EPIC डाउनलोड', 'मतदाता सूची में नाम खोजें'],
    documentsEn: ['Aadhaar Card', 'Passport size photograph', 'Age proof (Birth Certificate/10th Marksheet)'],
    documentsHi: ['आधार कार्ड', 'पासपोर्ट साइज फोटो', 'आयु प्रमाण (जन्म प्रमाण पत्र/10वीं की मार्कशीट)']
  },
  ration: {
    id: 'ration',
    icon: '🍚',
    nameKey: 'services.ration',
    descKey: 'services.ration.desc',
    briefEn: 'Ration Card is an official document issued by the State Government for purchasing subsidized food grains from Public Distribution System (PDS). It also serves as an important identity and address proof. We assist in new ration card applications, member additions/deletions, and category changes through the UP FCS portal.',
    briefHi: 'राशन कार्ड राज्य सरकार द्वारा सार्वजनिक वितरण प्रणाली (PDS) से रियायती खाद्यान्न खरीदने के लिए जारी किया गया आधिकारिक दस्तावेज है। यह पहचान और पते के प्रमाण के रूप में भी कार्य करता है। हम UP FCS पोर्टल के माध्यम से नए राशन कार्ड आवेदन, सदस्य जोड़ने/हटाने और श्रेणी परिवर्तन में सहायता करते हैं।',
    subServicesEn: ['New Ration Card Application', 'Member Addition / Deletion', 'Ration Card Surrender', 'Category Change (APL/BPL)', 'Ration Card Correction', 'Duplicate Ration Card'],
    subServicesHi: ['नया राशन कार्ड आवेदन', 'सदस्य जोड़ना / हटाना', 'राशन कार्ड समर्पण', 'श्रेणी परिवर्तन (APL/BPL)', 'राशन कार्ड सुधार', 'डुप्लीकेट राशन कार्ड'],
    documentsEn: ['Aadhaar Cards of all family members', 'Income Certificate', 'Passport size photograph of head of family', 'Bank Passbook'],
    documentsHi: ['परिवार के सभी सदस्यों के आधार कार्ड', 'आय प्रमाण पत्र', 'परिवार के मुखिया की पासपोर्ट साइज फोटो', 'बैंक पासबुक']
  },
  banking: {
    id: 'banking',
    icon: '🏦',
    nameKey: 'services.banking',
    descKey: 'services.banking.desc',
    briefEn: 'As an authorized Banking Correspondent (BC), we provide essential banking services to citizens in rural areas without the need to visit a bank branch. Services include account opening under Jan Dhan Yojana, cash deposits and withdrawals using Aadhaar-enabled Payment System (AePS), money transfers, and balance enquiries.',
    briefHi: 'एक अधिकृत बैंकिंग कॉरेस्पोंडेंट (BC) के रूप में, हम ग्रामीण क्षेत्रों में नागरिकों को बैंक शाखा जाए बिना आवश्यक बैंकिंग सेवाएं प्रदान करते हैं। सेवाओं में जन धन योजना के तहत खाता खोलना, आधार-सक्षम भुगतान प्रणाली (AePS) का उपयोग करके नकद जमा और निकासी, धन हस्तांतरण और शेष राशि पूछताछ शामिल है।',
    subServicesEn: ['Jan Dhan Account Opening', 'Cash Deposit & Withdrawal (AePS)', 'Fund Transfer (NEFT/IMPS)', 'Balance Enquiry & Mini Statement', 'Fixed Deposit & RD Opening', 'Cheque Book Request'],
    subServicesHi: ['जन धन खाता खोलना', 'नकद जमा और निकासी (AePS)', 'फंड ट्रांसफर (NEFT/IMPS)', 'शेष राशि पूछताछ और मिनी स्टेटमेंट', 'सावधि जमा और RD खोलना', 'चेक बुक अनुरोध'],
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Passport size photograph'],
    documentsHi: ['आधार कार्ड', 'पैन कार्ड', 'पासपोर्ट साइज फोटो']
  },
  insurance: {
    id: 'insurance',
    icon: '🛡️',
    nameKey: 'services.insurance',
    descKey: 'services.insurance.desc',
    briefEn: 'Insurance schemes provide financial protection to citizens against unforeseen events. We help enroll citizens in government-backed insurance schemes like PMJJBY (life insurance at ₹436/year) and PMSBY (accident insurance at ₹20/year), as well as crop insurance under PMFBY for farmers.',
    briefHi: 'बीमा योजनाएं नागरिकों को अप्रत्याशित घटनाओं से वित्तीय सुरक्षा प्रदान करती हैं। हम PMJJBY (₹436/वर्ष पर जीवन बीमा) और PMSBY (₹20/वर्ष पर दुर्घटना बीमा) जैसी सरकार समर्थित बीमा योजनाओं में नागरिकों का नामांकन करने में मदद करते हैं, साथ ही किसानों के लिए PMFBY के तहत फसल बीमा भी।',
    subServicesEn: ['PMJJBY (Jeevan Jyoti Bima)', 'PMSBY (Suraksha Bima)', 'Crop Insurance (PMFBY)', 'Life Insurance Enrollment', 'Insurance Claim Assistance'],
    subServicesHi: ['PMJJBY (जीवन ज्योति बीमा)', 'PMSBY (सुरक्षा बीमा)', 'फसल बीमा (PMFBY)', 'जीवन बीमा नामांकन', 'बीमा दावा सहायता'],
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Nominee Aadhaar Card'],
    documentsHi: ['आधार कार्ड', 'बैंक पासबुक', 'नॉमिनी आधार कार्ड']
  },
  pension: {
    id: 'pension',
    icon: '👴',
    nameKey: 'services.pension',
    descKey: 'services.pension.desc',
    briefEn: 'Government pension schemes ensure financial security for citizens in old age. We facilitate enrollment in Atal Pension Yojana (APY) which guarantees ₹1,000 to ₹5,000 monthly pension after age 60, and PM-SYM for unorganized sector workers providing ₹3,000/month pension.',
    briefHi: 'सरकारी पेंशन योजनाएं वृद्धावस्था में नागरिकों की वित्तीय सुरक्षा सुनिश्चित करती हैं। हम अटल पेंशन योजना (APY) में नामांकन की सुविधा प्रदान करते हैं जो 60 वर्ष की आयु के बाद ₹1,000 से ₹5,000 मासिक पेंशन की गारंटी देता है, और असंगठित क्षेत्र के श्रमिकों के लिए PM-SYM ₹3,000/माह पेंशन प्रदान करता है।',
    subServicesEn: ['Atal Pension Yojana (APY) Enrollment', 'PM-SYM Registration', 'Pension Status Check', 'Pension Account Modification', 'Nominee Update'],
    subServicesHi: ['अटल पेंशन योजना (APY) नामांकन', 'PM-SYM पंजीकरण', 'पेंशन स्थिति जांच', 'पेंशन खाता संशोधन', 'नॉमिनी अपडेट'],
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Age Proof'],
    documentsHi: ['आधार कार्ड', 'बैंक पासबुक', 'आयु प्रमाण']
  },
  mudra: {
    id: 'mudra',
    icon: '💰',
    nameKey: 'services.mudra',
    descKey: 'services.mudra.desc',
    briefEn: 'MUDRA (Micro Units Development and Refinance Agency) Loan scheme provides loans up to ₹10 lakh to non-corporate, non-farm small/micro enterprises. It has three categories: Shishu (up to ₹50,000), Kishore (₹50,000-₹5 lakh), and Tarun (₹5-₹10 lakh). We assist in loan application and documentation.',
    briefHi: 'मुद्रा (माइक्रो यूनिट्स डेवलपमेंट एंड रिफाइनेंस एजेंसी) लोन योजना गैर-कॉर्पोरेट, गैर-कृषि लघु/सूक्ष्म उद्यमों को ₹10 लाख तक के लोन प्रदान करती है। इसकी तीन श्रेणियां हैं: शिशु (₹50,000 तक), किशोर (₹50,000-₹5 लाख), और तरुण (₹5-₹10 लाख)।',
    subServicesEn: ['Shishu Loan (up to ₹50,000)', 'Kishore Loan (₹50K - ₹5 Lakh)', 'Tarun Loan (₹5L - ₹10 Lakh)', 'Loan Application Assistance', 'Document Preparation'],
    subServicesHi: ['शिशु लोन (₹50,000 तक)', 'किशोर लोन (₹50K - ₹5 लाख)', 'तरुण लोन (₹5L - ₹10 लाख)', 'लोन आवेदन सहायता', 'दस्तावेज तैयारी'],
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Business Proof', 'Bank Statement', 'Photographs'],
    documentsHi: ['आधार कार्ड', 'पैन कार्ड', 'व्यापार प्रमाण', 'बैंक स्टेटमेंट', 'फोटोग्राफ']
  },
  billpay: {
    id: 'billpay',
    icon: '💡',
    nameKey: 'services.billpay',
    descKey: 'services.billpay.desc',
    briefEn: 'Pay all your utility bills conveniently at our centre. We accept payments for electricity, water, gas, telephone, and broadband bills from all major providers. Quick processing with instant confirmation receipts.',
    briefHi: 'हमारे केंद्र पर अपने सभी उपयोगिता बिलों का सुविधाजनक भुगतान करें। हम सभी प्रमुख प्रदाताओं से बिजली, पानी, गैस, टेलीफोन और ब्रॉडबैंड बिलों के लिए भुगतान स्वीकार करते हैं।',
    subServicesEn: ['Electricity Bill Payment', 'Water Bill Payment', 'Gas Bill Payment', 'Telephone / Broadband Bill', 'Municipal Tax Payment'],
    subServicesHi: ['बिजली बिल भुगतान', 'पानी बिल भुगतान', 'गैस बिल भुगतान', 'टेलीफोन / ब्रॉडबैंड बिल', 'नगरपालिका कर भुगतान'],
    documentsEn: ['Previous Bill Copy / Consumer Number'],
    documentsHi: ['पिछला बिल कॉपी / उपभोक्ता संख्या']
  },
  recharge: {
    id: 'recharge',
    icon: '📱',
    nameKey: 'services.recharge',
    descKey: 'services.recharge.desc',
    briefEn: 'Quick and reliable mobile recharge and DTH recharge services for all operators. We support all major telecom providers including Jio, Airtel, Vi, BSNL and DTH providers like Tata Play, Airtel Digital TV, Dish TV etc.',
    briefHi: 'सभी ऑपरेटरों के लिए त्वरित और विश्वसनीय मोबाइल रिचार्ज और DTH रिचार्ज सेवाएं। हम Jio, Airtel, Vi, BSNL और Tata Play, Airtel Digital TV, Dish TV आदि जैसे सभी प्रमुख प्रदाताओं का समर्थन करते हैं।',
    subServicesEn: ['Prepaid Mobile Recharge', 'Postpaid Bill Payment', 'DTH Recharge', 'Data Pack / Add-on Recharge'],
    subServicesHi: ['प्रीपेड मोबाइल रिचार्ज', 'पोस्टपेड बिल भुगतान', 'DTH रिचार्ज', 'डेटा पैक / एड-ऑन रिचार्ज'],
    documentsEn: ['Mobile Number / DTH ID'],
    documentsHi: ['मोबाइल नंबर / DTH आईडी']
  },
  ticket: {
    id: 'ticket',
    icon: '🎫',
    nameKey: 'services.ticket',
    descKey: 'services.ticket.desc',
    briefEn: 'Book train, bus, and flight tickets at affordable rates from our centre. We use IRCTC for railway bookings, state transport portals for bus tickets, and partner platforms for flight bookings with complete assistance.',
    briefHi: 'हमारे केंद्र से किफायती दरों पर ट्रेन, बस और फ्लाइट टिकट बुक करें। हम रेलवे बुकिंग के लिए IRCTC, बस टिकट के लिए राज्य परिवहन पोर्टल और फ्लाइट बुकिंग के लिए पार्टनर प्लेटफॉर्म का उपयोग करते हैं।',
    subServicesEn: ['Train Ticket Booking (IRCTC)', 'Bus Ticket Booking', 'Flight Ticket Booking', 'Ticket Cancellation & Refund', 'PNR Status Check'],
    subServicesHi: ['ट्रेन टिकट बुकिंग (IRCTC)', 'बस टिकट बुकिंग', 'फ्लाइट टिकट बुकिंग', 'टिकट रद्दीकरण और रिफंड', 'PNR स्थिति जांच'],
    documentsEn: ['Passenger ID Proof (Aadhaar/Voter ID)', 'Travel Details (Date, Destination)'],
    documentsHi: ['यात्री पहचान प्रमाण (आधार/वोटर आईडी)', 'यात्रा विवरण (तिथि, गंतव्य)']
  },
  printScan: {
    id: 'printScan',
    icon: '🖨️',
    nameKey: 'services.printScan',
    descKey: 'services.printScan.desc',
    briefEn: 'Professional document printing, scanning, photocopying, and lamination services. We handle all types of documents including government forms, certificates, photographs, and project reports with high-quality output.',
    briefHi: 'पेशेवर दस्तावेज़ प्रिंटिंग, स्कैनिंग, फोटोकॉपी और लैमिनेशन सेवाएं। हम सरकारी फॉर्म, प्रमाण पत्र, फोटोग्राफ और प्रोजेक्ट रिपोर्ट सहित सभी प्रकार के दस्तावेजों को उच्च गुणवत्ता के साथ संभालते हैं।',
    subServicesEn: ['Black & White Printing', 'Color Printing', 'Document Scanning', 'Photocopying', 'Lamination', 'Passport Photo Printing'],
    subServicesHi: ['ब्लैक एंड व्हाइट प्रिंटिंग', 'कलर प्रिंटिंग', 'दस्तावेज़ स्कैनिंग', 'फोटोकॉपी', 'लैमिनेशन', 'पासपोर्ट फोटो प्रिंटिंग'],
    documentsEn: ['Original documents or pendrive/email with soft copy'],
    documentsHi: ['मूल दस्तावेज या सॉफ्ट कॉपी के साथ पेनड्राइव/ईमेल']
  },
  ayushman: {
    id: 'ayushman',
    icon: '🏥',
    nameKey: 'services.ayushman',
    descKey: 'services.ayushman.desc',
    briefEn: 'Ayushman Bharat PM-JAY is the world\'s largest health insurance scheme providing free health coverage up to ₹5 lakh per family per year for secondary and tertiary hospitalization. We help eligible families check eligibility, create Ayushman cards, and find empaneled hospitals.',
    briefHi: 'आयुष्मान भारत PM-JAY दुनिया की सबसे बड़ी स्वास्थ्य बीमा योजना है जो प्रति परिवार प्रति वर्ष ₹5 लाख तक का मुफ्त स्वास्थ्य कवरेज प्रदान करती है। हम पात्र परिवारों को पात्रता जांचने, आयुष्मान कार्ड बनाने और सूचीबद्ध अस्पतालों को खोजने में मदद करते हैं।',
    subServicesEn: ['Eligibility Check', 'Ayushman Card Creation', 'Hospital Search', 'Claim Status Check', 'Family Member Addition'],
    subServicesHi: ['पात्रता जांच', 'आयुष्मान कार्ड निर्माण', 'अस्पताल खोज', 'दावा स्थिति जांच', 'परिवार सदस्य जोड़ना'],
    documentsEn: ['Ration Card (Antyodaya/Patra Grihasti)', 'Aadhaar Card', 'Active Mobile Number'],
    documentsHi: ['राशन कार्ड (अंत्योदय/पात्र गृहस्थी)', 'आधार कार्ड', 'सक्रिय मोबाइल नंबर']
  },
  telemedicine: {
    id: 'telemedicine', icon: '👨‍⚕️', nameKey: 'services.telemedicine', descKey: 'services.telemedicine.desc',
    briefEn: 'Get online doctor consultations from our centre through CSC telemedicine services. Consult qualified doctors via video call for general health issues, get prescriptions, and receive basic health check-ups without traveling to a hospital.',
    briefHi: 'CSC टेलीमेडिसिन सेवाओं के माध्यम से हमारे केंद्र से ऑनलाइन डॉक्टर परामर्श प्राप्त करें। सामान्य स्वास्थ्य समस्याओं के लिए वीडियो कॉल के माध्यम से योग्य डॉक्टरों से परामर्श करें।',
    subServicesEn: ['Online Doctor Consultation', 'E-Prescription', 'Basic Health Check-up', 'Follow-up Consultation'],
    subServicesHi: ['ऑनलाइन डॉक्टर परामर्श', 'ई-प्रिस्क्रिप्शन', 'बेसिक हेल्थ चेक-अप', 'फॉलो-अप परामर्श'],
    documentsEn: ['Aadhaar Card', 'Previous Medical Reports (if any)'],
    documentsHi: ['आधार कार्ड', 'पिछली मेडिकल रिपोर्ट (यदि कोई हो)']
  },
  digiHealth: {
    id: 'digiHealth', icon: '💊', nameKey: 'services.digiHealth', descKey: 'services.digiHealth.desc',
    briefEn: 'ABHA (Ayushman Bharat Health Account) is a 14-digit unique health ID under the Ayushman Bharat Digital Mission. It helps maintain digital health records and allows easy sharing of medical history with healthcare providers.',
    briefHi: 'ABHA (आयुष्मान भारत हेल्थ अकाउंट) आयुष्मान भारत डिजिटल मिशन के तहत 14 अंकों की विशिष्ट स्वास्थ्य आईडी है। यह डिजिटल स्वास्थ्य रिकॉर्ड बनाए रखने में मदद करता है।',
    subServicesEn: ['ABHA Card Creation', 'Health Record Linking', 'ABHA Profile Update', 'Digital Health Records Access'],
    subServicesHi: ['ABHA कार्ड निर्माण', 'स्वास्थ्य रिकॉर्ड लिंकिंग', 'ABHA प्रोफाइल अपडेट', 'डिजिटल स्वास्थ्य रिकॉर्ड एक्सेस'],
    documentsEn: ['Aadhaar Card linked with Mobile Number'],
    documentsHi: ['आधार कार्ड (मोबाइल नंबर से लिंक)']
  },
  cmyuva: {
    id: 'cmyuva', icon: '👨‍💼', nameKey: 'services.cmyuva', descKey: 'services.cmyuva.desc',
    briefEn: 'Mukhyamantri Yuva Udyami Abhiyan is a UP Government scheme to promote entrepreneurship among youth. It provides financial assistance and training to young entrepreneurs to start their own businesses.',
    briefHi: 'मुख्यमंत्री युवा उद्यमी अभियान युवाओं में उद्यमिता को बढ़ावा देने के लिए उत्तर प्रदेश सरकार की योजना है। यह युवा उद्यमियों को अपना व्यवसाय शुरू करने के लिए वित्तीय सहायता और प्रशिक्षण प्रदान करता है।',
    subServicesEn: ['Online Application', 'Document Verification', 'Business Plan Assistance', 'Status Tracking'],
    subServicesHi: ['ऑनलाइन आवेदन', 'दस्तावेज सत्यापन', 'बिजनेस प्लान सहायता', 'स्थिति ट्रैकिंग'],
    documentsEn: ['Aadhaar Card', 'Educational Certificates', 'Project Report', 'Bank Details'],
    documentsHi: ['आधार कार्ड', 'शैक्षिक प्रमाण पत्र', 'प्रोजेक्ट रिपोर्ट', 'बैंक विवरण']
  },
  udyam: {
    id: 'udyam', icon: '🏭', nameKey: 'services.udyam', descKey: 'services.udyam.desc',
    briefEn: 'Udyam Registration is the process of registering Micro, Small, and Medium Enterprises (MSMEs) with the Government of India. It provides benefits like priority sector lending, tax exemptions, and government tender preferences.',
    briefHi: 'उद्यम रजिस्ट्रेशन भारत सरकार के साथ सूक्ष्म, लघु और मध्यम उद्यमों (MSMEs) के पंजीकरण की प्रक्रिया है। यह प्राथमिकता क्षेत्र ऋण, कर छूट और सरकारी टेंडर प्राथमिकता जैसे लाभ प्रदान करता है।',
    subServicesEn: ['New Udyam Registration', 'Udyam Certificate Download', 'Registration Update', 'Print Certificate'],
    subServicesHi: ['नया उद्यम रजिस्ट्रेशन', 'उद्यम प्रमाणपत्र डाउनलोड', 'रजिस्ट्रेशन अपडेट', 'प्रमाणपत्र प्रिंट'],
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Bank Account Details'],
    documentsHi: ['आधार कार्ड', 'पैन कार्ड', 'बैंक खाता विवरण']
  },
  driving: {
    id: 'driving', icon: '🚗', nameKey: 'services.driving', descKey: 'services.driving.desc',
    briefEn: 'Driving License is issued by the Regional Transport Office (RTO). We assist in the complete online application process through the Parivahan Sewa portal for learning license, permanent driving license, and renewals.',
    briefHi: 'ड्राइविंग लाइसेंस क्षेत्रीय परिवहन कार्यालय (RTO) द्वारा जारी किया जाता है। हम परिवहन सेवा पोर्टल के माध्यम से लर्निंग लाइसेंस, स्थायी ड्राइविंग लाइसेंस और नवीनीकरण के लिए पूर्ण ऑनलाइन आवेदन प्रक्रिया में सहायता करते हैं।',
    subServicesEn: ['Learning License Application', 'Permanent DL Application', 'DL Renewal', 'Transport Vehicle License (TR)', 'International Driving Permit', 'DL Status Check'],
    subServicesHi: ['लर्निंग लाइसेंस आवेदन', 'स्थायी DL आवेदन', 'DL नवीनीकरण', 'परिवहन वाहन लाइसेंस (TR)', 'अंतरराष्ट्रीय ड्राइविंग परमिट', 'DL स्थिति जांच'],
    documentsEn: ['Aadhaar Card', 'Age Proof', 'Address Proof', 'Passport Size Photo'],
    documentsHi: ['आधार कार्ड', 'आयु प्रमाण', 'पते का प्रमाण', 'पासपोर्ट साइज फोटो']
  },
  labour: {
    id: 'labour', icon: '👷', nameKey: 'services.labour', descKey: 'services.labour.desc',
    briefEn: 'Labour Card (Shramik Card) registration under the Building and Other Construction Workers Act provides workers access to various welfare schemes including pension, education assistance, and housing benefits.',
    briefHi: 'भवन एवं अन्य निर्माण श्रमिक अधिनियम के तहत श्रमिक कार्ड पंजीकरण श्रमिकों को पेंशन, शिक्षा सहायता और आवास लाभ सहित विभिन्न कल्याणकारी योजनाओं तक पहुंच प्रदान करता है।',
    subServicesEn: ['New Labour Card Registration', 'Labour Card Renewal', 'Scheme Application', 'Status Check'],
    subServicesHi: ['नया श्रमिक कार्ड पंजीकरण', 'श्रमिक कार्ड नवीनीकरण', 'योजना आवेदन', 'स्थिति जांच'],
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Nominee Aadhaar', 'Passport Size Photo'],
    documentsHi: ['आधार कार्ड', 'बैंक पासबुक', 'नॉमिनी आधार', 'पासपोर्ट साइज फोटो']
  },
  marriage: {
    id: 'marriage', icon: '💍', nameKey: 'services.marriage', descKey: 'services.marriage.desc',
    briefEn: 'Marriage Registration is a legal process that provides official recognition to a marriage. It is mandatory in many states and serves as legal proof of marriage for passport, visa, and property purposes.',
    briefHi: 'विवाह पंजीकरण एक कानूनी प्रक्रिया है जो विवाह को आधिकारिक मान्यता प्रदान करती है। यह कई राज्यों में अनिवार्य है और पासपोर्ट, वीजा और संपत्ति उद्देश्यों के लिए विवाह के कानूनी प्रमाण के रूप में कार्य करता है।',
    subServicesEn: ['Marriage Certificate Application', 'Document Verification', 'Certificate Download'],
    subServicesHi: ['विवाह प्रमाण पत्र आवेदन', 'दस्तावेज सत्यापन', 'प्रमाण पत्र डाउनलोड'],
    documentsEn: ['Aadhaar Card (Husband & Wife)', 'Wedding Photo', 'Age Proof'],
    documentsHi: ['आधार कार्ड (पति और पत्नी)', 'शादी की तस्वीर', 'आयु प्रमाण']
  },
  virasat: {
    id: 'virasat', icon: '📜', nameKey: 'services.virasat', descKey: 'services.virasat.desc',
    briefEn: 'Virasat (Mutation/Inheritance) is the process of transferring land records from a deceased person to their legal heirs. This is essential for maintaining accurate land ownership records in the revenue department.',
    briefHi: 'विरासत (म्यूटेशन/उत्तराधिकार) भूमि रिकॉर्ड को मृत व्यक्ति से उनके कानूनी उत्तराधिकारियों को हस्तांतरित करने की प्रक्रिया है। राजस्व विभाग में सटीक भूमि स्वामित्व रिकॉर्ड बनाए रखने के लिए यह आवश्यक है।',
    subServicesEn: ['Virasat Application', 'Document Submission', 'Status Tracking', 'Khatauni Update'],
    subServicesHi: ['विरासत आवेदन', 'दस्तावेज जमा', 'स्थिति ट्रैकिंग', 'खतौनी अपडेट'],
    documentsEn: ['Death Certificate', 'Family Register Copy', 'Aadhaar of Heirs', 'Khatauni'],
    documentsHi: ['मृत्यु प्रमाण पत्र', 'परिवार रजिस्टर की नकल', 'वारिसों का आधार', 'खतौनी']
  },
  scholarship: {
    id: 'scholarship', icon: '🎓', nameKey: 'services.scholarship', descKey: 'services.scholarship.desc',
    briefEn: 'Government scholarship schemes provide financial assistance to students from economically weaker sections for their education. We help students apply for pre-matric, post-matric, and other scholarship schemes through the official UP Scholarship portal.',
    briefHi: 'सरकारी छात्रवृत्ति योजनाएं आर्थिक रूप से कमजोर वर्गों के छात्रों को उनकी शिक्षा के लिए वित्तीय सहायता प्रदान करती हैं। हम छात्रों को आधिकारिक UP Scholarship पोर्टल के माध्यम से प्री-मैट्रिक, पोस्ट-मैट्रिक और अन्य छात्रवृत्ति योजनाओं के लिए आवेदन करने में मदद करते हैं।',
    subServicesEn: ['Pre-Matric Scholarship', 'Post-Matric Scholarship', 'Scholarship Renewal', 'Status Check', 'Correction in Application'],
    subServicesHi: ['प्री-मैट्रिक छात्रवृत्ति', 'पोस्ट-मैट्रिक छात्रवृत्ति', 'छात्रवृत्ति नवीनीकरण', 'स्थिति जांच', 'आवेदन में सुधार'],
    documentsEn: ['Aadhaar Card', 'Income Certificate', 'Caste Certificate', 'Bank Passbook', 'Previous Marksheet'],
    documentsHi: ['आधार कार्ड', 'आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'बैंक पासबुक', 'पिछली मार्कशीट']
  },
  pmkisan: {
    id: 'pmkisan', icon: '🌾', nameKey: 'services.pmkisan', descKey: 'services.pmkisan.desc',
    briefEn: 'PM-KISAN is a central government scheme providing ₹6,000 per year in three installments to small and marginal farmer families. We help with new registration, eKYC, status check, and correction of beneficiary details.',
    briefHi: 'PM-KISAN केंद्र सरकार की योजना है जो छोटे और सीमांत किसान परिवारों को तीन किस्तों में प्रति वर्ष ₹6,000 प्रदान करती है। हम नए पंजीकरण, eKYC, स्थिति जांच और लाभार्थी विवरण के सुधार में मदद करते हैं।',
    subServicesEn: ['New Farmer Registration', 'eKYC Update', 'Beneficiary Status Check', 'Installment Status', 'Detail Correction'],
    subServicesHi: ['नया किसान पंजीकरण', 'eKYC अपडेट', 'लाभार्थी स्थिति जांच', 'किस्त स्थिति', 'विवरण सुधार'],
    documentsEn: ['Aadhaar Card', 'Khatauni (Land Record)', 'Bank Passbook'],
    documentsHi: ['आधार कार्ड', 'खतौनी (भूमि रिकॉर्ड)', 'बैंक पासबुक']
  },
  itr: {
    id: 'itr', icon: '📊', nameKey: 'services.itr', descKey: 'services.itr.desc',
    briefEn: 'Income Tax Return (ITR) filing is mandatory for individuals and businesses earning above the taxable limit. We provide complete ITR filing services including form selection, tax computation, and e-verification through the Income Tax portal.',
    briefHi: 'आयकर रिटर्न (ITR) दाखिल करना कर योग्य सीमा से अधिक कमाने वाले व्यक्तियों और व्यवसायों के लिए अनिवार्य है। हम आयकर पोर्टल के माध्यम से फॉर्म चयन, कर गणना और ई-सत्यापन सहित पूर्ण ITR फाइलिंग सेवाएं प्रदान करते हैं।',
    subServicesEn: ['ITR-1 Filing (Salaried)', 'ITR-4 Filing (Business)', 'Tax Computation', 'e-Verification', 'Refund Status Check'],
    subServicesHi: ['ITR-1 फाइलिंग (वेतनभोगी)', 'ITR-4 फाइलिंग (व्यवसाय)', 'कर गणना', 'ई-सत्यापन', 'रिफंड स्थिति जांच'],
    documentsEn: ['PAN Card', 'Aadhaar Card', 'Bank Statements', 'Form 16 (if salaried)'],
    documentsHi: ['पैन कार्ड', 'आधार कार्ड', 'बैंक स्टेटमेंट', 'फॉर्म 16 (यदि वेतनभोगी हैं)']
  },
  gst: {
    id: 'gst', icon: '🧾', nameKey: 'services.gst', descKey: 'services.gst.desc',
    briefEn: 'GST Registration is mandatory for businesses with annual turnover exceeding ₹40 lakh (₹20 lakh for services). We assist in new GST registration, return filing, and compliance through the GST portal.',
    briefHi: 'GST पंजीकरण ₹40 लाख (सेवाओं के लिए ₹20 लाख) से अधिक वार्षिक टर्नओवर वाले व्यवसायों के लिए अनिवार्य है। हम GST पोर्टल के माध्यम से नए GST पंजीकरण, रिटर्न फाइलिंग और अनुपालन में सहायता करते हैं।',
    subServicesEn: ['New GST Registration', 'GST Return Filing', 'GST Amendment', 'GST Cancellation', 'E-Way Bill Generation'],
    subServicesHi: ['नया GST पंजीकरण', 'GST रिटर्न फाइलिंग', 'GST संशोधन', 'GST रद्दीकरण', 'ई-वे बिल जनरेशन'],
    documentsEn: ['PAN Card', 'Aadhaar Card', 'Business Address Proof', 'Bank Statement'],
    documentsHi: ['पैन कार्ड', 'आधार कार्ड', 'व्यावसायिक पते का प्रमाण', 'बैंक स्टेटमेंट']
  },
  ekcc: {
    id: 'ekcc', icon: '💳', nameKey: 'services.ekcc', descKey: 'services.ekcc.desc',
    briefEn: 'E-KCC (Electronic Kisan Credit Card) provides farmers with affordable credit for agricultural needs. It offers credit at subsidized interest rates for crop production, post-harvest expenses, and farm maintenance.',
    briefHi: 'E-KCC (इलेक्ट्रॉनिक किसान क्रेडिट कार्ड) किसानों को कृषि आवश्यकताओं के लिए किफायती ऋण प्रदान करता है। यह फसल उत्पादन, फसल कटाई के बाद के खर्चों और खेत रखरखाव के लिए रियायती ब्याज दरों पर ऋण प्रदान करता है।',
    subServicesEn: ['New KCC Application', 'KCC Renewal', 'Limit Enhancement', 'Status Check'],
    subServicesHi: ['नया KCC आवेदन', 'KCC नवीनीकरण', 'सीमा वृद्धि', 'स्थिति जांच'],
    documentsEn: ['Aadhaar Card', 'Khatauni', 'Bank Passbook', 'Passport Size Photo'],
    documentsHi: ['आधार कार्ड', 'खतौनी', 'बैंक पासबुक', 'पासपोर्ट साइज फोटो']
  },
  epf: {
    id: 'epf', icon: '💼', nameKey: 'services.epf', descKey: 'services.epf.desc',
    briefEn: 'EPF (Employees Provident Fund) services help employees manage their provident fund accounts. We assist with UAN activation, KYC update, passbook viewing, and claim filing through the EPFO portal.',
    briefHi: 'EPF (कर्मचारी भविष्य निधि) सेवाएं कर्मचारियों को उनके भविष्य निधि खातों का प्रबंधन करने में मदद करती हैं। हम EPFO पोर्टल के माध्यम से UAN सक्रियण, KYC अपडेट, पासबुक देखने और दावा दाखिल करने में सहायता करते हैं।',
    subServicesEn: ['UAN Activation', 'EPF KYC Update', 'Passbook Download', 'PF Withdrawal Claim', 'Transfer Claim'],
    subServicesHi: ['UAN सक्रियण', 'EPF KYC अपडेट', 'पासबुक डाउनलोड', 'PF निकासी दावा', 'ट्रांसफर दावा'],
    documentsEn: ['UAN Number', 'Aadhaar Card', 'PAN Card', 'Bank Passbook'],
    documentsHi: ['UAN नंबर', 'आधार कार्ड', 'पैन कार्ड', 'बैंक पासबुक']
  },
  pcc: {
    id: 'pcc',
    icon: '👮',
    nameKey: 'services.pcc',
    descKey: 'services.pcc.desc',
    briefEn: 'A Police Clearance Certificate (PCC) is an official document issued by the police department or Passport Seva to verify a person\'s criminal record. It is widely required for employment, visa applications, and emigration purposes. We assist in the complete online application, appointment booking, and documentation.',
    briefHi: 'पुलिस क्लीयरेंस सर्टिफिकेट (PCC) पुलिस विभाग या पासपोर्ट सेवा द्वारा किसी व्यक्ति के आपराधिक रिकॉर्ड को सत्यापित करने के लिए जारी किया गया एक आधिकारिक दस्तावेज है। यह रोजगार, वीजा आवेदनों और विदेश प्रवास के लिए व्यापक रूप से आवश्यक है। हम पूर्ण ऑनलाइन आवेदन, अपॉइंटमेंट बुकिंग और दस्तावेज बनाने में सहायता करते हैं।',
    subServicesEn: ['New PCC Application', 'Passport Seva PCC', 'State Police Portal PCC', 'Document Verification', 'Appointment Booking', 'Status Tracking'],
    subServicesHi: ['नया PCC आवेदन', 'पासपोर्ट सेवा PCC', 'राज्य पुलिस पोर्टल PCC', 'दस्तावेज सत्यापन', 'अपॉइंटमेंट बुकिंग', 'स्थिति ट्रैकिंग'],
    documentsEn: ['Aadhaar Card', 'Passport (if international)', 'Proof of Address', 'Current Address Proof', 'Passport size photograph'],
    documentsHi: ['आधार कार्ड', 'पासपोर्ट (यदि अंतर्राष्ट्रीय है)', 'पते का प्रमाण', 'वर्तमान पते का प्रमाण', 'पासपोर्ट साइज फोटो']
  },
  passportImmigration: {
    id: 'passportImmigration',
    icon: '🛂',
    nameKey: 'services.passportImmigration',
    descKey: 'services.passportImmigration.desc',
    briefEn: 'Passport Emigration (ECR/Non-ECR) services ensure smooth international travel clearance for Indian citizens traveling abroad for work or residency. We help verify your passport\'s ECR (Emigration Check Required) status, apply for Emigration Clearance (EC) via the eMigrate portal, and ensure compliance with Ministry of External Affairs regulations.',
    briefHi: 'पासपोर्ट इमिग्रेशन/उत्प्रवास (ECR/Non-ECR) सेवाएं काम या निवास के लिए विदेश यात्रा करने वाले भारतीय नागरिकों के लिए सुचारू अंतरराष्ट्रीय यात्रा मंजूरी सुनिश्चित करती हैं। हम आपके पासपोर्ट की ECR (उत्प्रवास जांच आवश्यक) स्थिति को सत्यापित करने, eMigrate पोर्टल के माध्यम से उत्प्रवास मंजूरी (EC) के लिए आवेदन करने और विदेश मंत्रालय के नियमों का अनुपालन सुनिश्चित करने में मदद करते हैं।',
    subServicesEn: ['ECR / Non-ECR Status Check', 'eMigrate Portal Registration', 'Emigration Clearance (EC) Application', 'Document Attestation Assistance', 'Employer Verification Check', 'Pre-Departure Orientation Training Help'],
    subServicesHi: ['ECR / Non-ECR स्थिति जांच', 'eMigrate पोर्टल पंजीकरण', 'उत्प्रवास मंजूरी (EC) आवेदन', 'दस्तावेज सत्यापन एवं सत्यापन सहायता', 'नियोक्ता सत्यापन जांच', 'प्रस्थान-पूर्व ओरिएंटेशन प्रशिक्षण सहायता'],
    documentsEn: ['Passport (Original & Copy)', 'Employment Contract / Offer Letter', 'Visa Copy', 'Aadhaar Card', 'Passport size photographs'],
    documentsHi: ['पासपोर्ट (मूल और प्रति)', 'रोजगार अनुबंध / प्रस्ताव पत्र', 'वीजा प्रति', 'आधार कार्ड', 'पासपोर्ट साइज फोटो']
  },
  airTicket: {
    id: 'airTicket',
    icon: '✈️',
    nameKey: 'services.airTicket',
    descKey: 'services.airTicket.desc',
    briefEn: 'Book domestic and international flight tickets to destinations worldwide at competitive rates. We compare prices across all major airlines, find the best deals, assist with baggage selection, seat reservation, web check-in, and manage ticket cancellations or rescheduling.',
    briefHi: 'प्रतिस्पर्धी दरों पर दुनिया भर के गंतव्यों के लिए घरेलू और अंतर्राष्ट्रीय उड़ान टिकट बुक करें। हम सभी प्रमुख एयरलाइनों के किराए की तुलना करते हैं, सर्वोत्तम डील ढूंढते हैं, सामान चयन, सीट आरक्षण, वेब चेक-इन में सहायता करते हैं, और टिकट रद्दीकरण या रिशेड्यूलिंग का प्रबंधन करते हैं।',
    subServicesEn: ['Domestic Flight Booking', 'International Flight Booking', 'Instant Ticket Printing', 'Web Check-in & Boarding Pass', 'Seat & Meal Selection', 'Baggage Allowance Assistance', 'Refund & Cancellation Management'],
    subServicesHi: ['घरेलू उड़ान बुकिंग', 'अंतरराष्ट्रीय उड़ान बुकिंग', 'तत्काल टिकट प्रिंटिंग', 'वेब चेक-इन और बोर्डिंग पास', 'सीट और भोजन चयन', 'सामान भत्ता सहायता', 'रिफंड और रद्दीकरण प्रबंधन'],
    documentsEn: ['Valid ID Proof (Aadhaar/Voter ID)', 'Passport (for international flights)', 'Travel Dates and Destination Details'],
    documentsHi: ['वैध पहचान प्रमाण (आधार/वोटर आईडी)', 'पासपोर्ट (अंतरराष्ट्रीय उड़ानों के लिए)', 'यात्रा की तिथियां और गंतव्य विवरण']
  },
  tourPackage: {
    id: 'tourPackage',
    icon: '🏖️',
    nameKey: 'services.tourPackage',
    descKey: 'services.tourPackage.desc',
    briefEn: 'Plan your dream vacation, family holiday, or sacred pilgrimage with our curated tour packages. We partner with authorized travel operators to offer budget-friendly and premium travel packages including accommodation, sightseeing, transportation, and custom itineraries for both domestic and international destinations.',
    briefHi: 'हमारे द्वारा तैयार किए गए टूर पैकेजों के साथ अपने सपनों की छुट्टी, पारिवारिक छुट्टी या पवित्र तीर्थयात्रा की योजना बनाएं। हम घरेलू और अंतर्राष्ट्रीय दोनों गंतव्यों के लिए आवास, दर्शनीय स्थलों की यात्रा, परिवहन और कस्टम यात्रा कार्यक्रमों सहित बजट-अनुकूल और प्रीमियम यात्रा पैकेजों की पेशकश करने के लिए अधिकृत ट्रैवल ऑपरेटरों के साथ साझेदारी करते हैं।',
    subServicesEn: ['Domestic Tour Packages', 'Sacred Pilgrimage / Yatra Packages', 'International Holiday Packages', 'Custom Itinerary Planning', 'Hotel & Transport Booking', 'Group Tour Bookings'],
    subServicesHi: ['घरेलू टूर पैकेज', 'पवित्र तीर्थयात्रा / यात्रा पैकेज', 'अंतर्राष्ट्रीय अवकाश पैकेज', 'अनुकूलित यात्रा कार्यक्रम योजना', 'होटल और परिवहन बुकिंग', 'ग्रुप टूर बुकिंग'],
    documentsEn: ['Aadhaar Card of all travelers', 'Passport (for international tours)', 'Specific travel requirements / details'],
    documentsHi: ['सभी यात्रियों के आधार कार्ड', 'पासपोर्ट (अंतरराष्ट्रीय दौरों के लिए)', 'विशिष्ट यात्रा आवश्यकताएं / विवरण']
  },
  visaAssistance: {
    id: 'visaAssistance',
    icon: '🛂',
    nameKey: 'services.visaAssistance',
    descKey: 'services.visaAssistance.desc',
    briefEn: 'Applying for a visa can be complex and time-consuming. We provide end-to-end support for tourist, business, student, and transit visa applications. Our team assists with form filling, document checklist compliance, appointment scheduling, visa fee payments, and interview preparation for major countries.',
    briefHi: 'वीजा के लिए आवेदन करना जटिल और समय लेने वाला हो सकता है। हम पर्यटक, व्यवसाय, छात्र और पारगमन वीजा आवेदनों के लिए शुरू से अंत तक सहायता प्रदान करते हैं। हमारी टीम प्रमुख देशों के लिए फॉर्म भरने, दस्तावेज चेकलिस्ट अनुपालन, अपॉइंटमेंट शेड्यूलिंग, वीजा शुल्क भुगतान और साक्षात्कार की तैयारी में सहायता करती है।',
    subServicesEn: ['Tourist Visa Application', 'Business Visa Application', 'Student Visa Documentation Support', 'Online Visa Form Filling', 'Document Checklist & Formatting', 'Visa Fee Payment', 'Embassy Appointment Booking', 'Mock Interview Guidance'],
    subServicesHi: ['पर्यटक वीजा आवेदन', 'व्यवसाय वीजा आवेदन', 'छात्र वीजा दस्तावेज सहायता', 'ऑनलाइन वीजा फॉर्म भरना', 'दस्तावेज चेकलिस्ट और प्रारूपण', 'वीजा शुल्क भुगतान', 'दूतावास अपॉइंटमेंट बुकिंग', 'साक्षात्कार मार्गदर्शन'],
    documentsEn: ['Valid Passport (at least 6 months validity)', 'Passport size photographs (specific criteria)', 'Flight itinerary & Hotel booking', 'Bank Statements (Proof of Funds)', 'Employment / Business Proof', 'Invitation Letter (if applicable)'],
    documentsHi: ['वैध पासपोर्ट (कम से कम 6 महीने की वैधता)', 'पासपोर्ट साइज फोटो (विशिष्ट मानदंड)', 'उड़ान कार्यक्रम और होटल बुकिंग', 'बैंक स्टेटमेंट (धन का प्रमाण)', 'रोजगार / व्यवसाय का प्रमाण', 'निमंत्रण पत्र (यदि लागू हो)']
  },
  farmerSubsidy: {
    id: 'farmerSubsidy',
    icon: '🚜',
    nameKey: 'services.farmerSubsidy',
    descKey: 'services.farmerSubsidy.desc',
    briefEn: 'The Government offers significant subsidies to farmers for purchasing high-quality seeds, fertilizers, pesticides, and modern agricultural machinery (tractors, tillers, irrigation pumps, etc.) under various DBT (Direct Benefit Transfer) schemes. We assist farmers in registering on the DBT Agriculture portal, applying for subsidies, submitting land details, and tracking credit status.',
    briefHi: 'सरकार विभिन्न डीबीटी (प्रत्यक्ष लाभ हस्तांतरण) योजनाओं के तहत उच्च गुणवत्ता वाले बीज, उर्वरक, कीटनाशकों और आधुनिक कृषि मशीनरी (ट्रैक्टर, टिलर, सिंचाई पंप आदि) खरीदने के लिए किसानों को महत्वपूर्ण सब्सिडी प्रदान करती है। हम किसानों को डीबीटी कृषि पोर्टल पर पंजीकरण करने, सब्सिडी के लिए आवेदन करने, भूमि विवरण जमा करने और क्रेडिट स्थिति को ट्रैक करने में सहायता करते हैं।',
    subServicesEn: ['Subsidy on Certified Seeds', 'Subsidy on Organic & Chemical Pesticides', 'Agricultural Implements Subsidy (Tractors, Pumps, etc.)', 'DBT Agriculture Portal Registration', 'Subsidy Application Submission', 'Application Status Tracking'],
    subServicesHi: ['प्रमाणित बीजों पर अनुदान', 'जैविक और रासायनिक कीटनाशकों पर अनुदान', 'कृषि यंत्रों पर अनुदान (ट्रैक्टर, पंप, आदि)', 'डीबीटी कृषि पोर्टल पंजीकरण', 'अनुदान आवेदन जमा करना', 'आवेदन स्थिति ट्रैकिंग'],
    documentsEn: ['Aadhaar Card', 'Bank Passbook (linked with Aadhaar)', 'Land Record (Khatauni)', 'Mobile Number (for OTP verification)', 'Farmer Registration Number'],
    documentsHi: ['आधार कार्ड', 'बैंक पासबुक (आधार से लिंक)', 'भूमि रिकॉर्ड (खतौनी)', 'मोबाइल नंबर (OTP सत्यापन के लिए)', 'किसान पंजीकरण संख्या']
  },
  farmerRegistry: {
    id: 'farmerRegistry',
    icon: '📝',
    nameKey: 'services.farmerRegistry',
    descKey: 'services.farmerRegistry.desc',
    briefEn: 'The Farmer Registry (Farmer ID) is a landmark initiative of the government to create a centralized, verified digital repository of all farmers and their landholdings. A unique digital Farmer ID is generated, which acts as a single-window credential for all agricultural schemes, credit, and subsidies. We assist in creating new registry profiles, resolving data mismatches, and linking missing land accounts.',
    briefHi: 'फार्मर रजिस्ट्री (किसान आईडी) सभी किसानों और उनकी जोतों का एक केंद्रीकृत, सत्यापित डिजिटल रिपोजिटरी बनाने के लिए सरकार की एक ऐतिहासिक पहल है। एक विशिष्ट डिजिटल किसान आईडी उत्पन्न होती है, जो सभी कृषि योजनाओं, ऋण और सब्सिडी के लिए एकल-खिड़की क्रेडेंशियल के रूप में कार्य करती है। हम नए रजिस्ट्री प्रोफाइल बनाने, डेटा विसंगतियों को हल करने और छूटे हुए भूमि खातों को जोड़ने में सहायता करते हैं।',
    subServicesEn: ['New Farmer Registry Profile', 'Digital Farmer ID Creation', 'Linking Missing Land Accounts (छूटे खाते जोड़ना)', 'Landholding Record Verification', 'Aadhaar & Land Mismatch Correction', 'Farmer Registry Certificate Download'],
    subServicesHi: ['नया फार्मर रजिस्ट्री प्रोफाइल', 'डिजिटल किसान आईडी निर्माण', 'छूटे हुए भूमि खातों को जोड़ना', 'जोत रिकॉर्ड सत्यापन', 'आधार और भूमि बेमेल सुधार', 'फार्मर रजिस्ट्री प्रमाण पत्र डाउनलोड'],
    documentsEn: ['Aadhaar Card', 'Land Record (Khatauni)', 'Bank Passbook', 'Active Mobile Number linked with Aadhaar'],
    documentsHi: ['आधार कार्ड', 'भूमि रिकॉर्ड (खतौनी)', 'बैंक पासबुक', 'आधार से लिंक सक्रिय मोबाइल नंबर']
  }
};
