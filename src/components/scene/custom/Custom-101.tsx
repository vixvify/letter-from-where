import { useFormStore } from "@/store/data";
import Image from "next/image";
import IconButton from "@mui/material/IconButton";
import DownloadIcon from "@mui/icons-material/Download";
import ShareIcon from "@mui/icons-material/Share";

export default function Custom101() {
  const handleShare = async () => {
    try {
      const res = await fetch("/poster-1.png");
      const blob = await res.blob();

      const file = new File([blob], "poster.png", {
        type: blob.type,
      });

      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: "My Poster",
        });
      } else {
        alert("เครื่องนี้ไม่รองรับการแชร์รูป");
      }
    } catch (err) {
      console.log("error:", err);
    }
  };
  const { data } = useFormStore();
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-10">
        <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
          จงโอบกอดโอกาสตรงหน้า <br /> เพราะมันคู่ควรกับ {data.name} ที่สุด
        </h1>
        <div className="relative transition duration-500 transform -rotate-6 hover:rotate-0">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-lg bg-black/20 blur-xl"></div>
          <Image
            src="/poster-1.png"
            width={200}
            height={300}
            alt="poster"
            className="relative rounded-lg shadow-2xl"
          />
        </div>
        <div>
          <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
            ขอบคุณที่เดินทางมาด้วยกันนะ
          </h1>
          <div className="flex justify-end">
            <h1 className="text-[17px] text-center text-black font-bold">
              จาก..ที่ใดที่หนึ่ง
            </h1>
          </div>
        </div>
        <div className="flex gap-4">
          <a href="/poster-1.png" download>
            <IconButton color="primary">
              <DownloadIcon />
            </IconButton>
          </a>
          <IconButton color="primary">
            <ShareIcon onClick={handleShare} />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
