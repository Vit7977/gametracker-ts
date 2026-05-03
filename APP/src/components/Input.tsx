import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface InputProps {
  label: string;
  type?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  label,
  type = "text",
  required = false,
  onChange,
}: InputProps) {
  const [active, setActive] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const isPassword = type === "password";
  const resolvedType = isPassword && showPass ? "text" : type;

  return (
    <div className="flex flex-col p-1">
      <label
        className={`ml-1 font-medium text-left ${active ? "text-sky-800" : "text-gray-400"} transition-all duration-300`}
      >
        {label}
      </label>
      <div className="relative">
        <input
          className={`w-full outline-none border pl-2 p-1 shadow-xs shadow-black/50 rounded-lg transition-all duration-300 ${
            active
              ? "border-sky-800 text-black bg-white"
              : "border-gray-400 text-gray-400 bg-gray-300"
          }`}
          type={resolvedType}
          required={required}
          onFocus={() => setActive(true)}
          onBlur={() => setActive(false)}
          onChange={onChange}
        />
        {isPassword && (
          <button
            type="button"
            className={`cursor-pointer absolute right-2 top-1/2 -translate-y-1/2 outline-none transition-all duration-300 ${active ? "hover:text-gray-400 text-black" : "hover:text-black text-gray-400"}`}
            onClick={() => setShowPass((prev) => !prev)}
          >
            {showPass ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
}

export default Input;
