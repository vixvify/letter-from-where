import { SceneProps } from "@/core/domain/scene";
import { useState, useRef } from "react";
import { handleNext } from "@/utils/scene";

const SCENE_59_1 = process.env.NEXT_PUBLIC_URL_SCENE_59_1!;
const SCENE_59_2 = process.env.NEXT_PUBLIC_URL_SCENE_59_2!;
const SCENE_59_3 = process.env.NEXT_PUBLIC_URL_SCENE_59_3!;

export default function Custom59({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const [step, setStep] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClick = () => {
    if (step === 0) {
      setStep(1);

      setTimeout(() => {
        videoRef.current?.play();
      }, 100);
    } else if (step === 2) {
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
        src={SCENE_59_1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          step === 0 ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => onLoadingComplate?.(true)}
        alt="scene-59-1"
      />

      <video
        ref={videoRef}
        src={SCENE_59_2}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          step === 1 ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        onEnded={() => setStep(2)}
      />

      <img
        src={SCENE_59_3}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          step === 2 ? "opacity-100" : "opacity-0"
        }`}
        alt="scene-59-3"
      />
    </div>
  );
}
