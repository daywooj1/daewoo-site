import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, BookOpen } from "lucide-react";

const CATEGORIES = ["All", "Meaning", "Product", "Focus", "Climbing", "Chess", "Experiments"];

const ARTICLES = [
  {
    id: 1,
    title: "The Strategy of the Board",
    subtitle: "Lessons from chess on long-term thinking.",
    category: "Chess",
    date: "Feb 2026",
  },
  {
    id: 2,
    title: "Clarity in the Vertical",
    subtitle: "What climbing teaches about focus and fear.",
    category: "Climbing",
    date: "Jan 2026",
  },
  {
    id: 3,
    title: "The Architecture of Intention",
    subtitle: "Designing products that respect human attention.",
    category: "Product",
    date: "Dec 2025",
  },
  {
    id: 4,
    title: "Deep Work and the Modern Builder",
    subtitle: "Cultivating the discipline of focus.",
    category: "Focus",
    date: "Nov 2025",
  },
  {
    id: 5,
    title: "Small Experiments in Living",
    subtitle: "Testing the boundaries of daily habits.",
    category: "Experiments",
    date: "Oct 2025",
  },
  {
    id: 6,
    title: "The Silence of the Peak",
    subtitle: "Finding solitude in high places.",
    category: "Climbing",
    date: "Sep 2025",
  },
];

const FEATURED_ESSAY = {
  title: "The Question That Refuses to Leave",
  category: "Meaning",
  date: "March 2026",
  summary: "A reflection on why the search for meaning is not optional, and why the pursuit of truth feels like a responsibility rather than a hobby.",
  content: `
    There is one question that has followed me quietly for as long as I can remember.

    What is all of this for.

    Without an answer, or at least an honest attempt at one, life begins to feel like motion without direction. Days become tasks. Weeks become noise. Years become a blur of distractions that slowly consume the only resource we are truly given, which is time.

    At the most human level, I believe our shared purpose is simple. We are here to love well. To cherish time with family and friends. To build memories that feel warm decades later. To create relationships that make existence lighter and more joyful for the people around us. That alone is sacred.

    But there is another layer that refuses to be quiet.

    The universe is unimaginably vast. Galaxies stretch beyond comprehension. Time itself bends and expands in ways we barely understand. And somehow, in the middle of this enormity, we exist with awareness. We are conscious. We ask questions. We are curious.

    That curiosity feels like a clue.

    Why do we possess this peculiar drive to understand. Why are we unsettled by mystery. Why do we look at the night sky and feel both small and called forward at the same time.

    I struggle with the idea of living purely in the mundane. Repetitive cycles of work, consumption, and distraction feel insufficient in a universe this strange. It is not that daily responsibilities lack value. They matter. But they cannot be the entire story.

    My deeper meaning is to seek truth.

    Truth about existence. Truth about consciousness. Truth about why there is something rather than nothing. Whether the answer is God, mathematics, an underlying field of reality we cannot yet perceive, or something entirely beyond our categories, I feel compelled to look.

    This pursuit is not academic to me. It is existential.

    I find joy in exploring neuroscience and the hard problem of consciousness. In reading about quantum physics and ontology. In thinking about longevity, the limits of knowledge, and the structure of reality itself. Each layer of understanding feels like stepping slightly closer to something fundamental.

    Perhaps we will never fully know. Perhaps the scale of the cosmos dwarfs our capacity forever. But the act of seeking feels meaningful in itself.

    To search is to honor the gift of awareness.

    To question is to respect the fact that we are here at all.

    And if I am fortunate enough to build products, write ideas, or create things in this lifetime, I want them to be shaped by that search. Not by distraction. Not by trend. But by a sincere attempt to understand what it means to exist in a universe this vast.

    The question refuses to leave.

    So I choose not to ignore it.
  `
};

