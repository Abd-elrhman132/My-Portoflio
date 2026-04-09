"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Terminal } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 min-h-[120vh] relative z-10 flex flex-col justify-center">
      <motion.div 
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <span className="text-accent font-display tracking-[0.3em] uppercase text-sm mb-6 inline-block drop-shadow-[0_0_10px_rgba(139,92,246,0.6)]">
              The Story
            </span>
            <h2 className="text-4xl md:text-6xl font-sans font-light text-white mb-8 leading-tight">
              Crafting Digital Masterpieces.
            </h2>
            
            <div className="space-y-6 text-lg text-white/70 font-sans leading-relaxed mb-12">
              <p>
                I'm a frontend developer who believes that code is art. My journey started with curiosity about how the web works and evolved into a passion for crafting high-performance, beautifully animated experiences.
              </p>
              <p>
                I don't just build websites — I build identities. By combining technical precision with creative vision, I ensure every project stands out in today's digital landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-4xl font-display font-light text-white mb-2">100%</p>
                <p className="text-sm text-accent uppercase tracking-widest font-display">Dedication to Project Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-display font-light text-white mb-2">1+</p>
                <p className="text-sm text-accent uppercase tracking-widest font-display">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-display font-light text-white mb-2">10+</p>
                <p className="text-sm text-accent uppercase tracking-widest font-display">Projects Completed</p>
              </div>
              <div>
                <p className="text-4xl font-display font-light text-white mb-2">∞</p>
                <p className="text-sm text-accent uppercase tracking-widest font-display">Energy For Innovation</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Glossy Terminal Container */}
            <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              
              <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-white/5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <div className="ml-4 flex items-center gap-2 text-white/40 text-xs font-mono">
                  <Terminal size={14} /> about.ts
                </div>
              </div>
              
              <div className="p-8 font-mono text-sm leading-relaxed text-white/80">
                <p className="text-accent mb-4">const corePrinciples = [</p>
                <ul className="pl-6 space-y-4">
                  <li>
                    <span className="text-blue-400">"Clean Code"</span>: <span className="text-white/60">Maintainable & Scalable architectures,</span>
                  </li>
                  <li>
                    <span className="text-green-400">"Performance"</span>: <span className="text-white/60">Optimized for speed & SEO,</span>
                  </li>
                  <li>
                    <span className="text-purple-400">"Animations"</span>: <span className="text-white/60">Smooth & purposeful interactions,</span>
                  </li>
                  <li>
                    <span className="text-yellow-400">"Pixel Perfect"</span>: <span className="text-white/60">Attention to every single detail</span>
                  </li>
                </ul>
                <p className="text-accent mt-4">];</p>
              </div>
            </div>
            
            {/* Background glow behind terminal */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10" />
          </div>

        </div>

      </motion.div>
    </section>
  );
}
