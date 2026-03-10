import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

const categories = ["All", "Mobile", "Growth", "Consulting"];

const projects = [
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
  },
  {
    id: 4,
    title: "iOS Interface Study",
    category: "Mobile",
    description: "A conceptual exploration of next-generation iOS interaction patterns.",
    preview: "Pushing the boundaries of ergonomics and spatial awareness in mobile design.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Manager",
    problem: "Standard mobile interaction patterns have remained largely static for a decade, failing to fully leverage the increasing screen sizes and advanced haptic capabilities of modern hardware.",
    impact: "Developed a series of high-fidelity prototypes exploring 'reachability-first' navigation and context-aware gestures. These concepts were featured in several design publications and influenced subsequent client-side mobile architectures."
  },
  {
    id: 5,
    title: "Spatial Audio App",
    category: "Mobile",
    description: "Designing an immersive audio experience for high-fidelity listening.",
    preview: "Visualizing soundscapes through generative art and spatial interactions.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Manager",
    problem: "Traditional music players focus on lists and grids, which fails to capture the emotional and spatial depth of high-fidelity audio recordings.",
    impact: "Created a unique generative UI that responds in real-time to audio frequencies, creating a synesthetic experience for the user. The app received a 'Design of the Week' award and reached 50k downloads in its first month."
  },
  {
    id: 6,
    title: "Retention Engine",
    category: "Growth",
    description: "Building a predictive modeling tool for subscription-based businesses.",
    preview: "Reducing churn through automated behavioral interventions.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Manager",
    problem: "Subscription businesses often react to churn after it happens, rather than identifying at-risk users early enough to intervene effectively.",
    impact: "Architected a predictive analytics dashboard that identifies at-risk cohorts with 85% accuracy. By automating targeted discount offers and re-engagement emails, we reduced overall churn by 12% for beta partners."
  }
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

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

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
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
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                    activeCategory === cat
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-400 hover:text-slate-900"
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
                  
                  if (absOffset > 2) return null;

                  return (
                    <motion.div
                      key={project.id}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(_, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);
                        if (swipe < -swipeConfidenceThreshold) {
                          next();
                        } else if (swipe > swipeConfidenceThreshold) {
                          prev();
                        }
                      }}
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
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="absolute w-[320px] md:w-[450px] aspect-[4/5] md:aspect-[4/3] cursor-grab active:cursor-grabbing"
                      onClick={() => {
                        if (offset !== 0) {
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
                          <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="space-y-2">
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
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Active Card CTA & Pagination */}
            <div className="absolute -bottom-20 left-0 w-full flex flex-col items-center gap-8 z-20">
              {/* Elegant CTA */}
              <AnimatePresence mode="wait">
                <motion.button
                  key={filteredProjects[currentIndex]?.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  onClick={() => setSelectedProject(filteredProjects[currentIndex])}
                  className="group/cta flex items-center gap-3 px-8 py-3.5 bg-white border border-slate-200 rounded-full shadow-sm hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-900 hover:bg-slate-50 transition-all duration-500"
                >
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-900">
                    View Executive Summary
                  </span>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover/cta:text-slate-900 group-hover/cta:translate-x-1 transition-all duration-500" />
                </motion.button>
              </AnimatePresence>

              {/* Pagination Controls */}
              <div className="flex items-center gap-8">
                <button 
                  onClick={prev}
                  disabled={currentIndex === 0}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white hover:shadow-md transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                
                <div className="flex gap-3">
                  {filteredProjects.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        currentIndex === i ? "w-12 bg-slate-900" : "w-4 bg-slate-300"
                      }`}
                    />
                  ))}
                </div>

                <button 
                  onClick={next}
                  disabled={currentIndex === filteredProjects.length - 1}
                  className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-900 disabled:opacity-20 disabled:cursor-not-allowed hover:bg-white hover:shadow-md transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
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
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900">The Impact</h3>
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