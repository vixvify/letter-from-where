"use client";

import { SceneProps } from "@/core/domain/scene";
import { useEffect, useState } from "react";
import { handleNext } from "@/utils/scene";

const SCENE_37_1 = process.env.NEXT_PUBLIC_URL_SCENE_37_1!;

export default function Custom37({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const [zoom, setZoom] = useState(false);
  const [canNext, setCanNext] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
      setZoom(true);
    }, 300);

    const enableClick = setTimeout(() => {
      setCanNext(true);
    }, 6000);

    return () => {
      clearTimeout(start);
      clearTimeout(enableClick);
    };
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
        src={SCENE_37_1}
        className={`absolute inset-0 w-full h-full object-cover 
        transition-transform duration-6000 ease-linear
        ${zoom ? "scale-125" : "scale-100"}`}
        onLoad={() => onLoadingComplate?.(true)}
        alt="bg"
      />
    </div>
  );
}
