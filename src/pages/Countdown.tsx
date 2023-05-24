import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function Countdown() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={openModal}
      >
        Open Modal
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-10 ">
          <div
            className="bg-gray-900 bg-opacity-50 absolute inset-0  "
            onClick={closeModal}
          ></div>
          <div className="bg-white rounded p-8 w-64">
            <Image
              src="/hello.jpg"
              width={500}
              height={500}
              alt="Picture of the author"
            />
            <button
              className="mt-4 bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
