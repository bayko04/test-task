import Image from "next/image";
import { FC } from "react";
import changeImg from "@/images/svg/change.svg";
import binImg from "@/images/svg/bin.svg";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  setChangeModal,
  setChangingData,
  setDeleteModal,
  setDeletingData,
  setDeletingId,
} from "@/store/reducers/ProductsSlice";
import { IProduct } from "@/types/IProduct";

const TableItem: FC<IProduct> = ({
  name,
  quantity,
  price,
  photoUrl,
  id,
  manufacturerId,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-[100%] py-[12px] ">
      <ul className="grid gap-[130px] grid-cols-6">
        <li className="w-[56px]  h-[56px] relative">
          <Image className="rounded-[6px]" src={photoUrl} fill alt="" />
        </li>
        <li>{name}</li>
        <li>{quantity}</li>
        <li>{manufacturerId}</li>
        <li>{price}р</li>
        <li className="grid grid-cols-2">
          <Image
            onClick={() => {
              dispatch(setChangeModal(true));
              dispatch(
                setChangingData({
                  name: name,
                  quantity,
                  price,
                  photoUrl,
                  id,
                  manufacturerId,
                })
              );
            }}
            className="cursor-pointer"
            src={changeImg}
            width={20}
            height={20}
            alt=""
          />
          <Image
            onClick={() => {
              dispatch(setDeleteModal(true));
              dispatch(setDeletingId(id));
              dispatch(
                setDeletingData({
                  name: name,
                  quantity,
                  price,
                  photoUrl,
                  id,
                  manufacturerId,
                })
              );
            }}
            className="cursor-pointer"
            src={binImg}
            width={18}
            height={21}
            alt=""
          />
        </li>
      </ul>
    </div>
  );
};

export default TableItem;
