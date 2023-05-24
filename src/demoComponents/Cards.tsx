import React from "react";
import Image from "next/image";
import Link from "next/link";
import { card } from "./Data";

type Card = {
  imageURL: string;
  location: string;
  name: string;
  details: string;
  room: Room;
};

type Room = { img: string; quantity: number };
export default function Cards() {
  return (
    <div className="min-[1000px]:pl-[80px] mm:pl-[50px] pl-[35px]">
      <h1 className="font-normal text-[24px] tracking-[-0.02rem] leading-7 mt-[40px]">
        Members looking to travel to your location - &nbsp;{" "}
        <span className="text-[#004446]">hiHellooo</span>
      </h1>

      <div className="hideScroll grid grid-flow-col overflow-hidden overflow-x-scroll py-[24px]  pr-[80px] gap-6">
        {card.map((item: any, index: number) => {
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
