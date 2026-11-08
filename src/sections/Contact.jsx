import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MessageCircle, Mail, Check, AlertCircle, Loader2, ArrowUpRight, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { portfolioData } from '../data/portfolioData';
import { getWhatsAppUrl, getMailtoUrl } from '../utils/helpers';
import { SectionFooter } from '../components/BackToTop';

export default function Contact() {
  const { profile } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _honeypot: '',
  });

  const [formErrors, setFormErrors] = useState({});
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email address is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errors.email = 'Valid email is required';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 8) {
      errors.message = 'Please provide a more detailed message';
    }
    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData._honeypot) return;

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setStatus('loading');
    setStatusMessage('Transmitting inquiry...');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      if (serviceId && templateId && publicKey) {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
            to_name: profile.name,
          },
          publicKey
        );
      } else {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      setStatus('success');
      setStatusMessage('Thank you. Your message has been transmitted to Sayyad Yameen.');

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        _honeypot: '',
      });
    } catch (err) {
      console.error('Contact Form Error:', err);
      setStatus('error');
      setStatusMessage('Transmission could not be confirmed. Please reach out directly via WhatsApp.');
    }
  };

  return (
    <section id="contact" className="py-28 sm:py-36 border-t border-stone-200/80 dark:border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between pb-8 mb-16 border-b border-stone-200/80 dark:border-white/[0.08] gap-4">
          <div>
            <span className="text-[11px] font-mono tracking-ultra uppercase text-stone-600 dark:text-stone-300 block mb-2">
              07 &bull; INQUIRY &amp; CONTACT
            </span>
            <h2 className="headline-editorial text-5xl sm:text-7xl text-stone-900 dark:text-stone-100">
              HAVE AN IDEA? <br className="hidden sm:inline" />
              <span className="subheadline-editorial text-stone-600 dark:text-stone-300">LET'S TALK.</span>
            </h2>
          </div>
          <span className="text-xs font-mono tracking-widest uppercase text-stone-600 dark:text-stone-300">
            DIRECT COLLABORATION
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Links & WhatsApp */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* WhatsApp Integration Card */}
            <div className="p-8 rounded-3xl border border-stone-200/80 dark:border-white/[0.08] bg-stone-100/40 dark:bg-white/[0.02]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full border border-stone-300 dark:border-white/10 flex items-center justify-center text-stone-900 dark:text-stone-100">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-medium text-stone-900 dark:text-stone-100">
                    WhatsApp Direct
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-stone-500">
                    Real-Time Messaging
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed mb-6">
                Open to discussions regarding artificial intelligence models, data science research, software engineering, and digital design.
              </p>

              <a
                href={getWhatsAppUrl(profile.contactInfo.phone)}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full text-xs font-mono uppercase tracking-widest font-semibold flex items-center justify-center gap-2 bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-md hover:opacity-90 transition-opacity"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Me</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Direct Details */}
            <div className="p-8 rounded-3xl border border-stone-200/80 dark:border-white/[0.08] bg-stone-100/40 dark:bg-white/[0.02] space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-stone-200/60 dark:border-white/[0.06]">
                <span className="text-stone-500 uppercase tracking-widest">Email</span>
                <a
                  href={getMailtoUrl(profile.contactInfo.email)}
                  className="text-stone-900 dark:text-stone-100 font-medium hover:underline"
                >
                  {profile.contactInfo.email}
                </a>
              </div>

              <div className="flex items-center justify-between pb-3 border-b border-stone-200/60 dark:border-white/[0.06]">
                <span className="text-stone-500 uppercase tracking-widest">Location</span>
                <span className="text-stone-800 dark:text-stone-200">India &bull; Remote Available</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-stone-500 uppercase tracking-widest">Social Profiles</span>
                <div className="flex items-center gap-4">
                  <a
                    href={profile.contactInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href={profile.contactInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-stone-700 dark:text-stone-300 hover:text-stone-950 dark:hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Minimalist Luxury Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-12 rounded-3xl border border-stone-200/80 dark:border-white/[0.08] bg-stone-100/30 dark:bg-white/[0.015]">
              <h3 className="headline-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 mb-2">
                Send an Inquiry
              </h3>
              <p className="text-xs text-stone-500 font-mono tracking-widest uppercase mb-8">
                Responses delivered directly to Sayyad Yameen
              </p>

              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-2 font-mono">
                  <Check className="w-4 h-4" />
                  <span>{statusMessage}</span>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl border border-red-500/20 bg-red-500/10 text-red-800 dark:text-red-300 text-xs flex items-center gap-2 font-mono">
                  <AlertCircle className="w-4 h-4" />
                  <span>{statusMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="_honeypot"
                  value={formData._honeypot}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex="-1"
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-ultra text-stone-600 dark:text-stone-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full px-0 py-3 bg-transparent border-b border-stone-300 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-[11px] font-mono mt-1">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-ultra text-stone-600 dark:text-stone-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@organization.com"
                      className="w-full px-0 py-3 bg-transparent border-b border-stone-300 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-[11px] font-mono mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-ultra text-stone-600 dark:text-stone-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Machine Learning Collaboration"
                    className="w-full px-0 py-3 bg-transparent border-b border-stone-300 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors"
                  />
                  {formErrors.subject && (
                    <p className="text-red-500 text-[11px] font-mono mt-1">{formErrors.subject}</p>
                  )}
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-ultra text-stone-600 dark:text-stone-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your inquiry, project scope, or opportunity..."
                    className="w-full px-0 py-3 bg-transparent border-b border-stone-300 dark:border-white/10 text-sm text-stone-900 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-stone-900 dark:focus:border-white transition-colors resize-none font-light"
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-[11px] font-mono mt-1">{formErrors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-3.5 rounded-full text-xs font-mono uppercase tracking-widest font-semibold bg-stone-900 text-stone-100 dark:bg-stone-100 dark:text-stone-900 shadow-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Back to Top Section Footer on Contact slide */}
        <SectionFooter index="07 / 07" label="INQUIRY &bull; CONTACT" />

      </div>
    </section>
  );
}
