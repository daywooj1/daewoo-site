import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-[#F8F9FA] py-16 border-t border-slate-200/50">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-3 text-center"
        >
          <div className="text-xs font-semibold uppercase tracking-[0.35em] text-slate-700">
            Day Jeong
          </div>
          <div className="text-[11px] font-light uppercase tracking-[0.25em] text-slate-500">
            © {new Date().getFullYear()}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

 
