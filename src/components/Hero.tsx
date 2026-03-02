import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useState } from "react";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#fdfdfd]">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-radial from-slate-200/50 via-transparent to-transparent blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: y1, opacity }}
        className="relative z-10 max-w-4xl px-6 text-center space-y-10"
      >
        <div className="space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-5xl md:text-8xl text-slate-900 leading-[1.1] tracking-tight"
          >
            Building as a way of <br />
            <span className="italic font-light text-slate-700">understanding why.</span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="pt-8 space-y-2"
          >
            <div className="text-sm font-bold uppercase tracking-[0.5em] text-slate-400">Day Jeong</div>
            <div className="text-[10px] font-light uppercase tracking-[0.3em] text-slate-500">Product · Systems · Strategy</div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-medium">Scroll</span>
        <div className="w-[1px] h-12 bg-slate-200 relative overflow-hidden">
          <motion.div
            animate={{
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-slate-400"
          />
        </div>
      </motion.div>
    </section>
  );
}
