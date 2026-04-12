import { useState } from "react";
import { SceneProps } from "@/core/domain/scene";

export default function InputOverlay({ scene, goTo }: SceneProps) {
  const [value, setValue] = useState("");

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-start pt-16">
      <div className="space-y-4 text-center">
        <h2 className="text-2xl text-white">{scene.text}</h2>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type here..."
          className="px-4 py-2 text-lg text-white outline-none rounded-xl bg-white/10 backdrop-blur"
        />
      </div>
    </div>
  );
}
