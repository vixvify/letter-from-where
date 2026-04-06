import { SceneProps } from "@/core/domain/scene";
import Button from "@/components/Button";
import { handleNext } from "@/utils/scene";

export default function Custom1({ scene, goTo }: SceneProps) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-center animate-fade-in-common">
        <h1 className="mb-6 text-xl font-bold">คำเตือน</h1>

        <div className="text-gray-800 leading-5 space-y-4 text-[13px]">
          <p>เนื้อหานี้ถูกออกแบบในรูปแบบเกม</p>
          <p>เพื่อสำรวจและทำความเข้าใจตนเอง</p>
          <p>
            เกี่ยวกับภาวะ{" "}
            <span className="font-semibold">Impostor Syndrome</span>
          </p>

          <p className="mt-4">
            ทางทีมผู้พัฒนาขออนุญาต เก็บข้อมูลเพื่อนำไปใช้ศึกษา
          </p>
          <p>และพัฒนาเนื้อหาให้ดียิ่งขึ้นในอนาคต</p>

          <p className="mt-4">โดยข้อมูลที่จัดเก็บจะถูกนำไปใช้อย่างระมัดระวัง</p>
          <p>และไม่เปิดเผยตัวตนของผู้เล่น</p>

          <p className="mt-4">บางคำถามอาจกระตุ้นความรู้สึก</p>
          <p>ไม่สบายใจ หรือความคิดด้านลบได้</p>

          <p className="mt-4">
            หากคุณรู้สึกไม่สบายใจ สามารถหยุดเล่นได้ทุกเมื่อ
          </p>
          <p>และควรดูแลจิตใจของตนเอง อย่างเหมาะสม</p>
        </div>

        <Button
          variant="underline"
          className="mt-10"
          onClick={() => {
            handleNext({
              next: scene.next,
              transition: scene.transition,
              goTo,
            });
          }}
        >
          คลิกเพื่อเริ่ม
        </Button>
      </div>
    </div>
  );
}
