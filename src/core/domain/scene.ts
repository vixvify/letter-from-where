export type SceneType = "common" | "choice" | "input";

export type TransitionType =
  | "white-fade"
  | "black-fade"
  | "blink"
  | "cut"
  | "fade";

export type Format = "video" | "image";

export type Choice = {
  A: string;
  B: string;
  C: string;
};

export type choiceNext = {
  nextA: string;
  nextB: string;
  nextC: string;
};

export type Scene = {
  src: string | undefined;
  text: string;
  next: string | null;
  type: SceneType;
  format: Format;
  choice: Choice | null;
  choiceNext?: choiceNext;
  transition: TransitionType;
};

export type ScenesDataType = {
  [key: string]: Scene;
};

export type SceneProps = {
  scene: Scene;
  goTo: (next: string, type: TransitionType) => void;
};


