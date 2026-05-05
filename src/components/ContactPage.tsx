import { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import PageTransition from './PageTransition';
import SEO from './SEO';

export default function ContactPage() {
  const { t } = useLang();

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitted(true);

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);

    // Reset form
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <PageTransition className="mt-[116px]">
      <SEO
        title={t('nav.contact')}
        description={t('contact.subtitle')}
      />
      <section className="py-20 lg:py-24 px-4 max-w-7xl mx-auto" id="contact-page">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-3 tracking-tight">{t('contact.title')}</h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Contact Info Cards */}
          <div className="flex flex-col h-full">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 leading-tight">{t('contact.subtitle')}</h3>

            <div className="flex flex-col gap-6 flex-1">
              <div className="glass-panel p-6 rounded-[24px] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl mx-auto mb-6 shadow-inner transition-colors group-hover:bg-blue-500 group-hover:text-white">📍</div>
                <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">{t('contact.address.title')}</h4>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Digital+Gramin+Service+Centre+Nauwa+Gaon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer block text-lg text-slate-900 font-bold leading-relaxed whitespace-pre-line hover:text-orange-500 transition-colors"
                >
                  {t('contact.address')}
                </a>
              </div>

              <div className="glass-panel p-6 rounded-[24px] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl mx-auto mb-6 shadow-inner transition-colors group-hover:bg-orange-500 group-hover:text-white">📞</div>
                <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">{t('contact.phone.title')}</h4>
                <a href="tel:+917233060698" className="cursor-pointer text-lg text-slate-900 font-bold leading-relaxed whitespace-pre-line hover:text-orange-500">{t('contact.phone')}</a>
              </div>

              <div className="glass-panel p-6 rounded-[24px] text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group flex-1 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-2xl mx-auto mb-6 shadow-inner transition-colors group-hover:bg-emerald-500 group-hover:text-white">💬</div>
                <h4 className="text-xs font-extrabold text-slate-500 uppercase tracking-widest mb-3">{t('contact.whatsapp.title')}</h4>
                <a
                  href="https://wa.me/917233060698"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer inline-flex items-center gap-2 px-6 py-3 bg-emerald-50 text-emerald-600 font-bold rounded-xl transition-all duration-300 hover:bg-emerald-500 hover:text-white"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Apply Form */}
          <div className="w-full">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-6 leading-tight text-center lg:text-left">{t('apply.title')}</h3>
            <form className="glass-panel p-8 md:p-10 rounded-[32px] space-y-6" onSubmit={handleSubmit} id="apply-form">

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-extrabold text-slate-500 uppercase tracking-widest ml-1">{t('apply.name')}</label>
                <input type="text" required className="bg-white/80 border-2 border-white/60 p-4 rounded-xl text-[15px] font-semibold text-slate-900 outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:shadow-[0_4px_12px_rgba(249,115,22,0.15)]" placeholder={t('apply.name.placeholder')} />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-extrabold text-slate-500 uppercase tracking-widest ml-1">{t('apply.mobile')}</label>
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  title="Please enter a valid 10-digit mobile number"
                  className="bg-white/80 border-2 border-white/60 p-4 rounded-xl text-[15px] font-semibold text-slate-900 outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:shadow-[0_4px_12px_rgba(249,115,22,0.15)] invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-500"
                  placeholder={t('apply.mobile.placeholder')}
                />
              </div>


              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-extrabold text-slate-500 uppercase tracking-widest ml-1">{t('apply.service')}</label>
                <select required className="bg-white/80 border-2 border-white/60 p-4 rounded-xl text-[15px] font-semibold text-slate-900 outline-none transition-all duration-300 appearance-none focus:bg-white focus:border-orange-500 focus:shadow-[0_4px_12px_rgba(249,115,22,0.15)] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2364748B%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[position:right_1rem_center] bg-[length:0.8rem_auto] cursor-pointer">
                  <option value="">{t('apply.service.placeholder')}</option>
                  <option value="aadhaar">{t('services.aadhaar')}</option>
                  <option value="pan">{t('services.pan')}</option>
                  <option value="banking">{t('services.banking')}</option>
                  <option value="certificates">{t('services.certificates')}</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[13px] font-extrabold text-slate-500 uppercase tracking-widest ml-1">{t('apply.message')}</label>
                <textarea
                  className="bg-white/80 border-2 border-white/60 p-4 rounded-xl text-[15px] font-semibold text-slate-900 outline-none transition-all duration-300 focus:bg-white focus:border-orange-500 focus:shadow-[0_4px_12px_rgba(249,115,22,0.15)] min-h-[120px] resize-y"
                  placeholder={t('apply.message.placeholder')}
                />
              </div>



              <div className="mt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer w-full p-4 bg-slate-900 text-white border-none rounded-xl text-base font-extrabold transition-all duration-300 shadow-[0_8px_24px_rgba(15,23,42,0.2)] hover:bg-orange-500 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(249,115,22,0.3)] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:bg-slate-900 flex items-center justify-center gap-3"
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
            <h3 className="text-3xl font-extrabold text-slate-900 mb-3">{t('contact.map.title')}</h3>
            <p className="text-slate-500 font-medium">{t('contact.address')}</p>
          </div>
          <div className="h-[500px] w-full bg-slate-200 rounded-[32px] overflow-hidden shadow-[0_10px_40px_-10px_rgba(15,23,42,0.1)] relative border-4 border-white group">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d289.55085484681547!2d82.90393093501596!3d26.839053270700855!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3990d700e68b619d%3A0xe64ab105a9eaf876!2sDigital%20Gramin%20Service%20Centre%20Nauwa%20Gaon!5e0!3m2!1sen!2sin!4v1777957754927!5m2!1sen!2sin"
              className="w-full h-full grayscale-[20%] transition-all duration-500 group-hover:grayscale-0"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Jan Seva Kendra Location Map"
            />
          </div>
        </div>
      </section>
    </PageTransition >
  );
}
