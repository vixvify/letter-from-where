"use client";

import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useState } from "react";
import { useFormStore } from "@/store/data";

export default function Custom83({ scene, goTo }: SceneProps) {
  const [step, setStep] = useState(0);
  const { data } = useFormStore();

  const handleClick = () => {
    if (step === 0) return setStep(1);
    if (step === 1) return setStep(2);
    if (step === 2) {
      handleNext({
        next: scene.next,
        transition: scene.transition,
        goTo,
      });
    }
  };
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
          {`ตลอด ${data.age} ปี 
ที่เราโตขึ้นได้ขนาดนี้`}
        </h1>
        <h1
          className={`text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold transition-opacity duration-500 ${
            step >= 1 ? "opacity-100 animate-fade-in" : "opacity-0"
          }`}
        >
          {`ก็เพราะ ${data.name} อดทน
และพยายามมาตลอด`}
        </h1>
        <h1
          className={`text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold transition-opacity duration-500 ${
            step >= 2 ? "opacity-100 animate-fade-in" : "opacity-0"
          }`}
        >
          {`มันจะดีขึ้นในทุก ๆ วันนะ :))`}
        </h1>
      </div>
    </div>
  );
}
