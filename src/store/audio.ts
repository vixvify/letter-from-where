import { create } from "zustand";
import * as engine from "@/lib/audio-engine";

type Channel = "bgm" | "ambient" | "sfx";

type PlayOptions = {
  fadeIn?: number;
  loop?: boolean;
  volume?: number;
};

type StopOptions = {
  fadeOut?: number;
};

type AudioState = {
  enabled: boolean;
  enable: () => void;
  disable: () => void;

  play: (channel: Channel, src: string, options?: PlayOptions) => void;
  stop: (channel: Channel, options?: StopOptions) => void;
};

export const useAudioStore = create<AudioState>((set) => ({
  enabled: false,

  enable: () => set({ enabled: true }),
  disable: () => set({ enabled: false }),

  play: (channel: Channel, src: string, options?: PlayOptions) => {
    engine.play(channel, src, options);
  },

  stop: (channel: Channel, options?: StopOptions) => {
    engine.stop(channel, options);
  },
}));
