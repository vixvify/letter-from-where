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

export type SceneType = "common" | "choice" | "input";

export type TransitionType =
  | "white-fade"
  | "black-fade"
  | "blink"
  | "cut"
  | "fade";

export type Scene = {
  src: string | undefined;
  next: string | null;
  type: SceneType;
  choice: Choice | null;
  choiceNext?: choiceNext;
  transition: TransitionType;
};

export type ScenesDataType = {
  [key: string]: Scene;
};
