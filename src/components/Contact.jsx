import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Github, 
  Linkedin, 
  MessageSquare,
  Sparkles
} from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
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
        // Demonstration simulation when API key is not yet configured in .env
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || 'Something went wrong. Please try again or reach out directly via email.');
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium mb-3 border ${
              isDark
                ? "bg-[#161920] border-[#292E38] text-[#00E5A8]"
                : "bg-emerald-50 border-emerald-200 text-[#059669]"
            }`}
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>LET'S CONNECT</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-extrabold font-heading mb-4 ${
              isDark ? "text-white" : "text-[#111827]"
            }`}
          >
            Let's Build Something Together.
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed ${
              isDark ? "text-[#A1A1AA]" : "text-[#64748B]"
            }`}
          >
            Have a project in mind, a collaboration opportunity, or simply want to connect? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Contact Details & Socials (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div
              className={`p-7 rounded-3xl border ${
                isDark
                  ? "bg-[#161920] border-[#292E38]"
                  : "bg-white border-[#E2E8F0] shadow-card-light"
              }`}
            >
              <h3 className={`text-xl font-bold font-heading mb-4 ${isDark ? "text-white" : "text-[#111827]"}`}>
                Direct Contact Channels
              </h3>
              
              <div className="space-y-4">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className={`flex items-start gap-3.5 p-3.5 rounded-2xl border transition-all duration-200 ${
                    isDark
                      ? "bg-[#111318] border-[#292E38] hover:border-[#00E5A8]/50"
                      : "bg-slate-50 border-[#E2E8F0] hover:border-[#059669]/50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDark ? "bg-[#08090C] text-[#00E5A8]" : "bg-white text-[#059669] shadow-sm"
                    }`}
                  >
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs font-mono uppercase ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                      Email Address
                    </p>
                    <p className={`text-sm font-semibold mt-0.5 break-all ${isDark ? "text-white" : "text-[#111827]"}`}>
                      {socialLinks.email}
                    </p>
                  </div>
                </a>

                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3.5 p-3.5 rounded-2xl border transition-all duration-200 ${
                    isDark
                      ? "bg-[#111318] border-[#292E38] hover:border-[#00E5A8]/50"
                      : "bg-slate-50 border-[#E2E8F0] hover:border-[#059669]/50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDark ? "bg-[#08090C] text-[#00E5A8]" : "bg-white text-[#059669] shadow-sm"
                    }`}
                  >
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs font-mono uppercase ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                      GitHub
                    </p>
                    <p className={`text-sm font-semibold mt-0.5 ${isDark ? "text-white" : "text-[#111827]"}`}>
                      @{socialLinks.githubUsername}
                    </p>
                  </div>
                </a>

                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-start gap-3.5 p-3.5 rounded-2xl border transition-all duration-200 ${
                    isDark
                      ? "bg-[#111318] border-[#292E38] hover:border-[#61DAFB]/50"
                      : "bg-slate-50 border-[#E2E8F0] hover:border-[#0891B2]/50"
                  }`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isDark ? "bg-[#08090C] text-[#61DAFB]" : "bg-white text-[#0891B2] shadow-sm"
                    }`}
                  >
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className={`text-xs font-mono uppercase ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                      LinkedIn Profile
                    </p>
                    <p className={`text-sm font-semibold mt-0.5 ${isDark ? "text-white" : "text-[#111827]"}`}>
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick response note */}
            <div
              className={`p-5 rounded-2xl border ${
                isDark ? "bg-[#111318] border-[#292E38]" : "bg-slate-50 border-[#E2E8F0]"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5 text-xs font-mono text-[#00E5A8]">
                <Sparkles className="w-4 h-4" />
                <span>RAPID TURNAROUND</span>
              </div>
              <p className={`text-xs leading-relaxed ${isDark ? "text-[#A1A1AA]" : "text-[#64748B]"}`}>
                Typically responding to inquiries within 24 business hours for information system projects, frontend contracts, or engineering collaborations.
              </p>
            </div>
          </div>

          {/* Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div
              className={`p-7 sm:p-9 rounded-3xl border relative ${
                isDark
                  ? "bg-[#161920] border-[#292E38]"
                  : "bg-white border-[#E2E8F0] shadow-card-light"
              }`}
            >
              <h3 className={`text-xl font-bold font-heading mb-6 ${isDark ? "text-white" : "text-[#111827]"}`}>
                Send a Direct Message
              </h3>

              {/* Status Notifications */}
              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-semibold">Thank you for your message!</p>
                      <p className="text-emerald-300/90 mt-0.5">
                        Your inquiry has been received. I will get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mb-6 p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-400 flex items-start gap-3"
                  >
                    <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div className="text-xs sm:text-sm">
                      <p className="font-semibold">Submission Error</p>
                      <p className="text-rose-300/90 mt-0.5">{errorMessage}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-xs font-mono font-medium mb-1.5 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.name
                          ? "border-rose-500 focus:ring-rose-500/30 bg-rose-500/5"
                          : isDark
                          ? "bg-[#111318] border-[#292E38] text-white focus:border-[#00E5A8] focus:ring-[#00E5A8]/20"
                          : "bg-slate-50 border-[#E2E8F0] text-gray-900 focus:border-[#059669] focus:ring-[#059669]/20"
                      }`}
                    />
                    {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-xs font-mono font-medium mb-1.5 ${
                        isDark ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      disabled={status === 'loading'}
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                        errors.email
                          ? "border-rose-500 focus:ring-rose-500/30 bg-rose-500/5"
                          : isDark
                          ? "bg-[#111318] border-[#292E38] text-white focus:border-[#00E5A8] focus:ring-[#00E5A8]/20"
                          : "bg-slate-50 border-[#E2E8F0] text-gray-900 focus:border-[#059669] focus:ring-[#059669]/20"
                      }`}
                    />
                    {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-xs font-mono font-medium mb-1.5 ${
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
                    placeholder="Project Inquiry / Opportunity"
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                      errors.subject
                        ? "border-rose-500 focus:ring-rose-500/30 bg-rose-500/5"
                        : isDark
                        ? "bg-[#111318] border-[#292E38] text-white focus:border-[#00E5A8] focus:ring-[#00E5A8]/20"
                        : "bg-slate-50 border-[#E2E8F0] text-gray-900 focus:border-[#059669] focus:ring-[#059669]/20"
                    }`}
                  />
                  {errors.subject && <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className={`block text-xs font-mono font-medium mb-1.5 ${
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
                    placeholder="Hello, I would like to discuss building an information system or frontend application..."
                    disabled={status === 'loading'}
                    className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 resize-none ${
                      errors.message
                        ? "border-rose-500 focus:ring-rose-500/30 bg-rose-500/5"
                        : isDark
                        ? "bg-[#111318] border-[#292E38] text-white focus:border-[#00E5A8] focus:ring-[#00E5A8]/20"
                        : "bg-slate-50 border-[#E2E8F0] text-gray-900 focus:border-[#059669] focus:ring-[#059669]/20"
                    }`}
                  />
                  {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-sm ${
                    status === 'loading'
                      ? "opacity-70 cursor-not-allowed bg-gray-600 text-white"
                      : isDark
                      ? "bg-[#00E5A8] text-[#08090C] hover:bg-[#00E5A8]/90 hover:shadow-glow-green"
                      : "bg-[#059669] text-white hover:bg-[#047857]"
                  }`}
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
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
    </section>
  );
};

export default Contact;
