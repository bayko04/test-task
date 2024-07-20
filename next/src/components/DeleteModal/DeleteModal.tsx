import React, { FC } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  setContinueDelete,
  setDeleteModal,
} from "@/store/reducers/ProductsSlice";
import {
  deleteProduct,
  getLimitProducts,
} from "@/store/features/ProductsThunk";
import { useAppSelector } from "@/hooks/useAppSelector";

const DeleteModal: FC = () => {
  const { continueDelete, deletingId, deletingData } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  const handleContinue = () => {
    dispatch(setContinueDelete(true));
  };

  const handleCancel = () => {
    dispatch(setContinueDelete(false));
    dispatch(setDeleteModal(false));
  };

  const handleDelete = () => {
    dispatch(deleteProduct({ id: deletingId }));
    dispatch(getLimitProducts({ page: 1 }));
    dispatch(setContinueDelete(false));
    dispatch(setDeleteModal(false));
  };

  return (
    <div className="fixed w-[340px] rounded-[10px] bg-[#fff] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      {!continueDelete && (
        <div className="py-[16px] px-[10px] flex flex-col gap-[20px]">
          <div className="self-center">
            <Image
              src={deletingData.photoUrl}
              width={224}
              height={224}
              alt=""
            />
          </div>

          <h1 className="text-center leading-[25px]">{deletingData.name}</h1>

          <p>Количество: {deletingData.quantity}</p>
          <p>Цена: {deletingData.price} р</p>
          <p>Производитель: {deletingData.manufacturerId}</p>

          <div className="self-end flex gap-[10px]">
            <button
              onClick={handleCancel}
              className="py-[10px] px-[25px] text-[#fff] bg-[#404040] rounded-[6px]"
            >
              Отменить
            </button>

            <button
              onClick={handleContinue}
              className="py-[10px] px-[25px] bg-[#CBD5E1] rounded-[6px]"
            >
              Удалить
            </button>
          </div>
        </div>
      )}

      {/* continue delete */}
      {continueDelete && (
        <div className="p-[15px] flex flex-col gap-[35px]">
          <h2>Вы действительно хотите удалить товар?</h2>
          <div className="justify-end flex gap-[10px]">
            <button
              onClick={handleCancel}
              className="py-[10px] px-[25px] text-[#fff] bg-[#404040] rounded-[6px]"
            >
              Отменить
            </button>
            <button
              onClick={handleDelete}
              className="py-[10px] px-[25px] bg-[#CBD5E1] rounded-[6px]"
            >
              Удалить
            </button>
          </div>{" "}
        </div>
      )}
    </div>
  );
};

export default DeleteModal;
