import { SceneProps } from "@/core/domain/scene";

export default function Custom3({ scene, goTo }: SceneProps) {
  const handleNext = () => {
    if (scene.next) {
      goTo(scene.next, scene.transition ?? "cut");
    }
  };
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-center">
        <div className="space-y-6 text-gray-800 leading-relaxed text-[13px]">
          <p>คุณ...คุณคนนั้น</p>

          <p>
            ในโลกที่ทุกอย่างยังเดินต่อไป <br />
            คุณเคยรู้สึกไหมว่า ตัวเองยังอยู่ที่เดิม <br />
            ถ้าคุณยังไม่รู้ว่า จะไปต่อยังไง
          </p>

          <p>
            แค่ลองเดินไปช้า ๆ กับเรา <br />
            และซื่อสัตย์กับความรู้สึกของตัวเองก็พอ
          </p>

          <p>บางทีที่นี่อาจกำลังรอคุณอยู่</p>
        </div>

        <button
          className="px-8 py-2 mt-10 text-gray-800 transition bg-gray-300 rounded-md hover:bg-gray-400"
          onClick={handleNext}
        >
          เริ่มต้น
        </button>
      </div>
    </div>
  );
}
