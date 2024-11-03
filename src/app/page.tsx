"use client";
import { useRef, useState } from "react";
import NavBar from "./components/NavBar";
import ArrayDisplay from "./components/ArrayDisplay";

export default function Home() {
  const [size, setSize] = useState<number>(4);
  const [array, setArray] = useState<number[]>([]);
  const [smallestValue, setSmallestValue] = useState<number>(-1);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [comparisonIndex, setComparisonIndex] = useState<number>(-1);
  const sortRef = useRef<boolean>(true);


  function getRandomArray(length: number, min: number, max: number): number[] {
    const randomArray: number[] = [];
    for (let i = 0; i < length; i++) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      randomArray.push(randomNumber);
    }
    return randomArray;
  }

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const insertionSort = async (nums: number[]): Promise<void> => {
    const len = nums.length;
    for (let i = 0; i < len - 1; i++) {
      if (!sortRef.current) break;
      let smallestValue = i;
      setCurrentIndex(i);
      setSmallestValue(i);
      for (let j = i + 1; j < len; j++) {
        if (!sortRef.current) break;
        setComparisonIndex(j);
        await delay(200)
        if (nums[smallestValue] > nums[j]) {
          smallestValue = j;
          setSmallestValue(j);
          await delay(100)
        }
      }
      if (smallestValue !== i && sortRef.current == true) {
        const tmp = nums[smallestValue];
        nums[smallestValue] = nums[i];
        nums[i] = tmp;
        await delay(100);
        setArray([...nums]);
      }
    }
    setComparisonIndex(-1)
    setCurrentIndex(-1)
    setSmallestValue(-1)
  };

  const min = 4;
  const max = 30;
  const handleCreateRandomArray = () => {
    sortRef.current = false;
    const newArray = getRandomArray(size, min, max);
    setArray(newArray);
  };

  const handleSort = async () => {
    sortRef.current = true;
    await insertionSort([...array]);
  };

  return (
    <div>
      <NavBar
        size={size}
        setSize={setSize}
        handleCreate={handleCreateRandomArray}
        handleSort={handleSort}
        min={min}
        max={max}
      />

      <ArrayDisplay
        array={array}
        smallestValue={smallestValue}
        currentIndex={currentIndex}
        comparisonIndex={comparisonIndex}
      />
    </div>
  );
}
