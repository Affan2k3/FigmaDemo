import React from "react";
import { TfiSearch } from "react-icons/tfi";
import Image from "next/image";
import Link from "next/link";
import { card, search } from "./Data";
import { useState } from "react";
type Search = {
  header: string;
  placeholder: string;
  button: string;
};

export default function Search() {
  const [selectedBedrooms, setSelectedBedrooms] = useState("");

  const [toggle, setToggle] = useState(false);
  const [seaarch, setSeaarch] = useState("");
  const [selectedBathrooms, setSelectedBathrooms] = useState("");
  const [filteredHotels, setFilteredHotels] = useState<any[]>([]);
  const { header, button, placeholder }: Search = search;

  const [seearch, setSeearch] = useState("");
  console.log(card[0].rooms[0].quantity);

  const applyFilters = () => {
    const filtered: any = card.filter((hotel) => {
      if (
        selectedBedrooms &&
        hotel.rooms[0].quantity !== parseInt(selectedBedrooms)
      ) {
        return false;
      }
      if (
        selectedBathrooms &&
        hotel.rooms[1].quantity !== parseInt(selectedBathrooms)
      ) {
        return false;
      }
      return true;
    });
    setFilteredHotels(filtered);
  };

  return (
    <div className="min-[1000px]:pl-[80px] mm:pl-[50px] pl-[35px]">
      <div className="text-[26px] md:text-[30px] font-semibold text-[#00878A] tracking-[-0.02rem] mt-[50px] mb-[18px] md:mb-[25px]">
        {header}
      </div>
      <div className="md:flex block  justify-between items-center min-[1000px]:pr-[80px] mm:pr-[50px] pr-[35px]">
        <div className="flex items-center">
          <button className="absolute">
            <TfiSearch
              className="ml-[9px] w-6 text-[#00878A] h-[16px] "
              fill="#00878A"
            />
          </button>
          <input
            className="border w-screen md:w-[416px] h-[46px] flex border-[#00878A] rounded-xl  placeholder:font-light placeholder:text-[#919191] pl-[37px] outline-none"
            placeholder={placeholder}
            onChange={(e) => setSeaarch(e.target.value)}
          />
        </div>

        <div className={`${toggle ? "block" : "hidden"}`}>
          <input
            type="number"
            className="border"
            value={selectedBedrooms}
            onChange={(e) => setSelectedBedrooms(e.target.value)}
          />
          <input
            type="number"
            className="border"
            value={selectedBathrooms}
            onChange={(e) => setSelectedBathrooms(e.target.value)}
          />
          <button onClick={applyFilters}>Apply Filters</button>
        </div>
        <button
          onClick={() => setToggle(!toggle)}
          className="bg-[#E6F3F3] h-[46px] w-[121px] md:mt-0 mt-4 rounded-xl flex items-center justify-center gap-2"
        >
          <Image
            src="/filter.png"
            width={21.5}
            height={17}
            alt="filter"
            className="h-[18px] w-6 text-[#004446]"
          />
          <h1 className="font-normal text-[#004446] text-[16px] leading-[-2%]">
            {button}
          </h1>
        </button>
      </div>
      <div className="flex items-center mt-[40px] gap-2">
        <h1 className="font-normal text-[24px] tracking-[-0.02rem] leading-7  ">
          Top Picks For You
        </h1>
        {seearch !== "" && (
          <div>
            <h2 className="font-normal text-[24px] tracking-[-0.02rem] leading-7 ">
              - &nbsp; <span className="text-[#004446]">{seearch}</span>
            </h2>
          </div>
        )}
      </div>
      <div className="hideScroll grid grid-flow-col cursor-grabbing overflow-hidden  overflow-x-scroll py-[24px]  pr-[80px] gap-4">
        {filteredHotels.length > 0
          ? filteredHotels
              .filter((card) =>
                card.name
                  .toLowerCase()
                  .replace(/\s{2,}/g, " ")
                  .trim()
                  .includes(seaarch)
              )
              .map((item: any, index: number) => {
                return (
                  <div className=" w-[382px]  rounded-3xl" key={index}>
                    <Link href={"/"}>
                      <Image
                        src={item.imageURL}
                        width={382}
                        height={215}
                        alt="Picture"
                        className="rounded-t-lg"
                      />
                    </Link>

                    <div className="py-[12px] px-[16px] bg-[#E6F3F3] h-[148px] flex flex-col gap-2 rounded-b-lg">
                      <Link href={"/"}>
                        <h1 className="text-[#00878A] font-medium text-[12px] leading-5">
                          {item.location}
                        </h1>
                      </Link>
                      <Link href={"/"}>
                        <h1 className="text-[#004446] text-[18px] font-semibold leading-5 hover:underline">
                          {item.name}
                        </h1>
                      </Link>
                      <Link href={"/"}>
                        <h2 className="font-normal text-base leading-5 text-[#00878A] hover:underline">
                          {item.details}
                        </h2>
                      </Link>
                      <div className="flex gap-4">
                        {item.rooms.map((item: any, index: number) => {
                          return (
                            <div
                              className="font-medium text-[14px] tracking-[-0.02rem] text-[#004446] flex items-center gap-1"
                              key={index}
                            >
                              <Image
                                src={item.img}
                                width={20}
                                height={20}
                                alt="Picture"
                                className="rounded-t-lg"
                              />
                              {item.quantity}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })
          : card
              .filter((card) =>
                card.name
                  .toLowerCase()
                  .replace(/\s{2,}/g, " ")
                  .trim()
                  .includes(seaarch)
              )
              .map((item: any, index: number) => {
                return (
                  <div className=" w-[382px]  rounded-3xl" key={index}>
                    <Link href={"/"}>
                      <Image
                        src={item.imageURL}
                        width={382}
                        height={215}
                        alt="Picture"
                        className="rounded-t-lg"
                      />
                    </Link>

                    <div className="py-[12px] px-[16px] bg-[#E6F3F3] h-[148px] flex flex-col gap-2 rounded-b-lg">
                      <Link href={"/"}>
                        <h1 className="text-[#00878A] font-medium text-[12px] leading-5">
                          {item.location}
                        </h1>
                      </Link>
                      <Link href={"/"}>
                        <h1 className="text-[#004446] text-[18px] font-semibold leading-5 hover:underline">
                          {item.name}
                        </h1>
                      </Link>
                      <Link href={"/"}>
                        <h2 className="font-normal text-base leading-5 text-[#00878A] hover:underline">
                          {item.details}
                        </h2>
                      </Link>
                      <div className="flex gap-4">
                        {item.rooms.map((item: any, index: number) => {
                          return (
                            <div
                              className="font-medium text-[14px] tracking-[-0.02rem] text-[#004446] flex items-center gap-1"
                              key={index}
                            >
                              <Image
                                src={item.img}
                                width={20}
                                height={20}
                                alt="Picture"
                                className="rounded-t-lg"
                              />
                              {item.quantity}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
      </div>
    </div>
  );
}
