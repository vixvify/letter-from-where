"use client";

type props = {
  active: boolean;
};

export default function Transition({ active }: props) {
  return (
    <div
      className={`
    fixed inset-0 bg-white/90 backdrop-blur-md
    transition-opacity duration-700
    ${active ? "opacity-100" : "opacity-0"}
  `}
    />
  );
}
