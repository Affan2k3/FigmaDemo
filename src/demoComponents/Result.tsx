import React from "react";
// import Cards from "./Cards";

export default function Result({ heading }: { heading: string }) {
  return (
    <div>
      <h1 className="font-normal text-[24px] tracking-[-0.02rem] leading-7 px-[80px] mt-[40px]">
        {heading}
      </h1>
      {/* <Cards /> */}
    </div>
  );
}
