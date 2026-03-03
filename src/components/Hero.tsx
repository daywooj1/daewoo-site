import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

export default function Hero() {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  // Extremely subtle parallax effect (max 30px)
  const yParallax = useTransform(scrollY, [0, 500], [0, 30]);
  const opacityScroll = useTransform(scrollY, [0, 300], [1, 0]);

  const premiumEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
  const animationDuration = 1.0;
  const yOffset = 15;

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#fdfdfd]">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 z-0 opacity-30 pointer-events-none">
        <motion.div 
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.02, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 bg-radial from-slate-200/40 via-transparent to-transparent blur-3xl"
        />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-10" />
      </div>

      {/* Content */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityScroll }}
        className="relative z-10 max-w-5xl px-6 text-center"
      >
        <div className="space-y-12">
          {/* 1. Headline - Layered Reveal */}
          <div className="space-y-2">
            <div className="overflow-hidden pb-4 -mb-4">
              <motion.h1
                initial={{ opacity: 0, y: yOffset }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: animationDuration, 
                  ease: premiumEase,
                  delay: 0.1 
                }}
                className="font-serif text-5xl md:text-8xl text-slate-900 leading-[1.1] tracking-tight"
              >
                Building as a way of
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4 -mb-4">
              <motion.h1
                initial={{ opacity: 0, y: yOffset }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: animationDuration, 
                  ease: premiumEase,
                  delay: 0.22 
                }}
                className="font-serif text-5xl md:text-8xl text-slate-700 italic font-light leading-[1.1] tracking-tight"
              >
                understanding why.
              </motion.h1>
            </div>
          </div>
          
          <div className="space-y-6">
            {/* 2. Subcopy - Reveals second */}
            <div className="overflow-hidden pb-2 -mb-2">
              <motion.div
                initial={{ opacity: 0, y: yOffset }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: animationDuration, 
                  ease: premiumEase,
                  delay: 0.35 
                }}
                className="text-[10px] font-light uppercase tracking-[0.3em] text-slate-600"
              >
                Product · Systems · Strategy
              </motion.div>
            </div>

            {/* 3. Name - Reveals third */}
            <div className="overflow-hidden pb-2 -mb-2">
              <motion.div
                initial={{ opacity: 0, y: yOffset }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ x: 3, color: "#0f172a" }}
                transition={{ 
                  duration: animationDuration, 
                  ease: premiumEase,
                  delay: 0.48 
                }}
                className="text-sm font-bold uppercase tracking-[0.5em] text-slate-500 cursor-default transition-colors duration-300"
              >
                Day Jeong
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* 4. Scroll Indicator - Reveals last */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          delay: 0.8, 
          duration: 1,
          ease: premiumEase
        }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-4 cursor-pointer group">
          <span className="text-[10px] uppercase tracking-[0.3em] text-slate-400 font-medium group-hover:text-slate-900 transition-colors">Scroll</span>
          <div className="w-[1px] h-12 bg-slate-200 relative overflow-hidden">
            <motion.div
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-slate-400"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
