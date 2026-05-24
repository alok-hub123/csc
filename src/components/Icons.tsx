import React from 'react';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// Helper base SVG wrapper to maintain strict layout consistency
const BaseIcon = ({
  size = 24,
  stroke = 'currentColor',
  strokeWidth = 1.75,
  fill = 'none',
  children,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={fill}
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {children}
  </svg>
);

// 1. Aadhaar Card Icon
export const AadhaarIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="2.5" />
    <path d="M5 16c0-2 2-3 4-3s4 1 4 3" />
    <line x1="15" y1="9" x2="19" y2="9" />
    <line x1="15" y1="12" x2="19" y2="12" />
    <line x1="15" y1="15" x2="18" y2="15" />
  </BaseIcon>
);

// 2. PAN Card Icon
export const PanIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M6 9h4v6H6z" />
    <line x1="13" y1="9" x2="18" y2="9" />
    <line x1="13" y1="12" x2="18" y2="12" />
    <line x1="13" y1="15" x2="16" y2="15" />
    <circle cx="8" cy="12" r="1" />
  </BaseIcon>
);

// 3. Certificates Icon
export const CertificatesIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </BaseIcon>
);

// 4. Passport Icon
export const PassportIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    <circle cx="12" cy="9" r="3" />
    <path d="M12 6a7 7 0 0 0-4 3" />
    <path d="M16 9a7 7 0 0 0-4-3" />
    <line x1="10" y1="14" x2="14" y2="14" />
  </BaseIcon>
);

// 5. Voter ID Icon
export const VoterIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M9 12l2 2 4-4" />
    <path d="M12 3v4" />
    <path d="M8 7h8" />
  </BaseIcon>
);

// 6. Ration Card / Grain Icon
export const RationIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 2v20" />
    <path d="M17 5c-3 0-5 3-5 5s2 5 5 5 5-3 5-5-2-5-5-5z" fill="none" />
    <path d="M7 9c-3 0-5 3-5 5s2 5 5 5 5-3 5-5-2-5-5-5z" fill="none" />
    <circle cx="12" cy="7" r="1" fill="currentColor" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
    <circle cx="12" cy="17" r="1" fill="currentColor" />
  </BaseIcon>
);

// 7. CM Yuva / Business Briefcase
export const CmYuvaIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    <line x1="2" y1="12" x2="22" y2="12" />
  </BaseIcon>
);

// 8. Udyam MSME / Factory
export const UdyamIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M2 20h20M5 17V9l4 4V9l4 4V9l4 4v4H5z" />
    <rect x="7" y="17" width="2" height="3" />
    <rect x="11" y="17" width="2" height="3" />
    <rect x="15" y="17" width="2" height="3" />
  </BaseIcon>
);

// 9. Driving License / Car
export const DrivingIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11 2 11.2 2 11.5V16c0 .6.4 1 1 1h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </BaseIcon>
);

// 10. Labour Card / Construction Helmet
export const LabourIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M2 12a10 10 0 0 1 20 0H2z" />
    <path d="M12 2v10" />
    <path d="M9 4.5a10 10 0 0 1 6 0" />
    <path d="M4 14v4h16v-4" />
  </BaseIcon>
);

// 11. Marriage Certificate / Interlocking Rings
export const MarriageIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="8.5" cy="12.5" r="4.5" />
    <circle cx="15.5" cy="11.5" r="4.5" />
  </BaseIcon>
);

// 12. Virasat / Land Record Scroll
export const VirasatIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 3v5h5" />
    <path d="M16 13H8M16 17H8M10 9H8" />
  </BaseIcon>
);

// 13. Scholarship / Graduation Cap
export const ScholarshipIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c0 2 2.7 3.5 6 3.5s6-1.5 6-3.5v-5" />
  </BaseIcon>
);

// 14. PM Kisan / Plant Sprout
export const PmKisanIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 22V10" />
    <path d="M12 10a6 6 0 0 0-6-6H4v2a6 6 0 0 0 6 6h2z" />
    <path d="M12 14a6 6 0 0 1 6-6h2v2a6 6 0 0 1-6 6h-2z" />
  </BaseIcon>
);