export default function Writing() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredArticles = activeCategory === "All" 
    ? ARTICLES 
    : ARTICLES.filter(article => article.category === activeCategory);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen]);

  return (
    <section id="writing" className="bg-white border-t border-slate-200/40 py-24 md:py-32">
      <div className="section-container space-y-20">
        {/* Header */}
        <div className="space-y-4">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-slate-500">Writing</h2>
          <p className="text-xl text-slate-900 font-light">
            A collection of ideas on building, meaning, and discipline.
          </p>
        </div>

        {/* Featured Essay */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ 
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-700"
        >
          <div className="p-8 md:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
            <div className="space-y-6 flex-1">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="px-3 py-1 bg-slate-900 text-white text-[9px] uppercase tracking-[0.3em] font-bold rounded-full">Featured</span>
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-slate-600 font-bold">
                    <span>{FEATURED_ESSAY.category}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-300" />
                    <span>{FEATURED_ESSAY.date}</span>
                  </div>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
                  {FEATURED_ESSAY.title}
                </h3>
              </div>
              
              <p className="text-slate-600 font-light leading-relaxed max-w-2xl text-lg">
                {FEATURED_ESSAY.summary}
              </p>

              <div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] font-bold text-slate-900 group-hover:gap-5 transition-all cursor-pointer"
                >
                  <span className="border-b-2 border-slate-900/10 pb-1 group-hover:border-slate-900 transition-colors">Read Essay</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
            </div>

            <div className="hidden md:flex items-center justify-center p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <BookOpen className="w-12 h-12 text-slate-200 group-hover:text-slate-900 transition-colors duration-500" />
            </div>
          </div>
        </motion.div>

        {/* Archive Section */}
        <div className="space-y-12">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-6">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-[11px] uppercase tracking-widest font-medium transition-all rounded-full ${
                  activeCategory === category
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* List View */}
          <div className="grid md:grid-cols-2 gap-4">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ 
                    duration: 0.4, 
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group relative p-6 bg-white border border-slate-100 rounded-2xl hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/40 transition-all duration-500 cursor-pointer flex flex-col justify-between gap-6"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-slate-400 font-bold">
                      <span className="text-slate-900 bg-slate-50 px-2 py-0.5 rounded">{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span>{article.date}</span>
                    </div>
                    <h4 className="font-serif text-xl text-slate-900 group-hover:text-slate-700 transition-colors leading-snug">
                      {article.title}
                    </h4>
                    <p className="text-sm text-slate-500 font-light leading-relaxed line-clamp-2">
                      {article.subtitle}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-end mt-auto">
                    <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-500">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-white transition-colors">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Essay Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
            />
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-5xl h-full md:h-auto md:max-h-[90vh] bg-[#fdfdfd] md:rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header - Sticky */}
              <div className="sticky top-0 z-20 bg-[#fdfdfd]/80 backdrop-blur-md px-6 py-4 md:px-12 md:py-8 border-b border-slate-100 flex justify-between items-center">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-slate-400 font-bold">
                  <span>{FEATURED_ESSAY.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-200" />
                  <span>{FEATURED_ESSAY.date}</span>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-100 rounded-full transition-colors group"
                >
                  <X className="w-5 h-5 text-slate-400 group-hover:text-slate-900 transition-colors" />
                </button>
              </div>

              {/* Modal Content - Scrollable */}
              <div className="flex-1 overflow-y-auto px-6 py-12 md:px-24 md:py-20">
                <article className="max-w-2xl mx-auto">
                  <header className="mb-16 space-y-6">
                    <h1 className="font-serif text-4xl md:text-6xl text-slate-900 leading-[1.1] tracking-tight">
                      {FEATURED_ESSAY.title}
                    </h1>
                    <div className="w-12 h-[1px] bg-slate-900/20" />
                  </header>

                  <div className="font-serif text-xl md:text-2xl text-slate-800 leading-[1.6] font-light space-y-10">
                    {FEATURED_ESSAY.content.split('\n\n').map((paragraph, index) => {
                      const text = paragraph.trim();
                      if (!text) return null;
                      
                      // Check if it's a short line that might be a subheader or emphasis
                      const isShort = text.length < 50 && !text.endsWith('.');
                      
                      return (
                        <p 
                          key={index} 
                          className={`${isShort ? "text-slate-900 font-medium italic mt-12 mb-4" : "opacity-90"}`}
                        >
                          {text}
                        </p>
                      );
                    })}
                  </div>

                  <footer className="mt-24 pt-12 border-t border-slate-100 flex flex-col items-center space-y-6">
                    <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                      DJ
                    </div>
                    <p className="text-[10px] uppercase tracking-[0.4em] text-slate-400 font-bold">
                      End of Essay
                    </p>
                  </footer>
                </article>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}