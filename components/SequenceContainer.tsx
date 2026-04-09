"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion, AnimatePresence, useSpring } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const FRAME_COUNT = 120;
const PREFIX = "/sequence-1/ezgif-frame-";
const SUFFIX = ".jpg";

export default function SequenceContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { images, progress } = useImagePreloader(FRAME_COUNT, PREFIX, SUFFIX);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Apply spring physics to scroll progress so the sequence never skips frames and plays buttery smooth
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const frameIndex = useTransform(smoothProgress, [0, 1], [0, FRAME_COUNT - 1]);

  useEffect(() => {
    if (images.length > 0 && images[0].complete && progress === 1) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (ctx && canvas) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const img = images[0];
        
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    }
  }, [images, progress]);

  const lastRenderedIndex = useRef(-1);

  useEffect(() => {
    return frameIndex.on("change", (latest) => {
      if (images.length === 0 || progress < 1) return;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx || !canvas) return;

      const idx = Math.max(0, Math.min(Math.floor(latest), FRAME_COUNT - 1));
      
      if (idx === lastRenderedIndex.current) return;
      lastRenderedIndex.current = idx;

      const img = images[idx];
      
      if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        // Execute synchronously as framer-motion is already synced
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
      }
    });
  }, [frameIndex, images, progress]);

  return (
    <div ref={containerRef} className="relative">
      <AnimatePresence>
        {progress < 1 && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed bottom-8 right-8 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md px-6 py-4 rounded-full border border-white/10 shadow-2xl"
          >
            <div className="flex flex-row items-center gap-4">
              <p className="text-white/80 font-display text-xs tracking-[0.2em] uppercase">
                Loading Sequence
              </p>
              <div className="w-24 h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-accent drop-shadow-[0_0_8px_rgba(139,92,246,0.8)]"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Background Canvas */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        {/* Dark gradient to ensure all text readability */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 w-full flex flex-col">
        {children}
      </div>
    </div>
  );
}
