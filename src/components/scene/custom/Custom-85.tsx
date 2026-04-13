import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";

export default function Custom85({ scene, goTo }: SceneProps) {
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
      <div className="flex flex-col items-start justify-center gap-5">
        <h1 className="text-[17px] text-left text-black whitespace-pre-line leading-10 font-bold">
          สัญญานะ...ว่าจะไม่ลืมกัน...
        </h1>
        <h1 className="text-[17px] text-left text-black whitespace-pre-line leading-10 font-bold">
          {`ได้โปรดอย่าลืมช่วงเวลาที่
คุณมีความสุข`}
        </h1>
      </div>
    </div>
  );
}
