import { motion, AnimatePresence } from "motion/react";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";

const categories = ["All", "Builds", "Products", "Experiments"];

const projects = [
  {
    id: 0,
    title: "Arcadio: Multiplayer Mini-Game Platform",
    categories: ["Builds", "Experiments"],
    description: "I designed and built Arcadio end-to-end, a real-time multiplayer mobile game platform featuring fast, social mini-games.",
    appStoreLink: "https://apps.apple.com/us/app/arcadio/id6760566701",
    image: "/public/icon.png",
    role: "Lead Product Manager & Designer",
    problem: "Most mobile games are either overly complex or lack real-time social interaction. There’s a gap for quick, competitive, multiplayer experiences that feel lightweight but engaging.",
    whatIDid: [
      "Built the entire app 0 to 1: Product concept, UX / UI design, Frontend (React Native + Expo), and Backend multiplayer logic.",
      "Designed and developed multiple reaction-based, memory, and precision mini-games.",
      "Implemented real-time multiplayer systems including game state sync, round lifecycles, and latency handling.",
      "Focused heavily on game feel: reduced input lag, smoothed animations, and tuned haptic feedback loops.",
      "Shipped to the App Store and iterated through EAS build pipelines, crash fixes, and performance optimizations."
    ],
    impact: "Successfully took a product from idea to a shipped iOS app, enabling real-time multiplayer gameplay and building a foundation for scalable platform expansion.",
    keyInsight: "Multiplayer games don’t fail because of mechanics; they fail because of latency, sync, and feel."
  },
  {
    id: 1,
    title: "Marriott: Search & Booking Redesign",
    categories: ["Products"],
    description: "Modernizing the web experience for a global hospitality leader during a complex CMS migration.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Manager",
    problem: "Fragmented search and map interfaces made hotel comparison exhausting, leading to high drop-off at the selection stage.",
    whatIDid: [
      "Led the redesign of the Search Results Page (SRP) and Maps experience.",
      "Shipped high-density hotel cards, intuitive amenity filters, and a flexible calendar picker.",
      "Used Glassbox and Adobe Analytics to pinpoint behavioral friction in the booking funnel."
    ],
    impact: "Drastically reduced time-to-selection and established a scalable design system for global content delivery.",
    keyInsight: "Booking friction isn't about a lack of options; it's about the cognitive load of comparing them."
  },
  {
    id: 2,
    title: "Huckleberry: AI Parenting Assistant",
    categories: ["Products", "Experiments"],
    description: "Leading growth initiatives for a top-tier baby wellness app with over 1M monthly active users.",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000",
    role: "Lead Product Manager",
    problem: "Parents were burnt out by manual logging and felt 'data-rich but insight-poor' regarding their child's needs.",
    whatIDid: [
      "Conceptualized and launched 'Wizzy,' a GPT-powered assistant for natural language logging.",
      "Integrated real-time AI recommendations directly into the core sleep and feeding flows.",
      "Partnered with engineering to move the product from a passive tracker to an active intelligent guide."
    ],
    impact: "Significant boost in Day-30 retention and a 25% reduction in friction for daily logging events.",
    keyInsight: "Parents don't want more charts; they want an answer to 'What should I do right now?'"
  },
  {
    id: 3,
    title: "CarGurus: Homepage & Dealership Mode",
    categories: ["Products"],
    description: "Scaling the top-of-funnel experience for the world's most visited automotive marketplace.",
    image: "/public/cargurus.png",
    role: "Lead Product Manager",
    problem: "The product was a 'lead-gen machine' that became useless the moment a buyer actually stepped onto a dealership lot.",
    whatIDid: [
      "Overhauled the homepage with dynamic, behavior-based modules to drive re-engagement.",
      "Shipped 'Dealership Mode' (0 to 1), providing contextual vehicle insights for users physically at the lot.",
      "Shifted the product vision from 'finding a car' to 'navigating the entire purchase journey.'"
    ],
    impact: "Created a new high-intent engagement surface and strengthened long-term defensibility against pure-search competitors.",
    keyInsight: "The highest-intent moment in car buying isn't the search; it's standing on the lot with the keys in hand."
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.categories.includes(activeCategory));

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
              <h3 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">Studio</h3>
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
                        {project.categories.map((cat: string) => (
                          <span key={cat} className="text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-500 bg-indigo-50 px-2.5 py-1 rounded-md">
                            {cat}
                          </span>
                        ))}
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
                    {selectedProject.appStoreLink && (
                      <a 
                        href={selectedProject.appStoreLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-bold text-sm transition-colors mt-2"
                      >
                        <span>View on App Store</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    )}
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
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900">Context</h3>
                    </div>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </section>

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
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900">What I Did</h3>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.whatIDid?.map((item: string, i: number) => (
                        <li key={i} className="flex gap-3 text-lg text-slate-600 font-light leading-relaxed">
                          <span className="text-indigo-500 font-bold">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </section>

                  <section className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-slate-200" />
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-slate-900">Impact</h3>
                    </div>
                    <p className="text-lg text-slate-600 font-light leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </section>

                  <section className="bg-indigo-50/50 p-8 rounded-3xl border border-indigo-100/50 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-indigo-200" />
                      <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-indigo-600">Key Insight</h3>
                    </div>
                    <p className="text-xl text-slate-900 font-medium italic leading-relaxed">
                      "{selectedProject.keyInsight}"
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
                  <div className="flex gap-2">
                    {selectedProject.categories.map((cat: string) => (
                      <span key={cat} className="text-[10px] uppercase tracking-widest text-slate-300 font-bold">
                        {cat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}