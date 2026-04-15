"use client";

import { useSceneTransition } from "@/hooks/transition";
import { Scene } from "@/core/domain/scene";
import { SceneComponentMap } from "@/core/constants/scene";
import { useTransitionStore } from "@/store/transition";
import { useEffect } from "react";
import { ScenesData } from "@/data/story";
import { SceneUrls } from "@/data/video-url";

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

    if (scene.next) {
      const nextScene = scene.next;
      if (nextScene && SceneUrls[nextScene]) {
        const img = new window.Image();
        img.src = SceneUrls[nextScene];
      }
    }

    const t = setTimeout(() => {
      setTransition(null);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  const Component = SceneComponentMap[scene.type];

  return (
    <>
      <Component scene={scene} goTo={goTo} />
    </>
  );
}
