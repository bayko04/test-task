import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  getLimitProducts,
  updateProductTh,
} from "@/store/features/ProductsThunk";
import { setChangeModal } from "@/store/reducers/ProductsSlice";
import Image from "next/image";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { IProductFormData } from "@/types/IProductFormData";
import sendFileImg from "@/images/svg/sendFile.svg";
import { IManufacturer } from "@/types/IManufacturer";

const ChangeModal: FC = () => {
  const [removeImg, setRemoveImg] = useState<boolean>(false);
  const { changingData, data, error, manufacturers } = useAppSelector(
    (state) => state.products
  );
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { dirtyFields },
  } = useForm<any>({
    defaultValues: {
      name: changingData?.name || "",
      quantity: changingData?.quantity || "",
      price: changingData?.price || "",
      manufacturerId: changingData?.manufacturerId || "",
      image: changingData?.photoUrl,
    },
  });

  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (event: any) => {
    if (event.target.files.length > 0) {
      setFileName(event.target.files[0].name);
    }
  };

  const onSubmit: SubmitHandler<IProductFormData> = (data) => {
    const updatedData = Object.fromEntries(
      Object.entries(data).filter(([key]) => dirtyFields[key])
    );
    if (data.image) {
      updatedData.image = data.image[0];
    }
    const id = changingData.id;
    dispatch(updateProductTh({ updatedData, id }));
    dispatch(getLimitProducts({ page: 1 }));
  };

  return (
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff] py-[16px] px-[10px] w-[340px] flex flex-col gap-[20px]">
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
            placeholder={changingData?.name}
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
            placeholder={changingData?.quantity}
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
            placeholder={changingData?.price}
            type="text"
          />
        </div>
        <div>
          <label className="block" htmlFor="manufacturerId">
            Производитель
          </label>
          <select
            {...register("manufacturerId", { required: "Выберите компанию" })}
            className={`bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px] text-[#11182766] `}
          >
            <option value="">Компания</option>
            {manufacturers.map((item: IManufacturer) => (
              <option className="text-[black]" key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block" htmlFor="image">
            Фото
          </label>
          {!removeImg && (
            <div className="flex justify-between">
              <Image
                src={changingData.photoUrl}
                width={56}
                height={56}
                alt="Фото товара"
              />
              <p
                className={`text-[12px] flex-[0_0_200px] break-all text-[#4B5563] `}
              >
                {changingData.photoUrl}
                <button
                  onClick={() => setRemoveImg(true)}
                  className="w-[13px] h-[13px] after-inp-change"
                ></button>
              </p>
            </div>
          )}
          {removeImg && (
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
          )}
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
