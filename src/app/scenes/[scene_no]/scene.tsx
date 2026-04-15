"use client";

import { useSceneTransition } from "@/hooks/transition";
import { Scene } from "@/core/domain/scene";
import { SceneComponentMap } from "@/core/constants/scene";
import { useTransitionStore } from "@/store/transition";
import { useEffect } from "react";
import { SceneUrls } from "@/data/video-url";

type SceneProps = {
  scene: Scene;
};

export default function SceneClient({ scene }: SceneProps) {
  const { goTo } = useSceneTransition();

  const transition = useTransitionStore((s) => s.transition);
  const setTransition = useTransitionStore((s) => s.setTransition);

  const preload = async (src: string) => {
    const img = new Image();
    img.src = src;
    await img.decode();
  };

  useEffect(() => {
    if (!transition) return;

    setTransition({ type: transition.type, phase: "exit" });

    const t = setTimeout(() => {
      setTransition(null);
    }, 1000);

    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scene.next) {
      const nextKey = scene.next;
      const url = SceneUrls[nextKey];
      if (url) {
        preload(url);
      }
    }
  }, [scene]);

  const Component = SceneComponentMap[scene.type];

  return (
    <>
      <Component scene={scene} goTo={goTo} />
    </>
  );
}
