import { motion } from "framer-motion";

const marqueeItems = [
  "Clean Code",
  "Smooth Animations",
  "Modern UI",
  "On-Time Delivery",
  "Fast Performance",
  "Responsive Design"
];

export default function Footer() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black z-10 overflow-hidden border-t border-white/10 pt-20 pb-10">
      
      {/* Infinite Marquee */}
      <div className="flex whitespace-nowrap mb-32 relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
        
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-16 items-center"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span className="text-5xl md:text-8xl font-black font-display text-transparent outline-text opacity-40 uppercase tracking-tighter hover:opacity-100 hover:text-white transition-all cursor-default">
                {item}
              </span>
              <span className="text-accent text-4xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 items-center">
        <div>
          <h3 className="text-3xl font-sans font-light text-white mb-4">
            Interested in working together?
          </h3>
          <p className="text-white/50 text-lg mb-8 max-w-sm">
            I'm currently available for freelance projects and full-time opportunities.
          </p>
          <motion.a 
            href="mailto:abdelrahmanahmedezzatt@gmail.com" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 rounded-full bg-accent text-white font-display uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-colors shadow-accent hover:shadow-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            Get in touch
          </motion.a>
        </div>
        
        <div className="flex flex-col md:items-end justify-center gap-4 text-white/50 font-display text-sm tracking-widest uppercase">
          <a href="#" onClick={scrollToTop} className="hover:text-accent transition-colors">Back to Top</a>
          <a href="#about" className="hover:text-accent transition-colors">About</a>
          <a href="#experience" className="hover:text-accent transition-colors">Experience</a>
          <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
          <a href="#skills" className="hover:text-accent transition-colors">Skills</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40 font-mono">
        <p>© 2026 Abdelrahman Ahmed</p>
        <p>React • TypeScript • Framer Motion • Tailwind v4</p>
      </div>
      
      {/* Required styles for the outline text */}
      <style dangerouslySetInnerHTML={{__html: `
        .outline-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
          color: transparent;
        }
        .outline-text:hover {
          -webkit-text-stroke: 0px;
          color: white;
          text-shadow: 0 0 20px rgba(255,255,255,0.4);
        }
      `}} />
    </footer>
  );
}