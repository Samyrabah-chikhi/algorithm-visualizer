import React, { InputHTMLAttributes, SetStateAction } from "react";

interface InputProps {
  size: number;
  setSize: React.Dispatch<SetStateAction<number>>;
  min: number;
  max: number;
}

const Input = ({ size, setSize, min, max }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(e.target.value));
  };
  return (
    <input
      className="rounded-lg accent-orange-500"
      onChange={handleChange}
      min={min}
      max={max}
      value={size}
      type="range"
    />
  );
};

export default Input;
