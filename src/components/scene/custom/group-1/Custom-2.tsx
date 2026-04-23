import { SceneProps } from "@/core/domain/scene";
import { useForm } from "react-hook-form";
import { IScene3 } from "@/core/domain/data";
import { useFormStore } from "@/store/data";
import Button from "@/components/Button";
import TextField from "@/components/TextField";
import { handleNext } from "@/utils/scene";

export default function Custom2({ scene, goTo }: SceneProps) {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm<IScene3>({
    mode: "onChange",
  });

  const onSubmit = (data: IScene3) => {
    const { setFields } = useFormStore.getState();
    setFields(data);
    handleNext({
      next: scene.next,
      transition: scene.transition,
      goTo,
    });
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-2">
          <TextField
            label="ชื่อ"
            placeholder="name ..."
            register={register("name", { required: "กรุณากรอกชื่อ" })}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <TextField
            label="อายุ"
            type="number"
            placeholder="age ..."
            register={register("age", {
              required: "กรุณากรอกอายุ",
              min: {
                value: 1,
                message: "อายุต้องมากกว่า 0",
              },
            })}
          />
        </div>

        <Button type="submit" isValid={isValid}>
          ยืนยัน
        </Button>
      </form>
    </div>
  );
}
