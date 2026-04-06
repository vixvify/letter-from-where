"use client";

import { UseFormRegisterReturn } from "react-hook-form";

interface TextFieldProps {
  label?: string;
  type?: "text" | "number";
  placeholder?: string;
  register: UseFormRegisterReturn;
  className?: string;
}

export default function TextField({
  label,
  type = "text",
  placeholder,
  register,
  className = "",
}: TextFieldProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      {label && <label className="font-semibold text-black">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        {...register}
        className={`w-64 px-4 py-3 text-gray-600 placeholder-gray-500 bg-gray-300 rounded-md outline-none
          ${className}`}
      />
    </div>
  );
}
