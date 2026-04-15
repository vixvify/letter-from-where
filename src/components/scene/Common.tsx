"use client";

import { SceneProps } from "@/core/domain/scene";
import CommonOverlay from "../overlay/Common";
import { handleNext } from "@/utils/scene";

export function CommonScene({ scene, goTo }: SceneProps) {
  if (!scene.src && scene.text) {
    return <CommonOverlay scene={scene} goTo={goTo} />;
  }
  if (scene.format === "image") {
    return (
      <div
        className="relative w-full h-screen"
        onClick={() => {
          handleNext({
            next: scene.next,
            transition: scene.transition,
            goTo,
          });
        }}
      >
        {scene.src && (
          <img
            src={scene.src}
            alt="bg"
            className="w-full h-screen"
            loading="eager"
          />
        )}
        <h1 className="absolute inset-0 z-10 flex items-center justify-center text-[18px] font-bold text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)]">
          {scene.text}
        </h1>
      </div>
    );
  } else {
    return (
      <div
        className="relative w-full h-screen"
        onClick={() => {
          handleNext({
            next: scene.next,
            transition: scene.transition,
            goTo,
          });
        }}
      >
        {scene.src && (
          <video
            src={scene.src}
            width={1000}
            height={1920}
            className="w-full h-screen"
          ></video>
        )}
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          {scene.text}
        </h1>
      </div>
    );
  }
}
