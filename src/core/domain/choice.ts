export type ChoiceKey = "A" | "B" | "C";

export type Choice = {
  A: string;
  B: string;
  C?: string;
};

export type ChoiceNext = {
  nextA: string;
  nextB: string;
  nextC?: string;
};
