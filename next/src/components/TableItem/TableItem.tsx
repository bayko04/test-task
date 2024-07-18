import Image from "next/image";
import React from "react";
import lampImg from "@/images/jpg/Rectangle 7.png";
import changeImg from "@/images/svg/change.svg";
import binImg from "@/images/svg/bin.svg";

const TableItem = ({}) => {
  return (
    <div className="w-[100%]">
      <ul className="flex justify-between items-center">
        <li>
          <Image src={lampImg} width={56} height={56} alt="" />
        </li>
        <li>Лампа</li>
        <li>12</li>
        <li>Ламповый завод</li>
        <li>12.57 р</li>
        <li className="flex gap-[10px]">
          <Image src={changeImg} width={20} height={20} alt="" />
          <Image src={binImg} width={18} height={21} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default TableItem;
