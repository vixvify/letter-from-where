import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import { useFormStore } from "@/store/data";
import Image from "next/image";

export default function Custom112({ scene, goTo }: SceneProps) {
  const { data } = useFormStore();
  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="">
        <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
          จงโอบกอดโอกาสตรงหน้า <br /> เพราะมันคู่ควรกับ {data.name} ที่สุด
        </h1>
        <Image src={"/scene-112.png"} width={400} height={500} alt="poster" />
      </div>
    </div>
  );
}
