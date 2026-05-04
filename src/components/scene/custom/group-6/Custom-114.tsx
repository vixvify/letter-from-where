"use client";

import { SceneProps } from "@/core/domain/scene";
import { handleNext } from "@/utils/scene";
import { useEffect, useState } from "react";
import { useAudioStore } from "@/store/audio";

const BG_IMAGE = process.env.NEXT_PUBLIC_URL_CREDIT;

export default function Custom114({
  scene,
  goTo,
  onLoadingComplate,
}: SceneProps) {
  const [fadeOut, setFadeOut] = useState(false);
  const stop = useAudioStore((s) => s.stop);
  const handleClick = () => {
    handleNext({
      next: scene.next,
      transition: scene.transition,
      goTo,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      stop("ambient", { fadeOut: 4000 });
    }, 37000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden text-black"
      onClick={handleClick}
      onLoad={() => onLoadingComplate?.(true)}
    >
      <img
        src={BG_IMAGE}
        alt="bg"
        className="absolute inset-0 object-cover object-center w-full h-full"
      />

      <div
        className="absolute inset-0 flex justify-center overflow-hidden"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 35%, black 65%, transparent 100%)",
        }}
      >
        <div className="animate-credit text-center px-6 max-w-[500px] leading-8 text-[13px]">
          <p className="font-bold">ขอบคุณที่เล่น (THANK YOU FOR PLAYING)</p>
          <br />

          <p className="font-bold">สร้างโดย (A Game by)</p>
          <p>Bug Busters Studio</p>
          <br />

          <p className="font-bold text-[16px]">ผู้กำกับ (Director)</p>
          <p>นางสาวฐิตารีย์ ล่ำสัน</p>
          <p>นางสาวปัณฑารีย์ แสงวิมาน</p>
          <br />

          <p className="font-bold text-[16px]">โปรดิวเซอร์ (Producer)</p>
          <p>นางสาวพรรธนพร เหมวัตร</p>
          <p>นายอัสนาวี อีซอ</p>
          <br />

          <p className="font-bold text-[16px]">ผู้ออกแบบเกม (Game Designer)</p>
          <p>นางสาวฐิตารีย์ ล่ำสัน</p>
          <p>นางสาววิลาสินี เขมวิวิธ</p>
          <p>นางสาวปัณฑารีย์ แสงวิมาน</p>
          <br />

          <p className="text-[16px] font-bold mt-6">
            ฝ่ายโปรแกรม (Programming)
          </p>
          <p className="font-bold">หัวหน้าทีมโปรแกรมเมอร์ (Lead Programmer)</p>
          <p>นายอัสนาวี อีซอ</p>

          <p className="font-bold">
            โปรแกรมเมอร์เกมเพลย์ (Gameplay Programmer)
          </p>
          <p>นางสาวปัณฑารีย์ แสงวิมาน</p>

          <p className="text-[16px] font-bold mt-6">
            ศิลป์และการออกแบบ (Art & Design)
          </p>
          <p className="font-bold">ผู้อำนวยการฝ่ายศิลป์ (Art Director)</p>
          <p>นางสาววิลาสินี เขมวิวิธ</p>

          <p className="font-bold">ออกแบบตัวละคร (Character Design)</p>
          <p>นางสาววริษฐา ด้วงใจบุญ</p>

          <p className="font-bold">ออกแบบฉาก (Environment Design)</p>
          <p>นางสาวพรรธนพร เหมวัตร</p>

          <p className="font-bold">ออกแบบ UI/UX (UI/UX Design)</p>
          <p>นางสาวฐิตารีย์ ล่ำสัน</p>

          <p className="text-[16px] font-bold mt-6">แอนิเมชัน (Animation)</p>
          <p className="font-bold">แอนิเมเตอร์ (Animator)</p>
          <p>นางสาวพรรธนพร เหมวัตร</p>
          <p>นางสาววิลาสินี เขมวิวิธ</p>

          <p className="text-[16px] font-bold mt-6">
            เสียงและดนตรี (Sound & Music)
          </p>
          <p className="font-bold">ผู้ออกแบบเสียง (Sound Designer)</p>
          <p>นางสาวฐิตารีย์ ล่ำสัน</p>
          <p>นางสาวปัณฑารีย์ แสงวิมาน</p>

          <p className="text-[16px] font-bold mt-6">งานเขียน (Writing)</p>
          <p className="font-bold">ผู้เขียนเนื้อเรื่อง (Story Writer)</p>
          <p>นางสาวฐิตารีย์ ล่ำสัน</p>
          <p>นางสาวปัณฑารีย์ แสงวิมาน</p>

          <p className="font-bold">ผู้เขียนบทสนทนา (Dialogue Writer)</p>
          <p>นางสาวฐิตารีย์ ล่ำสัน</p>
          <p>นางสาวปัณฑารีย์ แสงวิมาน</p>

          <p className="text-[16px] font-bold mt-6">ทดสอบคุณภาพ (QA Testing)</p>
          <p className="font-bold">ผู้ทดสอบ (Testers)</p>
          <p>นางสาวฐิตารีย์ ล่ำสัน</p>
          <p>นางสาววิลาสินี เขมวิวิธ</p>
          <p>นางสาวปัณฑารีย์ แสงวิมาน</p>
          <br />

          <p className="font-bold">ขอขอบคุณเป็นพิเศษ (Special Thanks)</p>
          <p>นางสาวธนัญญา ลิ้มจันทรา</p>
          <br />

          <p className="font-bold">
            เครื่องมือและเทคโนโลยี (Tools & Technology)
          </p>
          <p>เครื่องมือ (Tech Stack): Next.js, TypeScript, Tailwind CSS</p>
          <p>ซอฟต์แวร์ (Software): figma</p>
          <br />

          <p className="font-bold">ผู้จัดจำหน่าย (Publisher)</p>
          <p>Bug Busters Studio</p>
          <br />

          <p>© 2026 Bug Busters Studio</p>
          <p>สงวนลิขสิทธิ์ (All Rights Reserved)</p>
          <br />

          <p>ติดตามพวกเรา (Follow Us)</p>
          <p>Website: https://letter-from-where-kappa.vercel.app</p>
        </div>
      </div>
      <div
        className={`pointer-events-none absolute inset-0 bg-black transition-opacity duration-2000 ${
          fadeOut ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
