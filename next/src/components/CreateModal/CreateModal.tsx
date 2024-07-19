import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useForm } from "react-hook-form";
import { createProduct, setCreateModal } from "@/store/reducers/ProductsSlice";
import React from "react";
import { useAppSelector } from "@/hooks/useAppSelector";

const CreateModal = () => {
  const { createProductData } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();

  const { register, handleSubmit, watch, reset } = useForm({
    // defaultValues: {
    //   name: 'Количество',
    //   quantity: 'Цена',
    //   manufacturerId: 'Производитель',
    //   price: price,
    // },
  });

  const watchedValues = watch();

  const onSubmit = (data: any) => {
    dispatch(createProduct(data));
  };

  console.log(watchedValues);
  console.log(createProductData);

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff]  py-[16px] px-[10px] w-[340px] flex flex-col gap-[20px]">
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
          <input
            {...register("manufacturerId")}
            className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
            placeholder="Компания"
            type="text"
          />
        </div>
        <div className="">
          <label className="block" htmlFor="">
            Фото
          </label>
          <input
            {...register("image")}
            className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
            placeholder="Фото"
            type="file"
          />
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
  );
};

export default CreateModal;
