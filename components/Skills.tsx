"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend Development",
    description: "Creating interactive, high-performance user interfaces with a focus on clean code and seamless user experiences.",
    tech: ["React", "Redux", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"]
  },
  {
    title: "Styling & UI",
    description: "Crafting beautiful, responsive layouts that work across all devices.",
    tech: ["Tailwind CSS", "Sass", "Responsive Design"]
  },
  {
    title: "Architecture & Logic",
    description: "Focusing on strong foundations in programming and data management to build reliable systems.",
    tech: ["OOP Concepts", "REST API Integration", "Data Structures Logic"]
  },
  {
    title: "Workflow",
    description: "Professional toolchain for efficient and standard code delivery.",
    tech: ["Git", "GitHub", "Postman", "VS Code", "Cursor", "Gemini CLI"]
  }
];

export default function Skills() {
  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 bg-background relative z-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-accent font-display tracking-[0.3em] uppercase text-sm mb-6 inline-block">
            Technical Stack
          </span>
          <h2 className="text-4xl md:text-7xl font-sans font-light text-white mb-6">
            Engineering Excellence.
          </h2>
          <div className="flex flex-col items-center justify-center gap-4 text-white/50">
            <p className="max-w-2xl text-lg">
              A comprehensive toolkit for building robust digital products.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>95% Accessibility standard across all projects</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/[0.07] transition-colors group flex flex-col h-full"
            >
              <h3 className="text-2xl text-white font-sans font-light mb-4">{category.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-8 flex-grow">
                {category.description}
              </p>
              
              <div className="flex flex-wrap gap-3">
                {category.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-4 py-2 rounded-full border border-white/10 bg-black/40 text-white/80 font-display tracking-wider text-xs uppercase group-hover:border-accent/30 group-hover:text-white transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <p className="text-white/40 mb-6 font-display uppercase tracking-widest text-sm">Interested in my full stack capabilities?</p>
          <motion.a 
            href="#" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 rounded-full border border-white/20 text-white font-display uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
          >
            View GitHub
          </motion.a>
        </div>
      </div>
      
      {/* Background radial */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/5 rounded-[100%] blur-[120px] pointer-events-none" />
    </section>
  );
}
