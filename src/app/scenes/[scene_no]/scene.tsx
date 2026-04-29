"use client";

import { useSceneTransition } from "@/hooks/transition";
import { Scene } from "@/core/domain/scene";
import { SceneComponentMap } from "@/core/constants/scene";
import { useTransitionStore } from "@/store/transition";
import { useEffect, useState } from "react";
import { SceneUrls } from "@/data/video-url";
import { preloadImage, preloadVideo } from "@/lib/image-cache";
import { CustomSceneWithImage } from "@/core/constants/scene";
import { usePathname } from "next/navigation";
import { ScenesData } from "@/data/story";
import { useAudioStore } from "@/store/audio";

type SceneProps = {
  scene: Scene;
};

export default function SceneClient({ scene }: SceneProps) {
  const { goTo } = useSceneTransition();
  const pathname = usePathname();
  const key = pathname.replace("/scenes/", "");
  const transition = useTransitionStore((s) => s.transition);
  const setTransition = useTransitionStore((s) => s.setTransition);
  const [loading, setLoading] = useState(false);
  const enable = useAudioStore((s) => s.enable);

  const setLoadingComplete = (status: boolean) => {
    setLoading(status);
  };

  useEffect(() => {
    if (!transition) return;
    if (
      (!loading && scene.src) ||
      (!loading && CustomSceneWithImage.find((s) => s === key))
    )
      return;

    if (!scene.src && !CustomSceneWithImage.find((s) => s === key)) {
      setTransition({ type: transition.type, phase: "exit" });
      return;
    }

    setTimeout(() => {
      setTransition({ type: transition.type, phase: "exit" });
    }, 300);
  }, [loading]);

  useEffect(() => {
    if (scene.next) {
      const url = SceneUrls[scene.next];
      const nextScene = ScenesData[scene.next];
      if (url && nextScene.format === "image") preloadImage(url);
      if (url && nextScene.format === "video") preloadVideo(url);
    }
  }, [scene]);

  const Component = SceneComponentMap[scene.type];

  return (
    <>
      <Component
        scene={scene}
        goTo={goTo}
        onLoadingComplate={setLoadingComplete}
      />
      {/* <button
        className="absolute px-4 py-2 text-white bg-blue-500 rounded cursor-pointer bottom-4 right-4"
        onClick={() => enable()}
      >
        Enable Sound (Development Only)
      </button> */}
    </>
  );
}
