import React from "react";
import Search from "../Search/Search";
import Outputs from "../Outputs/Outputs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { openCreateModal } from "@/store/reducers/ProductsSlice";

const Panel = () => {
  const { createModal } = useSelector((state: any) => state.products);
  const dispatch = useDispatch<any>();

  return (
    <div className="products mt-[50px]">
      <div className="container">
        <div className="flex items-center justify-between ">
          <Search />

          <div className="flex gap-[16px]">
            <Outputs />
            <div className="">
              <button
                onClick={() => dispatch(openCreateModal(true))}
                className="bg-[#CBD5E1] rounded-[6px] px-[25px] py-[10px]"
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
