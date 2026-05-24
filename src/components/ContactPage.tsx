import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';
import { servicesData } from '../data/servicesData';
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from './Icons';

export default function ContactPage() {
  const { t } = useLang();
  const location = useLocation();

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(location.state?.serviceId || '');

  // Replace this URL with your Google Apps Script Web App URL or SheetDB URL
  const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzec2hhA5c5nUf5hlTEz9sDjR679qG8SIiDwyM3naG_KlR7RM3BL4OsPj0MjTwWIXgJgg/exec';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Map 'other' service to the custom input value
    if (formData.get('Service') === 'other') {
      const otherService = formData.get('OtherService');
      if (otherService) {
        formData.set('Service', otherService as string);
      }
      formData.delete('OtherService');
    }

    // Automatically set the status to Pending
    formData.append('Status', 'Pending');

    try {
      // Send data to Google Apps Script
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        body: formData,
      });

      console.log('Form data submitted successfully.');

      setSubmitted(true);
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
      form.reset();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <SEO
        title={t('nav.contact')}
        description={t('contact.subtitle')}
      />
      <div className="min-h-screen bg-[#FFFDF5] relative overflow-x-hidden pt-[136px] pb-24 z-10">

        <section className="px-4 max-w-7xl mx-auto relative z-10" id="contact-page">

          <div className="text-center mb-14">
            <span className="brutal-badge mb-4">Get In Touch</span>
            <h2 className="section-heading mt-4">{t('nav.contact')}</h2>
            <div className="w-16 h-1.5 bg-[#FF6B00] mx-auto mt-5 border border-black" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch max-w-6xl mx-auto">
            {/* Left Column: Contact Info Cards */}
            <div className="flex flex-col h-full justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-lg bg-[#FFF3E0] text-[#FF6B00] text-[10px] font-black uppercase tracking-wider mb-2 border-2 border-black" style={{ boxShadow: '2px 2px 0px 0px #000' }}>Connect</span>
                <h3 className="text-xl md:text-2xl font-black text-black mb-6 leading-tight tracking-tight">{t('contact.subtitle')}</h3>
              </div>

              <div className="flex flex-col gap-4 flex-1 mt-2">
                
                {/* Card 1: Address */}
                <div className="bg-white border-2 border-black p-6 rounded-xl text-center transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 group flex-1 flex flex-col items-center justify-center" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                  <div className="w-12 h-12 rounded-xl bg-[#DBEAFE] border-2 border-black text-black flex items-center justify-center mx-auto mb-4 transition-all group-hover:bg-[#FF6B00] group-hover:text-white">
                    <MapPinIcon size={20} />
                  </div>
                  <h4 className="text-[10px] font-black text-black/50 uppercase tracking-widest mb-2">{t('contact.address.title')}</h4>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Digital+Gramin+Service+Centre+Nauwa+Gaon"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer block text-base text-black font-black leading-relaxed whitespace-pre-line hover:text-[#FF6B00] transition-colors"
                  >
                    {t('contact.address')}
                  </a>
                </div>

                {/* Card 2: Phone */}
                <div className="bg-white border-2 border-black p-6 rounded-xl text-center transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 group flex-1 flex flex-col items-center justify-center" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                  <div className="w-12 h-12 rounded-xl bg-[#FFF3E0] border-2 border-black text-black flex items-center justify-center mx-auto mb-4 transition-all group-hover:bg-[#FF6B00] group-hover:text-white">
                    <PhoneIcon size={18} />
                  </div>
                  <h4 className="text-[10px] font-black text-black/50 uppercase tracking-widest mb-2">{t('contact.phone.title')}</h4>
                  <a href="tel:+917233060698" className="cursor-pointer text-base text-black font-black leading-relaxed whitespace-pre-line hover:text-[#FF6B00] transition-colors">{t('contact.phone')}</a>
                </div>

                {/* Card 3: WhatsApp */}
                <div className="bg-white border-2 border-black p-6 rounded-xl text-center transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 group flex-1 flex flex-col items-center justify-center" style={{ boxShadow: '4px 4px 0px 0px #000' }}>
                  <div className="w-12 h-12 rounded-xl bg-[#D1FAE5] border-2 border-black text-black flex items-center justify-center mx-auto mb-4 transition-all group-hover:bg-[#25D366] group-hover:text-white">
                    <WhatsAppIcon size={18} />
                  </div>
                  <h4 className="text-[10px] font-black text-black/50 uppercase tracking-widest mb-2">{t('contact.whatsapp.title')}</h4>
                  <a
                    href="https://wa.me/917233060698"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer inline-flex items-center gap-2.5 px-6 py-2.5 bg-[#D1FAE5] text-black font-black rounded-xl text-xs transition-all duration-200 hover:bg-[#25D366] hover:text-white border-2 border-black"
                    style={{ boxShadow: '2px 2px 0px 0px #000' }}
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Apply Form */}
            <div className="w-full">
              <span className="inline-block px-3 py-1 rounded-lg bg-[#FFF3E0] text-[#FF6B00] text-[10px] font-black uppercase tracking-wider mb-2 border-2 border-black" style={{ boxShadow: '2px 2px 0px 0px #000' }}>Request</span>
              <h3 className="text-xl md:text-2xl font-black text-black mb-6 leading-tight tracking-tight">{t('apply.title')}</h3>
              
              <form className="bg-white border-2 border-black p-8 md:p-10 rounded-xl space-y-4" style={{ boxShadow: '4px 4px 0px 0px #000' }} onSubmit={handleSubmit} id="apply-form">
                <p className="text-[11px] text-right font-black text-black/40 mb-2 uppercase tracking-wide"><span className="text-red-500">*</span> {t('apply.requiredNote')}</p>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black text-black/50 uppercase tracking-widest ml-1">
                    {t('apply.name')} <span className="text-red-500">*</span>
                  </label>
                  <input name="Name" type="text" required className="brutal-input" placeholder={t('apply.name.placeholder')} />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black text-black/50 uppercase tracking-widest ml-1">
                    {t('apply.mobile')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="Mobile"
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    title="Please enter a valid 10-digit mobile number"
                    className="brutal-input invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                    placeholder={t('apply.mobile.placeholder')}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black text-black/50 uppercase tracking-widest ml-1">
                    {t('apply.service')} <span className="text-red-500">*</span>
                  </label>
                  <select name="Service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required className="brutal-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1.2rem_center] bg-[length:0.75rem_auto] cursor-pointer">
                    <option value="" disabled>{t('apply.service.placeholder')}</option>
                    {Object.values(servicesData).map(service => (
                      <option key={service.id} value={service.id}>{t(service.nameKey)}</option>
                    ))}
                    <option value="other">{t('apply.otherService')}</option>
                  </select>
                </div>

                {selectedService === 'other' && (
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-black text-black/50 uppercase tracking-widest ml-1">
                      {t('apply.otherService')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      name="OtherService"
                      type="text"
                      required
                      className="brutal-input"
                      placeholder={t('apply.otherService.placeholder')}
                    />
                  </div>
                )}

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black text-black/50 uppercase tracking-widest ml-1">
                    {t('apply.requestType')} <span className="text-red-500">*</span>
                  </label>
                  <select name="RequestType" required defaultValue="query" className="brutal-input appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1.2rem_center] bg-[length:0.75rem_auto] cursor-pointer">
                    <option value="query">{t('apply.requestType.query')}</option>
                    <option value="feedback">{t('apply.requestType.feedback')}</option>
                    <option value="complaint">{t('apply.requestType.complaint')}</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-black text-black/50 uppercase tracking-widest ml-1">{t('apply.message')}</label>
                  <textarea
                    name="Message"
                    className="brutal-input min-h-[100px] resize-y"
                    placeholder={t('apply.message.placeholder')}
                  />
                </div>

                <div className="mt-6 pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="cursor-pointer w-full p-4 bg-[#FF6B00] text-white border-2 border-black rounded-xl text-xs uppercase tracking-wider font-black transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:translate-x-0 flex items-center justify-center gap-3"
                    style={{ boxShadow: '3px 3px 0px 0px #000' }}
                    id="submit-btn"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      t('apply.submit')
                    )}
                  </button>

                  {submitted && <div className="bg-[#D1FAE5] border-2 border-black text-black p-4 rounded-xl text-xs font-black text-center mt-4" style={{ boxShadow: '2px 2px 0px 0px #000' }} id="success-message">{t('apply.success')}</div>}
                </div>
              </form>
            </div>
          </div>

          {/* Full Width Map Section */}
          <div className="mt-20 max-w-6xl mx-auto">
            <div className="text-center mb-10">
              <span className="brutal-badge mb-4">Visual Map</span>
              <h3 className="text-2xl font-black text-black mb-3 tracking-tight mt-4">{t('contact.map.title')}</h3>
              <p className="text-black/50 font-bold text-xs max-w-md mx-auto leading-relaxed">{t('contact.address')}</p>
            </div>
            <div className="h-[460px] w-full bg-white rounded-xl overflow-hidden relative border-2 border-black p-2 group" style={{ boxShadow: '6px 6px 0px 0px #000' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d289.55085484681547!2d82.90393093501596!3d26.839053270700855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990d700e68b619d%3A0xe64ab105a9eaf876!2sDigital%20Gramin%20Service%20Centre%20Nauwa%20Gaon!5e0!3m2!1sen!2sin!4v1777957754927!5m2!1sen!2sin"
                className="w-full h-full rounded-lg transition-all duration-700"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="KIOSK Location Map"
              />
            </div>
          </div>
        </section>
      </div>
    </PageTransition >
  );
}
