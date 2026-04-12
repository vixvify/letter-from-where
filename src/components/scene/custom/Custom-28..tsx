"use client";

import { useState } from "react";
import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";
import Image from "next/image";
import { useFormStore } from "@/store/data";
import { SceneUrls } from "@/data/video-url";

export default function Custom28({ scene, goTo }: SceneProps) {
  const [step, setStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const { data } = useFormStore();

  const choiceMap: Record<string, string | undefined> = {
    A: SceneUrls["society_scary"],
    B: SceneUrls["society_excited"],
    C: SceneUrls["society_boring"],
  };

  const selected = data.scene_18;
  const imageSrc = selected && choiceMap[selected] ? choiceMap[selected] : "";

  const nextStep = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsFadingOut(false);
    }, 1000);
  };

  const handleClick = () => {
    if (step === 0) nextStep();
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
      className="relative w-full h-screen"
      onClick={() => {
        handleClick();
      }}
    >
      <Image
        src={imageSrc}
        alt="bg"
        width={1000}
        height={1920}
        className="w-full h-screen"
        priority
      ></Image>
      {step === 0 && (
        <h1
          className={`absolute inset-0 z-10 flex items-center justify-center text-[18px] text-center font-bold text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}
        >
          คุณสังเกตเห็นว่า
          <br />
          คนรอบตัวของคุณ
          <br />
          กำลังไปที่ไหนสักแห่ง
        </h1>
      )}
      {step === 1 && (
        <h1
          className={`absolute inset-0 z-10 flex items-center justify-center text-[18px] text-center font-bold text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}
        >
          พวกเขาดูมีเป้าหมาย <br />
          ที่ชัดเจน...
        </h1>
      )}
    </div>
  );
}
