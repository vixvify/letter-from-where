import { SceneProps } from "@/core/domain/scene";
import Button from "@/components/Button";
import { handleNext } from "@/utils/scene";
import { useAudioStore } from "@/store/audio";

export default function Custom1({ scene, goTo }: SceneProps) {
  const toggle = useAudioStore((s) => s.toggle);
  const play = useAudioStore((s) => s.play);

  const handleEnter = () => {
    toggle();
    play("/sounds/home.mp3");
    handleNext({
      next: scene.next,
      transition: scene.transition,
      goTo,
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-center animate-fade-in-common">
        <h1 className="mb-10 text-xl font-bold">คำเตือน</h1>

        <div className="text-gray-800 leading-10 space-y-4 text-[12px] font-bold">
          <p className="m-0">เนื้อหานี้ถูกออกแบบในรูปแบบเกม</p>
          <p className="m-0">เพื่อสำรวจและทำความเข้าใจตนเอง</p>
          <p className="m-0">
            เกี่ยวกับภาวะ{" "}
            <span className="font-semibold">Impostor Syndrome</span>
          </p>

          <p className="m-0">
            ทางทีมผู้พัฒนาขออนุญาต เก็บข้อมูลเพื่อนำไปใช้ศึกษา
          </p>
          <p className="m-0">และพัฒนาเนื้อหาให้ดียิ่งขึ้นในอนาคต</p>

          <p className="m-0">โดยข้อมูลที่จัดเก็บจะถูกนำไปใช้อย่างระมัดระวัง</p>
          <p className="m-0">และไม่เปิดเผยตัวตนของผู้เล่น</p>

          <p className="m-0">บางคำถามอาจกระตุ้นความรู้สึก</p>
          <p className="m-0">ไม่สบายใจ หรือความคิดด้านลบได้</p>

          <p className="m-0">หากคุณรู้สึกไม่สบายใจ สามารถหยุดเล่นได้ทุกเมื่อ</p>
          <p className="m-0">และควรดูแลจิตใจของตนเอง อย่างเหมาะสม</p>
        </div>

        <Button variant="underline" className="mt-10" onClick={handleEnter}>
          คลิกเพื่อเริ่ม
        </Button>
      </div>
    </div>
  );
}
