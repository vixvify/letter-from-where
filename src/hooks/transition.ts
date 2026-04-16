"use client";

import { useRouter } from "next/navigation";
import { TransitionType } from "@/core/domain/transition";
import { useTransitionStore } from "@/store/transition";

export function useSceneTransition() {
  const router = useRouter();
  const setTransition = useTransitionStore((s) => s.setTransition);

  const goTo = (next: string, type: TransitionType) => {
    if (type === "cut") {
      router.replace(`/scenes/${next}`);
      return;
    }
    setTransition({ type, phase: "enter" });

    setTimeout(() => {
      setTransition({ type, phase: "between" });
      router.replace(`/scenes/${next}`);
    }, 1000);
  };

  return { goTo };
}
