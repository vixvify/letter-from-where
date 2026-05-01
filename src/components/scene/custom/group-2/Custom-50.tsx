import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { bgColorMap } from "@/core/constants/color-map";
import { usePathname } from "next/navigation";
import { useFormStore } from "@/store/data";

export default function Custom50({ scene, goTo }: SceneProps) {
  const pathname = usePathname();
  const key = pathname.replace("/scenes/", "");
  const { data } = useFormStore();

  const handleEnter = () => {
    if (data.scene_29 === "A") {
      handleNext({
        next: scene.next,
        transition: scene.transition,
        goTo,
      });
    } else {
      handleNext({
        next: "scene_57",
        transition: scene.transition,
        goTo,
      });
    }
  };

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center ${bgColorMap[key]}`}
      onClick={handleEnter}
    >
      <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
        {scene.text}
      </h1>
    </div>
  );
}
