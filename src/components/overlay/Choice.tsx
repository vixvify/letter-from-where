"use client";
import { SceneProps } from "@/core/domain/scene";
import Button from "../Button";
import { handleNext } from "@/utils/scene";

export default function ChoicesOverlay({ scene, goTo }: SceneProps) {
  if (scene && scene.choice) {
    return (
      <div className="fixed inset-0 flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[17px] font-bold text-black">{scene.text}</h2>
          <div className="flex flex-col items-center justify-center gap-3 mt-5">
            <Button
              className="w-40 font-bold"
              onClick={() => {
                if (scene.choiceNext?.nextA) {
                  handleNext({
                    next: scene.choiceNext.nextA,
                    transition: scene.transition,
                    goTo,
                  });
                }
              }}
            >
              {scene.choice.A}
            </Button>
            <Button
              className="w-40 font-bold"
              onClick={() => {
                if (scene.choiceNext?.nextB) {
                  handleNext({
                    next: scene.choiceNext.nextB,
                    transition: scene.transition,
                    goTo,
                  });
                }
              }}
            >
              {scene.choice.B}
            </Button>
            <Button
              className="w-40 font-bold"
              onClick={() => {
                if (scene.choiceNext?.nextC) {
                  handleNext({
                    next: scene.choiceNext.nextC,
                    transition: scene.transition,
                    goTo,
                  });
                }
              }}
            >
              {scene.choice.C}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
