import { motion } from "framer-motion";
import { Code2, Palette, Cpu, Terminal, Laptop } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "./Reveal";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Code2 className="size-6" />,
    description: "Creating interactive, high-performance user interfaces with a focus on clean code and seamless user experiences.",
    tech: ["React", "Redux", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    title: "Styling & UI",
    icon: <Palette className="size-6" />,
    description: "Crafting beautiful, responsive layouts that work across all devices with modern CSS techniques.",
    tech: ["Tailwind CSS", "Sass", "Responsive Design", "Framer Motion"],
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    title: "Architecture & Logic",
    icon: <Cpu className="size-6" />,
    description: "Focusing on strong foundations in programming and data management to build reliable systems.",
    tech: ["OOP Concepts", "REST API Integration", "Data Structures", "State Management"],
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    title: "Workflow & Tools",
    icon: <Terminal className="size-6" />,
    description: "Professional toolchain for efficient and standard code delivery and collaborative development.",
    tech: ["Git", "GitHub", "Postman", "VS Code", "Cursor", "Vite"],
    color: "from-green-500/20 to-emerald-500/20"
  }
];

export default function Skills() {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-16 bg-background relative z-10 border-t border-white/5 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24 relative">
          <Reveal delay={0.2}>
            <span className="text-accent font-display tracking-[0.3em] uppercase text-sm mb-6 inline-block bg-accent/10 py-2 px-6 rounded-full border border-accent/20">
              Technical Stack
            </span>
          </Reveal>
          <Reveal delay={0.3}>
            <h2 className="text-4xl md:text-7xl font-sans font-black text-white mb-8 tracking-tight">
              Engineering <span className="text-white/40 font-light italic">Excellence.</span>
            </h2>
          </Reveal>
          <div className="flex flex-col items-center justify-center gap-6 text-white/50">
            <Reveal delay={0.4}>
              <p className="max-w-2xl text-lg leading-relaxed">
                A comprehensive toolkit architected for building robust, scalable, and visually stunning digital products.
              </p>
            </Reveal>
            <Reveal delay={0.5}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm group cursor-default transition-all hover:border-green-500/30 hover:bg-green-500/5"
              >
                <span className="relative flex size-2.5">
                  <span className="animate-ping absolute inline-flex size-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full size-2.5 bg-green-500"></span>
                </span>
                <span className="text-sm tracking-wide group-hover:text-green-400 transition-colors">95% Accessibility standard across all projects</span>
              </motion.div>
            </Reveal>
          </div>
        </div>

        <StaggerReveal delay={0.15}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, idx) => (
              <StaggerItem key={idx} y={40}>
                <div className="group relative h-full">
                  {/* Card Background & Glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-4xl blur-2xl -z-10`} />
                  
                  <div className="p-10 rounded-4xl bg-black/40 border border-white/5 backdrop-blur-xl h-full flex flex-col transition-all duration-500 group-hover:border-white/20 group-hover:bg-black/60 group-hover:-translate-y-2 group-hover:shadow-2xl">
                    
                    <div className="flex items-start justify-between mb-8">
                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500 group-hover:scale-110 group-hover:shadow-accent">
                        {category.icon}
                      </div>
                      <div className="text-[0.65rem] font-mono uppercase tracking-[0.2em] text-white/20 group-hover:text-accent transition-colors duration-500">
                        Category // 0{idx + 1}
                      </div>
                    </div>

                    <h3 className="text-2xl text-white font-sans font-bold mb-4 group-hover:text-accent transition-colors duration-500">
                      {category.title}
                    </h3>
                    
                    <p className="text-white/50 text-sm leading-relaxed mb-10 flex-grow">
                      {category.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2.5">
                      {category.tech.map((tech, i) => (
                        <span 
                          key={i}
                          className="px-4 py-2 rounded-xl border border-white/5 bg-white/5 text-white/70 font-display tracking-wide text-[0.7rem] uppercase group-hover:border-accent/20 group-hover:bg-accent/5 group-hover:text-white transition-all duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerReveal>
        
        <Reveal delay={0.6}>
          <div className="mt-24 text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />
            
            <div className="bg-background px-8 inline-block">
              <p className="text-white/40 mb-8 font-display uppercase tracking-[0.2em] text-xs">Interested in my full stack capabilities?</p>
              <motion.a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-white text-black font-display font-bold uppercase tracking-widest text-xs hover:bg-accent hover:text-white transition-all duration-300 shadow-xl hover:shadow-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <Laptop size={16} />
                View GitHub Profile
              </motion.a>
            </div>
          </div>
        </Reveal>
      </div>
      
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-150 bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 size-100 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none -z-10" />
    </section>
  );
}