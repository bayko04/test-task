import React, { FC } from "react";
import Image from "next/image";
import cardImg from "@/images/svg/card.svg";
import tableImg from "@/images/svg/table.svg";
import { useDispatch, useSelector } from "react-redux";
import { setTablet } from "@/store/reducers/ProductsSlice";

const Outputs: FC = () => {
  const { tablet } = useSelector((state: any) => state.products);
  const dispatch = useDispatch<any>();

  const handleOutput = (type: boolean) => {
    dispatch(setTablet(type));
  };

  return (
    <div className="">
      <div className="flex items-center h-[40px]">
        <div
          onClick={() => handleOutput(true)}
          className={`table relative cursor-pointer px-[10px] w-[50px] h-[100%] rounded-l-lg ${
            tablet ? "bg-[#94A3B8]" : "bg-[#CBD5E1]"
          }`}
        >
          <Image
            className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
            src={tableImg}
            width={18}
            height={12}
            alt=""
          />
        </div>
        <div
          onClick={() => handleOutput(false)}
          className={`card relative cursor-pointer px-[10px] h-[100%] w-[50px] rounded-r-lg rounded-r-lg ${
            !tablet ? "bg-[#94A3B8]" : "bg-[#CBD5E1]"
          }`}
        >
          <Image
            className="absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]"
            src={cardImg}
            width={18}
            height={18}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Outputs;
