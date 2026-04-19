"use client";

import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";
import { useState } from "react";

const SCENE_6_1 = process.env.NEXT_PUBLIC_URL_SCENE_6_1!;
const SCENE_6_2 = process.env.NEXT_PUBLIC_URL_SCENE_6_2!;

export default function Custom6({ scene, goTo }: SceneProps) {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    if (step === 0) {
      setStep(1);
    } else {
      handleNext({
        next: scene.next,
        transition: scene.transition,
        goTo,
      });
    }
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-black"
      onClick={handleClick}
    >
      <img
        src={SCENE_6_1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          step === 0 ? "opacity-100" : "opacity-0"
        }`}
      />

      <img
        src={SCENE_6_2}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          step === 1 ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
