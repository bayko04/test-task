"use client";

import Card from "@/components/Card/Card";
import ChangeModal from "@/components/ChangeModal/ChangeModal";
import CreateModal from "@/components/CreateModal/CreateModal";
import DeleteModal from "@/components/DeleteModal/DeleteModal";
import Panel from "@/components/Panel/Panel";
import TableItem from "@/components/TableItem/TableItem";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import {
  getAllProducts,
  getLimitProducts,
  getManufacturers,
  setTablet,
} from "@/store/reducers/ProductsSlice";
import React, { useEffect, useState } from "react";
import { IItem } from "@/types/IItem";
import Sidebar from "@/components/layouts/sidebar";
import { checkMe } from "@/store/features/AuthThunk";
import Pagination from "@/components/Pagination/Pagination";

const page = () => {
  const {
    tablet,
    createModal,
    changeModal,
    deleteModal,
    products,
    productsLimit,
    deleteProductMess,
  } = useAppSelector((state) => state.products);
  const { data } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkMe());
    dispatch(getAllProducts());
    dispatch(getManufacturers());
    dispatch(getLimitProducts({ page: 1 }));
  }, []);

  return (
    <div className="">
      <Sidebar />
      <div className="container">
        <Panel />
        <div className="">
          <ul className="flex gap-[130px]">
            <li className="flex-[0_0_56px]">Фото</li>
            <li className="flex-[0_0_200px]">Название</li>
            <li className="flex-[0_0_25px]">Количество</li>
            <li className="flex-[0_0_10px]">Производитель</li>
            <li className="flex-[0_0_70px]">Цена</li>
          </ul>
          {tablet &&
            productsLimit?.map((item: IItem) => (
              <TableItem
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
                manufacturerId={item.manufacturerId}
                photoUrl={item.photoUrl}
              />
            ))}
        </div>
        <div className="grid grid-cols-4">
          {!tablet &&
            productsLimit?.map((item: IItem) => (
              <Card
                key={item.id}
                name={item.name}
                price={item.price}
                quantity={item.quantity}
                id={item.id}
                manufacturerId={item.manufacturerId}
                photoUrl={item.photoUrl}
              />
            ))}
        </div>
        {createModal && <CreateModal />}
        {changeModal && <ChangeModal />}
        {deleteModal && <DeleteModal />}

        <Pagination />
      </div>
    </div>
  );
};

export default page;
