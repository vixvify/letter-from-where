"use client";

import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";
import { getCachedImage } from "@/lib/image-cache";
import { useEffect, useState } from "react";

export default function Custom4({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const cachedimg = scene.src ? getCachedImage(scene.src) : null;

  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    handleNext({
      next: scene.next,
      transition: scene.transition,
      goTo,
    });
  };

  return (
    <div className="relative w-full h-screen" onClick={handleClick}>
      {scene.src && (
        <img
          src={cachedimg?.src || scene.src}
          alt="bg"
          className="object-cover w-full h-screen"
          onLoad={() => onLoadingComplate?.(true)}
        />
      )}

      <h1 className="absolute inset-0 z-10 flex items-center justify-center text-[18px] font-bold text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)]">
        {scene.text}
      </h1>

      <div
        className={`pointer-events-none absolute bottom-25 w-full flex justify-center transition-opacity duration-1000 ${
          showHint ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="px-4 py-2 text-sm text-white rounded-full bg-black/50 animate-bounce">
          แตะหน้าจอเพื่อไปต่อ
        </div>
      </div>
    </div>
  );
}
