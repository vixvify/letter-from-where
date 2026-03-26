export type Choice = {
  A: string;
  B: string;
  C: string;
};

export type SceneType = "common" | "choice";

export type Scene = {
  video: string | undefined;
  next: string | null;
  type: SceneType;
  choice: Choice | null;
};

export type ScenesDataType = {
  [key: string]: Scene;
};
