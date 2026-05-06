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
  },
  cmyuva: {
    id: 'cmyuva',
    icon: '👨‍💼',
    nameKey: 'services.cmyuva',
    descKey: 'services.cmyuva.desc',
    documentsEn: ['Aadhaar Card', 'Educational Certificates', 'Project Report', 'Bank Details'],
    documentsHi: ['आधार कार्ड', 'शैक्षिक प्रमाण पत्र', 'प्रोजेक्ट रिपोर्ट', 'बैंक विवरण']
  },
  udyam: {
    id: 'udyam',
    icon: '🏭',
    nameKey: 'services.udyam',
    descKey: 'services.udyam.desc',
    documentsEn: ['Aadhaar Card', 'PAN Card', 'Bank Account Details'],
    documentsHi: ['आधार कार्ड', 'पैन कार्ड', 'बैंक खाता विवरण']
  },
  driving: {
    id: 'driving',
    icon: '🚗',
    nameKey: 'services.driving',
    descKey: 'services.driving.desc',
    documentsEn: ['Aadhaar Card', 'Age Proof', 'Address Proof', 'Passport Size Photo'],
    documentsHi: ['आधार कार्ड', 'आयु प्रमाण', 'पते का प्रमाण', 'पासपोर्ट साइज फोटो']
  },
  labour: {
    id: 'labour',
    icon: '👷',
    nameKey: 'services.labour',
    descKey: 'services.labour.desc',
    documentsEn: ['Aadhaar Card', 'Bank Passbook', 'Nominee Aadhaar', 'Passport Size Photo'],
    documentsHi: ['आधार कार्ड', 'बैंक पासबुक', 'नॉमिनी आधार', 'पासपोर्ट साइज फोटो']
  },
  marriage: {
    id: 'marriage',
    icon: '💍',
    nameKey: 'services.marriage',
    descKey: 'services.marriage.desc',
    documentsEn: ['Aadhaar Card (Husband & Wife)', 'Wedding Photo', 'Age Proof'],
    documentsHi: ['आधार कार्ड (पति और पत्नी)', 'शादी की तस्वीर', 'आयु प्रमाण']
  },
  virasat: {
    id: 'virasat',
    icon: '📜',
    nameKey: 'services.virasat',
    descKey: 'services.virasat.desc',
    documentsEn: ['Death Certificate', 'Family Register Copy', 'Aadhaar of Heirs', 'Khatauni'],
    documentsHi: ['मृत्यु प्रमाण पत्र', 'परिवार रजिस्टर की नकल', 'वारिसों का आधार', 'खतौनी']
  },
  scholarship: {
    id: 'scholarship',
    icon: '🎓',
    nameKey: 'services.scholarship',
    descKey: 'services.scholarship.desc',
    documentsEn: ['Aadhaar Card', 'Income Certificate', 'Caste Certificate', 'Bank Passbook', 'Previous Marksheet'],
    documentsHi: ['आधार कार्ड', 'आय प्रमाण पत्र', 'जाति प्रमाण पत्र', 'बैंक पासबुक', 'पिछली मार्कशीट']
  },
  pmkisan: {
    id: 'pmkisan',
    icon: '🌾',
    nameKey: 'services.pmkisan',
    descKey: 'services.pmkisan.desc',
    documentsEn: ['Aadhaar Card', 'Khatauni (Land Record)', 'Bank Passbook'],
    documentsHi: ['आधार कार्ड', 'खतौनी (भूमि रिकॉर्ड)', 'बैंक पासबुक']
  },
  itr: {
    id: 'itr',
    icon: '📊',
    nameKey: 'services.itr',
    descKey: 'services.itr.desc',
    documentsEn: ['PAN Card', 'Aadhaar Card', 'Bank Statements', 'Form 16 (if salaried)'],
    documentsHi: ['पैन कार्ड', 'आधार कार्ड', 'बैंक स्टेटमेंट', 'फॉर्म 16 (यदि वेतनभोगी हैं)']
  },
  gst: {
    id: 'gst',
    icon: '🧾',
    nameKey: 'services.gst',
    descKey: 'services.gst.desc',
    documentsEn: ['PAN Card', 'Aadhaar Card', 'Business Address Proof', 'Bank Statement'],
    documentsHi: ['पैन कार्ड', 'आधार कार्ड', 'व्यावसायिक पते का प्रमाण', 'बैंक स्टेटमेंट']
  },
  ekcc: {
    id: 'ekcc',
    icon: '💳',
    nameKey: 'services.ekcc',
    descKey: 'services.ekcc.desc',
    documentsEn: ['Aadhaar Card', 'Khatauni', 'Bank Passbook', 'Passport Size Photo'],
    documentsHi: ['आधार कार्ड', 'खतौनी', 'बैंक पासबुक', 'पासपोर्ट साइज फोटो']
  },
  epf: {
    id: 'epf',
    icon: '💼',
    nameKey: 'services.epf',
    descKey: 'services.epf.desc',
    documentsEn: ['UAN Number', 'Aadhaar Card', 'PAN Card', 'Bank Passbook'],
    documentsHi: ['UAN नंबर', 'आधार कार्ड', 'पैन कार्ड', 'बैंक पासबुक']
  }
};
