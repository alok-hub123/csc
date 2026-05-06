import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';
import { servicesData } from '../data/servicesData';

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

      console.log('Form data submitted to Excel successfully.');

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

  const inputClass = "w-full bg-[#F7F7F7] border-2 border-slate-100 p-4 rounded-xl text-[15px] font-semibold text-[#0A0A0F] outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:shadow-[0_4px_16px_rgba(249,115,22,0.1)]";

  return (
    <PageTransition className="mt-[116px]">
      <SEO
        title={t('nav.contact')}
        description={t('contact.subtitle')}
      />
      <section className="py-20 lg:py-24 px-4 max-w-7xl mx-auto" id="contact-page">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">Contact</span>
          <h2 className="section-heading">{t('contact.title')}</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Contact Info Cards */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-extrabold text-[#0A0A0F] mb-6 leading-tight">{t('contact.subtitle')}</h3>

            <div className="flex flex-col gap-5 flex-1">
              <div className="bg-white border border-slate-100 p-7 rounded-[24px] text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] group flex-1 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F7F7F7] text-orange-500 flex items-center justify-center text-2xl mx-auto mb-5 border border-slate-100 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 group-hover:shadow-[0_8px_24px_rgba(249,115,22,0.3)]">📍</div>
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">{t('contact.address.title')}</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Digital+Gramin+Service+Centre+Nauwa+Gaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer block text-lg text-[#0A0A0F] font-bold leading-relaxed whitespace-pre-line hover:text-orange-500 transition-colors"
                >
                  {t('contact.address')}
                </a>
              </div>

              <div className="bg-white border border-slate-100 p-7 rounded-[24px] text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] group flex-1 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F7F7F7] text-orange-500 flex items-center justify-center text-2xl mx-auto mb-5 border border-slate-100 transition-all group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 group-hover:shadow-[0_8px_24px_rgba(249,115,22,0.3)]">📞</div>
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">{t('contact.phone.title')}</h4>
                <a href="tel:+917233060698" className="cursor-pointer text-lg text-[#0A0A0F] font-bold leading-relaxed whitespace-pre-line hover:text-orange-500 transition-colors">{t('contact.phone')}</a>
              </div>

              <div className="bg-white border border-slate-100 p-7 rounded-[24px] text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] group flex-1 flex flex-col items-center justify-center">
                <div className="w-14 h-14 rounded-2xl bg-[#F7F7F7] text-emerald-500 flex items-center justify-center text-2xl mx-auto mb-5 border border-slate-100 transition-all group-hover:bg-emerald-500 group-hover:text-white group-hover:border-emerald-500 group-hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)]">💬</div>
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest mb-3">{t('contact.whatsapp.title')}</h4>
                <a
                  href="https://wa.me/917233060698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-600 font-bold rounded-full transition-all duration-300 hover:bg-emerald-500 hover:text-white hover:shadow-[0_8px_24px_rgba(16,185,129,0.3)]"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Apply Form */}
          <div className="w-full">
            <h3 className="text-2xl font-extrabold text-[#0A0A0F] mb-6 leading-tight text-center lg:text-left">{t('apply.title')}</h3>
            <form className="bg-white border border-slate-100 p-8 md:p-10 rounded-[24px] space-y-5 shadow-[0_4px_24px_rgba(0,0,0,0.04)]" onSubmit={handleSubmit} id="apply-form">
              <p className="text-sm text-right font-semibold text-slate-400 mb-2"><span className="text-red-500">* </span> {t('apply.requiredNote')}</p>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
                  {t('apply.name')} <span className="text-red-500">*</span>
                </label>
                <input name="Name" type="text" required className={inputClass} placeholder={t('apply.name.placeholder')} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
                  {t('apply.mobile')} <span className="text-red-500">*</span>
                </label>
                <input
                  name="Mobile"
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  className={`${inputClass} invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500`}
                  placeholder={t('apply.mobile.placeholder')}
                />
              </div>


              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
                  {t('apply.service')} <span className="text-red-500">*</span>
                </label>
                <select name="Service" value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:0.8rem_auto] cursor-pointer`}>
                  <option value="" disabled>{t('apply.service.placeholder')}</option>
                  {Object.values(servicesData).map(service => (
                    <option key={service.id} value={service.id}>{t(service.nameKey)}</option>
                  ))}
                  <option value="other">{t('apply.otherService')}</option>
                </select>
              </div>

              {selectedService === 'other' && (
                <div className="flex flex-col gap-2">
                  <label className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
                    {t('apply.otherService')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="OtherService"
                    type="text"
                    required
                    className={inputClass}
                    placeholder={t('apply.otherService.placeholder')}
                  />
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">
                  {t('apply.requestType')} <span className="text-red-500">*</span>
                </label>
                <select name="RequestType" required defaultValue="query" className={`${inputClass} appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:0.8rem_auto] cursor-pointer`}>
                  <option value="query">{t('apply.requestType.query')}</option>
                  <option value="feedback">{t('apply.requestType.feedback')}</option>
                  <option value="complaint">{t('apply.requestType.complaint')}</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[12px] font-extrabold text-slate-400 uppercase tracking-widest ml-1">{t('apply.message')}</label>
                <textarea
                  name="Message"
                  className={`${inputClass} min-h-[120px] resize-y`}
                  placeholder={t('apply.message.placeholder')}
                />
              </div>



              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full p-4 bg-[#0A0A0F] text-white border-none rounded-xl text-base font-extrabold transition-all duration-300 shadow-[0_8px_24px_rgba(0,0,0,0.1)] hover:bg-orange-500 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(249,115,22,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-[#0A0A0F] flex items-center justify-center gap-3"
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

                {submitted && <div className="bg-emerald-50 border-2 border-emerald-500 text-emerald-800 p-5 rounded-xl text-[15px] font-bold text-center mt-6" id="success-message">{t('apply.success')}</div>}
              </div>
            </form>
          </div>
        </div>

        {/* Full Width Map Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-50 text-orange-500 text-xs font-bold uppercase tracking-widest mb-5">Location</span>
            <h3 className="text-3xl font-extrabold text-[#0A0A0F] mb-3">{t('contact.map.title')}</h3>
            <p className="text-slate-400 font-medium">{t('contact.address')}</p>
          </div>
          <div className="h-[500px] w-full bg-slate-100 rounded-[24px] overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.04)] relative border border-slate-100 group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d289.55085484681547!2d82.90393093501596!3d26.839053270700855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990d700e68b619d%3A0xe64ab105a9eaf876!2sDigital%20Gramin%20Service%20Centre%20Nauwa%20Gaon!5e0!3m2!1sen!2sin!4v1777957754927!5m2!1sen!2sin"
              className="w-full h-full grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="KIOSK Location Map"
            />
          </div>
        </div>
      </section>
    </PageTransition >
  );
}
