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
    <div className="fixed inset-0 flex flex-col items-center justify-center gap-20">
      <img
        src={scene.src}
        width="350"
        height="350"
        alt="Scene"
        onLoad={() => onLoadingComplate?.(true)}
      />
      <h1
        className="text-[17px] text-center text-black whitespace-pre-line font-bold cursor-pointer"
        onClick={handleEnter}
      >
        กดเพื่ออ่าน
      </h1>
    </div>
  );
}
