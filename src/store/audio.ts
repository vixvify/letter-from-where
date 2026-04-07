"use client";

import { create } from "zustand";

type AudioState = {
  currentSrc: string | null;
  enabled: boolean;

  play: (src: string) => void;
  stop: () => void;
  toggle: () => void;
};

let currentAudio: HTMLAudioElement | null = null;
let nextAudio: HTMLAudioElement | null = null;

const fade = (
  audio: HTMLAudioElement,
  from: number,
  to: number,
  duration: number,
) => {
  const steps = 20;
  const stepTime = duration / steps;
  const delta = (to - from) / steps;

  let volume = from;
  audio.volume = volume;

  const interval = setInterval(() => {
    volume += delta;
    audio.volume = Math.max(0, Math.min(1, volume));

    if ((delta > 0 && volume >= to) || (delta < 0 && volume <= to)) {
      audio.volume = to;
      clearInterval(interval);
    }
  }, stepTime);
};

export const useAudioStore = create<AudioState>((set, get) => ({
  currentSrc: null,
  enabled: false,

  toggle: () => {
    const newVal = !get().enabled;
    set({ enabled: newVal });
  },

  play: (src) => {
    if (!get().enabled) return;

    if (currentAudio?.src.includes(src)) return;

    nextAudio = new Audio(src);
    nextAudio.loop = true;
    nextAudio.volume = 0;
    nextAudio.play();

    fade(nextAudio, 0, 1, 1000);

    if (currentAudio) {
      fade(currentAudio, currentAudio.volume, 0, 1000);
      setTimeout(() => currentAudio?.pause(), 1000);
    }

    currentAudio = nextAudio;

    set({ currentSrc: src });
  },

  stop: () => {
    if (currentAudio) {
      fade(currentAudio, currentAudio.volume, 0, 800);
      setTimeout(() => currentAudio?.pause(), 800);
    }
    set({ currentSrc: null });
  },
}));
