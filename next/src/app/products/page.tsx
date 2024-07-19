"use client";

import Card from "@/components/Card/Card";
import ChangeModal from "@/components/ChangeModal/ChangeModal";
import CreateModal from "@/components/CreateModal/CreateModal";
import DeleteModal from "@/components/DeleteModal/DeleteModal";
import Panel from "@/components/Panel/Panel";
import TableItem from "@/components/TableItem/TableItem";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { getAllProducts, setTablet } from "@/store/reducers/ProductsSlice";
import React, { useEffect, useState } from "react";
import { IItem } from "@/types/IItem";
import Sidebar from "@/components/layouts/sidebar";
import { checkMe } from "@/store/reducers/AuthSlice";

const page = () => {
  const {
    tablet,
    createModal,
    changeModal,
    deleteModal,
    products,
    deleteProductMess,
  } = useAppSelector((state) => state.products);
  const { data } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkMe());
  }, []);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="">
      <div className="container">
        <Panel />
        {tablet &&
          products?.map((item: IItem) => (
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
        <div className="grid grid-cols-4">
          {!tablet &&
            products?.map((item: IItem) => (
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
      </div>
    </div>
  );
};

export default page;
