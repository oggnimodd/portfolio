import type { FC } from "react";
import React, { useState } from "react";

const Counter: FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-center justify-center gap-x-12">
      <button
        onClick={() => {
          console.log("Hello world");
          setCount((count) => count + 1);
        }}
        className="px-4 py-2 text-white bg-indigo-600 rounded-md"
      >
        Increment
      </button>
      <p>{count}</p>
      <button
        onClick={() => setCount((count) => count - 1)}
        className="px-4 py-2 text-white bg-red-600 rounded-md"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
