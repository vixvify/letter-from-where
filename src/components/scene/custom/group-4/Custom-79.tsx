"use client";

import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";
import { useEffect, useState } from "react";

const SCENE_79 = process.env.NEXT_PUBLIC_URL_SCENE_79!;
const SCENE_80 = process.env.NEXT_PUBLIC_URL_SCENE_80!;

export default function Custom79({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const [step, setStep] = useState(0);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStep(1);
      setCanNext(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!canNext) return;

    handleNext({
      next: scene.next,
      transition: scene.transition,
      goTo,
    });
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onClick={handleClick}
    >
      <img
        src={SCENE_79}
        className={`absolute inset-0 w-full h-full object-cover zoom transition-opacity duration-1000 ${
          step === 0 ? "opacity-100" : "opacity-0"
        }`}
        alt="bg"
        onLoad={() => onLoadingComplate?.(true)}
      />

      <img
        src={SCENE_80}
        className={`absolute inset-0 w-full h-full object-cover zoom transition-opacity duration-1000 ${
          step === 1 ? "opacity-100" : "opacity-0"
        }`}
        alt="bg"
      />

      <style jsx>{`
        .zoom {
          animation: zoomIn 4s ease-in-out forwards;
        }

        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.15);
          }
        }
      `}</style>
    </div>
  );
}
