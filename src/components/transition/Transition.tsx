"use client";

import { useTransitionStore } from "@/store/transition";
import { transitionFadeTypeMap } from "@/core/constants/fade-transition";

export default function TransitionOverlay() {
  const transition = useTransitionStore((s) => s.transition);

  if (!transition) return null;

  const { type, phase } = transition;

  if (!(type in transitionFadeTypeMap)) return null;

  const base = "fixed inset-0 z-[999] pointer-events-none";
  const bg = transitionFadeTypeMap[type as keyof typeof transitionFadeTypeMap];
  const anim = phase === "enter" ? "animate-fade-in" : "animate-fade-out";

  return <div className={`${base} ${bg} ${anim}`} />;
}
