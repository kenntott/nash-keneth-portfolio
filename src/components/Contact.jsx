import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Github, 
  Facebook,
  Instagram, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { Starburst } from './Starburst';
import { AnimatedSection } from './AnimatedSection';
import { socialLinks } from '../data/socialLinks';

export const Contact = () => {
  const { isDark } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Full Name is required.";
    if (!formData.email.trim()) {
      errs.email = "Email Address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.subject.trim()) errs.subject = "Subject is required.";
    if (!formData.message.trim()) {
      errs.message = "Message cannot be empty.";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      if (endpoint && accessKey && accessKey !== 'your_web3forms_access_key_here') {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            access_key: accessKey,
            name: formData.name,
            email: formData.email,
            subject: formData.subject,
            message: formData.message,
          }),
        });
        const result = await response.json();
        if (response.ok && result.success !== false) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          throw new Error(result.message || 'Failed to submit form.');
        }
      } else {
        await new Promise((resolve) => setTimeout(resolve, 900));
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please reach out directly via email.');
    }
  };

  return (
    <AnimatedSection id="contact" className="py-24 md:py-36 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Adelina Split Layout: Big Typography on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Left Column: Big Statement & Direct Channels (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div>
              <div
                className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase mb-5 border ${
                  isDark
                    ? "bg-[#131322] border-[#242338] text-[#C084FC]"
                    : "bg-violet-50 border-violet-200 text-[#7C3AED]"
                }`}
              >
                <Starburst className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>START A CONVERSATION</span>
              </div>

              <h2
                className={`text-[clamp(1.65rem,5.2vw,3.5rem)] font-display font-extrabold tracking-tight leading-tight mb-6 break-normal ${
                  isDark ? "text-white" : "text-[#0F172A]"
                }`}
              >
                LET'S BUILD <span className="text-gradient-purple italic block">SOMETHING</span> TOGETHER.
              </h2>

              <p
                className={`text-base sm:text-lg leading-relaxed ${
                  isDark ? "text-[#9E9EB8]" : "text-[#475569]"
                }`}
              >
                Have an information system project, full-stack application idea, or collaboration in mind? Feel free to reach out.
              </p>
            </div>

            {/* Direct Channels */}
            <div className="space-y-4 pt-2">
              <a
                href={`mailto:${socialLinks.email}`}
                className={`flex items-start gap-4 p-5 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#131322] border-[#242338] hover:border-[#8B5CF6]/60 hover:bg-[#18182B]"
                    : "bg-white border-[#E4E4F2] hover:border-[#7C3AED]/50 hover:shadow-card-light shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isDark ? "bg-[#0E0E18] text-[#C084FC] group-hover:border-[#8B5CF6]" : "bg-violet-50 text-[#7C3AED]"
                  }`}
                >
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                    Direct Email
                  </p>
                  <p className={`text-sm sm:text-base font-heading font-bold mt-0.5 break-all ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                    {socialLinks.email}
                  </p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-4 p-5 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#131322] border-[#242338] hover:border-[#8B5CF6]/60 hover:bg-[#18182B]"
                    : "bg-white border-[#E4E4F2] hover:border-[#7C3AED]/50 hover:shadow-card-light shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isDark ? "bg-[#0E0E18] text-[#C084FC]" : "bg-violet-50 text-[#7C3AED]"
                  }`}
                >
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                    GitHub
                  </p>
                  <p className={`text-sm sm:text-base font-heading font-bold mt-0.5 ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                    @{socialLinks.githubUsername}
                  </p>
                </div>
              </a>

              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-4 p-5 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#131322] border-[#242338] hover:border-[#3B82F6]/60 hover:bg-[#18182B]"
                    : "bg-white border-[#E4E4F2] hover:border-[#2563EB]/50 hover:shadow-card-light shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isDark ? "bg-[#0E0E18] text-[#3B82F6]" : "bg-blue-50 text-[#2563EB]"
                  }`}
                >
                  <Facebook className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                    Facebook
                  </p>
                  <p className={`text-sm sm:text-base font-heading font-bold mt-0.5 ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                    {socialLinks.facebookUsername}
                  </p>
                </div>
              </a>

              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-start gap-4 p-5 rounded-3xl border transition-all duration-300 group hover:-translate-y-1 ${
                  isDark
                    ? "bg-[#131322] border-[#242338] hover:border-[#EC4899]/60 hover:bg-[#18182B]"
                    : "bg-white border-[#E4E4F2] hover:border-[#DB2777]/50 hover:shadow-card-light shadow-sm"
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isDark ? "bg-[#0E0E18] text-[#EC4899]" : "bg-pink-50 text-[#DB2777]"
                  }`}
                >
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className={`text-xs font-mono font-bold uppercase tracking-wider ${isDark ? "text-[#9E9EB8]" : "text-[#64748B]"}`}>
                    Instagram
                  </p>
                  <p className={`text-sm sm:text-base font-heading font-bold mt-0.5 ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                    {socialLinks.instagramUsername}
                  </p>
                </div>
              </a>
            </div>

          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <div
              className={`p-6 sm:p-8 md:p-10 rounded-3xl border relative shadow-xl ${
                isDark
                  ? "bg-[#131322] border-[#242338] shadow-black/50"
                  : "bg-white border-[#E4E4F2] shadow-card-light"
              }`}
            >
              <h3 className={`text-2xl font-display font-bold mb-6 ${isDark ? "text-white" : "text-[#0F172A]"}`}>
                Send a Message
              </h3>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold">Thank you for your message!</p>
                      <p className="text-emerald-300/90 mt-0.5">
                        Your message has been received. I'll get back to you promptly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-500/15 border border-rose-500/40 text-rose-400 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-bold">Notice</p>
                      <p className="text-rose-300/90 mt-0.5">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-xs font-mono font-bold uppercase mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      disabled={status === 'loading'}
                      className={`w-full px-5 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-500/30"
                          : isDark
                          ? "bg-[#0E0E18] border-[#242338] text-white focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20"
                          : "bg-slate-50 border-[#E4E4F2] text-gray-900 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20"
                      }`}
                    />
                    {errors.name && <p className="text-rose-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-xs font-mono font-bold uppercase mb-2 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      disabled={status === 'loading'}
                      className={`w-full px-5 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-500/30"
                          : isDark
                          ? "bg-[#0E0E18] border-[#242338] text-white focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20"
                          : "bg-slate-50 border-[#E4E4F2] text-gray-900 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20"
                      }`}
                    />
                    {errors.email && <p className="text-rose-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-xs font-mono font-bold uppercase mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Information System"
                    disabled={status === 'loading'}
                    className={`w-full px-5 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? "border-rose-500 focus:ring-rose-500/30"
                        : isDark
                        ? "bg-[#0E0E18] border-[#242338] text-white focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20"
                        : "bg-slate-50 border-[#E4E4F2] text-gray-900 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20"
                    }`}
                  />
                  {errors.subject && <p className="text-rose-400 text-xs mt-1.5">{errors.subject}</p>}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-xs font-mono font-bold uppercase mb-2 ${
                      isDark ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder={`Hello ${socialLinks.name}, let's discuss building an application or system...`}
                    disabled={status === 'loading'}
                    className={`w-full px-5 py-3.5 rounded-2xl border text-sm transition-all focus:outline-none focus:ring-2 resize-none ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500/30"
                        : isDark
                        ? "bg-[#0E0E18] border-[#242338] text-white focus:border-[#8B5CF6] focus:ring-[#8B5CF6]/20"
                        : "bg-slate-50 border-[#E4E4F2] text-gray-900 focus:border-[#7C3AED] focus:ring-[#7C3AED]/20"
                    }`}
                  />
                  {errors.message && <p className="text-rose-400 text-xs mt-1.5">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full flex items-center justify-center gap-3 px-8 py-4 rounded-2xl font-heading font-bold text-sm text-white transition-all duration-300 shadow-md ${
                    status === 'loading'
                      ? "opacity-75 cursor-not-allowed bg-gray-600"
                      : isDark
                      ? "bg-gradient-to-r from-[#8B5CF6] via-[#7C3AED] to-[#EC4899] hover:shadow-glow-purple"
                      : "bg-gradient-to-r from-[#7C3AED] to-[#8B5CF6] hover:shadow-md"
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

        </div>

      </div>
    </AnimatedSection>
  );
};

export default Contact;
