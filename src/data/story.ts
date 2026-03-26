import { SceneUrls } from "./video_url";

type Choice = {
  A: string;
  B: string;
  C: string;
};

type SceneType = "common" | "choice";

export type Scene = {
  video: string | undefined;
  next: string | null;
  type: SceneType;
  choice: Choice | null;
};

type ScenesDataType = {
  [key: string]: Scene;
};

const baseScenes: ScenesDataType = Object.fromEntries(
  Array.from({ length: 50 }, (_, i) => {
    const id = i + 1;
    const key = `scene_${id}`;

    return [
      key,
      {
        video: SceneUrls[key as keyof typeof SceneUrls],
        next: id < 50 ? `scene_${id + 1}` : null,
        type: "common",
        choice: null,
      },
    ];
  }),
);

export const ScenesData: ScenesDataType = {
  ...baseScenes,

  scene_10: {
    video: SceneUrls.scene_10,
    next: null,
    type: "choice",
    choice: {
      A: "",
      B: "",
      C: "",
    },
  },
};
