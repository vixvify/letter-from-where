"use client";

import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";

export default function Custom110({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const handleEnter = () => {
    handleNext({
      next: scene.next,
      transition: scene.transition,
      goTo,
    });
  };

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-20 bg-[radial-gradient(circle_at_50%_60%,#d6b98b_0%,#8b6b4a_35%,#374151_65%,#020617_100%)]">
      <img
        src={scene.src}
        width="350"
        height="350"
        alt="Scene"
        onLoad={() => onLoadingComplate?.(true)}
      />
      <h1
        className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line font-bold cursor-pointer"
        onClick={handleEnter}
      >
        กดเพื่ออ่าน
      </h1>
    </div>
  );
}
