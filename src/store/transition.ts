import { create } from "zustand";
import { TransitionType } from "@/core/domain/transition";

type Phase = "enter" | "exit" | "between";

type State = {
  transition: {
    type: TransitionType;
    phase: Phase;
  } | null;
  setTransition: (t: { type: TransitionType; phase: Phase } | null) => void;
};

export const useTransitionStore = create<State>((set) => ({
  transition: null,
  setTransition: (t) => set({ transition: t }),
}));
