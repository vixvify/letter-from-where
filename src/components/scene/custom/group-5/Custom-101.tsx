import { useFormStore } from "@/store/data";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";
import { useRef } from "react";
import html2canvas from "html2canvas";
import mapChoice from "@/core/constants/data-map";
import { dataService } from "@/infra/container";
import { parseSchema } from "@/lib/validation";
import { createDataSchema } from "@/core/domain/data.schema";
import { useEffect } from "react";
import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";

export default function Custom101({ scene, goTo }: SceneProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { data } = useFormStore();
  const name = data.name;
  const isHydrated = useFormStore.persist.hasHydrated();

  const handleShare = async () => {
    try {
      if (!ref.current) return;

      const canvas = await html2canvas(ref.current, {
        ignoreElements: (element) => {
          return element.classList?.contains("ignore-capture");
        },
        scale: 10,
        backgroundColor: "#ffffff",
        useCORS: true,
      });

      const blob = await new Promise<Blob>((resolve, reject) => {
        canvas.toBlob(
          (b) => {
            if (b) resolve(b);
            else reject("blob failed");
          },
          "image/jpeg",
          0.9,
        );
      });

      const file = new File([blob], "poster.jpg", {
        type: "image/jpeg",
      });

      if (navigator.canShare?.({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "https://letter-from-where-kappa.vercel.app",
        });
      } else {
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "poster.jpg";
        a.click();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDownload = async () => {
    try {
      if (!ref.current) return;

      const canvas = await html2canvas(ref.current, {
        ignoreElements: (element) => {
          return element.classList?.contains("ignore-capture");
        },
        scale: 10,
        backgroundColor: "#ffffff",
        useCORS: true,
      });

      const url = canvas.toDataURL("image/jpeg", 0.9);

      const a = document.createElement("a");
      a.href = url;
      a.download = "poster.jpg";
      a.click();
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveData = async () => {
    try {
      const validData = parseSchema(createDataSchema, data);

      const payload = {
        ...validData,
        scene_18: mapChoice("scene_18", validData.scene_18),
        scene_29: mapChoice("scene_29", validData.scene_29),
        scene_40: mapChoice("scene_40", validData.scene_40),
        scene_52: mapChoice("scene_52", validData.scene_52),
        scene_69: mapChoice("scene_69", validData.scene_69),
        scene_94: mapChoice("scene_94", validData.scene_94),
      };

      await dataService.createData(payload);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    if (!isHydrated) return;
    handleSaveData();
  }, [isHydrated]);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-center bg-no-repeat bg-cover"
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
        src="/bgpostcard.webp"
        className="absolute inset-0 object-cover w-full h-full"
        alt="poster"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-end px-6 pb-8 lg:pb-25">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-[13px] lg:text-[15px] text-center text-white whitespace-pre-line leading-10 text-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            จงโอบกอดโอกาสตรงหน้า <br /> เพราะมันคู่ควรกับ {name} ที่สุด
          </h1>
          <h1 className="text-[13px] lg:text-[15px] text-center text-white whitespace-pre-line leading-10 text-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            ขอบคุณที่เดินทางมาด้วยกันนะ
          </h1>
          <div className="flex justify-end w-full">
            <h1 className="text-[13px] lg:text-[15px] text-center text-white text-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              จาก..ที่ใดที่หนึ่ง
            </h1>
          </div>
          <div className="flex gap-4 mt-1 lg:mt-5 ignore-capture">
            <IconButton
              sx={{ color: "#fff" }}
              onClick={(e) => {
                e.stopPropagation();
                handleDownload();
              }}
            >
              <DownloadIcon />
            </IconButton>

            <IconButton
              sx={{ color: "#fff" }}
              onClick={(e) => {
                e.stopPropagation();
                handleShare();
              }}
            >
              <ShareIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}
