import React, { FC } from "react";
import Search from "../Search/Search";
import Outputs from "../Outputs/Outputs";
import { useDispatch } from "react-redux";
import { setCreateModal } from "@/store/reducers/ProductsSlice";

const Panel: FC = () => {
  const dispatch = useDispatch<any>();

  return (
    <div className="products mt-[50px] mb-[75px]">
      <div className="container">
        <div className="flex items-center justify-between ">
          <Search />

          <div className="flex gap-[16px]">
            <Outputs />
            <div className="">
              <button
                onClick={() => dispatch(setCreateModal(true))}
                className="bg-[#CBD5E1] rounded-[6px] px-[25px] py-[10px] hover:bg-[#94A3B8]"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Panel;
