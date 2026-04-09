import { motion, Variants } from "framer-motion";

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.21, 0.47, 0.32, 0.98] as const,
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 pt-32 pb-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto w-full relative z-10"
      >
        
        <motion.div variants={itemVariants} className="mb-8">
          <span className="text-accent font-display tracking-[0.3em] uppercase text-sm md:text-base drop-shadow-accent-strong">
            Creative Frontend Developer
          </span>
        </motion.div>
        
        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-9xl font-black font-display tracking-tighter text-white uppercase drop-shadow-2xl leading-[0.9] mb-8"
        >
          Abdelrahman <br /> Ahmed
        </motion.h1>
        
        <motion.div variants={itemVariants} className="max-w-2xl">
          <h2 className="text-xl md:text-3xl text-white font-light font-display tracking-tight mb-4">
            Turning Ideas into Fast, Interactive Web Experiences
          </h2>
          <p className="text-white/60 font-sans text-lg md:text-xl leading-relaxed mb-12">
            Frontend Developer focused on clean code, smooth animations, and responsive interfaces that feel great to use.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-accent text-white font-display uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300 shadow-accent hover:shadow-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              Explore My Work
            </motion.a>
            <motion.a 
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-display uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-colors duration-300 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              Let's Talk
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-4 md:left-8 lg:left-16 hidden md:flex items-center gap-4"
      >
        <span className="text-white/40 font-display tracking-widest text-xs uppercase -rotate-90 origin-left translate-y-8">Scroll</span>
        <div className="w-px h-24 bg-gradient-to-b from-white/40 to-transparent" />
      </motion.div>
    </section>
  );
}