export default function CommonOverlay({ text }: { text: string }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <h1 className="text-[17px] text-center text-black whitespace-pre-line leading-10 font-bold">
        {text}
      </h1>
    </div>
  );
}
