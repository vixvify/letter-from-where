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
  scene_18: {
    src: SceneUrls.scene_18,
    next: null,
    text: SceneText.scene_18,
    type: "choice",
    format: "image",
    transition: "black-fade",
    choice: {
      A: "น่ากลัว",
      B: "น่าสนุก",
      C: "น่าเบื่อ",
    },
    choiceNext: {
      nextA: "scene_19",
      nextB: "scene_22",
      nextC: "scene_25",
    },
  },
  scene_29: {
    src: undefined,
    next: null,
    text: SceneText.scene_29,
    type: "choice",
    format: "image",
    transition: "white-fade",
    choice: {
      A: "มี",
      B: "ไม่มี",
      C: "ไม่แน่ใจ",
    },
    choiceNext: {
      nextA: "scene_30",
      nextB: "scene_31",
      nextC: "scene_31",
    },
  },
  scene_30: {
    src: undefined,
    next: "scene_31",
    text: SceneText.scene_30,
    type: "input",
    format: "image",
    transition: "white-fade",
    inputField: "scene_30",
  },
};
