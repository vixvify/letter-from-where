"use client";

import { Scene } from "@/core/domain/scene";
import { TransitionType } from "@/core/domain/scene";

type SceneProps = {
  scene: Scene;
  goTo: (next: string, type: TransitionType) => void;
};

export function ChoiceScene({ scene, goTo }: SceneProps) {
  if (scene.choice) {
    return (
      <div>
        <video src={scene.src} autoPlay />

        <button
          onClick={() => {
            if (scene.choiceNext) {
              goTo(scene.choiceNext?.nextA, scene.transition ?? "cut");
            }
          }}
        >
          {scene.choice.A}
        </button>
        <button
          onClick={() => {
            if (scene.choiceNext) {
              goTo(scene.choiceNext?.nextB, scene.transition ?? "cut");
            }
          }}
        >
          {scene.choice.B}
        </button>
        <button
          onClick={() => {
            if (scene.choiceNext) {
              goTo(scene.choiceNext?.nextC, scene.transition ?? "cut");
            }
          }}
        >
          {scene.choice.C}
        </button>
      </div>
    );
  }
}
