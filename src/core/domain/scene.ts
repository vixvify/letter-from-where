import { Choice, ChoiceNext } from "./choice";
import { TransitionType } from "./transition";
import { CustomSceneKey } from "./custom-scene";

export type SceneType = "common" | "choice" | "input" | CustomSceneKey;

export type Format = "video" | "image";

export type Scene = {
  src?: string;
  text?: string;
  textColor?: string;
  next: string | null;
  type: SceneType;
  format?: Format;
  choice?: Choice;
  choiceNext?: ChoiceNext;
  inputField?: string;
  buttonText?: string;
  transition: TransitionType;
};

export type ScenesDataType = {
  [key: string]: Scene;
};

export type SceneProps = {
  scene: Scene;
  goTo: (next: string, type: TransitionType) => void;
  onLoadingComplate?: (status: boolean) => void;
};
