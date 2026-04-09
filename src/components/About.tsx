import { Terminal } from "lucide-react";
import { Reveal, StaggerReveal, StaggerItem } from "./Reveal";

export default function About() {
  return (
    <section className="py-32 px-4 md:px-8 lg:px-16 min-h-screen relative z-10 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="flex flex-col">
            <Reveal delay={0.2}>
              <span className="text-accent font-display tracking-[0.3em] uppercase text-sm mb-6 inline-block drop-shadow-accent">
                The Story
              </span>
            </Reveal>
            
            <Reveal delay={0.3}>
              <h2 className="text-4xl md:text-6xl font-sans font-light text-white mb-8 leading-tight">
                Crafting Digital Masterpieces.
              </h2>
            </Reveal>
            
            <Reveal delay={0.4}>
              <div className="space-y-6 text-lg text-white/70 font-sans leading-relaxed mb-12">
                <p>
                  I'm a frontend developer who believes that code is art. My journey started with curiosity about how the web works and evolved into a passion for crafting high-performance, beautifully animated experiences.
                </p>
                <p>
                  I don't just build websites — I build identities. By combining technical precision with creative vision, I ensure every project stands out in today's digital landscape.
                </p>
              </div>
            </Reveal>
            
            <StaggerReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-8">
                <StaggerItem>
                  <p className="text-4xl font-display font-light text-white mb-2">100%</p>
                  <p className="text-sm text-accent uppercase tracking-widest font-display">Dedication to Project Excellence</p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-4xl font-display font-light text-white mb-2">1+</p>
                  <p className="text-sm text-accent uppercase tracking-widest font-display">Years Experience</p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-4xl font-display font-light text-white mb-2">10+</p>
                  <p className="text-sm text-accent uppercase tracking-widest font-display">Projects Completed</p>
                </StaggerItem>
                <StaggerItem>
                  <p className="text-4xl font-display font-light text-white mb-2">∞</p>
                  <p className="text-sm text-accent uppercase tracking-widest font-display">Energy For Innovation</p>
                </StaggerItem>
              </div>
            </StaggerReveal>
          </div>
          
          <Reveal delay={0.6} y={100}>
            <div className="relative">
              {/* Glossy Terminal Container */}
              <div className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                <div className="flex items-center gap-2 px-6 py-4 border-b border-white/10 bg-white/5">
                  <div className="size-3 rounded-full bg-red-500/80" />
                  <div className="size-3 rounded-full bg-yellow-500/80" />
                  <div className="size-3 rounded-full bg-green-500/80" />
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
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-full bg-accent/20 rounded-full blur-[100px] pointer-events-none -z-10" />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}