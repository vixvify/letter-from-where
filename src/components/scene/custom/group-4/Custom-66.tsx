"use client";

import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";

const SCENE_66 = process.env.NEXT_PUBLIC_URL_SCENE_65!;

export default function Custom66({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <h1 className="absolute inset-0 z-10 flex items-start justify-center pt-50 text-[18px] font-bold text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] text-center">
        ถูกแทนที่ด้วย
        <br />
        จดหมายฉบับหนึ่ง
      </h1>
      <img
        src={SCENE_66}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000`}
        alt="bg"
        onLoad={() => onLoadingComplate?.(true)}
      />
    </div>
  );
}
