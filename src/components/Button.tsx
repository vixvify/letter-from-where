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
        className={`mt-10 text-gray-900 underline transition cursor-pointer hover:text-black ${className}`}
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
      className={`px-8 py-2 mt-4 rounded-md transition
        ${
          isDisabled
            ? "bg-gray-300 text-gray-500 cursor-not-allowed"
            : "bg-gray-300 hover:bg-gray-400 text-black cursor-pointer"
        }
        ${className}`}
    >
      {children}
    </button>
  );
}
