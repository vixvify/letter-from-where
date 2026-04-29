import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";

const BG_IMAGE = process.env.NEXT_PUBLIC_URL_SCENE_100!;

export default function Custom111({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const { data } = useFormStore();

  return (
    <div
      className="absolute inset-0"
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <img
        src={BG_IMAGE}
        alt="background"
        className="absolute inset-0 object-cover w-full h-full"
        onLoad={() => onLoadingComplate?.(true)}
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex items-center justify-center w-full h-full">
        <div className="flex flex-col items-start justify-center gap-10 px-6">
          <h1 className="text-[18px] text-left text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
            {`ถึง ${data.name}`}
          </h1>

          <h1 className="text-[18px] text-left text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
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
    </div>
  );
}
