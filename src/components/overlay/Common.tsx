export default function CommonOverlay({ text }: { text: string }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <h1 className="text-[13px] text-center text-black whitespace-pre-line">
        {text}
      </h1>
    </div>
  );
}
