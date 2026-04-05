import { SceneProps } from "@/core/domain/scene";
import { useForm } from "react-hook-form";
import { IScene3 } from "@/core/domain/data";
import { useFormStore } from "@/store/data";

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
    if (scene.next) {
      goTo(scene.next, scene.transition ?? "cut");
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-200">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-2">
          <label className="font-semibold text-black">ชื่อ</label>
          <input
            type="text"
            placeholder="name ..."
            className="w-64 px-4 py-3 text-gray-600 placeholder-gray-500 bg-gray-300 rounded-md outline-none"
            {...register("name", { required: true })}
          />
        </div>

        <div className="flex flex-col items-center gap-2">
          <label className="font-semibold text-black">อายุ</label>
          <input
            type="number"
            placeholder="age ..."
            className="w-64 px-4 py-3 text-gray-600 placeholder-gray-500 bg-gray-300 rounded-md outline-none"
            {...register("age", {
              required: true,
              min: 1,
            })}
          />
        </div>

        <button
          type="submit"
          disabled={!isValid}
          className={`px-8 py-2 mt-4 font-medium rounded-md transition
            ${
              isValid
                ? "bg-gray-300 hover:bg-gray-400 text-black cursor-pointer"
                : "bg-gray-300 hover:bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
        >
          ยืนยัน
        </button>
      </form>
    </div>
  );
}
