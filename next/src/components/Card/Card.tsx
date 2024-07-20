import { FC } from "react";
import Image from "next/image";
import { IItem } from "@/types/IItem";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  setDeleteModal,
  setDeletingData,
  setDeletingId,
} from "@/store/reducers/ProductsSlice";

const Card: FC<IItem> = ({
  name,
  quantity,
  price,
  photoUrl,
  id,
  manufacturerId,
}) => {
  const dispatch = useAppDispatch();

  const handleDelete = (): void => {
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
  };

  return (
    <div
      onClick={handleDelete}
      className="flex flex-col items-center w-[224px] gap-[5px] cursor-pointer"
    >
      <div className="">
        <Image src={photoUrl} width={224} height={224} alt="" />
      </div>

      <h5 className="text-center">{name}</h5>
      <p className="">{manufacturerId}</p>
      <div className="flex items-center justify-between w-[100%]">
        <p className="">{quantity} шт</p>
        <p className="">{price} р</p>
      </div>
    </div>
  );
};

export default Card;
