import { TransitionType } from "@/core/domain/transition";

interface HandleNextParams {
  next?: string | null;
  transition?: TransitionType;
  goTo: (next: string, type: TransitionType) => void;
}

export function handleNext({ next, transition, goTo }: HandleNextParams) {
  if (!next) return;

  goTo(next, transition ?? "cut");
}
