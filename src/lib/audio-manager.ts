"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useAudioStore } from "@/store/audio";
import { AudioUrls } from "@/data/audio-url";

export default function RouteSoundManager() {
  const pathname = usePathname();

  const play = useAudioStore((s) => s.play);
  const stop = useAudioStore((s) => s.stop);
  const enabled = useAudioStore((s) => s.enabled);

  useEffect(() => {
    if (!enabled) return;

    if (pathname.startsWith("/scenes/scene_10") && AudioUrls["rain"]) {
      play("ambient", AudioUrls["rain"], {
        fadeIn: 1000,
        loop: true,
      });

      stop("bgm", { fadeOut: 800 });

      return;
    }
  }, [pathname, enabled, play, stop]);

  return null;
}
