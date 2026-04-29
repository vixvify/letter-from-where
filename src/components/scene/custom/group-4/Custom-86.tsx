import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";

export default function Custom86({ scene, goTo }: SceneProps) {
  const { data } = useFormStore();
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_65%_30%,rgba(255,220,120,0.45)_0%,rgba(255,220,120,0.2)_25%,transparent_45%),radial-gradient(circle_at_55%_40%,#8fb0d4_0%,#4a6b94_40%,#243f6b_70%,#06142c_100%)]"
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold max-w-75">
        ขอบคุณตัวเองที่ {data.scene_46}
      </h1>
    </div>
  );
}
