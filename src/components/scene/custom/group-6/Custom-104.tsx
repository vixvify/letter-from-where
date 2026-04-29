"use client";

import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useState } from "react";

export default function Custom104({ scene, goTo }: SceneProps) {
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
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_70%_35%,rgba(255,200,100,0.35)_0%,rgba(255,200,100,0.15)_25%,transparent_45%),radial-gradient(circle_at_50%_20%,#1f2937_0%,#0f172a_50%,#020617_100%)]"
      onClick={handleClick}
    >
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
          คุณมองไปข้างหน้า
        </h1>
        <h1
          className={`text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold transition-opacity duration-500 ${
            step >= 1 ? "opacity-100 animate-fade-in" : "opacity-0"
          }`}
        >
          {`เสียงฝนที่กระทบลงบนพื้น
          เหมือนจะคอยช่วยปลอบประโลมคุณ`}
        </h1>
      </div>
    </div>
  );
}
