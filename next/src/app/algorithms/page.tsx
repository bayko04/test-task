"use client";

import Sidebar from "@/components/layouts/sidebar";
import React from "react";

const page = () => {
  return (
    <div className="mt-[50px]">
      <Sidebar />
      <div className="container">
        <button className="bg-[#CBD5E1] py-[10px] px-[25px]">
          Получить новую <br />
          конченую точку
        </button>
      </div>
    </div>
  );
};

export default page;
