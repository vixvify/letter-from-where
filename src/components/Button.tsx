"use client";

import React from "react";

type ButtonVariant = "default" | "underline";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  isValid?: boolean;
  variant?: ButtonVariant;
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  disabled,
  isValid = true,
  variant = "default",
  className = "",
}: ButtonProps) {
  if (variant === "underline") {
    return (
      <button
        type={type}
        onClick={onClick}
        className={`text-gray-900 underline transition cursor-pointer hover:text-black ${className}`}
      >
        {children}
      </button>
    );
  }

  const isDisabled = disabled || !isValid;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      className={`
      px-5 py-2 mt-4 rounded-xl
      font-bold
      transition-all duration-200

      ${
        isDisabled
          ? "bg-white/20 text-white/40 cursor-not-allowed"
          : `
            bg-white/70 backdrop-blur-md
            border border-white/30
            text-gray-800

            shadow-[0_6px_20px_rgba(0,0,0,0.15)]

            hover:bg-white/80
            active:scale-95
            active:shadow-[0_3px_10px_rgba(0,0,0,0.2)]

            cursor-pointer
          `
      }

      ${className}
    `}
    >
      {children}
    </button>
  );
}
