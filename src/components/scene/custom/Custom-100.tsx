import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";

export default function Custom100({ scene, goTo }: SceneProps) {
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
          {`ถ้าเธอได้อ่านจดหมายฉบับนี้
แม้ในวันที่มีฝนตกในใจ เธอก็ยัง 
ออกตามหาแสงสว่างของตัวเองอีกครั้ง 
แม้ว่าวันนี้จะไม่ใช่ วันของเธอเลย 
แต่เธอก็ยังจับมือของตัวเองก้าวผ่าน
บทเรียนของชีวิตไม่ว่าผลลัพธ์
มันจะออก มาเป็นยังไง`}
        </h1>
      </div>
    </div>
  );
}
