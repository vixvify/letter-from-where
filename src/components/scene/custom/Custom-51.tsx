import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";

export default function Custom51({ scene, goTo }: SceneProps) {
  const { data } = useFormStore();
  return (
    <div
      className="fixed inset-0 flex items-center justify-center "
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
          หนูมีเป้าหมายที่อยากทำด้วยล่ะ
        </h1>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
            เป้าหมายของหนูคือ
          </h1>
          <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold max-w-75">
            {data.scene_30}
          </h1>
        </div>
      </div>
    </div>
  );
}
