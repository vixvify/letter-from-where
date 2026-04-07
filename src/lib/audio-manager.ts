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
      play("/sounds/game.mp3");
    } else if (pathname.startsWith("/home")) {
      play("/sounds/home.mp3");
    } else {
      stop();
    }
  }, [play, stop, pathname, enabled]);

  return null;
}
