import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, Check, Loader2, AlertCircle } from "lucide-react";
import { FormEvent, useState, useRef } from "react";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === 'loading') return;

    setStatus('loading');
    setErrorMessage("");

    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/email_send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to send message');
      }

      setStatus('success');
      formRef.current?.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err: any) {
      console.error('Contact form error:', err);
      setStatus('error');
      setErrorMessage(err.message || "Something went wrong. Please try again.");
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="bg-white border-t border-slate-200/40 py-24 md:py-32 min-h-[600px] flex items-center">
      <div className="max-w-[1200px] mx-auto px-6 w-full">
        <AnimatePresence mode="wait">
          {status === 'success' ? (
            <motion.div
              key="success-message"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-col items-center justify-center text-center space-y-8 py-12"
            >
              <div className="w-20 h-20 rounded-full bg-emerald-50 flex items-center justify-center">
                <Check className="w-10 h-10 text-emerald-500" />
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900">
                  Thanks for reaching out.
                </h2>
                <p className="text-xl text-slate-600 font-light">
                  I’ll respond soon.
                </p>
              </div>
              <button 
                onClick={() => setStatus('idle')}
                className="text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="contact-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start"
            >
              {/* Left Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <h2 className="text-5xl md:text-6xl font-bold text-slate-900 leading-[1.1]">
                    Let's build<br />something<br />meaningful.
                  </h2>
                  <p className="text-xl text-slate-600 font-light max-w-md leading-relaxed">
                    Open to product leadership, collaborations, and ambitious ideas.
                  </p>
                </div>

                <a 
                  href="mailto:jeongdaewoo@gmail.com" 
                  className="inline-flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:shadow-md transition-all">
                    <Mail className="w-5 h-5 text-slate-400 group-hover:text-[#1A1F2C] transition-colors" />
                  </div>
                  <span className="text-lg font-medium text-[#1A1F2C] border-b border-transparent group-hover:border-[#1A1F2C] transition-all">
                    jeongdaewoo@gmail.com
                  </span>
                </a>
              </motion.div>

              {/* Right Side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100"
              >
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      disabled={status === 'loading'}
                      className="w-full bg-[#F8F9FA] border border-slate-200 rounded-xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1A1F2C]/5 transition-all outline-none disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      disabled={status === 'loading'}
                      className="w-full bg-[#F8F9FA] border border-slate-200 rounded-xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1A1F2C]/5 transition-all outline-none disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we collaborate?"
                      required
                      disabled={status === 'loading'}
                      className="w-full bg-[#F8F9FA] border border-slate-200 rounded-xl px-6 py-4 text-slate-800 placeholder:text-slate-700 focus:ring-2 focus:ring-[#1A1F2C]/5 transition-all outline-none resize-none disabled:opacity-50"
                    />
                  </div>

                  <div className="space-y-4">
                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className={`w-full rounded-xl py-4 font-semibold flex items-center justify-center gap-3 transition-all active:scale-[0.98] disabled:cursor-not-allowed ${
                        status === 'error'
                          ? "bg-rose-500 text-white"
                          : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                      }`}
                    >
                      <AnimatePresence mode="wait">
                        {status === 'loading' ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="flex items-center gap-2"
                          >
                            <Loader2 className="w-4 h-4 animate-spin" />
                            <span>Sending...</span>
                          </motion.div>
                        ) : status === 'error' ? (
                          <motion.div
                            key="error"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center gap-2"
                          >
                            <AlertCircle className="w-4 h-4" />
                            <span>Error Sending</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="flex items-center gap-2"
                          >
                            <Send className="w-4 h-4" />
                            <span>Send Message</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>

                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-rose-500 text-xs text-center font-medium"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}