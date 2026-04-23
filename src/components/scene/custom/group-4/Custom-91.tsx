import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";

export default function Custom91({ scene, goTo }: SceneProps) {
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
      <h1 className="text-[17px] text-left text-black whitespace-pre-line leading-10 font-bold">
        {`คุณกำลังยืน
อยู่ในร่ม
ชายคาของป้ายรถเมล์`}
      </h1>
    </div>
  );
}
