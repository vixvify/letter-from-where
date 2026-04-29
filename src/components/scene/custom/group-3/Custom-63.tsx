import { SceneProps } from "@/core/domain/scene";
import { useRef, useState } from "react";
import { handleNext } from "@/utils/scene";

const SCENE_63_1 = process.env.NEXT_PUBLIC_URL_SCENE_63_1!;
const SCENE_63_2 = process.env.NEXT_PUBLIC_URL_SCENE_63_2!;

export default function Custom63({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const [isSecond, setIsSecond] = useState(false);
  const video2Ref = useRef<HTMLVideoElement | null>(null);

  const handleFirstEnded = async () => {
    setIsSecond(true);

    setTimeout(() => {
      video2Ref.current?.play().catch(() => {});
    }, 50);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <video
        src={SCENE_63_1}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          !isSecond ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        playsInline
        onLoadedData={() => onLoadingComplate?.(true)}
        onEnded={handleFirstEnded}
      />

      <video
        ref={video2Ref}
        src={SCENE_63_2}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isSecond ? "opacity-100" : "opacity-0"
        }`}
        muted
        playsInline
        preload="auto"
        onLoadedData={() => onLoadingComplate?.(true)}
        onEnded={() => {
          handleNext({
            next: scene.next,
            transition: scene.transition,
            goTo,
          });
        }}
      />
    </div>
  );
}
