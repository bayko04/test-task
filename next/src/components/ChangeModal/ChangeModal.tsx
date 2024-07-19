import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  setChangeModal,
  updateProductTh,
} from "@/store/reducers/ProductsSlice";
import Image from "next/image";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

interface ProductFormData {
  name: string;
  quantity: string;
  price: string;
  manufacturerId: string;
  image?: FileList;
}

const ChangeModal: React.FC = () => {
  const { changingData, data, error } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset, watch } = useForm<ProductFormData>({
    defaultValues: {
      name: changingData?.name || "",
      quantity: changingData?.quantity || "",
      price: changingData?.price || "",
      manufacturerId: changingData?.manufacturerId || "",
      image: undefined,
    },
  });

  const onSubmit: SubmitHandler<ProductFormData> = (data) => {
    dispatch(updateProductTh(data));
  };

  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] py-[16px] px-[10px] w-[340px] flex flex-col gap-[20px]">
      <h2 className="text-[24px] text-center">Редактирование товара</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-[20px]"
      >
        <div>
          <label className="block" htmlFor="name">
            Название
          </label>
          <input
            id="name"
            {...register("name")}
            className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
            placeholder={changingData?.name || "Введите название"}
            type="text"
          />
        </div>
        <div>
          <label className="block" htmlFor="quantity">
            Количество
          </label>
          <input
            id="quantity"
            {...register("quantity")}
            className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
            placeholder={changingData?.quantity || "Введите количество"}
            type="text"
          />
        </div>
        <div>
          <label className="block" htmlFor="price">
            Цена
          </label>
          <input
            id="price"
            {...register("price")}
            className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
            placeholder={changingData?.price || "Введите цену"}
            type="text"
          />
        </div>
        <div>
          <label className="block" htmlFor="manufacturerId">
            Производитель
          </label>
          <input
            id="manufacturerId"
            {...register("manufacturerId")}
            className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
            placeholder={
              changingData?.manufacturerId || "Введите производителя"
            }
            type="text"
          />
        </div>
        <div>
          <label className="block" htmlFor="image">
            Фото
          </label>
          {/* <input
            id="image"
            {...register("image")}
            className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
            placeholder="Фото"
            type="file"
          /> */}
          <Image
            src={changingData.photoUrl || "/default-image.png"}
            width={56}
            height={56}
            alt="Фото товара"
          />
        </div>

        <div className="flex justify-end gap-[10px]">
          <button
            type="button"
            onClick={() => dispatch(setChangeModal(false))}
            className="py-[10px] px-[25px] text-[#fff] bg-[#404040] rounded-[6px]"
          >
            Отмена
          </button>
          <button
            type="submit"
            className="py-[10px] px-[25px] bg-[#CBD5E1] rounded-[6px]"
          >
            Сохранить
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangeModal;
