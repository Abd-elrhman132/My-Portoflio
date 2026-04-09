"use client";

import { useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useImagePreloader } from "@/hooks/useImagePreloader";

const FRAME_COUNT = 120;
const PREFIX = "/sequence-1/ezgif-frame-";
const SUFFIX = ".jpg";

export default function HeroScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { images, progress } = useImagePreloader(FRAME_COUNT, PREFIX, SUFFIX);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

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
        
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    }
  }, [images, progress]);

  useEffect(() => {
    return frameIndex.on("change", (latest) => {
      // Don't render if it's not fully loaded or if we have no images
      if (images.length === 0 || progress < 1) return;
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");
      if (!ctx || !canvas) return;

      const idx = Math.max(0, Math.min(Math.floor(latest), FRAME_COUNT - 1));
      const img = images[idx];
      
      if (img && img.complete) {
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.max(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    });
  }, [frameIndex, images, progress]);

  return (
    <div ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {progress < 1 && (
          <div className="absolute inset-0 flex items-center justify-center z-10 bg-background">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center"
            >
              <div className="w-48 h-1 bg-accent/20 rounded-full overflow-hidden mb-4">
                <motion.div 
                  className="h-full bg-accent"
                  style={{ width: `${progress * 100}%` }}
                />
              </div>
              <p className="text-white/50 font-display text-sm uppercase tracking-widest">
                Initializing Cinematic Sequence
              </p>
            </motion.div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 bg-gradient-to-b from-black/60 via-transparent to-black/30">
          <motion.div 
            style={{ opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0]), y: useTransform(scrollYProgress, [0, 0.4], [0, -100]) }}
            className="text-center px-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black font-display tracking-tighter text-white uppercase drop-shadow-2xl mb-6">
              Abdelrahman.
            </h1>
            <p className="text-lg md:text-2xl font-light text-white/80 max-w-2xl mx-auto font-sans tracking-wide">
              Turning Ideas into Fast, Interactive Web Experiences.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
