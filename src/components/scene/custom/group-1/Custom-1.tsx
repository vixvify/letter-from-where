import { SceneProps } from "@/core/domain/scene";
import Button from "@/components/Button";
import { handleNext } from "@/utils/scene";
import { useAudioStore } from "@/store/audio";
import { AudioUrls } from "@/data/audio-url";

export default function Custom1({ scene, goTo }: SceneProps) {
  const play = useAudioStore((s) => s.play);
  const enable = useAudioStore((s) => s.enable);

  const handleEnter = () => {
    enable();
    if (AudioUrls["music"]) {
      play("bgm", AudioUrls["music"], {
        fadeIn: 1500,
        loop: true,
        volume: 0.2,
      });
    }
    handleNext({
      next: scene.next,
      transition: scene.transition,
      goTo,
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex flex-col gap-10 text-center animate-fade-in-common">
        <h1 className="text-xl font-bold">คำเตือน</h1>

        <div className="text-gray-800 leading-7 text-[12px] font-bold">
          <p>เนื้อหานี้ถูกออกแบบในรูปแบบเกม</p>
          <p>เพื่อสำรวจและทำความเข้าใจตนเอง</p>
          <p>
            เกี่ยวกับภาวะ
            <span className="font-semibold">Impostor Syndrome</span>
          </p>

          <p>ทางทีมผู้พัฒนาขออนุญาต เก็บข้อมูลเพื่อนำไปใช้ศึกษา</p>
          <p>และพัฒนาเนื้อหาให้ดียิ่งขึ้นในอนาคต</p>

          <p>โดยข้อมูลที่จัดเก็บจะถูกนำไปใช้อย่างระมัดระวัง</p>
          <p>และไม่เปิดเผยตัวตนของผู้เล่น</p>

          <p>บางคำถามอาจกระตุ้นความรู้สึก</p>
          <p>ไม่สบายใจ หรือความคิดด้านลบได้</p>

          <p>หากคุณรู้สึกไม่สบายใจ สามารถหยุดเล่นได้ทุกเมื่อ</p>
          <p>และควรดูแลจิตใจของตนเอง อย่างเหมาะสม</p>
        </div>

        <Button variant="underline" onClick={handleEnter}>
          คลิกเพื่อเริ่ม
        </Button>
      </div>
    </div>
  );
}
