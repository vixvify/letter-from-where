import { create } from "zustand";
import { TransitionType } from "@/core/domain/scene";

type State = {
  transition: TransitionType | null;
  setTransition: (t: TransitionType | null) => void;
};

export const useTransitionStore = create<State>((set) => ({
  transition: null,
  setTransition: (t) => set({ transition: t }),
}));
