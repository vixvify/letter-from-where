export default function CommonOverlay({ text }: { text: string }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
      <h1 className="text-5xl text-white text-center">{text}</h1>
    </div>
  );
}
