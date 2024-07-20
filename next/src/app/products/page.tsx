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
} from "@/store/features/ProductsThunk";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/types/IProduct";
import Sidebar from "@/components/layouts/sidebar";
import { checkMe } from "@/store/features/AuthThunk";
// import { useRouter } from "next/router";
import Pagination from "@/components/Pagination/Pagination";

const page = () => {
  const { isAuth } = useAppSelector((state) => state.auth);
  const { tablet, createModal, changeModal, deleteModal, productsLimit } =
    useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  // const router = useRouter();

  // if (!isAuth) {
  //   router.push("/");
  // }

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
            productsLimit?.map((item: IProduct) => (
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
            productsLimit?.map((item: IProduct) => (
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
