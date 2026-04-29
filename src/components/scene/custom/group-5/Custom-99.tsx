"use client";

import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";

export default function Custom99({
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
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-20 bg-[radial-gradient(circle_at_30%_60%,#f59e0b_0%,#ea580c_40%,#7c2d12_70%,#2a0e05_100%)]">
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
