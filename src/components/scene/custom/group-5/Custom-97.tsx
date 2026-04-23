"use client";

import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useState } from "react";

export default function Custom97({ scene, goTo }: SceneProps) {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step === 0) return setStep(1);
    if (step === 1) {
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
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
          แม้ว่ามันจะไม่ใช่วันของคุณเลย
        </h1>
        <h1
          className={`text-[17px] text-center text-black whitespace-pre-line font-bold transition-opacity duration-500 ${
            step >= 1 ? "opacity-100 animate-fade-in" : "opacity-0"
          }`}
        >
          {`.
          .
          .`}
        </h1>
        <h1
          className={`text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold transition-opacity duration-500 ${
            step >= 1 ? "opacity-100 animate-fade-in" : "opacity-0"
          }`}
        >
          {`แต่ถึงอย่างนั้น`}
        </h1>
      </div>
    </div>
  );
}
