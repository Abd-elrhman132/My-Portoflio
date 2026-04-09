import { useState, useEffect } from "react";

export function useImagePreloader(frameCount: number, pathPrefix: string, pathSuffix: string) {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(0);

  useEffect(() => {
    let loadedCount = 0;
    const imgArray: HTMLImageElement[] = [];

    // Preload images sequentially or parallel. For 120 frames, parallel is fine but we keep the array ordered.
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const paddedIndex = i.toString().padStart(3, "0");
      img.src = `${pathPrefix}${paddedIndex}${pathSuffix}`;

      img.onload = () => {
        loadedCount++;
        setLoaded(loadedCount);
      };
      
      img.onerror = () => {
        console.error(`Failed to load frame: ${img.src}`);
        loadedCount++;
        setLoaded(loadedCount);
      };

      imgArray.push(img);
    }
    setImages(imgArray);
  }, [frameCount, pathPrefix, pathSuffix]);

  return { images, loaded, progress: frameCount > 0 ? loaded / frameCount : 0 };
}
