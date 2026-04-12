import { ScenesDataType } from "@/core/domain/scene";

export const CustomScenes: ScenesDataType = {
  scene_1: {
    next: "scene_2",
    type: "custom1",
    format: "image",
    transition: "white-fade",
  },
  scene_2: {
    next: "scene_3",
    type: "custom2",
    format: "image",
    transition: "white-fade",
  },
  scene_3: {
    next: "scene_4",
    type: "custom3",
    format: "image",
    transition: "black-fade",
  },
  scene_14: {
    next: "scene_15",
    type: "custom14",
    format: "image",
    transition: "white-fade",
  },
  scene_17: {
    next: "scene_18",
    type: "custom17",
    format: "image",
    transition: "white-fade",
  },
};
