"use client";

import { useTransitionStore } from "@/store/transition";
import { transitionFadeTypeMap } from "@/core/constants/fade-transition";

export default function TransitionOverlay() {
  const transition = useTransitionStore((s) => s.transition);
  const setTransition = useTransitionStore((s) => s.setTransition);

  if (!transition) return null;

  const { type, phase } = transition;

  if (!(type in transitionFadeTypeMap)) return null;

  const base = "absolute inset-0 z-[999] pointer-events-none";
  const bg = transitionFadeTypeMap[type as keyof typeof transitionFadeTypeMap];
  const anim =
    phase === "between"
      ? ""
      : phase === "enter"
        ? "animate-fade-in"
        : "animate-fade-out";

  return (
    <div
      className={`${base} ${bg} ${anim}`}
      onAnimationEnd={() => {
        if (phase === "exit") {
          setTransition(null);
        }
      }}
    />
  );
}
