import { useEffect, useRef, useState } from "react";
import { useScroll, useTransform, motion, AnimatePresence, useSpring } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const FRAME_COUNT = 120;
const PREFIX = "/sequence-1/ezgif-frame-";
const SUFFIX = ".jpg";

export default function SequenceContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { images, progress } = useImagePreloader(FRAME_COUNT, PREFIX, SUFFIX);
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Handle loading completion with a small delay for visual polish
  useEffect(() => {
    if (progress === 1) {
      const timer = setTimeout(() => {
        setIsFullyLoaded(true);
      }, 800); // 800ms delay ensures the 100% animation is seen and felt
      return () => clearTimeout(timer);
    }
  }, [progress]);

  // Lock body scroll while loading
  useEffect(() => {
    if (!isFullyLoaded) {
      document.body.classList.add("loading");
    } else {
      document.body.classList.remove("loading");
    }
    return () => document.body.classList.remove("loading");
  }, [isFullyLoaded]);

  // Increased stiffness and reduced damping for a more responsive but still smooth feel
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);
  
  // Fade out the canvas as we reach the end of the container
  const canvasOpacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0]);

  // Optimized Render Loop with Frame Blending for ultimate smoothness
  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    // We need alpha: true for frame blending
    const ctx = canvas?.getContext("2d", { alpha: true }); 
    
    const renderFrame = () => {
      if (!ctx || !canvas || images.length === 0 || !isFullyLoaded) {
        animationFrameId = requestAnimationFrame(renderFrame);
        return;
      }

      const rawIdx = frameIndex.get();
      const idx = Math.max(0, Math.min(Math.floor(rawIdx), FRAME_COUNT - 1));
      const nextIdx = Math.min(idx + 1, FRAME_COUNT - 1);
      const fraction = rawIdx - idx;

      const img = images[idx];
      const nextImg = images[nextIdx];
      
      if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw first frame
        ctx.globalAlpha = 1 - fraction;
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
        
        // Draw next frame (blending)
        if (idx !== nextIdx && nextImg && nextImg.complete) {
          ctx.globalAlpha = fraction;
          ctx.drawImage(nextImg, 0, 0, nextImg.width, nextImg.height, centerShift_x, centerShift_y, nextImg.width * ratio, nextImg.height * ratio);
        }
        
        ctx.globalAlpha = 1.0;
      }
      
      animationFrameId = requestAnimationFrame(renderFrame);
    };

    animationFrameId = requestAnimationFrame(renderFrame);
    return () => cancelAnimationFrame(animationFrameId);
  }, [images, isFullyLoaded, frameIndex]);

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence mode="wait">
        {!isFullyLoaded && (
          <motion.div 
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-100 flex items-center justify-center bg-background"
          >
            <div className="flex flex-col items-center gap-12 max-w-md w-full px-8">
              <div className="relative size-32">
                {/* Outer Ring */}
                <svg className="size-full -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="60"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    className="text-white/5"
                  />
                  <motion.circle
                    cx="64"
                    cy="64"
                    r="60"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="transparent"
                    strokeDasharray="377"
                    initial={{ strokeDashoffset: 377 }}
                    animate={{ strokeDashoffset: 377 - (377 * progress) }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="text-accent"
                  />
                </svg>
                {/* Center Percentage */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-display text-xl font-bold">{Math.round(progress * 100)}%</span>
                </div>
              </div>

              <div className="text-center space-y-4">
                <motion.h2 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white font-display text-lg tracking-[0.3em] uppercase"
                >
                  {progress < 1 ? "Abdelrahman Ahmed" : "System Ready"}
                </motion.h2>
                <div className="h-px w-12 bg-accent/40 mx-auto" />
                <p className="text-white/40 font-sans text-xs tracking-widest uppercase">
                  {progress < 1 ? "Preparing Cinematic Experience" : "Entering Portfolio"}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Background Canvas */}
      <motion.div 
        style={{ opacity: isFullyLoaded ? canvasOpacity : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isFullyLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
        className="fixed inset-0 pointer-events-none z-0"
      >
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          style={{ imageRendering: 'crisp-edges' }}
          className="size-full object-cover will-change-transform"
        />
        {/* Dark gradient to ensure all text readability */}
        <div className="absolute inset-0 bg-black/80" />
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isFullyLoaded ? 1 : 0, y: isFullyLoaded ? 0 : 20 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 size-full flex flex-col"
      >
        {children}
      </motion.div>
    </div>
  );
}