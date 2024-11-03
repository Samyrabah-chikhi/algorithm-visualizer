import React, { SetStateAction } from "react";
import Input from "./Input";

interface NavBarProps {
  size: number;
  setSize: React.Dispatch<SetStateAction<number>>;
  handleCreate: () => void;
  handleSort: () => void;
  min: number;
  max: number;
}

const NavBar = ({
  size,
  setSize,
  handleCreate,
  handleSort,
  min,
  max,
}: NavBarProps) => {
  return (
    <nav className="bg-gray-800 pb-2">
      <ul className="flex items-center justify-center">
        <li className="text-4xl font-bold ml-16">
          <h1>Algorithm visualizer for insertion Sort</h1>
        </li>
        <li className="text-2xl font-bold ml-auto flex flex-col">
          <button className="text-fuchsia-800" onClick={handleCreate}>
            Generate array
          </button>
          <button className="text-fuchsia-800" onClick={handleSort}>
            Sort array
          </button>
        </li>
        <li className="ml-8 mr-16 mt-8">
          <h2 className="ml-1 mb-2 text-lg font-bold text-fuchsia-800">Array size: {size}</h2>
          <Input size={size} setSize={setSize} min={min} max={max} />
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
