import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';
import { serviceIconMap, SearchIcon } from './Icons';

export default function ServicesPage() {
  const { t, lang } = useLang();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  const categories = [
    {
      title: t('services.central'),
      items: [
        { id: 'pmkisan', icon: '🌾', name: t('services.pmkisan'), desc: t('services.pmkisan.desc') },
        { id: 'ayushman', icon: '🏥', name: t('services.ayushman'), desc: t('services.ayushman.desc') },
        { id: 'eshram', icon: '👷‍♂️', name: t('services.eshram'), desc: t('services.eshram.desc') },
        { id: 'telelaw', icon: '⚖️', name: t('services.telelaw'), desc: t('services.telelaw.desc') },
        { id: 'disability', icon: '🦽', name: t('services.disability'), desc: t('services.disability.desc') },
        { id: 'railwayConcession', icon: '🚆', name: t('services.railwayConcession'), desc: t('services.railwayConcession.desc') },
        { id: 'telemedicine', icon: '👨‍⚕️', name: t('services.telemedicine'), desc: t('services.telemedicine.desc') },
        { id: 'ecourt', icon: '🏛️', name: t('services.ecourt'), desc: t('services.ecourt.desc') },
        { id: 'pan', icon: '💳', name: t('services.pan'), desc: t('services.pan.desc') },
        { id: 'itr', icon: '📊', name: t('services.itr'), desc: t('services.itr.desc') },
        { id: 'gst', icon: '🧾', name: t('services.gst'), desc: t('services.gst.desc') },
        { id: 'insurance', icon: '🛡️', name: t('services.insurance'), desc: t('services.insurance.desc') },
        { id: 'passport', icon: '🛂', name: t('services.passport'), desc: t('services.passport.desc') },
        { id: 'pcc', icon: '👮', name: t('services.pcc'), desc: t('services.pcc.desc') },
        { id: 'passportImmigration', icon: '🛂', name: t('services.passportImmigration'), desc: t('services.passportImmigration.desc') },
        { id: 'udyam', icon: '🏭', name: t('services.udyam'), desc: t('services.udyam.desc') },
        { id: 'fssai', icon: '🍽️', name: t('services.fssai'), desc: t('services.fssai.desc') },
        { id: 'driving', icon: '🚗', name: t('services.driving'), desc: t('services.driving.desc') },
        { id: 'echallan', icon: '🚦', name: t('services.echallan'), desc: t('services.echallan.desc') },
        { id: 'roadtax', icon: '🛣️', name: t('services.roadtax'), desc: t('services.roadtax.desc') },
        { id: 'vehiclePermit', icon: '🚚', name: t('services.vehiclePermit'), desc: t('services.vehiclePermit.desc') },
        { id: 'recruitmentExams', icon: '📝', name: t('services.recruitmentExams'), desc: t('services.recruitmentExams.desc') },
        { id: 'vehicleTransfer', icon: '🔄', name: t('services.vehicleTransfer'), desc: t('services.vehicleTransfer.desc') },
        { id: 'swachhBharat', icon: '🚽', name: t('services.swachhBharat'), desc: t('services.swachhBharat.desc') },
        { id: 'pmay', icon: '🏠', name: t('services.pmay'), desc: t('services.pmay.desc') },
        { id: 'jeevanPramaan', icon: '🪪', name: t('services.jeevanPramaan'), desc: t('services.jeevanPramaan.desc') },
        { id: 'gasEkyc', icon: '🔥', name: t('services.gasEkyc'), desc: t('services.gasEkyc.desc') },
        { id: 'pmsym', icon: '👷', name: t('services.pmsym'), desc: t('services.pmsym.desc') },
        { id: 'pmkmy', icon: '🧑‍🌾', name: t('services.pmkmy'), desc: t('services.pmkmy.desc') },
        { id: 'pmlvmy', icon: '🏪', name: t('services.pmlvmy'), desc: t('services.pmlvmy.desc') },
        { id: 'pmsvanidhi', icon: '🛒', name: t('services.pmsvanidhi'), desc: t('services.pmsvanidhi.desc') },
        { id: 'pmvishwakarma', icon: '🔨', name: t('services.pmvishwakarma'), desc: t('services.pmvishwakarma.desc') },
        { id: 'pmfby', icon: '🌱', name: t('services.pmfby'), desc: t('services.pmfby.desc') },
      ],
    },
    {
      title: t('services.state'),
      items: [
        { id: 'incomeCertificate', icon: '📄', name: t('services.incomeCertificate'), desc: t('services.incomeCertificate.desc') },
        { id: 'casteCertificate', icon: '📜', name: t('services.casteCertificate'), desc: t('services.casteCertificate.desc') },
        { id: 'domicileCertificate', icon: '🏠', name: t('services.domicileCertificate'), desc: t('services.domicileCertificate.desc') },
        { id: 'netWorthCertificate', icon: '💰', name: t('services.netWorthCertificate'), desc: t('services.netWorthCertificate.desc') },
        { id: 'marriage', icon: '💍', name: t('services.marriage'), desc: t('services.marriage.desc') },
        { id: 'characterCertificate', icon: '👮‍♂️', name: t('services.characterCertificate'), desc: t('services.characterCertificate.desc') },
        { id: 'daughterMarriageGrant', icon: '👰', name: t('services.daughterMarriageGrant'), desc: t('services.daughterMarriageGrant.desc') },
        { id: 'cmCollectiveMarriage', icon: '👫', name: t('services.cmCollectiveMarriage'), desc: t('services.cmCollectiveMarriage.desc') },
        { id: 'oldAgePension', icon: '👵', name: t('services.oldAgePension'), desc: t('services.oldAgePension.desc') },
        { id: 'widowPension', icon: '👩‍🦳', name: t('services.widowPension'), desc: t('services.widowPension.desc') },
        { id: 'disabilityPension', icon: '🦽', name: t('services.disabilityPension'), desc: t('services.disabilityPension.desc') },
        { id: 'familyBenefit', icon: '👨‍👩‍👧‍👦', name: t('services.familyBenefit'), desc: t('services.familyBenefit.desc') },
        { id: 'cmChildService', icon: '👶', name: t('services.cmChildService'), desc: t('services.cmChildService.desc') },
        { id: 'artificialLimbs', icon: '🦾', name: t('services.artificialLimbs'), desc: t('services.artificialLimbs.desc') },
        { id: 'borewell', icon: '💧', name: t('services.borewell'), desc: t('services.borewell.desc') },
        { id: 'newElectricityConnection', icon: '⚡', name: t('services.newElectricityConnection'), desc: t('services.newElectricityConnection.desc') },
        { id: 'cmJanArogya', icon: '🩺', name: t('services.cmJanArogya'), desc: t('services.cmJanArogya.desc') },
        { id: 'labour', icon: '👷', name: t('services.labour'), desc: t('services.labour.desc') },
        { id: 'labourSchemes', icon: '🛠️', name: t('services.labourSchemes'), desc: t('services.labourSchemes.desc') },
        { id: 'ration', icon: '🍚', name: t('services.ration'), desc: t('services.ration.desc') },
        { id: 'billpay', icon: '💡', name: t('services.billpay'), desc: t('services.billpay.desc') },
        { id: 'loanRepayment', icon: '💸', name: t('services.loanRepayment'), desc: t('services.loanRepayment.desc') },
        { id: 'recharge', icon: '📱', name: t('services.recharge'), desc: t('services.recharge.desc') },
        { id: 'pvcPrint', icon: '🖨️', name: t('services.pvcPrint'), desc: t('services.pvcPrint.desc') },
        { id: 'lamination', icon: '🛡️', name: t('services.lamination'), desc: t('services.lamination.desc') },
        { id: 'stateRecruitment', icon: '📝', name: t('services.stateRecruitment'), desc: t('services.stateRecruitment.desc') },
        { id: 'cmyuva', icon: '👨‍💼', name: t('services.cmyuva'), desc: t('services.cmyuva.desc') },
        { id: 'scholarship', icon: '🎓', name: t('services.scholarship'), desc: t('services.scholarship.desc') },
        { id: 'oldAgeShelter', icon: '🏚️', name: t('services.oldAgeShelter'), desc: t('services.oldAgeShelter.desc') },
        { id: 'abhyuday', icon: '👨‍🏫', name: t('services.abhyuday'), desc: t('services.abhyuday.desc') },
        { id: 'preExamCoaching', icon: '📚', name: t('services.preExamCoaching'), desc: t('services.preExamCoaching.desc') },
        { id: 'scHostel', icon: '🏢', name: t('services.scHostel'), desc: t('services.scHostel.desc') },
        { id: 'atrocityAssistance', icon: '🛡️', name: t('services.atrocityAssistance'), desc: t('services.atrocityAssistance.desc') },
        { id: 'scScholarship', icon: '🎓', name: t('services.scScholarship'), desc: t('services.scScholarship.desc') },
        { id: 'farmerRegistry', icon: '📝', name: t('services.farmerRegistry'), desc: t('services.farmerRegistry.desc') },
        { id: 'farmerSubsidy', icon: '🚜', name: t('services.farmerSubsidy'), desc: t('services.farmerSubsidy.desc') },
      ],
    },
    {
      title: t('services.private'),
      items: [
        { id: 'banking', icon: '🏦', name: t('services.banking'), desc: t('services.banking.desc') },
        { id: 'pension', icon: '👴', name: t('services.pension'), desc: t('services.pension.desc') },
        { id: 'tourPackage', icon: '🏖️', name: t('services.tourPackage'), desc: t('services.tourPackage.desc') },
        { id: 'visaAssistance', icon: '🛂', name: t('services.visaAssistance'), desc: t('services.visaAssistance.desc') },
        { id: 'printScan', icon: '🖨️', name: t('services.printScan'), desc: t('services.printScan.desc') },
        { id: 'aadhaar', icon: '🆔', name: t('services.aadhaar'), desc: t('services.aadhaar.desc') },
        { id: 'voter', icon: '🗳️', name: t('services.voter'), desc: t('services.voter.desc') },
        { id: 'mudra', icon: '💰', name: t('services.mudra'), desc: t('services.mudra.desc') },
        { id: 'epf', icon: '💼', name: t('services.epf'), desc: t('services.epf.desc') },
        { id: 'digiHealth', icon: '💊', name: t('services.digiHealth'), desc: t('services.digiHealth.desc') },
        { id: 'ekcc', icon: '💳', name: t('services.ekcc'), desc: t('services.ekcc.desc') },
        { id: 'virasat', icon: '📜', name: t('services.virasat'), desc: t('services.virasat.desc') },
      ],
    },
    {
      title: t('services.other'),
      items: [
        { id: 'vehicleInsurance', icon: '🚗', name: t('services.vehicleInsurance'), desc: t('services.vehicleInsurance.desc') },
        { id: 'ticket', icon: '🎫', name: t('services.ticket'), desc: t('services.ticket.desc') },
        { id: 'airTicket', icon: '✈️', name: t('services.airTicket'), desc: t('services.airTicket.desc') },
        { id: 'pollutionCertificate', icon: '💨', name: t('services.pollutionCertificate'), desc: t('services.pollutionCertificate.desc') },
        { id: 'moneyTransfer', icon: '💸', name: t('services.moneyTransfer'), desc: t('services.moneyTransfer.desc') },
        { id: 'cashWithdrawal', icon: '🏧', name: t('services.cashWithdrawal'), desc: t('services.cashWithdrawal.desc') },
      ],
    },
  ];

  // Always ensure 'All' defaults to t('services.all') on first render or language change
  const currentTab = activeTab === 'All' ? t('services.all') : activeTab;
  const tabs = [t('services.all'), ...categories.map(c => c.title)];

  const displayedCategories = currentTab === t('services.all')
    ? categories
    : categories.filter(c => c.title === currentTab);

  const filteredItems = displayedCategories.flatMap(cat => cat.items).filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.desc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const pastelColors = ['bg-[#FFF3E0]', 'bg-[#DBEAFE]', 'bg-[#D1FAE5]', 'bg-[#E8E0FF]', 'bg-[#FFE4E6]'];

  return (
    <PageTransition>
      <SEO
        title={t('nav.services')}
        description={t('services.subtitle')}
      />
      <div className="min-h-screen bg-[#FFFDF5] relative overflow-x-hidden pt-[136px] pb-24 z-10">

        <section className="px-4 max-w-7xl mx-auto relative z-10" id="services-page">
          <div className="text-center mb-14">
            <span className="brutal-badge mb-4">Service Hub</span>
            <h2 className="section-heading mt-4">{t('services.title')}</h2>
            <p className="text-black/50 font-bold text-sm mt-3 max-w-md mx-auto leading-relaxed">{t('services.subtitle')}</p>
            <div className="w-16 h-1.5 bg-[#FF6B00] mx-auto mt-5 border border-black" />
          </div>

          {/* Filtering and Search Area */}
          <div className="flex flex-col lg:flex-row gap-5 mb-12 items-center justify-between bg-white border-2 border-black p-4 rounded-xl max-w-6xl mx-auto" style={{ boxShadow: '4px 4px 0px 0px #000' }}>

            {/* Tabs Brutalist Style */}
            <div className="flex overflow-x-auto items-center gap-1.5 p-1.5 bg-[#FFFDF5] border-2 border-black rounded-xl w-full lg:w-auto">
              {tabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2.5 rounded-lg font-black text-xs transition-all duration-200 cursor-pointer whitespace-nowrap ${currentTab === tab ? 'bg-[#FF6B00] text-white border-2 border-black' : 'text-black/50 hover:text-black hover:bg-[#FFF3E0]'}`}
                  style={currentTab === tab ? { boxShadow: '2px 2px 0px 0px #000' } : {}}
                >
                  {tab}
                </button>
              ))}
            </div>
            {/* Search Input Box */}
            <div className="relative w-full lg:w-96 flex items-center">
              <input
                type="text"
                placeholder={t('services.search.placeholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="brutal-input pr-12"
              />
              <SearchIcon size={16} className="absolute right-5 text-black/40 pointer-events-none stroke-[2.2]" />
            </div>
          </div>

          {/* Cards Grid */}
          {filteredItems.length === 0 ? (
            <div className="text-center py-20 text-black/50 text-base font-bold max-w-sm mx-auto">
              {lang === 'hi' ? 'कोई सेवा नहीं मिली' : `No services found matching "${searchQuery}"`}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {filteredItems.map((item, idx) => {
                const IconComponent = serviceIconMap[item.id] || SearchIcon;
                const cardBg = pastelColors[idx % pastelColors.length];
                return (
                  <div
                    className="bg-white border-2 border-black rounded-xl p-8 hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all duration-200 relative overflow-hidden group cursor-pointer flex flex-col justify-between"
                    style={{ boxShadow: '4px 4px 0px 0px #000' }}
                    key={item.id}
                    onClick={() => navigate(`/service/${item.id}`)}
                  >
                    <div>
                      <div className={`w-12 h-12 rounded-xl ${cardBg} border-2 border-black flex items-center justify-center mb-6 transition-all duration-200 group-hover:scale-105 text-black`} style={{ boxShadow: '2px 2px 0px 0px #000' }}>
                        <IconComponent size={22} />
                      </div>
                      <h4 className="text-base font-black text-black mb-2 group-hover:text-[#FF6B00] transition-colors">{item.name}</h4>
                      <p className="text-[13px] text-black/50 font-bold leading-relaxed mb-6">{item.desc}</p>
                    </div>

                    <button className="cursor-pointer text-[#FF6B00] font-black text-[11px] uppercase tracking-wider flex items-center gap-1.5 transition-all group-hover:gap-2.5">
                      {t('services.viewDetail')}
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </div>
    </PageTransition>
  );
}

