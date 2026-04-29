"use client";

import { useTransitionStore } from "@/store/transition";
import { getTransitionBg } from "@/lib/get-transition-bg";

export default function TransitionOverlay() {
  const transition = useTransitionStore((s) => s.transition);
  const setTransition = useTransitionStore((s) => s.setTransition);

  if (!transition) return null;

  const { type, phase } = transition;

  const base = "absolute inset-0 z-[999] pointer-events-none";
  const bg = getTransitionBg(type);
  const anim =
    phase === "between"
      ? ""
      : phase === "enter"
        ? transition.type === "flash"
          ? "animate-fade-in-flash"
          : "animate-fade-in"
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
