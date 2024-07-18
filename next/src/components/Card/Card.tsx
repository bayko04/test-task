import React from "react";
import bigImg from "@/images/jpg/big.jpg";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col items-center w-[224px] gap-[5px] cursor-pointer">
      {/* image */}
      <div className="">
        <Image src={bigImg} width={224} height={224} alt="" />
      </div>
      {/* content */}
      <h5 className="">Лампа</h5>
      <p className="">Ламповый завод</p>
      <div className="flex items-center justify-between w-[100%]">
        <p className="">12 шт</p>
        <p className="">12.57 р</p>
      </div>
    </div>
  );
};

export default Card;
