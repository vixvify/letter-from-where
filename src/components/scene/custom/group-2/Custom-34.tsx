import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";

export default function Custom34({ scene, goTo }: SceneProps) {
  const { data } = useFormStore();
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_45%,#4c6fa3_0%,#2f4f7f_40%,#1e3a66_70%,#0b1e3a_100%)]"
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
        พี่ {data.name}
      </h1>
    </div>
  );
}
