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
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
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
            from_name: 'Portfolio Contact Form',
          }),
        });

        const data = await response.json();
        if (data.success) {
          setStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        }
      }

      // Fallback: direct mailto trigger with prefilled payload
      const mailtoUrl = `mailto:${socialLinks.email}?subject=${encodeURIComponent(
        `[Portfolio Inquiry] ${formData.subject}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;
      window.location.href = mailtoUrl;
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      console.error('Contact submission error:', err);
      setStatus('error');
      setErrorMessage('Could not send message automatically. Please email directly.');
    }
  };

  return (
    <AnimatedSection
      id="contact"
      className={`py-8 lg:py-10 border-b relative transition-colors duration-200 ${
        isDark ? "bg-[#080808] border-[#1c1c1c]" : "bg-white border-[#E4E4E7]"
      }`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 w-full">

        {/* Contact Showcase Card */}
        <div
          className={`p-5 sm:p-10 md:p-14 rounded-2xl sm:rounded-3xl border mb-8 sm:mb-16 transition-colors ${
            isDark
              ? "bg-[#101010] border-[#262626] shadow-card-dark"
              : "bg-[#F8F9FB] border-[#E4E4E7] shadow-sm"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">

            {/* Left Column: Heading & Social Links (5 cols) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div>
                <div className="flex items-center gap-2.5 mb-2 sm:mb-3">
                  <span className="w-6 h-[2px] bg-[#A78BFA]" />
                  <span className={`text-xs font-mono font-bold tracking-widest uppercase ${
                    isDark ? "text-[#A1A1AA]" : "text-[#71717A]"
                  }`}>
                    LET'S CONNECT
                  </span>
                </div>

                <h2
                  className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-extrabold tracking-tight leading-tight ${
                    isDark ? "text-white" : "text-[#171717]"
                  }`}
                >
                  Have an idea? <br />
                  <span className={isDark ? "text-[#A78BFA]" : "text-[#7C3AED]"}>Let's build it.</span>
                </h2>
              </div>

              <p
                className={`text-sm sm:text-base leading-relaxed ${
                  isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
                }`}
              >
                I'm always interested in learning, collaborating, and building meaningful digital solutions.
              </p>

              {/* Direct Email Address */}
              <div className="pt-1 sm:pt-2">
                <p className={`text-xs font-mono uppercase tracking-wider mb-1 ${
                  isDark ? "text-[#A1A1AA]" : "text-[#71717A]"
                }`}>
                  Direct Email
                </p>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className={`text-sm sm:text-base font-mono font-semibold transition-colors break-all ${
                    isDark ? "text-white hover:text-[#A78BFA]" : "text-[#171717] hover:text-[#7C3AED]"
                  }`}
                >
                  {socialLinks.email}
                </a>
              </div>

              {/* Social Channels Row */}
              <div className="pt-4">
                <p className={`text-xs font-mono uppercase tracking-wider mb-3 ${
                  isDark ? "text-[#A1A1AA]" : "text-[#71717A]"
                }`}>
                  Social Channels
                </p>
                <div className="flex items-center gap-2.5">
                  {socialLinks.github && (
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border transition-all ${
                        isDark
                          ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                          : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                      }`}
                      title="GitHub"
                      aria-label="GitHub"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {socialLinks.facebook && (
                    <a
                      href={socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border transition-all ${
                        isDark
                          ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                          : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                      }`}
                      title="Facebook"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                  )}

                  {socialLinks.linkedin && (
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border transition-all ${
                        isDark
                          ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                          : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                      }`}
                      title="LinkedIn"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}

                  {socialLinks.instagram && (
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 rounded-full border transition-all ${
                        isDark
                          ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                          : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                      }`}
                      title="Instagram"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  )}

                  <a
                    href={`mailto:${socialLinks.email}`}
                    className={`p-3 rounded-full border transition-all ${
                      isDark
                        ? "border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white hover:border-[#404040]"
                        : "border-[#E4E4E7] bg-white text-[#27272A] hover:text-black hover:border-[#A1A1AA] shadow-sm"
                    }`}
                    title="Send Email"
                    aria-label="Send Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Functional Minimal Form (7 cols) */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} noValidate className="space-y-4">

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className={`block text-xs font-mono font-medium mb-1.5 uppercase ${
                      isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
                    }`}>
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                        errors.name
                          ? isDark ? "border-red-500 bg-red-500/10 text-white" : "border-red-500 bg-red-50 text-red-900"
                          : isDark
                          ? "bg-[#141414] border-[#262626] text-white focus:border-[#A78BFA] placeholder-[#71717A]"
                          : "bg-white border-[#E4E4E7] text-[#171717] focus:border-[#7C3AED] placeholder-[#A1A1AA] shadow-sm"
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className={`block text-xs font-mono font-medium mb-1.5 uppercase ${
                      isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
                    }`}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                        errors.email
                          ? isDark ? "border-red-500 bg-red-500/10 text-white" : "border-red-500 bg-red-50 text-red-900"
                          : isDark
                          ? "bg-[#141414] border-[#262626] text-white focus:border-[#A78BFA] placeholder-[#71717A]"
                          : "bg-white border-[#E4E4E7] text-[#171717] focus:border-[#7C3AED] placeholder-[#A1A1AA] shadow-sm"
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div>
                  <label className={`block text-xs font-mono font-medium mb-1.5 uppercase ${
                    isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
                  }`}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Collaboration, or Consultation"
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none ${
                      errors.subject
                        ? isDark ? "border-red-500 bg-red-500/10 text-white" : "border-red-500 bg-red-50 text-red-900"
                        : isDark
                        ? "bg-[#141414] border-[#262626] text-white focus:border-[#A78BFA] placeholder-[#71717A]"
                        : "bg-white border-[#E4E4E7] text-[#171717] focus:border-[#7C3AED] placeholder-[#A1A1AA] shadow-sm"
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.subject}</p>
                  )}
                </div>

                {/* Message Input */}
                <div>
                  <label className={`block text-xs font-mono font-medium mb-1.5 uppercase ${
                    isDark ? "text-[#A1A1AA]" : "text-[#52525B]"
                  }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or what you'd like to build..."
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-colors outline-none resize-none ${
                      errors.message
                        ? isDark ? "border-red-500 bg-red-500/10 text-white" : "border-red-500 bg-red-50 text-red-900"
                        : isDark
                        ? "bg-[#141414] border-[#262626] text-white focus:border-[#A78BFA] placeholder-[#71717A]"
                        : "bg-white border-[#E4E4E7] text-[#171717] focus:border-[#7C3AED] placeholder-[#A1A1AA] shadow-sm"
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs text-red-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit Feedback Notification */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                      <span>Thank you! Your message was prepared / dispatched successfully.</span>
                    </motion.div>
                  )}

                  {status === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="p-3.5 rounded-xl border border-red-500/30 bg-red-500/10 text-red-400 text-xs font-mono flex items-center gap-2"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMessage}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-sm font-heading font-bold transition-all shadow-sm ${
                    isDark
                      ? "bg-white text-black hover:bg-[#F4F4F5] disabled:opacity-50"
                      : "bg-[#171717] text-white hover:bg-[#27272A] disabled:opacity-50"
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Get in Touch</span>
                      <ArrowRight className="w-4 h-4" />
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
