import { motion } from "motion/react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ y: 0, x: "-50%" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-[1100px] transition-all duration-500 rounded-full ${
        scrolled 
          ? "py-4 glass shadow-lg shadow-slate-200/50" 
          : "py-6 bg-white/50 backdrop-blur-sm border border-white/20"
      }`}
    >
      <div className="px-8 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
          DJ
        </a>
        
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="md:hidden">
          {/* Mobile menu could go here, but keeping it minimal as requested */}
          <button className="text-slate-900">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
