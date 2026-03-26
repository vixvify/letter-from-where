"use client";

import { useRouter } from "next/navigation";
import { TransitionType } from "@/core/domain/scene";
import { useTransitionStore } from "@/store/transition";

export function useSceneTransition() {
  const router = useRouter();
  const setTransition = useTransitionStore((s) => s.setTransition);
  const DURATION = 1000;

  const goTo = (next: string, type: TransitionType) => {
    if (type === "cut") {
      router.replace(`/scenes/${next}`);
      return;
    }

    setTransition(type);

    setTimeout(() => {
      router.replace(`/scenes/${next}`);
    }, DURATION / 2);
    setTimeout(() => {
      setTransition(null);
    }, DURATION);
  };

  return { goTo };
}
