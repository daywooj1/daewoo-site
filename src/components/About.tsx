import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-center"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-200">
            <img 
              src="https://ais-dev-at4hoknnv3kthi3pwdegiu-242464314494.us-east1.run.app/daewoo.jpg" 
              alt="Daewoo Jeong" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">About</h2>
              <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-slate-800">
                <p>
                  I build products with clarity and intention.
                </p>
                <p>
                  I am drawn to the mechanics of decision making, user behavior, and system design. My work focuses on simplifying complex problems, aligning teams around measurable outcomes, and delivering products that are both intuitive and deeply considered.
                </p>
                <p>
                  Climbing and chess reinforce the same principles I apply in product. Structured thinking. Focus under pressure. Strategic execution.
                </p>
                <p className="text-slate-500 text-lg md:text-xl">
                  I believe the best products feel effortless, but are built on rigorous thinking underneath.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
