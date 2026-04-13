import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";

export default function Custom86({ scene, goTo }: SceneProps) {
  const { data } = useFormStore();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center"
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold max-w-75">
        ขอบคุณตัวเองที่ {data.scene_46}
      </h1>
    </div>
  );
}
