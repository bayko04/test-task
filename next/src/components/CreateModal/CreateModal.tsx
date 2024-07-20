import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useForm } from "react-hook-form";
import { createProduct, setCreateModal } from "@/store/reducers/ProductsSlice";
import React, { useEffect } from "react";
import { useAppSelector } from "@/hooks/useAppSelector";
import Image from "next/image";
import sendFileImg from "@/images/svg/sendFile.svg";
import { useState, FC } from "react";

const CreateModal: FC = () => {
  const { manufacturers, createProductData } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  const { register, handleSubmit } = useForm({});

  const onSubmit = (data: any) => {
    dispatch(createProduct(data));
  };

  const [fileName, setFileName] = useState<any>("");
  const handleFileChange = (event: any) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  console.log(createProductData);

  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff]  py-[16px] px-[10px] w-[340px] flex flex-col gap-[20px]">
      <div className="">
        <h2 className="text-[24px] text-center">Создание товара</h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[20px]"
          action=""
        >
          <div className="">
            <label className="block" htmlFor="">
              Название
            </label>
            <input
              {...register("name")}
              className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
              placeholder="Название"
              type="text"
            />
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Количество
            </label>
            <input
              {...register("quantity")}
              className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
              placeholder="Количество"
              type="text"
            />
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Цена
            </label>
            <input
              {...register("price")}
              className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
              placeholder="Цена"
              type="text"
            />
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Производитель
            </label>
            <select
              {...register("manufacturerId", { required: "Выберите компанию" })}
              className={`bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px] text-[#11182766] `}
            >
              <option value="">Компания</option>
              {manufacturers.map((item: any) => (
                <option className="text-[black]" key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
          <div className="">
            <label className="block" htmlFor="">
              Фото
            </label>
            <div className="relative">
              <input
                {...register("image")}
                className="bg-[#1118271F] absolute cursor-pointer top-0 left-0 w-[100%] h-[85px] rounded-[6px] h-[30px] pl-[10px] opacity-0"
                placeholder="Фото"
                type="file"
                onChange={handleFileChange}
              />

              <label
                htmlFor="file-input"
                className="flex flex-col items-center justify-center py-[10px] px-[20px] rounded-[5px]"
              >
                {fileName ? fileName : "Загрузить фото"}
                <Image
                  src={sendFileImg}
                  width={21}
                  height={18}
                  alt="Upload Icon"
                  className="mt-[10px]"
                />{" "}
              </label>
            </div>
          </div>
          <div className="flex justify-end gap-[10px]">
            <button
              onClick={() => dispatch(setCreateModal(false))}
              className="py-[10px] px-[25px] text-[#fff] bg-[#404040] rounded-[6px]"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="py-[10px] px-[25px] bg-[#CBD5E1] rounded-[6px]"
            >
              Создать
            </button>
          </div>
        </form>
      </div>

      {/* {created && (
        <div className="">
          <h2 className="text-center">Товар успешно создан</h2>
          <div className="text-center underline">
            <button
              onClick={() => {
                dispatch(setCreateModal(false));
                dispatch(setCreated());
              }}
              className=""
            >
              Закрыть
            </button>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default CreateModal;
