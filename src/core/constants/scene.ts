import { CommonScene } from "@/components/scene/Common";
import { ChoiceScene } from "@/components/scene/Choice";
import { InputScene } from "@/components/scene/Input";
import Custom1 from "@/components/scene/custom/Custom-1";
import Custom2 from "@/components/scene/custom/Custom-2";
import Custom3 from "@/components/scene/custom/Custom-3";
import Custom14 from "@/components/scene/custom/Custom-14";
import CommonOverlay from "@/components/overlay/Common";
import ChoiceOverlay from "@/components/overlay/Choice";
import InputOverlay from "@/components/overlay/Input";
import Custom17 from "@/components/scene/custom/Custom-17";

export const SceneComponentMap = {
  common: CommonScene,
  choice: ChoiceScene,
  input: InputScene,
  custom1: Custom1,
  custom2: Custom2,
  custom3: Custom3,
  custom14: Custom14,
  custom17: Custom17,
};

export const SceneOverlayMap = {
  common: CommonOverlay,
  choice: ChoiceOverlay,
  input: InputOverlay,
};