// 15. PCC / Police Clearance Shield
export const PccIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v8" />
    <path d="M9 11h6" />
  </BaseIcon>
);

// 16. Flight / Airplane
export const AirTicketIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M17.8 20.1L21 17l-9.1-3.7-6 6M2 2l11 11M3 21l3-3M22 2l-7.3 7.3" />
    <path d="M21 17L12 9l-9 9 2.5 2.5L9 17l4 4z" />
  </BaseIcon>
);

// 17. Tour Package / Palm Tree Map
export const TourPackageIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 5v4M12 15v4M5 12h4M15 12h4" />
  </BaseIcon>
);

// 18. Visa Assistance / Custom Shield Stamp
export const VisaIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 10h10M7 14h6" />
    <circle cx="17" cy="14" r="1" fill="currentColor" />
  </BaseIcon>
);

// 19. Print Scan / Printer
export const PrintScanIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <polyline points="6 9 6 2 18 2 18 9" />
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
    <rect x="6" y="14" width="12" height="8" />
  </BaseIcon>
);

// 20. Banking Correspondent / Bank Facade
export const BankingIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="18" width="20" height="4" rx="1" />
    <path d="M3 10h18v8H3z" />
    <path d="M12 2L2 10h20L12 2z" />
    <line x1="6" y1="10" x2="6" y2="18" />
    <line x1="10" y1="10" x2="10" y2="18" />
    <line x1="14" y1="10" x2="14" y2="18" />
    <line x1="18" y1="10" x2="18" y2="18" />
  </BaseIcon>
);

// 21. Insurance / Shield Heart
export const InsuranceIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 14.5c-.8-.8-2-1-2.8-.2-.8.8-.8 2 0 2.8l2.8 2.8 2.8-2.8c.8-.8.8-2 0-2.8-.8-.8-2-.6-2.8.2z" />
  </BaseIcon>
);

// 22. Pension / Safe Vault Lock
export const PensionIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 3v6" />
    <path d="M12 15v6" />
    <path d="M3 12h6" />
    <path d="M15 12h6" />
  </BaseIcon>
);

// 23. Mudra Loan / Coins
export const MudraIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="8" cy="8" r="5" />
    <circle cx="16" cy="16" r="5" />
    <path d="M12 8v8" />
    <path d="M8 12h8" />
  </BaseIcon>
);

// 24. ITR Filing / Document Chart
export const ItrIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <path d="M8 13h4M8 17h8M8 9h1" />
  </BaseIcon>
);

// 25. GST Registration / Tax Invoice
export const GstIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M12 7v10" />
    <path d="M9 10h6" />
    <line x1="8" y1="14" x2="16" y2="14" />
  </BaseIcon>
);

// 26. e-KCC / Farm Credit Card
export const EkccIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <line x1="2" y1="10" x2="22" y2="10" />
    <path d="M5 14h3" />
    <path d="M14 14a2 2 0 0 0-2-2H10v4h2a2 2 0 0 0 2-2z" />
  </BaseIcon>
);

// 27. EPF Account / Savings Bag
export const EpfIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <circle cx="12" cy="12" r="4" />
    <path d="M12 8v4l3 3" />
  </BaseIcon>
);

// 28. Utility Bill Pay / Bulb
export const BillpayIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .5 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <line x1="9" y1="18" x2="15" y2="18" />
    <line x1="10" y1="22" x2="14" y2="22" />
  </BaseIcon>
);

// 29. Mobile Recharge / Smartphone
export const RechargeIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12" y2="18.01" strokeWidth="3" />
    <path d="M9 6h6M9 9h3" />
  </BaseIcon>
);

// 30. Ticket Booking / Train ticket
export const TicketIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M6 5v14M18 5v14" />
    <circle cx="12" cy="12" r="2" />
  </BaseIcon>
);

// 31. Ayushman Card / Plus Emblem
export const AyushmanIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v8M9 12h6" />
  </BaseIcon>
);

