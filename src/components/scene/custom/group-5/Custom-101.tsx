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

export default function Custom101() {
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
    <div className="fixed inset-0 flex items-center justify-center" ref={ref}>
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-[15px] text-center text-black whitespace-pre-line leading-10 font-bold">
          จงโอบกอดโอกาสตรงหน้า <br /> เพราะมันคู่ควรกับ {name} ที่สุด
        </h1>
        <div
          className="relative"
          style={{
            transform: "rotate(3deg)",
            borderRadius: "12px",
            boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
          }}
        >
          <img
            src="/poster-1.png"
            width={230}
            height={250}
            alt="poster"
            className="rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-[15px] text-center text-black whitespace-pre-line leading-10 font-bold">
            ขอบคุณที่เดินทางมาด้วยกันนะ
          </h1>
          <div className="flex justify-end">
            <h1 className="text-[15px] text-center text-black font-bold">
              จาก..ที่ใดที่หนึ่ง
            </h1>
          </div>
        </div>
        <div className="flex gap-4 ignore-capture">
          <IconButton color="primary" onClick={handleDownload}>
            <DownloadIcon />
          </IconButton>
          <IconButton color="primary">
            <ShareIcon onClick={handleShare} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
