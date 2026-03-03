import { motion } from "motion/react";
import { Mail, Send, Check } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");
    
    const mailtoUrl = `mailto:jeongdaewoo@gmail.com?subject=Collaboration from ${name}&body=Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="bg-white border-t border-slate-200/40 py-24 md:py-32">
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
            <form onSubmit={handleSubmit} className="space-y-8">
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
                className={`w-full rounded-xl py-4 font-semibold flex items-center justify-center gap-3 transition-all active:scale-[0.98] ${
                  sent 
                    ? "bg-emerald-500 text-white" 
                    : "bg-[#0F172A] text-white hover:bg-[#1E293B]"
                }`}
              >
                <span>{sent ? "Message Sent" : "Send Message"}</span>
                {sent ? <Check className="w-4 h-4" /> : <Send className="w-4 h-4" />}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
