"use client";

import { useFormStore } from "@/store/data";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import { useRef, useEffect } from "react";
import html2canvas from "html2canvas";
import mapChoice from "@/core/constants/data-map";
import { dataService } from "@/infra/container";
import { parseSchema } from "@/lib/validation";
import { createDataSchema } from "@/core/domain/data.schema";
import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";

export default function Custom112({ scene, goTo }: SceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { data } = useFormStore();
  const name = data.name;
  const isHydrated = useFormStore.persist.hasHydrated();

  const handleDownload = async () => {
    if (!ref.current) return;

    const canvas = await html2canvas(ref.current, {
      ignoreElements: (el) => el.classList?.contains("ignore-capture"),
      scale: window.devicePixelRatio || 2,
      useCORS: true,
    });

    const url = canvas.toDataURL("image/jpeg", 0.9);
    const a = document.createElement("a");
    a.href = url;
    a.download = "poster.jpg";
    a.click();
  };

  const handleShare = async () => {
    if (!ref.current) return;

    const canvas = await html2canvas(ref.current, {
      ignoreElements: (el) => el.classList?.contains("ignore-capture"),
      scale: window.devicePixelRatio || 2,
      useCORS: true,
    });

    const blob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((b) => resolve(b!), "image/jpeg", 0.9),
    );

    const file = new File([blob], "poster.jpg", {
      type: "image/jpeg",
    });

    if (navigator.canShare?.({ files: [file] })) {
      await navigator.share({ files: [file] });
    }
  };

  useEffect(() => {
    if (!isHydrated) return;

    const validData = parseSchema(createDataSchema, data);

    dataService.createData({
      ...validData,
      scene_18: mapChoice("scene_18", validData.scene_18),
      scene_29: mapChoice("scene_29", validData.scene_29),
      scene_40: mapChoice("scene_40", validData.scene_40),
      scene_52: mapChoice("scene_52", validData.scene_52),
      scene_69: mapChoice("scene_69", validData.scene_69),
      scene_94: mapChoice("scene_94", validData.scene_94),
    });
  }, [isHydrated]);

  return (
    <div
      className="absolute inset-0"
      ref={ref}
      onClick={() =>
        handleNext({
          next: scene.next,
          transition: scene.transition,
          goTo,
        })
      }
    >
      <img
        src="/bgpostcard2.webp"
        className="absolute inset-0 object-cover w-full h-full"
        alt="bg"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-8 lg:pb-24">
        <div className="flex flex-col items-center">
          <h1 className="text-[13px] lg:text-[15px] text-center text-white leading-8">
            ฟ้าหลังฝนจะมาตอนที่ <br />
            เธอโอบกอดตัวเอง <br />
            เพราะ {name} มีคนเดียวในโลกนะ
          </h1>

          <h1 className="text-[13px] lg:text-[15px] text-center text-white mt-3">
            ขอบคุณที่เดินทางมาด้วยกันนะ
          </h1>

          <div className="flex justify-end w-full mt-1">
            <p className="text-[13px] lg:text-[15px] text-white">
              จาก..ที่ใดที่หนึ่ง
            </p>
          </div>

          <div
            className="flex gap-4 mt-4 ignore-capture"
            onClick={(e) => e.stopPropagation()}
          >
            <IconButton sx={{ color: "#fff" }} onClick={handleDownload}>
              <DownloadIcon />
            </IconButton>

            <IconButton sx={{ color: "#fff" }} onClick={handleShare}>
              <ShareIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
