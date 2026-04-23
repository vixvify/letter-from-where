import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";

export default function Custom62({ scene, goTo }: SceneProps) {
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
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
          คุณปล่อยใจเดินไปพร้อมกับเขา
        </h1>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[17px] text-center text-black whitespace-pre-line font-bold">
            .
          </h1>
          <h1 className="text-[17px] text-center text-black whitespace-pre-line font-bold">
            .
          </h1>
          <h1 className="text-[17px] text-center text-black whitespace-pre-line font-bold">
            .
          </h1>
        </div>
        <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
          ในจังหวะของตัวเอง
        </h1>
      </div>
    </div>
  );
}
