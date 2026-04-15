"use client";

import { useSceneTransition } from "@/hooks/transition";
import { Scene } from "@/core/domain/scene";
import { SceneComponentMap } from "@/core/constants/scene";
import { useTransitionStore } from "@/store/transition";
import { useEffect } from "react";
import { SceneUrls } from "@/data/video-url";
import { preloadImage } from "@/lib/image-cache";

type SceneProps = {
  scene: Scene;
};

export default function SceneClient({ scene }: SceneProps) {
  const { goTo } = useSceneTransition();

  const transition = useTransitionStore((s) => s.transition);
  const setTransition = useTransitionStore((s) => s.setTransition);

  useEffect(() => {
    if (!transition) return;

    setTransition({ type: transition.type, phase: "exit" });
  }, []);

  useEffect(() => {
    if (scene.next) {
      const url = SceneUrls[scene.next];
      if (url) preloadImage(url);
    }
  }, [scene]);

  const Component = SceneComponentMap[scene.type];

  return (
    <>
      <Component scene={scene} goTo={goTo} />
    </>
  );
}
