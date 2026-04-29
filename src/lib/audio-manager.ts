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
    if (pathname.startsWith("/scenes/scene_11") && AudioUrls["run"]) {
      play("ambient", AudioUrls["run"], {
        fadeIn: 4000,
        loop: true,
        volume: 1,
      });
    }
    if (pathname.startsWith("/scenes/scene_12") && AudioUrls["rain"]) {
      play("ambient", AudioUrls["rain"], {
        fadeIn: 4000,
        loop: true,
        volume: 1,
      });
    }
    if (pathname.startsWith("/scenes/scene_15")) {
      stop("ambient", { fadeOut: 4000 });

      return;
    }
    if (pathname.startsWith("/scenes/scene_63") && AudioUrls["rain"]) {
      play("ambient", AudioUrls["rain"], {
        fadeIn: 4000,
        loop: true,
      });
    }
    if (pathname.startsWith("/scenes/scene_65")) {
      stop("ambient", { fadeOut: 4000 });

      return;
    }
    if (pathname.startsWith("/scenes/scene_90") && AudioUrls["rain"]) {
      play("ambient", AudioUrls["rain"], {
        fadeIn: 4000,
        loop: true,
      });
    }
    if (pathname.startsWith("/scenes/scene_95")) {
      stop("ambient", { fadeOut: 4000 });

      return;
    }
    if (pathname.startsWith("/scenes/scene_102") && AudioUrls["rain"]) {
      play("ambient", AudioUrls["rain"], {
        fadeIn: 4000,
        loop: true,
      });
    }
    if (pathname.startsWith("/scenes/scene_106")) {
      stop("ambient", { fadeOut: 4000 });

      return;
    }
  }, [pathname, enabled, play, stop]);

  return null;
}
