import { bgColorMap } from "@/core/constants/color-map";
import { transitionFadeTypeMap } from "@/core/constants/fade-transition";
import { TransitionType } from "@/core/domain/transition";

export function getTransitionBg(type: TransitionType) {
  if (type in transitionFadeTypeMap) {
    return transitionFadeTypeMap[type as keyof typeof transitionFadeTypeMap];
  }

  if (type.startsWith("scene_")) {
    return bgColorMap[type] || "bg-black";
  }

  return "bg-black";
}
