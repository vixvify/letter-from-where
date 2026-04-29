import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";

export default function Custom91({ scene, goTo }: SceneProps) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_50%_85%,#4b5563_0%,#1f2937_50%,#000000_100%)]"
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
        {`คุณกำลังยืน
อยู่ในร่ม
ชายคาของป้ายรถเมล์`}
      </h1>
    </div>
  );
}
