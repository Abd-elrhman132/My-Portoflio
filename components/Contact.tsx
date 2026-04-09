"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section className="relative py-32 px-4 md:px-8 bg-background z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        
        <div className="flex-1">
          <span className="text-accent font-display tracking-[0.3em] uppercase text-sm drop-shadow-[0_0_10px_rgba(139,92,246,0.6)] mb-6 inline-block">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-7xl font-sans font-light text-white leading-tight mb-8">
            Let's build something <br className="hidden md:block" />
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
              extraordinary.
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-12">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <motion.a 
              href="mailto:abdelrahmanahmedezzatt@gmail.com"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 group shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]"
            >
              <span className="text-white/40 text-xs font-display uppercase tracking-widest">Email</span>
              <span className="text-white group-hover:text-accent transition-colors break-all">abdelrahmanahmedezzatt@gmail.com</span>
            </motion.a>
            
            <motion.a 
              href="https://wa.me/01027766031" target="_blank" rel="noreferrer"
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 group shadow-lg hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)]"
            >
              <span className="text-white/40 text-xs font-display uppercase tracking-widest">WhatsApp</span>
              <span className="text-white group-hover:text-accent transition-colors">01027766031</span>
            </motion.a>
            
            <motion.div 
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:bg-white/10 hover:border-accent/40 hover:shadow-[0_10px_30px_rgba(139,92,246,0.15)] group"
            >
              <span className="text-white/40 text-xs font-display uppercase tracking-widest group-hover:text-accent transition-colors">Location</span>
              <span className="text-white transition-colors">Cairo, Egypt</span>
            </motion.div>
          </div>
        </div>
        
      </div>
      
      {/* Background glow for contact section */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}
