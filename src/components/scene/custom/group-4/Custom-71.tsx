"use client";

import { useState } from "react";
import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";
import { getCachedImage } from "@/lib/image-cache";

export default function Custom71({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const cachedimg = scene.src ? getCachedImage(scene.src) : null;

  const [step, setStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const texts = [
    `มันคงยากมาก..กว่าจะผ่านไปได้`,
    `ถึงเวลาที่หนูจะต้องเผชิญหน้า\nกับความกดดันแล้ว`,
    `ถึงอย่างนั้นพี่ก็เติบโต\nมาได้อย่างดีเลยนะ`,
  ];

  const handleClick = () => {
    if (step === 0) {
      setStep(1);
      setTimeout(() => setIsVisible(true), 50);
      return;
    }

    setIsVisible(false);

    setTimeout(() => {
      if (step === texts.length) {
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        });
      } else {
        setStep(step + 1);

        setTimeout(() => setIsVisible(true), 50);
      }
    }, 1000);
  };

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={handleClick}
    >
      {scene.src && (
        <img
          src={cachedimg?.src || scene.src}
          alt="bg"
          className="object-cover w-full h-screen"
          onLoad={() => onLoadingComplate?.(true)}
        />
      )}

      {step > 0 && step <= texts.length && (
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h1
            className={`text-[18px] font-bold text-white whitespace-pre-line leading-10
            [text-shadow:0_3px_10px_rgba(0,0,0,1)]
            transition-opacity duration-1000
            ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            {texts[step - 1]}
          </h1>
        </div>
      )}
    </div>
  );
}
