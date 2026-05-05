export interface ServiceDetail {
  id: string;
  icon: string;
  nameKey: string;
  descKey: string;
  documentsEn: string[];
  documentsHi: string[];
}

export const servicesData: Record<string, ServiceDetail> = {
  aadhaar: {
    id: 'aadhaar',
    icon: '🆔',
    nameKey: 'services.aadhaar',
    descKey: 'services.aadhaar.desc',
    documentsEn: ['Aadhaar Form (if new)', 'Proof of Identity (POI)', 'Proof of Address (POA)', 'Proof of Date of Birth (PDB)'],
    documentsHi: ['आधार फॉर्म (यदि नया है)', 'पहचान का प्रमाण (POI)', 'पते का प्रमाण (POA)', 'जन्म तिथि का प्रमाण (PDB)']
  },
  pan: {
    id: 'pan',
    icon: '💳',
    nameKey: 'services.pan',
    descKey: 'services.pan.desc',
    documentsEn: ['Aadhaar Card', 'Passport size photograph', 'Signature on white paper'],
    documentsHi: ['आधार कार्ड', 'पासपोर्ट साइज फोटो', 'सफेद कागज पर हस्ताक्षर']
  },
  certificates: {
    id: 'certificates',
    icon: '📄',
    nameKey: 'services.certificates',
    descKey: 'services.certificates.desc',
    documentsEn: ['Aadhaar Card', 'Ration Card / Voter ID', 'Self Declaration Form', 'Photograph'],
    documentsHi: ['आधार कार्ड', 'राशन कार्ड / वोटर आईडी', 'स्व-घोषणा पत्र', 'फोटोग्राफ']
  },
  passport: {
    id: 'passport',
    icon: '🛂',
    nameKey: 'services.passport',
    descKey: 'services.passport.desc',
    documentsEn: ['Aadhaar Card', '10th Marksheet', 'Voter ID or PAN Card', 'Electricity Bill / Bank Passbook'],
    documentsHi: ['आधार कार्ड', '10वीं की मार्कशीट', 'वोटर आईडी या पैन कार्ड', 'बिजली बिल / बैंक पासबुक']
  },
  voter: {
    id: 'voter',
    icon: '🗳️',
    nameKey: 'services.voter',
    descKey: 'services.voter.desc',
    documentsEn: ['Aadhaar Card', 'Passport size photograph', 'Age proof (Birth Certificate/10th Marksheet)'],
    documentsHi: ['आधार कार्ड', 'पासपोर्ट साइज फोटो', 'आयु प्रमाण (जन्म प्रमाण पत्र/10वीं की मार्कशीट)']
  },
  ration: {
    id: 'ration',
    icon: '🍚',
    nameKey: 'services.ration',
    descKey: 'services.ration.desc',
    documentsEn: ['Aadhaar Cards of all family members', 'Income Certificate', 'Passport size photograph of head of family', 'Bank Passbook'],
    documentsHi: ['परिवार के सभी सदस्यों के आधार कार्ड', 'आय प्रमाण पत्र', 'परिवार के मुखिया की पासपोर्ट साइज फोटो', 'बैंक पासबुक']
  },
  banking: {
    id: 'banking',
    icon: '🏦',
    nameKey: 'services.banking',
    descKey: 'services.banking.desc',
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Passport size photograph'],
    documentsHi: ['आधार कार्ड', 'पैन कार्ड', 'पासपोर्ट साइज फोटो']
  },
  insurance: {
    id: 'insurance',
    icon: '🛡️',
    nameKey: 'services.insurance',
    descKey: 'services.insurance.desc',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Nominee Aadhaar Card'],
    documentsHi: ['आधार कार्ड', 'बैंक पासबुक', 'नॉमिनी आधार कार्ड']
  },
  pension: {
    id: 'pension',
    icon: '👴',
    nameKey: 'services.pension',
    descKey: 'services.pension.desc',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Age Proof'],
    documentsHi: ['आधार कार्ड', 'बैंक पासबुक', 'आयु प्रमाण']
  },
  mudra: {
    id: 'mudra',
    icon: '💰',
    nameKey: 'services.mudra',
    descKey: 'services.mudra.desc',
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Business Proof', 'Bank Statement', 'Photographs'],
    documentsHi: ['आधार कार्ड', 'पैन कार्ड', 'व्यापार प्रमाण', 'बैंक स्टेटमेंट', 'फोटोग्राफ']
  },
  billpay: {
    id: 'billpay',
    icon: '💡',
    nameKey: 'services.billpay',
    descKey: 'services.billpay.desc',
    documentsEn: ['Previous Bill Copy / Consumer Number'],
    documentsHi: ['पिछला बिल कॉपी / उपभोक्ता संख्या']
  },
  recharge: {
    id: 'recharge',
    icon: '📱',
    nameKey: 'services.recharge',
    descKey: 'services.recharge.desc',
    documentsEn: ['Mobile Number / DTH ID'],
    documentsHi: ['मोबाइल नंबर / DTH आईडी']
  },
  ticket: {
    id: 'ticket',
    icon: '🎫',
    nameKey: 'services.ticket',
    descKey: 'services.ticket.desc',
    documentsEn: ['Passenger ID Proof (Aadhaar/Voter ID)', 'Travel Details (Date, Destination)'],
    documentsHi: ['यात्री पहचान प्रमाण (आधार/वोटर आईडी)', 'यात्रा विवरण (तिथि, गंतव्य)']
  },
  printScan: {
    id: 'printScan',
    icon: '🖨️',
    nameKey: 'services.printScan',
    descKey: 'services.printScan.desc',
    documentsEn: ['Original documents or pendrive/email with soft copy'],
    documentsHi: ['मूल दस्तावेज या सॉफ्ट कॉपी के साथ पेनड्राइव/ईमेल']
  },
  ayushman: {
    id: 'ayushman',
    icon: '🏥',
    nameKey: 'services.ayushman',
    descKey: 'services.ayushman.desc',
    documentsEn: ['Ration Card (Antyodaya/Patra Grihasti)', 'Aadhaar Card', 'Active Mobile Number'],
    documentsHi: ['राशन कार्ड (अंत्योदय/पात्र गृहस्थी)', 'आधार कार्ड', 'सक्रिय मोबाइल नंबर']
  },
  telemedicine: {
    id: 'telemedicine',
    icon: '👨‍⚕️',
    nameKey: 'services.telemedicine',
    descKey: 'services.telemedicine.desc',
    documentsEn: ['Aadhaar Card', 'Previous Medical Reports (if any)'],
    documentsHi: ['आधार कार्ड', 'पिछली मेडिकल रिपोर्ट (यदि कोई हो)']
  },
  digiHealth: {
    id: 'digiHealth',
    icon: '💊',
    nameKey: 'services.digiHealth',
    descKey: 'services.digiHealth.desc',
    documentsEn: ['Aadhaar Card linked with Mobile Number'],
    documentsHi: ['आधार कार्ड (मोबाइल नंबर से लिंक)']
  }
};
