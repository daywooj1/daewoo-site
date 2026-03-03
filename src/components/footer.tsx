import { motion } from "motion/react";

export default function Footer() {
  return (
    <footer className="bg-white py-24 border-t border-slate-200/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-4 text-center"
        >
          <div className="text-sm font-bold uppercase tracking-[0.5em] text-slate-500">Daewoo Jeong</div>
          <div className="text-[10px] font-light uppercase tracking-[0.3em] text-slate-400">© 2026</div>
        </motion.div>
      </div>
    </footer>
  );
}

 
