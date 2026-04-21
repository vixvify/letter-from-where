import { SceneProps } from "@/core/domain/scene";
import { useState } from "react";
import { handleNext } from "@/utils/scene";

const SCENE_37_1 = process.env.NEXT_PUBLIC_URL_SCENE_37_1!;
const SCENE_37_2 = process.env.NEXT_PUBLIC_URL_SCENE_37_2!;

export default function Custom37({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
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
        src={SCENE_37_1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          step === 0 ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => onLoadingComplate?.(true)}
      />

      <img
        src={SCENE_37_2}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          step === 1 ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => onLoadingComplate?.(true)}
      />
    </div>
  );
}
