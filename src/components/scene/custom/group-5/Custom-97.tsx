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
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_30%_60%,#f59e0b_0%,#ea580c_40%,#7c2d12_70%,#2a0e05_100%)]"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
          แม้ว่ามันจะไม่ใช่วันของคุณเลย
        </h1>
        <h1
          className={`text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line font-bold transition-opacity duration-500 ${
            step >= 1 ? "opacity-100 animate-fade-in" : "opacity-0"
          }`}
        >
          {`.
          .
          .`}
        </h1>
        <h1
          className={`text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold transition-opacity duration-500 ${
            step >= 1 ? "opacity-100 animate-fade-in" : "opacity-0"
          }`}
        >
          {`แต่ถึงอย่างนั้น`}
        </h1>
      </div>
    </div>
  );
}
