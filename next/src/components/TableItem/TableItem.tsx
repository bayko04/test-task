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
import { IItem } from "@/types/IItem";

const TableItem: FC<IItem> = ({
  name,
  quantity,
  price,
  photoUrl,
  id,
  manufacturerId,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div className="w-[100%] py-[12px] px-[10px]">
      <ul className="flex gap-[130px] items-center justify-between">
        <li className="flex-[0_0_56px] h-[56px] relative">
          <Image className="rounded-[6px]" src={photoUrl} fill alt="" />
        </li>
        <li className="flex-[0_0_250px]">{name}</li>
        <li className="flex-[0_0_25px]">{quantity}</li>
        <li className="flex-[0_0_10px]">{manufacturerId}</li>
        <li className="flex-[0_0_70px]">{price}р</li>
        <li className="flex gap-[10px]">
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
