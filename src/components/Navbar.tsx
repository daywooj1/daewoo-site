import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking a link
  const handleLinkClick = () => setIsOpen(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Writing", href: "#writing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, x: "-50%" }}
      animate={{ 
        y: 0, 
        x: "-50%",
        borderRadius: isOpen ? "24px" : "9999px",
        paddingTop: scrolled || isOpen ? "16px" : "24px",
        paddingBottom: scrolled || isOpen ? "16px" : "24px",
      }}
      transition={{ 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1],
        borderRadius: { duration: 0.4 }
      }}
      className={`fixed top-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-[1100px] ${
        scrolled || isOpen
          ? "glass shadow-lg shadow-slate-200/50" 
          : "bg-white/50 backdrop-blur-sm border border-white/20"
      }`}
    >
      <div className="px-8 flex justify-between items-center">
        <motion.a 
          href="#" 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity"
        >
          DJ
        </motion.a>
        
        <div className="hidden md:flex space-x-10 relative">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors relative group px-2 py-1"
            >
              {link.name}
              <span className="absolute -bottom-1 left-2 w-0 h-[1px] bg-slate-900 transition-all duration-300 group-hover:w-[calc(100%-1rem)]" />
            </motion.a>
          ))}
        </div>

        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-900 p-2 -mr-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden"
          >
            <div className="px-8 pb-8 pt-4 flex flex-col space-y-6">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={handleLinkClick}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg font-medium text-slate-600 hover:text-slate-900 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}