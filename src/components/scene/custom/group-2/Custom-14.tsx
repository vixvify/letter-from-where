import { SceneProps } from "@/core/domain/scene";
import { useState } from "react";
import Button from "@/components/Button";
import { handleNext } from "@/utils/scene";

const SCENE_14 = process.env.NEXT_PUBLIC_URL_SCENE_14!;

export default function Custom14({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const [step, setStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const texts = [
    "",
    "วันนี้ไม่ใช่วันของคุณเลย...",
    "คุณจะยังเดินต่อไปมั้ย?",
    "ยังไม่ทันได้คิดแสงสว่างวาบ\nก็สาดเข้ามา",
  ];

  const nextStep = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      setStep((prev) => prev + 1);
      setIsFadingOut(false);
    }, 1000);
  };

  const handleClick = () => {
    if (step === 0) return setStep(1);
    if (step === 1) nextStep();
    if (step === 2) return;
    if (step === 3) {
      handleNext({
        next: scene.next,
        transition: scene.transition,
        goTo,
      });
    }
  };

  const handleChoice = () => {
    nextStep();
  };

  return (
    <div
      className="relative flex items-center justify-center w-full h-screen bg-gray-500"
      onClick={handleClick}
    >
      <video
        src={SCENE_14}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 object-cover w-full h-full"
        onLoadedData={() => onLoadingComplate?.(true)}
      ></video>
      {step === 2 ? (
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-6">
          <h1
            className={`text-[18px] font-bold text-white text-center whitespace-pre-line
      [text-shadow:0_3px_10px_rgba(0,0,0,1)]
      ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}
          >
            {texts[step]}
          </h1>

          <div
            className={`flex flex-col items-center gap-3
      ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}
            onClick={(e) => e.stopPropagation()}
          >
            <Button onClick={handleChoice} className="font-bold w-50">
              เดินต่อไป
            </Button>
            <Button onClick={handleChoice} className="font-bold w-50">
              หยุดรอซักหน่อย
            </Button>
          </div>
        </div>
      ) : (
        step > 0 &&
        step <= 3 && (
          <h1
            className={`absolute inset-0 z-10 flex items-center justify-center text-[18px] font-bold text-white text-center whitespace-pre-line
      [text-shadow:0_3px_10px_rgba(0,0,0,1)]
      ${isFadingOut ? "animate-fade-out" : "animate-fade-in"}`}
          >
            {texts[step]}
          </h1>
        )
      )}
    </div>
  );
}
