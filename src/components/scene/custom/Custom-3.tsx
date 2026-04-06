import { SceneProps } from "@/core/domain/scene";
import Button from "@/components/Button";
import { handleNext } from "@/utils/scene";

export default function Custom3({ scene, goTo }: SceneProps) {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-center">
        <div className="space-y-6 text-gray-800 leading-10 text-[12px] font-bold">
          <p className="m-0">คุณ...คุณคนนั้น</p>

          <p className="m-0">
            ในโลกที่ทุกอย่างยังเดินต่อไป <br />
            คุณเคยรู้สึกไหมว่า ตัวเองยังอยู่ที่เดิม <br />
            ถ้าคุณยังไม่รู้ว่า จะไปต่อยังไง
          </p>

          <p className="m-0 mt-4">
            แค่ลองเดินไปช้า ๆ กับเรา <br />
            และซื่อสัตย์กับความรู้สึกของตัวเองก็พอ
          </p>

          <p className="m-0 mt-4">บางทีที่นี่อาจกำลังรอคุณอยู่</p>
        </div>

        <Button
          type="submit"
          onClick={() =>
            handleNext({
              next: scene.next,
              transition: scene.transition,
              goTo,
            })
          }
          className="mt-10"
        >
          ยืนยัน
        </Button>
      </div>
    </div>
  );
}