// 32. Telemedicine / Stethoscope
export const TelemedicineIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M4.5 16.5c-1.5-1.5-2.5-3.5-2.5-6a8 8 0 0 1 16 0 8 8 0 0 1-5 7.5" />
    <circle cx="12" cy="18" r="2" />
    <path d="M12 12v4" />
    <circle cx="18" cy="10.5" r="1.5" />
  </BaseIcon>
);

// 33. Digital Health / Pill Capsule
export const DigiHealthIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="2" y="9" width="20" height="6" rx="3" transform="rotate(-45 12 12)" />
    <line x1="8.5" y1="15.5" x2="15.5" y2="8.5" />
  </BaseIcon>
);

// 34. Farmer Subsidy / Tractor Sprout
export const FarmerSubsidyIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="7" cy="17" r="3" />
    <circle cx="18" cy="17" r="3" />
    <path d="M10 17h5v-5H9v2h3M15 15h4v-3h-4M9 10l3-3 3 3" />
  </BaseIcon>
);

// 35. Farmer Registry / Notebook
export const FarmerRegistryIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M14 2H6a2 2 0 0 0-2 2v16c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
    <path d="M14 3v5h5M12 13H8M12 17H8M9 9H8" />
  </BaseIcon>
);

// --- UI Utility Icons ---

// Search
export const SearchIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </BaseIcon>
);

// Pin / Location
export const MapPinIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </BaseIcon>
);

// Phone
export const PhoneIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </BaseIcon>
);

// Chat / WhatsApp
export const WhatsAppIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </BaseIcon>
);

// Calendar
export const CalendarIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </BaseIcon>
);

// Clock
export const ClockIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </BaseIcon>
);

// Speed / Sparkles
export const SparklesIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </BaseIcon>
);

// Shield Lock
export const LockIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
  </BaseIcon>
);

// Expert Support / Headset
export const HeadsetIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </BaseIcon>
);

// Arrow Right / Caret Right
export const ChevronRightIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <polyline points="9 18 15 12 9 6" />
  </BaseIcon>
);

// Star / Rating
export const StarIcon = ({ fill = 'currentColor', ...props }: IconProps) => (
  <BaseIcon fill={fill} {...props}>
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </BaseIcon>
);

// Government Icon / Temple Facade
export const GovtIcon = (props: IconProps) => (
  <BaseIcon {...props}>
    <line x1="4" y1="22" x2="20" y2="22" />
    <line x1="4" y1="11" x2="20" y2="11" />
    <polygon points="12 2 2 11 22 11" />
    <line x1="6" y1="11" x2="6" y2="22" />
    <line x1="10" y1="11" x2="10" y2="22" />
    <line x1="14" y1="11" x2="14" y2="22" />
    <line x1="18" y1="11" x2="18" y2="22" />
  </BaseIcon>
);

// Mapping dynamic keys to SVG components for services search/grid
export const serviceIconMap: Record<string, React.ComponentType<IconProps>> = {
  aadhaar: AadhaarIcon,
  pan: PanIcon,
  certificates: CertificatesIcon,
  passport: PassportIcon,
  voter: VoterIcon,
  ration: RationIcon,
  cmyuva: CmYuvaIcon,
  udyam: UdyamIcon,
  driving: DrivingIcon,
  labour: LabourIcon,
  marriage: MarriageIcon,
  virasat: VirasatIcon,
  scholarship: ScholarshipIcon,
  pmkisan: PmKisanIcon,
  pcc: PccIcon,
  passportImmigration: PassportIcon,
  farmerSubsidy: FarmerSubsidyIcon,
  farmerRegistry: FarmerRegistryIcon,
  banking: BankingIcon,
  insurance: InsuranceIcon,
  pension: PensionIcon,
  mudra: MudraIcon,
  itr: ItrIcon,
  gst: GstIcon,
  ekcc: EkccIcon,
  epf: EpfIcon,
  billpay: BillpayIcon,
  recharge: RechargeIcon,
  ticket: TicketIcon,
  airTicket: AirTicketIcon,
  tourPackage: TourPackageIcon,
  visaAssistance: VisaIcon,
  printScan: PrintScanIcon,
  ayushman: AyushmanIcon,
  telemedicine: TelemedicineIcon,
  digiHealth: DigiHealthIcon,
};
