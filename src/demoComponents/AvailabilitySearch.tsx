import React from "react";

export default function AvailabilitySearch() {
  return (
    <div className="min-[1000px]:px-[80px] mm:px-[50px] px-[35px] w-fit mt-6">
      <div className="font-normal text-[24px] leading-7 tracking-[-0.02rem] text-black">
        Explore options
      </div>
      <div className="bg-[#E6F3F3] rounded-[20px] w-full ml:w-fit h-fit mt-[18px] px-[24px] py-[24px] block min-[1200px]:flex gap-4 items-end">
        <div>
          <h1 className="text-[#004446] font-medium text-[14px] leading-4 tracking-[-0.02rem] ">
            Where do you want to go
          </h1>
          <input
            placeholder="Search destinations"
            className="border p-[12px] border-[#00878A] rounded-xl bg-transparent min-[1200px]:w-[416px] w-full h-[46px] outline-none placeholder:font-normal text-[16px] tracking-[-0.02em] leading-[140%] mt-[10px]"
          />
        </div>
        <div>
          <h1 className="text-[#004446] font-medium text-[14px] leading-4 tracking-[-0.02rem] mt-4 ">
            Select dates
          </h1>
          <input
            placeholder="
            17 May 2023
            23 May 2023"
            className="border p-[12px] min-[1200px]:w-fit w-full outline-none border-[#00878A] rounded-xl bg-transparent h-[46px] placeholder:font-normal text-[16px] tracking-[-0.02em] leading-[140%] mt-[10px]"
          />
        </div>
        <button className="bg-[#00888B] rounded-[12px] h-[46px] w-full min-[1200px]:w-[220px] text-white mt-6 ">
          Search
        </button>
      </div>
    </div>
  );
}
