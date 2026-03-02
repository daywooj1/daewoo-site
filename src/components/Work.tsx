import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";

const categories = ["All", "Mobile", "Growth", "Consulting"];

const projects = [
  {
    id: 1,
    title: "CarGurus Mobile",
    category: "Mobile",
    description: "Leading mobile product strategy for the world's most visited automotive marketplace.",
    preview: "Scaling a high-performance mobile experience for millions of monthly active users.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    title: "Huckleberry Sleep",
    category: "Growth",
    description: "Driving user activation and retention for the #1 baby sleep and wellness app.",
    preview: "Optimizing the first-mile experience through data-driven behavioral design.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    title: "Deloitte Digital",
    category: "Consulting",
    description: "Architecting digital transformation strategies for Fortune 500 enterprises.",
    preview: "Bridging the gap between complex business requirements and elegant digital solutions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    title: "iOS Interface Study",
    category: "Mobile",
    description: "A conceptual exploration of next-generation iOS interaction patterns.",
    preview: "Pushing the boundaries of ergonomics and spatial awareness in mobile design.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section 
      id="work" 
      className="bg-white relative overflow-hidden group/work"
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-0 group-hover/work:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(226, 232, 240, 0.4), transparent 80%)`,
        }}
      />
      
      <div className="section-container relative z-10">
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Selected Work</h2>
              <h3 className="text-4xl font-bold text-slate-900">Curated Experiments</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white"
                      : "bg-slate-50 text-slate-500 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group cursor-pointer bg-white rounded-2xl p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2 border border-transparent hover:border-slate-100"
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-slate-100 mb-6">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center p-8">
                      <p className="text-white text-sm font-light leading-relaxed text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        {project.preview}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-accent transition-colors">
                        {project.category}
                      </span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-900">
                      {project.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-light leading-snug">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}