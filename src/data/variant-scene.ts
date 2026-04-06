import { ScenesDataType } from "@/core/domain/scene";
import { SceneUrls } from "./video-url";
import { SceneText } from "@/core/constants/scene-text";

export const VariantScenes: ScenesDataType = {
  scene_4: {
    src: SceneUrls.scene_4,
    next: "scene_5",
    text: SceneText.scene_4,
    type: "common",
    format: "image",
    transition: "black-fade",
  },
};
