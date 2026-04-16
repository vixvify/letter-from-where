"use client";

import { useSceneTransition } from "@/hooks/transition";
import { Scene } from "@/core/domain/scene";
import { SceneComponentMap } from "@/core/constants/scene";
import { useTransitionStore } from "@/store/transition";
import { useEffect } from "react";
import { SceneUrls } from "@/data/video-url";
import { preloadImage } from "@/lib/image-cache";
import { CustomSceneWithImage } from "@/core/constants/scene";
import { usePathname } from "next/navigation";

type SceneProps = {
  scene: Scene;
};

export default function SceneClient({ scene }: SceneProps) {
  const { goTo } = useSceneTransition();
  const pathname = usePathname();
  const key = pathname.replace("/scenes/", "");
  const transition = useTransitionStore((s) => s.transition);
  const setTransition = useTransitionStore((s) => s.setTransition);

  useEffect(() => {
    if (!transition) return;

    if (!scene.src && !CustomSceneWithImage.find((s) => s === key)) {
      setTransition({ type: transition.type, phase: "exit" });
      return;
    }

    setTimeout(() => {
      setTransition({ type: transition.type, phase: "exit" });
    }, 300);
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
