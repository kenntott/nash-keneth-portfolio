import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { socialLinks } from '../data/socialLinks';

export const ContactModal = ({ isOpen, onClose }) => {
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

  if (!isOpen) return null;

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

    try {
      // Simulate submission or mailto fallback
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setStatus('idle');
        onClose();
      }, 2500);
    } catch (err) {
      setStatus('error');
      setErrorMessage(err.message || "Failed to send message. Please email directly.");
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25 }}
          className={`relative w-full max-w-xl rounded-2xl border ${
            isDark ? "bg-[#101010] border-[#262626] text-white" : "bg-white border-[#E4E4E7] text-black"
          } p-6 sm:p-8 shadow-2xl z-10`}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#222222] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="w-5 h-[2px] bg-[#A78BFA]" />
                <span className="text-[11px] font-mono tracking-widest uppercase text-[#A1A1AA]">
                  LET'S CONNECT
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight">
                Send a Message
              </h2>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="p-2 rounded-lg border border-[#262626] bg-[#141414] text-[#A1A1AA] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Form */}
          {status === 'success' ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <CheckCircle2 className="w-12 h-12 text-[#22C55E] mb-3 animate-bounce" />
              <h3 className="text-lg font-display font-bold text-white mb-1">Message Sent!</h3>
              <p className="text-xs text-[#A1A1AA]">
                Thank you for reaching out. I'll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Doe"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#262626] bg-[#141414] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#A78BFA]"
                />
                {errors.name && <p className="text-[11px] text-red-400 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#262626] bg-[#141414] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#A78BFA]"
                />
                {errors.email && <p className="text-[11px] text-red-400 mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project inquiry or discussion"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#262626] bg-[#141414] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#A78BFA]"
                />
                {errors.subject && <p className="text-[11px] text-red-400 mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label className="block text-xs font-mono text-[#A1A1AA] mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or idea..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#262626] bg-[#141414] text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-[#A78BFA] resize-none"
                />
                {errors.message && <p className="text-[11px] text-red-400 mt-1">{errors.message}</p>}
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-lg bg-red-950/40 border border-red-800/50 flex items-center gap-2 text-xs text-red-300">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-xs font-mono text-[#A1A1AA] hover:text-white flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{socialLinks.email}</span>
                </a>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="px-5 py-2 rounded-full bg-white text-black font-heading font-bold text-xs inline-flex items-center gap-2 hover:bg-zinc-200 transition-colors disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
