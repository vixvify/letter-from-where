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
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-start justify-center gap-5">
        <h1 className="text-[17px] text-left text-black whitespace-pre-line leading-10 font-bold">
          {`แล้ว... 
ความกดดันมันคืออะไรหรอ`}
        </h1>
        <h1 className="text-[17px] text-left text-black whitespace-pre-line leading-10 font-bold">
          {`ถ้าโตไปเป็นผู้ใหญ่
หนูจะมีมันหรือเปล่า?`}
        </h1>
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
