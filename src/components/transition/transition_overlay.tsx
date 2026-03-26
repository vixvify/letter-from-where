import { TransitionType } from "@/core/domain/scene";

export default function TransitionOverlay({
  type,
}: {
  type: TransitionType | null;
}) {
  if (!type) return null;

  const base =
    "fixed inset-0 z-50 pointer-events-none transition-opacity duration-300 ease-in-out";

  if (type === "black-fade") {
    return <div className={`${base} bg-black opacity-100`} />;
  }

  if (type === "white-fade") {
    return <div className={`${base} bg-white opacity-100`} />;
  }

  if (type === "blink") {
    return (
      <div className="fixed inset-0 bg-black z-50 pointer-events-none animate-blink-twice" />
    );
  }

  return null;
}
