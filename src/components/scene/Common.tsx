"use client";

import { SceneProps } from "@/core/domain/scene";
import Image from "next/image";

export function CommonScene({ scene, goTo }: SceneProps) {
  if (scene.format === "image") {
    return (
      <div
        className="relative w-full h-screen"
        onClick={() => {
          if (scene.next) {
            goTo(scene.next, scene.transition ?? "cut");
          }
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
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          {scene.text}
        </h1>
      </div>
    );
  } else {
    return (
      <div
        className="relative w-full h-screen"
        onClick={() => {
          if (scene.next) {
            goTo(scene.next, scene.transition ?? "cut");
          }
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
        <h1 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
          {scene.text}
        </h1>
      </div>
    );
  }
}
