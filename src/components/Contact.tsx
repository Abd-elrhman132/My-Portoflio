import { motion } from "framer-motion";
import { Reveal, StaggerReveal, StaggerItem } from "./Reveal";

export default function Contact() {
  return (
    <section className="relative py-32 px-4 md:px-8 bg-background z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-16">
        
        <div className="flex-1">
          <Reveal delay={0.2}>
            <span className="text-accent font-display tracking-[0.3em] uppercase text-sm drop-shadow-accent mb-6 inline-block">
              Get In Touch
            </span>
          </Reveal>
          
          <Reveal delay={0.3}>
            <h2 className="text-4xl md:text-7xl font-sans font-light text-white leading-tight mb-8">
              Let's build something <br className="hidden md:block" />
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
                extraordinary.
              </span>
            </h2>
          </Reveal>
          
          <Reveal delay={0.4}>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-12">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
            </p>
          </Reveal>
          
          <StaggerReveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              <StaggerItem>
                <motion.a 
                  href="mailto:abdelrahmanahmedezzatt@gmail.com"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 group shadow-lg hover:shadow-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="text-white/40 text-xs font-display uppercase tracking-widest">Email</span>
                  <span className="text-white group-hover:text-accent transition-colors break-all">abdelrahmanahmedezzatt@gmail.com</span>
                </motion.a>
              </StaggerItem>
              
              <StaggerItem>
                <motion.a 
                  href="https://wa.me/01027766031" target="_blank" rel="noreferrer"
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-accent/40 hover:bg-white/10 group shadow-lg hover:shadow-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                >
                  <span className="text-white/40 text-xs font-display uppercase tracking-widest">WhatsApp</span>
                  <span className="text-white group-hover:text-accent transition-colors">01027766031</span>
                </motion.a>
              </StaggerItem>
              
              <StaggerItem>
                <div className="flex flex-col gap-2 p-6 rounded-2xl bg-white/5 border border-white/10 shadow-lg group">
                  <span className="text-white/40 text-xs font-display uppercase tracking-widest group-hover:text-accent transition-colors">Location & Status</span>
                  <span className="text-white transition-colors flex items-center gap-3">
                    <span className="relative flex size-2.5 shrink-0">
                      <span className="animate-ping absolute inline-flex size-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full size-2.5 bg-green-500"></span>
                    </span>
                    Based in Cairo, Egypt
                  </span>
                </div>
              </StaggerItem>
            </div>
          </StaggerReveal>
        </div>
        
      </div>
      
      {/* Background glow for contact section */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 size-[500px] bg-accent/20 rounded-full blur-[150px] pointer-events-none" />
    </section>
  );
}