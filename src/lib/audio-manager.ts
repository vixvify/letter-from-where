"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAudioStore } from "@/store/audio";

export default function RouteSoundManager() {
  const pathname = usePathname();

  const play = useAudioStore((s) => s.play);
  const stop = useAudioStore((s) => s.stop);
  const enabled = useAudioStore((s) => s.enabled);

  useEffect(() => {
    if (!enabled) return;

    if (pathname.startsWith("/game")) {
      play("bgm", "/sounds/battle.mp3", {
        fadeIn: 1500,
        loop: true,
      });

      play("ambient", "/sounds/wind.mp3", {
        fadeIn: 2000,
        loop: true,
      });

      return;
    }

    if (pathname.startsWith("/home")) {
      play("bgm", "/sounds/home.mp3", {
        fadeIn: 1000,
        loop: true,
      });

      stop("ambient", { fadeOut: 800 });

      return;
    }
  }, [pathname, enabled, play, stop]);

  return null;
}
