import { motion, AnimatePresence, useMotionValue, useTransform } from "motion/react";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    id: 5,
    title: "Spatial Audio App",
    category: "Mobile",
    description: "Designing an immersive audio experience for high-fidelity listening.",
    preview: "Visualizing soundscapes through generative art and spatial interactions.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 6,
    title: "Retention Engine",
    category: "Growth",
    description: "Building a predictive modeling tool for subscription-based businesses.",
    preview: "Reducing churn through automated behavioral interventions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  const next = () => {
    if (currentIndex < filteredProjects.length - 1) {
      setCurrentIndex(prev => prev + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <section 
      id="work" 
      className="bg-[#F4F6F8] border-t border-slate-200/40 relative overflow-hidden group/work py-24 md:py-32"
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
        <div className="space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Selected Work</h2>
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

          {/* 3D Carousel Container */}
          <div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px]">
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => {
                  const offset = index - currentIndex;
                  const absOffset = Math.abs(offset);
                  
                  // Only render visible cards for performance
                  if (absOffset > 2) return null;

                  return (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, scale: 0.8, x: offset * 400 }}
                      animate={{ 
                        opacity: 1 - absOffset * 0.3,
                        scale: 1 - absOffset * 0.15,
                        x: offset * 320,
                        rotateY: offset * -45,
                        z: -absOffset * 300,
                        zIndex: 10 - absOffset,
                      }}
                      exit={{ opacity: 0, scale: 0.8, x: offset * 400 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 25,
                      }}
                      className="absolute w-[320px] md:w-[450px] aspect-[4/5] md:aspect-[4/3] cursor-pointer"
                      onClick={() => {
                        if (offset === 0) {
                           // Open project details or scroll
                        } else {
                          setCurrentIndex(index);
                        }
                      }}
                    >
                      <div className="relative w-full h-full bg-white rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 group/card">
                        <img
                          src={project.image}
                          alt={project.title}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                        />
                        
                        {/* Overlay Content */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent transition-opacity duration-500 ${offset === 0 ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="absolute bottom-0 left-0 p-8 space-y-2">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-300">
                              {project.category}
                            </span>
                            <h4 className="text-2xl font-bold text-white">
                              {project.title}
                            </h4>
                            <p className="text-sm text-slate-300 font-light line-clamp-2">
                              {project.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Navigation Controls */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-8 z-20">
              <button 
                onClick={prev}
                disabled={currentIndex === 0}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex gap-2">
                {filteredProjects.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentIndex === i ? "w-8 bg-slate-900" : "bg-slate-200"
                    }`}
                  />
                ))}
              </div>

              <button 
                onClick={next}
                disabled={currentIndex === filteredProjects.length - 1}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}