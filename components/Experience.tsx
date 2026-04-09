"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const experiences = [
  {
    year: "2025 - Present",
    role: "Frontend Development Program",
    company: "DEPI — Digital Egypt Pioneers Initiative",
    description: "Intensive training program focused on advanced frontend architectures and professional software delivery.",
    bullets: [
      "Architecting complex web applications using React and modern state management.",
      "Implementing professional UI/UX standards and performance optimization techniques.",
      "Collaborating on high-scale projects with a focus on maintainable codebases."
    ]
  },
  {
    year: "2024 - 2025",
    role: "Student Member",
    company: "IEEE — Student Branch",
    description: "Active contribution to the global technical community through knowledge sharing and collaboration.",
    bullets: [
      "Engaged in cross-functional technical workshops and international standards research.",
      "Contributed to the development of community-driven technical projects.",
      "Facilitated peer-to-peer learning sessions on emerging web technologies."
    ]
  },
  {
    year: "2025",
    role: "Educational Member",
    company: "Saai Initiative — Saai Student Initiative",
    description: "Dedicated to simplifying complex technical concepts for the next generation of engineers.",
    bullets: [
      "Designed and delivered introductory computer science curriculum for students.",
      "Transformed abstract technical topics into accessible, engaging educational content.",
      "Mentored junior members on frontend fundamentals and digital literacy."
    ]
  }
];

const ExperienceItem = ({ exp, index }: { exp: typeof experiences[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, margin: "-100px" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100, delay: 0.1 }}
      className="relative pl-8 md:pl-0 mb-24 last:mb-0 group cursor-default"
    >
      <div className="md:grid flex flex-col md:grid-cols-5 gap-4 md:gap-12 relative z-10">
        
        {/* Glowing Timeline Node */}
        <div className="absolute left-[1px] md:left-1/2 md:-translate-x-1/2 top-6 w-2 h-2 rounded-full bg-white group-hover:bg-accent group-hover:shadow-[0_0_15px_rgba(139,92,246,1)] transition-all duration-500 z-20 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: false }}
            className="w-6 h-6 rounded-full border border-white/20 group-hover:border-accent/50 absolute" 
          />
        </div>
        
        <div className="md:col-span-2 text-left md:text-right pt-6">
          <span className="text-accent font-display tracking-[0.2em] text-sm md:text-base inline-block md:pr-12 drop-shadow-[0_0_5px_rgba(139,92,246,0.6)]">
            {exp.year}
          </span>
        </div>
        
        <div className="hidden md:flex flex-col items-center justify-start col-span-1">
          {/* Vertical line drawn by parent, we just reserve space */}
        </div>
        
        <div className="md:col-span-2 pt-5">
          <div className="p-8 rounded-3xl bg-black/40 border border-white/5 backdrop-blur-md transition-all duration-500 group-hover:bg-white/5 group-hover:border-white/10 group-hover:-translate-y-2">
            <h4 className="text-2xl font-sans font-light text-white mb-2">{exp.role}</h4>
            <h5 className="text-white/50 font-display text-sm tracking-wide uppercase mb-6">{exp.company}</h5>
            <p className="text-white/70 leading-relaxed mb-6">
              {exp.description}
            </p>
            <ul className="space-y-3">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="flex items-start text-white/50 text-sm leading-relaxed">
                  <span className="text-accent mr-3 mt-1 text-xs">▹</span>
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Experience() {
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 relative z-10 flex flex-col justify-center min-h-[150vh]">
      <div className="max-w-6xl mx-auto w-full">
        
        <div className="text-center mb-24">
          <span className="text-accent font-display tracking-[0.3em] uppercase text-sm drop-shadow-[0_0_10px_rgba(139,92,246,0.6)] mb-6 inline-block">
            Career Path
          </span>
          <h2 className="text-4xl md:text-7xl font-sans font-light text-white mb-6">
            Professional Journey.
          </h2>
          <p className="text-white/50 max-w-xl mx-auto text-lg">
            A timeline of my contributions, learning, and growth within the technical ecosystem.
          </p>
        </div>
        
        <div className="relative pt-12 pb-12">
          {/* Central Line */}
          <div className="absolute left-[5px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent" />
          
          <div className="flex flex-col">
            {experiences.map((exp, idx) => (
              <ExperienceItem key={idx} exp={exp} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
