"use client";

import { SceneProps } from "@/core/domain/scene";
import Image from "next/image";
import CommonOverlay from "../overlay/Common";
import { handleNext } from "@/utils/scene";

export function CommonScene({ scene, goTo }: SceneProps) {
  if (!scene.src && scene.text) {
    return <CommonOverlay text={scene.text} />;
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
          <Image
            src={scene.src}
            alt="bg"
            width={1000}
            height={1920}
            className="w-full h-screen"
          ></Image>
        )}
        <h1 className="absolute inset-0 z-10 flex items-center justify-center text-[25px] font-bold text-white">
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
