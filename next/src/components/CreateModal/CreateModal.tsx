import React from "react";

const CreateModal = () => {
  return (
    <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-[#fff]  py-[16px] px-[10px] w-[340px] flex flex-col gap-[20px]">
      <h2 className="text-[24px] text-center">Создание товара</h2>

      <form className="flex flex-col gap-[20px]" action="">
        <div className="">
          <label className="block" htmlFor="">
            Название
          </label>
          <input
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
            className="bg-[#1118271F] w-[100%] rounded-[6px] h-[30px] pl-[10px]"
            placeholder="Фото"
            type="text"
          />
        </div>
      </form>

      <div className="flex justify-end gap-[10px]">
        <button className="py-[10px] px-[25px] text-[#fff] bg-[#404040] rounded-[6px]">
          Отмена
        </button>
        <button className="py-[10px] px-[25px] bg-[#CBD5E1] rounded-[6px]">
          Создать
        </button>
      </div>
    </div>
  );
};

export default CreateModal;
