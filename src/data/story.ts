import { SceneUrls } from "./video-url";
import { ScenesDataType } from "@/core/domain/scene";
import { SceneText } from "@/core/constants/scene-text";
import { CustomScenes } from "./custom-scene";
import { VariantScenes } from "./variant-scene";

const CommonScenes: ScenesDataType = Object.fromEntries(
  Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    const key = `scene_${id}`;

    return [
      key,
      {
        src: SceneUrls[key as keyof typeof SceneUrls],
        next: id < 50 ? `scene_${id + 1}` : null,
        text: SceneText[key as keyof typeof SceneText],
        type: "common",
        format: "image",
        transition: "white-fade",
      },
    ];
  }),
);

export const ScenesData: ScenesDataType = {
  ...CommonScenes,
  ...CustomScenes,
  ...VariantScenes,
};
