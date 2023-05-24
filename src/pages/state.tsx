import React, { useState } from "react";

function Ahmed() {
  return (
    <div className="flex gap-4 transition duration-[700000px] delay-1000 py-[30rem] px-[30rem]">
      <h1 className="h-32 w-32 bg-orange-700">Affan</h1>
      <h1 className="h-32 w-32 bg-orange-700">Affan</h1>
      <h1 className="h-32 w-32 bg-orange-700">Affan</h1>
      <h1 className="h-32 w-32 bg-orange-700">Affan</h1>
      <h1 className="h-32 w-32 bg-orange-700">Affan</h1>
    </div>
  );
}
function Raza() {
  return (
    <div className="flex gap-4 translate-x-4 transition duration-[700000px] delay-1000 py-[30rem] px-[30rem]">
      <h1 className="h-32 w-32 bg-blue-700">Khan</h1>
      <h1 className="h-32 w-32 bg-blue-700">Khan</h1>
      <h1 className="h-32 w-32 bg-blue-700">Khan</h1>
      <h1 className="h-32 w-32 bg-blue-700">Khan</h1>
      <h1 className="h-32 w-32 bg-blue-700">Khan</h1>
    </div>
  );
}

export default function App1() {
  let [count, setCount] = useState(0);
  return (
    <div>
      {count == 1 && <Ahmed />}
      {count == 2 && <Raza />}
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className="h-32 w-32 bg-blue-700"
      >
        first
      </button>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        className="h-32 w-32 bg-blue-700"
      >
        second
      </button>
    </div>
  );
}
