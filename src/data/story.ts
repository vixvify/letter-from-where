import { SceneUrls } from "./video_url";
import { ScenesDataType } from "@/core/domain/scene";

const commonScenes: ScenesDataType = Object.fromEntries(
  Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    const key = `scene_${id}`;

    return [
      key,
      {
        src: SceneUrls[key as keyof typeof SceneUrls],
        next: id < 50 ? `scene_${id + 1}` : null,
        type: "common",
        choice: null,
        transition: "white-fade",
      },
    ];
  }),
);

const customScenes: ScenesDataType = {
  scene_10: {
    src: SceneUrls.scene_10,
    next: null,
    type: "choice",
    choice: {
      A: "",
      B: "",
      C: "",
    },
    choiceNext: {
      nextA: "",
      nextB: "",
      nextC: "",
    },
    transition: "blink",
  },
};

export const ScenesData: ScenesDataType = {
  ...commonScenes,
  ...customScenes,
};
