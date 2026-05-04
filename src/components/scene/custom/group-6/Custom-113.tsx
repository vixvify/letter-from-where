"use client";

import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";

const BG_IMAGE = process.env.NEXT_PUBLIC_URL_CREDIT;

export default function Custom113({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
      onLoad={() => onLoadingComplate?.(true)}
    >
      <img
        src={BG_IMAGE}
        alt="bg"
        className="absolute inset-0 object-cover object-center w-full h-full"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex flex-col gap-6 text-center transition-opacity duration-1000 opacity-100">
          <div className="text-gray-800 leading-8 text-[13px] font-bold">
            <p>ทางทีมพัฒนาขอขอบคุณทุกคน</p>
            <p>ที่เข้ามาร่วมกิจกรรม และมีส่วนร่วมกับเนื้อหา</p>

            <p>และมีส่วนร่วมกับเนื้อหา</p>
            <p>เกี่ยวกับภาวะ Imposter Syndrome ในครั้งนี้</p>

            <p>หวังว่าประสบการณ์เล็ก ๆ จากกิจกรรมนี้</p>
            <p>จะช่วยให้ทุกคนได้ทำความเข้าใจตัวเองมากขึ้น</p>

            <p>และมองเห็นคุณค่า</p>
            <p>ในสิ่งที่ตัวเองเป็นมากขึ้นเช่นกัน 💛</p>
          </div>
        </div>
      </div>
    </div>
  );
}
