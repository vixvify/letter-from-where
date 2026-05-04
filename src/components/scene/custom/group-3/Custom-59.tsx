import { SceneProps } from "@/core/domain/scene";
import { useState, useRef } from "react";
import { handleNext } from "@/utils/scene";

const SCENE_59_2 = process.env.NEXT_PUBLIC_URL_SCENE_59_2!;
const SCENE_59_3 = process.env.NEXT_PUBLIC_URL_SCENE_59_3!;

export default function Custom59({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const [step, setStep] = useState(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClick = () => {
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
      className="relative w-full h-screen overflow-hidden bg-black"
      onClick={handleClick}
    >
      <video
        ref={videoRef}
        src={SCENE_59_2}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          step === 1 ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        playsInline
        onLoadedData={() => onLoadingComplate?.(true)}
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
