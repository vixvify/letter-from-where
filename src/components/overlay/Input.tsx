import { handleNext } from "@/utils/scene";
import { SceneProps } from "@/core/domain/scene";
import TextField from "../TextField";
import { useFormStore } from "@/store/data";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { ICreateData } from "@/core/domain/data";
import { usePathname } from "next/navigation";
import { bgColorMap } from "@/core/constants/color-map";

export default function InputOverlay({ scene, goTo }: SceneProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<{ value: string }>({
    mode: "onChange",
  });

  const pathname = usePathname();
  const key = pathname.replace("/scenes/", "");

  const { setField } = useFormStore();
  const onSubmit = (data: { value: string }) => {
    if (scene.inputField) {
      setField(scene.inputField as keyof ICreateData, data.value);
    }
    handleNext({
      next: scene.next,
      transition: scene.transition,
      goTo,
    });
  };
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center ${bgColorMap[key]}`}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
          {scene.text}
        </h1>
        <TextField
          label=""
          placeholder="text..."
          register={register("value", { required: "กรุณากรอกข้อมูล" })}
          className="mt-3"
        />
        <div className="flex items-center justify-end">
          <Button type="submit" isValid={isValid}>
            ต่อไป
          </Button>
        </div>
      </form>
    </div>
  );
}
