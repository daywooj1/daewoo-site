import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

const categories = ["All", "Mobile", "Growth", "Consulting"];

const projects = [
  {
    id: 0,
    title: "Arcadio",
    category: "Mobile",
    description: "A next-generation iOS gaming platform focused on retro-modern arcade experiences.",
    preview: "Redefining mobile gaming through haptic-first interactions and spatial soundscapes.",
    image: "https://images.unsplash.com/photo-1605142859862-978be7eba909?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Manager & Designer",
    problem: "Mobile gaming often lacks the tactile feedback and immersive atmosphere of classic arcade cabinets, leading to a disconnected user experience.",
    impact: "Developed a custom haptic engine that translates on-screen action into physical feedback, resulting in a 40% increase in session length during beta testing."
  },
  {
    id: 1,
    title: "CarGurus Mobile",
    category: "Mobile",
    description: "Leading mobile product strategy for the world's most visited automotive marketplace.",
    preview: "Scaling a high-performance mobile experience for millions of monthly active users.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Manager",
    problem: "As the automotive market shifted toward mobile-first consumption, CarGurus needed to modernize its legacy mobile experience to maintain its market-leading position and improve conversion rates across a fragmented user journey.",
    impact: "Successfully overhauled the core mobile search and vehicle detail pages, resulting in a 14% increase in lead conversion and a significant improvement in App Store ratings. Established a new design system that reduced front-end development time by 30%."
  },
  {
    id: 2,
    title: "Huckleberry Sleep",
    category: "Growth",
    description: "Driving user activation and retention for the #1 baby sleep and wellness app.",
    preview: "Optimizing the first-mile experience through data-driven behavioral design.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Manager",
    problem: "High drop-off rates during the initial onboarding flow were preventing new parents from realizing the value of the AI-driven sleep predictions, leading to lower-than-expected long-term retention.",
    impact: "Redesigned the onboarding questionnaire using behavioral psychology principles, increasing user activation by 22%. Implemented a personalized notification strategy that boosted Day-30 retention by 18%."
  },
  {
    id: 3,
    title: "Deloitte Digital",
    category: "Consulting",
    description: "Architecting digital transformation strategies for Fortune 500 enterprises.",
    preview: "Bridging the gap between complex business requirements and elegant digital solutions.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Consultant",
    problem: "Large-scale enterprises often struggle with siloed data and antiquated internal tools, leading to operational inefficiencies and a poor employee experience that ultimately impacts the bottom line.",
    impact: "Led the digital strategy for a global retail client, consolidating 12 disparate legacy systems into a unified cloud-based platform. This transformation saved the organization an estimated $4.2M in annual operating costs."
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top } = currentTarget.getBoundingClientRect();
    setMousePos({ x: clientX - left, y: clientY - top });
  };

  return (
    <section 
      id="work" 
      className="bg-[#F8FAFC] border-t border-slate-200/40 relative overflow-hidden group/work py-24 md:py-32"
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
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Selected Work</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Curated Experiments</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white border-slate-900 shadow-lg shadow-slate-200"
                      : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid View Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group/card flex flex-col bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-slate-200/60 border border-slate-100 transition-all duration-700 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  {/* Image Container */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-105"
                    />
                    <div className="absolute inset-0 bg-slate-900/0 group-hover/card:bg-slate-900/5 transition-colors duration-700" />
                  </div>
                  
                  {/* Content Area */}
                  <div className="p-8 md:p-10 space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-md">
                          {project.category}
                        </span>
                      </div>
                      <h4 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
                        {project.title}
                      </h4>
                    </div>
                    
                    <p className="text-base text-slate-600 font-light leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] pt-2 group-hover/card:text-indigo-600 transition-colors">
                      <span className="border-b-2 border-slate-100 group-hover/card:border-indigo-200 pb-1 transition-all">
                        Learn More
                      </span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/card:translate-x-1.5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Project Executive Summary Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-4xl bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto max-h-[90vh]"
            >
              {/* Image Side */}
              <div className="hidden md:block w-2/5 relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white" />
              </div>

              {/* Content Side */}
              <div className="flex-1 p-8 md:p-12 overflow-y-auto">
                <div className="flex justify-between items-start mb-12">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-400">
                      Executive Summary
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
                  >
                    <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900 transition-colors" />
                  </button>
                </div>

                <div className="space-y-12">
                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-slate-200" />
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900">The Problem</h3>
                    </div>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-slate-200" />
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900">My Impact</h3>
                    </div>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </section>
                </div>

                <div className="mt-16 pt-8 border-t border-slate-100 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                      DJ
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900">David Jeong</p>
                      <p className="text-xs text-slate-400">{selectedProject.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">
                    {selectedProject.category}
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}