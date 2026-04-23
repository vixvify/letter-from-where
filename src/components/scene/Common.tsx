"use client";

import { SceneProps } from "@/core/domain/scene";
import CommonOverlay from "../overlay/Common";
import { handleNext } from "@/utils/scene";
import { getCachedImage, getCachedVideo } from "@/lib/image-cache";

export function CommonScene({ scene, goTo, onLoadingComplate }: SceneProps) {
  const cachedimg = scene.src ? getCachedImage(scene.src) : null;
  const cachedvideo = scene.src ? getCachedVideo(scene.src) : null;

  if (!scene.src || (!scene.src && scene.text)) {
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
            src={cachedimg?.src || scene.src}
            alt="bg"
            className="w-full h-screen"
            onLoad={() => onLoadingComplate?.(true)}
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
            src={cachedvideo?.src || scene.src}
            className="absolute inset-0 object-cover w-full h-full "
            autoPlay
            muted
            loop={scene.loop}
            playsInline
            onLoadedData={() => onLoadingComplate?.(true)}
          ></video>
        )}
        <h1 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
          {scene.text}
        </h1>
      </div>
    );
  }
}
