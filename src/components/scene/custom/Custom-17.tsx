"use client";

import { useState } from "react";
import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";

export default function Custom17({ scene, goTo }: SceneProps) {
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
      className="fixed inset-0 flex items-center justify-center "
      onClick={handleClick}
    >
      <div className="relative text-center -translate-y-6">
        <h1 className="text-[17px] text-black leading-10 font-bold">
          ที่นี่... <br />
          ไม่ใช่ที่ที่คุณรู้จัก
        </h1>

        {step >= 1 && (
          <div className="absolute left-0 right-0 mt-2 font-bold animate-fade-in text-[17px]">
            ไม่คุ้นเคยเลย...
          </div>
        )}
      </div>
    </div>
  );
}
