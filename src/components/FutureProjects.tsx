import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect, type FormEvent } from "react";
import { GoogleGenAI } from "@google/genai";
import { Send, Loader2 } from "lucide-react";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function FutureProjects() {
  const [messages, setMessages] = useState<{ role: "user" | "model"; text: string }[]>([
    { role: "model", text: "I am an exploration into how people live and decide. Ask me a question about the search for meaning or the inner life of builders." }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleChat = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput("");
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3.1-pro-preview",
        contents: [
          { role: "user", parts: [{ text: userMsg }] }
        ],
        config: {
          systemInstruction: "You are a digital exploration of the inner life of builders. Your tone is calm, precise, and thoughtful. You avoid corporate jargon and hype. You help users navigate questions about meaning and purpose. Do not use dashes anywhere in your responses."
        }
      });
      
      setMessages(prev => [...prev, { role: "model", text: response.text || "I am contemplating that. Could you rephrase?" }]);
    } catch (error) {
      console.error(error);
      setMessages(prev => [...prev, { role: "model", text: "My connection to the neural network flickered. Try again?" }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="future" className="bg-slate-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400">Future Projects</h2>
              <h3 className="text-4xl font-bold text-slate-900 leading-tight">Explorations into how we live and decide.</h3>
              <p className="text-slate-500 font-light text-lg leading-relaxed">
                My upcoming projects are attempts to answer questions about our behavior. These are not driven by revenue goals or market hype but by a desire to understand our fundamental nature.
              </p>
              <p className="text-slate-500 font-light text-lg leading-relaxed">
                I am interested in tools that encourage reflection and help us navigate the complexities of modern life. I believe that the products we build should help us live more intentionally.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative h-[500px] min-h-[500px]"
          >
            <div className="absolute inset-0 rounded-[2rem] bg-white border border-slate-100 shadow-xl overflow-hidden flex flex-col">
              <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xs">
                    DJ
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Digital Exploration</h4>
                    <div className="flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest leading-none">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                        msg.role === "user"
                          ? "bg-slate-900 text-white rounded-tr-none"
                          : "bg-slate-100 text-slate-800 rounded-tl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-slate-100 p-4 rounded-2xl rounded-tl-none">
                      <Loader2 className="w-4 h-4 animate-spin text-slate-400" />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <form onSubmit={handleChat} className="p-4 bg-slate-50 border-t border-slate-100 flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask a question about meaning..."
                  className="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-accent transition-colors"
                />
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800 disabled:opacity-50 transition-all"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
