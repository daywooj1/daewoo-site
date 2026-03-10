import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { X, BookOpen } from "lucide-react";

const CATEGORIES = ["All", "Meaning", "Product", "Focus", "Climbing", "Chess", "Experiments"];

const ARTICLES = [
  {
    id: 1,
    title: "The Long Game: My Chess Journey",
    subtitle: "Lessons from the board on honesty, obsession, and the slow path to mastery.",
    category: "Chess",
    date: "March 2026",
    content: `
      Chess is one of the most brutally honest things I have ever done.

      There are very few places in life where mistakes are punished so immediately and so clearly. The board does not care how smart you think you are. It does not care how hard you studied yesterday. It only cares whether the move you made was good or bad.

      That honesty is what drew me in.

      When I first started playing seriously, I became fascinated by how deep the game was. At the surface it looks simple. Thirty two pieces on a board. But the deeper you go the more you realize that the game is almost endless. Every position hides layers of ideas that only reveal themselves after years of study.

      At some point curiosity turned into obsession.

      I started studying constantly. Solving tactics every day. Analyzing grandmaster games. Reviewing my losses late into the night trying to understand where things went wrong. Improvement in chess is slow and uncomfortable. Every time you climb a little higher the game exposes a new weakness you did not know you had.

      But that process was addictive.

      Eventually I made a decision that surprised a lot of people around me. I left my job at Deloitte so I could focus on chess full time for a period of my life.

      It felt like a risk, but it was something I wanted to do before life moved too far ahead.

      During that time I traveled to tournaments and immersed myself in competitive chess. I had strong performances in events like the Eastern Open, the Boston Congress, and tournaments at the Marshall Chess Club in New York. Those rooms were filled with players who had spent decades studying the game. Sitting across from them felt both intimidating and exciting.

      Tournament chess is exhausting in a way most people do not realize. Games can last four or five hours. Afterward you go back to the hotel or the analysis room and replay the entire battle move by move trying to understand what really happened.

      Then you wake up and do it again the next day.

      Online my rating climbed steadily as well. Eventually I crossed 2300 on Chess.com, which at one point felt impossibly far away.

      Looking back, chess taught me something important about improvement.

      Progress rarely feels dramatic. It happens quietly through hundreds of small corrections. One slightly better evaluation. One mistake avoided. One idea understood a little more clearly.

      Over time those small upgrades change the way you think.

      Even today the game still shapes how I approach problems. It taught me patience, resilience, and respect for the long game.
    `
  },
  {
    id: 2,
    title: "The Vertical World: Climbing and the Joy of Movement",
    subtitle: "Exploring the conversation with gravity and the patience required for progress.",
    category: "Climbing",
    date: "Feb 2026",
    content: `
      Climbing feels different from most sports.

      Many sports are about speed or power or scoring points. Climbing is something else. It feels more like a conversation with gravity.

      When I first started climbing I immediately fell in love with the movement. Each route felt like a puzzle. You are constantly trying to figure out how to shift your weight, how to place your feet, how to keep tension through your body so that a sequence suddenly becomes possible.

      At first progress comes quickly.

      You learn basic technique. Your fingers get stronger. Routes that once felt impossible slowly become manageable.

      Then the real challenge begins.

      Climbing has a way of exposing every weakness in your body. Finger strength, core tension, flexibility, mental composure. As the difficulty increases even tiny inefficiencies become obvious.

      The grind becomes physical.

      Hours spent climbing. Hangboard sessions. Studying movement. Falling again and again on the same sequence until something finally clicks.

      And eventually injuries arrive.

      Finger tendons get strained. Pulley injuries appear. Small tweaks turn into forced rest days that feel frustrating when all you want to do is climb.

      At first I struggled with that.

      Climbers often talk about listening to your body but it is difficult when you love the sport. The instinct is always to push harder and climb through pain.

      Over time I started to understand that climbing rewards patience.

      Learning how to train intelligently matters just as much as raw effort. Recovery matters. Long term sustainability matters.

      Injuries slow you down but they also force you to become more thoughtful about how you move and how you train.

      And when you finally return to the wall after time away, the experience feels different. More deliberate. More appreciative.

      Climbing has taught me that progress upward is rarely a straight line.

      Sometimes the fastest path up the wall is learning when to pause.
    `
  },
  {
    id: 3,
    title: "Building in the Age of Vibe Coding",
    subtitle: "How AI tools are collapsing the gap between imagination and creation.",
    category: "Product",
    date: "Feb 2026",
    content: `
      The way software is built is changing rapidly.

      For a long time creating a product required a very rigid structure. Designers created mockups. Engineers implemented the code. Product managers wrote documents and coordinated everything between teams.

      The distance between an idea and a working product was large.

      Today that gap is shrinking quickly.

      With modern AI tools, design systems, and development platforms, the speed at which someone can turn an idea into a prototype has exploded. Entire mobile apps can be scaffolded in hours. Interfaces can be generated and refined almost instantly.

      Some people jokingly call this vibe coding.

      The phrase sounds casual but something real is happening underneath it. The cost of experimentation is collapsing.

      Instead of debating an idea for weeks, you can often build a rough version and test it the same day. That shift dramatically changes how products evolve.

      For product managers this changes the role as well.

      The best PMs are no longer just organizers of work. They are increasingly builders themselves. They experiment with prototypes, explore technical possibilities, and push ideas forward before they ever reach a formal roadmap.

      Speed of learning becomes the real advantage.

      When ideas can be tested quickly, teams can iterate faster and discover what actually works for users. The feedback loop tightens and the product improves faster.

      Of course tools alone do not create great products. Taste still matters. Judgment still matters. Understanding people still matters.

      But the builders who combine strong product intuition with modern tools will have an enormous advantage.

      For someone who loves building things, this moment feels incredibly exciting.

      The distance between imagination and creation has never been smaller.
    `
  },
  {
    id: 4,
    title: "Why I Care About Understanding the Universe",
    subtitle: "Seeking truth in the enormity of the cosmos and the mystery of consciousness.",
    category: "Meaning",
    date: "Jan 2026",
    content: `
      Ever since I was young I have been fascinated by questions that do not have easy answers.

      Why does the universe exist at all.
      What is consciousness.
      Why is there something instead of nothing.

      Most of daily life is spent dealing with practical concerns. Work, schedules, responsibilities. But every once in a while you step back and realize how strange existence actually is.

      We are conscious beings living on a small planet orbiting a star in a galaxy containing hundreds of billions of stars. That galaxy itself is only one among hundreds of billions of galaxies in the observable universe.

      And somehow matter arranged itself in a way that allows us to think about all of this.

      That fact alone feels extraordinary.

      Fields like physics, cosmology, and philosophy try to explore these questions from different angles. Physics attempts to describe the fundamental laws governing reality. Philosophy tries to examine the assumptions behind our understanding of existence.

      Neither field has all the answers.

      But the pursuit itself is meaningful.

      Thinking about these questions changes how you see everyday life. It creates a sense of perspective. Many problems that feel overwhelming in the moment become smaller when viewed against the scale of the universe.

      Curiosity about existence has shaped how I approach learning. It encourages humility. It reminds me that reality is far more complex than our current understanding.

      The deeper you go into these questions the more mysterious things become.

      And that mystery is beautiful.
    `
  },
  {
    id: 5,
    title: "The Problem With Most Mobile Apps",
    subtitle: "Moving beyond engagement metrics toward products that respect human time.",
    category: "Product",
    date: "Dec 2025",
    content: `
      Most mobile apps today feel strangely similar.

      They are optimized aggressively for engagement metrics. Endless scrolling feeds, notifications designed to pull you back in, interfaces tuned to maximize time spent inside the product.

      From a business perspective this makes sense. Attention drives revenue.

      But something about it often feels empty.

      Many apps are designed around keeping users occupied rather than helping them accomplish something meaningful.

      The best products feel different.

      Great apps remove friction from people's lives. They simplify tasks that used to feel complicated. They respect the user's time rather than trying to capture more of it.

      Good product design is often about restraint.

      Not every screen needs more features. Not every notification needs to be sent. Not every metric needs to be maximized.

      The goal should be creating something people genuinely enjoy using.

      As someone working in product, I find this challenge interesting. It forces you to constantly ask a simple question.

      Are we building something that actually improves someone's day.

      Or are we just adding more noise to the digital world.

      The difference between those two outcomes often comes down to thoughtful design and honest product thinking.
    `
  },
  {
    id: 6,
    title: "The Return of the Polymath",
    subtitle: "How the internet is reviving the spirit of cross-disciplinary exploration.",
    category: "Experiments",
    date: "Nov 2025",
    content: `
      For a long time specialization dominated modern careers.

      People were encouraged to go deep into one narrow field and build expertise there. Engineers became highly specialized. Academics focused on increasingly narrow topics.

      This approach produced incredible advancements, but it also created silos.

      Today the internet is quietly reversing that trend.

      Information is more accessible than ever. Anyone can learn about physics, philosophy, finance, software engineering, or art with relatively little barrier to entry.

      Curiosity no longer has to stay confined within a single discipline.

      The most interesting thinkers today often move across multiple fields. They connect ideas from technology, science, psychology, design, and philosophy in ways that create new perspectives.

      This kind of intellectual cross training feels valuable.

      Studying chess teaches strategic thinking.
      Climbing teaches patience and physical awareness.
      Product design teaches empathy for users.
      Philosophy teaches you how to question assumptions.

      Each discipline sharpens the others.

      The result is a more integrated way of understanding the world.

      In many ways the internet is bringing back something that existed centuries ago. The spirit of the polymath. People who explore widely and allow insights from one domain to influence another.

      Curiosity becomes the guiding principle.

      And the more you learn, the more you realize how much remains to be explored.
    `
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
  const [selectedArticle, setSelectedArticle] = useState<any>(null);

  const filteredArticles = activeCategory === "All" 
    ? ARTICLES 
    : ARTICLES.filter(article => article.category === activeCategory);

  const openModal = (article: any) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

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
                  onClick={() => openModal(FEATURED_ESSAY)}
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
                  onClick={() => openModal(article)}
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
        {isModalOpen && selectedArticle && (
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
                  <span>{selectedArticle.category}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-200" />
                  <span>{selectedArticle.date}</span>
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
                      {selectedArticle.title}
                    </h1>
                    <div className="w-12 h-[1px] bg-slate-900/20" />
                  </header>

                  <div className="font-serif text-xl md:text-2xl text-slate-800 leading-[1.6] font-light space-y-10">
                    {selectedArticle.content.split('\n\n').map((paragraph: string, index: number) => {
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
