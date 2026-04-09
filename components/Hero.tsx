"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] flex flex-col justify-center px-4 md:px-8 lg:px-16 pt-32 pb-16">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mb-8"
        >
          <span className="text-accent font-display tracking-[0.3em] uppercase text-sm md:text-base drop-shadow-[0_0_10px_rgba(139,92,246,0.8)]">
            Creative Frontend Developer
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="text-5xl md:text-7xl lg:text-9xl font-black font-display tracking-tighter text-white uppercase drop-shadow-2xl leading-[0.9] mb-8"
        >
          Abdelrahman <br /> Ahmed
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="max-w-2xl"
        >
          <h2 className="text-xl md:text-3xl text-white font-light font-display tracking-tight mb-4">
            Turning Ideas into Fast, Interactive Web Experiences
          </h2>
          <p className="text-white/60 font-sans text-lg md:text-xl leading-relaxed mb-12">
            Frontend Developer focused on clean code, smooth animations, and responsive interfaces that feel great to use.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-accent text-white font-display uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.6)]"
            >
              Explore My Work
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-display uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-md"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-4 md:left-8 lg:left-16 hidden md:flex items-center gap-4"
      >
        <span className="text-white/40 font-display tracking-widest text-xs uppercase rotate-[-90deg] origin-left translate-y-8">Scroll</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}
