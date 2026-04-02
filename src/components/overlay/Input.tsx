import { useState } from "react";

type Props = {
  text: string;
  onSubmit?: (value: string) => void;
};

export default function InputOverlay({ text, onSubmit }: Props) {
  const [value, setValue] = useState("");

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-start pt-16">
      <div className="text-center space-y-4">
        <h2 className="text-2xl text-white">{text}</h2>

        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type here..."
          className="px-4 py-2 text-lg rounded-xl bg-white/10 text-white outline-none backdrop-blur"
        />

        <button
          onClick={() => onSubmit?.(value)}
          className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-white"
        >
          Submit
        </button>
      </div>
    </div>
  );
}
