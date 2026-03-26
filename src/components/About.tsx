import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="bg-white border-t border-slate-200/40">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-center"
        >
          <div className="relative h-[520px] overflow-hidden rounded-2xl bg-slate-100 shadow-2xl shadow-slate-200">
            <img 
              src="/selfie.png" 
              alt="Daewoo Jeong" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">About</h2>
              <div className="space-y-8 text-xl md:text-2xl font-light leading-relaxed text-slate-900">
                <p className="font-bold">
                  I build products that make sense.
                </p>
                <p>
                  I’m obsessed with the "why" behind how people move through the world. My work is about stripping away the noise to find the elegant logic underneath. Whether I'm untangling a complex system or aligning a team, I play for measurable impact and intuitive design.
                </p>
                <p>
                  When I’m not building, I’m usually climbing or playing chess. They’re the same game to me: solving for the next move, maintaining focus under pressure, and executing with intent. I believe the best products feel like magic, but they’re built on structured thinking and deliberate craft.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}