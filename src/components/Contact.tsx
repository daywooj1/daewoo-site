import { motion, AnimatePresence } from "motion/react";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="bg-[#F8F9FA] py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-bold text-[#1A1F2C] leading-[1.1]">
                Let's build<br />something<br />meaningful.
              </h2>
              <p className="text-xl text-slate-500 font-light max-w-md leading-relaxed">
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
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-slate-100 min-h-[500px] flex flex-col"
          >
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex-1 flex flex-col items-center justify-center text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-[#1A1F2C]">Message received.</h3>
                    <p className="text-slate-500 font-light">I’ll respond soon.</p>
                  </div>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="text-sm font-medium text-slate-400 hover:text-[#1A1F2C] transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit} 
                  className="space-y-8"
                >
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="w-full bg-[#F8F9FA] border-none rounded-xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1A1F2C]/5 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="your@email.com"
                      required
                      className="w-full bg-[#F8F9FA] border-none rounded-xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1A1F2C]/5 transition-all outline-none"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder="How can we collaborate?"
                      required
                      className="w-full bg-[#F8F9FA] border-none rounded-xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-[#1A1F2C]/5 transition-all outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full bg-[#0F172A] text-white rounded-xl py-4 font-semibold flex items-center justify-center gap-3 hover:bg-[#1E293B] transition-all active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
                    <Send className={`w-4 h-4 ${status === 'sending' ? 'animate-pulse' : ''}`} />
                  </button>
                  
                  {status === 'error' && (
                    <p className="text-center text-red-500 text-sm">
                      Something went wrong. Please try again or email me directly.
                    </p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

