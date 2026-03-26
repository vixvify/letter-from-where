import { TransitionType } from "@/core/domain/scene";

export default function TransitionOverlay({
  type,
}: {
  type: TransitionType | null;
}) {
  if (!type) return null;

  const base =
    "absolute inset-0 z-50 pointer-events-none transition-opacity ease-in-out";

  if (type === "black-fade") {
    return <div className={`${base} bg-black animate-fade-in-out`} />;
  }

  if (type === "white-fade") {
    return <div className={`${base} bg-white animate-fade-in-out`} />;
  }

  if (type === "blink") {
    return (
      <div className="fixed inset-0 bg-black z-50 pointer-events-none animate-blink-twice" />
    );
  }
  if (type === "fade") {
    return <div className={`${base} bg-black/30 animate-fade-transparent`} />;
  }

  return null;
}
