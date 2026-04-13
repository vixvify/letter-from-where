"use client";
import { SceneProps } from "@/core/domain/scene";
import Button from "../Button";
import { handleNext } from "@/utils/scene";
import { useFormStore } from "@/store/data";
import { usePathname } from "next/navigation";
import { ICreateData } from "@/core/domain/data";

export default function ChoicesOverlay({ scene, goTo }: SceneProps) {
  const { setField } = useFormStore();
  const pathname = usePathname();
  const key = pathname.replace("/scenes/", "");
  const handleClick = (choice: string, next: string) => {
    setField(key as keyof ICreateData, choice);
    handleNext({
      next: next,
      transition: scene.transition,
      goTo,
    });
  };
  if (scene && scene.choice) {
    return (
      <div className="fixed inset-0 flex items-center justify-center ">
        <div className="flex flex-col items-center justify-center ">
          <h1 className="text-[17px] font-bold text-black whitespace-pre-line leading-10 text-center">
            {scene.text}
          </h1>
          <div className="flex flex-col items-stretch justify-center gap-3 mt-5 w-max">
            <Button
              className="w-full font-bold"
              onClick={() => {
                if (scene.choiceNext?.nextA) {
                  handleClick("A", scene.choiceNext.nextA);
                }
              }}
            >
              {scene.choice.A}
            </Button>
            <Button
              className="w-full font-bold"
              onClick={() => {
                if (scene.choiceNext?.nextB) {
                  handleClick("B", scene.choiceNext.nextB);
                }
              }}
            >
              {scene.choice.B}
            </Button>
            {scene.choice.C && (
              <Button
                className="w-full font-bold"
                onClick={() => {
                  if (scene.choiceNext?.nextC) {
                    handleClick("C", scene.choiceNext.nextC);
                  }
                }}
              >
                {scene.choice.C}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
}
