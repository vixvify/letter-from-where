import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { bgColorMap } from "@/core/constants/color-map";
import { usePathname } from "next/navigation";

export default function CommonOverlay({ scene, goTo }: SceneProps) {
  const pathname = usePathname();
  const key = pathname.replace("/scenes/", "");
  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${bgColorMap[key]}`}
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
        {scene.text}
      </h1>
    </div>
  );
}
