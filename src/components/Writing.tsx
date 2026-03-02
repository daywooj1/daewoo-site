import { motion } from "motion/react";

export default function Writing() {
  return (
    <section id="writing" className="bg-white">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-24"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Writing</h2>
          
          <div className="space-y-12">
            <div className="space-y-8 text-2xl md:text-3xl font-light leading-relaxed text-slate-800">
              <p>
                This is a space where I explore ideas about meaning and the inner life of builders. I write about product strategy, the discipline of focus, and the search for purpose in a digital world.
              </p>
              <p className="text-slate-500 text-xl md:text-2xl">
                These reflections are an invitation to think seriously about the things we create and the lives we lead. I believe that writing is a way to clarify our thinking and find our way through the noise.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-8 pt-12">
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">The Inner Life of Builders</h3>
                <p className="text-slate-500 font-light">On the search for meaning in the act of creation.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-slate-900">The Discipline of Focus</h3>
                <p className="text-slate-500 font-light">How we choose what matters in an age of distraction.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
