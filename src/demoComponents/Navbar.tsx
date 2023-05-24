import React from "react";
import Image from "next/image";
import { navItems } from "./Data";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="h-[61px] bg-[#00878A] text-white flex justify-between items-center px-[80px] py-[18px] leading-[19px] tracking-[-0.02rem] ">
      <div className="flex gap-[48px] font-normal items-center">
        <Image
          src="/Logo.png"
          width={54}
          height={31}
          alt="Picture of the author"
        />
        {navItems[0].map((items: string, index: number) => {
          return (
            <Link className="md:inline hidden" href={`/${items}`} key={index}>
              {items}
            </Link>
          );
        })}
      </div>
      <div className="flex gap-[48px] font-normal">
        {navItems[1].map((items: string, index: number) => {
          return (
            <Link className="md:inline hidden" href={`/${items}`} key={index}>
              {items}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

// import React from "react";
// import { TfiSearch } from "react-icons/tfi";
// import { IoFilterOutline } from "react-icons/io5";
// import { card, search } from "./Data";
// import Link from "next/link";
// import { useState } from "react";
// import Image from "next/image";
// type Search = {
//   header: string;
//   placeholder: string;
//   button: string;
// };
// export default function Search() {
//   const { header, button, placeholder }: Search = search;

//   const [seearch, setSeearch] = useState("");
//   return (
//     <div className="pl-[80px]">
//       <div className="text-[30px] font-semibold text-[#00878A] tracking-[-0.02rem] mt-[50px] mb-[25px] pr-[80px]">
//         {header}
//       </div>
//       <div className="flex justify-between items-center pr-[80px]">
//         <div className="flex items-center">
//           <button className="absolute outline-none">
//             <TfiSearch
//               className=" ml-[9px] w-6 text-[#00878A] h-[16px] outline-none "
//               fill="#00878A"
//             />
//           </button>
//           <input
//             className="border md:w-[416px] w-[100%] h-[46px] flex border-[#00878A] rounded-xl  placeholder:font-light placeholder:text-[#919191] pl-[37px] outline-none flex-grow"
//             placeholder={placeholder}
//             onChange={(e) => setSeearch(e.target.value)}
//           />
//         </div>
//         <button className="bg-[#E6F3F3] h-[46px] w-[121px] rounded-xl flex items-center justify-center gap-2">
//           <Image
//             src="/filter.png"
//             width={21.5}
//             height={17}
//             alt="filter"
//             className="h-[18px] w-6 text-[#004446]"
//           />

//           <h1 className="font-normal text-[#004446] text-[16px] leading-[-2%]">
//             {button}
//           </h1>
//         </button>
//       </div>
//       <div className="flex items-center mt-[40px] gap-2">
//         <h1 className="font-normal text-[24px] tracking-[-0.02rem] leading-7  ">
//           Top Picks For You
//         </h1>
//         {seearch !== "" && (
//           <div>
//             <h2>
//               - &nbsp; <span className="text-[#004446]">{seearch}</span>
//             </h2>
//           </div>
//         )}
//       </div>
//       <div className="hideScroll grid grid-flow-col overflow-hidden overflow-x-scroll py-[24px]  pr-[80px] gap-6">
//         {card
//           .filter((card) =>
//             card.name
//               .toLowerCase()
//               .replace(/\s{2,}/g, " ")
//               .trim()
//               .includes(seearch)
//           )
//           .map((item: any, index: number) => {
//             return (
//               <div className=" w-[382px]  rounded-3xl" key={index}>
//                 <Link href={"/"}>
//                   <Image
//                     src={item.imageURL}
//                     width={382}
//                     height={215}
//                     alt="Picture"
//                     className="rounded-t-lg"
//                   />
//                 </Link>

//                 <div className="py-[12px] px-[16px] bg-[#E6F3F3] h-[148px] flex flex-col gap-2 rounded-b-lg">
//                   <Link href={"/"}>
//                     <h1 className="text-[#00878A] font-medium text-[12px] leading-5">
//                       {item.location}
//                     </h1>
//                   </Link>
//                   <Link href={"/"}>
//                     <h1 className="text-[#004446] text-[18px] font-semibold leading-5 hover:underline">
//                       {item.name}
//                     </h1>
//                   </Link>
//                   <Link href={"/"}>
//                     <h2 className="font-normal text-base leading-5 text-[#00878A] hover:underline">
//                       {item.details}
//                     </h2>
//                   </Link>
//                   <div className="flex gap-4">
//                     {item.rooms.map((item: any, index: number) => {
//                       return (
//                         <div
//                           className="font-medium text-[14px] tracking-[-0.02rem] text-[#004446] flex items-center gap-1"
//                           key={index}
//                         >
//                           <Image
//                             src={item.img}
//                             width={20}
//                             height={20}
//                             alt="Picture"
//                             className="rounded-t-lg"
//                           />
//                           {item.quantity}
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";
// import Link from "next/link";
// import React, { useState } from "react";

// // import logo image
// import Logo from "/public/images/logo.png";

// // import navbar data type
// import { NavbarDataItem } from "@/data/data";

// interface NavbarItemsProps {
//   navData: NavbarDataItem;
// }

// const NavbarItems = ({ navData }: NavbarItemsProps) => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const toggleNav = () => {
//     setIsNavOpen(!isNavOpen);
//   };

//   const navItems = Object.entries(navData);

//   return (
//     <nav className="bg-[#00878A]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <Link href="#">
//                 <Image src={Logo} alt="logo" />
//               </Link>
//             </div>
//             <div className="hidden md:flex md:ml-10">
//               {navItems.slice(0, 3).map(([key, value], index) => (
//                 <Link
//                   href={value.href}
//                   key={index}
//                   className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-[16px] font-medium"
//                 >
//                   {value.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="hidden xl:flex lg:flex md:flex xl:ml-4">
//             <div className="flex items-center">
//               {navItems.slice(3).map(([key, value], index) => (
//                 <Link
//                   href={value.href}
//                   key={index}
//                   className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-[16px] font-medium"
//                 >
//                   {value.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
//               onClick={toggleNav}
//               aria-label="Toggle navigation"
//             >
//               <svg
//                 className="h-6 w-6"
//                 stroke="currentColor"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 {isNavOpen ? (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M6 18L18 6M6 6l12 12"
//                   />
//                 ) : (
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div
//         className={`${isNavOpen ? "block" : "hidden"} md:hidden bg-[#00878A]`}
//       >
//         <div className="px-2 pt-2 pb-3 sm:px-3">
//           {navItems.map(([key, value], index) => (
//             <Link
//               href={value.href}
//               key={index}
//               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:text-gray-300 hover:bg-gray-700 transition duration-150 ease-in-out"
//             >
//               {value.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default NavbarItems;
