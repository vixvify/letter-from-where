type Props = {
  text: string;
  onSelect?: (choice: string) => void;
};

export default function ChoicesOverlay({ text, onSelect }: Props) {
  return (
    <div className="fixed inset-0 flex justify-center items-start pt-16">
      <div className="text-center space-y-4">
        <h2 className="text-2xl text-white">{text}</h2>

        {["A", "B", "C"].map((choice) => (
          <button
            key={choice}
            onClick={() => onSelect?.(choice)}
            className="block w-40 mx-auto py-2 text-lg bg-white/10 hover:bg-white/20 text-white rounded-xl backdrop-blur"
          >
            {choice}
          </button>
        ))}
      </div>
    </div>
  );
}
