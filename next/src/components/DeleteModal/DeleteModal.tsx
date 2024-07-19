import React from "react";
import Image from "next/image";
import lampImg from "@/images/jpg/big.jpg";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import {
  deleteProduct,
  setContinueDelete,
  setDeleteModal,
} from "@/store/reducers/ProductsSlice";
import { useAppSelector } from "@/hooks/useAppSelector";

const DeleteModal = () => {
  const { continueDelete, deletingId } = useAppSelector(
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
    dispatch(deleteProduct(deletingId));
  };
  console.log(deletingId);

  return (
    <div className=" w-[340px] rounded-[10px] bg-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
      {!continueDelete && (
        <div className="py-[16px] px-[10px] flex flex-col gap-[20px]">
          <div className="self-center">
            <Image src={lampImg} width={224} height={224} alt="" />
          </div>

          <h1 className="text-center">Лампа</h1>

          <p>Количество: 12</p>
          <p>Цена: 12.57 р</p>
          <p>Производитель: Ламповый завод</p>

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
