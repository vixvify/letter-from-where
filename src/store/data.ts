import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ICreateData } from "@/core/domain/data";

type FormState = {
  data: Partial<ICreateData>;
  setField: <K extends keyof FormState["data"]>(
    key: K,
    value: FormState["data"][K],
  ) => void;

  setFields: (values: Partial<FormState["data"]>) => void;

  reset: () => void;
};

export const useFormStore = create<FormState>()(
  persist(
    (set) => ({
      data: {},

      setField: (key, value) =>
        set((state) => ({
          data: {
            ...state.data,
            [key]: value,
          },
        })),

      setFields: (values) =>
        set((state) => ({
          data: {
            ...state.data,
            ...values,
          },
        })),

      reset: () => set({ data: {} }),
    }),
    {
      name: "you-belong-here-storage",
    },
  ),
);
