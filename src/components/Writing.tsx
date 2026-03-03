import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="group relative bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
        >
          <div className="grid md:grid-cols-2 min-h-[400px]">
            {/* Left Side: Textured Background */}
            <div className="relative bg-slate-50 overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-30" />
              <div className="absolute inset-0 bg-radial from-slate-200/50 to-transparent" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="w-full h-full border border-slate-200/50 rounded-lg flex items-center justify-center">
                  <span className="font-serif italic text-4xl text-slate-300 select-none">Featured</span>
                </div>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="p-8 md:p-16 flex flex-col justify-center space-y-8">
              <div className="space-y-2">
                <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                  <span>{FEATURED_ESSAY.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-200" />
                  <span>{FEATURED_ESSAY.date}</span>
                </div>
                <h3 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
                  {FEATURED_ESSAY.title}
                </h3>
              </div>
              
              <p className="text-slate-500 font-light leading-relaxed max-w-md">
                {FEATURED_ESSAY.summary}
              </p>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-slate-900 group-hover:translate-x-1 transition-transform cursor-pointer"
              >
                Read Essay
              </button>
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
                    : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group p-8 bg-white border border-slate-100 rounded-xl hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-500 flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-slate-400 font-medium">
                      <span>{article.category}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-200" />
                      <span>{article.date}</span>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-serif text-xl text-slate-900 group-hover:text-slate-700 transition-colors">
                        {article.title}
                      </h4>
                      <p className="text-sm text-slate-500 font-light leading-relaxed">
                        {article.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Essay Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 50, scale: 0.95 }}
              className="relative w-full max-w-3xl max-h-[90vh] bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Modal Header */}
              <div className="p-6 md:p-10 border-b border-slate-100 flex justify-between items-start">
                <div className="space-y-2">
                  <div className="flex items-center gap-4 text-[10px] uppercase tracking-widest text-slate-400 font-medium">
                    <span>{FEATURED_ESSAY.category}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-200" />
                    <span>{FEATURED_ESSAY.date}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl text-slate-900 leading-tight">
                    {FEATURED_ESSAY.title}
                  </h3>
                </div>
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-slate-50 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-slate-400" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex-1 overflow-y-auto p-6 md:p-16">
                <div className="prose prose-slate max-w-none">
                  {FEATURED_ESSAY.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-lg text-slate-600 font-light leading-relaxed mb-8 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
