import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";
import { usePathname } from "next/navigation";
import { ICreateData } from "@/core/domain/data";
import Button from "@/components/Button";

export default function Custom69({ scene, goTo }: SceneProps) {
  const { setField } = useFormStore();
  const pathname = usePathname();
  const key = pathname.replace("/scenes/", "");
  const handleClick = (choice: string, next: string) => {
    setField(key as keyof ICreateData, choice);
    handleNext({
      next: next,
      transition: scene.transition,
      goTo,
    });
  };
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_65%_30%,rgba(255,220,120,0.45)_0%,rgba(255,220,120,0.2)_25%,transparent_45%),radial-gradient(circle_at_55%_40%,#8fb0d4_0%,#4a6b94_40%,#243f6b_70%,#06142c_100%)]">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="flex flex-col items-stretch justify-center gap-5">
          <h1 className="text-[18px] text-left text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
            {`แล้ว... 
ความกดดันมันคืออะไรหรอ`}
          </h1>
          <h1 className="text-[18px] text-left text-white [text-shadow:0_3px_10px_rgba(0,0,0,1)] whitespace-pre-line leading-10 font-bold">
            {`ถ้าโตไปเป็นผู้ใหญ่
หนูจะมีมันหรือเปล่า?`}
          </h1>
        </div>
        <div className="flex flex-col items-stretch justify-center gap-3 w-max">
          <Button
            className="w-full font-bold"
            onClick={() => {
              handleClick("A", "scene_70");
            }}
          >
            มีสิ
          </Button>
          <Button
            className="w-full font-bold"
            onClick={() => {
              handleClick("B", "scene_70");
            }}
          >
            มีบ้างแหละ
          </Button>
          <Button
            className="w-full font-bold"
            onClick={() => {
              handleClick("C", "scene_74");
            }}
          >
            ไม่ค่อยมีหรอก
          </Button>
        </div>
      </div>
    </div>
  );
}
