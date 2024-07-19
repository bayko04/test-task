import { FC } from "react";
import bigImg from "@/images/jpg/big.jpg";
import Image from "next/image";
import { IItem } from "@/types/IItem";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { setDeleteModal, setDeletingId } from "@/store/reducers/ProductsSlice";

const Card: FC<IItem> = ({
  name,
  quantity,
  price,
  photoUrl,
  id,
  manufacturerId,
}) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        dispatch(setDeletingId(id));
        dispatch(setDeleteModal(true));
      }}
      className="flex flex-col items-center w-[224px] gap-[5px] cursor-pointer"
    >
      {/* image */}
      <div className="">
        <Image src={photoUrl} width={224} height={224} alt="" />
      </div>
      {/* content */}
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
