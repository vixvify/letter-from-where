import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";

export default function Custom62({ scene, goTo }: SceneProps) {
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
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
          คุณปล่อยใจเดินไปพร้อมกับเขา
        </h1>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line font-bold">
            .
          </h1>
          <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line font-bold">
            .
          </h1>
          <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line font-bold">
            .
          </h1>
        </div>
        <h1 className="text-[18px] text-center text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
          ในจังหวะของตัวเอง
        </h1>
      </div>
    </div>
  );
}
