import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";

export default function Custom111({ scene, goTo }: SceneProps) {
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
      <div className="flex flex-col items-start justify-center gap-10">
        <h1 className="text-[17px] text-left text-black whitespace-pre-line leading-10 font-bold">
          {`ถึง ${data.name}`}
        </h1>
        <h1 className="text-[17px] text-left text-black whitespace-pre-line leading-10 font-bold">
          {`ฉันไม่รู้ว่าตอนที่เธอเปิดจดหมาย 
          ฉบับนี้ฝนในใจของเธอกำลัง 
          ตกหนักแค่ไหน แม้ว่าวันนี้จะไม่ใช่ 
          วันของเธอเลย และบางครั้งเธอ 
          ก็ไม่แน่ใจว่าตัวเองมาถูกทางไหม 
          แต่ก็ขอให้เธอจับมือของตัวเองไว้แน่นๆ 
          แล้วค่อยๆ เดินไปด้วยกันนะ`}
        </h1>
      </div>
    </div>
  );
}
