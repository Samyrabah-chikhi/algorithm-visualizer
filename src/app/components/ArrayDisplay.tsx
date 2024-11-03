import React from "react";

interface ArrayDisplayProps {
  array: number[];
  smallestValue: number;
  currentIndex: number;
  comparisonIndex: number;
}

const ArrayDisplay = ({ array , smallestValue , currentIndex , comparisonIndex }: ArrayDisplayProps) => {
  return (
    <ul className="flex flex-row mt-[10%]">
      {array.map((value: number, index: number) => {
        // if its the current index we make it green, comparisonIndex is always red
        // if we find something smaller it becomes idk
        let color = currentIndex==index ? "bg-red-500" : "bg-fuchsia-800"
        color = comparisonIndex==index ? "bg-green-500" : color 
        color = smallestValue==index ? "bg-orange-500" : color
        return (
          <li
            className={` ${color} shadow-md m-1 h-8 flex-grow text-center` }
            key={index}
          >
            {value}
          </li>
        );
      })}
    </ul>
  );
};

export default ArrayDisplay;
